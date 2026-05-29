import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { a as SiteHeader, S as SiteFooter } from "./site-footer-Scm-YeOU.mjs";
import { h as heroBgImg } from "./hero-bg-market-UNu3pex5.mjs";
import "../_libs/tanstack__react-router.mjs";
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
function ContactPage() {
  useReveal();
  const [form, setForm] = reactExports.useState({
    name: "",
    email: "",
    phone: "",
    subject: "general",
    message: ""
  });
  const [sent, setSent] = reactExports.useState(false);
  const handle = (e) => setForm((f) => ({
    ...f,
    [e.target.name]: e.target.value
  }));
  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcs", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "page-banner", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "page-banner-img", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroBgImg, alt: "", loading: "eager" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "page-banner-inner reveal", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-label", style: {
          color: "var(--amber-light)"
        }, children: "We're Here" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "page-banner-title", children: [
          "Get In ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "Touch" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "page-banner-sub", children: "Whether you're interested in partnering, have a question about quality, or just want to say hello — we respond within 4 hours." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { style: {
      background: "var(--surface-2)"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "contact-info-cards reveal", children: [{
      icon: "📞",
      title: "Call Us",
      val: "+91 98765 43210",
      sub: "Mon–Sat, 9 AM – 7 PM IST",
      href: "tel:+919876543210"
    }, {
      icon: "📧",
      title: "Email Us",
      val: "hello@mycheckstore.in",
      sub: "We respond within 4 hours",
      href: "mailto:hello@mycheckstore.in"
    }, {
      icon: "💬",
      title: "WhatsApp",
      val: "+91 98765 43210",
      sub: "Chat with partner team anytime",
      href: "https://wa.me/919876543210"
    }, {
      icon: "🏢",
      title: "Head Office",
      val: "Bengaluru, Karnataka",
      sub: "Koramangala 5th Block, 560034",
      href: "#"
    }].map(({
      icon,
      title,
      val,
      sub,
      href
    }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { className: "cic-card", href, target: href.startsWith("http") ? "_blank" : void 0, rel: "noreferrer", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cic-icon", children: icon }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cic-title", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cic-val", children: val }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cic-sub", children: sub })
    ] }, title)) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "contact-main-grid", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-label", children: "Send a Message" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "section-h2", children: [
          "We'd Love to",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic", children: "Hear From You." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "section-sub", children: "Fill out the form and our team will get back to you within 4 business hours. For urgent partner queries, please call or WhatsApp us directly." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "contact-topics", style: {
          marginTop: 36
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ct-title", children: "Popular Reasons to Contact Us" }),
          [{
            icon: "🤝",
            label: "Partner application & onboarding"
          }, {
            icon: "🔍",
            label: "Quality complaints & feedback"
          }, {
            icon: "💰",
            label: "Settlement & payment queries"
          }, {
            icon: "📱",
            label: "App & dashboard support"
          }, {
            icon: "📣",
            label: "Media & press inquiries"
          }, {
            icon: "💼",
            label: "Business & investor relations"
          }].map(({
            icon,
            label
          }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ct-item", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: icon }),
            label
          ] }, label))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "contact-office-hours", style: {
          marginTop: 36
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "coh-title", children: "Office Hours" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "coh-row", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Partner Support" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Mon–Sat, 8 AM–8 PM" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "coh-row", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Customer Support" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "7 days, 9 AM–9 PM" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "coh-row", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Technical Support" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Mon–Fri, 10 AM–6 PM" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "reveal reveal-delay-2", children: sent ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "contact-success", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cs-icon", children: "✅" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Message Sent!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "Thank you, ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: form.name }),
          "! We'll reply to ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: form.email }),
          " within 4 hours."
        ] })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "form-card", onSubmit: submit, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "form-title", children: "Send Us a Message" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "field-row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Your Name *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name: "name", placeholder: "Full name", value: form.name, onChange: handle, required: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Phone Number" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name: "phone", type: "tel", placeholder: "+91 98765 43210", value: form.phone, onChange: handle })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "field", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Email Address *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name: "email", type: "email", placeholder: "you@email.com", value: form.email, onChange: handle, required: true })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "field", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Subject" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { name: "subject", value: form.subject, onChange: handle, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "general", children: "General Inquiry" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "partner", children: "Partner Application" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "quality", children: "Quality Feedback" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "payment", children: "Payment / Settlement" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "support", children: "Technical Support" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "press", children: "Press / Media" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "field", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Message *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { name: "message", rows: 5, placeholder: "Tell us how we can help you...", value: form.message, onChange: handle, required: true })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "btn-primary btn-block", style: {
          fontSize: 15,
          padding: "14px"
        }, children: "Send Message →" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "auth-note", children: "We respect your privacy. Your information is never shared with third parties." })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { style: {
      background: "var(--surface-2)"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal", style: {
        textAlign: "center"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-label", children: "Where We Are" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "section-h2", children: [
          "Our ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic", children: "Offices" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "office-grid reveal reveal-delay-1", children: [{
        city: "Bengaluru",
        address: "Koramangala 5th Block\n100 Feet Road, 560034",
        tag: "Headquarters",
        phone: "+91 98765 43210"
      }, {
        city: "Hyderabad",
        address: "Hitech City, Madhapur\nTelangana, 500081",
        tag: "South India Hub",
        phone: "+91 98765 43211"
      }, {
        city: "Pune",
        address: "Hinjewadi Phase 1\nPune, Maharashtra, 411057",
        tag: "West India Hub",
        phone: "+91 98765 43212"
      }].map(({
        city,
        address,
        tag,
        phone
      }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "office-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "oc-tag", children: tag }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "oc-city", children: city }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "oc-address", children: address }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "oc-phone", children: phone })
      ] }, city)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  ContactPage as component
};
