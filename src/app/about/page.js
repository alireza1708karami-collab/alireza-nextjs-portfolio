import styles from "./about.module.css";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Python",
  "Data Science",
  "Artificial Intelligence",
];

export default function AboutPage() {
  return (
    <main className={styles.about}>
      <p className={styles.label}>About me</p>

      <h1 className={styles.title}>
        Learning, building and solving real problems.
      </h1>

      <p className={styles.description}>
        My name is Alireza. I am a Computer Science student interested
        in web development, data science and artificial intelligence.
        My goal is to build useful digital products and continuously
        improve my problem-solving skills.
      </p>

      <h2 className={styles.skillsTitle}>My Skills</h2>

      <div className={styles.skills}>
        {skills.map((skill) => (
          <span key={skill} className={styles.skill}>
            {skill}
          </span>
        ))}
      </div>
    </main>
  );
}