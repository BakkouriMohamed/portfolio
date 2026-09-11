import { METHOD, useLang } from "./i18n";

export function MethodBody() {
  const { lang, t } = useLang();

  return (
    <div className="method__body">
      <h3 className="browse__heading">{t("Comprendre, planifier, mesurer.", "Understand, plan, measure.")}</h3>
      <ol className="method__list">
        {METHOD.map((step) => (
          <li key={step.title.en} className="method__item">
            <h4>{lang === "fr" ? step.title.fr : step.title.en}</h4>
            <p>{lang === "fr" ? step.body.fr : step.body.en}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
