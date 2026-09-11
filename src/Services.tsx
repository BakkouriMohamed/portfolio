import { SERVICES, useLang } from "./i18n";

export function Services() {
  const { t } = useLang();

  return (
    <section id="services" className="section section-alt">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="eyebrow reveal">{t("Services", "Services")}</span>
          <h2 className="section-title reveal">{t("Ce que je propose", "What I offer")}</h2>
          <hr className="gold-line reveal" style={{ margin: "1.5rem auto" }} />
          <p className="section-subtitle reveal" style={{ margin: "0 auto" }}>
            {t(
              "Des solutions sur mesure pour développer votre présence digitale.",
              "Tailor-made solutions to grow your digital presence.",
            )}
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((service, index) => (
            <div key={service.title.fr} className="service-card reveal" style={{ transitionDelay: `${index * 0.1}s` }}>
              <span className="service-icon" style={{ fontSize: "2.2rem", display: "block", marginBottom: "1rem" }}>
                {service.icon}
              </span>
              <h3
                className="service-title"
                style={{
                  fontFamily: "var(--font-heading), 'Cormorant Garamond', serif",
                  fontSize: "1.3rem",
                  fontWeight: 600,
                  color: "var(--ink)",
                  marginBottom: "0.6rem",
                }}
              >
                {t(service.title.fr, service.title.en)}
              </h3>
              <p
                className="service-desc"
                style={{
                  fontSize: "0.85rem",
                  color: "var(--ink-soft)",
                  lineHeight: 1.7,
                  marginBottom: "1.2rem",
                }}
              >
                {t(service.desc.fr, service.desc.en)}
              </p>
              <span className="service-price">{t(service.price.fr, service.price.en)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
