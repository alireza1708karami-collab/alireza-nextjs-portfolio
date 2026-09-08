"use client";

import { useState } from "react";
import styles from "./about.module.css";

const values = [
  {
    title: "Clear Communication",
    description:
      "We explain every step clearly and keep clients informed throughout the project.",
  },
  {
    title: "Practical Solutions",
    description:
      "We focus on useful solutions that address real needs and produce meaningful results.",
  },
  {
    title: "Honest Guidance",
    description:
      "We provide realistic recommendations, transparent communication and responsible support.",
  },
  {
    title: "Attention to Detail",
    description:
      "Every detail is reviewed carefully to deliver polished and dependable work.",
  },
  {
    title: "Personalized Service",
    description:
      "Every client has different goals, so our services are adapted to their individual needs.",
  },
  {
    title: "Continuous Improvement",
    description:
      "We continue learning, testing and improving to provide better services over time.",
  },
];

export default function AboutPage() {
  const [selectedValue, setSelectedValue] = useState(null);

  return (
    <main className={styles.about}>
      <p className={styles.label}>ABOUT LUMORA</p>

      <h1 className={styles.title}>
        Different ideas. One thoughtful direction.
      </h1>

      <p className={styles.description}>
        Lumora is an independent multidisciplinary service platform combining
        technology, academic guidance and fragrance. We help individuals,
        students and growing businesses turn their goals into clear and
        practical results.
      </p>

      <p className={styles.description}>
        Depending on the project, Lumora works with trusted collaborators who
        bring experience across computer science and engineering. Every request
        begins with understanding the client&apos;s needs before recommending
        the right solution.
      </p>

      <h2 className={styles.skillsTitle}>What We Value</h2>

      <div className={styles.skills}>
        {values.map((value) => (
          <button
            type="button"
            key={value.title}
            className={`${styles.skill} ${
              selectedValue?.title === value.title ? styles.activeSkill : ""
            }`}
            onClick={() => setSelectedValue(value)}
          >
            {value.title}
          </button>
        ))}
      </div>

      <div className={styles.valueDetails}>
        {selectedValue ? (
          <>
            <h3>{selectedValue.title}</h3>
            <p>{selectedValue.description}</p>
          </>
        ) : (
          <p>Click on a value to learn more about it.</p>
        )}
      </div>
    </main>
  );
}