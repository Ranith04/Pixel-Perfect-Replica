import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { a as SiteHeader, S as SiteFooter } from "./site-footer-Scm-YeOU.mjs";
import { q as qualityImg } from "./quality-delivery-scene-DXUVXX5g.mjs";
import { h as heroBgImg } from "./hero-bg-market-UNu3pex5.mjs";
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
const qualityInspectionImg = "/assets/quality-inspection-nr9TvZZ1.png";
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
const stages = [{
  num: "01",
  icon: "🏭",
  title: "Source Verification",
  desc: "We partner exclusively with FSSAI-certified suppliers and manufacturers. Every supplier undergoes a rigorous 28-point background check before being listed on our platform.",
  color: "#C8710A"
}, {
  num: "02",
  icon: "🔬",
  title: "Lab Testing",
  desc: "Random product samples are sent to accredited labs monthly. We test for adulterants, expiry compliance, nutritional label accuracy, and packaging integrity.",
  color: "#D4891F"
}, {
  num: "03",
  icon: "📋",
  title: "Partner Inspection",
  desc: "Before every single delivery, our trained partners physically inspect each product — checking for damage, expiry, seal integrity, and quantity accuracy.",
  color: "#B86409"
}, {
  num: "04",
  icon: "⭐",
  title: "Customer Rating",
  desc: "Every delivery is rated by the customer. Products falling below 4.0 stars are automatically paused pending re-evaluation. Your feedback drives our standards.",
  color: "#A85D08"
}];
function QualityPage() {
  useReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcs", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "page-banner", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "page-banner-img", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroBgImg, alt: "", loading: "eager" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "page-banner-inner reveal", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-label", style: {
          color: "var(--amber-light)"
        }, children: "Our Standard" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "page-banner-title", children: [
          "The Quality ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "Promise" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "page-banner-sub", children: "We don't just promise quality — we enforce it with a 4-stage verification process that covers every product, every order, every time." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "quality-score-band", children: [{
      val: "98.4%",
      label: "Quality Score"
    }, {
      val: "4.9★",
      label: "Avg. Customer Rating"
    }, {
      val: "28-Point",
      label: "Supplier Checklist"
    }, {
      val: "0 Tolerance",
      label: "Adulteration Policy"
    }].map(({
      val,
      label
    }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "qsb-item", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "qsb-val", children: val }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "qsb-label", children: label })
    ] }, val)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal", style: {
        textAlign: "center"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-label", children: "Our Process" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "section-h2", children: [
          "A 4-Stage ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic", children: "Quality Shield" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "section-sub", style: {
          margin: "16px auto 0",
          textAlign: "center"
        }, children: "From the supplier's warehouse to your doorstep — four independent checkpoints ensure only the best reaches you." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "quality-stages", children: stages.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `quality-stage reveal reveal-delay-${Math.min(i, 3)}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "qs-icon-wrap", style: {
          background: `${s.color}18`,
          border: `2px solid ${s.color}33`
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: s.icon }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "qs-num", style: {
          color: s.color
        }, children: s.num }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "qs-title", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "qs-desc", children: s.desc })
      ] }, s.num)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { style: {
      background: "var(--surface-2)"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "split", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal reveal-delay-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-label", children: "Behind the Scenes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "section-h2", children: [
          "Real Inspectors,",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic", children: "Real Standards." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "section-sub", children: "Our partner inspection protocol isn't just a checklist — it's a commitment. Every partner is trained for 4 hours on quality recognition before their first delivery. They check for expiry dates, seal integrity, product weight, and visual quality on every single unit." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "quality-checks", style: {
          marginTop: 32
        }, children: [{
          icon: "📅",
          title: "Expiry date verified on every item"
        }, {
          icon: "🔒",
          title: "Tamper-proof seal checked"
        }, {
          icon: "⚖️",
          title: "Weight & quantity confirmed"
        }, {
          icon: "👁️",
          title: "Visual quality inspection"
        }, {
          icon: "🌡️",
          title: "Temperature-sensitive items monitored"
        }, {
          icon: "📦",
          title: "Packaging integrity confirmed"
        }].map(({
          icon,
          title
        }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "quality-check", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "check-icon", children: icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "check-title", children: title }) })
        ] }, title)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "split-img reveal reveal-delay-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: qualityInspectionImg, alt: "Quality inspection process" }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "split", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "split-img reveal", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: qualityImg, alt: "Verified delivery" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal reveal-delay-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-label", children: "Customer Experience" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "section-h2", children: [
          "Delivered with",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic", children: "Confidence." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "section-sub", children: "When your order arrives, you can trust that it has passed through 4 independent quality checks. If anything falls short of our standards, our partners are trained to replace it on the spot." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "quality-guarantee-cards", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "qg-card", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "qg-icon", children: "🔄" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "qg-title", children: "Instant Replacement" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "qg-desc", children: "Any quality issue resolved on-the-spot. No questions asked." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "qg-card", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "qg-icon", children: "💰" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "qg-title", children: "Full Refund Policy" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "qg-desc", children: "Not satisfied? Full refund within 24 hours, guaranteed." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "qg-card", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "qg-icon", children: "📞" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "qg-title", children: "24/7 Support" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "qg-desc", children: "Our quality team is available anytime you need help." })
          ] })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { style: {
      background: "var(--surface-2)"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal", style: {
        textAlign: "center"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-label", children: "Product Coverage" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "section-h2", children: [
          "Quality Assured",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic", children: "Across All Categories" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "quality-categories reveal reveal-delay-1", children: [{
        icon: "🥬",
        label: "Fresh Produce",
        count: "500+ items"
      }, {
        icon: "🥛",
        label: "Dairy & Eggs",
        count: "120+ items"
      }, {
        icon: "🌾",
        label: "Grains & Pulses",
        count: "300+ items"
      }, {
        icon: "🧴",
        label: "Personal Care",
        count: "450+ items"
      }, {
        icon: "🏠",
        label: "Household",
        count: "600+ items"
      }, {
        icon: "📱",
        label: "Electronics",
        count: "200+ items"
      }, {
        icon: "👶",
        label: "Baby Products",
        count: "150+ items"
      }, {
        icon: "🐾",
        label: "Pet Supplies",
        count: "80+ items"
      }].map(({
        icon,
        label,
        count
      }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "quality-cat", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "qcat-icon", children: icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "qcat-label", children: label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "qcat-count", children: count })
      ] }, label)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "cta-band reveal", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cta-band-glow" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { children: [
        "Shop with ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "100% Confidence." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Every product. Every order. Every time. Our quality promise is the foundation of everything we do at MyCheckStore." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "cta-band-actions", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/partner", className: "btn-partner-primary", children: "Become a Partner →" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "btn-partner-ghost", children: "Learn More" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  QualityPage as component
};
