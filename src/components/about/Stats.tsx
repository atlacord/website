import styles from './styles/Stats.module.css';

const stats = [
    { value: '8',       label: 'Years Running'      },
    { value: '45,000+', label: 'Community Members'  },
    { value: '500+',    label: 'Events Hosted'      },
];

export default function Stats() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {stats.map((s, i) => (
          <div key={i} className={styles.stat}>
            <span className={styles.value}>{s.value}</span>
            <span className={styles.label}>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}