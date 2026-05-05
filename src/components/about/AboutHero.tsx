import styles from './styles/AboutHero.module.css';
 
export default function AboutHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bgGrid} aria-hidden />
      <div className={styles.bgGlow} aria-hidden />
 
      <div className={styles.content}>
        <a href="/" className={styles.back}>← Back to Home</a>
        <p className={styles.eyebrow}>Our Story</p>
        <h1 className={styles.title}>
          Born from a shared<br />
          <span className={styles.accent}>love of a world</span>
        </h1>
        <p className={styles.subtitle}>
          The Four Nations didn't start with a grand plan. It started with a few fans,
          a Discord server, and an unshakeable belief that Avatar: The Last Airbender
          is one of the greatest stories ever told. Here's how we got here.
        </p>
      </div>
 
      <div className={styles.divider} aria-hidden>
        <span>〜</span>
        <span>⬡</span>
        <span>△</span>
        <span>◎</span>
      </div>
    </section>
  );
}