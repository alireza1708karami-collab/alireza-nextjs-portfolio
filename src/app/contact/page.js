"use client";

import { useState } from "react";
import styles from "./contact.module.css";

export default function ContactPage() {
  const [status, setStatus] = useState("");

async function handleSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const formData = new FormData(form);

  setStatus("Sending your request...");

  try {
    const response = await fetch("https://formspree.io/f/mljeovag", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("Thank you! Your request has been sent successfully.");
      form.reset();

      if (response.ok) {
  setStatus("Thank you! Your request has been sent successfully.");
  form.reset();

  
  setTimeout(() => {
    setStatus("");
  }, 8000);
}
    } else {
      setStatus("Something went wrong. Please try again.");
    }
  } catch (error) {
    setStatus("Something went wrong. Please try again.");
  }
}
  return (
    <main className={styles.contact}>
      <div className={styles.backgroundGlow}></div>

      <section className={styles.introduction}>
        <p className={styles.label}>GET IN TOUCH</p>

        <h1 className={styles.title}>
          Let&apos;s bring your idea to light.
        </h1>

        <p className={styles.description}>
          Tell us what you need and choose the Lumora service that matches your
          goal. We will review your request and discuss the next steps with you.
        </p>

        <div className={styles.information}>
          <div className={styles.infoCard}>
            <span>01</span>
            <div>
              <h2>Choose a service</h2>
              <p>Select technology, academic support or fragrance.</p>
            </div>
          </div>

          <div className={styles.infoCard}>
            <span>02</span>
            <div>
              <h2>Describe your request</h2>
              <p>Share the important details, goals and expected timeline.</p>
            </div>
          </div>

          <div className={styles.infoCard}>
            <span>03</span>
            <div>
              <h2>Receive a response</h2>
              <p>We will review your request and discuss the suitable solution.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.formCard}>
        <p className={styles.formLabel}>START A REQUEST</p>
        <h2>Tell us about your idea</h2>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label htmlFor="name">Your name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="service">Select a service</label>
            <select id="service" name="service" defaultValue="" required>
              <option value="" disabled>
                Choose a Lumora service
              </option>
              <option value="Lumora Tech">Lumora Tech</option>
              <option value="Lumora Academic">Lumora Academic</option>
              <option value="Lumora Fragrance">Lumora Fragrance</option>
            </select>
          </div>

          <div className={styles.field}>
            <label htmlFor="message">Your message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Tell us about your request, goal and timeline"
              required
            />
          </div>

          <button type="submit">Send Request</button>

          {status && <p className={styles.success}>{status}</p>}
        </form>
      </section>
    </main>
  );
}