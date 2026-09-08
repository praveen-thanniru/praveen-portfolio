const impact = [
  { value: "200M+", label: "events processed / day" },
  { value: "$420K", label: "annual platform savings" },
  { value: "24×", label: "Spark runtime improvement" },
  { value: "110+", label: "tables moved to CDC" },
];

const projects = [
  {
    number: "01",
    title: "Data Platform Re-architecture",
    subtitle: "Databricks → ClickHouse",
    description:
      "Re-architected storage, transformation, orchestration, and compute for a high-growth product data platform. The redesign cut monthly cloud spend from $75K to $40K while preserving production reliability.",
    tech: ["ClickHouse", "dbt", "Airflow", "AWS", "Terraform"],
    metric: "$420K/year saved",
    architecture: ["Sources", "Airflow", "dbt", "ClickHouse", "Analytics"],
  },
  {
    number: "02",
    title: "Real-Time Streaming Platform",
    subtitle: "200M+ events every day",
    description:
      "Built and operated event pipelines for blockchain and player telemetry with distributed stream processing, containerized deployments, health checks, and autoscaling.",
    tech: ["Kafka", "Flink", "Kubernetes", "Docker", "Datadog"],
    metric: "200M+ events/day",
    architecture: ["Producers", "Kafka", "Flink", "Storage", "Consumers"],
  },
  {
    number: "03",
    title: "Enterprise CDC Modernization",
    subtitle: "Daily batch → near-real-time",
    description:
      "Designed CDC and incremental ingestion for maritime operational data, replacing daily full refreshes with change capture across more than 110 source tables.",
    tech: ["Azure SQL MI", "AWS DMS", "S3", "Snowpipe", "Snowflake", "dbt"],
    metric: "24h → <15 min latency",
    architecture: ["Azure SQL MI", "DMS", "S3", "Snowpipe", "Snowflake", "dbt"],
  },
  {
    number: "04",
    title: "Spark Performance Engineering",
    subtitle: "2TB+ daily workload",
    description:
      "Tuned distributed Spark workloads by reducing memory pressure, compute usage, and execution time through partitioning, SQL refactoring, and resource right-sizing.",
    tech: ["PySpark", "EMR", "Python", "SQL", "AWS"],
    metric: "6 hours → 15 minutes",
    architecture: ["Raw Data", "Spark", "Partitioned Compute", "Curated Data"],
  },
];

const skillGroups = [
  {
    title: "Data Engineering",
    items: ["Python", "SQL", "PySpark", "Kafka", "Flink", "Airflow", "dbt"],
  },
  {
    title: "Cloud & Platform",
    items: ["AWS", "Azure", "GCP", "Terraform", "Kubernetes", "Docker", "Helm"],
  },
  {
    title: "Data Platforms",
    items: ["Snowflake", "Databricks", "ClickHouse", "Redshift", "BigQuery"],
  },
  {
    title: "Reliability & Delivery",
    items: ["GitHub Actions", "GitLab CI/CD", "Jenkins", "Datadog", "Grafana", "Prometheus", "CloudWatch"],
  },
];

const experience = [
  {
    company: "Carnival Cruise Line",
    role: "Senior Data Engineer",
    period: "2026 — Present",
    summary: "CDC modernization, Snowflake transformation layers, and production data migration.",
  },
  {
    company: "Visa",
    role: "Senior Data Engineer",
    period: "2026",
    summary: "Petabyte-scale Spark optimization and governed financial-data pipelines.",
  },
  {
    company: "Gala Games",
    role: "Data Engineer",
    period: "2024 — 2026",
    summary: "Streaming data platform, cloud infrastructure, observability, and platform re-architecture.",
  },
  {
    company: "Nike",
    role: "Data Engineer",
    period: "2017 — 2022",
    summary: "Distributed Spark workloads, AWS ETL, data integration, and performance engineering.",
  },
];

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="currentColor">
      <path d="M12 .7A11.5 11.5 0 0 0 8.4 23c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.4-1.3-5.4-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0C17 4.7 18 5 18 5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.4 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11.5 11.5 0 0 0 12 .7Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="currentColor">
      <path d="M5.4 7.4H1.8V22h3.6V7.4ZM3.6 2A2.1 2.1 0 1 0 3.6 6.2 2.1 2.1 0 0 0 3.6 2ZM22 13.7c0-4.4-2.3-6.5-5.4-6.5-2.5 0-3.6 1.4-4.2 2.3V7.4H8.8V22h3.6v-7.2c0-1.9.4-3.8 2.8-3.8 2.4 0 2.4 2.2 2.4 3.9V22H22v-8.3Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#07100d] text-[#eff7f2] selection:bg-emerald-300 selection:text-black">
      <div className="fixed inset-0 -z-0 opacity-70" aria-hidden="true">
        <div className="absolute left-[-14rem] top-[-10rem] h-[34rem] w-[34rem] rounded-full bg-emerald-400/10 blur-[120px]" />
        <div className="absolute right-[-12rem] top-[24rem] h-[30rem] w-[30rem] rounded-full bg-cyan-400/10 blur-[130px]" />
        <div className="grid-mask absolute inset-0" />
      </div>

      <div className="relative z-10">
        <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
          <a href="#top" className="font-mono text-sm tracking-[0.18em] text-emerald-200">
            PKT<span className="text-white/40">/</span>PLATFORM
          </a>
          <nav className="hidden items-center gap-7 text-sm text-white/65 md:flex">
            <a className="nav-link" href="#work">Work</a>
            <a className="nav-link" href="#skills">Skills</a>
            <a className="nav-link" href="#experience">Experience</a>
            <a className="nav-link" href="#contact">Contact</a>
          </nav>
          <a
            href="/praveen-thanniru-resume.pdf"
            target="_blank"
            className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-sm text-white/85 transition hover:border-emerald-300/50 hover:bg-emerald-300/10"
          >
            Resume
          </a>
        </header>

        <section id="top" className="mx-auto max-w-7xl px-6 pb-16 pt-20 lg:px-10 lg:pb-24 lg:pt-28">
          <div className="max-w-5xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/[0.06] px-3 py-1.5 font-mono text-xs uppercase tracking-[0.18em] text-emerald-200">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.9)]" />
              Data Engineering → Cloud & Platform Engineering
            </div>

            <h1 className="max-w-5xl text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-[6.6rem]">
              I build the systems
              <span className="block bg-gradient-to-r from-emerald-200 via-white to-cyan-200 bg-clip-text text-transparent">
                data teams run on.
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/62 sm:text-xl">
              I&apos;m <span className="font-medium text-white">Praveen Kumar Thanniru</span>, a data engineer moving deeper into cloud and platform engineering — building distributed pipelines, production infrastructure, and reliable data platforms at scale.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#work" className="primary-button">
                View selected work <ArrowUpRight />
              </a>
              <a href="https://github.com/praveen-thanniru" target="_blank" rel="noreferrer" className="secondary-button">
                <GithubIcon /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/praveenthanniru/" target="_blank" rel="noreferrer" className="secondary-button">
                <LinkedInIcon /> LinkedIn
              </a>
            </div>
          </div>

          <div className="mt-16 grid overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] sm:grid-cols-2 lg:grid-cols-4">
            {impact.map((item, index) => (
              <div key={item.label} className={`p-6 lg:p-7 ${index !== 0 ? "border-t border-white/10 sm:border-l sm:border-t-0" : ""} ${index === 2 ? "sm:border-l-0 lg:border-l" : ""}`}>
                <div className="text-3xl font-semibold tracking-[-0.04em] text-white">{item.value}</div>
                <div className="mt-2 font-mono text-xs uppercase tracking-[0.14em] text-white/45">{item.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-black/10">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:px-10 lg:py-28">
            <div>
              <div className="section-kicker">01 / Direction</div>
              <h2 className="section-title mt-4">From pipelines to platforms.</h2>
            </div>
            <div className="max-w-3xl text-lg leading-8 text-white/60">
              <p>
                My career started in large-scale data engineering: batch processing, Spark optimization, ETL, warehouses, and streaming. Over time, the work I enjoyed most moved closer to the platform itself — infrastructure, orchestration, reliability, deployment, observability, and the systems that make engineering teams faster.
              </p>
              <p className="mt-6">
                I&apos;m now focused on the intersection of <span className="text-white">distributed data systems and cloud infrastructure</span>: Terraform, Kubernetes, CI/CD, observability, resilient architectures, and scalable data platforms.
              </p>

              <div className="mt-10 grid gap-3 sm:grid-cols-4">
                {["Data Engineering", "Distributed Systems", "Cloud Infrastructure", "Platform Engineering"].map((step, i) => (
                  <div key={step} className="relative rounded-xl border border-white/10 bg-white/[0.025] p-4">
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-200/70">0{i + 1}</div>
                    <div className="mt-5 text-sm font-medium text-white/85">{step}</div>
                    {i < 3 && <span className="absolute -right-2 top-1/2 hidden -translate-y-1/2 text-white/25 sm:block">→</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <div className="section-kicker">02 / Selected work</div>
              <h2 className="section-title mt-4">Engineering with measurable impact.</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-white/45">
              A few systems that shaped how I think about scale, reliability, cost, and platform ownership.
            </p>
          </div>

          <div className="space-y-5">
            {projects.map((project) => (
              <article key={project.number} className="project-card group">
                <div className="grid gap-8 lg:grid-cols-[0.28fr_1fr_0.9fr] lg:items-start">
                  <div className="font-mono text-sm text-emerald-200/70">{project.number}</div>
                  <div>
                    <div className="font-mono text-xs uppercase tracking-[0.16em] text-white/35">{project.subtitle}</div>
                    <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">{project.title}</h3>
                    <p className="mt-5 max-w-2xl leading-7 text-white/55">{project.description}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tech.map((item) => <span key={item} className="tech-chip">{item}</span>)}
                    </div>
                  </div>
                  <div>
                    <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">Architecture snapshot</div>
                      <div className="mt-5 flex flex-wrap items-center gap-2">
                        {project.architecture.map((item, i) => (
                          <div key={item} className="contents">
                            <span className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-xs text-white/70">{item}</span>
                            {i < project.architecture.length - 1 && <span className="text-xs text-emerald-200/35">→</span>}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mt-4 flex items-baseline justify-between border-t border-white/10 pt-4">
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">Impact</span>
                      <span className="text-lg font-medium text-emerald-100">{project.metric}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="border-y border-white/10 bg-white/[0.015]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <div className="section-kicker">03 / Stack</div>
            <h2 className="section-title mt-4">The toolkit behind the work.</h2>
            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {skillGroups.map((group) => (
                <div key={group.title} className="rounded-2xl border border-white/10 bg-black/10 p-6 sm:p-7">
                  <h3 className="text-lg font-medium">{group.title}</h3>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {group.items.map((item) => <span key={item} className="tech-chip">{item}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <div className="section-kicker">04 / Experience</div>
              <h2 className="section-title mt-4">Built across scale and industries.</h2>
              <p className="mt-6 max-w-md leading-7 text-white/50">
                Fintech, consumer products, gaming, and maritime systems — with a common thread: production data at scale.
              </p>
            </div>
            <div className="divide-y divide-white/10 border-y border-white/10">
              {experience.map((item) => (
                <div key={item.company} className="grid gap-3 py-7 sm:grid-cols-[1fr_0.55fr] sm:items-start">
                  <div>
                    <h3 className="text-xl font-medium tracking-[-0.02em]">{item.company}</h3>
                    <div className="mt-1 text-sm text-emerald-100/75">{item.role}</div>
                    <p className="mt-4 max-w-xl text-sm leading-6 text-white/45">{item.summary}</p>
                  </div>
                  <div className="font-mono text-xs uppercase tracking-[0.16em] text-white/35 sm:text-right">{item.period}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10 lg:pb-28">
          <div className="overflow-hidden rounded-3xl border border-emerald-200/15 bg-gradient-to-br from-emerald-300/[0.08] via-white/[0.025] to-cyan-300/[0.06] p-7 sm:p-10 lg:p-12 shadow-glow">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
              <div>
                <div className="section-kicker">Currently building</div>
                <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">A deeper platform-engineering toolkit.</h2>
                <p className="mt-5 max-w-2xl leading-7 text-white/55">
                  I&apos;m intentionally deepening the infrastructure side of my background through hands-on work with Terraform, Kubernetes, CI/CD, observability, and production-style platform patterns.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
                {["Terraform", "Kubernetes", "CI/CD", "Observability"].map((item) => (
                  <div key={item} className="rounded-xl border border-white/10 bg-black/15 p-5 text-center font-mono text-xs uppercase tracking-[0.13em] text-white/70">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-white/10 bg-black/15">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <div className="max-w-4xl">
              <div className="section-kicker">05 / Contact</div>
              <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.045em] sm:text-6xl">
                Building a data platform, cloud platform, or distributed system?
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/55">
                I&apos;m interested in Senior Data Engineering, Data Platform, and Cloud / Platform Engineering opportunities where I can own meaningful systems end to end.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="mailto:praveent0117@gmail.com" className="primary-button">
                  <MailIcon /> Email me
                </a>
                <a href="https://www.linkedin.com/in/praveenthanniru/" target="_blank" rel="noreferrer" className="secondary-button">
                  <LinkedInIcon /> LinkedIn
                </a>
                <a href="https://github.com/praveen-thanniru" target="_blank" rel="noreferrer" className="secondary-button">
                  <GithubIcon /> GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10 bg-black/15">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-6 py-7 font-mono text-[11px] uppercase tracking-[0.12em] text-white/30 sm:flex-row lg:px-10">
            <span>© 2026 Praveen Kumar Thanniru</span>
            <span>Data → Cloud → Platform</span>
          </div>
        </footer>
      </div>
    </main>
  );
}
