import { useState } from 'react';
import styles from './Dashboard.module.css';

// Import View Tabs
import Habits from './Habits';
import Planner from './Planner';
import Timer from './Timer';
import Analytics from './Analytics';
import Settings from './Settings';

const profileAvatar =
  "data:image/svg+xml;charset=utf-8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="88" height="88" viewBox="0 0 88 88">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#4941dc"/>
          <stop offset="100%" stop-color="#520799"/>
        </linearGradient>
      </defs>
      <rect width="88" height="88" rx="44" fill="url(#g)"/>
      <text x="44" y="45" dy="0.35em" text-anchor="middle"
        font-family="Inter, system-ui, sans-serif" font-size="34" font-weight="800"
        fill="#ffffff">SK</text>
    </svg>`
  );

const handleAvatarError = (event) => {
  event.currentTarget.onerror = null;
  event.currentTarget.src =
    "data:image/svg+xml;charset=utf-8," +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="88" height="88" viewBox="0 0 88 88">
        <rect width="88" height="88" rx="44" fill="#1e293b"/>
        <text x="44" y="45" dy="0.35em" text-anchor="middle"
          font-family="Inter, system-ui, sans-serif" font-size="30" font-weight="800"
          fill="#64748b">?</text>
      </svg>`
    );
};

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className={styles.appContainer}>
      
      {/* SIDEBAR NAVIGATION */}
      <aside className={styles.sidebar}>
        <div>
          {/* Header Profile Info */}
          <div className={styles.sidebarHeader}>
            <img src={profileAvatar} alt="Salman Khan" className={styles.avatar} onError={handleAvatarError} />
            <div>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 800, margin: 0, color: '#ffffff' }}>Salman Khan</h3>
              <span style={{ fontSize: '0.65rem', color: '#06b6d4', textTransform: 'uppercase', fontFamily: 'monospace' }}>
                Software Engineer
              </span>
            </div>
          </div>

          {/* Nav Buttons */}
          <nav className={styles.navMenu}>
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`${styles.navButton} ${activeTab === 'dashboard' ? styles.activeNav : ''}`}
            >
              <span>⚡</span> Dashboard
            </button>
            <button
              onClick={() => setActiveTab('habits')}
              className={`${styles.navButton} ${activeTab === 'habits' ? styles.activeNav : ''}`}
            >
              <span>🔥</span> Coding Routines
            </button>
            <button
              onClick={() => setActiveTab('planner')}
              className={`${styles.navButton} ${activeTab === 'planner' ? styles.activeNav : ''}`}
            >
              <span>📋</span> Sprint Planner
            </button>
            <button
              onClick={() => setActiveTab('timer')}
              className={`${styles.navButton} ${activeTab === 'timer' ? styles.activeNav : ''}`}
            >
              <span>⏱️</span> Deep Focus Timer
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`${styles.navButton} ${activeTab === 'analytics' ? styles.activeNav : ''}`}
            >
              <span>📊</span> Dev Insights
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`${styles.navButton} ${activeTab === 'settings' ? styles.activeNav : ''}`}
            >
              <span>⚙️</span> Settings
            </button>
          </nav>
        </div>

        <div style={{ fontSize: '0.75rem', color: '#64748b', textAlign: 'center' }}>
          DevFlow v2.0 • CS Space
        </div>
      </aside>

      {/* MAIN WORKSPACE AREA */}
      <main className={styles.mainContent}>
        
        {/* Top Header Bar */}
        <div className={styles.topBar}>
          <div>
            <h1 className={styles.pageTitle}>
              {activeTab === 'dashboard' && 'Dashboard Overview'}
              {activeTab === 'habits' && 'Habits & Daily Routines'}
              {activeTab === 'planner' && 'Sprint Task Planner'}
              {activeTab === 'timer' && 'Deep Focus Timer'}
              {activeTab === 'analytics' && 'Dev Insights & Analytics'}
              {activeTab === 'settings' && 'Workspace Settings'}
            </h1>
            <p className={styles.pageSubtitle}>Welcome back, Salman. Real-time engineering metrics.</p>
          </div>

          <div className={styles.topBarActions}>
            <button onClick={() => setActiveTab('timer')} className={styles.focusBtn}>
              ⚡ Focus Session
            </button>
          </div>
        </div>

        {/* Dynamic Section Switcher */}
        {activeTab === 'dashboard' && (
          <div>
            {/* Hero Banner */}
            <div className={styles.heroBanner}>
              <div>
                <span className={styles.sprintTag}>● ACTIVE SPRINT • WEEK 4</span>
                <h2 style={{ fontSize: '1.75rem', fontWeight: 800, margin: '0.5rem 0 0' }}>Good morning, Salman.</h2>
                <p style={{ fontSize: '0.8rem', color: '#cbd5e1', margin: '0.25rem 0 0' }}>
                  You completed 3 of 6 daily goals. Streak is at 12 days!
                </p>
              </div>
            </div>

            {/* Metric Grid */}
            <div className={styles.cardsGrid}>
              <div className={styles.card}>
                <span className={styles.cardTitle}>Habits Completed</span>
                <div className={styles.cardValue}>2 / 4</div>
              </div>
              <div className={styles.card}>
                <span className={styles.cardTitle}>Tasks Due Today</span>
                <div className={styles.cardValue}>1 / 4</div>
              </div>
              <div className={styles.card}>
                <span className={styles.cardTitle}>Focus Sessions</span>
                <div className={styles.cardValue}>4 Sessions</div>
              </div>
              <div className={styles.card}>
                <span className={styles.cardTitle}>Weekly Consistency</span>
                <div className={styles.cardValue}>92%</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'habits' && <Habits />}
        {activeTab === 'planner' && <Planner />}
        {activeTab === 'timer' && <Timer />}
        {activeTab === 'analytics' && <Analytics styles={styles} />}
        {activeTab === 'settings' && <Settings />}

      </main>
    </div>
  );
}