import { useState, useEffect } from 'react';
import styles from './Dashboard.module.css';

const MODE_MINUTES = { pomodoro: 25, short: 5, long: 15 };

export default function Timer() {
  const [secondsLeft, setSecondsLeft] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState('pomodoro');

  const running = isActive && secondsLeft > 0;

  useEffect(() => {
    if (!running) return;
    const interval = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [running]);

  useEffect(() => {
    if (secondsLeft === 0) {
      alert('Focus session completed!');
    }
  }, [secondsLeft]);

  const switchMode = (newMode, minutes) => {
    setMode(newMode);
    setIsActive(false);
    setSecondsLeft(minutes * 60);
  };

  const formatTime = () => {
    const m = Math.floor(secondsLeft / 60).toString().padStart(2, '0');
    const s = (secondsLeft % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <div className={styles.timerCard}>
      <h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Focus Timer</h2>
      
      <div style={{ margin: '1.5rem 0' }}>
        <button
          onClick={() => switchMode('pomodoro', 25)}
          className={`${styles.modeBtn} ${mode === 'pomodoro' ? styles.activeModeBtn : ''}`}
        >
          Pomodoro (25m)
        </button>
        <button
          onClick={() => switchMode('short', 5)}
          className={`${styles.modeBtn} ${mode === 'short' ? styles.activeModeBtn : ''}`}
        >
          Short Break (5m)
        </button>
        <button
          onClick={() => switchMode('long', 15)}
          className={`${styles.modeBtn} ${mode === 'long' ? styles.activeModeBtn : ''}`}
        >
          Long Break (15m)
        </button>
      </div>

      <div className={styles.timerDisplay}>{formatTime()}</div>

      <div>
        <button
          onClick={() => {
            if (running) {
              setIsActive(false);
            } else {
              if (secondsLeft === 0) {
                setSecondsLeft(MODE_MINUTES[mode] * 60);
              }
              setIsActive(true);
            }
          }}
          className={styles.focusBtn}
          style={{ padding: '0.75rem 2rem', fontSize: '0.875rem' }}
        >
          {running ? 'Pause' : 'Start Session'}
        </button>
        <button
          onClick={() => { setIsActive(false); setSecondsLeft(MODE_MINUTES[mode] * 60); }}
          className={styles.modeBtn}
          style={{ marginLeft: '0.5rem', padding: '0.75rem 1.5rem' }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}