import { CERTIFICATIONS, PATH, useLang } from "./i18n";

export function PathBody() {
  const { lang, t } = useLang();

  return (
    <div className="path__body">
      <h3 className="browse__heading">{t("Formation et missions", "Education and missions")}</h3>
      <div className="path__grid">
        <div>
          <h4 className="path__col-title">{t("Missions", "Missions")}</h4>
          {PATH.map((item) => (
            <div key={item.period + item.company} className="path__item">
              <p className="path__when">{item.period}</p>
              <h5>
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
            <h5>{t("Master Marketing Digital — ENCG Fès", "Master’s in Digital Marketing — ENCG Fès")}</h5>
          </div>

          <h4 className="path__col-title" style={{ marginTop: "2rem" }}>
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
    </div>
  );
}
