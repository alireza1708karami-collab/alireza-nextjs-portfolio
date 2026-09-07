import styles from "./Projects.module.css";

const projects = [
  {
    id: 1,
    title: "Personal Portfolio",
    description: "A modern portfolio built with Next.js.",
    technology: "Next.js",
  },
  {
    id: 2,
    title: "AI Healthcare Dashboard",
    description: "A dashboard for analyzing healthcare data.",
    technology: "AI and Data Science",
  },
  {
    id: 3,
    title: "Task Manager",
    description: "An application for managing daily tasks.",
    technology: "React",
  },
];

export default function Projects() {

    return (
  <section id="projects" className={styles.projects}>
    <p className={styles.label}>Selected work</p>

    <h2 className={styles.title}>
      Projects I have built
    </h2>

    <div className={styles.grid}>
      {projects.map((project) => (
        <article key={project.id} className={styles.card}>
          <p className={styles.technology}>
            {project.technology}
          </p>

          <h3 className={styles.cardTitle}>
            {project.title}
          </h3>

          <p className={styles.description}>
            {project.description}
          </p>
        </article>
      ))}
    </div>
  </section>
);
}