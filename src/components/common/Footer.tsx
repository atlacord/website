import styles from './styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.logo}>Avatar Community Network</span>
          <p className={styles.tagline}>The largest Discord communtity for fans of Avatar: The Last Airbender</p>
        </div>

        <nav className={styles.links}>
          <a href="/">Home</a>
          <a href="/#events">Events</a>
          <a href="/about">About</a>
          <a href="/#join">Join Us</a>
        </nav>

        <p className={styles.legal}>
          Fan community. Not affiliated with Nickelodeon or Viacom. Avatar: The Last Airbender™ is property of its respective owners.
        </p>
      </div>
    </footer>
  );
}