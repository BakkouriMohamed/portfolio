import { type CSSProperties } from "react";
import { CERTIFICATIONS, EDUCATION, PATH, useLang } from "./i18n";

function PathLogo({
  src,
  label,
  className = "",
}: {
  src: string;
  label: string;
  className?: string;
}) {
  const raster = /\.(png|jpe?g|webp)$/i.test(src);
  const cls = ["path__logo", raster ? "path__logo--img" : "", className].filter(Boolean).join(" ");

  if (raster) {
    return <img className={cls} src={src} alt="" aria-label={label} />;
  }

  return (
    <span
      className={cls}
      role="img"
      aria-label={label}
      style={{
        maskImage: `url("${src}")`,
        WebkitMaskImage: `url("${src}")`,
      }}
    />
  );
}

const MISSION_BENTO = [
  "path-stage__card--hero",
  "path-stage__card--mid",
  "path-stage__card--low",
] as const;

export function PathStage({ className = "" }: { className?: string }) {
  const { lang, t } = useLang();

  return (
    <div className={`path-stage ${className}`.trim()} aria-label={t("Parcours", "Path")}>
      <ul className="path-stage__missions">
        {PATH.map((item, i) => (
          <li
            key={item.company}
            className={`path-stage__card ${MISSION_BENTO[i] ?? ""}`}
            style={{ "--path-i": i } as CSSProperties}
          >
            <PathLogo src={item.logo} label={item.company} className="path-stage__mark" />
            <div className="path-stage__copy">
              <p className="path-stage__org">{item.company}</p>
              {"result" in item && item.result ? (
                <p className="path-stage__stat">
                  {lang === "fr" ? item.result.fr : item.result.en}
                </p>
              ) : (
                <p className="path-stage__stat path-stage__stat--muted">
                  {lang === "fr" ? item.location.fr : item.location.en}
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>

      <div className="path-stage__rail" style={{ "--path-i": PATH.length } as CSSProperties}>
        <div className="path-stage__edu">
          <PathLogo src={EDUCATION.logo} label="ENCG Fès" className="path-stage__mark path-stage__mark--edu" />
          <p className="path-stage__org">ENCG Fès</p>
        </div>
        <ul className="path-stage__certs">
          {CERTIFICATIONS.map((cert) => (
            <li key={cert.name} className="path-stage__cert" title={cert.name}>
              <PathLogo src={cert.logo} label={cert.name} className="path-stage__mark path-stage__mark--cert" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function PathBody() {
  const { lang, t } = useLang();

  return (
    <div className="path__body">
      <p className="browse__lede path__lede">
        {t(
          "Missions, formation et certifications — le terrain avant la théorie.",
          "Missions, education, and certifications — field before theory.",
        )}
      </p>

      <div className="path__grid">
        <div>
          <h4 className="path__col-title">{t("Missions", "Missions")}</h4>
          {PATH.map((item) => (
            <div key={item.period + item.company} className="path__item">
              <p className="path__when">{item.period}</p>
              <h5 className="path__item-title">
                {lang === "fr" ? item.title.fr : item.title.en} · {item.company}
              </h5>
              <p>
                {lang === "fr" ? item.location.fr : item.location.en}
                {"result" in item && item.result
                  ? ` · ${lang === "fr" ? item.result.fr : item.result.en}`
                  : ""}
              </p>
            </div>
          ))}
        </div>

        <div>
          <h4 className="path__col-title">{t("Formation", "Education")}</h4>
          <div className="path__item">
            <h5 className="path__item-title">
              {lang === "fr" ? EDUCATION.name.fr : EDUCATION.name.en}
            </h5>
          </div>

          <h4 className="path__col-title path__col-title--spaced">
            {t("Certifications", "Certifications")}
          </h4>
          <div className="path__certs">
            {CERTIFICATIONS.map((cert) => (
              <div key={cert.name} className="path__cert">
                <span>{cert.name}</span>
                <span>{cert.year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <PathStage className="path-stage--inline" />
    </div>
  );
}
