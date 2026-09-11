import { useCallback } from "react";
import { useLang } from "./i18n";
import { WorkIcon, WriteIcon } from "./NavIcons";
import { usePanelOpen } from "./panelOpen";
import { scrollBrowseTop } from "./scrollBrowse";

export function Navbar() {
  const { t } = useLang();
  const openPanel = usePanelOpen();

  const goIndex = useCallback(() => {
    scrollBrowseTop();
  }, []);

  return (
    <header className="nb nb--on-ink">
      <div className="nb__inner">
        <nav className="nb__links" aria-label={t("Actions", "Actions")}>
          <button type="button" className="nb__link" onClick={() => openPanel("contact")}>
            <WriteIcon className="nb__link-icon" />
            {t("Écrire", "Write")}
          </button>
          <button type="button" className="nb__link" onClick={() => openPanel("work")}>
            <WorkIcon className="nb__link-icon" />
            {t("Voir le travail", "See the work")}
          </button>
        </nav>
        <a
          href="#index"
          className="nb__brand"
          onClick={(event) => {
            event.preventDefault();
            goIndex();
          }}
        >
          <span className="nb__name">
            <span className="nb__given">Mohamed</span>
            <span className="nb__family">Bakkouri</span>
          </span>
          <span className="nb__role">{t("Marketeur digital", "Digital marketer")}</span>
        </a>
      </div>
    </header>
  );
}
