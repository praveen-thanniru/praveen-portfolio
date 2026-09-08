"use client";

import { useEffect, useState, type CSSProperties } from "react";

const projects = [
  {
    id: "01",
    title: "Data Platform Re-architecture",
    eyebrow: "Platform modernization",
    summary:
      "Re-architected a high-growth analytics platform from Databricks to ClickHouse, redesigning storage, transformation, orchestration, and compute while preserving production reliability.",
    impact: "$420K / year saved",
    tech: ["ClickHouse", "dbt", "Airflow", "AWS", "Terraform"],
    flow: ["Sources", "Airflow", "dbt", "ClickHouse", "Analytics"],
  },
  {
    id: "02",
    title: "Real-Time Streaming Platform",
    eyebrow: "Distributed streaming",
    summary:
      "Built and operated Kafka/Flink pipelines processing blockchain and player telemetry with containerized deployment, health checks, autoscaling, and production observability.",
    impact: "200M+ events / day",
    tech: ["Kafka", "Flink", "Kubernetes", "Docker", "Datadog"],
    flow: ["Producers", "Kafka", "Flink", "Storage", "Consumers"],
  },
  {
    id: "03",
    title: "Enterprise CDC Modernization",
    eyebrow: "Near-real-time ingestion",
    summary:
      "Replaced daily full refreshes with CDC across 110+ operational tables, creating a lower-latency ingestion path into Snowflake with dbt transformation layers downstream.",
    impact: "24h → <15m latency",
    tech: ["Azure SQL MI", "AWS DMS", "S3", "Snowpipe", "Snowflake", "dbt"],
    flow: ["Azure SQL", "DMS", "S3", "Snowpipe", "Snowflake", "dbt"],
  },
  {
    id: "04",
    title: "Spark Performance Engineering",
    eyebrow: "Scale & efficiency",
    summary:
      "Optimized a 2TB+ daily Spark workload through partitioning, resource right-sizing, SQL refactoring, and execution-plan improvements to radically reduce runtime and compute pressure.",
    impact: "6 hours → 15 minutes",
    tech: ["PySpark", "EMR", "Python", "SQL", "AWS"],
    flow: ["Raw", "Spark", "Shuffle", "Partition", "Curated"],
  },
];

const metrics = [
  ["200M+", "events processed daily"],
  ["$420K", "annual platform savings"],
  ["24×", "Spark runtime improvement"],
  ["110+", "tables moved to CDC"],
];

const experience = [
  ["Carnival Cruise Line", "Senior Data Engineer", "2026 — Present"],
  ["Visa", "Senior Data Engineer", "2026"],
  ["Gala Games", "Data Engineer", "2024 — 2026"],
  ["Nike", "Data Engineer", "2017 — 2022"],
];

const stack = {
  "Data systems": ["Python", "SQL", "PySpark", "Kafka", "Flink", "Airflow", "dbt"],
  "Cloud & platform": ["AWS", "Azure", "GCP", "Terraform", "Kubernetes", "Docker", "Helm"],
  "Data platforms": ["Snowflake", "Databricks", "ClickHouse", "Redshift", "BigQuery"],
  Reliability: ["Datadog", "Grafana", "Prometheus", "CloudWatch", "CI/CD"],
};

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon-arrow" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

function PlatformVisual() {
  const nodes = [
    [56, 112, 7], [132, 62, 5], [205, 122, 6], [286, 76, 7], [372, 120, 5], [438, 70, 6],
    [94, 218, 5], [186, 196, 7], [275, 226, 5], [360, 198, 7], [452, 230, 5], [242, 300, 7], [388, 304, 6],
  ];
  const edges = [[0,1],[1,2],[2,3],[3,4],[4,5],[0,6],[6,7],[7,2],[7,8],[8,9],[9,4],[9,10],[7,11],[11,12],[12,10]];

  return (
    <div className="platform-visual premium-card">
      <div className="visual-header">
        <div className="visual-title"><span className="status-dot" /> live platform topology</div>
        <div className="visual-meta">prod / us</div>
      </div>
      <div className="visual-canvas">
        <svg viewBox="0 0 510 355" role="img" aria-label="Animated data platform topology">
          <defs>
            <linearGradient id="wire" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#8de8cb" stopOpacity=".08" />
              <stop offset=".5" stopColor="#8de8cb" stopOpacity=".7" />
              <stop offset="1" stopColor="#86d9ff" stopOpacity=".12" />
            </linearGradient>
            <radialGradient id="core">
              <stop offset="0" stopColor="#fff" />
              <stop offset=".24" stopColor="#b8ffe6" />
              <stop offset="1" stopColor="#2b8a68" />
            </radialGradient>
            <filter id="softGlow"><feGaussianBlur stdDeviation="3" result="g"/><feMerge><feMergeNode in="g"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
          </defs>
          {edges.map(([a,b], i) => (
            <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} stroke="url(#wire)" strokeWidth="1.25" className="wire" style={{ animationDelay: `${-i * .19}s` }} />
          ))}
          {nodes.map(([x,y,r], i) => (
            <g key={i}>
              <circle cx={x} cy={y} r={r + 9} fill="none" stroke="#9af5d5" strokeOpacity=".08" />
              <circle cx={x} cy={y} r={r} fill="url(#core)" filter="url(#softGlow)" className="network-node" style={{ animationDelay: `${-i * .14}s` }} />
            </g>
          ))}
          <circle r="3.4" fill="#ffffff" filter="url(#softGlow)">
            <animateMotion dur="4.6s" repeatCount="indefinite" path="M56 112 L132 62 L205 122 L286 76 L372 120 L438 70" />
          </circle>
          <circle r="3" fill="#86d9ff" filter="url(#softGlow)">
            <animateMotion dur="5.8s" repeatCount="indefinite" path="M94 218 L186 196 L275 226 L360 198 L452 230" />
          </circle>
          <circle r="3" fill="#8de8cb" filter="url(#softGlow)">
            <animateMotion dur="6.2s" repeatCount="indefinite" path="M186 196 L242 300 L388 304 L452 230" />
          </circle>
        </svg>

        <div className="floating-stat stat-a"><span>latency</span><strong>12.8 ms</strong></div>
        <div className="floating-stat stat-b"><span>throughput</span><strong>200M+/day</strong></div>
        <div className="floating-stat stat-c"><span>availability</span><strong>99.9%</strong></div>
      </div>
      <div className="visual-footer">
        <span>ingest</span><i /><span>process</span><i /><span>govern</span><i /><span>serve</span>
      </div>
    </div>
  );
}

function Architecture({ flow }: { flow: string[] }) {
  return (
    <div className="architecture">
      <div className="architecture-line" />
      <div className="packet packet-a" />
      <div className="packet packet-b" />
      {flow.map((node, i) => (
        <div key={node} className="architecture-node" style={{ left: `${(i / (flow.length - 1)) * 100}%` }}>
          <span className="architecture-core" />
          <small>{node}</small>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  const [active, setActive] = useState(0);
  const [scroll, setScroll] = useState(0);
  const [mouse, setMouse] = useState({ x: 50, y: 25 });
  const project = projects[active];

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setScroll(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const shellStyle = {
    "--mx": `${mouse.x}%`,
    "--my": `${mouse.y}%`,
  } as CSSProperties;

  return (
    <main
      className="site-shell"
      style={shellStyle}
      onMouseMove={(e) => setMouse({ x: (e.clientX / window.innerWidth) * 100, y: (e.clientY / window.innerHeight) * 100 })}
    >
      <div className="scroll-progress" style={{ width: `${scroll}%` }} />
      <div className="cursor-aurora" />
      <div className="grain" />

      <header className="topbar-wrap">
        <div className="topbar premium-card">
          <a href="#top" className="brand">PKT<span>·</span>PLATFORM</a>
          <nav>
            <a href="#work">Work</a><a href="#stack">Stack</a><a href="#experience">Experience</a><a href="#contact">Contact</a>
          </nav>
          <a className="top-action" href="/praveen-thanniru-resume.pdf" target="_blank">Resume <Arrow /></a>
        </div>
      </header>

      <section id="top" className="hero section-width">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> DATA ENGINEERING → CLOUD & PLATFORM</div>
          <h1>Engineering the <em>platform beneath the data.</em></h1>
          <p>
            I’m <strong>Praveen Kumar Thanniru</strong>, a senior data engineer moving deeper into cloud and platform engineering — building distributed systems, production infrastructure, and reliable data platforms at scale.
          </p>
          <div className="hero-actions">
            <a href="#work" className="button button-primary">View selected systems <Arrow /></a>
            <a href="https://github.com/praveen-thanniru" target="_blank" className="button button-secondary">GitHub</a>
            <a href="https://www.linkedin.com/in/praveenthanniru/" target="_blank" className="button button-secondary">LinkedIn</a>
          </div>
          <div className="hero-trust">
            <span><i className="status-dot" /> Open to senior platform-focused roles</span>
            <span>Dallas / US</span>
          </div>
        </div>
        <PlatformVisual />
      </section>

      <section className="metrics section-width">
        {metrics.map(([value, label], i) => (
          <article className="metric premium-card" key={label}>
            <span className="metric-index">0{i + 1}</span>
            <strong>{value}</strong>
            <p>{label}</p>
            <div className="metric-line" />
          </article>
        ))}
      </section>

      <section className="statement section-width">
        <div className="statement-label"><span>01</span> / DIRECTION</div>
        <div className="statement-copy">
          <h2>From building pipelines to owning the systems that make pipelines possible.</h2>
          <p>My strongest work sits where distributed data systems meet infrastructure: orchestration, reliability, deployment, observability, cloud architecture, and the platform capabilities engineering teams build on.</p>
        </div>
      </section>

      <section id="work" className="work section-width">
        <div className="section-title-row">
          <div><span>02</span> / SELECTED WORK</div>
          <h2>Production systems with measurable outcomes.</h2>
          <p>Choose a project to inspect its architecture and impact.</p>
        </div>

        <div className="project-shell premium-card">
          <aside className="project-menu">
            {projects.map((p, i) => (
              <button key={p.id} className={active === i ? "active" : ""} onClick={() => setActive(i)}>
                <span>{p.id}</span>
                <div><strong>{p.title}</strong><small>{p.eyebrow}</small></div>
                <b>↗</b>
              </button>
            ))}
          </aside>

          <article className="project-detail">
            <div className="project-detail-head">
              <div><span className="status-dot" /> system://{project.id}</div>
              <span>production</span>
            </div>
            <div className="project-detail-copy">
              <small>{project.eyebrow}</small>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
            </div>
            <Architecture flow={project.flow} />
            <div className="project-detail-bottom">
              <div className="chips">{project.tech.map((t) => <span key={t}>{t}</span>)}</div>
              <div className="impact-block"><small>IMPACT</small><strong>{project.impact}</strong></div>
            </div>
          </article>
        </div>
      </section>

      <section id="stack" className="stack section-width">
        <div className="section-title-row compact">
          <div><span>03</span> / CAPABILITIES</div>
          <h2>A platform-minded data engineering toolkit.</h2>
        </div>
        <div className="stack-bento">
          <div className="stack-radar premium-card">
            <div className="radar-grid"><i /><i /><i /></div>
            <div className="radar-center"><strong>PLATFORM</strong><span>data + infra</span></div>
            <span className="radar-tag tag-1">Terraform</span><span className="radar-tag tag-2">Kafka</span><span className="radar-tag tag-3">K8s</span><span className="radar-tag tag-4">Spark</span><span className="radar-tag tag-5">Snowflake</span><span className="radar-tag tag-6">Airflow</span>
          </div>
          <div className="stack-list premium-card">
            {Object.entries(stack).map(([group, items], i) => (
              <div className="stack-row" key={group}>
                <span>0{i + 1}</span><strong>{group}</strong><p>{items.join(" · ")}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="experience section-width">
        <div className="section-title-row compact">
          <div><span>04</span> / EXPERIENCE</div>
          <h2>Built across fintech, product, gaming, and maritime systems.</h2>
        </div>
        <div className="experience-list premium-card">
          {experience.map(([company, role, period], i) => (
            <div className="experience-row" key={company}>
              <div className="experience-index">0{i + 1}</div>
              <div><h3>{company}</h3><p>{role}</p></div>
              <time>{period}</time>
              <span className="experience-arrow">↗</span>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact section-width premium-card">
        <div className="contact-glow" />
        <div className="contact-copy">
          <div className="statement-label"><span>05</span> / CONTACT</div>
          <h2>Let’s build infrastructure people can depend on.</h2>
          <p>Senior Data Engineering · Data Platform · Cloud / Platform Engineering</p>
        </div>
        <div className="contact-actions">
          <a href="mailto:praveent0117@gmail.com" className="button button-primary">Email me <Arrow /></a>
          <a href="https://www.linkedin.com/in/praveenthanniru/" target="_blank" className="button button-secondary">LinkedIn</a>
        </div>
      </section>

      <footer className="section-width"><span>© 2026 PRAVEEN KUMAR THANNIRU</span><span>DATA → CLOUD → PLATFORM</span></footer>
    </main>
  );
}
