import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import qualityInspectionImg from "@/assets/quality-inspection.png";
import qualityDeliveryImg from "@/assets/quality-delivery-scene.png";
import heroBgImg from "@/assets/hero-bg-market.png";

export const Route = createFileRoute("/quality")({
  head: () => ({
    meta: [
      { title: "Quality Promise — MyCheckStore" },
      { name: "description", content: "Every product on MyCheckStore is physically verified before delivery. Our 4-stage quality process ensures zero adulteration, always." },
    ],
  }),
  component: QualityPage,
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

const stages = [
  { num: "01", icon: "🏭", title: "Source Verification", desc: "We partner exclusively with FSSAI-certified suppliers and manufacturers. Every supplier undergoes a rigorous 28-point background check before being listed on our platform.", color: "#C8710A" },
  { num: "02", icon: "🔬", title: "Lab Testing", desc: "Random product samples are sent to accredited labs monthly. We test for adulterants, expiry compliance, nutritional label accuracy, and packaging integrity.", color: "#D4891F" },
  { num: "03", icon: "📋", title: "Partner Inspection", desc: "Before every single delivery, our trained partners physically inspect each product — checking for damage, expiry, seal integrity, and quantity accuracy.", color: "#B86409" },
  { num: "04", icon: "⭐", title: "Customer Rating", desc: "Every delivery is rated by the customer. Products falling below 4.0 stars are automatically paused pending re-evaluation. Your feedback drives our standards.", color: "#A85D08" },
];

function QualityPage() {
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
            <span className="section-label" style={{ color: "var(--amber-light)" }}>Our Standard</span>
            <h1 className="page-banner-title">The Quality <em>Promise</em></h1>
            <p className="page-banner-sub">
              We don't just promise quality — we enforce it with a 4-stage verification process that covers every product, every order, every time.
            </p>
          </div>
        </div>
      </section>

      {/* SCORE BAND */}
      <div className="quality-score-band">
        {[
          { val: "98.4%", label: "Quality Score" },
          { val: "4.9★", label: "Avg. Customer Rating" },
          { val: "28-Point", label: "Supplier Checklist" },
          { val: "0 Tolerance", label: "Adulteration Policy" },
        ].map(({ val, label }) => (
          <div className="qsb-item" key={val}>
            <div className="qsb-val">{val}</div>
            <div className="qsb-label">{label}</div>
          </div>
        ))}
      </div>

      {/* 4-STAGE PROCESS */}
      <section>
        <div className="container">
          <div className="reveal" style={{ textAlign: "center" }}>
            <span className="section-label">Our Process</span>
            <h2 className="section-h2">A 4-Stage <em className="italic">Quality Shield</em></h2>
            <p className="section-sub" style={{ margin: "16px auto 0", textAlign: "center" }}>
              From the supplier's warehouse to your doorstep — four independent checkpoints ensure only the best reaches you.
            </p>
          </div>
          <div className="quality-stages">
            {stages.map((s, i) => (
              <div className={`quality-stage reveal reveal-delay-${Math.min(i, 3)}`} key={s.num}>
                <div className="qs-icon-wrap" style={{ background: `${s.color}18`, border: `2px solid ${s.color}33` }}>
                  <span>{s.icon}</span>
                </div>
                <div className="qs-num" style={{ color: s.color }}>{s.num}</div>
                <div className="qs-title">{s.title}</div>
                <div className="qs-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPLIT: INSPECTION IMAGE */}
      <section style={{ background: "var(--surface-2)" }}>
        <div className="container">
          <div className="split">
            <div className="reveal reveal-delay-1">
              <span className="section-label">Behind the Scenes</span>
              <h2 className="section-h2">Real Inspectors,<br /><em className="italic">Real Standards.</em></h2>
              <p className="section-sub">
                Our partner inspection protocol isn't just a checklist — it's a commitment. Every partner is trained for 4 hours on quality recognition before their first delivery. They check for expiry dates, seal integrity, product weight, and visual quality on every single unit.
              </p>
              <div className="quality-checks" style={{ marginTop: 32 }}>
                {[
                  { icon: "📅", title: "Expiry date verified on every item" },
                  { icon: "🔒", title: "Tamper-proof seal checked" },
                  { icon: "⚖️", title: "Weight & quantity confirmed" },
                  { icon: "👁️", title: "Visual quality inspection" },
                  { icon: "🌡️", title: "Temperature-sensitive items monitored" },
                  { icon: "📦", title: "Packaging integrity confirmed" },
                ].map(({ icon, title }) => (
                  <div className="quality-check" key={title}>
                    <div className="check-icon">{icon}</div>
                    <div><div className="check-title">{title}</div></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="split-img reveal reveal-delay-2">
              <img src={qualityInspectionImg} alt="Quality inspection process" />
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERY SECTION */}
      <section>
        <div className="container">
          <div className="split">
            <div className="split-img reveal">
              <img src={qualityDeliveryImg} alt="Verified delivery" />
            </div>
            <div className="reveal reveal-delay-2">
              <span className="section-label">Customer Experience</span>
              <h2 className="section-h2">Delivered with<br /><em className="italic">Confidence.</em></h2>
              <p className="section-sub">
                When your order arrives, you can trust that it has passed through 4 independent quality checks. If anything falls short of our standards, our partners are trained to replace it on the spot.
              </p>
              <div className="quality-guarantee-cards">
                <div className="qg-card">
                  <div className="qg-icon">🔄</div>
                  <div className="qg-title">Instant Replacement</div>
                  <div className="qg-desc">Any quality issue resolved on-the-spot. No questions asked.</div>
                </div>
                <div className="qg-card">
                  <div className="qg-icon">💰</div>
                  <div className="qg-title">Full Refund Policy</div>
                  <div className="qg-desc">Not satisfied? Full refund within 24 hours, guaranteed.</div>
                </div>
                <div className="qg-card">
                  <div className="qg-icon">📞</div>
                  <div className="qg-title">24/7 Support</div>
                  <div className="qg-desc">Our quality team is available anytime you need help.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section style={{ background: "var(--surface-2)" }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: "center" }}>
            <span className="section-label">Product Coverage</span>
            <h2 className="section-h2">Quality Assured<br /><em className="italic">Across All Categories</em></h2>
          </div>
          <div className="quality-categories reveal reveal-delay-1">
            {[
              { icon: "🥬", label: "Fresh Produce", count: "500+ items" },
              { icon: "🥛", label: "Dairy & Eggs", count: "120+ items" },
              { icon: "🌾", label: "Grains & Pulses", count: "300+ items" },
              { icon: "🧴", label: "Personal Care", count: "450+ items" },
              { icon: "🏠", label: "Household", count: "600+ items" },
              { icon: "📱", label: "Electronics", count: "200+ items" },
              { icon: "👶", label: "Baby Products", count: "150+ items" },
              { icon: "🐾", label: "Pet Supplies", count: "80+ items" },
            ].map(({ icon, label, count }) => (
              <div className="quality-cat" key={label}>
                <div className="qcat-icon">{icon}</div>
                <div className="qcat-label">{label}</div>
                <div className="qcat-count">{count}</div>
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
            <h2>Shop with <em>100% Confidence.</em></h2>
            <p>Every product. Every order. Every time. Our quality promise is the foundation of everything we do at MyCheckStore.</p>
            <div className="cta-band-actions">
              <Link to="/partner" className="btn-partner-primary">Become a Partner →</Link>
              <Link to="/contact" className="btn-partner-ghost">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
