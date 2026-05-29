import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { a as SiteHeader, S as SiteFooter } from "./site-footer-Scm-YeOU.mjs";
import { h as heroBgImg } from "./hero-bg-market-UNu3pex5.mjs";
import { i as indiaBgImg } from "./india-commerce-wide-C2LWxqOw.mjs";
import { q as qualityImg } from "./quality-delivery-scene-DXUVXX5g.mjs";
import { p as partnerImg } from "./store-partner-hero-DK39prrk.mjs";
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
function HomePage() {
  useReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcs", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "home-hero", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "home-hero-bg", style: {
        backgroundImage: `url(${heroBgImg})`
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "home-hero-overlay" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "home-hero-grid" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container home-hero-body", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "home-hero-content", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "reveal", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "home-hero-tag", children: "🇮🇳 India's #1 Neighborhood Commerce" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "home-hero-h1 reveal reveal-delay-1", children: [
            "Your Trusted",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "Neighborhood" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Commerce Hub."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "home-hero-sub reveal reveal-delay-2", children: "Connecting verified local partners with their communities. Zero stock risk, transparent pricing, and instant settlement — reimagined for India." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "home-hero-actions reveal reveal-delay-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/partner", className: "btn-hero-primary", children: "Join as Partner →" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/how-it-works", className: "btn-hero-outline btn-hero-outline-light", children: "See How It Works" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "home-hero-stats reveal reveal-delay-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hhs-item", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hhs-val", children: "10K+" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hhs-label", children: "Verified Partners" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hhs-div" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hhs-item", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hhs-val", children: "₹84Cr+" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hhs-label", children: "Paid to Partners" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hhs-div" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hhs-item", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hhs-val", children: "100%" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hhs-label", children: "Quality Assured" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "home-hero-card reveal reveal-delay-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hhc-glow" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hhc-header", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hhc-dot green" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Live Partner Dashboard" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hhc-title", children: [
            "Verified Partners",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Near ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "You" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hhc-partners", children: [{
            icon: "🛒",
            name: "Ravi's General Store",
            loc: "Koramangala, Bengaluru"
          }, {
            icon: "🌾",
            name: "Lakshmi Agro Centre",
            loc: "Indiranagar, Bengaluru"
          }, {
            icon: "📱",
            name: "Tech World Express",
            loc: "Jayanagar, Bengaluru"
          }].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hhc-partner-row", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hhc-pi", children: p.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hhc-pn", children: p.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hhc-pl", children: p.loc })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hhc-badge", children: "✓ Verified" })
          ] }, p.name)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hhc-footer", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hhc-metric", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hhc-mval", children: "₹2.4L" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hhc-mlbl", children: "Avg. Monthly" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hhc-metric", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hhc-mval", children: "4.9★" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hhc-mlbl", children: "Partner Rating" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hhc-metric", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hhc-mval", children: "0%" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hhc-mlbl", children: "Stock Risk" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hhc-float-badge", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hhc-fb-label", children: "Today's Settlements" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hhc-fb-val", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "+₹" }),
              "84,200"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hhc-fb-trend", children: "↑ 12% vs yesterday" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "home-hero-scroll", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "scroll-mouse", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "scroll-wheel" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Scroll to explore" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "marquee-strip", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "marquee-track", children: [...Array(2)].flatMap((_, s) => ["Zero Inventory Risk", "Verified Local Partners", "Instant Settlement", "100% Quality Checked", "Made for India", "Neighborhood Commerce", "Transparent Pricing", "Zero Hidden Fees"].map((l, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `marquee-item${i % 2 === 0 ? " highlight" : ""}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "marquee-dot" }),
      l
    ] }, `${s}-${i}`))) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "navcards-section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal", style: {
        textAlign: "center"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-label", children: "Everything You Need" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "section-h2", children: [
          "Explore ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic", children: "MyCheckStore" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "section-sub", style: {
          margin: "16px auto 0",
          textAlign: "center"
        }, children: "From understanding our process to becoming a partner — explore every part of our platform." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "home-navcards reveal reveal-delay-1", children: [{
        to: "/how-it-works",
        bg: indiaBgImg,
        label: "The Process",
        title: "How It Works",
        desc: "From signup to your first sale — our 5-step system explained in detail.",
        cta: "Learn the Process →"
      }, {
        to: "/quality",
        bg: qualityImg,
        label: "Our Standard",
        title: "Quality Promise",
        desc: "Every product physically verified. Zero adulteration, always. Our guarantee.",
        cta: "See Our Standards →"
      }, {
        to: "/partner",
        bg: partnerImg,
        label: "Opportunity",
        title: "Become a Partner",
        desc: "Start your digital store with zero investment. Join 10,000+ partners.",
        cta: "Apply Today →"
      }].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: c.to, className: "home-navcard", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: c.bg, alt: c.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "home-navcard-body", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hnc-label", children: c.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: c.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: c.desc }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hnc-cta", children: c.cta })
        ] })
      ] }, c.to)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "home-impact-section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "home-impact-bg", style: {
        backgroundImage: `url(${indiaBgImg})`
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "home-impact-overlay" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", style: {
        position: "relative",
        zIndex: 1
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "home-impact-grid reveal", children: [{
        val: "10,000+",
        label: "Active Partners",
        sub: "Across 120+ cities"
      }, {
        val: "₹84Cr+",
        label: "Settlements Paid",
        sub: "In the last 12 months"
      }, {
        val: "98.4%",
        label: "Quality Score",
        sub: "Verified product rate"
      }, {
        val: "4.9★",
        label: "Partner Rating",
        sub: "Average satisfaction"
      }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hip-stat", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hip-val", children: s.val }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hip-label", children: s.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hip-sub", children: s.sub })
      ] }, s.val)) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "why-bg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal", style: {
        textAlign: "center"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-label", children: "Why MyCheckStore Wins" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "section-h2", children: [
          "Technology Built for",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic", children: "Real Commerce" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "why-bento", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bento-card featured reveal", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bento-big-icon", children: "⚡" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bento-icon", children: "⚡" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bento-num", children: "0s" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bento-title", children: "Lightning Fast Settlement" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bento-desc", children: "Get paid the moment your customer accepts the order. No waiting, no bureaucracy." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/how-it-works", className: "bento-cta", children: "Explore the Technology →" })
        ] }),
        [{
          icon: "📦",
          title: "Zero Stock Model",
          desc: "Only process what's already sold. No inventory risk, zero upfront capital."
        }, {
          icon: "🛡️",
          title: "Quality Guarantee",
          desc: "Every product physically verified before dispatch. 98.4% satisfaction rate."
        }, {
          icon: "📊",
          title: "Smart Dashboard",
          desc: "Real-time tracking of orders and earnings in one simple interface."
        }, {
          icon: "🌐",
          title: "Digital Inventory",
          desc: "5,000+ verified products. List what your neighborhood needs most."
        }, {
          icon: "🎓",
          title: "Growth Mentorship",
          desc: "Dedicated partner success team. We grow with you, not just at signup."
        }].map(({
          icon,
          title,
          desc
        }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `bento-card reveal reveal-delay-${Math.min(i + 1, 4)}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bento-icon", children: icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bento-title", children: title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bento-desc", children: desc })
        ] }, title))
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "testimonials-section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal", style: {
        textAlign: "center"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-label", children: "Partner Stories" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "section-h2", children: [
          "Voices From Our ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic", children: "Community" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "testi-grid", children: [{
        img: testimonialRajesh,
        name: "Rajesh Kumar",
        role: "Digital Partner",
        loc: "Bengaluru, KA",
        quote: "Started with zero stock and now serve over 200 families. MyCheckStore changed everything for me.",
        earn: "₹2.8L / month"
      }, {
        img: testimonialPriya,
        name: "Priya Sharma",
        role: "Neighborhood Partner",
        loc: "Hyderabad, TS",
        quote: "Instant settlement is a game changer. I get paid the moment my customer accepts — no waiting.",
        earn: "₹1.9L / month"
      }, {
        img: testimonialAnand,
        name: "Anand Patel",
        role: "Verified Customer",
        loc: "Pune, MH",
        quote: "Every product is verified. My community finally has a local store I can fully rely on.",
        earn: "Saved ₹4,200"
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "testi-role", children: t.role }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "testi-loc", children: [
              "📍 ",
              t.loc
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "testi-earnings", children: t.earn })
          ] })
        ] })
      ] }, t.name)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "cta-band-section", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "cta-band reveal", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cta-band-glow" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cta-band-big-num", children: "₹2.4L" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { children: [
        "Average Monthly Earnings",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "for Active Partners." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Join 10,000+ partners who've built thriving businesses with zero inventory risk. Apply today and start earning this month." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "cta-band-actions", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/partner", className: "btn-partner-primary", children: "Apply to Partner →" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/how-it-works", className: "btn-partner-ghost", children: "Learn How It Works" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  HomePage as component
};
