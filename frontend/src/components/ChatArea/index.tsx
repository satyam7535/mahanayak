"use client";

import Link from "next/link";
import { Chat } from "@/components/Chat";
import { useState, useEffect } from "react";
import { FiSend, FiArrowLeft, FiZap } from "react-icons/fi";
import { useCopilotChat } from "@copilotkit/react-core";
import { Role, TextMessage } from "@copilotkit/runtime-client-gql";

type Message = {
  message: string;
  role: string;
};

const suggestions = [
  "Plan a tree plantation drive in Bangalore for 200 volunteers",
  "Organize a beach cleanup campaign in Mumbai next month",
  "Create social media content for an environmental awareness week",
];

export const ChatArea = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");

  const { visibleMessages, appendMessage, isLoading } = useCopilotChat();

  useEffect(() => {
    const formattedMessages: Message[] = (visibleMessages ?? []).map((msg) => ({
      message: msg.content,
      role: msg.role,
    }));
    setMessages(formattedMessages);
  }, [visibleMessages]);

  const sendMessage = async (text?: string) => {
    const trimmed = (text || input).trim();
    if (trimmed === "" || isLoading) return;

    await appendMessage(
      new TextMessage({
        content: trimmed,
        role: Role.User,
      })
    );

    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const isEmpty = messages.length === 0;

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "var(--bg-primary)",
        position: "relative",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "var(--gradient-bg-radial)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* ── Top Bar ──────────────────────────────────────── */}
      <div
        className="glass"
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 24px",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            textDecoration: "none",
            color: "var(--text-secondary)",
            fontSize: 14,
            fontWeight: 500,
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
        >
          <FiArrowLeft size={16} />
          Back to Home
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 22 }}>🌍</span>
          <span
            className="gradient-text"
            style={{ fontSize: 18, fontWeight: 800, letterSpacing: "-0.3px" }}
          >
            Mahanayak
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "4px 12px",
            borderRadius: "var(--radius-full)",
            background: "rgba(16,185,129,0.1)",
            border: "1px solid rgba(16,185,129,0.2)",
            fontSize: 12,
            fontWeight: 600,
            color: "var(--accent-emerald-light)",
          }}
        >
          <FiZap size={12} />
          AI Active
        </div>
      </div>

      {/* ── Chat Body ────────────────────────────────────── */}
      <div
        style={{
          flex: 1,
          position: "relative",
          zIndex: 1,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {isEmpty ? (
          /* ── Empty State ──────────────────────────────── */
          <div
            className="animate-fade-in"
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: 24,
              gap: 20,
            }}
          >
            <div
              className="animate-float"
              style={{
                fontSize: 56,
                marginBottom: 8,
              }}
            >
              🌍
            </div>
            <h2
              style={{
                fontSize: "1.6rem",
                fontWeight: 800,
                letterSpacing: "-0.5px",
              }}
            >
              How can I help your{" "}
              <span className="gradient-text">environmental drive</span>?
            </h2>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "0.95rem",
                maxWidth: 460,
                textAlign: "center",
                lineHeight: 1.6,
              }}
            >
              Describe your event and our AI agents will handle content,
              logistics, permissions, and more.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
                marginTop: 12,
                width: "100%",
                maxWidth: 520,
              }}
            >
              {suggestions.map((s, i) => (
                <button
                  key={i}
                  onClick={() => sendMessage(s)}
                  className="glass-card"
                  style={{
                    padding: "14px 20px",
                    textAlign: "left",
                    color: "var(--text-secondary)",
                    fontSize: "0.9rem",
                    cursor: "pointer",
                    border: "1px solid var(--border-glass)",
                    background: "var(--bg-glass)",
                    fontFamily: "inherit",
                    lineHeight: 1.5,
                    borderRadius: "var(--radius-md)",
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* ── Message List ──────────────────────────────── */
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "0 16px",
            }}
            className="sleek-scrollbar"
          >
            <div style={{ maxWidth: 800, margin: "0 auto" }}>
              <Chat messages={messages} isLoading={isLoading} />
            </div>
          </div>
        )}

        {/* ── Input Bar ──────────────────────────────────── */}
        <div
          style={{
            padding: "16px 24px 24px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            className="glass"
            style={{
              display: "flex",
              alignItems: "flex-end",
              gap: 12,
              width: "100%",
              maxWidth: 800,
              padding: "12px 16px",
              borderRadius: "var(--radius-xl)",
              border: "1px solid var(--border-glass)",
            }}
          >
            <textarea
              className="sleek-scrollbar"
              style={{
                flex: 1,
                resize: "none",
                background: "transparent",
                border: "none",
                outline: "none",
                color: "var(--text-primary)",
                fontSize: "0.95rem",
                fontFamily: "inherit",
                lineHeight: 1.5,
                minHeight: 24,
                maxHeight: 150,
              }}
              rows={1}
              placeholder="Describe your environmental event..."
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                e.target.style.height = "auto";
                e.target.style.height = Math.min(e.target.scrollHeight, 150) + "px";
              }}
              onKeyDown={handleKeyDown}
              disabled={isLoading}
            />
            <button
              onClick={() => sendMessage()}
              disabled={isLoading || input.trim() === ""}
              style={{
                width: 40,
                height: 40,
                borderRadius: "var(--radius-md)",
                background:
                  isLoading || input.trim() === ""
                    ? "rgba(255,255,255,0.06)"
                    : "var(--gradient-button)",
                border: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor:
                  isLoading || input.trim() === "" ? "not-allowed" : "pointer",
                color:
                  isLoading || input.trim() === ""
                    ? "var(--text-muted)"
                    : "#fff",
                transition: "all 0.3s ease",
                flexShrink: 0,
              }}
              aria-label="Send"
            >
              <FiSend size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};