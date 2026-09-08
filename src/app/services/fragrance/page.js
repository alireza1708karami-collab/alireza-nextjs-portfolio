import Link from "next/link";
import styles from "../serviceDetails.module.css";

const fragranceServices = [
  "Original and Authentic Perfumes",
  "Personal Fragrance Consultation",
  "Men's and Women's Fragrances",
  "Perfume Recommendations",
  "Luxury and Niche Fragrances",
  "Gift Selection",
  "Seasonal Fragrance Selection",
  "Fragrance Collection",
];

export default function FragrancePage() {
  return (
    <main className={styles.page}>
      <p className={styles.label}>LUMORA SERVICES</p>

      <h1 className={styles.title}>Lumora Fragrance</h1>

      <p className={styles.description}>
        Explore original and authentic perfumes selected for different
        personalities, seasons and special occasions.
      </p>

      <ul className={styles.list}>
        {fragranceServices.map((service) => (
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
 