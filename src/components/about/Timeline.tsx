import { timelineEvents } from '@/data/about';
import styles from './styles/Timeline.module.css';
 
export default function Timeline() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Community History</h2>
        </div>
 
        <div className={styles.timeline}>
          {timelineEvents.map((event, i) => (
            <div
              key={i}
              className={`${styles.item} ${event.milestone ? styles.milestone : ''}`}
            >
              <div className={styles.datePill}>
                <span className={styles.month}>{event.month}</span>
                <span className={styles.year}>{event.year}</span>
              </div>
 
              <div className={styles.connector}>
                <div className={styles.dot} />
                {i < timelineEvents.length - 1 && <div className={styles.line} />}
              </div>
 
              <div className={styles.card}>
                {event.milestone && (
                  <span className={styles.milestoneBadge}>★ Milestone</span>
                )}
                <h3 className={styles.cardTitle}>{event.title}</h3>
                <p className={styles.cardText}>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}