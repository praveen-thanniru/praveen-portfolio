"use client";

import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

const stages = [
  {
    key: "ingest",
    label: "Ingest",
    eyebrow: "APIs · CDC · EVENTS",
    description: "Bring batch and streaming data into the platform with resilient ingestion and replayable patterns.",
    logos: [
      ["AWS", "https://cdn.simpleicons.org/amazonwebservices/FFFFFF"],
    ],
    stat: "110+ CDC tables",
  },
  {
    key: "orchestrate",
    label: "Orchestrate",
    eyebrow: "DEPENDENCIES · RETRIES · SLA",
    description: "Coordinate production workflows with dependency management, retries, alerts, and operational controls.",
    logos: [
      ["Apache Airflow", "https://cdn.simpleicons.org/apacheairflow/017CEE"],
    ],
    stat: "50+ DAGs",
  },
  {
    key: "process",
    label: "Process",
    eyebrow: "BATCH · STREAM · DISTRIBUTED",
    description: "Transform high-volume data with distributed compute, performance tuning, and production-grade processing patterns.",
    logos: [
      ["Apache Spark", "https://cdn.simpleicons.org/apachespark/E25A1C"],
      ["Databricks", "https://cdn.simpleicons.org/databricks/FF3621"],
    ],
    stat: "200M+ events/day",
  },
  {
    key: "store",
    label: "Store",
    eyebrow: "WAREHOUSE · OLAP · GOVERNANCE",
    description: "Serve trusted, governed data through cloud warehouses and analytical stores designed for performance and cost efficiency.",
    logos: [
      ["Snowflake", "https://cdn.simpleicons.org/snowflake/29B5E8"],
      ["ClickHouse", "https://cdn.simpleicons.org/clickhouse/FFCC01"],
    ],
    stat: "$420K/year saved",
  },
  {
    key: "serve",
    label: "Serve",
    eyebrow: "ANALYTICS · PRODUCTS · CONSUMERS",
    description: "Deliver reliable data products to analytics, reporting, and downstream engineering consumers with clear SLAs.",
    logos: [],
    stat: "99.9% availability",
  },
];

function PlatformArchitecture() {
  const [active, setActive] = useState(2);
  const stage = stages[active];

  return (
    <div className="hero-architecture">
      <div className="ha-header">
        <div>
          <span className="ha-kicker">PLATFORM ARCHITECTURE</span>
          <strong>How I think about production data systems</strong>
        </div>
        <span className="ha-live"><i /> INTERACTIVE</span>
      </div>

      <div className="ha-pipeline" aria-label="Interactive data platform pipeline">
        <div className="ha-track" />
        <div className="ha-pulse pulse-one" />
        <div className="ha-pulse pulse-two" />
        {stages.map((item, index) => (
          <button
            key={item.key}
            type="button"
            className={`ha-stage ${active === index ? "active" : ""}`}
            onClick={() => setActive(index)}
          >
            <span className="ha-stage-index">0{index + 1}</span>
            <span className="ha-stage-dot" />
            <strong>{item.label}</strong>
          </button>
        ))}
      </div>

      <div className="ha-detail">
        <div className="ha-detail-copy">
          <span>{stage.eyebrow}</span>
          <h3>{stage.label}</h3>
          <p>{stage.description}</p>
        </div>

        <div className="ha-detail-logos">
          {stage.logos.length > 0 ? (
            stage.logos.map(([name, src]) => (
              <div className="ha-logo-card" key={name} title={name}>
                <img src={src} alt={`${name} logo`} />
                <span>{name}</span>
              </div>
            ))
          ) : (
            <div className="ha-serve-card">
              <span>Trusted outputs</span>
              <strong>Analytics · BI · Data Products</strong>
            </div>
          )}
        </div>

        <div className="ha-stat">
          <span>PRODUCTION SIGNAL</span>
          <strong>{stage.stat}</strong>
        </div>
      </div>

      <div className="ha-footer">
        <div><span>Cloud</span><strong>AWS · Azure · GCP</strong></div>
        <div><span>Infrastructure</span><strong>Terraform · Kubernetes · Docker</strong></div>
        <div><span>Reliability</span><strong>Observability · CI/CD · Recovery</strong></div>
      </div>
    </div>
  );
}

export default function HeroVisualPortal() {
  const [target, setTarget] = useState<Element | null>(null);

  useEffect(() => {
    setTarget(document.querySelector(".topology"));
  }, []);

  return (
    <>
      <style jsx global>{`
        .topology > * { display: none !important; }
        .topology { height: auto !important; min-height: 470px !important; overflow: hidden !important; }
        .topology > .hero-architecture { display: flex !important; }

        .hero-architecture {
          min-height: 470px;
          height: 100%;
          width: 100%;
          flex-direction: column;
          padding: 22px;
          color: #f5f5f7;
          background:
            radial-gradient(circle at 78% 15%, rgba(114, 91, 255, .11), transparent 34%),
            linear-gradient(180deg, rgba(255,255,255,.018), rgba(255,255,255,.006));
        }
        .ha-header { display:flex; align-items:center; justify-content:space-between; gap:20px; padding-bottom:20px; border-bottom:1px solid rgba(255,255,255,.075); }
        .ha-header > div { display:flex; flex-direction:column; gap:5px; }
        .ha-kicker { font: 9px ui-monospace,SFMono-Regular,Menlo,monospace; letter-spacing:.18em; color:rgba(255,255,255,.35); }
        .ha-header strong { font-size:13px; font-weight:550; letter-spacing:-.01em; }
        .ha-live { display:flex; align-items:center; gap:7px; font:9px ui-monospace,SFMono-Regular,Menlo,monospace; letter-spacing:.13em; color:rgba(199,193,255,.8); }
        .ha-live i { width:6px; height:6px; border-radius:50%; background:#8b7cff; box-shadow:0 0 12px rgba(139,124,255,.8); }

        .ha-pipeline { position:relative; display:grid; grid-template-columns:repeat(5,1fr); gap:8px; padding:30px 4px 24px; }
        .ha-track { position:absolute; left:8%; right:8%; top:54px; height:1px; background:linear-gradient(90deg,rgba(255,255,255,.08),rgba(141,125,255,.52),rgba(255,255,255,.08)); }
        .ha-pulse { position:absolute; top:51px; width:7px; height:7px; border-radius:50%; background:#fff; box-shadow:0 0 14px rgba(141,125,255,.95); animation:haTravel 5.2s linear infinite; }
        .ha-pulse.pulse-two { animation-delay:-2.6s; background:#8bd3ff; box-shadow:0 0 14px rgba(139,211,255,.85); }
        @keyframes haTravel { from{ left:8%; } to{ left:91%; } }

        .ha-stage { position:relative; z-index:2; border:0; background:transparent; color:inherit; padding:0; cursor:pointer; display:flex; flex-direction:column; align-items:center; gap:8px; min-width:0; }
        .ha-stage-index { font:8px ui-monospace,SFMono-Regular,Menlo,monospace; color:rgba(255,255,255,.22); }
        .ha-stage-dot { width:14px; height:14px; border-radius:50%; border:4px solid #11111b; background:#5a5674; box-shadow:0 0 0 1px rgba(255,255,255,.12); transition:.22s ease; }
        .ha-stage strong { font-size:10px; font-weight:520; color:rgba(255,255,255,.4); transition:.22s ease; }
        .ha-stage:hover .ha-stage-dot,.ha-stage.active .ha-stage-dot { background:#9b8cff; box-shadow:0 0 0 1px rgba(155,140,255,.4),0 0 22px rgba(155,140,255,.55); transform:scale(1.12); }
        .ha-stage.active strong { color:#fff; }

        .ha-detail { display:grid; grid-template-columns:1.35fr .9fr .65fr; gap:16px; align-items:stretch; min-height:178px; padding:18px; border:1px solid rgba(255,255,255,.085); background:rgba(255,255,255,.025); border-radius:18px; box-shadow:inset 0 1px rgba(255,255,255,.025); }
        .ha-detail-copy { padding:4px 4px 4px 2px; }
        .ha-detail-copy > span { font:8px ui-monospace,SFMono-Regular,Menlo,monospace; letter-spacing:.15em; color:#9e93ff; }
        .ha-detail-copy h3 { margin:7px 0 8px; font-size:27px; line-height:1; letter-spacing:-.04em; font-weight:580; }
        .ha-detail-copy p { margin:0; max-width:360px; color:rgba(255,255,255,.48); font-size:11px; line-height:1.65; }

        .ha-detail-logos { display:flex; align-items:center; justify-content:center; gap:10px; min-width:0; }
        .ha-logo-card { width:92px; height:104px; border-radius:14px; border:1px solid rgba(255,255,255,.085); background:rgba(255,255,255,.025); display:flex; flex-direction:column; align-items:center; justify-content:center; gap:10px; transition:.22s ease; }
        .ha-logo-card:hover { transform:translateY(-4px); border-color:rgba(158,147,255,.3); background:rgba(158,147,255,.055); }
        .ha-logo-card img { width:35px; height:35px; object-fit:contain; }
        .ha-logo-card span { font-size:8px; color:rgba(255,255,255,.46); text-align:center; }
        .ha-serve-card { width:100%; min-height:104px; border-radius:14px; border:1px solid rgba(255,255,255,.085); background:rgba(255,255,255,.025); display:flex; flex-direction:column; align-items:center; justify-content:center; gap:7px; text-align:center; padding:12px; }
        .ha-serve-card span { font-size:9px; color:rgba(255,255,255,.36); }
        .ha-serve-card strong { font-size:11px; font-weight:520; }

        .ha-stat { border-left:1px solid rgba(255,255,255,.075); padding-left:16px; display:flex; flex-direction:column; justify-content:center; }
        .ha-stat span { font:8px ui-monospace,SFMono-Regular,Menlo,monospace; letter-spacing:.13em; color:rgba(255,255,255,.28); }
        .ha-stat strong { margin-top:10px; font-size:17px; line-height:1.25; letter-spacing:-.03em; color:#d9d5ff; }

        .ha-footer { display:grid; grid-template-columns:repeat(3,1fr); gap:10px; margin-top:auto; padding-top:16px; }
        .ha-footer > div { padding:11px 12px; border-radius:11px; background:rgba(255,255,255,.018); border:1px solid rgba(255,255,255,.055); }
        .ha-footer span { display:block; font:7px ui-monospace,SFMono-Regular,Menlo,monospace; letter-spacing:.12em; text-transform:uppercase; color:rgba(255,255,255,.23); }
        .ha-footer strong { display:block; margin-top:4px; font-size:8px; font-weight:500; color:rgba(255,255,255,.48); }

        @media (max-width: 1020px) {
          .ha-detail { grid-template-columns:1fr 1fr; }
          .ha-stat { grid-column:1 / -1; border-left:0; border-top:1px solid rgba(255,255,255,.075); padding:12px 0 0; flex-direction:row; justify-content:space-between; align-items:center; }
          .ha-stat strong { margin:0; }
        }
        @media (max-width: 720px) {
          .hero-architecture { padding:16px; min-height:430px; }
          .ha-header strong { font-size:11px; }
          .ha-pipeline { gap:2px; }
          .ha-stage strong { font-size:8px; }
          .ha-detail { grid-template-columns:1fr; min-height:0; }
          .ha-detail-logos { justify-content:flex-start; }
          .ha-stat { grid-column:auto; }
          .ha-footer { grid-template-columns:1fr; }
        }
      `}</style>
      {target ? createPortal(<PlatformArchitecture />, target) : null}
    </>
  );
}
