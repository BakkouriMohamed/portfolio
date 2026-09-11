import { useCallback, useEffect, useState } from "react";
import { NAV, useLang } from "./i18n";

export function Navbar() {
  const { lang, toggleLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV.map((item) => document.getElementById(item.id));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top));
        if (visible.length > 0 && visible[0].target.id) {
          setActive(visible[0].target.id);
        }
      },
      { threshold: 0.2, rootMargin: "-80px 0px -40% 0px" },
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const go = useCallback((id: string) => {
    setOpen(false);
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 15);
  }, []);

  return (
    <>
      <nav className={`nb${scrolled || open ? " nb--scrolled" : ""}`}>
        <div className="nb__inner">
          <a
            href="#"
            className="nb__logo"
            onClick={(event) => {
              event.preventDefault();
              setOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <img src="/images/logo-mb.png" alt="MB Logo" width={40} height={40} className="nb__logo-img" />
          </a>

          <div className="nb__desktop">
            {NAV.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`nb__link${active === item.id ? " nb__link--active" : ""}`}
                onClick={() => go(item.id)}
              >
                {lang === "fr" ? item.fr : item.en}
                {active === item.id ? <span className="nb__link-bar" /> : null}
              </button>
            ))}
            <button type="button" className="nb__lang" onClick={toggleLang}>
              {lang === "fr" ? "EN" : "FR"}
            </button>
          </div>

          <div className="nb__mobile">
            <button type="button" className="nb__lang nb__lang--m" onClick={toggleLang}>
              {lang === "fr" ? "EN" : "FR"}
            </button>
            <button
              type="button"
              aria-label="Menu"
              aria-expanded={open}
              className={`nb__burger${open ? " nb__burger--open" : ""}`}
              onClick={() => setOpen((value) => !value)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`nb__overlay${open ? " nb__overlay--open" : ""}`}
        onClick={(event) => {
          if (event.target === event.currentTarget) setOpen(false);
        }}
      >
        <div className="nb__overlay-inner">
          {NAV.map((item, index) => (
            <button
              key={item.id}
              type="button"
              style={{ animationDelay: `${index * 0.06}s` }}
              className={`nb__olink${active === item.id ? " nb__olink--active" : ""}`}
              onClick={() => go(item.id)}
            >
              {lang === "fr" ? item.fr : item.en}
            </button>
          ))}
          <div className="nb__odivider" />
          <p className="nb__osub">{t("Marketing Digital · Fès, Maroc", "Digital Marketing · Fès, Morocco")}</p>
        </div>
      </div>
    </>
  );
}