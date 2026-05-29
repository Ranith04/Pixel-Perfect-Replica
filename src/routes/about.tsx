import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import teamImg from "@/assets/about-team.png";
import heroBgImg from "@/assets/india-commerce-wide.png";
import testimonialRajesh from "@/assets/testimonial-rajesh.png";
import testimonialPriya from "@/assets/testimonial-priya.png";
import testimonialAnand from "@/assets/testimonial-anand.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — MyCheckStore" },
      { name: "description", content: "Learn about MyCheckStore's mission to empower local commerce across India with technology, transparency, and trust." },
    ],
  }),
  component: AboutPage,
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

function AboutPage() {
  useReveal();

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
            <span className="section-label" style={{ color: "var(--amber-light)" }}>Our Story</span>
            <h1 className="page-banner-title">About <em>MyCheckStore</em></h1>
            <p className="page-banner-sub">
              We started with a simple belief: that India's local commerce can be made more transparent, more trustworthy, and more rewarding — for partners and customers alike.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section>
        <div className="container">
          <div className="split">
            <div className="reveal">
              <span className="section-label">Our Mission</span>
              <h2 className="section-h2">Rebuilding Local<br /><em className="italic">Commerce from Trust.</em></h2>
              <p className="section-sub">
                India has 60 million small businesses. Most struggle with inventory risk, payment delays, and customer trust. MyCheckStore was built to solve all three — at once.
              </p>
              <p className="section-sub" style={{ marginTop: 16 }}>
                We connect verified, trained local partners with their communities, eliminate inventory risk entirely, and ensure every transaction is quality-controlled and instantly settled.
              </p>
              <div className="about-mission-stats">
                {[
                  { val: "2021", label: "Founded in Bengaluru" },
                  { val: "120+", label: "Cities Covered" },
                  { val: "10,000+", label: "Active Partners" },
                ].map(({ val, label }) => (
                  <div className="ams-item" key={val}>
                    <div className="ams-val">{val}</div>
                    <div className="ams-label">{label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="split-img reveal reveal-delay-2">
              <img src={teamImg} alt="MyCheckStore team" />
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section style={{ background: "var(--surface-2)" }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: "center" }}>
            <span className="section-label">What Drives Us</span>
            <h2 className="section-h2">Our Core <em className="italic">Values</em></h2>
          </div>
          <div className="about-values reveal reveal-delay-1">
            {[
              { icon: "🤝", title: "Trust First", desc: "Every decision we make — from partner verification to product quality — starts and ends with building trust. Not just earning it once, but sustaining it." },
              { icon: "🔍", title: "Radical Transparency", desc: "Transparent pricing. Transparent settlements. Transparent quality standards. No hidden fees, no surprises, no fine print that hurts our partners." },
              { icon: "🌱", title: "Community Impact", desc: "We're not just building a business. We're rebuilding how local communities buy and sell — putting economic power back into the hands of neighborhoods." },
              { icon: "⚡", title: "Speed & Simplicity", desc: "Complex things should feel simple. From onboarding in 24 hours to instant settlement — we respect your time and remove every unnecessary step." },
            ].map(({ icon, title, desc }, i) => (
              <div className={`about-value reveal reveal-delay-${i + 1}`} key={title}>
                <div className="av-icon">{icon}</div>
                <div className="av-title">{title}</div>
                <div className="av-desc">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY TIMELINE */}
      <section>
        <div className="container">
          <div className="reveal" style={{ textAlign: "center" }}>
            <span className="section-label">Our Journey</span>
            <h2 className="section-h2">From Idea to <em className="italic">Movement</em></h2>
          </div>
          <div className="about-timeline">
            {[
              { year: "2021", title: "The Idea", desc: "Founded in Bengaluru after seeing local store owners struggle with adulterated products and delayed payments from informal supply chains." },
              { year: "2022", title: "First 100 Partners", desc: "Launched our pilot in 3 Bengaluru neighborhoods. Within 6 months, 100 partners were active and earning consistently." },
              { year: "2023", title: "Quality System Built", desc: "Developed our 4-stage quality verification system and FSSAI-certified supply network. Zero adulteration became our legal guarantee." },
              { year: "2024", title: "National Expansion", desc: "Expanded to 50+ cities across India. 5,000 active partners. ₹50Cr+ in partner settlements. India Commerce Award winner." },
              { year: "2025", title: "10,000 Partners", desc: "Reached 10,000 active partners across 120+ cities. ₹84Cr+ paid to partners. Category leader in neighborhood commerce." },
            ].map((t, i) => (
              <div className={`about-tl-item reveal reveal-delay-${Math.min(i, 3)}`} key={t.year}>
                <div className="abt-year">{t.year}</div>
                <div className="abt-marker"><div className="abt-dot" /></div>
                <div className="abt-body">
                  <div className="abt-title">{t.title}</div>
                  <div className="abt-desc">{t.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY VOICES */}
      <section style={{ background: "var(--surface-2)" }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: "center" }}>
            <span className="section-label">Community Voices</span>
            <h2 className="section-h2">What People Say <em className="italic">About Us</em></h2>
          </div>
          <div className="testi-grid" style={{ marginTop: 48 }}>
            {[
              { img: testimonialRajesh, name: "Rajesh Kumar", role: "Partner since 2022", quote: "MyCheckStore isn't just a platform — it's a community that genuinely cares about each partner's success." },
              { img: testimonialPriya, name: "Priya Sharma", role: "Partner since 2023", quote: "The transparency is what sets them apart. I always know exactly what I'm earning and why." },
              { img: testimonialAnand, name: "Anand Patel", role: "Customer since 2022", quote: "I trust MyCheckStore completely. The quality is consistent every single time. That's rare." },
            ].map((t, i) => (
              <div className={`testi-card reveal reveal-delay-${i + 1}`} key={t.name}>
                <div className="testi-stars">★★★★★</div>
                <p className="testi-quote">"{t.quote}"</p>
                <div className="testi-author">
                  <div className="testi-avatar"><img src={t.img} alt={t.name} /></div>
                  <div>
                    <div className="testi-name">{t.name}</div>
                    <div className="testi-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="container">
          <div className="cta-band reveal">
            <div className="cta-band-glow" />
            <h2>Be Part of the<br /><em>Movement.</em></h2>
            <p>Whether you're a prospective partner, a customer who values quality, or someone who believes in community commerce — there's a place for you at MyCheckStore.</p>
            <div className="cta-band-actions">
              <Link to="/partner" className="btn-partner-primary">Join as Partner →</Link>
              <Link to="/contact" className="btn-partner-ghost">Get in Touch</Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
