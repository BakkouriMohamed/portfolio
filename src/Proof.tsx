import { type CSSProperties } from "react";
import { PROOF, useLang } from "./i18n";

const BENTO = ["proof-stage__item--hero", "proof-stage__item--mid", "proof-stage__item--low"] as const;

export function ProofStage() {
  const { lang, t } = useLang();

  return (
    <div className="proof-stage" aria-label={t("Résultats", "Results")}>
      <ul className="proof-stage__bento">
        {PROOF.map((item, i) => (
          <li
            key={item.number + item.fr}
            className={`proof-stage__item ${BENTO[i] ?? ""}`}
            style={{ "--proof-i": i } as CSSProperties}
          >
            <strong className="proof-stage__n">{item.number}</strong>
            <p className="proof-stage__label">{lang === "fr" ? item.fr : item.en}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ProofBody() {
  const { lang, t } = useLang();

  return (
    <div className="proof__body">
      <p className="browse__lede proof__lede">
        {t(
          "Des chiffres liés à un client, un canal, une période.",
          "Numbers tied to a client, a channel, a period.",
        )}
      </p>
      <ul className="proof-stage__bento proof-stage__bento--inline">
        {PROOF.map((item, i) => (
          <li key={item.number + item.fr} className={`proof-stage__item ${BENTO[i] ?? ""}`}>
            <strong className="proof-stage__n">{item.number}</strong>
            <p className="proof-stage__label">{lang === "fr" ? item.fr : item.en}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
