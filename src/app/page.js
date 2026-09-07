import Link from "next/link";
import styles from "./page.module.css";
import Projects from"@/components/Projects";
import Services from "@/components/Services";
import SolarSystem from "@/components/SolarSystem";

export default function Home() {
  return (

    <>
      <SolarSystem />

    <main className={styles.hero}>
      <p className={styles.label}>
        Computer Science • Web Development • AI
      </p>

      <h1 className={styles.title}>
        Building digital experiences with purpose.
      </h1>

      <p className={styles.description}>
        I am Alireza, a Computer Science student building modern
        websites, useful applications and AI-powered projects.
      </p>

      <div className={styles.actions}>
        <Link href="/about" className={styles.primaryButton}>
          About Me
        </Link>

        <a href="#projects" className={styles.secondaryButton}>
          View Projects
        </a>
      </div>
      <Projects />
      <Services />
    </main>
    </>
  );
}