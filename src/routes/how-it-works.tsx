import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import heroBgImg from "@/assets/india-commerce-wide.png";
import qualityImg from "@/assets/quality-delivery-scene.png";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How It Works — MyCheckStore" },
      { name: "description", content: "Learn how MyCheckStore works in 5 simple steps — from joining as a partner to earning instant settlements." },
    ],
  }),
  component: HowItWorksPage,
});

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".mcs .reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); } }),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => { io.observe(el); if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add("visible"); });
    return () => io.disconnect();
  }, []);
}

const steps = [
  {
    num: "01",
    icon: "🤝",
    title: "Join & Get Verified",
    color: "#C8710A",
    desc: "Sign up online in under 10 minutes. Submit your Aadhaar, PAN and address proof. Our regional verification team reviews your application and activates your account within 24 hours.",
    details: ["Identity verification via Aadhaar/PAN", "Address proof validation", "Background check by our team", "Welcome onboarding call included"],
  },
  {
    num: "02",
    icon: "🏪",
    title: "Configure Your Store",
    color: "#E07B12",
    desc: "Access our partner dashboard and select from 5,000+ pre-verified products across groceries, personal care, electronics, and more. Curate your catalog to match your neighborhood's needs.",
    details: ["5,000+ products to choose from", "Category-wise catalogue browsing", "Custom store branding options", "Smart neighborhood demand insights"],
  },
  {
    num: "03",
    icon: "📢",
    title: "Share with Your Community",
    color: "#D4891F",
    desc: "Use our built-in sharing tools to broadcast your verified digital store via WhatsApp, Instagram and local community groups. Our AI helps you target the right customers in your area.",
    details: ["WhatsApp & social media integration", "Automated customer reachout tools", "QR code for your store", "GPS-based neighborhood targeting"],
  },
  {
    num: "04",
    icon: "✅",
    title: "Receive & Verify Orders",
    color: "#B86409",
    desc: "When a customer places an order, you receive it instantly on your partner app. Coordinate pickup from our supply hub, inspect quality, and deliver to your customer — all tracked in real-time.",
    details: ["Instant order notifications", "Supply hub pickup coordination", "Physical quality inspection checklist", "Real-time GPS delivery tracking"],
  },
  {
    num: "05",
    icon: "💰",
    title: "Earn & Grow",
    color: "#A85D08",
    desc: "The moment your customer confirms delivery, your earning is credited instantly — no waiting. Track your income, growth charts, and customer reviews all in one dashboard.",
    details: ["Instant settlement on delivery", "Monthly performance bonuses", "Detailed earnings analytics", "Growth mentorship from our team"],
  },
];

function HowItWorksPage() {
  useReveal();
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="mcs">
      <SiteHeader />

      {/* PAGE BANNER */}
      <section className="page-banner">
        <div className="page-banner-img">
          <img src={heroBgImg} alt="" loading="eager" />
        </div>
        <div className="container">
          <div className="page-banner-inner reveal">
            <span className="section-label" style={{ color: "var(--amber-light)" }}>The Process</span>
            <h1 className="page-banner-title">How It <em>Works</em></h1>
            <p className="page-banner-sub">
              From zero to your first earning — our proven 5-step system is designed to get you up and running in under 7 days, with zero upfront investment.
            </p>
          </div>
        </div>
      </section>

      {/* INTERACTIVE STEP EXPLORER */}
      <section style={{ background: "var(--surface-2)" }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: "center", marginBottom: 60 }}>
            <span className="section-label">Step-by-Step</span>
            <h2 className="section-h2">Your Journey to <em className="italic">Success</em></h2>
          </div>

          <div className="hiw-interactive">
            {/* Step tabs */}
            <div className="hiw-tabs">
              {steps.map((s, i) => (
                <button
                  key={s.num}
                  className={`hiw-tab ${activeStep === i ? "active" : ""}`}
                  onClick={() => setActiveStep(i)}
                >
                  <span className="hiw-tab-icon">{s.icon}</span>
                  <span className="hiw-tab-num">{s.num}</span>
                  <span className="hiw-tab-title">{s.title}</span>
                </button>
              ))}
            </div>

            {/* Step content */}
            <div className="hiw-content-panel">
              {steps.map((s, i) => (
                <div key={s.num} className={`hiw-panel ${activeStep === i ? "active" : ""}`}>
                  <div className="hiw-panel-num" style={{ color: s.color }}>{s.num}</div>
                  <div className="hiw-panel-icon">{s.icon}</div>
                  <h3 className="hiw-panel-title">{s.title}</h3>
                  <p className="hiw-panel-desc">{s.desc}</p>
                  <div className="hiw-panel-details">
                    {s.details.map((d) => (
                      <div className="hiw-pd-item" key={d}>
                        <span className="hiw-pd-check">✓</span>
                        {d}
                      </div>
                    ))}
                  </div>
                  <div className="hiw-panel-cta">
                    {i < steps.length - 1 ? (
                      <button className="btn-primary" onClick={() => setActiveStep(i + 1)}>
                        Next: {steps[i + 1].title} →
                      </button>
                    ) : (
                      <Link to="/partner" className="btn-primary">Apply to Partner Now →</Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE VIEW */}
      <section>
        <div className="container">
          <div className="reveal" style={{ textAlign: "center" }}>
            <span className="section-label">The Timeline</span>
            <h2 className="section-h2">From Day 1 to <em className="italic">First Earning</em></h2>
            <p className="section-sub" style={{ margin: "16px auto 0", textAlign: "center" }}>
              Most partners complete their first transaction within 7 days of signing up.
            </p>
          </div>
          <div className="hiw-timeline">
            {[
              { day: "Day 1", label: "Apply Online", desc: "Submit your application with basic KYC documents in 10 minutes." },
              { day: "Day 2", label: "Verification Call", desc: "Our team calls to verify your details and activate your account." },
              { day: "Day 3", label: "Store Setup", desc: "Configure your product catalogue and set up your digital storefront." },
              { day: "Day 4–5", label: "Community Share", desc: "Share your store link with neighbors via WhatsApp & social media." },
              { day: "Day 6–7", label: "First Order", desc: "Receive, verify, deliver your first order and get paid instantly." },
            ].map((t, i) => (
              <div className={`hiw-tl-item reveal reveal-delay-${Math.min(i, 3)}`} key={t.day}>
                <div className="hiw-tl-marker">
                  <div className="hiw-tl-dot" />
                  {i < 4 && <div className="hiw-tl-line" />}
                </div>
                <div className="hiw-tl-body">
                  <div className="hiw-tl-day">{t.day}</div>
                  <div className="hiw-tl-label">{t.label}</div>
                  <div className="hiw-tl-desc">{t.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUALITY PREVIEW */}
      <section style={{ background: "var(--surface-2)" }}>
        <div className="container">
          <div className="split">
            <div className="split-img reveal">
              <img src={qualityImg} alt="Quality delivery" />
            </div>
            <div className="reveal reveal-delay-2">
              <span className="section-label">Our Promise to You</span>
              <h2 className="section-h2">You Focus on <em className="italic">Sales.</em><br />We Handle the Rest.</h2>
              <p className="section-sub">
                MyCheckStore manages the entire supply chain — sourcing, quality control, logistics, and payments. You just take orders and deliver to customers you already know.
              </p>
              <div className="split-features">
                {[
                  { icon: "📦", text: "Supply chain managed by us" },
                  { icon: "🔍", text: "Every product quality-verified" },
                  { icon: "⚡", text: "Instant settlement on delivery" },
                  { icon: "🎓", text: "Training and mentorship included" },
                ].map(({ icon, text }) => (
                  <div className="split-feature" key={text}>
                    <span>{icon}</span> {text}
                  </div>
                ))}
              </div>
              <Link to="/partner" className="btn-primary" style={{ marginTop: 32, display: "inline-flex" }}>
                Start Your Journey →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="container">
          <div className="reveal" style={{ textAlign: "center" }}>
            <span className="section-label">Questions</span>
            <h2 className="section-h2">Frequently Asked <em className="italic">Questions</em></h2>
          </div>
          <div className="faq-grid reveal reveal-delay-1">
            {[
              { q: "Do I need any prior business experience?", a: "No experience needed. Our onboarding training covers everything from customer handling to delivery protocols. We guide you every step of the way." },
              { q: "How much time does it take daily?", a: "Most partners spend 2–4 hours per day. You control your availability. Take orders only when you're free — there's no minimum requirement." },
              { q: "What if a customer is unsatisfied?", a: "Our quality guarantee covers all returns. If a product fails our quality check, we replace it at no cost. Your reputation stays protected." },
              { q: "Is there a contract or lock-in period?", a: "No contracts, no lock-ins. You can pause or stop anytime. We believe in earning your loyalty through value, not contracts." },
            ].map(({ q, a }, i) => <FAQItem key={i} question={q} answer={a} />)}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section style={{ background: "var(--surface-2)", paddingBottom: 100 }}>
        <div className="container">
          <div className="cta-band reveal">
            <div className="cta-band-glow" />
            <h2>Ready to Start Your<br /><em>Partner Journey?</em></h2>
            <p>Join 10,000+ partners already earning with MyCheckStore. Apply in 10 minutes, start earning in 7 days.</p>
            <div className="cta-band-actions">
              <Link to="/partner" className="btn-partner-primary">Apply to Partner →</Link>
              <Link to="/contact" className="btn-partner-ghost">Talk to Us First</Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? "open" : ""}`}>
      <button className="faq-q" onClick={() => setOpen((v) => !v)}>
        <span>{question}</span>
        <span className="faq-chevron">{open ? "−" : "+"}</span>
      </button>
      {open && <div className="faq-a">{answer}</div>}
    </div>
  );
}
