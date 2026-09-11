import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Lang = "fr" | "en";

type LangContextValue = {
  lang: Lang;
  toggleLang: () => void;
  t: (fr: string, en: string) => string;
};

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr");

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo<LangContextValue>(
    () => ({
      lang,
      toggleLang: () => setLang((current) => (current === "fr" ? "en" : "fr")),
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

export const NAV = [
  { id: "about", fr: "À propos", en: "About" },
  { id: "skills", fr: "Compétences", en: "Skills" },
  { id: "projects", fr: "Projets", en: "Projects" },
  { id: "experience", fr: "Expériences", en: "Experience" },
  { id: "services", fr: "Services", en: "Services" },
  { id: "contact", fr: "Contact", en: "Contact" },
] as const;

export const TRAITS = [
  { fr: "Esprit analytique", en: "Analytical mindset" },
  { fr: "Créativité", en: "Creativity" },
  { fr: "Orienté résultats", en: "Results-driven" },
  { fr: "Vision stratégique", en: "Strategic vision" },
  { fr: "Rigueur académique", en: "Academic rigor" },
  { fr: "Adaptabilité", en: "Adaptability" },
];

export const STATS = [
  { number: "5+", fr: "Années de formation", en: "Years of study" },
  { number: "3", fr: "Expériences pros", en: "Work experiences" },
  { number: "+20%", fr: "Visibilité créée", en: "Visibility created" },
  { number: "3", fr: "Langues parlées", en: "Languages spoken" },
];

export const SKILLS = [
  {
    icon: "🔍",
    name: { fr: "SEO", en: "SEO" },
    desc: {
      fr: "Optimisation technique et sémantique pour un meilleur positionnement naturel.",
      en: "Technical and semantic optimization for better organic ranking.",
    },
    tags: ["Semrush", "Search Console", "Ahrefs"],
  },
  {
    icon: "📢",
    name: { fr: "Social Media", en: "Social Media" },
    desc: {
      fr: "Stratégie de contenu et community management sur les réseaux sociaux.",
      en: "Content strategy and community management across social networks.",
    },
    tags: ["Instagram", "Meta Ads", "TikTok"],
  },
  {
    icon: "📊",
    name: { fr: "Analytics", en: "Analytics" },
    desc: {
      fr: "Analyse de données et reporting pour des décisions éclairées.",
      en: "Data analysis and reporting for informed decisions.",
    },
    tags: ["GA4", "Looker Studio", "Hotjar"],
  },
  {
    icon: "✍️",
    name: { fr: "Création de contenu", en: "Content Creation" },
    desc: {
      fr: "Conception visuelle et production de contenus engageants.",
      en: "Visual design and production of engaging content.",
    },
    tags: ["Canva", "CapCut", "Figma"],
  },
  {
    icon: "🎯",
    name: { fr: "Stratégie Marketing", en: "Marketing Strategy" },
    desc: {
      fr: "Planification et développement de stratégies marketing globales.",
      en: "Planning and development of comprehensive marketing strategies.",
    },
    tags: ["SWOT", "Personas", "Customer Journey"],
  },
  {
    icon: "🛍️",
    name: { fr: "Marketing Commercial", en: "Commercial Marketing" },
    desc: {
      fr: "Gestion de la relation client et stratégie commerciale digitale.",
      en: "Customer relationship management and digital commercial strategy.",
    },
    tags: ["Management", "Digital", "CRM"],
  },
];

export const TOOLS = [
  "Google Analytics 4",
  "Semrush",
  "Meta Business Suite",
  "HubSpot",
  "Canva Pro",
  "WordPress",
  "Looker Studio",
  "Mailchimp",
  "Notion",
];

export const EXPERIENCES: {
  period: string;
  title: string;
  company: string;
  location: string;
  tags: string[];
  result?: string;
}[] = [
  {
    period: "Déc. 2025 – Fév. 2026",
    title: "Assistant Manager",
    company: "Rim Cosmetic",
    location: "Maroc",
    tags: ["Management", "Digital", "Social Media"],
  },
  {
    period: "Juil. – Sep. 2025",
    title: "Assistant Marketing",
    company: "Ghaiti Event",
    location: "Rabat",
    tags: ["Event Marketing", "Social Media", "Campagnes"],
    result: "↗ +15% engagement",
  },
  {
    period: "Juin – Juil. 2025",
    title: "Assistant Marketing Digital",
    company: "UrbanFlex",
    location: "Paris / Remote",
    tags: ["SEO", "Content Creation", "Remote"],
    result: "↗ +20% visibilité",
  },
];

export const CERTIFICATIONS = [
  { name: "Google Digital Marketing", year: "2023" },
  { name: "Meta Social Media Marketing", year: "2022" },
  { name: "HubSpot Content Marketing", year: "2023" },
  { name: "Google Analytics 4", year: "2024" },
];

export const SERVICES = [
  {
    icon: "📱",
    title: { fr: "Social Media", en: "Social Media" },
    desc: {
      fr: "Gestion et stratégie des réseaux sociaux pour maximiser l'engagement et la visibilité de votre marque.",
      en: "Social media management and strategy to maximize engagement and brand visibility.",
    },
    price: { fr: "À partir de 500 MAD/mois", en: "From 500 MAD/month" },
  },
  {
    icon: "🔍",
    title: { fr: "SEO", en: "SEO" },
    desc: {
      fr: "Optimisation pour les moteurs de recherche pour améliorer votre classement organique.",
      en: "Search engine optimization to improve your organic ranking.",
    },
    price: { fr: "À partir de 800 MAD", en: "From 800 MAD" },
  },
  {
    icon: "✍️",
    title: { fr: "Contenu", en: "Content" },
    desc: {
      fr: "Création de contenus engageants et optimisés pour convertir votre audience.",
      en: "Creation of engaging content optimized to convert your audience.",
    },
    price: { fr: "À partir de 300 MAD", en: "From 300 MAD" },
  },
  {
    icon: "📊",
    title: { fr: "Stratégie", en: "Strategy" },
    desc: {
      fr: "Audit et développement de votre stratégie marketing digitale complète.",
      en: "Audit and development of your complete digital marketing strategy.",
    },
    price: { fr: "Sur devis", en: "On quote" },
  },
];

export const EMAIL = "mohamedbakkouri88@gmail.com";
