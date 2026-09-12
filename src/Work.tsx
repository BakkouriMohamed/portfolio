import { useId } from "react";
import { WORK, useLang } from "./i18n";

type WorkItem = (typeof WORK)[number];

function WorkCard({ item }: { item: WorkItem }) {
  const { lang, t } = useLang();
  const image = "image" in item ? item.image : undefined;

  return (
    <article
      className={`work-card${image ? "" : " work-card--text"}`}
      tabIndex={0}
    >
      <div className="work-card__media" aria-hidden={image ? undefined : true}>
        {image ? (
          <img src={image} alt="" decoding="async" />
        ) : (
          <span className="work-card__mark">{item.client.slice(0, 2)}</span>
        )}
      </div>
      <h4 className="work-card__client">{item.client}</h4>
      <div className="work-card__details">
        <p className="work-card__meta">{lang === "fr" ? item.meta.fr : item.meta.en}</p>
        <p className="work-card__line">
          <span className="work-card__label">{t("Brief", "Brief")}</span>
          {lang === "fr" ? item.brief.fr : item.brief.en}
        </p>
        <p className="work-card__line">
          <span className="work-card__label">{t("Action", "Action")}</span>
          {lang === "fr" ? item.did.fr : item.did.en}
        </p>
        <p className="work-card__result">
          <span className="work-card__label">{t("Résultat", "Result")}</span>
          {lang === "fr" ? item.result.fr : item.result.en}
        </p>
      </div>
    </article>
  );
}

export function WorkCarousel({ className = "" }: { className?: string }) {
  const { t } = useLang();
  const labelId = useId();

  return (
    <div className={`work-carousel ${className}`.trim()} role="region" aria-labelledby={labelId}>
      <p id={labelId} className="work-carousel__sr">
        {t("Travail livré", "Delivered work")}
      </p>
      <div className="work-carousel__track" tabIndex={0}>
        {WORK.map((item) => (
          <div key={item.client} className="work-carousel__slide">
            <WorkCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function WorkBody() {
  const { t } = useLang();

  return (
    <div className="work__body">
      <h3 className="browse__heading">
        {t("Trois missions, une priorité: la visibilité.", "Three missions, one priority: visibility.")}
      </h3>
      <WorkCarousel className="work-carousel--inline" />
    </div>
  );
}
