import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        ALIREZA
      </Link>

      <div className={styles.links}>
        <Link href="/" className={styles.link}>
          Home
        </Link>

    

        <Link href="/about" className={styles.link}>
          About
        </Link>

        <Link href="/contact" className={styles.contact}>
          Get in touch
        </Link>
      </div>
    </nav>
  );
}
