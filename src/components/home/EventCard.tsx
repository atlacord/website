import { Event, Category } from '@/types';
import styles from './styles/EventCard.module.css';

const eventConfig: Record<Category, { label: string, symbol: string }> = {
  music:            { label: 'Listening Party',     symbol: '〜'     },
  movie:            { label: 'Movie Night',         symbol: '⬡'     },
  karaoke:          { label: 'Karaoke',             symbol: '△'     },
  contest:          { label: 'Contest',             symbol: '◎'     },
  avatargames:      { label: 'Avatar Games',        symbol: 'A'      },
  weeklydiscussion: { label: 'Weekly Discussion',   symbol: 'W'      },
};

interface Props {
  event: Event;
}

export default function EventCard({ event }: Props) {
  const category = eventConfig[event.category];
  const pct = Math.round((event.registered / event.capacity) * 100);
  const almostFull = pct >= 80;
   let startingSoon;
  const dateObj = new Date(event.date + `T${event.time}`);

    let time = new Date();
    if ((Math.abs(dateObj - time)) <= 60 * 60 * 1000) {
        startingSoon = true;
    }
  const formattedDate = dateObj.toLocaleDateString('en-US', {
    weekday: 'short', month: 'long', day: 'numeric', year: 'numeric',
  });
  const formattedTime = dateObj.toLocaleDateString('en-US', {
    hour12: true, hour: 'numeric', minute: 'numeric', timeZoneName: 'short'
  });

  return (
    <article className={`${styles.card} category-${event.category}`}>
      <div className={styles.header}>
        <span className={styles.nationBadge}>
          {category.symbol} {category.label}
        </span>
        {startingSoon && <span className={styles.fullBadge}>Starting Soon</span>}
      </div>

      <h3 className={styles.title}>{event.title}</h3>

      <div className={styles.meta}>
        <span>📅 {formattedDate}</span>
        <span>🕐 {formattedTime}</span>
        <span>👤 Hosted by {event.host}</span>
      </div>

      <p className={styles.description}>{event.description}</p>

      <div className={styles.footer}>
        <div className={styles.capacity}>
          <div className={styles.capacityBar}>
            <div
              className={styles.capacityFill}
              style={{ width: `${pct}%` }}
            />
          </div>
          <span className={styles.capacityLabel}>
            {event.registered} members interested
          </span>
        </div>
        <a href="#join" className={styles.rsvp}>RSVP →</a>
      </div>
    </article>
  );
}