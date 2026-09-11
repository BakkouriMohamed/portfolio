import { CERTIFICATIONS, EXPERIENCES, useLang } from "./i18n";

export function Experience() {
  const { t } = useLang();

  return (
    <section id="experience" className="section">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="eyebrow reveal">{t("Parcours", "Journey")}</span>
          <h2 className="section-title reveal">{t("Expériences & Formation", "Experience & Education")}</h2>
          <hr className="gold-line reveal" style={{ margin: "1.5rem auto" }} />
        </div>

        <div className="experience-grid">
          <div>
            <h3
              className="reveal"
              style={{
                fontFamily: "var(--font-heading), 'Cormorant Garamond', serif",
                fontSize: "1.3rem",
                fontWeight: 600,
                color: "var(--ink)",
                marginBottom: "2rem",
              }}
            >
              {t("Expériences professionnelles", "Professional Experience")}
            </h3>
            <div>
              {EXPERIENCES.map((job, index) => (
                <div key={job.title} className="timeline-item reveal" style={{ transitionDelay: `${index * 0.1}s` }}>
                  <span style={{ fontSize: "0.78rem", color: "var(--gold)", fontWeight: 500, display: "block", marginBottom: 6 }}>
                    {job.period}
                  </span>
                  <h4
                    style={{
                      fontFamily: "var(--font-heading), 'Cormorant Garamond', serif",
                      fontSize: "1.2rem",
                      fontWeight: 600,
                      color: "var(--ink)",
                      marginBottom: 4,
                    }}
                  >
                    {job.title}
                  </h4>
                  <p style={{ fontSize: "0.88rem", color: "var(--ink-muted)", marginBottom: 8 }}>
                    {job.company} · {job.location}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: job.result ? 8 : 0 }}>
                    {job.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {job.result ? (
                    <span style={{ fontSize: "0.82rem", fontWeight: 500, color: "#2d7d46" }}>{job.result}</span>
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="reveal" style={{ marginBottom: "2.5rem" }}>
              <h3
                style={{
                  fontFamily: "var(--font-heading), 'Cormorant Garamond', serif",
                  fontSize: "1.3rem",
                  fontWeight: 600,
                  color: "var(--ink)",
                  marginBottom: "1.5rem",
                }}
              >
                {t("Formation", "Education")}
              </h3>
              <div
                className="edu-card"
                style={{ background: "var(--warm-light)", marginBottom: "0.8rem" }}
              >
                <div style={{ fontSize: "0.95rem", fontWeight: 500, color: "var(--ink)", marginBottom: 4 }}>
                  Master 1 — Marketing Digital
                </div>
                <div style={{ fontSize: "0.82rem", color: "var(--ink-muted)" }}>
                  ENCG Fès · 2022 – {t("Présent", "Present")}
                </div>
              </div>
              <div className="edu-card" style={{ background: "var(--warm-light)", marginBottom: "0.8rem" }}>
                <div style={{ fontSize: "0.95rem", fontWeight: 500, color: "var(--ink)", marginBottom: 4 }}>
                  Classes Préparatoires ECS
                </div>
                <div style={{ fontSize: "0.82rem", color: "var(--ink-muted)" }}>
                  {t("Lycée", "High School")} · 2020 – 2022
                </div>
              </div>
            </div>

            <div className="reveal reveal-delay-2">
              <h3
                style={{
                  fontFamily: "var(--font-heading), 'Cormorant Garamond', serif",
                  fontSize: "1.3rem",
                  fontWeight: 600,
                  color: "var(--ink)",
                  marginBottom: "1.5rem",
                }}
              >
                {t("Certifications", "Certifications")}
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {CERTIFICATIONS.map((cert) => (
                  <div
                    key={cert.name}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "0.8rem 1rem",
                      background: "var(--white)",
                      borderRadius: 10,
                      border: "1px solid var(--border-gold)",
                    }}
                  >
                    <span style={{ fontSize: "0.85rem", fontWeight: 500, color: "var(--ink)" }}>{cert.name}</span>
                    <span style={{ fontSize: "0.75rem", color: "var(--ink-muted)" }}>{cert.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
