'use client';

import { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    { icon: '📧', label: 'Email', value: 'alex@example.com' },
    { icon: '📍', label: 'Location', value: 'San Francisco, CA' },
    { icon: '📱', label: 'Phone', value: '+1 (555) 123-4567' },
  ];

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.sectionLabel}>Contact</p>
          <h2 className={styles.title}>Let&apos;s Work <span className={styles.accent}>Together</span></h2>
          <p className={styles.subtitle}>Have a project in mind? I&apos;d love to hear about it.</p>
        </div>
        <div className={styles.grid}>
          <div className={styles.info}>
            <h3 className={styles.infoTitle}>Get In Touch</h3>
            <p className={styles.infoText}>
              I&apos;m currently available for freelance projects and full-time opportunities.
              Whether you have a question or just want to say hi, my inbox is always open.
            </p>
            <div className={styles.contactItems}>
              {contactInfo.map((item) => (
                <div key={item.label} className={styles.contactItem}>
                  <span className={styles.contactIcon}>{item.icon}</span>
                  <div>
                    <p className={styles.contactLabel}>{item.label}</p>
                    <p className={styles.contactValue}>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.availability}>
              <div className={styles.availableDot} />
              <span>Available for new projects</span>
            </div>
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            {submitted && (
              <div className={styles.successMsg}>
                ✅ Message sent successfully! I&apos;ll be in touch soon.
              </div>
            )}
            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className={styles.field}>
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Project Inquiry"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className={styles.submitBtn}>
              Send Message
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
