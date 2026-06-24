"use client";

import { useEffect, FormEvent } from "react";
import Logo from "./Logo";

const ACCENT = "#1f2a38";
const pillars = ["Secured", "Personal", "SME", "Licensed"];

const products = [
  {
    name: "Secured Property Financing",
    sector: "Property-Backed",
    text: "Financing secured against property — residential homes, shop lots and commercial units, factories and agricultural land. Clear, regulated monthly rates and flexible tenures, with no hidden cost."
  },
  {
    name: "Personal Financing",
    sector: "Individuals",
    text: "Flexible personal credit to bridge financial gaps and support life's important moments — clear terms, fair treatment, no hidden cost."
  },
  {
    name: "SME & Business Financing",
    sector: "Businesses",
    text: "Working-capital and growth financing for small and medium enterprises underserved by conventional banks."
  }
];

const strengths = [
  { label: "Rates capped by law", text: "Our property-backed financing is regulated under the Moneylenders Act 1951 — a transparent monthly rate held to a 1% ceiling that never climbs higher, with no compounding and no hidden charges. Your exact rate reflects your loan amount and profile." },
  { label: "Approval in 2–3 days", text: "Fast, disciplined assessment — typically approved within two to three working days once documents are complete." },
  { label: "Zero early-settlement fee", text: "Settle your loan ahead of schedule with no penalty. Full transparency, no hidden cost." },
  { label: "Licensed & secured", text: "A licensed lender regulated under the Moneylenders Act 1951, with capital protected through proper collateral perfection." }
];

const steps = [
  { t: "Apply & submit documents", d: "Tell us what you need and share your details. We confirm the requirements within hours." },
  { t: "Valuation & site visit", d: "We assess the property's value and verify it in person before making an offer." },
  { t: "Letter of Offer", d: "We issue a clear written offer — amount, monthly rate, tenure and fees, with no surprises." },
  { t: "Sign & receive funds", d: "Complete signing at our office; funds are disbursed once everything is cleared." }
];

const documents = [
  "NRIC — front & back",
  "Latest 3 months' bank statements",
  "Latest 3 months' payslips / EA Form / SSM (business owners)",
  "Property Title — Geran (for secured financing)",
  "Quit Rent — Cukai Tanah",
  "Assessment — Cukai Pintu"
];

const faqs = [
  { q: "What types of financing do you offer?", a: "Primarily secured financing backed by property collateral, alongside personal and small-business financing tailored to your profile." },
  { q: "What property can be used as collateral?", a: "Residential houses, shop lots and commercial units, factories, and agricultural land." },
  { q: "What are the interest rates?", a: "As a licensed lender, our rates are regulated under the Moneylenders Act 1951. Property-backed financing carries a transparent monthly rate held to a ceiling of 1% per month (12% per annum) — it never goes higher — with your exact rate based on the loan amount and credit profile. No compounding, no hidden charges." },
  { q: "How long does approval take?", a: "Once your documents are submitted and verified, approval is typically granted within 2 to 3 working days." },
  { q: "Is there a penalty for early settlement?", a: "No. There are zero penalty fees if you settle your financing earlier than the agreed tenure." },
  { q: "What is the maximum repayment tenure?", a: "For property financing, we offer flexible repayment of up to 108 months (9 years)." }
];

const companies = [
  { name: "AMLI Group", href: "https://amli.group" },
  { name: "AMLI Mountains", href: "https://mountains.amli.group" },
  { name: "AMLI Property", href: "https://property.amli.group" },
  { name: "AMLI Asia Capital", href: "https://capital.amli.group" },
  { name: "AMLI Greens", href: "https://greens.amli.group" }
];

export default function Page() {
  function handleEnquiry(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = e.currentTarget;
    const get = (n: string) =>
      ((f.elements.namedItem(n) as HTMLInputElement | HTMLTextAreaElement | null)?.value || "").trim();
    const name = get("name");
    const phone = get("phone");
    const email = get("email");
    const message = get("message");
    const subject = encodeURIComponent(`Financing enquiry — ${name || "AMLI Kredit"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:kredit.contact@amli.group?subject=${subject}&body=${body}`;
  }

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

  useEffect(() => {
    const nums = document.querySelectorAll<HTMLElement>("[data-count]");
    nums.forEach((el) => { el.textContent = "0"; });
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          const el = en.target as HTMLElement;
          obs.unobserve(el);
          const target = parseFloat(el.dataset.count || "0");
          const start = performance.now();
          const dur = 1500;
          const step = (now: number) => {
            const p = Math.min((now - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.round(target * eased).toString();
            if (p < 1) requestAnimationFrame(step);
            else el.textContent = el.dataset.display ?? Math.round(target).toString();
          };
          requestAnimationFrame(step);
        });
      },
      { threshold: 0.5 }
    );
    nums.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
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
            <a href="#products">Financing</a>
            <a href="#how">How It Works</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </div>
          <a className="nav__cta" href="#contact">Apply</a>
        </nav>
      </header>

      <main id="home">
        <section className="hero hero--kredit">
          <video className="hero__video" autoPlay muted loop playsInline poster="/images/kredit-hero-poster.jpg?v=3" aria-hidden="true">
            <source src="/videos/kredit-hero.mp4?v=3" type="video/mp4" />
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
                AMLI Kredit is a licensed lender providing property-backed, personal and SME
                financing to underserved Malaysians — fast, transparent and fair, with no
                hidden cost.
              </p>
              <div className="button-row">
                <a className="button button--primary" href="#products">Explore financing</a>
                <a className="button button--secondary button--on-dark" href="#contact">Apply</a>
              </div>
              <ul className="hero__pillars" aria-label="What we offer">
                {pillars.map((p) => (<li key={p}>{p}</li>))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section section--stats" data-reveal>
          <div className="section__inner">
            <p className="eyebrow stats-band__eyebrow">By the numbers</p>
            <div className="stats-band">
              <div className="stat" data-reveal>
                <p className="stat__num">RM <span data-count="43" data-display="43">43</span>M+</p>
                <p className="stat__label">Financing extended</p>
              </div>
              <div className="stat" data-reveal style={{ transitionDelay: "80ms" }}>
                <p className="stat__num"><span data-count="137" data-display="137">137</span></p>
                <p className="stat__label">Loans funded</p>
              </div>
              <div className="stat" data-reveal style={{ transitionDelay: "160ms" }}>
                <p className="stat__num"><span data-count="108" data-display="108">108</span></p>
                <p className="stat__label">Months max tenure</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--mist" id="about" data-reveal>
          <div className="section__inner">
            <div className="section-heading section-heading--wide">
              <p className="eyebrow">About AMLI Kredit</p>
              <h2>Fair, fast, property-backed financing.</h2>
              <p>
                AMLI Kredit is a licensed lender offering more flexible and transparent
                financing than conventional institutions — primarily secured against property,
                alongside personal and SME credit. We bridge financial gaps with speed and
                personalised plans for individuals and businesses underserved by traditional
                banks. Backed by the financial strength of the wider AMLI group, we lend on
                merit and treat every customer fairly.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="products" data-reveal>
          <div className="section__inner">
            <div className="section-heading section-heading--wide">
              <p className="eyebrow">Financing</p>
              <h2>Credit that meets real needs.</h2>
            </div>
            <div className="company-grid" aria-label="Financing products">
              {products.map((c, i) => (
                <article className="company-card company-card--static" key={c.name} data-reveal style={{ ["--accent" as string]: ACCENT, transitionDelay: `${i * 60}ms` }}>
                  <p className="eyebrow">{c.sector}</p>
                  <h3>{c.name}</h3>
                  <p>{c.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="statement-band" data-reveal>
          <img className="statement-band__bg" src="/images/kredit-hero-poster.jpg?v=3" alt="" aria-hidden="true" loading="lazy" />
          <div className="statement-band__overlay" aria-hidden="true" />
          <div className="statement-band__inner">
            <p className="eyebrow eyebrow--light">Why AMLI Kredit</p>
            <h2>Different from a traditional bank.</h2>
          </div>
        </section>

        <section className="section section--stone" id="why" data-reveal>
          <div className="section__inner">
            <ol className="practice-list" aria-label="Why AMLI Kredit">
              {strengths.map((v, i) => (
                <li className="practice-row" key={v.label} data-reveal style={{ transitionDelay: `${i * 70}ms` }}>
                  <span className="practice-row__num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                  <div className="practice-row__body">
                    <h3>{v.label}</h3>
                    <p>{v.text}</p>
                  </div>
                </li>
              ))}
            </ol>
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
                <li key={step.t}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="timeline__title">{step.t}</h3>
                    <p>{step.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section" id="documents" data-reveal>
          <div className="section__inner">
            <div className="section-heading section-heading--wide">
              <p className="eyebrow">Required Documents</p>
              <h2>What to prepare for your application.</h2>
              <p>Having these ready helps us assess your application quickly.</p>
            </div>
            <ul className="doc-grid" aria-label="Required documents">
              {documents.map((d) => (
                <li className="doc-item" key={d} data-reveal>
                  <span className="doc-item__check" aria-hidden="true">✓</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section section--mist" id="faq" data-reveal>
          <div className="section__inner">
            <div className="section-heading section-heading--wide">
              <p className="eyebrow">FAQ</p>
              <h2>Clarity on your financing.</h2>
            </div>
            <div className="faq-list">
              {faqs.map((f) => (
                <details className="faq-item" key={f.q} data-reveal>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
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
                Wisma AMLI, 14, 14A, 14B, 14C, Jalan 20/38A, Off Jalan Segambut
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
              <form className="contact-form" onSubmit={handleEnquiry}>
                <div className="contact-form__row">
                  <input className="contact-form__input" type="text" name="name" placeholder="Name" autoComplete="name" required />
                  <input className="contact-form__input" type="tel" name="phone" placeholder="Phone" autoComplete="tel" />
                </div>
                <input className="contact-form__input" type="email" name="email" placeholder="Email" autoComplete="email" required />
                <textarea className="contact-form__input contact-form__textarea" name="message" placeholder="What financing are you looking for?" rows={4} required />
                <button className="button button--primary" type="submit">Send enquiry</button>
                <p className="contact-form__note">Opens your email app, addressed to our team.</p>
              </form>
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
              <a href="#products">Financing</a>
              <a href="#faq">FAQ</a>
            </div>
            <div>
              <h3>Contact</h3>
              <a href="mailto:kredit.contact@amli.group">kredit.contact@amli.group</a>
              <a href="tel:+60362636464">+60 3-6263 6464</a>
            </div>
          </div>
        </div>
        <div className="footer__legal">
          <p>&copy; 2026 AMLI Kredit. A licensed lender under the Moneylenders Act 1951. An AMLI Group company.</p>
          <p>Kuala Lumpur, Malaysia</p>
        </div>
      </footer>
    </>
  );
}
