import events from '@/data/events';
import EventCard from './EventCard';
import styles from './styles/Events.module.css';

export default function Events() {
  return (
    <section id="events" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Upcoming</p>
          <h2 className={styles.title}>Community Events</h2>
          <p className={styles.subtitle}>
            Creative subtitle here
          </p>
        </div>

        <div className={styles.grid}>
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        <div className={styles.footer}>
          <p className={styles.footerText}>
            Want to host an event? <a href="https://discord.gg/avatar" className={styles.footerLink}>Join the community</a> and pitch your idea.
          </p>
        </div>
      </div>
    </section>
  );
}