import styles from "@/styles/section-css/outsourcing/Nodes.module.css";
import Lottie from "lottie-react";
import nodes from "./nodes.json";

function Nodes() {
  const interactivity = {
    mode: "scroll",
    actions: [
      {
        visibility: [0.15, 0.55],
        type: "seek",
        frames: [0, 125],
      },
    ],
  };
  return (
    <div className={styles.Nodes}>
      <div className={styles.textRow}>
        <div className="container">
          <h2>Your Handpicked Team is Customised to Suit Your Needs</h2>
          <div className={styles.textBoxes}>
            <p className={styles.subheading}>
              You can count on us to be your one-stop-shop for all the talent
              you need.
            </p>
            <div className={styles.col}>
              <p className={styles.paragraphs}>
                Every one of our clients is unique, and so it is important to
                assemble a unique team to fit around our client&apos;s vision,
                and to deliver the best possible outcome.
              </p>
              <p className={styles.paragraphs}>
                Each newly assembled team is handpicked by us, and will address
                our client&apos;s needs.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.lottieWrapper}>
        <Lottie
          interactivity={interactivity}
          animationData={nodes}
          className={styles.scratch}
        ></Lottie>
      </div>
    </div>
  );
}

export default Nodes;
