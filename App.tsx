import { useState } from 'react';
import {
  ArrowRight,
  Check,
  ChevronDown,
  Clock3,
  Facebook,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  SunMedium,
  ThermometerSun,
  X,
} from 'lucide-react';

const quoteUrl = 'https://quote.blackoutwindowtintingbraintree.co.uk';

const vehicleImage = 'https://images.pexels.com/photos/20036216/pexels-photo-20036216.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

const benefits = [
  { icon: ThermometerSun, title: 'Cooler interior', text: 'Reject unwanted solar heat and make every drive more comfortable.' },
  { icon: SunMedium, title: 'UV protection', text: 'Help protect your skin, dashboard and upholstery from damaging UV rays.' },
  { icon: ShieldCheck, title: 'More privacy', text: 'Keep valuables out of sight and enjoy a more private cabin.' },
  { icon: Sparkles, title: 'Less glare', text: 'Reduce harsh sunlight and reflections for a calmer, clearer drive.' },
];

function BlackoutLogo({ footer = false }: { footer?: boolean }) {
  return (
    <img
      src="/blackout-poster.svg"
      alt="Blackout Window Tinting LTD"
      className={footer ? 'logo logo-footer' : 'logo'}
    />
  );
}

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="site-shell">
      <div className="topbar">
        <div className="container topbar-inner">
          <span><Clock3 size={14} /> Mon–Sat · 8am–6pm</span>
          <span className="topbar-location">Proudly serving Braintree &amp; Essex</span>
          <a href={quoteUrl} target="_blank" rel="noopener noreferrer">Get a free quote <ArrowRight size={14} /></a>
        </div>
      </div>

      <header className="header">
        <div className="container nav-wrap">
          <a href="#top" className="brand" aria-label="Blackout Window Tinting home"><BlackoutLogo /></a>
          <button className="menu-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle navigation">
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <nav className={mobileOpen ? 'nav-links is-open' : 'nav-links'}>
            <a href="#services" onClick={() => setMobileOpen(false)}>Services</a>
            <a href="#why-us" onClick={() => setMobileOpen(false)}>Why Blackout</a>
            <a href="#process" onClick={() => setMobileOpen(false)}>Our process</a>
            <a href={quoteUrl} target="_blank" rel="noopener noreferrer" className="nav-cta" onClick={() => setMobileOpen(false)}>Book a quote <ArrowRight size={16} /></a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-grid" />
          <div className="container hero-content">
            <div className="hero-copy">
              <p className="eyebrow"><span className="eyebrow-line" /> Professional window film · Braintree, Essex</p>
              <h1>Make your glass<br /><span>work harder.</span></h1>
              <p className="hero-text">Premium automotive window tinting for drivers who want more privacy, less glare and a cooler, sharper-looking car.</p>
              <div className="hero-actions">
                <a className="button button-primary" href={quoteUrl} target="_blank" rel="noopener noreferrer">Get your free quote <ArrowRight size={18} /></a>
                <a className="button button-ghost" href="#services">Explore services <ChevronDown size={17} /></a>
              </div>
              <div className="hero-proof"><div className="proof-avatars"><span>J</span><span>M</span><span>S</span></div><div><strong>Trusted by local drivers</strong><small>5.0 average rating · Braintree &amp; Essex</small></div></div>
            </div>
            <div className="hero-visual">
              <div className="hero-image-wrap"><img src={vehicleImage} alt="Black car with tinted windows" /><div className="image-wash" /></div>
              <div className="hero-card"><span className="hero-card-icon"><ShieldCheck size={20} /></span><div><strong>Precision fitted</strong><small>Premium films only</small></div><Check size={18} className="hero-check" /></div>
              <div className="hero-stat"><strong>01</strong><span>local tint<br />specialists</span></div>
            </div>
          </div>
          <div className="scroll-hint"><span /> Scroll to explore</div>
        </section>

        <section className="intro section-pad">
          <div className="container intro-grid">
            <div><p className="eyebrow dark"><span className="eyebrow-line" /> The Blackout difference</p><h2>Good tint looks<br /><em>effortless.</em></h2></div>
            <div className="intro-copy"><p>It starts with the right film, the right tools and a team that takes the time to do things properly. No rushed jobs. No messy edges. Just a clean, considered finish that looks right from every angle.</p><a href="#why-us" className="text-link">Why choose Blackout <ArrowRight size={17} /></a></div>
          </div>
        </section>

        <section id="services" className="services section-pad">
          <div className="container"><div className="section-heading"><div><p className="eyebrow dark"><span className="eyebrow-line" /> What we do</p><h2>Made for<br /><em>your drive.</em></h2></div><p>Professional automotive tinting with a clean finish, quality film and advice you can trust.</p></div>
            <div className="service-grid"><article className="service-card"><div className="service-image"><img src={vehicleImage} alt="Black car with tinted windows" /><span>Most popular</span></div><div className="service-body"><span className="service-number">01</span><h3>Automotive film</h3><p>Sharper looks, cooler drives and the privacy you want — fitted cleanly to your car.</p><a href={quoteUrl} target="_blank" rel="noopener noreferrer" className="circle-link" aria-label="Ask about automotive window tinting"><ArrowRight size={18} /></a></div></article></div>
          </div>
        </section>

        <section id="why-us" className="benefits section-pad">
          <div className="container benefits-grid"><div className="benefits-heading"><p className="eyebrow"><span className="eyebrow-line" /> Why Blackout</p><h2>Details make<br /><em>the difference.</em></h2><p>Our work is about more than making glass darker. It is about making your everyday feel a little better.</p><a href={quoteUrl} target="_blank" rel="noopener noreferrer" className="button button-light">Get a free quote <ArrowRight size={17} /></a></div><div className="benefit-list">{benefits.map(({ icon: Icon, title, text }) => <div className="benefit" key={title}><span className="benefit-icon"><Icon size={22} /></span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div></div>
        </section>

        <section id="process" className="process section-pad"><div className="container"><div className="section-heading process-heading"><div><p className="eyebrow dark"><span className="eyebrow-line" /> Simple from start to finish</p><h2>Your car.<br /><em>Done properly.</em></h2></div><p>No guesswork, no pressure. Tell us about your car and we will recommend the right film for your goals and budget.</p></div><div className="process-steps"><div><span>01</span><h3>Tell us what you need</h3><p>Drop us a message or call for a friendly chat about your project.</p></div><div><span>02</span><h3>Get a clear quote</h3><p>We will explain the options, film levels and pricing with no surprises.</p></div><div><span>03</span><h3>Enjoy the finish</h3><p>We fit with care, keep things tidy and leave you with a finish you will be proud of.</p></div></div></div></section>

        <section id="contact" className="contact section-pad"><div className="container contact-grid"><div className="contact-copy"><p className="eyebrow"><span className="eyebrow-line" /> Start your project</p><h2>Ready for a<br /><em>clearer view?</em></h2><p>Tell us a little about what you have in mind. We will get back to you with honest advice and a no-obligation quote.</p><div className="contact-details"><a href="tel:07946068074"><span>Call us</span><strong>07946 068074</strong></a><a href="mailto:blackout_windowtinting@yahoo.com"><span>Email</span><strong>blackout_windowtinting@yahoo.com</strong></a><div className="contact-address"><span><MapPin size={14} /> Find us</span><strong>Unit 32 Warner Drive, Braintree, CM7 2YW</strong></div></div><div className="socials"><a href="https://www.facebook.com/p/Blackout-Window-Tinting-LTD-61583562582323" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={18} /></a><a href="https://www.instagram.com/black_outwindowtinting" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={18} /></a><a href="https://www.facebook.com/p/Blackout-Window-Tinting-LTD-61583562582323" target="_blank" rel="noopener noreferrer" aria-label="Message Blackout"><MessageCircle size={18} /></a></div></div><div className="quote-cta"><h3>Get your free quote online</h3><p>Use our online quoting tool to get an instant, no-obligation quote for your vehicle.</p><a className="button button-primary" href={quoteUrl} target="_blank" rel="noopener noreferrer">Get started <ArrowRight size={18} /></a><div className="quote-cta-hours"><Clock3 size={16} /> Mon–Sat · 8am–6pm</div></div></div></section>
      </main>

      <footer className="footer"><div className="container footer-inner"><a href="#top" className="brand footer-brand"><BlackoutLogo footer /></a><p>Premium automotive window tinting in Braintree &amp; Essex.</p><div className="footer-contact"><span>Unit 32 Warner Drive, Braintree, CM7 2YW</span><a href="tel:07946068074">07946 068074</a><a href="mailto:blackout_windowtinting@yahoo.com">blackout_windowtinting@yahoo.com</a></div><span>© 2026 Blackout Window Tinting LTD</span></div></footer>
    </div>
  );
}

export default App;
