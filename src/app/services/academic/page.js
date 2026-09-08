import Link from "next/link";
import styles from "../serviceDetails.module.css";

const academicServices = [
  "CV and Resume Improvement",
  "Statement of Purpose Guidance",
  "Cover Letter Writing",
  "LinkedIn Profile Improvement",
  "University Application Guidance",
  "Academic Project Mentoring",
  "Assignment Guidance and Tutoring",
  "Presentation and Report Review",
];

export default function AcademicPage() {
  return (
    <main className={styles.page}>
      <p className={styles.label}>LUMORA SERVICES</p>
      <h1 className={styles.title}>Lumora Academic</h1>

      <p className={styles.description}>
        Personalized guidance for students and professionals preparing for
        university or job applications.
      </p>

      <ul className={styles.list}>
        {academicServices.map((service) => (
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