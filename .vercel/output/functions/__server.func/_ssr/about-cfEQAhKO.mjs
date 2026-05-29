import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { a as SiteHeader, S as SiteFooter } from "./site-footer-Scm-YeOU.mjs";
import { i as indiaBgImg } from "./india-commerce-wide-C2LWxqOw.mjs";
import { a as testimonialRajesh, t as testimonialPriya } from "./testimonial-priya-DV1yYoxp.mjs";
import { t as testimonialAnand } from "./testimonial-anand-C9Xl9Lcc.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const teamImg = "/assets/about-team-CMh-aVer.png";
function useReveal() {
  reactExports.useEffect(() => {
    const els = document.querySelectorAll(".mcs .reveal");
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        io.unobserve(e.target);
      }
    }), {
      threshold: 0.1,
      rootMargin: "0px 0px -40px 0px"
    });
    els.forEach((el) => {
      io.observe(el);
      if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add("visible");
    });
    return () => io.disconnect();
  }, []);
}
function AboutPage() {
  useReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcs", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "page-banner", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "page-banner-img", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: indiaBgImg, alt: "", loading: "eager" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "page-banner-inner reveal", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-label", style: {
          color: "var(--amber-light)"
        }, children: "Our Story" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "page-banner-title", children: [
          "About ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "MyCheckStore" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "page-banner-sub", children: "We started with a simple belief: that India's local commerce can be made more transparent, more trustworthy, and more rewarding — for partners and customers alike." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "split", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-label", children: "Our Mission" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "section-h2", children: [
          "Rebuilding Local",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic", children: "Commerce from Trust." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "section-sub", children: "India has 60 million small businesses. Most struggle with inventory risk, payment delays, and customer trust. MyCheckStore was built to solve all three — at once." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "section-sub", style: {
          marginTop: 16
        }, children: "We connect verified, trained local partners with their communities, eliminate inventory risk entirely, and ensure every transaction is quality-controlled and instantly settled." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "about-mission-stats", children: [{
          val: "2021",
          label: "Founded in Bengaluru"
        }, {
          val: "120+",
          label: "Cities Covered"
        }, {
          val: "10,000+",
          label: "Active Partners"
        }].map(({
          val,
          label
        }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ams-item", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ams-val", children: val }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ams-label", children: label })
        ] }, val)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "split-img reveal reveal-delay-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: teamImg, alt: "MyCheckStore team" }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { style: {
      background: "var(--surface-2)"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal", style: {
        textAlign: "center"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-label", children: "What Drives Us" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "section-h2", children: [
          "Our Core ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic", children: "Values" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "about-values reveal reveal-delay-1", children: [{
        icon: "🤝",
        title: "Trust First",
        desc: "Every decision we make — from partner verification to product quality — starts and ends with building trust. Not just earning it once, but sustaining it."
      }, {
        icon: "🔍",
        title: "Radical Transparency",
        desc: "Transparent pricing. Transparent settlements. Transparent quality standards. No hidden fees, no surprises, no fine print that hurts our partners."
      }, {
        icon: "🌱",
        title: "Community Impact",
        desc: "We're not just building a business. We're rebuilding how local communities buy and sell — putting economic power back into the hands of neighborhoods."
      }, {
        icon: "⚡",
        title: "Speed & Simplicity",
        desc: "Complex things should feel simple. From onboarding in 24 hours to instant settlement — we respect your time and remove every unnecessary step."
      }].map(({
        icon,
        title,
        desc
      }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `about-value reveal reveal-delay-${i + 1}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "av-icon", children: icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "av-title", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "av-desc", children: desc })
      ] }, title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal", style: {
        textAlign: "center"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-label", children: "Our Journey" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "section-h2", children: [
          "From Idea to ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic", children: "Movement" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "about-timeline", children: [{
        year: "2021",
        title: "The Idea",
        desc: "Founded in Bengaluru after seeing local store owners struggle with adulterated products and delayed payments from informal supply chains."
      }, {
        year: "2022",
        title: "First 100 Partners",
        desc: "Launched our pilot in 3 Bengaluru neighborhoods. Within 6 months, 100 partners were active and earning consistently."
      }, {
        year: "2023",
        title: "Quality System Built",
        desc: "Developed our 4-stage quality verification system and FSSAI-certified supply network. Zero adulteration became our legal guarantee."
      }, {
        year: "2024",
        title: "National Expansion",
        desc: "Expanded to 50+ cities across India. 5,000 active partners. ₹50Cr+ in partner settlements. India Commerce Award winner."
      }, {
        year: "2025",
        title: "10,000 Partners",
        desc: "Reached 10,000 active partners across 120+ cities. ₹84Cr+ paid to partners. Category leader in neighborhood commerce."
      }].map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `about-tl-item reveal reveal-delay-${Math.min(i, 3)}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "abt-year", children: t.year }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "abt-marker", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "abt-dot" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "abt-body", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "abt-title", children: t.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "abt-desc", children: t.desc })
        ] })
      ] }, t.year)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { style: {
      background: "var(--surface-2)"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal", style: {
        textAlign: "center"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-label", children: "Community Voices" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "section-h2", children: [
          "What People Say ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic", children: "About Us" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "testi-grid", style: {
        marginTop: 48
      }, children: [{
        img: testimonialRajesh,
        name: "Rajesh Kumar",
        role: "Partner since 2022",
        quote: "MyCheckStore isn't just a platform — it's a community that genuinely cares about each partner's success."
      }, {
        img: testimonialPriya,
        name: "Priya Sharma",
        role: "Partner since 2023",
        quote: "The transparency is what sets them apart. I always know exactly what I'm earning and why."
      }, {
        img: testimonialAnand,
        name: "Anand Patel",
        role: "Customer since 2022",
        quote: "I trust MyCheckStore completely. The quality is consistent every single time. That's rare."
      }].map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `testi-card reveal reveal-delay-${i + 1}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "testi-stars", children: "★★★★★" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "testi-quote", children: [
          '"',
          t.quote,
          '"'
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "testi-author", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "testi-avatar", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: t.img, alt: t.name }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "testi-name", children: t.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "testi-role", children: t.role })
          ] })
        ] })
      ] }, t.name)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "cta-band reveal", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cta-band-glow" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { children: [
        "Be Part of the",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "Movement." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Whether you're a prospective partner, a customer who values quality, or someone who believes in community commerce — there's a place for you at MyCheckStore." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "cta-band-actions", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/partner", className: "btn-partner-primary", children: "Join as Partner →" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "btn-partner-ghost", children: "Get in Touch" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  AboutPage as component
};
