import styles from "./services.module.css";
import Link from "next/link";

const services = [
  {
    title: "Lumora Tech",
    description:
      "Web development, programming support, debugging and engineering solutions.",
      href: "/services/tech",
  },
  {
    title: "Lumora Academic",
    description:
      "CV, resume, SOP, cover letter and academic application support.",
      href: "/services/academic",
  },
  {
    title: "Lumora Fragrance",
    description:
      "Carefully selected perfumes and personalized fragrance recommendations.",
      href: "/services/fragrance",
  },
];

export default function ServicesPage() {
  return (
    <main className={styles.page}>
      <p className={styles.label}>WHAT WE DO</p>
      <h1>Services designed around your goals.</h1>
      <p className={styles.intro}>
        From technology and academic applications to fragrance, choose the
        service that fits your needs.
      </p>

      <section className={styles.grid}>
        {services.map((service) => (
          <article className={styles.card} key={service.title}>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <Link href={service.href} className={styles.button}>
                Learn more
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}