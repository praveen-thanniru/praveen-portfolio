"use client";

import { useState } from "react";

const impact = [
  { value: "200M+", label: "events / day", detail: "streaming at scale" },
  { value: "$420K", label: "annual savings", detail: "platform re-architecture" },
  { value: "24×", label: "faster Spark", detail: "6h → 15m" },
  { value: "110+", label: "CDC tables", detail: "near-real-time migration" },
];

const projects = [
  {
    title: "Data Platform Re-architecture",
    subtitle: "Databricks → ClickHouse",
    description:
      "Re-architected storage, transformation, orchestration, and compute for a high-growth product data platform, cutting monthly cloud spend from $75K to $40K while preserving production reliability.",
    tech: ["ClickHouse", "dbt", "Airflow", "AWS", "Terraform"],
    metric: "$420K/year saved",
    nodes: ["Sources", "Airflow", "dbt", "ClickHouse", "Analytics"],
  },
  {
    title: "Real-Time Streaming Platform",
    subtitle: "200M+ events every day",
    description:
      "Built and operated distributed event pipelines for blockchain and player telemetry with stream processing, containerized deployments, health checks, and autoscaling.",
    tech: ["Kafka", "Flink", "Kubernetes", "Docker", "Datadog"],
    metric: "200M+ events/day",
    nodes: ["Producers", "Kafka", "Flink", "Storage", "Consumers"],
  },
  {
    title: "Enterprise CDC Modernization",
    subtitle: "Daily batch → near-real-time",
    description:
      "Designed CDC and incremental ingestion for maritime operational data, replacing daily full refreshes with change capture across more than 110 source tables.",
    tech: ["Azure SQL MI", "AWS DMS", "S3", "Snowpipe", "Snowflake", "dbt"],
    metric: "24h → <15m latency",
    nodes: ["Azure SQL", "DMS", "S3", "Snowpipe", "Snowflake", "dbt"],
  },
  {
    title: "Spark Performance Engineering",
    subtitle: "2TB+ daily workload",
    description:
      "Tuned distributed Spark workloads by reducing memory pressure, compute usage, and execution time through partitioning, SQL refactoring, and resource right-sizing.",
    tech: ["PySpark", "EMR", "Python", "SQL", "AWS"],
    metric: "6 hours → 15 minutes",
    nodes: ["Raw Data", "Spark", "Shuffle", "Partition", "Curated"],
  },
];

const experience = [
  ["Carnival Cruise Line", "Senior Data Engineer", "2026 — Present"],
  ["Visa", "Senior Data Engineer", "2026"],
  ["Gala Games", "Data Engineer", "2024 — 2026"],
  ["Nike", "Data Engineer", "2017 — 2022"],
];

const stack = [
  ["Data", "Python · SQL · PySpark · Kafka · Flink · Airflow · dbt"],
  ["Cloud", "AWS · Azure · GCP · Databricks · Snowflake · ClickHouse"],
  ["Platform", "Terraform · Kubernetes · Docker · Helm · CI/CD"],
  ["Reliability", "Datadog · Grafana · Prometheus · CloudWatch"],
];

function ExternalArrow() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

function DataMesh() {
  const nodes = [
    [54, 80], [145, 36], [240, 92], [332, 48], [412, 112], [108, 170], [222, 188], [350, 180], [455, 205], [286, 272], [146, 272], [406, 292],
  ];
  const edges = [[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,2],[6,7],[7,4],[7,8],[5,10],[10,9],[9,7],[9,11],[11,8]];
  return (
    <div className="mesh-card">
      <div className="mesh-toolbar">
        <span className="live-dot" />
        <span>platform.topology</span>
        <span className="ml-auto text-white/30">LIVE</span>
      </div>
      <svg viewBox="0 0 520 340" className="h-full w-full" aria-label="Animated data platform topology">
        <defs>
          <linearGradient id="edge" x1="0" x2="1"><stop offset="0" stopColor="#6ee7b7" stopOpacity=".15"/><stop offset=".5" stopColor="#67e8f9" stopOpacity=".65"/><stop offset="1" stopColor="#6ee7b7" stopOpacity=".15"/></linearGradient>
          <radialGradient id="node"><stop offset="0" stopColor="#d1fae5"/><stop offset=".3" stopColor="#6ee7b7"/><stop offset="1" stopColor="#047857"/></radialGradient>
          <filter id="glow"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        </defs>
        {edges.map(([a,b],i) => <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} stroke="url(#edge)" strokeWidth="1.2" className="mesh-line" style={{animationDelay:`-${i*.33}s`}} />)}
        {nodes.map(([x,y],i) => <g key={i}><circle cx={x} cy={y} r={i%4===0?8:5} fill="url(#node)" filter="url(#glow)" className="mesh-node" style={{animationDelay:`-${i*.21}s`}}/><circle cx={x} cy={y} r={i%4===0?17:12} fill="none" stroke="#6ee7b7" strokeOpacity=".13" /></g>)}
        <circle r="4" fill="#fff" filter="url(#glow)"><animateMotion dur="4.2s" repeatCount="indefinite" path="M54 80 L145 36 L240 92 L332 48 L412 112" /></circle>
        <circle r="3" fill="#67e8f9" filter="url(#glow)"><animateMotion dur="5.3s" repeatCount="indefinite" path="M108 170 L222 188 L350 180 L455 205" /></circle>
        <circle r="3" fill="#6ee7b7" filter="url(#glow)"><animateMotion dur="6s" repeatCount="indefinite" path="M146 272 L286 272 L350 180 L406 292 L455 205" /></circle>
      </svg>
      <div className="mesh-labels">
        <span>ingest</span><span>process</span><span>govern</span><span>serve</span>
      </div>
    </div>
  );
}

function ArchitectureFlow({ nodes }: { nodes: string[] }) {
  return (
    <div className="architecture-flow">
      <div className="flow-track" />
      <div className="flow-packet packet-one" />
      <div className="flow-packet packet-two" />
      {nodes.map((node, i) => (
        <div key={node} className="flow-node" style={{ left: `${(i / Math.max(nodes.length - 1, 1)) * 100}%` }}>
          <span className="flow-core" />
          <span className="flow-name">{node}</span>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  const [active, setActive] = useState(0);
  const project = projects[active];

  return (
    <main className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="noise" />

      <header className="topbar">
        <a href="#top" className="brand">PKT<span>/</span>PLATFORM</a>
        <nav className="desktop-nav">
          <a href="#work">Work</a><a href="#stack">Stack</a><a href="#experience">Experience</a><a href="#contact">Contact</a>
        </nav>
        <a className="resume-link" href="/praveen-thanniru-resume.pdf" target="_blank">Resume <ExternalArrow /></a>
      </header>

      <section id="top" className="hero-wrap">
        <div className="hero-copy">
          <div className="eyebrow"><span className="live-dot" /> DATA ENGINEERING → CLOUD & PLATFORM</div>
          <h1>I build the systems <span>data teams run on.</span></h1>
          <p>I’m Praveen Kumar Thanniru — a data engineer moving deeper into cloud and platform engineering, building distributed pipelines, production infrastructure, and reliable data platforms at scale.</p>
          <div className="hero-actions">
            <a href="#work" className="cta-primary">Explore systems <ExternalArrow /></a>
            <a href="https://github.com/praveen-thanniru" target="_blank" className="cta-secondary">GitHub</a>
            <a href="https://www.linkedin.com/in/praveenthanniru/" target="_blank" className="cta-secondary">LinkedIn</a>
          </div>
          <div className="status-strip">
            <div><span className="status-led" /> AVAILABLE FOR SELECT OPPORTUNITIES</div>
            <div>FOCUS: DATA PLATFORM · CLOUD · INFRA</div>
          </div>
        </div>
        <DataMesh />
      </section>

      <section className="impact-grid">
        {impact.map((item, i) => (
          <article key={item.label} className="impact-card">
            <div className="impact-index">0{i + 1}</div>
            <div className="impact-value">{item.value}</div>
            <div className="impact-label">{item.label}</div>
            <div className="impact-detail">{item.detail}</div>
            <div className="impact-scan" />
          </article>
        ))}
      </section>

      <section className="systems-section">
        <div className="section-heading">
          <div><span>01</span> / SYSTEM THINKING</div>
          <h2>From moving data to building the platform beneath it.</h2>
        </div>
        <div className="system-console">
          <div className="console-head"><span>career.transition</span><span className="text-emerald-200/60">running</span></div>
          <div className="career-flow">
            {["Data Engineering", "Distributed Systems", "Cloud Infrastructure", "Platform Engineering"].map((step, i) => (
              <div className="career-node" key={step}><span>0{i+1}</span><strong>{step}</strong><small>{i<3?"next layer →":"current direction"}</small></div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="work-section">
        <div className="section-heading compact">
          <div><span>02</span> / SELECTED SYSTEMS</div>
          <h2>Projects you can inspect, not just read.</h2>
        </div>

        <div className="project-browser">
          <div className="project-list">
            {projects.map((p, i) => (
              <button key={p.title} onClick={() => setActive(i)} className={`project-tab ${active === i ? "active" : ""}`}>
                <span>0{i + 1}</span><div><strong>{p.title}</strong><small>{p.subtitle}</small></div><b>↗</b>
              </button>
            ))}
          </div>
          <div className="project-stage">
            <div className="stage-top"><span>system://project-{active + 1}</span><span className="stage-status"><i /> production</span></div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ArchitectureFlow nodes={project.nodes} />
            <div className="stage-bottom">
              <div className="tech-row">{project.tech.map(t => <span key={t}>{t}</span>)}</div>
              <div className="metric-block"><small>IMPACT</small><strong>{project.metric}</strong></div>
            </div>
          </div>
        </div>
      </section>

      <section id="stack" className="stack-section">
        <div className="section-heading compact"><div><span>03</span> / TOOLCHAIN</div><h2>The stack behind the systems.</h2></div>
        <div className="stack-grid">
          <div className="orbit-visual">
            <div className="orbit orbit-a" /><div className="orbit orbit-b" /><div className="orbit orbit-c" />
            <div className="orbit-center"><strong>PLATFORM</strong><small>engineering</small></div>
            <span className="orb orb-1">AWS</span><span className="orb orb-2">K8s</span><span className="orb orb-3">Kafka</span><span className="orb orb-4">dbt</span><span className="orb orb-5">TF</span><span className="orb orb-6">Spark</span>
          </div>
          <div className="stack-list">
            {stack.map(([name, items], i) => <div className="stack-row" key={name}><span>0{i+1}</span><strong>{name}</strong><p>{items}</p></div>)}
          </div>
        </div>
      </section>

      <section id="experience" className="experience-section">
        <div className="section-heading compact"><div><span>04</span> / EXPERIENCE</div><h2>Production systems across industries.</h2></div>
        <div className="timeline">
          {experience.map(([company, role, period], i) => (
            <div className="timeline-row" key={company}><div className="timeline-marker"><i /><span>0{i+1}</span></div><div><h3>{company}</h3><p>{role}</p></div><time>{period}</time></div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-panel">
        <div className="contact-signal"><span /><span /><span /><span /></div>
        <div className="contact-copy"><div className="eyebrow">05 / NEXT SYSTEM</div><h2>Let’s build something that has to work at scale.</h2><p>Senior Data Engineering · Data Platform · Cloud / Platform Engineering</p></div>
        <div className="contact-actions"><a href="mailto:praveent0117@gmail.com" className="cta-primary">Email me <ExternalArrow /></a><a href="https://www.linkedin.com/in/praveenthanniru/" target="_blank" className="cta-secondary">LinkedIn</a></div>
      </section>

      <footer><span>© 2026 PRAVEEN KUMAR THANNIRU</span><span>DATA → CLOUD → PLATFORM</span></footer>
    </main>
  );
}
