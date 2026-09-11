import { TRAITS, useLang } from "./i18n";

export function About() {
  const { t } = useLang();

  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <div className="about-grid">
          <div>
            <span className="eyebrow reveal">{t("À propos de moi", "About me")}</span>
            <h2 className="section-title reveal">
              {t("La stratégie au cœur, la créativité en moteur", "Strategy at the core, creativity as the engine")}
            </h2>
            <hr className="gold-line reveal" />
            <p
              className="reveal"
              style={{ fontSize: "1rem", color: "var(--ink-soft)", lineHeight: 1.8, marginBottom: "1rem" }}
            >
              {t(
                "Passionné par le marketing digital et doté d'une double culture académique — classes préparatoires ECS puis Master Marketing Digital à l'ENCG Fès — j'accompagne les marques dans leur transformation numérique.",
                "Passionate about digital marketing with a dual academic background — preparatory classes ECS then Master in Digital Marketing at ENCG Fès — I support brands in their digital transformation.",
              )}
            </p>
            <p
              className="reveal"
              style={{ fontSize: "1rem", color: "var(--ink-soft)", lineHeight: 1.8, marginBottom: "2rem" }}
            >
              {t(
                "Mon approche mêle rigueur analytique et sens créatif pour concevoir des stratégies percutantes. De l'analyse SEO à la gestion des réseaux sociaux, je mets mes compétences au service d'objectifs mesurables.",
                "My approach blends analytical rigor and creative sense to design impactful strategies. From SEO analysis to social media management, I put my skills at the service of measurable goals.",
              )}
            </p>
            <div className="reveal" style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: "2.5rem" }}>
              {TRAITS.map((trait) => (
                <span key={trait.fr} className="trait">
                  <span className="trait-dot" />
                  {t(trait.fr, trait.en)}
                </span>
              ))}
            </div>
            <div className="reveal">
              <h3
                style={{
                  fontFamily: "var(--font-heading), 'Cormorant Garamond', serif",
                  fontSize: "1.4rem",
                  fontWeight: 600,
                  color: "var(--ink)",
                  marginBottom: "1rem",
                }}
              >
                {t("Formation", "Education")}
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div className="edu-card">
                  <div style={{ fontSize: "0.95rem", fontWeight: 500, color: "var(--ink)", marginBottom: 4 }}>
                    Master 1 — Marketing Digital
                  </div>
                  <div style={{ fontSize: "0.82rem", color: "var(--ink-muted)" }}>
                    ENCG Fès · 2022 – {t("Présent", "Present")}
                  </div>
                </div>
                <div className="edu-card">
                  <div style={{ fontSize: "0.95rem", fontWeight: 500, color: "var(--ink)", marginBottom: 4 }}>
                    Classes Préparatoires ECS
                  </div>
                  <div style={{ fontSize: "0.82rem", color: "var(--ink-muted)" }}>2020 – 2022</div>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal reveal-delay-2" style={{ position: "sticky", top: 100 }}>
            <div className="quote-card">
              <span className="quote-mark">“</span>
              <blockquote
                style={{
                  fontFamily: "var(--font-heading), 'Cormorant Garamond', serif",
                  fontSize: "1.35rem",
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "var(--ink-soft)",
                  lineHeight: 1.7,
                  marginBottom: "1.5rem",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {t(
                  "Le marketing digital n'est pas une question de chance, mais de stratégie, de créativité et de persévérance.",
                  "Digital marketing is not about luck, but about strategy, creativity and perseverance.",
                )}
              </blockquote>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: "var(--gold-pale)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-heading), 'Cormorant Garamond', serif",
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "var(--gold)",
                  }}
                >
                  MB
                </div>
                <div>
                  <div style={{ fontSize: "0.9rem", fontWeight: 500, color: "var(--ink)" }}>Mohamed Bakkouri</div>
                  <div style={{ fontSize: "0.78rem", color: "var(--ink-muted)" }}>
                    {t("Étudiant en Marketing Digital", "Digital Marketing Student")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
