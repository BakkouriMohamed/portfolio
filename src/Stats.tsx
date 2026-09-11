import { STATS, useLang } from "./i18n";

export function Stats() {
  const { t } = useLang();

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {STATS.map((stat, index) => (
            <div key={stat.number + stat.fr} className="reveal" style={{ transitionDelay: `${index * 0.1}s` }}>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{t(stat.fr, stat.en)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
