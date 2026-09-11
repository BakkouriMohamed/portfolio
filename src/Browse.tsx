import { useCallback, useEffect, useId, useState, type ReactNode } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { INDEX, useLang } from "./i18n";
import { ContactBody, Footer } from "./Contact";
import { VisionBody } from "./Hero";
import { MethodBody } from "./Method";
import { Navbar } from "./Navbar";
import { PanelOpenProvider } from "./panelOpen";
import { PathBody } from "./Path";
import { ProofBody } from "./Proof";
import { pinBrowseElementY } from "./scrollBrowse";
import { Stage } from "./Stage";
import { WorkBody } from "./Work";

type Id = (typeof INDEX)[number]["id"];

function panelFromHash(): Id | null {
  const hash = window.location.hash.replace(/^#/, "");
  if (!hash) return null;
  return INDEX.some((item) => item.id === hash) ? (hash as Id) : null;
}

export function Browse() {
  const { lang, t } = useLang();
  const baseId = useId();
  const [openId, setOpenId] = useState<Id | null>(null);

  const closePanel = useCallback(() => {
    const title = openId ? document.getElementById(`title-${openId}`) : null;
    setOpenId(null);
    const hash = window.location.hash.replace(/^#/, "");
    if (INDEX.some((item) => item.id === hash)) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
    if (title) pinBrowseElementY(title);
  }, [openId]);

  const openPanel = useCallback((id: Id) => {
    const title = document.getElementById(`title-${id}`);
    setOpenId(id);
    window.history.replaceState(null, "", `#${id}`);
    if (title) pinBrowseElementY(title);
  }, []);

  function toggle(id: Id) {
    if (openId === id) {
      closePanel();
      return;
    }
    openPanel(id);
  }

  useEffect(() => {
    if (!openId) return;

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      if (target.closest(`[data-browse-block="${openId}"]`)) return;
      if (target.closest("[data-stage-panel]")) return;
      closePanel();
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [openId, closePanel]);

  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, "");
    if (INDEX.some((item) => item.id === hash)) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }

    const onHash = () => {
      const next = panelFromHash();
      setOpenId(next);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const panels: Record<Id, ReactNode> = {
    top: <VisionBody />,
    results: <ProofBody />,
    work: <WorkBody />,
    method: <MethodBody />,
    path: <PathBody />,
    contact: <ContactBody />,
  };

  return (
    <PanelOpenProvider value={openPanel}>
      <Navbar />
      <div className="app-main">
        <div className={`browse-layout${openId === "work" ? " browse-layout--work" : ""}`}>
          <ScrollArea
            className="browse-scroll"
            viewportClassName="scroll-fade"
            orientation="vertical"
          >
            <section
              id="index"
              className={`browse${openId ? " browse--has-open" : ""}`}
              aria-label={t("Index", "Index")}
            >
              <div className="browse__rail shell">
                <div className="browse__list">
                  {INDEX.map((item) => {
                    const open = openId === item.id;
                    const panelId = `${baseId}-${item.id}`;
                    return (
                      <div
                        key={item.id}
                        data-browse-block={item.id}
                        className={`browse__block${open ? " browse__block--open" : ""}`}
                      >
                        <button
                          type="button"
                          id={`title-${item.id}`}
                          className={`browse__item${open ? " browse__item--active" : ""}`}
                          aria-expanded={open}
                          aria-controls={panelId}
                          onClick={() => toggle(item.id)}
                        >
                          <span className="browse__n">{item.n}</span>
                          <span className="browse__title">{lang === "fr" ? item.fr : item.en}</span>
                        </button>
                        <div
                          id={panelId}
                          className="browse__panel"
                          role="region"
                          aria-labelledby={`title-${item.id}`}
                          aria-hidden={!open}
                          inert={!open ? true : undefined}
                        >
                          <div className="browse__panel-inner">{panels[item.id]}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          </ScrollArea>
          <Stage openId={openId} />
        </div>
        <Footer />
      </div>
    </PanelOpenProvider>
  );
}
