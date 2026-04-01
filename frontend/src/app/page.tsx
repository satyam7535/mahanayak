"use client";

import Link from "next/link";
import {
  FiArrowRight,
  FiEdit3,
  FiUsers,
  FiBarChart2,
  FiCalendar,
  FiDollarSign,
  FiShield,
  FiZap,
  FiCheckCircle,
  FiCpu,
} from "react-icons/fi";

const features = [
  {
    icon: <FiEdit3 size={28} />,
    title: "Content Creation",
    description:
      "AI crafts compelling social media posts for LinkedIn & Twitter to amplify your environmental campaign.",
    color: "#10b981",
  },
  {
    icon: <FiUsers size={28} />,
    title: "Volunteer Management",
    description:
      "Auto-generate PDF handbooks, safety guidelines, and training materials for your volunteer team.",
    color: "#14b8a6",
  },
  {
    icon: <FiBarChart2 size={28} />,
    title: "Feedback & Analytics",
    description:
      "Create Google Forms, collect responses, and generate impact reports — all automated by AI.",
    color: "#3b82f6",
  },
  {
    icon: <FiCalendar size={28} />,
    title: "Smart Reminders",
    description:
      "Google Calendar integration ensures every volunteer and stakeholder stays on schedule.",
    color: "#8b5cf6",
  },
  {
    icon: <FiDollarSign size={28} />,
    title: "Resource Optimization",
    description:
      "Real-time web search for vendors, price comparison, and budget optimization powered by AI.",
    color: "#f59e0b",
  },
  {
    icon: <FiShield size={28} />,
    title: "Permission Handling",
    description:
      "Draft and send government permission emails, compliance docs, and authority communications.",
    color: "#ef4444",
  },
];

const steps = [
  {
    number: "01",
    icon: <FiEdit3 size={32} />,
    title: "Describe Your Event",
    description:
      "Tell our AI about your environmental drive — location, scale, date, and goals.",
  },
  {
    number: "02",
    icon: <FiCpu size={32} />,
    title: "AI Agents Plan Everything",
    description:
      "Six specialized agents orchestrate content, logistics, permissions, and schedules.",
  },
  {
    number: "03",
    icon: <FiCheckCircle size={32} />,
    title: "Execute & Measure Impact",
    description:
      "Launch your campaign with auto-generated assets, then track results with analytics.",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-primary)" }}>
      {/* ── Background Ambient Glow ────────────────────────── */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "var(--gradient-bg-radial)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* ── Navbar ─────────────────────────────────────────── */}
      <nav
        className="glass animate-slide-down"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          padding: "16px 0",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link href="/" style={{ textDecoration: "none" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 28 }}>🌍</span>
              <span
                className="gradient-text"
                style={{ fontSize: 22, fontWeight: 800, letterSpacing: "-0.5px" }}
              >
                Mahanayak
              </span>
            </div>
          </Link>

          <Link href="/chat" style={{ textDecoration: "none" }}>
            <button
              className="glow-button"
              style={{ padding: "10px 28px", fontSize: "0.9rem" }}
            >
              Open Chat
              <FiArrowRight
                style={{ display: "inline", marginLeft: 6, verticalAlign: "middle" }}
                size={16}
              />
            </button>
          </Link>
        </div>
      </nav>

      {/* ── Hero Section ───────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1200,
          margin: "0 auto",
          padding: "100px 24px 80px",
          textAlign: "center",
        }}
      >
        <div className="animate-slide-up" style={{ opacity: 0, animationFillMode: "forwards" }}>
          <div
            style={{
              display: "inline-block",
              padding: "6px 18px",
              borderRadius: "var(--radius-full)",
              background: "rgba(16, 185, 129, 0.1)",
              border: "1px solid rgba(16, 185, 129, 0.25)",
              fontSize: 13,
              fontWeight: 600,
              color: "var(--accent-emerald-light)",
              marginBottom: 28,
              letterSpacing: "0.5px",
            }}
          >
            <FiZap
              size={14}
              style={{ display: "inline", marginRight: 6, verticalAlign: "middle" }}
            />
            Powered by 6 Autonomous AI Agents
          </div>

          <h1
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "-1.5px",
              marginBottom: 24,
            }}
          >
            Plan Environmental Events
            <br />
            <span className="gradient-text">with AI Intelligence</span>
          </h1>

          <p
            style={{
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              color: "var(--text-secondary)",
              maxWidth: 640,
              margin: "0 auto 40px",
              lineHeight: 1.7,
            }}
          >
            From tree plantations to beach cleanups — Mahanayak&apos;s agentic AI
            orchestrates content, volunteers, permits, budgets, and schedules so
            you can focus on making an impact.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
            <Link href="/chat" style={{ textDecoration: "none" }}>
              <button className="glow-button" style={{ fontSize: "1.05rem", padding: "16px 40px" }}>
                Start Planning
                <FiArrowRight
                  size={18}
                  style={{ display: "inline", marginLeft: 8, verticalAlign: "middle" }}
                />
              </button>
            </Link>
            <a href="#features" style={{ textDecoration: "none" }}>
              <button
                style={{
                  padding: "16px 40px",
                  fontSize: "1.05rem",
                  fontWeight: 600,
                  color: "var(--text-secondary)",
                  background: "transparent",
                  border: "1px solid var(--border-glass)",
                  borderRadius: "var(--radius-full)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(16,185,129,0.4)";
                  e.currentTarget.style.color = "var(--text-primary)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-glass)";
                  e.currentTarget.style.color = "var(--text-secondary)";
                }}
              >
                Learn More
              </button>
            </a>
          </div>
        </div>

        {/* Agent orbit decorative */}
        <div
          className="animate-float"
          style={{
            marginTop: 64,
            display: "flex",
            justifyContent: "center",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          {["📝", "📋", "📊", "⏰", "💰", "🏛️"].map((emoji, i) => (
            <div
              key={i}
              className="glass-card"
              style={{
                width: 56,
                height: 56,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 24,
                animationDelay: `${i * 0.5}s`,
              }}
            >
              {emoji}
            </div>
          ))}
        </div>
      </section>

      {/* ── Features Section ───────────────────────────────── */}
      <section
        id="features"
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1200,
          margin: "0 auto",
          padding: "40px 24px 100px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: 800,
              letterSpacing: "-1px",
              marginBottom: 16,
            }}
          >
            Meet Your AI <span className="gradient-text">Agent Squad</span>
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "1.1rem",
              maxWidth: 560,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Six specialized agents working in perfect harmony through LangGraph
            orchestration.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: 24,
          }}
        >
          {features.map((feature, i) => (
            <div
              key={i}
              className="glass-card"
              style={{
                padding: 32,
                opacity: 0,
                animation: `slideUp 0.6s ease-out forwards`,
                animationDelay: `${i * 100}ms`,
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: "var(--radius-md)",
                  background: `${feature.color}15`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: feature.color,
                  marginBottom: 20,
                }}
              >
                {feature.icon}
              </div>
              <h3
                style={{
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  marginBottom: 10,
                  color: "var(--text-primary)",
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.65,
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── How It Works ───────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1200,
          margin: "0 auto",
          padding: "40px 24px 100px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: 800,
              letterSpacing: "-1px",
              marginBottom: 16,
            }}
          >
            How It <span className="gradient-text">Works</span>
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "1.1rem",
              maxWidth: 500,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Three simple steps from idea to impact.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 32,
          }}
        >
          {steps.map((step, i) => (
            <div
              key={i}
              className="glass-card"
              style={{
                padding: 36,
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
                opacity: 0,
                animation: `slideUp 0.6s ease-out forwards`,
                animationDelay: `${i * 150}ms`,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 16,
                  right: 20,
                  fontSize: 64,
                  fontWeight: 900,
                  color: "rgba(255,255,255,0.03)",
                  lineHeight: 1,
                }}
              >
                {step.number}
              </div>
              <div
                className="gradient-text"
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "var(--radius-lg)",
                  background: "rgba(16,185,129,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px",
                  color: "var(--accent-emerald)",
                }}
              >
                {step.icon}
              </div>
              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  marginBottom: 12,
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.95rem",
                  lineHeight: 1.65,
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Section ────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 800,
          margin: "0 auto",
          padding: "40px 24px 100px",
          textAlign: "center",
        }}
      >
        <div
          className="glass-card animate-pulse-glow"
          style={{ padding: "60px 40px", borderRadius: "var(--radius-xl)" }}
        >
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)",
              fontWeight: 800,
              marginBottom: 16,
              letterSpacing: "-0.5px",
            }}
          >
            Ready to make an <span className="gradient-text">impact</span>?
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "1.05rem",
              marginBottom: 32,
              lineHeight: 1.7,
            }}
          >
            Start a conversation with our AI agents and plan your next
            environmental drive in minutes.
          </p>
          <Link href="/chat" style={{ textDecoration: "none" }}>
            <button
              className="glow-button"
              style={{ fontSize: "1.1rem", padding: "18px 48px" }}
            >
              Start Planning Now
              <FiArrowRight
                size={20}
                style={{ display: "inline", marginLeft: 10, verticalAlign: "middle" }}
              />
            </button>
          </Link>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer
        style={{
          position: "relative",
          zIndex: 1,
          borderTop: "1px solid var(--border-subtle)",
          padding: "40px 24px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            marginBottom: 12,
          }}
        >
          <span style={{ fontSize: 22 }}>🌍</span>
          <span
            className="gradient-text"
            style={{ fontSize: 18, fontWeight: 800 }}
          >
            Mahanayak
          </span>
        </div>
        <p style={{ color: "var(--text-muted)", fontSize: 14, lineHeight: 1.6 }}>
          Made with 💚 for our planet &middot; AI-Powered Environmental Event
          Management
        </p>
        <p style={{ color: "var(--text-muted)", fontSize: 13, marginTop: 8 }}>
          &copy; {new Date().getFullYear()} Mahanayak. All rights reserved.
        </p>
      </footer>
    </div>
  );
}