import { INDEX } from "./i18n";

export type StageId = (typeof INDEX)[number]["id"];

export type StageShot = {
  src: string;
  alt: string;
  kind: "portrait" | "product";
};

/** Imagery only while that section is open. Hero = Vision only. */
export const STAGE_SHOTS: Partial<Record<StageId, StageShot>> = {
  top: {
    src: "/images/hero-photo-no-bg.png",
    alt: "Mohamed Bakkouri",
    kind: "portrait",
  },
};

export const STAGE_LAYERS = Array.from(
  new Map(
    Object.values(STAGE_SHOTS)
      .filter((shot): shot is StageShot => Boolean(shot))
      .map((shot) => [shot.src, shot]),
  ).values(),
);
