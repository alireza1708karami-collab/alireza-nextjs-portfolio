"use client";

import { useState } from "react";
import styles from "./contact.module.css";

export default function ContactPage() {
  const [status, setStatus] = useState("");

  function handleSubmit(event) {
    // جلوگیری از Refresh شدن صفحه
    event.preventDefault();

    // دریافت اطلاعات فرم
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");

    // نمایش پیام موفقیت
    setStatus(`Thank you ${name}! Your message is ready.`);

    // خالی‌کردن فرم
    event.currentTarget.reset();
  }

  return (
    <main className={styles.contact}>
      <p className={styles.label}>Get in touch</p>

      <h1 className={styles.title}>
        Have something to build?
      </h1>

      <p className={styles.description}>
        Send me a message and let&apos;s discuss your idea.
      </p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Your name"
          required
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Your email"
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="6"
          placeholder="Tell me about your project"
          required
        />

        <button type="submit">Send Message</button>

        {status && (
          <p className={styles.success}>
            {status}
          </p>
        )}
      </form>
    </main>
  );
}