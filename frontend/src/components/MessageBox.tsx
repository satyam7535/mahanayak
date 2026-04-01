"use client";

import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const MessageBox = ({
  content,
  setLoadingMessage,
  setShowLoading,
}: {
  content: { message: string; role: string };
  setLoadingMessage: React.Dispatch<React.SetStateAction<string>>;
  setShowLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [msg, setMsg] = useState<string>("");

  useEffect(() => {
    if (typeof content?.message === "string") {
      const rawMatches = content.message.match(/{[^]*?}/g) || [];
      setMsg("");

      rawMatches.forEach((str) => {
        try {
          const parsed = JSON.parse(str);
          if (parsed.type) {
            if (parsed.type === "bot") {
              setShowLoading(true);
              setLoadingMessage(parsed.content);
            } else if (parsed.type === "info_gather") {
              setShowLoading(false);
              setMsg(parsed.content);
            } else {
              setShowLoading(false);
              setMsg((prev) => prev + parsed.content);
            }
          }
        } catch {
          // Ignore invalid JSON chunks
        }
      });
    }
  }, [content, setLoadingMessage, setShowLoading]);

  const markdownComponents = {
    p: ({ children }: any) => (
      <p style={{ marginBottom: 12, lineHeight: 1.7 }}>{children}</p>
    ),
    ul: ({ children }: any) => (
      <ul
        style={{
          marginBottom: 12,
          paddingLeft: 20,
          listStyleType: "disc",
          display: "flex",
          flexDirection: "column" as const,
          gap: 4,
        }}
      >
        {children}
      </ul>
    ),
    ol: ({ children }: any) => (
      <ol
        style={{
          marginBottom: 12,
          paddingLeft: 20,
          listStyleType: "decimal",
          display: "flex",
          flexDirection: "column" as const,
          gap: 4,
        }}
      >
        {children}
      </ol>
    ),
    li: ({ children }: any) => (
      <li style={{ lineHeight: 1.65 }}>{children}</li>
    ),
    h1: ({ children }: any) => (
      <h1 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: 12 }}>
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: 10 }}>
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: 8 }}>
        {children}
      </h3>
    ),
    code: ({ inline, children }: any) =>
      inline ? (
        <code
          style={{
            background: "rgba(255,255,255,0.08)",
            padding: "2px 6px",
            borderRadius: 4,
            fontSize: "0.87em",
            fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
          }}
        >
          {children}
        </code>
      ) : (
        <pre
          style={{
            background: "rgba(0,0,0,0.3)",
            padding: 16,
            borderRadius: "var(--radius-md)",
            overflowX: "auto",
            marginBottom: 12,
            border: "1px solid var(--border-subtle)",
          }}
        >
          <code
            style={{
              fontSize: "0.87em",
              fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
              lineHeight: 1.6,
            }}
          >
            {children}
          </code>
        </pre>
      ),
    blockquote: ({ children }: any) => (
      <blockquote
        style={{
          borderLeft: "3px solid var(--accent-emerald)",
          paddingLeft: 16,
          color: "var(--text-secondary)",
          fontStyle: "italic",
          marginBottom: 12,
        }}
      >
        {children}
      </blockquote>
    ),
    a: ({ children, href }: any) => (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "var(--accent-emerald-light)",
          textDecoration: "underline",
          textUnderlineOffset: 3,
        }}
      >
        {children}
      </a>
    ),
    table: ({ children }: any) => (
      <div style={{ overflowX: "auto", marginBottom: 12 }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: "0.9rem",
          }}
        >
          {children}
        </table>
      </div>
    ),
    th: ({ children }: any) => (
      <th
        style={{
          textAlign: "left",
          padding: "8px 12px",
          borderBottom: "1px solid var(--border-glass)",
          fontWeight: 600,
          fontSize: "0.85rem",
          color: "var(--text-secondary)",
        }}
      >
        {children}
      </th>
    ),
    td: ({ children }: any) => (
      <td
        style={{
          padding: "8px 12px",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        {children}
      </td>
    ),
  };

  if (content?.role === "user") {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: 24,
          padding: "0 4px",
        }}
      >
        <div
          style={{
            maxWidth: "75%",
            background: "var(--gradient-button)",
            borderRadius: "var(--radius-lg) var(--radius-lg) 4px var(--radius-lg)",
            padding: "14px 20px",
            fontSize: "0.95rem",
            lineHeight: 1.6,
            color: "#fff",
            boxShadow: "0 4px 16px rgba(16,185,129,0.15)",
          }}
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={markdownComponents}
          >
            {content.message}
          </ReactMarkdown>
        </div>
      </div>
    );
  }

  // Assistant or other messages
  const displayContent = msg || "";
  return (
    <div
      className="animate-fade-in"
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: 12,
        marginBottom: 24,
        padding: "0 4px",
      }}
    >
      <div
        style={{
          width: 36,
          height: 36,
          borderRadius: "var(--radius-md)",
          background: "rgba(16,185,129,0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 18,
          flexShrink: 0,
        }}
      >
        🤖
      </div>
      <div
        className="glass"
        style={{
          maxWidth: "80%",
          borderRadius: "4px var(--radius-lg) var(--radius-lg) var(--radius-lg)",
          padding: "14px 20px",
          fontSize: "0.95rem",
          color: "var(--text-primary)",
        }}
      >
        {displayContent ? (
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={markdownComponents}
          >
            {displayContent}
          </ReactMarkdown>
        ) : (
          <span style={{ color: "var(--text-muted)", fontStyle: "italic" }}>
            Processing...
          </span>
        )}
      </div>
    </div>
  );
};