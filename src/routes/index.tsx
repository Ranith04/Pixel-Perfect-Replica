import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

import heroBgImg from "@/assets/hero-bg-market.png";
import indiaBgImg from "@/assets/india-commerce-wide.png";
import qualityImg from "@/assets/quality-delivery-scene.png";
import partnerImg from "@/assets/store-partner-hero.png";
import testimonialRajesh from "@/assets/testimonial-rajesh.png";
import testimonialPriya from "@/assets/testimonial-priya.png";
import testimonialAnand from "@/assets/testimonial-anand.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MyCheckStore — India's Trusted Neighborhood Commerce Platform" },
      { name: "description", content: "Connect with verified local partners. Zero inventory risk, instant settlement, 100% quality assured. Neighborhood commerce reimagined for India." },
      { property: "og:title", content: "MyCheckStore — Trusted Neighborhood Commerce" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: HomePage,
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

function HomePage() {
  useReveal();

  return (
    <div className="mcs">
      <SiteHeader />

      {/* ══════════════════════ HERO ══════════════════════ */}
      <header className="home-hero">
        <div className="home-hero-bg" style={{ backgroundImage: `url(${heroBgImg})` }} />
        <div className="home-hero-overlay" />
        <div className="home-hero-grid" />

        <div className="container home-hero-body">
          <div className="home-hero-content">
            <div className="reveal">
              <span className="home-hero-tag">🇮🇳 India's #1 Neighborhood Commerce</span>
            </div>
            <h1 className="home-hero-h1 reveal reveal-delay-1">
              Your Trusted<br />
              <em>Neighborhood</em><br />
              Commerce Hub.
            </h1>
            <p className="home-hero-sub reveal reveal-delay-2">
              Connecting verified local partners with their communities. Zero stock risk,
              transparent pricing, and instant settlement — reimagined for India.
            </p>
            <div className="home-hero-actions reveal reveal-delay-3">
              <Link to="/partner" className="btn-hero-primary">Join as Partner →</Link>
              <Link to="/how-it-works" className="btn-hero-outline btn-hero-outline-light">See How It Works</Link>
            </div>
            <div className="home-hero-stats reveal reveal-delay-4">
              <div className="hhs-item">
                <div className="hhs-val">10K+</div>
                <div className="hhs-label">Verified Partners</div>
              </div>
              <div className="hhs-div" />
              <div className="hhs-item">
                <div className="hhs-val">₹84Cr+</div>
                <div className="hhs-label">Paid to Partners</div>
              </div>
              <div className="hhs-div" />
              <div className="hhs-item">
                <div className="hhs-val">100%</div>
                <div className="hhs-label">Quality Assured</div>
              </div>
            </div>
          </div>

          {/* Dashboard card */}
          <div className="home-hero-card reveal reveal-delay-2">
            <div className="hhc-glow" />
            <div className="hhc-header">
              <div className="hhc-dot green" /><span>Live Partner Dashboard</span>
            </div>
            <div className="hhc-title">Verified Partners<br />Near <span>You</span></div>
            <div className="hhc-partners">
              {[
                { icon: "🛒", name: "Ravi's General Store", loc: "Koramangala, Bengaluru" },
                { icon: "🌾", name: "Lakshmi Agro Centre", loc: "Indiranagar, Bengaluru" },
                { icon: "📱", name: "Tech World Express", loc: "Jayanagar, Bengaluru" },
              ].map((p) => (
                <div className="hhc-partner-row" key={p.name}>
                  <div className="hhc-pi">{p.icon}</div>
                  <div>
                    <div className="hhc-pn">{p.name}</div>
                    <div className="hhc-pl">{p.loc}</div>
                  </div>
                  <span className="hhc-badge">✓ Verified</span>
                </div>
              ))}
            </div>
            <div className="hhc-footer">
              <div className="hhc-metric"><div className="hhc-mval">₹2.4L</div><div className="hhc-mlbl">Avg. Monthly</div></div>
              <div className="hhc-metric"><div className="hhc-mval">4.9★</div><div className="hhc-mlbl">Partner Rating</div></div>
              <div className="hhc-metric"><div className="hhc-mval">0%</div><div className="hhc-mlbl">Stock Risk</div></div>
            </div>
            {/* Floating settlement badge */}
            <div className="hhc-float-badge">
              <div className="hhc-fb-label">Today's Settlements</div>
              <div className="hhc-fb-val"><span>+₹</span>84,200</div>
              <div className="hhc-fb-trend">↑ 12% vs yesterday</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="home-hero-scroll">
          <div className="scroll-mouse"><div className="scroll-wheel" /></div>
          <span>Scroll to explore</span>
        </div>
      </header>

      {/* ══════════════════════ MARQUEE ══════════════════════ */}
      <div className="marquee-strip">
        <div className="marquee-track">
          {[...Array(2)].flatMap((_, s) =>
            ["Zero Inventory Risk", "Verified Local Partners", "Instant Settlement",
              "100% Quality Checked", "Made for India", "Neighborhood Commerce",
              "Transparent Pricing", "Zero Hidden Fees"].map((l, i) => (
              <div key={`${s}-${i}`} className={`marquee-item${i % 2 === 0 ? " highlight" : ""}`}>
                <span className="marquee-dot" />{l}
              </div>
            ))
          )}
        </div>
      </div>

      {/* ══════════════════════ PAGE NAVIGATOR CARDS ══════════════════════ */}
      <section className="navcards-section">
        <div className="container">
          <div className="reveal" style={{ textAlign: "center" }}>
            <span className="section-label">Everything You Need</span>
            <h2 className="section-h2">Explore <em className="italic">MyCheckStore</em></h2>
            <p className="section-sub" style={{ margin: "16px auto 0", textAlign: "center" }}>
              From understanding our process to becoming a partner — explore every part of our platform.
            </p>
          </div>
          <div className="home-navcards reveal reveal-delay-1">
            {[
              {
                to: "/how-it-works",
                bg: indiaBgImg,
                label: "The Process",
                title: "How It Works",
                desc: "From signup to your first sale — our 5-step system explained in detail.",
                cta: "Learn the Process →",
              },
              {
                to: "/quality",
                bg: qualityImg,
                label: "Our Standard",
                title: "Quality Promise",
                desc: "Every product physically verified. Zero adulteration, always. Our guarantee.",
                cta: "See Our Standards →",
              },
              {
                to: "/partner",
                bg: partnerImg,
                label: "Opportunity",
                title: "Become a Partner",
                desc: "Start your digital store with zero investment. Join 10,000+ partners.",
                cta: "Apply Today →",
              },
            ].map((c) => (
              <Link to={c.to} key={c.to} className="home-navcard">
                <img src={c.bg} alt={c.title} />
                <div className="home-navcard-body">
                  <div className="hnc-label">{c.label}</div>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                  <span className="hnc-cta">{c.cta}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ IMPACT STRIP ══════════════════════ */}
      <section className="home-impact-section">
        <div className="home-impact-bg" style={{ backgroundImage: `url(${indiaBgImg})` }} />
        <div className="home-impact-overlay" />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="home-impact-grid reveal">
            {[
              { val: "10,000+", label: "Active Partners", sub: "Across 120+ cities" },
              { val: "₹84Cr+", label: "Settlements Paid", sub: "In the last 12 months" },
              { val: "98.4%", label: "Quality Score", sub: "Verified product rate" },
              { val: "4.9★", label: "Partner Rating", sub: "Average satisfaction" },
            ].map((s) => (
              <div className="hip-stat" key={s.val}>
                <div className="hip-val">{s.val}</div>
                <div className="hip-label">{s.label}</div>
                <div className="hip-sub">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ FEATURES BENTO ══════════════════════ */}
      <section className="why-bg">
        <div className="container">
          <div className="reveal" style={{ textAlign: "center" }}>
            <span className="section-label">Why MyCheckStore Wins</span>
            <h2 className="section-h2">Technology Built for<br /><em className="italic">Real Commerce</em></h2>
          </div>
          <div className="why-bento">
            <div className="bento-card featured reveal">
              <div className="bento-big-icon">⚡</div>
              <div className="bento-icon">⚡</div>
              <span className="bento-num">0s</span>
              <div className="bento-title">Lightning Fast Settlement</div>
              <div className="bento-desc">Get paid the moment your customer accepts the order. No waiting, no bureaucracy.</div>
              <Link to="/how-it-works" className="bento-cta">Explore the Technology →</Link>
            </div>
            {[
              { icon: "📦", title: "Zero Stock Model", desc: "Only process what's already sold. No inventory risk, zero upfront capital." },
              { icon: "🛡️", title: "Quality Guarantee", desc: "Every product physically verified before dispatch. 98.4% satisfaction rate." },
              { icon: "📊", title: "Smart Dashboard", desc: "Real-time tracking of orders and earnings in one simple interface." },
              { icon: "🌐", title: "Digital Inventory", desc: "5,000+ verified products. List what your neighborhood needs most." },
              { icon: "🎓", title: "Growth Mentorship", desc: "Dedicated partner success team. We grow with you, not just at signup." },
            ].map(({ icon, title, desc }, i) => (
              <div className={`bento-card reveal reveal-delay-${Math.min(i + 1, 4)}`} key={title}>
                <div className="bento-icon">{icon}</div>
                <div className="bento-title">{title}</div>
                <div className="bento-desc">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ TESTIMONIALS PREVIEW ══════════════════════ */}
      <section className="testimonials-section">
        <div className="container">
          <div className="reveal" style={{ textAlign: "center" }}>
            <span className="section-label">Partner Stories</span>
            <h2 className="section-h2">Voices From Our <em className="italic">Community</em></h2>
          </div>
          <div className="testi-grid">
            {[
              { img: testimonialRajesh, name: "Rajesh Kumar", role: "Digital Partner", loc: "Bengaluru, KA", quote: "Started with zero stock and now serve over 200 families. MyCheckStore changed everything for me.", earn: "₹2.8L / month" },
              { img: testimonialPriya, name: "Priya Sharma", role: "Neighborhood Partner", loc: "Hyderabad, TS", quote: "Instant settlement is a game changer. I get paid the moment my customer accepts — no waiting.", earn: "₹1.9L / month" },
              { img: testimonialAnand, name: "Anand Patel", role: "Verified Customer", loc: "Pune, MH", quote: "Every product is verified. My community finally has a local store I can fully rely on.", earn: "Saved ₹4,200" },
            ].map((t, i) => (
              <div className={`testi-card reveal reveal-delay-${i + 1}`} key={t.name}>
                <div className="testi-stars">★★★★★</div>
                <p className="testi-quote">"{t.quote}"</p>
                <div className="testi-author">
                  <div className="testi-avatar"><img src={t.img} alt={t.name} /></div>
                  <div>
                    <div className="testi-name">{t.name}</div>
                    <div className="testi-role">{t.role}</div>
                    <div className="testi-loc">📍 {t.loc}</div>
                    <div className="testi-earnings">{t.earn}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ PARTNER CTA BAND ══════════════════════ */}
      <section className="cta-band-section">
        <div className="container">
          <div className="cta-band reveal">
            <div className="cta-band-glow" />
            <div className="cta-band-big-num">₹2.4L</div>
            <h2>Average Monthly Earnings<br /><em>for Active Partners.</em></h2>
            <p>Join 10,000+ partners who've built thriving businesses with zero inventory risk. Apply today and start earning this month.</p>
            <div className="cta-band-actions">
              <Link to="/partner" className="btn-partner-primary">Apply to Partner →</Link>
              <Link to="/how-it-works" className="btn-partner-ghost">Learn How It Works</Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
