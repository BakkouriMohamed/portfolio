import { useCallback, useEffect, useId, useRef, useState } from "react";
import { WORK, useLang } from "./i18n";

type WorkItem = (typeof WORK)[number];

function WorkCard({ item }: { item: WorkItem }) {
  const { lang, t } = useLang();
  const image = "image" in item ? item.image : undefined;

  return (
    <article className={`work-card${image ? "" : " work-card--text"}`}>
      <div className="work-card__media" aria-hidden={image ? undefined : true}>
        {image ? (
          <img src={image} alt="" decoding="async" />
        ) : (
          <span className="work-card__mark">{item.client.slice(0, 2)}</span>
        )}
      </div>
      <div className="work-card__body">
        <p className="work-card__meta">{lang === "fr" ? item.meta.fr : item.meta.en}</p>
        <h4 className="work-card__client">{item.client}</h4>
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
  const scrollerRef = useRef<HTMLDivElement>(null);
  const labelId = useId();
  const [index, setIndex] = useState(0);
  const count = WORK.length;

  const syncIndex = useCallback(() => {
    const root = scrollerRef.current;
    if (!root) return;
    const slides = [...root.querySelectorAll<HTMLElement>(".work-carousel__slide")];
    if (!slides.length) return;
    const left = root.scrollLeft;
    let best = 0;
    let bestDist = Infinity;
    slides.forEach((slide, i) => {
      const dist = Math.abs(slide.offsetLeft - left);
      if (dist < bestDist) {
        bestDist = dist;
        best = i;
      }
    });
    setIndex(best);
  }, []);

  useEffect(() => {
    const root = scrollerRef.current;
    if (!root) return;
    syncIndex();
    root.addEventListener("scroll", syncIndex, { passive: true });
    window.addEventListener("resize", syncIndex);
    return () => {
      root.removeEventListener("scroll", syncIndex);
      window.removeEventListener("resize", syncIndex);
    };
  }, [syncIndex]);

  const go = useCallback(
    (next: number) => {
      const root = scrollerRef.current;
      if (!root) return;
      const slides = root.querySelectorAll<HTMLElement>(".work-carousel__slide");
      const clamped = ((next % count) + count) % count;
      const target = slides[clamped];
      if (!target) return;
      root.scrollTo({ left: target.offsetLeft, behavior: "smooth" });
      setIndex(clamped);
    },
    [count],
  );

  return (
    <div className={`work-carousel ${className}`.trim()} role="region" aria-labelledby={labelId}>
      <p id={labelId} className="work-carousel__sr">
        {t("Travail livré", "Delivered work")}
      </p>
      <div
        ref={scrollerRef}
        className="work-carousel__track"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") {
            event.preventDefault();
            go(index + 1);
          } else if (event.key === "ArrowLeft") {
            event.preventDefault();
            go(index - 1);
          }
        }}
      >
        {WORK.map((item) => (
          <div key={item.client} className="work-carousel__slide">
            <WorkCard item={item} />
          </div>
        ))}
      </div>
      <div className="work-carousel__bar">
        <button
          type="button"
          className="work-carousel__nav"
          onClick={() => go(index - 1)}
          aria-label={t("Mission précédente", "Previous mission")}
        >
          ←
        </button>
        <div className="work-carousel__dots" role="tablist" aria-label={t("Missions", "Missions")}>
          {WORK.map((item, i) => (
            <button
              key={item.client}
              type="button"
              role="tab"
              aria-selected={i === index}
              className={`work-carousel__dot${i === index ? " work-carousel__dot--on" : ""}`}
              onClick={() => go(i)}
              aria-label={`${item.client}`}
            />
          ))}
        </div>
        <button
          type="button"
          className="work-carousel__nav"
          onClick={() => go(index + 1)}
          aria-label={t("Mission suivante", "Next mission")}
        >
          →
        </button>
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
