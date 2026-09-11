import { useState, type FormEvent } from "react";
import { EMAIL, useLang } from "./i18n";

export function Contact() {
  const { t } = useLang();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    setSent(true);
    window.setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", subject: "", message: "" });
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="eyebrow reveal" style={{ color: "var(--gold-light)" }}>
            {t("Contact", "Contact")}
          </span>
          <h2 className="section-title reveal" style={{ color: "var(--white)" }}>
            {t("Travaillons ensemble", "Let's work together")}
          </h2>
          <hr className="gold-line reveal" style={{ margin: "1.5rem auto" }} />
        </div>

        <div className="contact-grid">
          <div className="reveal">
            <h3
              style={{
                fontFamily: "var(--font-heading), 'Cormorant Garamond', serif",
                fontSize: "1.3rem",
                fontWeight: 600,
                color: "var(--white)",
                marginBottom: "2rem",
              }}
            >
              {t("Informations", "Information")}
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "2.5rem" }}>
              <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <span style={{ fontSize: "1.2rem", marginTop: 2 }}>📍</span>
                <div>
                  <div className="field-label">{t("Localisation", "Location")}</div>
                  <div style={{ fontSize: "0.92rem", color: "rgba(255,255,255,0.85)" }}>Fès, Maroc</div>
                </div>
              </div>
              <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <span style={{ fontSize: "1.2rem", marginTop: 2 }}>✉️</span>
                <div>
                  <div className="field-label">Email</div>
                  <a href={`mailto:${EMAIL}`} style={{ fontSize: "0.92rem", color: "var(--gold-light)", wordBreak: "break-all" }}>
                    {EMAIL}
                  </a>
                </div>
              </div>
              <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <span style={{ fontSize: "1.2rem", marginTop: 2 }}>🎓</span>
                <div>
                  <div className="field-label">{t("Formation", "Education")}</div>
                  <div style={{ fontSize: "0.92rem", color: "rgba(255,255,255,0.85)" }}>ENCG Fès</div>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <a href="#" className="social-btn" aria-label="LinkedIn">
                in
              </a>
              <a href="#" className="social-btn" aria-label="Instagram">
                IG
              </a>
              <a href={`mailto:${EMAIL}`} className="social-btn" aria-label="Email">
                @
              </a>
            </div>
          </div>

          <form className="contact-form reveal reveal-delay-2" onSubmit={onSubmit}>
            <div className="form-grid">
              <div>
                <label className="field-label" htmlFor="name">
                  {t("Nom", "Name")}
                </label>
                <input
                  id="name"
                  className="field-input"
                  type="text"
                  required
                  value={form.name}
                  onChange={(event) => setForm({ ...form, name: event.target.value })}
                />
              </div>
              <div>
                <label className="field-label" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  className="field-input"
                  type="email"
                  required
                  value={form.email}
                  onChange={(event) => setForm({ ...form, email: event.target.value })}
                />
              </div>
            </div>
            <div style={{ marginTop: "1rem" }}>
              <label className="field-label" htmlFor="subject">
                {t("Sujet", "Subject")}
              </label>
              <input
                id="subject"
                className="field-input"
                type="text"
                required
                value={form.subject}
                onChange={(event) => setForm({ ...form, subject: event.target.value })}
              />
            </div>
            <div style={{ marginTop: "1rem" }}>
              <label className="field-label" htmlFor="message">
                {t("Message", "Message")}
              </label>
              <textarea
                id="message"
                className="field-input"
                required
                rows={5}
                value={form.message}
                onChange={(event) => setForm({ ...form, message: event.target.value })}
              />
            </div>
            <button type="submit" className="btn-primary" style={{ marginTop: "1.5rem", width: "100%", justifyContent: "center" }}>
              {sent ? t("Message envoyé ✓", "Message sent ✓") : t("Envoyer le message", "Send message")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const { t } = useLang();

  return (
    <footer style={{ background: "var(--footer-bg)", padding: "2rem 0", textAlign: "center" }}>
      <div className="container">
        <p style={{ fontSize: "0.82rem", color: "rgba(255, 255, 255, 0.45)", letterSpacing: "0.02em" }}>
          © 2025 Mohamed Bakkouri · {t("Master Marketing Digital", "Master Digital Marketing")} · ENCG Fès, Maroc
        </p>
      </div>
    </footer>
  );
}
