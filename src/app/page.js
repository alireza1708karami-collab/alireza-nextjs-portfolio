import Link from "next/link";
import styles from "./page.module.css";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import BookScene from "@/components/BookScene";

export default function Home() {
  return (
    <>
      <BookScene />

      <main className={styles.hero}>
        <p className={styles.label}>
          TECHNOLOGY • ACADEMIC SUPPORT • FRAGRANCE
        </p>

        <h1 className={styles.title}>
          Ideas brought to life under one light.
        </h1>

        <p className={styles.description}>
          Lumora brings together digital solutions, academic guidance and
          carefully selected fragrances to help people build, grow and express
          themselves.
        </p>

        <div className={styles.actions}>
          <Link href="/services" className={styles.primaryButton}>
            Explore Services
          </Link>

          <Link href="/contact" className={styles.secondaryButton}>
            Start a Request
          </Link>
        </div>
      </main>

      <Services />
      <Projects />
    </>
  );
}