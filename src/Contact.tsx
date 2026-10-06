import { type FormEvent, useState } from "react";
import { EMAIL, useLang } from "./i18n";
import { LangFlag, TranslateIcon } from "./LangToggleIcons";

function ContactForm({ className = "", idPrefix = "contact" }: { className?: string; idPrefix?: string }) {
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const nameId = `${idPrefix}-name`;
  const emailId = `${idPrefix}-email`;
  const subjectId = `${idPrefix}-subject`;
  const messageId = `${idPrefix}-message`;

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const subject = `${t("Mission —", "Mission —")}${form.subject}`.trim();
    const body = [
      t("Nom", "Name") + `: ${form.name}`,
      `Email: ${form.email}`,
      "",
      form.message,
    ].join("\n");
    const href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
  }

  return (
    <form className={`contact__form ${className}`.trim()} onSubmit={onSubmit}>
      <div className="form-row">
        <div className="field">
          <label htmlFor={nameId}>{t("Nom", "Name")}</label>
          <input
            id={nameId}
            type="text"
            required
            autoComplete="name"
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
          />
        </div>
        <div className="field">
          <label htmlFor={emailId}>Email</label>
          <input
            id={emailId}
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={(event) => setForm({ ...form, email: event.target.value })}
          />
        </div>
      </div>
      <div className="field">
        <label htmlFor={subjectId}>{t("Sujet", "Subject")}</label>
        <input
          id={subjectId}
          type="text"
          required
          value={form.subject}
          onChange={(event) => setForm({ ...form, subject: event.target.value })}
        />
      </div>
      <div className="field">
        <label htmlFor={messageId}>{t("Message", "Message")}</label>
        <textarea
          id={messageId}
          required
          rows={5}
          value={form.message}
          onChange={(event) => setForm({ ...form, message: event.target.value })}
        />
      </div>
      <button type="submit" className="btn">
        {t("Ouvrir l’email", "Open email")}
      </button>
    </form>
  );
}

export function ContactStage() {
  const { t } = useLang();

  return (
    <div className="contact-stage" aria-label={t("Écrire", "Write")}>
      <ContactForm className="contact__form--stage" idPrefix="contact-stage" />
    </div>
  );
}

export function ContactBody() {
  const { t } = useLang();

  return (
    <div className="contact__body">
      <h3 className="contact__promise">
        {t(
          "Vous repartez avec une priorité: SEO, contenu ou social.",
          "You leave with one priority: SEO, content, or social.",
        )}
      </h3>

      <dl className="contact__meta">
        <div>
          <dt>{t("Localisation", "Location")}</dt>
          <dd>{t("Fès, Maroc", "Fès, Morocco")}</dd>
        </div>
        <div>
          <dt>Email</dt>
          <dd>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </dd>
        </div>
      </dl>
      <div className="contact__socials">
        <a href="#" aria-disabled="true" onClick={(e) => e.preventDefault()}>
          LinkedIn
        </a>
        <a href="#" aria-disabled="true" onClick={(e) => e.preventDefault()}>
          Instagram
        </a>
      </div>

      <ContactForm className="contact__form--inline" idPrefix="contact-inline" />
    </div>
  );
}

export function Footer() {
  const { lang, toggleLang, t } = useLang();

  return (
    <footer className="site-footer site-footer--on-ink">
      <div className="shell site-footer__links">
        <button
          type="button"
          className="site-footer__link site-footer__lang"
          onClick={toggleLang}
          aria-label={t("Passer en anglais", "Switch to French")}
        >
          <TranslateIcon className="site-footer__lang-icon" />
          <span className="site-footer__lang-flags" data-lang={lang}>
            <LangFlag target="en" className="site-footer__lang-flag site-footer__lang-flag--en" />
            <LangFlag target="fr" className="site-footer__lang-flag site-footer__lang-flag--fr" />
          </span>
        </button>
      </div>
    </footer>
  );
}
