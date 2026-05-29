import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import partnerImg from "@/assets/store-partner-hero.png";
import testimonialRajesh from "@/assets/testimonial-rajesh.png";
import testimonialPriya from "@/assets/testimonial-priya.png";
import heroBgImg from "@/assets/hero-bg-market.png";

export const Route = createFileRoute("/partner")({
  head: () => ({
    meta: [
      { title: "Become a Partner — MyCheckStore" },
      { name: "description", content: "Join 10,000+ digital partners earning ₹1-3L per month with zero inventory risk. Apply to become a MyCheckStore partner today." },
    ],
  }),
  component: PartnerPage,
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

type FormState = { name: string; phone: string; city: string; pincode: string; email: string; message: string };

function PartnerPage() {
  useReveal();
  const [form, setForm] = useState<FormState>({ name: "", phone: "", city: "", pincode: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
            <span className="section-label" style={{ color: "var(--amber-light)" }}>Partner Opportunity</span>
            <h1 className="page-banner-title">Become a <em>Partner</em></h1>
            <p className="page-banner-sub">
              Join 10,000+ digital entrepreneurs earning ₹30,000–₹3L per month with zero inventory risk. Start in under 7 days.
            </p>
          </div>
        </div>
      </section>

      {/* EARNINGS TIERS */}
      <section style={{ background: "var(--surface-2)" }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: "center" }}>
            <span className="section-label">Earning Potential</span>
            <h2 className="section-h2">What Could You <em className="italic">Earn?</em></h2>
          </div>
          <div className="partner-tiers reveal reveal-delay-1">
            {[
              { tier: "Starter", orders: "1–30 orders/month", earn: "₹15,000–₹40,000", color: "#9E8C74", desc: "Perfect for part-time partners just getting started." },
              { tier: "Active", orders: "30–80 orders/month", earn: "₹40,000–₹1.2L", color: "#C8710A", desc: "Full-time partners with an established customer base.", featured: true },
              { tier: "Top Partner", orders: "80+ orders/month", earn: "₹1.2L–₹3.5L+", color: "#1A1208", desc: "Elite partners with multiple routes and maximum earnings." },
            ].map(({ tier, orders, earn, color, desc, featured }) => (
              <div className={`partner-tier ${featured ? "featured" : ""}`} key={tier} style={featured ? { borderColor: color } : {}}>
                {featured && <div className="pt-popular">Most Common</div>}
                <div className="pt-tier" style={{ color }}>{tier}</div>
                <div className="pt-orders">{orders}</div>
                <div className="pt-earn" style={{ color }}>{earn}</div>
                <div className="pt-desc">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section>
        <div className="container">
          <div className="split">
            <div className="split-img reveal">
              <img src={partnerImg} alt="Partner success story" />
            </div>
            <div className="reveal reveal-delay-2">
              <span className="section-label">Why Join Us</span>
              <h2 className="section-h2">The Partner<br /><em className="italic">Advantage.</em></h2>
              <p className="section-sub">
                Everything is designed to maximize your earnings while minimizing your risk. We take care of the hard parts so you can focus on growing.
              </p>
              <div className="partner-benefits">
                {[
                  { icon: "📦", title: "Zero Inventory Investment", desc: "Never buy stock upfront. You only pay for what your customers have already ordered." },
                  { icon: "⚡", title: "Instant Settlements", desc: "The moment your customer confirms delivery, your earnings land in your account." },
                  { icon: "🎓", title: "Training & Support", desc: "Full onboarding training, weekly group calls, and a dedicated partner success manager." },
                  { icon: "📊", title: "Growth Analytics", desc: "A powerful dashboard showing your earnings, best sellers, and growth opportunities." },
                ].map(({ icon, title, desc }) => (
                  <div className="partner-benefit" key={title}>
                    <div className="pb-icon">{icon}</div>
                    <div>
                      <div className="pb-title">{title}</div>
                      <div className="pb-desc">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNER SUCCESS STORIES */}
      <section style={{ background: "var(--surface-2)" }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: "center" }}>
            <span className="section-label">Real Partners, Real Results</span>
            <h2 className="section-h2">Success <em className="italic">Stories</em></h2>
          </div>
          <div className="testi-grid" style={{ marginTop: 48 }}>
            {[
              { img: testimonialRajesh, name: "Rajesh Kumar", city: "Bengaluru", earn: "₹2.8L/month", months: "14 months", quote: "I started with zero investment. Within 2 months I was making more than my previous job. The support team is incredible — they never let me fail." },
              { img: testimonialPriya, name: "Priya Sharma", city: "Hyderabad", earn: "₹1.9L/month", months: "8 months", quote: "As a homemaker, I wanted something I could do from home. MyCheckStore gave me financial independence without leaving my family." },
            ].map((t) => (
              <div className="testi-card reveal" key={t.name} style={{ display: "flex", flexDirection: "column" }}>
                <div className="testi-stars">★★★★★</div>
                <p className="testi-quote">"{t.quote}"</p>
                <div className="testi-author" style={{ marginTop: "auto" }}>
                  <div className="testi-avatar"><img src={t.img} alt={t.name} /></div>
                  <div>
                    <div className="testi-name">{t.name}</div>
                    <div className="testi-role">📍 {t.city}</div>
                    <div className="testi-earnings">{t.earn} · {t.months} active</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section id="apply">
        <div className="container">
          <div className="partner-apply-grid">
            <div className="reveal">
              <span className="section-label">Apply Now</span>
              <h2 className="section-h2">Start Your<br /><em className="italic">Application.</em></h2>
              <p className="section-sub">
                Fill out the form and our partner team will contact you within 24 hours to guide you through the next steps.
              </p>
              <div className="partner-apply-perks">
                {["No registration fee", "Instant application review", "Dedicated onboarding call", "Start earning in 7 days"].map((p) => (
                  <div className="pap-item" key={p}><span className="perk-dot" />{p}</div>
                ))}
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              {submitted ? (
                <div className="partner-success-msg">
                  <div className="psm-icon">🎉</div>
                  <h3>Application Received!</h3>
                  <p>Thank you, <strong>{form.name}</strong>! Our partner team will call you at <strong>{form.phone}</strong> within 24 hours.</p>
                  <Link to="/how-it-works" className="btn-primary" style={{ marginTop: 24, display: "inline-flex" }}>Learn How It Works →</Link>
                </div>
              ) : (
                <form className="form-card" onSubmit={submit}>
                  <h3 className="form-title">Partner Application</h3>
                  <div className="field-row">
                    <div className="field">
                      <label>Full Name *</label>
                      <input name="name" placeholder="Your full name" value={form.name} onChange={handle} required />
                    </div>
                    <div className="field">
                      <label>Phone Number *</label>
                      <input name="phone" type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={handle} required />
                    </div>
                  </div>
                  <div className="field-row">
                    <div className="field">
                      <label>City *</label>
                      <input name="city" placeholder="Your city" value={form.city} onChange={handle} required />
                    </div>
                    <div className="field">
                      <label>PIN Code *</label>
                      <input name="pincode" placeholder="560001" value={form.pincode} onChange={handle} required />
                    </div>
                  </div>
                  <div className="field">
                    <label>Email Address</label>
                    <input name="email" type="email" placeholder="you@email.com" value={form.email} onChange={handle} />
                  </div>
                  <div className="field">
                    <label>Tell Us About Yourself</label>
                    <textarea name="message" placeholder="E.g. Current occupation, why you want to join, your neighborhood..." rows={3} value={form.message} onChange={handle} />
                  </div>
                  <button type="submit" className="btn-primary btn-block" style={{ fontSize: 15, padding: "14px" }}>
                    Submit Application →
                  </button>
                  <p className="auth-note">By submitting, you agree to our <a href="#">Terms & Conditions</a>. We'll never spam you.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
