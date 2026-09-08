import styles from "./BookScene.module.css";

export default function BookScene() {
  return (
    <section className={styles.scene}>
      <div className={styles.glow}></div>

      <div className={`${styles.paper} ${styles.paperOne}`}></div>
      <div className={`${styles.paper} ${styles.paperTwo}`}></div>
      <div className={`${styles.paper} ${styles.paperThree}`}></div>

      <span className={`${styles.spark} ${styles.sparkOne}`}>✦</span>
      <span className={`${styles.spark} ${styles.sparkTwo}`}>✧</span>
      <span className={`${styles.spark} ${styles.sparkThree}`}>✦</span>

      <div className={styles.book}>
        <div className={`${styles.page} ${styles.leftPage}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={styles.spine}></div>

        <div className={`${styles.page} ${styles.rightPage}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className={styles.text}>
        <p>LUMORA</p>
        <h1>Every idea begins with a page.</h1>
      </div>
    </section>
  );
}