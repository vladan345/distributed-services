import styles from "../../styles/section-css/rikas/Restaurants.module.css";
import Image from "next/image";
import Link from "next/link";

function Restaurants() {
  return (
    <div className={styles.Restaurants}>
      {/* Lacantine */}
      <div className={`${styles.row} ${styles.lacantine}`}>
        <div className={styles.col}>
          <div className={styles.textBoxL}>
            <h4>La Cantine du Faubourg</h4>
            <p className={styles.desc}>
              Ut erat scelerisque lacus massa. Ac diam in a cras at sagittis
              orci. Mus fames suspendisse arcu iaculis id sed condimentum.
              Condimentum nunc justo nunc ut tellus nisi. Integer velit diam
              maecenas purus. Gravida risus id sed sit tempor. Amet volutpat
              aenean nec quis cras bibendum. Amet nec porttitor semper augue
              lectus orci scelerisque.
            </p>
            <Link href="#" className={styles.cta}>
              <p>Go to website</p>
              <Image
                src="/images/single-project/green-arrow-right-sm.svg"
                width={39}
                height={32}
                alt="arrow icon"
                className={styles.arrow}
              />
            </Link>
          </div>
        </div>
        <div className={styles.col}>
          <Image
            src="/images/single-project/rikas/rikas1.webp"
            alt=""
            width={800}
            height={600}
            layout="responsive"
            style={{ maxWidth: "800px" }}
          />
        </div>
      </div>

      {/* Twiggy */}
      <div className="container">
        <div className={`${styles.row} ${styles.twiggy}`}>
          <div className={styles.col}>
            <Image
              src="/images/single-project/rikas/rikas2.webp"
              alt=""
              width={640}
              height={760}
              layout="responsive"
              style={{ maxWidth: "640px" }}
            />
          </div>
          <div className={styles.col}>
            <div className={styles.textBoxR}>
              <h4>Twiggy</h4>
              <p className={styles.desc}>
                Volutpat dictumst risus nisl adipiscing non. Penatibus commodo
                vel eget neque consectetur morbi odio facilisis. Congue rutrum
                integer turpis vulputate integer at vitae in quis. Nisi gravida
                cursus et mattis. Ac pulvinar sodales adipiscing nec elit nibh.
                Purus bibendum facilisi sit rhoncus tellus egestas.
              </p>
              <Link href="#" className={styles.cta}>
                <p>Go to website</p>
                <Image
                  src="/images/single-project/green-arrow-right-sm.svg"
                  width={39}
                  height={32}
                  alt="arrow icon"
                  className={styles.arrow}
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Lana Lusa */}
        <div className={`${styles.row} ${styles.lanalusa}`}>
          <div className={styles.col}>
            <div className={styles.textBoxR}>
              <h4>Lana Lusa</h4>
              <p className={styles.desc}>
                At velit velit urna elementum congue pharetra a. Urna nec
                viverra aliquam cras dolor id pellentesque elit. Orci gravida in
                est at et quam metus. Placerat volutpat tempus scelerisque orci
                sapien tristique amet ultrices. Id quis metus dolor in. Vitae
                pharetra eu aliquam orci. Et nulla elementum mauris amet massa.
                Sed rhoncus enim scelerisque.
              </p>
              <Link href="#" className={styles.cta}>
                <p>Go to website</p>
                <Image
                  src="/images/single-project/green-arrow-right-sm.svg"
                  width={39}
                  height={32}
                  alt="arrow icon"
                  className={styles.arrow}
                />
              </Link>
            </div>
          </div>
          <div className={styles.col}>
            <Image
              src="/images/single-project/rikas/rikas3.webp"
              alt=""
              width={640}
              height={760}
              layout="responsive"
              style={{ maxWidth: "640px" }}
            />
          </div>
        </div>
      </div>

      <div className={styles.banner}>
        <h4>
          Feugiat euismod mattis gravida mi aliquet cursus. Vulputate lacinia
          pharetra eu morbi risus. Sed sem fames leo est vel. Vitae mi nunc
          ultricies auctor ac vel non hac eu.
        </h4>
      </div>

      <div className="container">
        {/* Madeleine & Gohan */}
        <div className={`${styles.row} ${styles.marcelGohan}`}>
          <div className={styles.col}>
            <Image
              src="/images/single-project/rikas/rikas4.webp"
              alt=""
              width={720}
              height={600}
              layout="responsive"
              style={{ maxWidth: "720px" }}
            />
            <h4>Madeleine et Marcel</h4>
            <p className={styles.desc}>
              Volutpat dictumst risus nisl adipiscing non. Penatibus commodo vel
              eget neque consectetur morbi odio facilisis. Congue rutrum integer
              turpis vulputate integer at vitae in quis. Nisi gravida cursus et
              mattis. Ac pulvinar sodales adipiscing nec elit nibh. Purus
              bibendum facilisi sit rhoncus tellus egestas.
            </p>
            <Link href="#" className={styles.cta}>
              <p>Go to website</p>
              <Image
                src="/images/single-project/green-arrow-right-sm.svg"
                width={39}
                height={32}
                alt="arrow icon"
                className={styles.arrow}
              />
            </Link>
          </div>
          <div className={styles.col}>
            <Image
              src="/images/single-project/rikas/rikas5.webp"
              alt=""
              width={720}
              height={600}
              layout="responsive"
              style={{ maxWidth: "720px" }}
            />
            <h4>Gohan</h4>
            <p className={styles.desc}>
              Nibh elementum dui imperdiet mauris nunc ac non nibh cras.
              Fermentum quis lacinia odio ipsum. Viverra maecenas vulputate sed
              morbi risus. Vitae dapibus faucibus in et adipiscing ac odio nibh.
              Massa pellentesque vitae dolor eu. Pulvinar tristique pretium
              semper pellentesque a. Morbi sed suscipit egestas tortor ac duis
              ut rhoncus.
            </p>
            <Link href="#" className={styles.cta}>
              <p>Go to website</p>
              <Image
                src="/images/single-project/green-arrow-right-sm.svg"
                width={39}
                height={32}
                alt="arrow icon"
                className={styles.arrow}
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Ninive */}
      <div className={`${styles.row} ${styles.ninive}`}>
        <div className={styles.col}>
          <Image
            src="/images/single-project/rikas/rikas6.webp"
            alt=""
            width={800}
            height={600}
            layout="responsive"
            style={{ maxWidth: "800px" }}
          />
        </div>
        <div className={styles.col}>
          <div className={styles.textBoxR}>
            <h4>Niniveg</h4>
            <p className={styles.desc}>
              Ut erat scelerisque lacus massa. Ac diam in a cras at sagittis
              orci. Mus fames suspendisse arcu iaculis id sed condimentum.
              Condimentum nunc justo nunc ut tellus nisi. Integer velit diam
              maecenas purus. Gravida risus id sed sit tempor. Amet volutpat
              aenean nec quis cras bibendum. Amet nec porttitor semper augue
              lectus orci scelerisque.
            </p>
            <Link href="#" className={styles.cta}>
              <p>Go to website</p>
              <Image
                src="/images/single-project/green-arrow-right-sm.svg"
                width={39}
                height={32}
                alt="arrow icon"
                className={styles.arrow}
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Mimi Kakushi */}
        <div className={`${styles.row} ${styles.lanalusa}`}>
          <div className={styles.col}>
            <div className={styles.textBoxR}>
              <h4>Mimi Kakushi</h4>
              <p className={styles.desc}>
                At velit velit urna elementum congue pharetra a. Urna nec
                viverra aliquam cras dolor id pellentesque elit. Orci gravida in
                est at et quam metus. Placerat volutpat tempus scelerisque orci
                sapien tristique amet ultrices. Id quis metus dolor in. Vitae
                pharetra eu aliquam orci. Et nulla elementum mauris amet massa.
                Sed rhoncus enim scelerisque.
              </p>
              <Link href="#" className={styles.cta}>
                <p>Go to website</p>
                <Image
                  src="/images/single-project/green-arrow-right-sm.svg"
                  width={39}
                  height={32}
                  alt="arrow icon"
                  className={styles.arrow}
                />
              </Link>
            </div>
          </div>
          <div className={styles.col}>
            <Image
              src="/images/single-project/rikas/rikas7.webp"
              alt=""
              width={640}
              height={760}
              layout="responsive"
              style={{ maxWidth: "640px" }}
            />
          </div>
        </div>

        {/* Kyma Beach */}
        <div className={`${styles.row} ${styles.twiggy}`}>
          <div className={styles.col}>
            <Image
              src="/images/single-project/rikas/rikas8.webp"
              alt=""
              width={640}
              height={760}
              layout="responsive"
              style={{ maxWidth: "640px" }}
            />
          </div>
          <div className={styles.col}>
            <div className={styles.textBoxR}>
              <h4>Kyma Beach</h4>
              <p className={styles.desc}>
                Volutpat dictumst risus nisl adipiscing non. Penatibus commodo
                vel eget neque consectetur morbi odio facilisis. Congue rutrum
                integer turpis vulputate integer at vitae in quis. Nisi gravida
                cursus et mattis. Ac pulvinar sodales adipiscing nec elit nibh.
                Purus bibendum facilisi sit rhoncus tellus egestas.
              </p>
              <Link href="#" className={styles.cta}>
                <p>Go to website</p>
                <Image
                  src="/images/single-project/green-arrow-right-sm.svg"
                  width={39}
                  height={32}
                  alt="arrow icon"
                  className={styles.arrow}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.sandBackground}>
        <div className="container">
          {/* Tagomago & Chez Wam */}
          <div className={`${styles.row} ${styles.tagomagoWam}`}>
            <div className={styles.col}>
              <Image
                src="/images/single-project/rikas/rikas9.webp"
                alt=""
                width={720}
                height={600}
                layout="responsive"
                style={{ maxWidth: "720px" }}
              />
              <h4>Tagomago</h4>
              <p className={styles.desc}>
                Volutpat dictumst risus nisl adipiscing non. Penatibus commodo
                vel eget neque consectetur morbi odio facilisis. Congue rutrum
                integer turpis vulputate integer at vitae in quis. Nisi gravida
                cursus et mattis. Ac pulvinar sodales adipiscing nec elit nibh.
                Purus bibendum facilisi sit rhoncus tellus egestas.
              </p>
              <Link href="#" className={styles.cta}>
                <p>Go to website</p>
                <Image
                  src="/images/single-project/green-arrow-right-sm.svg"
                  width={39}
                  height={32}
                  alt="arrow icon"
                  className={styles.arrow}
                />
              </Link>
            </div>
            <div className={styles.col}>
              <Image
                src="/images/single-project/rikas/rikas10.webp"
                alt=""
                width={720}
                height={600}
                layout="responsive"
                style={{ maxWidth: "720px" }}
              />
              <h4>Chez Wam</h4>
              <p className={styles.desc}>
                Nibh elementum dui imperdiet mauris nunc ac non nibh cras.
                Fermentum quis lacinia odio ipsum. Viverra maecenas vulputate
                sed morbi risus. Vitae dapibus faucibus in et adipiscing ac odio
                nibh. Massa pellentesque vitae dolor eu. Pulvinar tristique
                pretium semper pellentesque a. Morbi sed suscipit egestas tortor
                ac duis ut rhoncus.
              </p>
              <Link href="#" className={styles.cta}>
                <p>Go to website</p>
                <Image
                  src="/images/single-project/green-arrow-right-sm.svg"
                  width={39}
                  height={32}
                  alt="arrow icon"
                  className={styles.arrow}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Restaurants;
