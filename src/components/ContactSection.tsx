import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Copy, Check, Send, ArrowUpRight } from 'lucide-react';
import { Language, t } from '../translations';

interface ContactSectionProps {
  lang: Language;
}

export function ContactSection({ lang }: ContactSectionProps) {
  const content = t[lang];
  const formContent = content.contact.form;

  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: formContent.serviceOptions[0],
    message: ''
  });

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      service: formContent.serviceOptions[0]
    }));
  }, [lang, formContent.serviceOptions]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(content.contact.directEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      const subject = encodeURIComponent(`[vizjourney.com] ${formData.service} — ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nTopic: ${formData.service}\n\nNote:\n${formData.message}`
      );
      window.location.href = `mailto:${content.contact.directEmail}?subject=${subject}&body=${body}`;
    }, 250);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      service: formContent.serviceOptions[0],
      message: ''
    });
  };

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Minimal Direct Contact & Profiles */}
          <div className="lg:col-span-5 space-y-6">
            <div className="px-2">
              <div className="font-mono text-xs text-slate-500 dark:text-slate-400 mb-2">
                {content.contact.tag}
              </div>
              <h2
                className="font-display text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-slate-50 tracking-tight mb-3"
                style={{ textWrap: 'balance' }}
              >
                {content.contact.title}
              </h2>
              <p className="font-sans text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                {content.contact.subtitle}
              </p>
            </div>

            {/* Direct Email Neomorphic Glass Card */}
            <div className="neo-glass-card rounded-3xl p-7 space-y-5">
              <div className="font-mono text-xs text-slate-500 dark:text-slate-400">
                {content.contact.directEmailTitle}
              </div>

              <div className="neo-inset rounded-2xl p-4 flex items-center justify-between gap-3">
                <a
                  id="direct-email-link"
                  href={`mailto:${content.contact.directEmail}`}
                  className="font-mono text-xs sm:text-sm font-medium text-slate-900 dark:text-slate-100 hover:underline truncate"
                >
                  {content.contact.directEmail}
                </a>

                <button
                  id="copy-email-btn"
                  type="button"
                  onClick={handleCopyEmail}
                  className="neo-btn px-3 py-1.5 rounded-xl inline-flex items-center gap-1.5 text-xs font-mono text-slate-700 dark:text-slate-200 whitespace-nowrap shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span>{content.contact.copied}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-500" />
                      <span>{content.contact.copyEmail}</span>
                    </>
                  )}
                </button>
              </div>

              <div className="pt-2 flex flex-col gap-3 text-xs text-slate-500 dark:text-slate-400">
                <span>{content.contact.responseTime}</span>
                <p className="text-xs text-slate-500/90 dark:text-slate-400/90 leading-relaxed">
                  {content.contact.nonCommercialNote}
                </p>

                <div className="pt-3 border-t border-slate-200/70 dark:border-slate-800/80 flex items-center gap-5 font-mono">
                  <a
                    id="contact-linkedin-link"
                    href="https://www.linkedin.com/in/gouravchandra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap shrink-0"
                  >
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                  <span aria-hidden="true">·</span>
                  <a
                    id="contact-github-link"
                    href="https://github.com/vizjourney"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap shrink-0"
                  >
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Liquid Glass & Neomorphic Recessed Form */}
          <div className="lg:col-span-7">
            <div className="liquid-glass rounded-3xl p-7 sm:p-10">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    className="text-center py-10 space-y-5"
                  >
                    <div className="w-12 h-12 rounded-2xl neo-inset text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                      <Check className="w-6 h-6" />
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-slate-900 dark:text-slate-50">
                      {formContent.successTitle}
                    </h3>
                    <p className="font-sans text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
                      {formContent.successDesc}
                    </p>
                    <button
                      id="reset-form-btn"
                      type="button"
                      onClick={handleReset}
                      className="neo-btn px-5 py-2.5 rounded-xl text-xs font-mono font-medium text-slate-800 dark:text-slate-200 whitespace-nowrap shrink-0"
                    >
                      {formContent.resetBtn}
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    id="contact-inquiry-form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div className="space-y-2">
                        <label
                          htmlFor="contact-name-input"
                          className="block font-mono text-xs text-slate-600 dark:text-slate-400"
                        >
                          {formContent.nameLabel}
                        </label>
                        <input
                          id="contact-name-input"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder={formContent.namePlaceholder}
                          className="w-full px-4 py-3 rounded-2xl neo-inset text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40 transition-all"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <label
                          htmlFor="contact-email-input"
                          className="block font-mono text-xs text-slate-600 dark:text-slate-400"
                        >
                          {formContent.emailLabel}
                        </label>
                        <input
                          id="contact-email-input"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder={formContent.emailPlaceholder}
                          className="w-full px-4 py-3 rounded-2xl neo-inset text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40 transition-all"
                        />
                      </div>
                    </div>

                    {/* Topic */}
                    <div className="space-y-2">
                      <label
                        htmlFor="contact-service-select"
                        className="block font-mono text-xs text-slate-600 dark:text-slate-400"
                      >
                        {formContent.serviceLabel}
                      </label>
                      <select
                        id="contact-service-select"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl neo-inset text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500/40 transition-all"
                      >
                        {formContent.serviceOptions.map((opt, oIdx) => (
                          <option key={oIdx} value={opt} className="bg-slate-100 dark:bg-slate-900">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label
                        htmlFor="contact-message-input"
                        className="block font-mono text-xs text-slate-600 dark:text-slate-400"
                      >
                        {formContent.messageLabel}
                      </label>
                      <textarea
                        id="contact-message-input"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder={formContent.messagePlaceholder}
                        className="w-full px-4 py-3 rounded-2xl neo-inset text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40 transition-all resize-y"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      id="contact-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="neo-btn-primary w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-medium whitespace-nowrap shrink-0 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>{formContent.submitting}</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>{formContent.submitBtn}</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
