import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <h2 className={styles.title}>
          Have something interesting to build?
        </h2>

        <Link href="/contact" className={styles.button}>
          Get in touch
        </Link>
      </div>

      <p className={styles.copyright}>
        <p>© 2026 Lumora. All rights reserved.</p>
          Technology • Academic Support • Fragrance</p>
    </footer>
      

  );
}