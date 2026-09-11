import { useLang } from "./i18n";

function CalendarIcon() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="16" width="64" height="56" rx="6" fill="#E8CB7A" opacity="0.9" />
      <rect x="12" y="20" width="56" height="48" rx="4" fill="#2C2116" />
      <rect x="8" y="16" width="64" height="18" rx="6" fill="#C9A84C" />
      <rect x="8" y="28" width="64" height="6" fill="#C9A84C" />
      <rect x="22" y="10" width="4" height="14" rx="2" fill="#C9A84C" />
      <rect x="54" y="10" width="4" height="14" rx="2" fill="#C9A84C" />
      <rect x="18" y="36" width="8" height="8" rx="1.5" fill="#C9A84C" opacity="0.7" />
      <rect x="30" y="36" width="8" height="8" rx="1.5" fill="#C9A84C" opacity="0.5" />
      <rect x="42" y="36" width="8" height="8" rx="1.5" fill="#C9A84C" opacity="0.7" />
      <rect x="54" y="36" width="8" height="8" rx="1.5" fill="#C9A84C" opacity="0.5" />
      <rect x="18" y="48" width="8" height="8" rx="1.5" fill="#C9A84C" opacity="0.5" />
      <rect x="30" y="48" width="8" height="8" rx="1.5" fill="#C9A84C" opacity="0.9" />
      <rect x="42" y="48" width="8" height="8" rx="1.5" fill="#C9A84C" opacity="0.5" />
      <rect x="54" y="48" width="8" height="8" rx="1.5" fill="#C9A84C" opacity="0.7" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="16" y1="20" x2="16" y2="64" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      <line x1="16" y1="64" x2="68" y2="64" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      <line x1="16" y1="48" x2="68" y2="48" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="4 3" />
      <line x1="16" y1="32" x2="68" y2="32" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="4 3" />
      <path d="M16 58 L30 48 L44 52 L58 30 L68 24 L68 64 L16 64 Z" fill="rgba(201,168,76,0.15)" />
      <path
        d="M16 58 L30 48 L44 52 L58 30 L68 24"
        stroke="#C9A84C"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="58" r="3" fill="#C9A84C" />
      <circle cx="30" cy="48" r="3" fill="#C9A84C" />
      <circle cx="44" cy="52" r="3" fill="#C9A84C" />
      <circle cx="58" cy="30" r="3" fill="#C9A84C" />
      <circle cx="68" cy="24" r="4" fill="#C9A84C" stroke="white" strokeWidth="2" />
      <path d="M62 18 L68 24 L62 30" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const PROJECTS = [
  {
    tag: "BRANDING",
    sectionLabel: { fr: "IDENTITÉ DE MARQUE", en: "BRAND IDENTITY" },
    title: { fr: "Ghmoiya — Marque de Makeup", en: "Ghmoiya — Makeup Brand" },
    desc: {
      fr: "Développement complet d'une marque de cosmétiques premium. Positionnement haut de gamme autour de la Figue de Barbarie, avec une identité visuelle raffinée et une stratégie de marque complète.",
      en: "Complete development of a premium cosmetics brand. High-end positioning around Prickly Pear, with a refined visual identity and complete brand strategy.",
    },
    visual: "image" as const,
    imageSrc: "/images/ghmoiya-product.png",
  },
  {
    tag: "ÉVÉNEMENTIEL",
    sectionLabel: { fr: "MARKETING SOCIAL MEDIA", en: "SOCIAL MEDIA MARKETING" },
    title: { fr: "Stratégie Événementielle — Ghaiti", en: "Event Strategy — Ghaiti" },
    desc: {
      fr: "Stratégie marketing pour une agence événementielle. Campagnes social media, gestion de contenu et création d'engagement autour de vos événements.",
      en: "Marketing strategy for an event agency. Social media campaigns, content management and engagement creation around your events.",
    },
    visual: "icon" as const,
    iconBg: "#3A2A1A",
    icon: <CalendarIcon />,
  },
  {
    tag: "SEO & DIGITAL",
    sectionLabel: { fr: "SEO & CONTENU", en: "SEO & CONTENT" },
    title: { fr: "Visibilité Digitale — UrbanFlex", en: "Digital Visibility — UrbanFlex" },
    desc: {
      fr: "Contenus orientés conversion, SEO visuels et optimisation technique pour maximiser la visibilité en ligne et générer des leads qualifiés.",
      en: "Conversion-oriented content, visual SEO and technical optimization to maximize online visibility and generate qualified leads.",
    },
    visual: "icon" as const,
    iconBg: "#1E3A5F",
    icon: <ChartIcon />,
  },
];

export function Projects() {
  const { t } = useLang();

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="reveal" style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontFamily: "var(--font-heading), 'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 4vw, 2.75rem)",
              fontWeight: 600,
              color: "var(--ink)",
              lineHeight: 1.2,
              marginBottom: "1rem",
            }}
          >
            {t("Travaux & études de cas", "Works & Case Studies")}
          </h2>
          <p style={{ fontSize: "1.05rem", color: "var(--ink-soft)", lineHeight: 1.7, maxWidth: 600 }}>
            {t(
              "Projets réels, universitaires et personnels illustrant ma démarche stratégique et créative.",
              "Real, academic and personal projects illustrating my strategic and creative approach.",
            )}
          </p>
        </div>

        <div className="projects-new-grid">
          {PROJECTS.map((project, index) => (
            <article
              key={project.title.fr}
              className="project-card-new reveal"
              style={{ transitionDelay: `${index * 0.12}s` }}
            >
              <div
                className="project-card-visual"
                style={{ background: project.visual === "image" ? "transparent" : project.iconBg }}
              >
                <span className="project-tag">{project.tag}</span>
                {project.visual === "image" ? (
                  <img src={project.imageSrc} alt={t(project.title.fr, project.title.en)} />
                ) : (
                  project.icon
                )}
              </div>
              <div style={{ padding: "1.5rem 1.5rem 1.75rem", background: "#fff", borderRadius: "0 0 12px 12px" }}>
                <span
                  style={{
                    display: "block",
                    fontSize: "0.7rem",
                    fontWeight: 500,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    marginBottom: "0.55rem",
                  }}
                >
                  {t(project.sectionLabel.fr, project.sectionLabel.en)}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-heading), 'Cormorant Garamond', serif",
                    fontSize: "1.35rem",
                    fontWeight: 600,
                    color: "var(--ink)",
                    lineHeight: 1.3,
                    marginBottom: "0.6rem",
                  }}
                >
                  {t(project.title.fr, project.title.en)}
                </h3>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--ink-muted)",
                    lineHeight: 1.7,
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {t(project.desc.fr, project.desc.en)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
