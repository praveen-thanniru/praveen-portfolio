"use client";

import { useEffect, useMemo, useState, type CSSProperties } from "react";

const techLogos = [
  { name: "AWS", src: "https://cdn.simpleicons.org/amazonwebservices/FFFFFF" },
  { name: "Snowflake", src: "https://cdn.simpleicons.org/snowflake/29B5E8" },
  { name: "Databricks", src: "https://cdn.simpleicons.org/databricks/FF3621" },
  { name: "ClickHouse", src: "https://cdn.simpleicons.org/clickhouse/FFCC01" },
  { name: "Apache Spark", src: "https://cdn.simpleicons.org/apachespark/E25A1C" },
  { name: "Apache Airflow", src: "https://cdn.simpleicons.org/apacheairflow/017CEE" },
];

const companies = [
  {
    name: "Carnival Cruise Line",
    role: "Senior Data Engineer",
    period: "2026 — Present",
    logo: "https://www.google.com/s2/favicons?domain=carnival.com&sz=128",
    summary: "CDC modernization, Snowflake transformation layers, and production data migration.",
  },
  {
    name: "Visa",
    role: "Senior Data Engineer",
    period: "2026",
    logo: "https://cdn.simpleicons.org/visa/1A1F71",
    summary: "Petabyte-scale Spark optimization and governed financial-data pipelines.",
  },
  {
    name: "Gala Games",
    role: "Data Engineer",
    period: "2024 — 2026",
    logo: "https://www.google.com/s2/favicons?domain=gala.com&sz=128",
    summary: "Streaming data platform, cloud infrastructure, observability, and platform re-architecture.",
  },
  {
    name: "Nike",
    role: "Data Engineer",
    period: "2017 — 2022",
    logo: "https://cdn.simpleicons.org/nike/FFFFFF",
    summary: "Distributed Spark workloads, AWS ETL, data integration, and performance engineering.",
  },
];

const projects = [
  {
    id: "01",
    title: "Data Platform Re-architecture",
    eyebrow: "PLATFORM MODERNIZATION",
    description:
      "Re-architected a high-growth analytics platform from Databricks to ClickHouse, redesigning storage, transformation, orchestration, and compute while preserving production reliability.",
    impact: "$420K annual savings",
    flow: ["Databricks", "Airflow", "dbt", "ClickHouse", "Analytics"],
    logos: ["Databricks", "Apache Airflow", "ClickHouse"],
  },
  {
    id: "02",
    title: "Real-Time Streaming Platform",
    eyebrow: "DISTRIBUTED STREAMING",
    description:
      "Built and operated Kafka/Flink pipelines processing blockchain and player telemetry with containerized deployment, health checks, autoscaling, and production observability.",
    impact: "200M+ events / day",
    flow: ["Producers", "Kafka", "Flink", "Kubernetes", "Consumers"],
    logos: ["AWS", "Apache Spark"],
  },
  {
    id: "03",
    title: "Enterprise CDC Modernization",
    eyebrow: "NEAR-REAL-TIME INGESTION",
    description:
      "Replaced daily full refreshes with CDC across 110+ operational tables, creating a lower-latency ingestion path into Snowflake with dbt transformation layers downstream.",
    impact: "24h → <15m latency",
    flow: ["Azure SQL", "DMS", "S3", "Snowflake", "dbt"],
    logos: ["AWS", "Snowflake"],
  },
  {
    id: "04",
    title: "Spark Performance Engineering",
    eyebrow: "SCALE & EFFICIENCY",
    description:
      "Optimized a 2TB+ daily Spark workload through partitioning, resource right-sizing, SQL refactoring, and execution-plan improvements to radically reduce runtime and compute pressure.",
    impact: "6 hours → 15 minutes",
    flow: ["Raw", "Spark", "Shuffle", "Partition", "Curated"],
    logos: ["Apache Spark", "AWS"],
  },
];

const metrics = [
  ["200M+", "events processed daily"],
  ["$420K", "annual platform savings"],
  ["24×", "Spark runtime improvement"],
  ["110+", "tables moved to CDC"],
];

const skillGroups = [
  ["Data Systems", "Python · SQL · PySpark · Kafka · Flink · Airflow · dbt"],
  ["Cloud & Platform", "AWS · Azure · GCP · Terraform · Kubernetes · Docker · Helm"],
  ["Data Platforms", "Snowflake · Databricks · ClickHouse · Redshift · BigQuery"],
  ["Reliability", "Datadog · Grafana · Prometheus · CloudWatch · CI/CD"],
];

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" className="arrow-icon" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

function BrandLogo({ name, src, compact = false }: { name: string; src: string; compact?: boolean }) {
  return (
    <span className={compact ? "brand-logo compact" : "brand-logo"} title={name}>
      <span className="brand-logo-image"><img src={src} alt={`${name} logo`} /></span>
      {!compact && <span>{name}</span>}
    </span>
  );
}

function TechMarquee() {
  const doubled = [...techLogos, ...techLogos];
  return (
    <div className="logo-marquee" aria-label="Technology stack">
      <div className="logo-track">
        {doubled.map((logo, index) => <BrandLogo key={`${logo.name}-${index}`} {...logo} />)}
      </div>
    </div>
  );
}

function PremiumTopology() {
  const nodes = useMemo(() => [
    [60, 90], [140, 48], [225, 102], [310, 58], [397, 112], [470, 72],
    [102, 205], [198, 185], [286, 225], [376, 190], [468, 225], [246, 300], [390, 298],
  ], []);
  const edges = [[0,1],[1,2],[2,3],[3,4],[4,5],[0,6],[6,7],[7,2],[7,8],[8,9],[9,4],[9,10],[7,11],[11,12],[12,10]];

  return (
    <div className="topology premium-panel">
      <div className="panel-head">
        <span><i className="pulse-dot" /> platform topology</span>
        <small>production</small>
      </div>
      <div className="topology-canvas">
        <svg viewBox="0 0 530 350" aria-label="Animated cloud data platform topology">
          <defs>
            <linearGradient id="wirePurple" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#7c6cff" stopOpacity=".12" />
              <stop offset=".5" stopColor="#9a8cff" stopOpacity=".8" />
              <stop offset="1" stopColor="#6e9bff" stopOpacity=".15" />
            </linearGradient>
            <radialGradient id="nodePurple">
              <stop offset="0" stopColor="#ffffff" />
              <stop offset=".28" stopColor="#c4bcff" />
              <stop offset="1" stopColor="#5848d9" />
            </radialGradient>
            <filter id="glowPurple"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
          </defs>
          {edges.map(([a,b], i) => (
            <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} stroke="url(#wirePurple)" strokeWidth="1.2" className="topology-wire" />
          ))}
          {nodes.map(([x,y], i) => (
            <g key={i}>
              <circle cx={x} cy={y} r={i % 3 === 0 ? 16 : 12} fill="none" stroke="#8d7cff" strokeOpacity=".10" />
              <circle cx={x} cy={y} r={i % 3 === 0 ? 7 : 5} fill="url(#nodePurple)" filter="url(#glowPurple)" className="topology-node" style={{ animationDelay: `${-i * .18}s` }} />
            </g>
          ))}
          <circle r="3.5" fill="#ffffff" filter="url(#glowPurple)">
            <animateMotion dur="4.4s" repeatCount="indefinite" path="M60 90 L140 48 L225 102 L310 58 L397 112 L470 72" />
          </circle>
          <circle r="3" fill="#7cc7ff" filter="url(#glowPurple)">
            <animateMotion dur="5.6s" repeatCount="indefinite" path="M102 205 L198 185 L286 225 L376 190 L468 225" />
          </circle>
          <circle r="3" fill="#d09bff" filter="url(#glowPurple)">
            <animateMotion dur="6.4s" repeatCount="indefinite" path="M198 185 L246 300 L390 298 L468 225" />
          </circle>
        </svg>
        <div className="hud hud-a"><span>throughput</span><b>200M+/day</b></div>
        <div className="hud hud-b"><span>availability</span><b>99.9%</b></div>
        <div className="hud hud-c"><span>latency</span><b>&lt;15m CDC</b></div>
      </div>
      <div className="panel-foot"><span>ingest</span><i /><span>process</span><i /><span>govern</span><i /><span>serve</span></div>
    </div>
  );
}

function ProjectFlow({ flow }: { flow: string[] }) {
  return (
    <div className="project-flow">
      <div className="project-line" />
      <div className="flow-packet one" />
      <div className="flow-packet two" />
      {flow.map((node, index) => (
        <div className="project-node" key={node} style={{ left: `${(index / (flow.length - 1)) * 100}%` }}>
          <i />
          <span>{node}</span>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  const [activeProject, setActiveProject] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mouse, setMouse] = useState({ x: 50, y: 25 });
  const project = projects[activeProject];

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total ? (window.scrollY / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const shellStyle = { "--mx": `${mouse.x}%`, "--my": `${mouse.y}%` } as CSSProperties;

  return (
    <main
      className="site-shell"
      style={shellStyle}
      onMouseMove={(e) => setMouse({ x: (e.clientX / window.innerWidth) * 100, y: (e.clientY / window.innerHeight) * 100 })}
    >
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
      <div className="cursor-light" />
      <div className="noise-layer" />

      <header className="nav-shell">
        <div className="nav-bar premium-panel">
          <a href="#top" className="name-brand">
            <strong>Praveen Kumar Thanniru</strong>
            <span>DATA → CLOUD → PLATFORM</span>
          </a>
          <nav><a href="#work">Work</a><a href="#stack">Stack</a><a href="#experience">Experience</a><a href="#contact">Contact</a></nav>
          <a href="/praveen-thanniru-resume.pdf" target="_blank" className="nav-resume">Resume <Arrow /></a>
        </div>
      </header>

      <section id="top" className="hero section-width">
        <div className="hero-copy">
          <div className="hero-name">PRAVEEN KUMAR THANNIRU</div>
          <div className="hero-kicker"><i className="pulse-dot" /> SENIOR DATA ENGINEER · PLATFORM-FOCUSED</div>
          <h1>Building the <span>infrastructure behind modern data.</span></h1>
          <p>
            I design and operate large-scale data systems, distributed pipelines, and production cloud infrastructure — with a growing focus on platform engineering, reliability, automation, and developer enablement.
          </p>
          <div className="hero-actions">
            <a href="#work" className="button primary">Explore selected work <Arrow /></a>
            <a href="https://github.com/praveen-thanniru" target="_blank" className="button secondary">GitHub</a>
            <a href="https://www.linkedin.com/in/praveenthanniru/" target="_blank" className="button secondary">LinkedIn</a>
          </div>
          <div className="hero-meta"><span>7+ years data engineering</span><span>Distributed systems</span><span>Cloud platforms</span></div>
        </div>
        <PremiumTopology />
      </section>

      <section className="brand-strip section-width">
        <span className="brand-strip-label">Production stack</span>
        <TechMarquee />
      </section>

      <section className="metrics section-width">
        {metrics.map(([value, label], i) => (
          <article className="metric-card premium-panel" key={label}>
            <span>0{i + 1}</span><strong>{value}</strong><p>{label}</p><div className="metric-sheen" />
          </article>
        ))}
      </section>

      <section className="direction section-width">
        <div className="section-label"><span>01</span> / DIRECTION</div>
        <div className="direction-copy">
          <h2>From moving data to building the platform that moves it.</h2>
          <p>My work has increasingly shifted from individual pipelines toward the infrastructure, orchestration, deployment, observability, and reliability patterns that other engineers build on top of.</p>
          <div className="direction-path">
            {["Data Engineering", "Distributed Systems", "Cloud Infrastructure", "Platform Engineering"].map((item, i) => (
              <div key={item} className={i === 3 ? "path-step current" : "path-step"}><span>0{i+1}</span><strong>{item}</strong>{i < 3 && <b>→</b>}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="work section-width">
        <div className="section-heading">
          <div className="section-label"><span>02</span> / SELECTED WORK</div>
          <h2>Production systems with measurable outcomes.</h2>
          <p>Interactive architecture snapshots from the systems I’ve built and improved.</p>
        </div>

        <div className="project-browser premium-panel">
          <aside>
            {projects.map((item, i) => (
              <button key={item.id} className={activeProject === i ? "active" : ""} onClick={() => setActiveProject(i)}>
                <span>{item.id}</span>
                <div><strong>{item.title}</strong><small>{item.eyebrow}</small></div>
                <b>↗</b>
              </button>
            ))}
          </aside>
          <article className="project-stage">
            <div className="stage-head"><span><i className="pulse-dot" /> system://{project.id}</span><small>production</small></div>
            <div className="stage-copy">
              <span>{project.eyebrow}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
            <ProjectFlow flow={project.flow} />
            <div className="stage-bottom">
              <div className="project-logos">
                {project.logos.map((name) => {
                  const logo = techLogos.find((item) => item.name === name);
                  return logo ? <BrandLogo key={name} {...logo} compact /> : null;
                })}
              </div>
              <div className="project-impact"><small>IMPACT</small><strong>{project.impact}</strong></div>
            </div>
          </article>
        </div>
      </section>

      <section id="stack" className="stack section-width">
        <div className="section-heading compact"><div className="section-label"><span>03</span> / CAPABILITIES</div><h2>A modern data + platform engineering toolkit.</h2></div>
        <div className="stack-layout">
          <div className="logo-orbit premium-panel">
            <div className="orbit-ring one" /><div className="orbit-ring two" /><div className="orbit-ring three" />
            <div className="orbit-center"><strong>PLATFORM</strong><span>data + infra</span></div>
            {techLogos.map((logo, i) => <div className={`orbit-logo orbit-${i + 1}`} key={logo.name}><BrandLogo {...logo} compact /></div>)}
          </div>
          <div className="skill-list premium-panel">
            {skillGroups.map(([group, skills], i) => <div className="skill-row" key={group}><span>0{i+1}</span><strong>{group}</strong><p>{skills}</p></div>)}
          </div>
        </div>
      </section>

      <section id="experience" className="experience section-width">
        <div className="section-heading compact"><div className="section-label"><span>04</span> / EXPERIENCE</div><h2>Engineering across scale, industries, and platforms.</h2></div>
        <div className="company-grid">
          {companies.map((company, i) => (
            <article className="company-card premium-panel" key={company.name}>
              <div className="company-top"><span className="company-logo"><img src={company.logo} alt={`${company.name} logo`} /></span><span className="company-index">0{i+1}</span></div>
              <h3>{company.name}</h3><p className="company-role">{company.role}</p><p className="company-summary">{company.summary}</p><div className="company-period">{company.period}</div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="contact section-width premium-panel">
        <div className="contact-orb" />
        <div><div className="section-label"><span>05</span> / CONTACT</div><h2>Let’s build infrastructure people can depend on.</h2><p>Senior Data Engineering · Data Platform · Cloud / Platform Engineering</p></div>
        <div className="contact-actions"><a href="mailto:praveent0117@gmail.com" className="button primary">Email me <Arrow /></a><a href="https://www.linkedin.com/in/praveenthanniru/" target="_blank" className="button secondary">LinkedIn</a></div>
      </section>

      <footer className="section-width"><span>© 2026 PRAVEEN KUMAR THANNIRU</span><span>DATA → CLOUD → PLATFORM</span></footer>
    </main>
  );
}
