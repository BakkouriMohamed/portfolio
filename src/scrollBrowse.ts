/** Scroll the Fluid Functionalism ScrollArea viewport (not the window). */
import { smoothScrollTo } from "./smoothScroll";

function browseViewport() {
  return document.querySelector<HTMLElement>('[data-slot="scroll-area-viewport"]');
}

export function scrollBrowseTop() {
  const viewport = browseViewport();
  if (!viewport) return;
  smoothScrollTo(viewport, 0);
}

/**
 * Hold an element’s screen Y steady while accordion layout shifts
 * (bottom-docked spacer collapsing / expanding).
 */
export function pinBrowseElementY(element: HTMLElement, durationMs = 560) {
  const viewport = browseViewport();
  if (!viewport) return;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const anchor = element.getBoundingClientRect().top;

  const correct = () => {
    const drift = element.getBoundingClientRect().top - anchor;
    if (Math.abs(drift) > 0.5) viewport.scrollTop += drift;
  };

  if (reduce) {
    requestAnimationFrame(correct);
    return;
  }

  const start = performance.now();
  const tick = (now: number) => {
    correct();
    if (now - start < durationMs) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}
