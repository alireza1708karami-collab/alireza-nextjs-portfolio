import Link from "next/link";
import styles from "./Services.module.css";

const services = [
  {
    number: "01",
    name: "Lumora Tech",
    description:
      "Web development, programming support, debugging and practical engineering solutions.",
    href: "/services/tech",
  },
  {
    number: "02",
    name: "Lumora Academic",
    description:
      "Professional guidance for CVs, SOPs, applications and academic projects.",
    href: "/services/academic",
  },
  {
    number: "03",
    name: "Lumora Fragrance",
    description:
      "Original perfumes, personal recommendations and fragrances selected for every occasion.",
    href: "/services/fragrance",
  },
];

export default function Services() {
  return (
    <section className={styles.services}>
      <div className={styles.heading}>
        <div>
          <p className={styles.label}>WHAT WE DO</p>
          <h2 className={styles.title}>
            Three paths. One Lumora experience.
          </h2>
        </div>

        <p className={styles.introduction}>
          Explore services designed around technology, academic growth and
          personal expression.
        </p>
      </div>

      <div className={styles.grid}>
        {services.map((service) => (
          <article className={styles.card} key={service.name}>
            <div className={styles.cardTop}>
              <span className={styles.number}>{service.number}</span>
              <span className={styles.symbol}>✦</span>
            </div>

            <div>
              <h3 className={styles.cardTitle}>{service.name}</h3>
              <p className={styles.description}>{service.description}</p>
            </div>

            <Link href={service.href} className={styles.link}>
              Explore service <span>→</span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}