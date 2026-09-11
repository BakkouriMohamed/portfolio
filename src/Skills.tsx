import { SKILLS, TOOLS, useLang } from "./i18n";

export function Skills() {
  const { t } = useLang();

  return (
    <section id="skills" className="section">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="eyebrow reveal">{t("Compétences", "Skills")}</span>
          <h2 className="section-title reveal">
            {t("Des compétences clés pour le digital", "Key skills for the digital world")}
          </h2>
          <hr className="gold-line reveal" style={{ margin: "1.5rem auto" }} />
          <p className="section-subtitle reveal" style={{ margin: "0 auto" }}>
            {t(
              "Des outils et méthodes maîtrisés pour propulser votre présence en ligne.",
              "Mastered tools and methods to boost your online presence.",
            )}
          </p>
        </div>

        <div className="skills-grid">
          {SKILLS.map((skill, index) => (
            <div key={skill.name.fr} className="skill-card reveal" style={{ transitionDelay: `${index * 0.08}s` }}>
              <span style={{ fontSize: "2rem", marginBottom: "1rem", display: "block" }}>{skill.icon}</span>
              <h3
                style={{
                  fontFamily: "var(--font-heading), 'Cormorant Garamond', serif",
                  fontSize: "1.3rem",
                  fontWeight: 600,
                  color: "var(--ink)",
                  marginBottom: "0.6rem",
                }}
              >
                {t(skill.name.fr, skill.name.en)}
              </h3>
              <p style={{ fontSize: "0.88rem", color: "var(--ink-soft)", lineHeight: 1.7, marginBottom: "1rem" }}>
                {t(skill.desc.fr, skill.desc.en)}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {skill.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="reveal" style={{ marginTop: "3rem", textAlign: "center" }}>
          <p
            style={{
              fontSize: "0.82rem",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--ink-muted)",
              marginBottom: "1rem",
            }}
          >
            {t("Outils maîtrisés", "Mastered tools")}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 10 }}>
            {TOOLS.map((tool) => (
              <span key={tool} className="tool-pill">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
