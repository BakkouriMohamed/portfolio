import { useLang } from "./i18n";

export function Hero() {
  const { t } = useLang();

  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-grid">
          <div className="reveal">
            <span className="eyebrow">{t("Marketing Digital · Fès, Maroc", "Digital Marketing · Fès, Morocco")}</span>
            <h1
              style={{
                fontFamily: "var(--font-heading), 'Cormorant Garamond', serif",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 300,
                color: "var(--ink)",
                lineHeight: 1.15,
                marginBottom: "1.5rem",
              }}
            >
              {t("Mohamed", "Mohamed")}{" "}
              <em
                style={{
                  fontFamily: "var(--font-heading), 'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "var(--gold)",
                }}
              >
                Bakkouri
              </em>
            </h1>
            <p
              style={{
                fontSize: "1.1rem",
                color: "var(--ink-soft)",
                lineHeight: 1.8,
                marginBottom: "2rem",
                maxWidth: 480,
              }}
            >
              {t(
                "Étudiant en Master Marketing Digital à l'ENCG Fès, je combine stratégie, créativité et analyse de données pour développer la visibilité des marques.",
                "Master's student in Digital Marketing at ENCG Fès, combining strategy, creativity and data analysis to grow brand visibility.",
              )}
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a href="#contact" className="btn-primary">
                {t("Me contacter", "Get in touch")}
                <span style={{ fontSize: "1.1rem" }}>→</span>
              </a>
              <a href="#projects" className="btn-outline">
                {t("Voir mes projets", "View my projects")}
              </a>
            </div>
          </div>

          <div className="reveal reveal-delay-2" style={{ display: "flex", justifyContent: "center" }}>
            <div className="hero-photo-wrapper" style={{ position: "relative", zIndex: 1 }}>
              <div className="hero-photo">
                <img src="/images/hero-photo.jpg" alt="Mohamed Bakkouri" />
              </div>
              <div className="hero-chip hero-chip--seo float-anim">🔍 SEO & SEA</div>
              <div className="hero-chip hero-chip--analytics float-anim-delay">📊 Analytics</div>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "3rem", gap: 8 }}>
          <span
            style={{
              fontSize: "0.72rem",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: "var(--ink-muted)",
            }}
          >
            {t("Scroll", "Scroll")}
          </span>
          <div className="scroll-hint-line" />
        </div>
      </div>
    </section>
  );
}
