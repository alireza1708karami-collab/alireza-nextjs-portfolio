import styles from "./Services.module.css";


export default function Services() {
  return (
    <section className={styles.services}>
      <p className={styles.label}>What I do</p>

      <h2 className={styles.title}>Services and skills</h2>

      <div className={styles.grid}>
        <article className={styles.card}>
          <h3 className={styles.cardTitle}>Web Development</h3>
          <p className={styles.description}>
            Building modern and responsive websites with React and Next.js.
          </p>
        </article>

        <article className={styles.card}>
          <h3 className={styles.cardTitle}>AI Applications</h3>
          <p className={styles.description}>
            Creating useful applications powered by artificial intelligence.
          </p>
        </article>

        <article className={styles.card}>
          <h3 className={styles.cardTitle}>Data Analysis</h3>
          <p className={styles.description}>
            Analyzing data and turning it into meaningful information.
          </p>
        </article>
      </div>
    </section>
  );
}