import Link from "next/link";
import styles from "../serviceDetails.module.css";

const techServices = [
  "Website Development",
  "Programming Support",
  "Debugging and Code Review",
  "Engineering Consultation",
];

export default function TechPage() {
  return (
    <main className={styles.page}>
      <p className={styles.label}>LUMORA SERVICES</p>
      <h1 className={styles.title}>Lumora Tech</h1>

      <p className={styles.description}>
        Practical technology and engineering solutions for individuals,
        students and growing businesses.
      </p>

      <ul className={styles.list}>
        {techServices.map((service) => (
          <li className={styles.item} key={service}>
            {service}
          </li>
        ))}
      </ul>

      <Link href="/contact" className={styles.contact}>
        Request a service
      </Link>
    </main>
  );
}