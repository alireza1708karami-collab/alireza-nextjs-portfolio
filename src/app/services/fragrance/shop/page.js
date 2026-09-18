import Link from "next/link";
import styles from "./shop.module.css";

const collections = {
  all: "All Fragrances",
  niche: "Niche Perfumes",
  designer: "Designer Fragrances",
  "middle-eastern": "Middle Eastern Perfumery",
  inspired: "Inspired Alternatives",
};

export default async function ShopPage({ searchParams }) {
  const params = await searchParams;
  const activeCollection = params?.collection || "all";

  const collectionTitle =
    collections[activeCollection] || collections.all;

  return (
    <main className={styles.shop}>
      <section className={styles.hero}>
        <p className={styles.label}>LUMORA FRAGRANCE SHOP</p>
        <h1>{collectionTitle}</h1>

        <p className={styles.description}>
          Explore carefully selected fragrances and discover a scent that
          matches your personality, style and occasion.
        </p>
      </section>

      <nav className={styles.filters} aria-label="Fragrance collections">
        {Object.entries(collections).map(([slug, title]) => (
          <Link
            key={slug}
            href={
              slug === "all"
                ? "/services/fragrance/shop"
                : `/services/fragrance/shop?collection=${slug}`
            }
            className={
              activeCollection === slug
                ? `${styles.filter} ${styles.activeFilter}`
                : styles.filter
            }
          >
            {title}
          </Link>
        ))}
      </nav>

      <section className={styles.productArea}>
        <div className={styles.emptyState}>
          <span>COMING SOON</span>
          <h2>Our fragrance collection is being prepared.</h2>

          <p>
            Product images, prices, sizes and availability will appear here
            once the Lumora collection is ready.
          </p>

          <div className={styles.actions}>
            <Link href="/contact" className={styles.primaryButton}>
              Request a recommendation
            </Link>

            <Link
              href="/services/fragrance"
              className={styles.secondaryButton}
            >
              Back to Fragrance
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}