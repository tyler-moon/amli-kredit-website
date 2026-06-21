"use client";

import { useEffect } from "react";
import Logo from "./Logo";

const ACCENT = "#1f2a38";
const pillars = ["Personal", "SME", "Shariah-Compliant", "Transparent"];

const services = [
  { name: "Personal Financing", sector: "Individuals", text: "Flexible, transparent personal credit designed to bridge financial gaps and support everyday goals." },
  { name: "SME Financing", sector: "Businesses", text: "Working-capital and growth financing for small and medium enterprises underserved by conventional banks." },
  { name: "Shariah-Compliant", sector: "Ethical", text: "Financing structured to Shariah principles — clear terms, fair treatment and no hidden cost." }
];

const values = [
  { label: "Transparent", text: "Clear terms and honest pricing — you always know what you are agreeing to." },
  { label: "Flexible", text: "Plans shaped around real needs, with speed and a personal approach." },
  { label: "Backed by Strength", text: "Supported by the financial discipline of the wider AMLI group and its capital platform." }
];

const steps = [
  "Tell us what you need — personal or SME financing.",
  "We review eligibility quickly, with a clear, personalised plan.",
  "Transparent terms are agreed — no hidden cost.",
  "Funds are released, with ongoing support throughout."
];

const companies = [
  { name: "AMLI Group", href: "https://amli.group" },
  { name: "AMLI Mountains", href: "https://mountains.amli.group" },
  { name: "AMLI Property", href: "https://property.amli.group" },
  { name: "AMLI Kredit", href: "https://kredit.amli.group" },
  { name: "AMLI Asia Capital", href: "https://capital.amli.group" },
  { name: "AMLI Greens", href: "https://greens.amli.group" }
];

export default function Page() {
  useEffect(() => {
    document.documentElement.classList.add("reveal-ready");
    const items = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    items.forEach((item) => observer.observe(item));
    const header = document.querySelector(".site-header");
    const onScroll = () => {
      if (header) header.classList.toggle("is-scrolled", window.scrollY > 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <header className="site-header">
        <nav className="nav" aria-label="Primary navigation">
          <a href="#home" className="nav__brand" aria-label="AMLI Kredit home">
            <Logo reversed />
          </a>
          <div className="nav__links">
            <a href="#about">About</a>
            <a href="#services">Financing</a>
            <a href="#why">Why AMLI Kredit</a>
            <a href="#how">How It Works</a>
            <a href="#contact">Contact</a>
          </div>
          <a className="nav__cta" href="#contact">Apply</a>
        </nav>
      </header>

      <main id="home">
        <section className="hero hero--kredit">
          <video className="hero__video" autoPlay muted loop playsInline poster="/images/kredit-hero-poster.jpg" aria-hidden="true">
            <source src="/videos/kredit-hero.mp4" type="video/mp4" />
          </video>
          <div className="hero__overlay" />
          <div className="hero__content">
            <div className="hero__copy hero__copy--animate">
              <p className="eyebrow eyebrow--hero">AMLI Kredit</p>
              <h1>
                Financing built
                <br /> on trust.
              </h1>
              <p className="hero__subtitle">
                AMLI Kredit is a Shariah-compliant lender providing flexible, transparent
                personal and SME financing to underserved Malaysians — bridging financial
                gaps and funding disciplined growth.
              </p>
              <div className="button-row">
                <a className="button button--primary" href="#services">Explore financing</a>
                <a className="button button--secondary button--on-dark" href="#contact">Apply</a>
              </div>
              <ul className="hero__pillars" aria-label="What we offer">
                {pillars.map((p) => (<li key={p}>{p}</li>))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section section--mist" id="about" data-reveal>
          <div className="section__inner">
            <div className="section-heading section-heading--wide">
              <p className="eyebrow">About AMLI Kredit</p>
              <h2>Fair, flexible, Shariah-compliant credit.</h2>
              <p>
                AMLI Kredit offers more flexible and transparent financing than conventional
                institutions — bridging financial gaps with speed and personalised plans for
                individuals and SMEs underserved by traditional banks. Structured to Shariah
                principles and supported by the financial strength of the wider AMLI group,
                we lend on merit and treat every customer fairly.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="services" data-reveal>
          <div className="section__inner">
            <div className="section-heading section-heading--wide">
              <p className="eyebrow">Financing</p>
              <h2>Credit that meets real needs.</h2>
            </div>
            <div className="company-grid" aria-label="Financing products">
              {services.map((c, i) => (
                <article className="company-card company-card--static" key={c.name} data-reveal style={{ ["--accent" as string]: ACCENT, transitionDelay: `${i * 60}ms` }}>
                  <p className="eyebrow">{c.sector}</p>
                  <h3>{c.name}</h3>
                  <p>{c.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--stone" id="why" data-reveal>
          <div className="section__inner">
            <div className="section-heading section-heading--wide">
              <p className="eyebrow">Why AMLI Kredit</p>
              <h2>Different from a traditional bank.</h2>
            </div>
            <div className="feature-grid" aria-label="Why choose us">
              {values.map((v, i) => (
                <article className="feature-card" key={v.label} data-reveal style={{ transitionDelay: `${i * 60}ms` }}>
                  <h3>{v.label}</h3>
                  <p>{v.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--process" id="how" data-reveal>
          <div className="section__inner">
            <div className="section-heading section-heading--wide">
              <p className="eyebrow">How It Works</p>
              <h2>A clear, four-step process.</h2>
            </div>
            <ol className="timeline">
              {steps.map((step, index) => (
                <li key={step}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="final-cta" data-reveal>
          <div className="final-cta__inner">
            <div>
              <p className="eyebrow eyebrow--light">An AMLI Group company</p>
              <h2>Apply for financing today.</h2>
            </div>
            <div className="button-row">
              <a className="button button--primary" href="#contact">Apply</a>
              <a className="button button--secondary button--on-dark" href="https://amli.group">Explore AMLI Group</a>
            </div>
          </div>
        </section>

        <section className="section" id="contact" data-reveal>
          <div className="section__inner section__inner--contact">
            <div className="contact-details">
              <p className="eyebrow">Contact</p>
              <h2>Financing and general enquiries.</h2>
              <address>
                Wisma AMLI, 14&ndash;14C, Jalan 20/38A, Off Jalan Segambut
                <br />
                Taman Sri Sinar, 51200 Kuala Lumpur, Malaysia
              </address>
              <p><strong>General:</strong> +60 3-6263 6464</p>
              <p><strong>Email:</strong> <a className="text-link" href="mailto:kredit.contact@amli.group">kredit.contact@amli.group</a></p>
              <iframe title="AMLI Kredit office map" src="https://www.google.com/maps?q=14%20Jalan%2020%2F38A%20Taman%20Sri%20Sinar%2051200%20Kuala%20Lumpur%20Malaysia&output=embed" loading="lazy" />
            </div>
            <div className="callout callout--gold">
              <p className="eyebrow">Apply</p>
              <h2>Bridge the gap.</h2>
              <p>Tell us about your personal or business financing needs and our team will respond with a clear, personalised plan.</p>
              <div className="button-row">
                <a className="button button--primary" href="mailto:kredit.contact@amli.group">Email our team</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__inner">
          <div>
            <Logo reversed />
            <p>Anchored &middot; Merit &middot; Legacy &middot; Intent</p>
          </div>
          <div className="footer__columns">
            <div>
              <h3>AMLI Companies</h3>
              {companies.map((c) => (<a key={c.name} href={c.href}>{c.name}</a>))}
            </div>
            <div>
              <h3>Company</h3>
              <a href="#about">About</a>
              <a href="#services">Financing</a>
              <a href="#how">How It Works</a>
            </div>
            <div>
              <h3>Contact</h3>
              <a href="mailto:kredit.contact@amli.group">kredit.contact@amli.group</a>
              <a href="tel:+60362636464">+60 3-6263 6464</a>
            </div>
          </div>
        </div>
        <div className="footer__legal">
          <p>&copy; 2026 AMLI Kredit. An AMLI Group company.</p>
          <p>Kuala Lumpur, Malaysia</p>
        </div>
      </footer>
    </>
  );
}
