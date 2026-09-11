/** Small inline flag + translate mark for the lang toggle. */

export function TranslateIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 5h7" />
      <path d="M7 5c0 5 3 9 8 11" />
      <path d="M9 9h8" />
      <path d="M13 5c.8 3.2 2.6 5.8 5 8" />
      <path d="M4 19h9" />
      <path d="M8 19l5-8 2 8" />
    </svg>
  );
}

/** Target language flag: FR site → GB (switch to EN), EN site → FR. */
export function LangFlag({
  target,
  className,
}: {
  target: "en" | "fr";
  className?: string;
}) {
  if (target === "en") {
    return (
      <svg className={className} viewBox="0 0 60 30" width="1.15em" height="0.7em" aria-hidden="true">
        <rect width="60" height="30" fill="#012169" />
        <path d="M0 0 L60 30 M60 0 L0 30" stroke="#fff" strokeWidth="6" />
        <path d="M0 0 L60 30 M60 0 L0 30" stroke="#C8102E" strokeWidth="4" />
        <path d="M30 0 V30 M0 15 H60" stroke="#fff" strokeWidth="10" />
        <path d="M30 0 V30 M0 15 H60" stroke="#C8102E" strokeWidth="6" />
      </svg>
    );
  }

  return (
    <svg className={className} viewBox="0 0 60 40" width="1.15em" height="0.75em" aria-hidden="true">
      <rect width="20" height="40" fill="#002395" />
      <rect x="20" width="20" height="40" fill="#fff" />
      <rect x="40" width="20" height="40" fill="#ED2939" />
    </svg>
  );
}
