import { type CSSProperties } from "react";
import { METHOD, useLang } from "./i18n";

const BENTO = ["method-stage__item--hero", "method-stage__item--mid", "method-stage__item--low"] as const;

export function MethodStage() {
  const { lang, t } = useLang();

  return (
    <div className="method-stage" aria-label={t("Méthode", "Method")}>
      <ol className="method-stage__bento">
        {METHOD.map((step, i) => (
          <li
            key={step.title.en}
            className={`method-stage__item ${BENTO[i] ?? ""}`}
            style={{ "--method-i": i } as CSSProperties}
          >
            <strong className="method-stage__n">{String(i + 1).padStart(2, "0")}</strong>
            <div className="method-stage__copy">
              <h4 className="method-stage__title">{lang === "fr" ? step.title.fr : step.title.en}</h4>
              <p className="method-stage__label">{lang === "fr" ? step.body.fr : step.body.en}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function MethodBody() {
  const { lang, t } = useLang();

  return (
    <div className="method__body">
      <p className="browse__lede method__lede">
        {t(
          "Trois gestes, une priorité claire à chaque étape.",
          "Three moves, one clear priority at each step.",
        )}
      </p>
      <ol className="method-stage__bento method-stage__bento--inline">
        {METHOD.map((step, i) => (
          <li key={step.title.en} className={`method-stage__item ${BENTO[i] ?? ""}`}>
            <strong className="method-stage__n">{String(i + 1).padStart(2, "0")}</strong>
            <div className="method-stage__copy">
              <h4 className="method-stage__title">{lang === "fr" ? step.title.fr : step.title.en}</h4>
              <p className="method-stage__label">{lang === "fr" ? step.body.fr : step.body.en}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
