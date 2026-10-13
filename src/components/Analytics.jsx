export default function Analytics({ styles }) {
  const chartData = [
    { day: 'Mon', height: '60%' },
    { day: 'Tue', height: '85%' },
    { day: 'Wed', height: '45%' },
    { day: 'Thu', height: '90%' },
    { day: 'Fri', height: '80%' },
    { day: 'Sat', height: '50%' },
    { day: 'Sun', height: '35%' },
  ];

  return (
    <div className={styles.chartContainer}>
      <h3 style={{ fontSize: '0.95rem', fontWeight: 700, margin: 0 }}>Weekly Focus Hours Breakdown</h3>
      <div className={styles.barWrapper}>
        {chartData.map((item, i) => (
          <div key={i} className={styles.chartBar} style={{ height: item.height }}>
            {item.day}
          </div>
        ))}
      </div>
    </div>
  );
}