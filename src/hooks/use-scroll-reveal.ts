import { useEffect } from "react";

export function useScrollReveal(dep?: unknown) {
  useEffect(() => {
    const els = document.querySelectorAll(".mcs .reveal:not(.visible)");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    els.forEach((el) => {
      obs.observe(el);
      if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add("visible");
    });
    return () => obs.disconnect();
  }, [dep]);
}
