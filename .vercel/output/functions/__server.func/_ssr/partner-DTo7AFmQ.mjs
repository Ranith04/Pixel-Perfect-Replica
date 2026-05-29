import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { a as SiteHeader, S as SiteFooter } from "./site-footer-Scm-YeOU.mjs";
import { p as partnerImg } from "./store-partner-hero-DK39prrk.mjs";
import { a as testimonialRajesh, t as testimonialPriya } from "./testimonial-priya-DV1yYoxp.mjs";
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
function PartnerPage() {
  useReveal();
  const [form, setForm] = reactExports.useState({
    name: "",
    phone: "",
    city: "",
    pincode: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = reactExports.useState(false);
  const handle = (e) => setForm((f) => ({
    ...f,
    [e.target.name]: e.target.value
  }));
  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcs", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "page-banner", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "page-banner-img", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroBgImg, alt: "", loading: "eager" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "page-banner-inner reveal", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-label", style: {
          color: "var(--amber-light)"
        }, children: "Partner Opportunity" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "page-banner-title", children: [
          "Become a ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "Partner" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "page-banner-sub", children: "Join 10,000+ digital entrepreneurs earning ₹30,000–₹3L per month with zero inventory risk. Start in under 7 days." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { style: {
      background: "var(--surface-2)"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal", style: {
        textAlign: "center"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-label", children: "Earning Potential" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "section-h2", children: [
          "What Could You ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic", children: "Earn?" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "partner-tiers reveal reveal-delay-1", children: [{
        tier: "Starter",
        orders: "1–30 orders/month",
        earn: "₹15,000–₹40,000",
        color: "#9E8C74",
        desc: "Perfect for part-time partners just getting started."
      }, {
        tier: "Active",
        orders: "30–80 orders/month",
        earn: "₹40,000–₹1.2L",
        color: "#C8710A",
        desc: "Full-time partners with an established customer base.",
        featured: true
      }, {
        tier: "Top Partner",
        orders: "80+ orders/month",
        earn: "₹1.2L–₹3.5L+",
        color: "#1A1208",
        desc: "Elite partners with multiple routes and maximum earnings."
      }].map(({
        tier,
        orders,
        earn,
        color,
        desc,
        featured
      }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `partner-tier ${featured ? "featured" : ""}`, style: featured ? {
        borderColor: color
      } : {}, children: [
        featured && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-popular", children: "Most Common" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-tier", style: {
          color
        }, children: tier }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-orders", children: orders }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-earn", style: {
          color
        }, children: earn }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-desc", children: desc })
      ] }, tier)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "split", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "split-img reveal", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: partnerImg, alt: "Partner success story" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal reveal-delay-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-label", children: "Why Join Us" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "section-h2", children: [
          "The Partner",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic", children: "Advantage." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "section-sub", children: "Everything is designed to maximize your earnings while minimizing your risk. We take care of the hard parts so you can focus on growing." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "partner-benefits", children: [{
          icon: "📦",
          title: "Zero Inventory Investment",
          desc: "Never buy stock upfront. You only pay for what your customers have already ordered."
        }, {
          icon: "⚡",
          title: "Instant Settlements",
          desc: "The moment your customer confirms delivery, your earnings land in your account."
        }, {
          icon: "🎓",
          title: "Training & Support",
          desc: "Full onboarding training, weekly group calls, and a dedicated partner success manager."
        }, {
          icon: "📊",
          title: "Growth Analytics",
          desc: "A powerful dashboard showing your earnings, best sellers, and growth opportunities."
        }].map(({
          icon,
          title,
          desc
        }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "partner-benefit", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pb-icon", children: icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pb-title", children: title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pb-desc", children: desc })
          ] })
        ] }, title)) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { style: {
      background: "var(--surface-2)"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal", style: {
        textAlign: "center"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-label", children: "Real Partners, Real Results" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "section-h2", children: [
          "Success ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic", children: "Stories" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "testi-grid", style: {
        marginTop: 48
      }, children: [{
        img: testimonialRajesh,
        name: "Rajesh Kumar",
        city: "Bengaluru",
        earn: "₹2.8L/month",
        months: "14 months",
        quote: "I started with zero investment. Within 2 months I was making more than my previous job. The support team is incredible — they never let me fail."
      }, {
        img: testimonialPriya,
        name: "Priya Sharma",
        city: "Hyderabad",
        earn: "₹1.9L/month",
        months: "8 months",
        quote: "As a homemaker, I wanted something I could do from home. MyCheckStore gave me financial independence without leaving my family."
      }].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "testi-card reveal", style: {
        display: "flex",
        flexDirection: "column"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "testi-stars", children: "★★★★★" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "testi-quote", children: [
          '"',
          t.quote,
          '"'
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "testi-author", style: {
          marginTop: "auto"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "testi-avatar", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: t.img, alt: t.name }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "testi-name", children: t.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "testi-role", children: [
              "📍 ",
              t.city
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "testi-earnings", children: [
              t.earn,
              " · ",
              t.months,
              " active"
            ] })
          ] })
        ] })
      ] }, t.name)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "apply", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "partner-apply-grid", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-label", children: "Apply Now" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "section-h2", children: [
          "Start Your",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic", children: "Application." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "section-sub", children: "Fill out the form and our partner team will contact you within 24 hours to guide you through the next steps." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "partner-apply-perks", children: ["No registration fee", "Instant application review", "Dedicated onboarding call", "Start earning in 7 days"].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pap-item", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "perk-dot" }),
          p
        ] }, p)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "reveal reveal-delay-2", children: submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "partner-success-msg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "psm-icon", children: "🎉" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Application Received!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "Thank you, ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: form.name }),
          "! Our partner team will call you at ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: form.phone }),
          " within 24 hours."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/how-it-works", className: "btn-primary", style: {
          marginTop: 24,
          display: "inline-flex"
        }, children: "Learn How It Works →" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "form-card", onSubmit: submit, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "form-title", children: "Partner Application" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "field-row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Full Name *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name: "name", placeholder: "Your full name", value: form.name, onChange: handle, required: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Phone Number *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name: "phone", type: "tel", placeholder: "+91 98765 43210", value: form.phone, onChange: handle, required: true })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "field-row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "City *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name: "city", placeholder: "Your city", value: form.city, onChange: handle, required: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "PIN Code *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name: "pincode", placeholder: "560001", value: form.pincode, onChange: handle, required: true })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "field", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Email Address" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name: "email", type: "email", placeholder: "you@email.com", value: form.email, onChange: handle })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "field", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Tell Us About Yourself" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { name: "message", placeholder: "E.g. Current occupation, why you want to join, your neighborhood...", rows: 3, value: form.message, onChange: handle })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "btn-primary btn-block", style: {
          fontSize: 15,
          padding: "14px"
        }, children: "Submit Application →" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "auth-note", children: [
          "By submitting, you agree to our ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", children: "Terms & Conditions" }),
          ". We'll never spam you."
        ] })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  PartnerPage as component
};
