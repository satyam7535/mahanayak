"use client";

import { useEffect, useRef, useState } from "react";
import { MessageBox } from "../MessageBox";

export const Chat = ({
  messages,
  isLoading,
}: {
  messages: { message: string; role: string }[];
  isLoading: boolean;
}) => {
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const [showLoading, setShowLoading] = useState<boolean>(false);
  const [loadingMsg, setLoadingMessage] = useState<string>("AI is Responding...");

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  return (
    <div style={{ padding: "24px 0" }}>
      {messages.map((msg, idx) => (
        <MessageBox
          key={idx}
          content={msg}
          setLoadingMessage={setLoadingMessage}
          setShowLoading={setShowLoading}
        />
      ))}

      {/* Typing indicator */}
      {(isLoading || showLoading) && (
        <div
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
              padding: "14px 20px",
              borderRadius: "4px var(--radius-lg) var(--radius-lg) var(--radius-lg)",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <span
              style={{
                fontSize: 13,
                color: "var(--text-secondary)",
                marginRight: 8,
              }}
            >
              {loadingMsg}
            </span>
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "var(--accent-emerald)",
                  display: "inline-block",
                  animation: "typingDot 1.4s ease-in-out infinite",
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>
        </div>
      )}

      <div ref={bottomRef} />
    </div>
  );
};
