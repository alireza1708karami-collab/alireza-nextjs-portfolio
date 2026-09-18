import Link from "next/link";
import styles from "./fragrance.module.css";

const collections = [
  {
    number: "01",
    title: "Niche Perfumes",
    description:
      "Distinctive fragrances created with artistic compositions and exceptional ingredients.",
    brands: "Parfums de Marly • Maison Francis Kurkdjian • Xerjoff • Creed",
    slug: "niche",
  },
  {
    number: "02",
    title: "Designer Fragrances",
    description:
      "Iconic and modern fragrances from internationally recognized fashion houses.",
    brands: "Chanel • Dior • Tom Ford • Gucci • Prada • Armani",
    slug: "designer",
  },
  {
    number: "03",
    title: "Middle Eastern Perfumery",
    description:
      "Rich compositions built around oud, amber, musk and traditional perfumery.",
    brands: "Arabian Oud • Amouage • Lattafa • Rasasi • Afnan",
    slug: "middle-eastern",
  },
  {
    number: "04",
    title: "Inspired Alternatives",
    description:
      "Accessible fragrances offering familiar scent profiles with their own identity.",
    brands: "Armaf • Afnan • French Avenue • Lattafa",
    slug: "inspired",
  },
];

export default function FragrancePage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.label}>LUMORA FRAGRANCE</p>

          <h1>
            Find a fragrance that feels
            <span> unmistakably yours.</span>
          </h1>

          <p className={styles.description}>
            Explore authentic designer, niche and Middle Eastern fragrances
            selected for different personalities, seasons and occasions.
          </p>

          <div className={styles.actions}>
            <Link href="#collections" className={styles.primaryButton}>
              Explore collections
            </Link>

            <Link href="/contact" className={styles.secondaryButton}>
              Get a recommendation
            </Link>
          </div>
        </div>

        <aside className={styles.heroCard}>
          <p>THE LUMORA EDIT</p>
          <h2>Curated with intention.</h2>
          <span>
            From quiet everyday scents to powerful evening fragrances, every
            selection has a purpose.
          </span>

          <div className={styles.heroDetails}>
            <div>
              <strong>Authentic</strong>
              <small>Carefully sourced</small>
            </div>

            <div>
              <strong>Personal</strong>
              <small>Selected for you</small>
            </div>
          </div>
        </aside>
      </section>

      <section className={styles.collections} id="collections">
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.label}>SHOP BY COLLECTION</p>
            <h2>A fragrance for every character.</h2>
          </div>

          <p>
            Browse our fragrance families and discover the collection that
            matches your taste.
          </p>
        </div>

        <div className={styles.collectionGrid}>
          {collections.map((collection) => (
            <article className={styles.collectionCard} key={collection.slug}>
              <span className={styles.number}>{collection.number}</span>

              <h3>{collection.title}</h3>
              <p>{collection.description}</p>

              <small>{collection.brands}</small>

              <Link
                href={`/services/fragrance/shop?collection=${collection.slug}`}
              >
                View collection →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.promise}>
        <div>
          <p className={styles.label}>THE LUMORA PROMISE</p>
          <h2>More than choosing a bottle.</h2>
        </div>

        <div className={styles.promiseGrid}>
          <article>
            <span>01</span>
            <h3>Authentic Selection</h3>
            <p>Products are clearly presented with their brand and origin.</p>
          </article>

          <article>
            <span>02</span>
            <h3>Personal Guidance</h3>
            <p>Receive suggestions based on your style and preferences.</p>
          </article>

          <article>
            <span>03</span>
            <h3>Clear Information</h3>
            <p>Understand the scent profile, size and performance before ordering.</p>
          </article>
        </div>
      </section>

      <section className={styles.cta}>
        <p>NOT SURE WHERE TO BEGIN?</p>
        <h2>Let us help you discover your next signature scent.</h2>

        <Link href="/contact" className={styles.primaryButton}>
          Request a recommendation
        </Link>
      </section>
    </main>
  );
}