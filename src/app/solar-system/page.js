import styles from "./solar-system.module.css";

export default function SolarSystemPage() {
  return (
    <main className={styles.space}>
      <h1 className={styles.title}>Solar System</h1>

      <div className={styles.solarSystem}>
        
        <div className={styles.sun}></div>

        
        <div className={styles.earthOrbit}>
          <div className={styles.earth}></div>
        </div>

        
        <div className={styles.marsOrbit}>
          <div className={styles.mars}></div>
        </div>
      </div>
    </main>
  );
}