import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { flushSync } from "react-dom";

export type Lang = "fr" | "en";

type LangContextValue = {
  lang: Lang;
  toggleLang: () => void;
  t: (fr: string, en: string) => string;
};

const LangContext = createContext<LangContextValue | null>(null);

function flipLang(current: Lang): Lang {
  return current === "fr" ? "en" : "fr";
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr");

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo<LangContextValue>(
    () => ({
      lang,
      toggleLang: () => {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const apply = () => flushSync(() => setLang(flipLang));

        if (reduce || typeof document.startViewTransition !== "function") {
          apply();
          return;
        }

        document.startViewTransition(apply);
      },
      t: (fr, en) => (lang === "fr" ? fr : en),
    }),
    [lang],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside LangProvider");
  return ctx;
}

export const INDEX = [
  { n: "00", id: "top", fr: "Faire trouver votre marque", en: "Make your brand findable" },
  { n: "01", id: "results", fr: "Visibilité mesurable", en: "Visibility you can measure" },
  { n: "02", id: "work", fr: "Travail déjà livré", en: "Work already delivered" },
  { n: "03", id: "method", fr: "Comprendre, planifier, mesurer", en: "Understand, plan, measure" },
  { n: "04", id: "path", fr: "Depuis le terrain", en: "From the field" },
  { n: "05", id: "contact", fr: "Votre prochaine mission", en: "Your next mission" },
] as const;

/** @deprecated use INDEX */
export const NAV = INDEX.filter((item) => item.id !== "top");


export const PROOF = [
  {
    number: "+20%",
    fr: "Visibilité UrbanFlex, SEO et contenu (juin–juil. 2025)",
    en: "UrbanFlex visibility, SEO and content (Jun–Jul 2025)",
  },
  {
    number: "+15%",
    fr: "Engagement Ghaiti Event, social (juil.–sep. 2025)",
    en: "Ghaiti Event engagement, social (Jul–Sep 2025)",
  },
  {
    number: "3",
    fr: "Missions marketing digital",
    en: "Digital marketing missions",
  },
] as const;

export const WORK = [
  {
    client: "Ghmoiya",
    image: "/images/ghmoiya-product.png",
    meta: { fr: "Marque · figue de barbarie", en: "Brand · prickly pear" },
    brief: {
      fr: "Poser l’identité et le positionnement d’une marque locale de figue de barbarie.",
      en: "Set identity and positioning for a local prickly pear brand.",
    },
    did: {
      fr: "Identité visuelle, message de marque, cadrage du positionnement.",
      en: "Visual identity, brand message, positioning frame.",
    },
    result: {
      fr: "Identité et positionnement prêts à déployer.",
      en: "Identity and positioning ready to use.",
    },
  },
  {
    client: "Ghaiti Event",
    meta: { fr: "Événementiel · Rabat · juil.–sep. 2025", en: "Events · Rabat · Jul–Sep 2025" },
    brief: {
      fr: "Animer les réseaux pendant la saison événements.",
      en: "Keep social active through the event season.",
    },
    did: {
      fr: "Campagnes social media et suivi d’engagement.",
      en: "Social campaigns and engagement tracking.",
    },
    result: { fr: "+15% d’engagement.", en: "+15% engagement." },
  },
  {
    client: "UrbanFlex",
    meta: {
      fr: "Commerce · Paris / remote · juin–juil. 2025",
      en: "Retail · Paris / remote · Jun–Jul 2025",
    },
    brief: {
      fr: "Remonter la visibilité organique et le contenu.",
      en: "Raise organic visibility and content.",
    },
    did: { fr: "SEO et création de contenu.", en: "SEO and content creation." },
    result: { fr: "+20% de visibilité.", en: "+20% visibility." },
  },
] as const;

export const METHOD = [
  {
    title: { fr: "Comprendre", en: "Understand" },
    body: {
      fr: "Qui vous êtes, qui vous cherche, où la visibilité peut grandir.",
      en: "Who you are, who looks for you, where visibility can grow.",
    },
  },
  {
    title: { fr: "Planifier", en: "Plan" },
    body: {
      fr: "Un plan SEO, social ou contenu, avec une priorité claire.",
      en: "One SEO, social, or content plan with a clear priority.",
    },
  },
  {
    title: { fr: "Mesurer", en: "Measure" },
    body: {
      fr: "Des chiffres liés à un canal et à un client, puis on ajuste.",
      en: "Numbers tied to a channel and a client, then we adjust.",
    },
  },
] as const;

export const PATH = [
  {
    period: "Déc. 2025 – Fév. 2026",
    title: { fr: "Assistant Manager", en: "Assistant Manager" },
    company: "Rim Cosmetic",
    logo: "/images/logos/rim-cosmetic.svg",
    location: { fr: "Maroc", en: "Morocco" },
  },
  {
    period: "Juil. – Sep. 2025",
    title: { fr: "Assistant Marketing", en: "Marketing Assistant" },
    company: "Ghaiti Event",
    logo: "/images/logos/ghaiti-event.svg",
    location: { fr: "Rabat", en: "Rabat" },
    result: { fr: "+15% engagement", en: "+15% engagement" },
  },
  {
    period: "Juin – Juil. 2025",
    title: { fr: "Assistant Marketing Digital", en: "Digital Marketing Assistant" },
    company: "UrbanFlex",
    logo: "/images/logos/urbanflex.svg",
    location: { fr: "Paris / Remote", en: "Paris / Remote" },
    result: { fr: "+20% visibilité", en: "+20% visibility" },
  },
] as const;

export const EDUCATION = {
  name: { fr: "Master Marketing Digital — ENCG Fès", en: "Master’s in Digital Marketing — ENCG Fès" },
  logo: "/images/encg-logo.png",
} as const;

export const CERTIFICATIONS = [
  { name: "Google Digital Marketing", year: "2023", logo: "/images/logos/google.svg" },
  { name: "Meta Social Media Marketing", year: "2022", logo: "/images/logos/meta.svg" },
  { name: "HubSpot Content Marketing", year: "2023", logo: "/images/logos/hubspot.svg" },
  { name: "Google Analytics 4", year: "2024", logo: "/images/logos/google.svg" },
] as const;

export const EMAIL = "mohamedbakkouri88@gmail.com";
