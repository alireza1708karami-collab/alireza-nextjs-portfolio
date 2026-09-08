import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        LUMORA
      </Link>

      <div className={styles.links}>
        <Link href="/" className={styles.link}>
          Home
        </Link>

        <Link href="/services" className={styles.link}>
          Services
          </Link>

          
        <Link href="/about" className={styles.link}>
          About Lumora
        </Link>

        <Link href="/contact" className={styles.contact}>
          Get in touch
        </Link>
      </div>
    </nav>
  );
}
