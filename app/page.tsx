import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  BarChart3,
  Check,
  ChevronRight,
  CircleDollarSign,
  ClipboardList,
  Facebook,
  Instagram,
  Mail,
  Megaphone,
  MessageCircle,
  MousePointer2,
  Radio,
  Sparkles,
  Workflow,
} from "lucide-react";

const capabilities = [
  {
    icon: Megaphone,
    number: "01",
    title: "Campaign content & promotion",
    text: "Promotional flyers and Facebook Events that present travel offers clearly and give people an easy way to discover an event.",
    tags: ["Facebook Events", "Marketing flyers", "Travel offers"],
  },
  {
    icon: MousePointer2,
    number: "02",
    title: "Websites & landing pages",
    text: "A live website project for Mum’s Backpackers, built to give the business an online presence.",
    tags: ["Website build", "Live project"],
  },
  {
    icon: ClipboardList,
    number: "03",
    title: "Customer & loan systems",
    text: "Hands-on experience working with loan management systems and customer portfolio management systems.",
    tags: ["Loan management", "Customer portfolios", "Customer records"],
  },
];

const workflowItems = [
  "Capture the customer and inquiry context",
  "Keep the current status easy to find",
  "Make the next follow-up step visible",
  "Review customer records across the portfolio",
];

const selectedWork = [
  {
    number: "01",
    label: "TRAVEL CAMPAIGNS · MONIKA TOURS & SAFARIS",
    title: "Marketing flyers & Facebook Events",
    description:
      "Created travel marketing flyers for Monika Tours & Safaris. I also worked with Jirani Smart’s Facebook Events page; the supplied screenshot shows Tsavo East weekend escape listings and their promotional creative.",
    icon: Megaphone,
    visualClass: "event-visual",
    visualLabel: "TRAVEL PROMOTION",
    visualTitle: "Flyers +\nFacebook Events",
    href: "https://drive.google.com/drive/folders/1krF10yjJTLxmKdvEcNty6-9zAEzD4PEe?usp=sharing",
    linkText: "View marketing flyers",
  },
  {
    number: "02",
    label: "WEBSITE · MUM’S BACKPACKERS",
    title: "A live website I built",
    description:
      "Built the Mum’s Backpackers website. Explore the live site at the link below.",
    icon: MousePointer2,
    visualClass: "website-visual",
    visualLabel: "LIVE WEBSITE",
    visualTitle: "Mum’s\nBackpackers",
    href: "http://mumsbackpackers.com/",
    linkText: "Visit mumsbackpackers.com",
  },
  {
    number: "03",
    label: "CUSTOMER SYSTEMS · JIRANI SMART",
    title: "Loan & customer portfolio systems",
    description:
      "Worked with loan management systems and customer portfolio management systems. This brings practical familiarity with structured customer and account workflows; no CRM platform or performance figures are claimed here.",
    icon: ClipboardList,
    visualClass: "systems-visual",
    visualLabel: "CUSTOMER OPERATIONS",
    visualTitle: "Loan management\n+ customer portfolios",
    href: "#systems",
    linkText: "Explore my systems experience",
  },
];

export default function Home() {
  return (
    <main className="portfolio-shell min-h-screen overflow-hidden">
      <header className="site-header">
        <a href="#home" className="brand-mark" aria-label="Leonard Tsuma home">
          <span className="brand-icon">LT</span>
          <span>LEONARD TSUMA<span className="brand-dot">.</span></span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#approach">Approach</a>
          <a href="#systems">Systems</a>
          <a href="#work">Selected work</a>
        </nav>
        <a className="header-cta" href="mailto:festusleonard996@gmail.com">
          Let&apos;s talk <ArrowUpRightIcon />
        </a>
      </header>

      <section id="home" className="hero-section page-width">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> DIGITAL MARKETING · WEB · CUSTOMER SYSTEMS</div>
          <h1>Good marketing.<br /><span>Clear next steps.</span></h1>
          <p className="hero-intro">
            I&apos;m Leonard. I create marketing materials, work with Facebook Events,
            build websites, and have hands-on experience with loan and customer portfolio
            management systems.
          </p>
          <div className="hero-actions">
            <a className="button-primary" href="mailto:festusleonard996@gmail.com">Let&apos;s work together <ArrowRight size={17} /></a>
            <a className="text-link" href="#work">See selected work <ArrowDown size={16} /></a>
          </div>
          <div className="hero-proof">
            <div className="proof-avatars"><span>FB</span><span>G</span><span>↗</span></div>
            <p><strong>Campaign → website → customer</strong><br />Practical digital experience</p>
          </div>
        </div>

        <div className="dashboard-wrap" aria-label="Illustrative campaign dashboard">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="mini-dashboard event-summary">
            <div className="dashboard-topline"><span className="dashboard-title"><span className="dashboard-mark"><Facebook size={15} /></span> Jirani Smart</span><span className="live-label"><i /> FACEBOOK EVENTS</span></div>
            <div className="dashboard-caption">UPCOMING EVENT SERIES <span>From supplied screenshot</span></div>
            <div className="dashboard-total">Tsavo East weekend escape <span>Travel promotion</span></div>
            <div className="event-art"><span className="event-sun" /><span className="event-hill event-hill-back" /><span className="event-hill event-hill-front" /><span className="event-vehicle">SAFARI<br />ESCAPE</span><div className="event-art-caption">LAST-MINUTE WEEKEND<br />ESCAPE!</div></div>
            <div className="event-dates"><div><span>EVENT DATES SHOWN</span><strong>Oct 6 · Oct 13 · Oct 20</strong></div><div><span>TIME</span><strong>7 PM</strong></div></div>
            <div className="dashboard-note"><Sparkles size={15} /><span>Promotional event listings and creative—not performance metrics.</span></div>
          </div>
          <div className="floating-tag tag-meta"><span><MousePointer2 size={14} /></span> WEBSITE PROJECT <i>↗</i></div>
          <div className="floating-tag tag-funnel"><span><ClipboardList size={14} /></span> CUSTOMER SYSTEMS <i>✓</i></div>
        </div>
        <a className="scroll-cue" href="#approach"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></a>
      </section>

      <section id="approach" className="approach-section section-pad">
        <div className="page-width">
          <div className="section-heading">
            <div><span className="section-kicker">WHAT I BRING</span><h2>Useful skills.<br /><span>Real examples.</span></h2></div>
            <p>My experience spans digital promotion, a live website project, and customer-facing operational systems. The selected work below links to the available evidence.</p>
          </div>
          <div className="capability-grid">
            {capabilities.map(({ icon: Icon, number, title, text, tags }) => (
              <article className="capability-card" key={number}>
                <div className="capability-top"><span className="capability-icon"><Icon size={20} /></span><span>{number}</span></div>
                <h3>{title}</h3><p>{text}</p>
                <div className="tag-list">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="systems" className="funnel-section section-pad">
        <div className="page-width">
          <div className="section-heading funnel-heading">
            <div><span className="section-kicker">CUSTOMER & LOAN OPERATIONS</span><h2>Keep customer work<br /><span>organized.</span></h2></div>
            <p>I have worked with loan management systems and customer portfolio management systems—experience that translates to careful customer record handling and structured workflows.</p>
          </div>
          <div className="journey-track">
            {[
              { icon: Facebook, label: "Promotion", detail: "Campaigns & events" },
              { icon: MousePointer2, label: "Website", detail: "A clear online presence" },
              { icon: ClipboardList, label: "Customer record", detail: "Loan system experience" },
              { icon: Workflow, label: "Portfolio view", detail: "Customer portfolio tools" },
              { icon: MessageCircle, label: "Next action", detail: "Keep work moving" },
              { icon: CircleDollarSign, label: "Outcome", detail: "Follow through" },
            ].map(({ icon: Icon, label, detail }, index) => (
              <div className="journey-step" key={label}>
                <div className="journey-node"><Icon size={19} /><span>0{index + 1}</span></div>
                <h3>{label}</h3><p>{detail}</p>
                {index < 5 && <ChevronRight className="journey-arrow" size={17} />}
              </div>
            ))}
          </div>
          <div className="system-details">
            <div className="workflow-card">
              <div className="workflow-heading"><span className="workflow-icon"><Workflow size={19} /></span><div><span>TRANSFERABLE WORKFLOW THINKING</span><h3>Keep the customer context connected.</h3></div><span className="workflow-badge">PROCESS OVERVIEW</span></div>
              <div className="workflow-trigger"><span className="trigger-dot" /> EXPERIENCE <strong>Loan + customer portfolio systems</strong></div>
              <div className="workflow-list">{workflowItems.map((item, index) => <div className="workflow-item" key={item}><span>{index + 1}</span>{item}<Check size={15} /></div>)}</div>
              <div className="pipeline-line"><span>INQUIRY</span><i /><span>RECORD</span><i /><span>STATUS</span><i /><span>NEXT STEP</span><i /><span>FOLLOW-UP</span></div>
            </div>
            <div className="system-aside"><span className="aside-icon"><Radio size={18} /></span><span className="section-kicker">HONEST ABOUT THE TOOLS</span><h3>Real systems experience. No inflated claims.</h3><p>I have not listed a specific CRM vendor or GoHighLevel implementation. My direct experience is with loan management and customer portfolio management systems.</p><a href="#work">See the project details <ArrowDownRight size={16} /></a></div>
          </div>
        </div>
      </section>

      <section id="work" className="sample-section section-pad">
        <div className="page-width">
          <div className="section-heading work-heading">
            <div><span className="section-kicker">SELECTED WORK & EVIDENCE</span><h2>Work you can<br /><span>actually explore.</span></h2></div>
            <p>Three examples across campaign promotion, web development, and customer systems. Links open the live website and flyer folder; no unverified campaign results are presented.</p>
          </div>
          <div className="case-grid">
            {selectedWork.map(({ number, label, title, description, icon: Icon, visualClass, visualLabel, visualTitle, href, linkText }) => (
              <article className="case-card" key={number}>
                <div className={`case-visual ${visualClass}`}>
                  <div className="case-visual-top"><span><Icon size={15} /></span><span>{visualLabel}</span><span>{number}</span></div>
                  <strong>{visualTitle.split("\n").map((line) => <span key={line}>{line}</span>)}</strong>
                  <div className="case-visual-bottom"><span /> <span /> <span /></div>
                </div>
                <div className="case-content">
                  <span className="case-label">{label}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
                    {linkText} <ArrowRight size={15} />
                  </a>
                </div>
              </article>
            ))}
          </div>
          <p className="evidence-note"><Sparkles size={15} /> Performance figures are not included because no verified results were provided. The Jirani Smart Facebook Events screenshot was supplied as supporting evidence.</p>
        </div>
      </section>

      <section className="process-section section-pad">
        <div className="page-width process-inner"><div><span className="section-kicker">MY EXPERIENCE</span><h2>Digital work with<br /><span>customer context.</span></h2></div><div className="process-flow"><div><span>01</span><strong>Travel promotions</strong><small>Flyers and event listings</small></div><ArrowRight /><div><span>02</span><strong>Website project</strong><small>Mum’s Backpackers</small></div><ArrowRight /><div><span>03</span><strong>Loan systems</strong><small>Loan management</small></div><ArrowRight /><div><span>04</span><strong>Customer portfolios</strong><small>Portfolio management systems</small></div></div><p className="process-note"><span><Check size={15} /></span>Campaign materials, a live website, and customer and loan management systems experience.</p></div>
      </section>

      <footer id="contact" className="contact-section">
        <div className="page-width contact-inner"><div><span className="section-kicker">HAVE A CAMPAIGN IN MIND?</span><h2>Let&apos;s make the<br />next click <span>count.</span></h2></div><div className="contact-action"><p>Tell me what you&apos;re building and where the funnel needs a lift.</p><a className="button-primary" href="mailto:festusleonard996@gmail.com"><Mail size={17} /> festusleonard996@gmail.com <ArrowRight size={17} /></a><span className="contact-location">BASED IN MOMBASA, KENYA <span>·</span> OPEN TO OPPORTUNITIES</span></div></div>
        <div className="page-width footer-bottom"><a href="#home" className="brand-mark"><span className="brand-icon">LT</span><span>LEONARD TSUMA<span className="brand-dot">.</span></span></a><span>Media strategy, funnel thinking, and follow-through.</span><a href="#home">BACK TO TOP ↑</a></div>
      </footer>
    </main>
  );
}

function ArrowUpRightIcon() {
  return <ArrowRight size={15} className="arrow-up-right" />;
}
