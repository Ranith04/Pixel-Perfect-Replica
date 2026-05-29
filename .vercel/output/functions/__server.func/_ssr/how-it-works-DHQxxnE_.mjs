import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { a as SiteHeader, S as SiteFooter } from "./site-footer-Scm-YeOU.mjs";
import { i as indiaBgImg } from "./india-commerce-wide-C2LWxqOw.mjs";
import { q as qualityImg } from "./quality-delivery-scene-DXUVXX5g.mjs";
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
const steps = [{
  num: "01",
  icon: "🤝",
  title: "Join & Get Verified",
  color: "#C8710A",
  desc: "Sign up online in under 10 minutes. Submit your Aadhaar, PAN and address proof. Our regional verification team reviews your application and activates your account within 24 hours.",
  details: ["Identity verification via Aadhaar/PAN", "Address proof validation", "Background check by our team", "Welcome onboarding call included"]
}, {
  num: "02",
  icon: "🏪",
  title: "Configure Your Store",
  color: "#E07B12",
  desc: "Access our partner dashboard and select from 5,000+ pre-verified products across groceries, personal care, electronics, and more. Curate your catalog to match your neighborhood's needs.",
  details: ["5,000+ products to choose from", "Category-wise catalogue browsing", "Custom store branding options", "Smart neighborhood demand insights"]
}, {
  num: "03",
  icon: "📢",
  title: "Share with Your Community",
  color: "#D4891F",
  desc: "Use our built-in sharing tools to broadcast your verified digital store via WhatsApp, Instagram and local community groups. Our AI helps you target the right customers in your area.",
  details: ["WhatsApp & social media integration", "Automated customer reachout tools", "QR code for your store", "GPS-based neighborhood targeting"]
}, {
  num: "04",
  icon: "✅",
  title: "Receive & Verify Orders",
  color: "#B86409",
  desc: "When a customer places an order, you receive it instantly on your partner app. Coordinate pickup from our supply hub, inspect quality, and deliver to your customer — all tracked in real-time.",
  details: ["Instant order notifications", "Supply hub pickup coordination", "Physical quality inspection checklist", "Real-time GPS delivery tracking"]
}, {
  num: "05",
  icon: "💰",
  title: "Earn & Grow",
  color: "#A85D08",
  desc: "The moment your customer confirms delivery, your earning is credited instantly — no waiting. Track your income, growth charts, and customer reviews all in one dashboard.",
  details: ["Instant settlement on delivery", "Monthly performance bonuses", "Detailed earnings analytics", "Growth mentorship from our team"]
}];
function HowItWorksPage() {
  useReveal();
  const [activeStep, setActiveStep] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcs", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "page-banner", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "page-banner-img", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: indiaBgImg, alt: "", loading: "eager" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "page-banner-inner reveal", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-label", style: {
          color: "var(--amber-light)"
        }, children: "The Process" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "page-banner-title", children: [
          "How It ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "Works" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "page-banner-sub", children: "From zero to your first earning — our proven 5-step system is designed to get you up and running in under 7 days, with zero upfront investment." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { style: {
      background: "var(--surface-2)"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal", style: {
        textAlign: "center",
        marginBottom: 60
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-label", children: "Step-by-Step" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "section-h2", children: [
          "Your Journey to ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic", children: "Success" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hiw-interactive", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hiw-tabs", children: steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: `hiw-tab ${activeStep === i ? "active" : ""}`, onClick: () => setActiveStep(i), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hiw-tab-icon", children: s.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hiw-tab-num", children: s.num }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hiw-tab-title", children: s.title })
        ] }, s.num)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hiw-content-panel", children: steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `hiw-panel ${activeStep === i ? "active" : ""}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hiw-panel-num", style: {
            color: s.color
          }, children: s.num }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hiw-panel-icon", children: s.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "hiw-panel-title", children: s.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "hiw-panel-desc", children: s.desc }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hiw-panel-details", children: s.details.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hiw-pd-item", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hiw-pd-check", children: "✓" }),
            d
          ] }, d)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hiw-panel-cta", children: i < steps.length - 1 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "btn-primary", onClick: () => setActiveStep(i + 1), children: [
            "Next: ",
            steps[i + 1].title,
            " →"
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/partner", className: "btn-primary", children: "Apply to Partner Now →" }) })
        ] }, s.num)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal", style: {
        textAlign: "center"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-label", children: "The Timeline" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "section-h2", children: [
          "From Day 1 to ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic", children: "First Earning" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "section-sub", style: {
          margin: "16px auto 0",
          textAlign: "center"
        }, children: "Most partners complete their first transaction within 7 days of signing up." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hiw-timeline", children: [{
        day: "Day 1",
        label: "Apply Online",
        desc: "Submit your application with basic KYC documents in 10 minutes."
      }, {
        day: "Day 2",
        label: "Verification Call",
        desc: "Our team calls to verify your details and activate your account."
      }, {
        day: "Day 3",
        label: "Store Setup",
        desc: "Configure your product catalogue and set up your digital storefront."
      }, {
        day: "Day 4–5",
        label: "Community Share",
        desc: "Share your store link with neighbors via WhatsApp & social media."
      }, {
        day: "Day 6–7",
        label: "First Order",
        desc: "Receive, verify, deliver your first order and get paid instantly."
      }].map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `hiw-tl-item reveal reveal-delay-${Math.min(i, 3)}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hiw-tl-marker", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hiw-tl-dot" }),
          i < 4 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hiw-tl-line" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hiw-tl-body", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hiw-tl-day", children: t.day }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hiw-tl-label", children: t.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hiw-tl-desc", children: t.desc })
        ] })
      ] }, t.day)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { style: {
      background: "var(--surface-2)"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "split", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "split-img reveal", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: qualityImg, alt: "Quality delivery" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal reveal-delay-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-label", children: "Our Promise to You" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "section-h2", children: [
          "You Focus on ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic", children: "Sales." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "We Handle the Rest."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "section-sub", children: "MyCheckStore manages the entire supply chain — sourcing, quality control, logistics, and payments. You just take orders and deliver to customers you already know." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "split-features", children: [{
          icon: "📦",
          text: "Supply chain managed by us"
        }, {
          icon: "🔍",
          text: "Every product quality-verified"
        }, {
          icon: "⚡",
          text: "Instant settlement on delivery"
        }, {
          icon: "🎓",
          text: "Training and mentorship included"
        }].map(({
          icon,
          text
        }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "split-feature", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: icon }),
          " ",
          text
        ] }, text)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/partner", className: "btn-primary", style: {
          marginTop: 32,
          display: "inline-flex"
        }, children: "Start Your Journey →" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal", style: {
        textAlign: "center"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-label", children: "Questions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "section-h2", children: [
          "Frequently Asked ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic", children: "Questions" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "faq-grid reveal reveal-delay-1", children: [{
        q: "Do I need any prior business experience?",
        a: "No experience needed. Our onboarding training covers everything from customer handling to delivery protocols. We guide you every step of the way."
      }, {
        q: "How much time does it take daily?",
        a: "Most partners spend 2–4 hours per day. You control your availability. Take orders only when you're free — there's no minimum requirement."
      }, {
        q: "What if a customer is unsatisfied?",
        a: "Our quality guarantee covers all returns. If a product fails our quality check, we replace it at no cost. Your reputation stays protected."
      }, {
        q: "Is there a contract or lock-in period?",
        a: "No contracts, no lock-ins. You can pause or stop anytime. We believe in earning your loyalty through value, not contracts."
      }].map(({
        q,
        a
      }, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FAQItem, { question: q, answer: a }, i)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { style: {
      background: "var(--surface-2)",
      paddingBottom: 100
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "cta-band reveal", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cta-band-glow" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { children: [
        "Ready to Start Your",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "Partner Journey?" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Join 10,000+ partners already earning with MyCheckStore. Apply in 10 minutes, start earning in 7 days." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "cta-band-actions", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/partner", className: "btn-partner-primary", children: "Apply to Partner →" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "btn-partner-ghost", children: "Talk to Us First" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
function FAQItem({
  question,
  answer
}) {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `faq-item ${open ? "open" : ""}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "faq-q", onClick: () => setOpen((v) => !v), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: question }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "faq-chevron", children: open ? "−" : "+" })
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "faq-a", children: answer })
  ] });
}
export {
  HowItWorksPage as component
};
