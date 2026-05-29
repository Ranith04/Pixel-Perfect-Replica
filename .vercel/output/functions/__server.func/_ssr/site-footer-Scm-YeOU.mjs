import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useLocation, L as Link } from "../_libs/tanstack__react-router.mjs";
const navItems = [
  { to: "/how-it-works", label: "How It Works" },
  { to: "/quality", label: "Quality Promise" },
  { to: "/partner", label: "Become a Partner" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" }
];
function SiteHeader() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  reactExports.useEffect(() => {
    const o = () => setScrolled(window.scrollY > 40);
    o();
    window.addEventListener("scroll", o);
    return () => window.removeEventListener("scroll", o);
  }, []);
  reactExports.useEffect(() => setOpen(false), [pathname]);
  const solid = scrolled || !isHome;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: solid ? "scrolled" : void 0, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "nav-inner", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "nav-logo", children: [
        "My",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Check" }),
        "Store"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "nav-links", children: navItems.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: n.to, activeProps: { className: "active" }, children: n.label }) }, n.to)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "nav-cta", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", className: "btn-ghost", children: "Log In" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/partner", className: "btn-primary", children: "Join as Partner →" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "hamburger", "aria-label": "Menu", onClick: () => setOpen((v) => !v), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", {})
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `mobile-menu${open ? " open" : ""}`, children: [
      navItems.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: n.to, children: n.label }, n.to)),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", children: "Log In" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/partner", style: { color: "var(--amber)" }, children: "Join as Partner →" })
    ] })
  ] });
}
function SiteFooter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { id: "contact", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "footer-grid", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "footer-brand-logo", children: [
          "My",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Check" }),
          "Store"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "footer-brand-desc", children: "Empowering local partners with technology to build trust-based neighborhood commerce networks across India." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "footer-social", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "social-btn", "aria-label": "Facebook", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "social-btn", "aria-label": "LinkedIn", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "social-btn", "aria-label": "Instagram", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" }) }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "footer-col-title", children: "Company" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "footer-links", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/how-it-works", children: "How It Works" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", children: "About Us" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: "Contact Us" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/quality", children: "Quality Promise" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "footer-col-title", children: "Support" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "footer-links", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: "Help Center" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", children: "Our Mission" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/partner", children: "Partner Support" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/quality", children: "Quality Standards" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "footer-col-title", children: "Get Started" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "footer-links", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/partner", children: "Become a Partner" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", children: "Partner Login" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/how-it-works", children: "How It Works" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: "Contact Sales" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "footer-bottom", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "footer-copy", children: "© 2024 MyCheckStore. All rights reserved." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "footer-made", children: "Made with ❤️ in India" })
    ] })
  ] }) });
}
export {
  SiteFooter as S,
  SiteHeader as a
};
