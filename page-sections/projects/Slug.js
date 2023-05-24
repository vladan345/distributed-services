import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/section-css/projects/Slug.module.css";

function Slug() {
  const router = useRouter();
  let path = router.asPath.split("/");
  path = path.filter((string) => string != "");

  return (
    <div className={styles.Slug}>
      <div className="container">
        {path &&
          path.map((slug, index) => {
            if (index != path.length - 1) {
              return (
                <Link
                  href="/projects"
                  key={index}
                  className={styles.singleLink}
                >
                  {slug}
                  <Image
                    src="/arrow-blue-right.svg"
                    alt="arrow icon"
                    width={15}
                    height={13}
                  />
                </Link>
              );
            } else {
              return (
                <span className={styles.singleLink} key={index}>
                  {slug}
                </span>
              );
            }
          })}
      </div>
    </div>
  );
}

export default Slug;
