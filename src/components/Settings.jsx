import styles from './Dashboard.module.css';

export default function Settings() {
  return (
    <div className={styles.card}>
      <h3 style={{ fontSize: '1rem', margin: 0 }}>Workspace Settings</h3>
      <p style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '0.5rem' }}>
        Theme mode: Dark Obsidian (Active)
      </p>
    </div>
  );
}