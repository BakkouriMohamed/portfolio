/** Subtle ease-out scroll inside an element. Native `smooth` feels abrupt. */

const running = new WeakMap<HTMLElement, number>();

export function smoothScrollTo(
  element: HTMLElement,
  top: number,
  durationMs = 780,
) {
  const from = element.scrollTop;
  const to = Math.max(0, top);
  const delta = to - from;
  if (Math.abs(delta) < 1) return;

  const prev = running.get(element);
  if (prev !== undefined) cancelAnimationFrame(prev);

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) {
    element.scrollTop = to;
    running.delete(element);
    return;
  }

  const start = performance.now();
  // ease-out cubic — soft land, no snap
  const easeOutCubic = (t: number) => 1 - (1 - t) ** 3;

  const tick = (now: number) => {
    const t = Math.min(1, (now - start) / durationMs);
    element.scrollTop = from + delta * easeOutCubic(t);
    if (t < 1) {
      running.set(element, requestAnimationFrame(tick));
      return;
    }
    running.delete(element);
  };

  running.set(element, requestAnimationFrame(tick));
}
