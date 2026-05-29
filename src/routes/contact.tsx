import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import heroBgImg from "@/assets/hero-bg-market.png";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — MyCheckStore" },
      { name: "description", content: "Get in touch with MyCheckStore. Talk to our partner team, customer support, or send us a message." },
    ],
  }),
  component: ContactPage,
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

type ContactForm = { name: string; email: string; phone: string; subject: string; message: string };

function ContactPage() {
  useReveal();
  const [form, setForm] = useState<ContactForm>({ name: "", email: "", phone: "", subject: "general", message: "" });
  const [sent, setSent] = useState(false);

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = (e: React.FormEvent) => { e.preventDefault(); setSent(true); };

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
            <span className="section-label" style={{ color: "var(--amber-light)" }}>We're Here</span>
            <h1 className="page-banner-title">Get In <em>Touch</em></h1>
            <p className="page-banner-sub">
              Whether you're interested in partnering, have a question about quality, or just want to say hello — we respond within 4 hours.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section style={{ background: "var(--surface-2)" }}>
        <div className="container">
          <div className="contact-info-cards reveal">
            {[
              { icon: "📞", title: "Call Us", val: "+91 98765 43210", sub: "Mon–Sat, 9 AM – 7 PM IST", href: "tel:+919876543210" },
              { icon: "📧", title: "Email Us", val: "hello@mycheckstore.in", sub: "We respond within 4 hours", href: "mailto:hello@mycheckstore.in" },
              { icon: "💬", title: "WhatsApp", val: "+91 98765 43210", sub: "Chat with partner team anytime", href: "https://wa.me/919876543210" },
              { icon: "🏢", title: "Head Office", val: "Bengaluru, Karnataka", sub: "Koramangala 5th Block, 560034", href: "#" },
            ].map(({ icon, title, val, sub, href }) => (
              <a className="cic-card" key={title} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                <div className="cic-icon">{icon}</div>
                <div className="cic-title">{title}</div>
                <div className="cic-val">{val}</div>
                <div className="cic-sub">{sub}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FORM + INFO */}
      <section>
        <div className="container">
          <div className="contact-main-grid">
            {/* Left: Info */}
            <div className="reveal">
              <span className="section-label">Send a Message</span>
              <h2 className="section-h2">We'd Love to<br /><em className="italic">Hear From You.</em></h2>
              <p className="section-sub">
                Fill out the form and our team will get back to you within 4 business hours. For urgent partner queries, please call or WhatsApp us directly.
              </p>

              <div className="contact-topics" style={{ marginTop: 36 }}>
                <div className="ct-title">Popular Reasons to Contact Us</div>
                {[
                  { icon: "🤝", label: "Partner application & onboarding" },
                  { icon: "🔍", label: "Quality complaints & feedback" },
                  { icon: "💰", label: "Settlement & payment queries" },
                  { icon: "📱", label: "App & dashboard support" },
                  { icon: "📣", label: "Media & press inquiries" },
                  { icon: "💼", label: "Business & investor relations" },
                ].map(({ icon, label }) => (
                  <div className="ct-item" key={label}><span>{icon}</span>{label}</div>
                ))}
              </div>

              <div className="contact-office-hours" style={{ marginTop: 36 }}>
                <div className="coh-title">Office Hours</div>
                <div className="coh-row"><span>Partner Support</span><span>Mon–Sat, 8 AM–8 PM</span></div>
                <div className="coh-row"><span>Customer Support</span><span>7 days, 9 AM–9 PM</span></div>
                <div className="coh-row"><span>Technical Support</span><span>Mon–Fri, 10 AM–6 PM</span></div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="reveal reveal-delay-2">
              {sent ? (
                <div className="contact-success">
                  <div className="cs-icon">✅</div>
                  <h3>Message Sent!</h3>
                  <p>Thank you, <strong>{form.name}</strong>! We'll reply to <strong>{form.email}</strong> within 4 hours.</p>
                </div>
              ) : (
                <form className="form-card" onSubmit={submit}>
                  <h3 className="form-title">Send Us a Message</h3>
                  <div className="field-row">
                    <div className="field">
                      <label>Your Name *</label>
                      <input name="name" placeholder="Full name" value={form.name} onChange={handle} required />
                    </div>
                    <div className="field">
                      <label>Phone Number</label>
                      <input name="phone" type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={handle} />
                    </div>
                  </div>
                  <div className="field">
                    <label>Email Address *</label>
                    <input name="email" type="email" placeholder="you@email.com" value={form.email} onChange={handle} required />
                  </div>
                  <div className="field">
                    <label>Subject</label>
                    <select name="subject" value={form.subject} onChange={handle}>
                      <option value="general">General Inquiry</option>
                      <option value="partner">Partner Application</option>
                      <option value="quality">Quality Feedback</option>
                      <option value="payment">Payment / Settlement</option>
                      <option value="support">Technical Support</option>
                      <option value="press">Press / Media</option>
                    </select>
                  </div>
                  <div className="field">
                    <label>Message *</label>
                    <textarea name="message" rows={5} placeholder="Tell us how we can help you..." value={form.message} onChange={handle} required />
                  </div>
                  <button type="submit" className="btn-primary btn-block" style={{ fontSize: 15, padding: "14px" }}>
                    Send Message →
                  </button>
                  <p className="auth-note">We respect your privacy. Your information is never shared with third parties.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* OFFICE LOCATIONS */}
      <section style={{ background: "var(--surface-2)" }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: "center" }}>
            <span className="section-label">Where We Are</span>
            <h2 className="section-h2">Our <em className="italic">Offices</em></h2>
          </div>
          <div className="office-grid reveal reveal-delay-1">
            {[
              { city: "Bengaluru", address: "Koramangala 5th Block\n100 Feet Road, 560034", tag: "Headquarters", phone: "+91 98765 43210" },
              { city: "Hyderabad", address: "Hitech City, Madhapur\nTelangana, 500081", tag: "South India Hub", phone: "+91 98765 43211" },
              { city: "Pune", address: "Hinjewadi Phase 1\nPune, Maharashtra, 411057", tag: "West India Hub", phone: "+91 98765 43212" },
            ].map(({ city, address, tag, phone }) => (
              <div className="office-card" key={city}>
                <div className="oc-tag">{tag}</div>
                <div className="oc-city">{city}</div>
                <div className="oc-address">{address}</div>
                <div className="oc-phone">{phone}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
