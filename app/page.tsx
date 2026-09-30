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
  Filter,
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
    title: "Meta campaign strategy",
    text: "Campaign structure, audience research, creative testing, retargeting, and considered budget decisions.",
    tags: ["Meta Ads", "Creative tests", "Retargeting"],
  },
  {
    icon: Filter,
    number: "02",
    title: "Funnels that keep moving",
    text: "A clear path from ad click to opt-in, thank-you page, booking, and the next best action.",
    tags: ["Landing pages", "Lead forms", "Conversion paths"],
  },
  {
    icon: Workflow,
    number: "03",
    title: "GoHighLevel follow-up",
    text: "Timely, useful automations that help new leads get a reply and teams stay on top of opportunities.",
    tags: ["Workflows", "Pipelines", "SMS + email"],
  },
];

const funnelSteps = [
  { icon: Facebook, label: "Meta ad", detail: "Stop the scroll" },
  { icon: MousePointer2, label: "Landing page", detail: "Make the offer clear" },
  { icon: ClipboardList, label: "Lead form", detail: "Capture intent" },
  { icon: Workflow, label: "GHL workflow", detail: "Respond right away" },
  { icon: MessageCircle, label: "Appointment", detail: "Keep the conversation" },
  { icon: CircleDollarSign, label: "Customer", detail: "Track the outcome" },
];

const workflowItems = [
  "Instant SMS + email confirmation",
  "Lead assigned to the right pipeline stage",
  "Helpful follow-up if there’s no reply",
  "Appointment reminders and no-show check-in",
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
          <a href="#sample">Sample campaign</a>
        </nav>
        <a className="header-cta" href="mailto:festusleonard996@gmail.com">
          Let&apos;s talk <ArrowUpRightIcon />
        </a>
      </header>

      <section id="home" className="hero-section page-width">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> MEDIA BUYING · FUNNELS · AUTOMATION</div>
          <h1>Clicks are a start.<br /><span>Growth is the goal.</span></h1>
          <p className="hero-intro">
            I&apos;m Leonard, a digital media manager focused on connecting paid social,
            conversion-focused funnels, and thoughtful follow-up—so every lead has a
            clear next step.
          </p>
          <div className="hero-actions">
            <a className="button-primary" href="mailto:festusleonard996@gmail.com">Let&apos;s build your funnel <ArrowRight size={17} /></a>
            <a className="text-link" href="#sample">Explore the sample <ArrowDown size={16} /></a>
          </div>
          <div className="hero-proof">
            <div className="proof-avatars"><span>FB</span><span>G</span><span>↗</span></div>
            <p><strong>Traffic → lead → sale</strong><br />One connected growth system</p>
          </div>
        </div>

        <div className="dashboard-wrap" aria-label="Illustrative campaign dashboard">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="mini-dashboard">
            <div className="dashboard-topline"><span className="dashboard-title"><span className="dashboard-mark"><BarChart3 size={15} /></span> Campaign overview</span><span className="live-label"><i /> SAMPLE VIEW</span></div>
            <div className="dashboard-caption">LEAD GENERATION <span>↗ Example only</span></div>
            <div className="dashboard-total">Weekly snapshot <span>Illustrative</span></div>
            <div className="chart-area">
              <div className="chart-y-labels"><span>120</span><span>80</span><span>40</span><span>0</span></div>
              <div className="chart-plot"><div className="chart-grid"><i /><i /><i /><i /></div><svg viewBox="0 0 440 155" preserveAspectRatio="none" role="img" aria-label="Illustrative upward trend line"><defs><linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#c7f36b" stopOpacity=".25" /><stop offset="100%" stopColor="#c7f36b" stopOpacity="0" /></linearGradient></defs><path d="M0 130 C32 118 42 122 66 105 S108 104 129 93 S162 102 191 76 S226 85 250 67 S289 72 311 54 S346 66 367 36 S402 42 440 15 V155 H0Z" fill="url(#chartFill)" /><path d="M0 130 C32 118 42 122 66 105 S108 104 129 93 S162 102 191 76 S226 85 250 67 S289 72 311 54 S346 66 367 36 S402 42 440 15" fill="none" stroke="#c7f36b" strokeWidth="3" vectorEffect="non-scaling-stroke" /></svg><div className="chart-x-labels"><span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span></div></div>
            </div>
            <div className="dashboard-metrics"><div><span>Spend</span><strong>$—</strong><small>Set by campaign plan</small></div><div><span>Leads</span><strong>—</strong><small>Tracked in CRM</small></div><div><span>Cost / lead</span><strong>$—</strong><small>Measured, not assumed</small></div></div>
            <div className="dashboard-note"><Sparkles size={15} /><span>Optimize the bottleneck, not just the ad.</span></div>
          </div>
          <div className="floating-tag tag-meta"><span><Instagram size={14} /></span> META ADS <i>↗</i></div>
          <div className="floating-tag tag-funnel"><span><Workflow size={14} /></span> LEAD FOLLOW-UP <i>✓</i></div>
        </div>
        <a className="scroll-cue" href="#approach"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></a>
      </section>

      <section id="approach" className="approach-section section-pad">
        <div className="page-width">
          <div className="section-heading">
            <div><span className="section-kicker">A CONNECTED APPROACH</span><h2>Make every step<br />work <span>harder.</span></h2></div>
            <p>Strong campaigns aren&apos;t a collection of disconnected tools. They&apos;re a system built around the customer journey—and the numbers that show where to improve.</p>
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
            <div><span className="section-kicker">THE CUSTOMER JOURNEY</span><h2>From first click<br />to <span>follow-through.</span></h2></div>
            <p>A funnel should make the next step feel natural for a prospect—and make every handoff visible to the team.</p>
          </div>
          <div className="journey-track">
            {funnelSteps.map(({ icon: Icon, label, detail }, index) => (
              <div className="journey-step" key={label}>
                <div className="journey-node"><Icon size={19} /><span>0{index + 1}</span></div>
                <h3>{label}</h3><p>{detail}</p>
                {index < funnelSteps.length - 1 && <ChevronRight className="journey-arrow" size={17} />}
              </div>
            ))}
          </div>
          <div className="system-details">
            <div className="workflow-card">
              <div className="workflow-heading"><span className="workflow-icon"><Workflow size={19} /></span><div><span>GOHIGHLEVEL AUTOMATION</span><h3>Fast follow-up, with a human touch.</h3></div><span className="workflow-badge">WORKFLOW EXAMPLE</span></div>
              <div className="workflow-trigger"><span className="trigger-dot" /> TRIGGER <strong>New lead form submitted</strong></div>
              <div className="workflow-list">{workflowItems.map((item, index) => <div className="workflow-item" key={item}><span>{index + 1}</span>{item}<Check size={15} /></div>)}</div>
              <div className="pipeline-line"><span>NEW LEAD</span><i /><span>CONTACTED</span><i /><span>QUALIFIED</span><i /><span>BOOKED</span><i /><span>WON / LOST</span></div>
            </div>
            <div className="system-aside"><span className="aside-icon"><Radio size={18} /></span><span className="section-kicker">BUILT TO BE MEASURED</span><h3>Don&apos;t let good leads go quiet.</h3><p>Track the journey from first touch to outcome. Use response, booking, and close rates to find the real constraint—not just the easiest metric to see.</p><a href="#sample">See the reporting mindset <ArrowDownRight size={16} /></a></div>
          </div>
        </div>
      </section>

      <section id="sample" className="sample-section section-pad">
        <div className="page-width sample-layout">
          <div className="sample-copy"><span className="sample-pill"><span /> SPEC CAMPAIGN · EXAMPLE ONLY</span><span className="section-kicker">A PRACTICAL PLAN, NOT A CLAIMED RESULT</span><h2>Local clinic<br />consultation campaign.</h2><p>A sample strategy showing how I would connect a lead-generation campaign, landing page, and GoHighLevel follow-up. No client results or performance data are being represented here.</p>
            <div className="sample-goal"><span><CircleDollarSign size={17} /></span><div><small>CAMPAIGN OBJECTIVE</small><strong>Generate qualified consultation bookings</strong></div></div>
            <div className="sample-steps"><div><span>01</span><p><strong>Test the message</strong>Build distinct creative angles around trust, convenience, and the consultation offer.</p></div><div><span>02</span><p><strong>Reduce friction</strong>Keep the landing page focused, mobile-friendly, and aligned to the ad promise.</p></div><div><span>03</span><p><strong>Close the loop</strong>Route new leads into a fast, clear follow-up and track booked appointments.</p></div></div>
          </div>
          <div className="report-card">
            <div className="report-head"><div><span className="section-kicker">CAMPAIGN SCORECARD</span><h3>What I&apos;d measure</h3></div><span className="report-stamp">PLANNING TEMPLATE</span></div>
            <div className="report-rows"><div><span>Meta spend</span><strong>Actual spend</strong><small>Budget pacing</small></div><div><span>CTR + landing-page views</span><strong>Attention &amp; intent</strong><small>Creative / page diagnosis</small></div><div><span>Leads + cost per lead</span><strong>Acquisition efficiency</strong><small>Lead volume and quality</small></div><div><span>Appointments + show rate</span><strong>Sales readiness</strong><small>Follow-up effectiveness</small></div><div><span>Customers + revenue</span><strong>Business outcome</strong><small>ROAS when revenue tracking is available</small></div></div>
            <div className="report-insight"><BarChart3 size={18} /><p><strong>Next optimization:</strong> Compare lead quality and booking rate by creative and audience before increasing spend. A cheap lead is only useful if it moves forward.</p></div>
            <div className="report-foot"><span><span className="report-dot" /> Illustrative planning framework</span><span>No fabricated metrics</span></div>
          </div>
        </div>
      </section>

      <section className="process-section section-pad">
        <div className="page-width process-inner"><div><span className="section-kicker">HOW I OPTIMIZE</span><h2>Find the friction.<br /><span>Test with purpose.</span></h2></div><div className="process-flow"><div><span>01</span><strong>Spot the bottleneck</strong><small>Read the whole funnel</small></div><ArrowRight /><div><span>02</span><strong>Form a hypothesis</strong><small>Change one key variable</small></div><ArrowRight /><div><span>03</span><strong>Measure the impact</strong><small>Use meaningful metrics</small></div><ArrowRight /><div><span>04</span><strong>Iterate or scale</strong><small>Keep what moves outcomes</small></div></div><p className="process-note"><span><Check size={15} /></span>Creative → audience → offer → landing page → follow-up. Diagnose first; don&apos;t change everything at once.</p></div>
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
