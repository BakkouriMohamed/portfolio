import { PROOF, useLang } from "./i18n";

export function ProofBody() {
  const { t } = useLang();

  return (
    <div className="proof__grid">
      {PROOF.map((item) => (
        <div key={item.number + item.fr} className="proof__item">
          <strong>{item.number}</strong>
          <p>{t(item.fr, item.en)}</p>
        </div>
      ))}
    </div>
  );
}
