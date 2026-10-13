import { useState } from 'react';
import styles from './Dashboard.module.css';

export default function Planner() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Review PR for System Architecture Module', done: false, category: 'Backend' },
    { id: 2, text: 'Solve 2 LeetCode Hard Problems', done: false, category: 'DSA' }
  ]);
  const [input, setInput] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTasks([{ id: Date.now(), text: input, done: false, category: 'Work' }, ...tasks]);
    setInput('');
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  return (
    <div>
      <form onSubmit={addTask} style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
        <input
          type="text"
          placeholder="What needs to be done today?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            flex: 1,
            background: '#0f172a',
            border: '1px solid #1e293b',
            padding: '0.75rem 1rem',
            borderRadius: '12px',
            color: '#fff',
            fontSize: '0.875rem'
          }}
        />
        <button type="submit" className={styles.focusBtn}>Add Task</button>
      </form>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {tasks.map(task => (
          <div
            key={task.id}
            onClick={() => toggleTask(task.id)}
            style={{
              background: 'rgba(15, 23, 42, 0.8)',
              border: '1px solid #1e293b',
              padding: '1rem',
              borderRadius: '12px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              cursor: 'pointer'
            }}
          >
            <span style={{ textDecoration: task.done ? 'line-through' : 'none', opacity: task.done ? 0.5 : 1, fontSize: '0.875rem' }}>
              {task.text}
            </span>
            <span style={{ fontSize: '0.65rem', background: 'rgba(99, 102, 241, 0.2)', color: '#818cf8', padding: '0.25rem 0.5rem', borderRadius: '6px' }}>
              {task.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}