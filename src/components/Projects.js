import Link from "next/link";
import styles from "./Projects.module.css";

const solutions = [
  {
    number: "01",
    category: "TECHNOLOGY",
    title: "Digital Solutions",
    description:
      "Modern websites, programming support, debugging and practical technical solutions.",
    href: "/services/tech",
  },
  {
    number: "02",
    category: "ACADEMIC",
    title: "Academic Support",
    description:
      "Professional guidance for CVs, SOPs, university applications and academic projects.",
    href: "/services/academic",
  },
  {
    number: "03",
    category: "FRAGRANCE",
    title: "Fragrance Selection",
    description:
      "Original perfumes, personal recommendations and carefully selected fragrances.",
    href: "/services/fragrance",
  },
];

export default function Projects() {
  return (
    <section className={styles.projects}>
      <p className={styles.label}>HOW WE CAN HELP</p>

      <div className={styles.heading}>
        <h2>Solutions shaped around your needs.</h2>

        <p>
          From digital projects and academic goals to finding the right
          fragrance, Lumora provides clear and personalized support.
        </p>
      </div>

      <div className={styles.grid}>
        {solutions.map((solution) => (
          <Link
            href={solution.href}
            className={styles.card}
            key={solution.title}
          >
            <div className={styles.cardTop}>
              <span>{solution.number}</span>
              <span className={styles.arrow}>↗</span>
            </div>

            <div>
              <p className={styles.category}>{solution.category}</p>
              <h3>{solution.title}</h3>
              <p className={styles.description}>{solution.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}