import styles from './Dashboard.module.css';

export default function Habits() {
  return (
    <div className={styles.cardsGrid}>
      <div className={styles.card}>
        <h3 style={{ fontSize: '0.9rem', margin: 0 }}>Solve 2 LeetCode Problems</h3>
        <p style={{ fontSize: '0.75rem', color: '#f59e0b', marginTop: '0.25rem' }}>🔥 12 Day Streak</p>
      </div>
      <div className={styles.card}>
        <h3 style={{ fontSize: '0.9rem', margin: 0 }}>Code / Build Project (1hr)</h3>
        <p style={{ fontSize: '0.75rem', color: '#f59e0b', marginTop: '0.25rem' }}>🔥 8 Day Streak</p>
      </div>
    </div>
  );
}