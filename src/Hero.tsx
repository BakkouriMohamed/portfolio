import { useLang } from "./i18n";

export function VisionBody() {
  const { t } = useLang();

  return (
    <div className="vision">
      <div className="vision__copy">
        <h2 className="vision__title">
          {t("Plus de clients trouvent votre marque locale.", "More customers find your local brand.")}
        </h2>
        <p className="vision__lede">
          {t(
            "SEO, social et contenu pour la beauté, l’événementiel et le commerce à Fès et au Maroc.",
            "SEO, social, and content for beauty, events, and retail in Fès and Morocco.",
          )}
        </p>
      </div>
    </div>
  );
}
