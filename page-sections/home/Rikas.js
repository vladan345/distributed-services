import { useRef, useEffect, useState } from "react";
import NextImage from "next/image";
import Link from "next/link";
import styles from "../../styles/section-css/home/Rikas.module.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import {
  Renderer,
  Program,
  Texture,
  Mesh,
  Vec2,
  Flowmap,
  Geometry,
  Vec4,
} from "ogl";

function Rikas() {
  const main = useRef(null);

  useEffect(() => {
    const imgSize = [window.innerWidth, window.innerHeight];

    const vertex = `
					attribute vec2 uv;
					attribute vec2 position;
					varying vec2 vUv;
					void main() {
							vUv = uv;
							gl_Position = vec4(position, 0, 1);
					}
			`;
    const fragment = `
					precision highp float;
					precision highp int;
					uniform sampler2D tWater;
					uniform sampler2D tFlow;
					uniform float uTime;
					varying vec2 vUv;
					uniform vec4 res;
					void main() {
							// R and G values are velocity in the x and y direction
							// B value is the velocity length
							vec3 flow = texture2D(tFlow, vUv).rgb;
							vec2 uv = .5 * gl_FragCoord.xy / res.xy ;
							vec2 myUV = (uv - vec2(0.5))*res.zw + vec2(0.5);
							myUV -= flow.xy * (0.15 * 0.7);
							vec3 tex = texture2D(tWater, myUV).rgb;
							gl_FragColor = vec4(tex.r, tex.g, tex.b, 1.0);
					}
			`;
    {
      const renderer = new Renderer({ dpr: 2 });
      const gl = renderer.gl;
      main.current.appendChild(gl.canvas);

      // Variable inputs to control flowmap
      let aspect = 1;
      const mouse = new Vec2(-1);
      const velocity = new Vec2();
      function resize() {
        let a1, a2;
        var imageAspect = imgSize[1] / imgSize[0];
        if (window.innerHeight / window.innerWidth < imageAspect) {
          a1 = 1;
          a2 = window.innerHeight / window.innerWidth / imageAspect;
        } else {
          a1 = (window.innerWidth / window.innerHeight) * imageAspect;
          a2 = 1;
        }
        mesh.program.uniforms.res.value = new Vec4(
          window.innerWidth,
          window.innerHeight,
          a1,
          a2
        );

        renderer.setSize(window.innerWidth, window.innerHeight);
        aspect = window.innerWidth / window.innerHeight;
      }
      const flowmap = new Flowmap(gl);
      // Triangle that includes -1 to 1 range for 'position', and 0 to 1 range for 'uv'.
      const geometry = new Geometry(gl, {
        position: {
          size: 2,
          data: new Float32Array([-1, -1, 3, -1, -1, 3]),
        },
        uv: { size: 2, data: new Float32Array([0, 0, 2, 0, 0, 2]) },
      });
      const texture = new Texture(gl, {
        minFilter: gl.LINEAR,
        magFilter: gl.LINEAR,
      });
      const img = new Image();
      img.onload = () => (texture.image = img);
      img.crossOrigin = "Anonymous";
      img.src = "/images/home/sand_bgr.jpg";

      let a1, a2;
      var imageAspect = imgSize[1] / imgSize[0];
      if (window.innerHeight / window.innerWidth < imageAspect) {
        a1 = 1;
        a2 = window.innerHeight / window.innerWidth / imageAspect;
      } else {
        a1 = (window.innerWidth / window.innerHeight) * imageAspect;
        a2 = 1;
      }

      const program = new Program(gl, {
        vertex,
        fragment,
        uniforms: {
          uTime: { value: 0 },
          tWater: { value: texture },
          res: {
            value: new Vec4(window.innerWidth, window.innerHeight, a1, a2),
          },
          img: { value: new Vec2(imgSize[0], imgSize[1]) },
          // Note that the uniform is applied without using an object and value property
          // This is because the class alternates this texture between two render targets
          // and updates the value property after each render.
          tFlow: flowmap.uniform,
        },
      });
      const mesh = new Mesh(gl, { geometry, program });

      window.addEventListener("resize", resize, false);
      resize();

      // Create handlers to get mouse position and velocity
      const isTouchCapable = "ontouchstart" in window;
      if (isTouchCapable) {
        window.addEventListener("touchstart", updateMouse, false);
        window.addEventListener("touchmove", updateMouse, { passive: false });
      } else {
        window.addEventListener("mousemove", updateMouse, false);
      }
      let lastTime;
      const lastMouse = new Vec2();
      function updateMouse(e) {
        e.preventDefault();
        if (e.changedTouches && e.changedTouches.length) {
          e.x = e.changedTouches[0].pageX;
          e.y = e.changedTouches[0].pageY;
        }
        if (e.x === undefined) {
          e.x = e.pageX;
          e.y = e.pageY;
        }
        // Get mouse value in 0 to 1 range, with y flipped
        mouse.set(e.x / gl.renderer.width, 1.0 - e.y / gl.renderer.height);
        // Calculate velocity
        if (!lastTime) {
          // First frame
          lastTime = performance.now();
          lastMouse.set(e.x, e.y);
        }

        const deltaX = e.x - lastMouse.x;
        const deltaY = e.y - lastMouse.y;

        lastMouse.set(e.x, e.y);

        let time = performance.now();

        // Avoid dividing by 0
        let delta = Math.max(10.4, time - lastTime);
        lastTime = time;
        velocity.x = deltaX / delta;
        velocity.y = deltaY / delta;
        // Flag update to prevent hanging velocity values when not moving
        velocity.needsUpdate = true;
      }
      requestAnimationFrame(update);
      function update(t) {
        requestAnimationFrame(update);
        // Reset velocity when mouse not moving
        if (!velocity.needsUpdate) {
          mouse.set(-1);
          velocity.set(0);
        }
        velocity.needsUpdate = false;
        // Update flowmap inputs
        flowmap.aspect = aspect;
        flowmap.mouse.copy(mouse);
        // Ease velocity input, slower when fading out
        flowmap.velocity.lerp(velocity, velocity.len ? 0.15 : 0.1);
        flowmap.update();
        program.uniforms.uTime.value = t * 0.01;
        renderer.render({ scene: mesh });
      }
    }

    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".background",
        {
          scrollTrigger: {
            trigger: ".background",
            scrub: true,
          },
          y: -200,
        },
        {
          scrollTrigger: {
            trigger: ".background",
            scrub: true,
          },
          y: 200,
        }
      );
      gsap.to(".left-image", {
        scrollTrigger: {
          trigger: ".left-image",
          scrub: true,
          start: "top bottom",
        },
        y: "60%",
      });
      gsap.to(".left-image", {
        scrollTrigger: {
          trigger: ".left-image",
          scrub: true,
          start: "top bottom",
        },
        y: "60%",
      });
      gsap.fromTo(
        ".right-image",
        {
          scrollTrigger: {
            trigger: ".right-image",
            scrub: true,
          },
          y: 100,
        },
        {
          scrollTrigger: {
            trigger: ".right-image",
            scrub: true,
          },
          y: -200,
        }
      );
    }, main.current);
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section className={styles.Rikas}>
      <div className={styles.featured} ref={main}>
        <div className={`${styles.bg} background`}>
          {/* <NextImage
            fill
            src="/images/home/sand_bgr.jpg"
            alt="sand background"
          /> */}
        </div>
        <h4>Featured project</h4>
        <h1>
          Rikas
          <br />
          Hospitality Group
        </h1>

        <div className={styles.row}>
          <div className={styles.col}>
            <div className="left-image">
              <NextImage
                src="/images/home/home-rikas1.webp"
                alt="Beach image rikas group"
                width={640}
                height={520}
              />
            </div>
          </div>
          <div className={styles.col}>
            <NextImage
              src="/images/home/home-rikas2.webp"
              alt="Beach image rikas group"
              width={400}
              height={520}
            />
            <NextImage
              src="/images/home/rikas-logo.svg"
              alt="Beach image rikas group"
              width={146}
              height={220}
            />
          </div>
          <div className={styles.col}>
            <div className="right-image">
              <p>
                Vestibulum sagittis porttitor proin eleifend vitae. Tincidunt
                odio in dictum eu leo sapien.
              </p>
              <NextImage
                src="/images/home/home-rikas3.webp"
                alt="Beach image rikas group"
                width={600}
                height={680}
              />
            </div>
          </div>
        </div>
        <div className={styles.cta}>
          <Link href="/projects/rikas" className={styles.readMore}>
            <h2>Projects</h2>
            <NextImage
              src="/images/home/white-arrow-right.svg"
              alt="read more"
              width={170}
              height={140}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Rikas;
