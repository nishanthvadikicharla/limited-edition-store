"use client";

import { useState, useRef, useEffect } from "react";

const SYSTEM_PROMPT = `You are Millet, the friendly AI assistant for Refarmsoil — a climate-smart, millet-based food-tech startup from Karimnagar, Telangana, India. You were co-founded by Srikanth Vadikicharla (CEO) and Nishanth Vadikicharla (COO).

Your personality: warm, knowledgeable, earthy, and passionate about sustainable nutrition. You speak with genuine enthusiasm about millets, regenerative farming, and natural sweeteners.

Key facts you know:
- Refarmsoil's flagship product is **Millet-Us**, a millet-based natural sweetener available on Amazon India.
- The company is recognized by the Telangana government, won a Global SDG Championship award, and was featured at the ET Soonicorn Summit.
- Millets are climate-resilient, nutrient-dense, and require far less water than rice or wheat.
- Millet-Us is a healthier alternative to refined sugar — low glycemic index, rich in fibre and minerals.
- Refarmsoil works directly with farmers in Telangana to source millets sustainably.
- WhatsApp: +91 8328379902
- Email: business@refarmsoil.com
- Amazon Store: https://www.amazon.in/Refarmsoil-Millet-Us-Worlds-Sweetener-Glycemic/dp/B0GZFDLNVP/ref=sr_1_5?crid=3M3M2CBTHDKQB&dib=eyJ2IjoiMSJ9.ieisxWVw5vKTQ4a2QbiiwgdeiMaI7n53UgttxmDxyrw.YjKPtvBRnhXPmjzLeOg9vpgTW4ZNpwenBSU3fuvrkJk&dib_tag=se&keywords=milletus&qid=1782185476&sprefix=milletus%2Caps%2C326&sr=8-5
- Website: refarmsoil.com

Answer questions about the brand, products, millets, sustainability, nutrition, and ordering. For complex B2B or investor queries, suggest they reach out via WhatsApp or email. Keep answers concise (2–4 sentences usually), friendly, and on-brand. If someone asks something outside your scope, gently redirect to Refarmsoil topics.`
;

const BOT_AVATAR = "🌾";
const USER_AVATAR = "🧑";

const QUICK_REPLIES = [
  "What is Millet-Us?",
  "Where can I buy it?",
  "Why choose millets?",
  "Tell me about Refarmsoil",
];

function TypingDots() {
  return (
    <div style={{ display: "flex", gap: 4, alignItems: "center", padding: "4px 0" }}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          style={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: "#5a7a3a",
            opacity: 0.7,
            animation: `bounce 1.2s ease-in-out ${i * 0.2}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

export default function RefarmsoilChatbot() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Namaste! 🌾 I'm **Millet**, your guide to Refarmsoil's world of climate-smart nutrition. Ask me about Millet-Us, our farming practices, or anything about the goodness of millets!",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const bottomRef = useRef(null);

  const firstLoad = useRef(true);

useEffect(() => {
  if (firstLoad.current) {
    firstLoad.current = false;
    return;
  }

  bottomRef.current?.scrollIntoView({
    behavior: "smooth",
    block: "end",
  });
}, [messages, loading]);

  const sendMessage = async (text) => {
    const userText = text || input.trim();
    if (!userText || loading) return;
    setInput("");

    const newMessages = [...messages, { role: "user", content: userText }];
    setMessages(newMessages);
    setLoading(true);

    try {
      const apiMessages = newMessages.map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const res = await fetch(
  `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.NEXT_PUBLIC_GEMINI_API_KEY}`,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contents: [
        {
          parts: [
            {
              text: `${SYSTEM_PROMPT}\n\nUser: ${userText}`,
            },
          ],
        },
      ],
    }),
  }
);

console.log("HTTP Status:", res.status);

const data = await res.json();

console.log("Gemini Response:", data);

if (data.error) {
  throw new Error(data.error.message);
}

const reply =
  data?.candidates?.[0]?.content?.parts?.[0]?.text ||
  "I'm having trouble responding right now. Please try again.";

setMessages((prev) => [
  ...prev,
  {
    role: "assistant",
    content: reply,
  },
]);
    } catch (e) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Oops! Something went wrong. Please try again in a moment. 🌿" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const renderContent = (text) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      .replace(/\n/g, "<br/>");
  };

  if (!open) {
    return (
      <div
  style={{
    position: "fixed",
    bottom: 20,
    right: 20,
    zIndex: 9999,
  }}
>
        <button
          onClick={() => setOpen(true)}
          style={{
            width: 60, height: 60, borderRadius: "50%", border: "none", cursor: "pointer",
            background: "linear-gradient(135deg, #5a7a3a, #8aad5a)",
            color: "white", fontSize: 26, boxShadow: "0 4px 20px rgba(90,122,58,0.4)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >
          🌾
        </button>
      </div>
    );
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Inter:wght@400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #f5f2eb; font-family: 'Inter', sans-serif; }
        @keyframes bounce {
          0%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-6px); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .msg-bubble { animation: fadeUp 0.3s ease; }
        .quick-btn:hover { background: #5a7a3a !important; color: white !important; }
        .send-btn:hover { background: #4a6a2a !important; }
        textarea:focus { outline: none; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #c8d9b0; border-radius: 4px; }
      `}</style>

      <div
  style={{
    position: "fixed",
    bottom: 20,
    right: 20,
    zIndex: 9999,
  }}
>
        <div style={{
          width: "100%",width: "calc(100vw - 32px)", maxWidth: 420,
          borderRadius: 20, overflow: "hidden",
          boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
          display: "flex", flexDirection: "column", height: "80vh",maxheight: 500,maxwidth: 380,
          border: "1px solid #dde8cc",
        }}>

          {/* Header */}
          <div style={{
            background: "linear-gradient(135deg, #2d4a1e 0%, #4a7a28 100%)",
            padding: "16px 20px",
            display: "flex", alignItems: "center", gap: 12,
            flexShrink: 0,
          }}>
            <div style={{
              width: 44, height: 44, borderRadius: "50%",
              background: "rgba(255,255,255,0.15)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 22, flexShrink: 0,
              border: "2px solid rgba(255,255,255,0.3)",
            }}>🌾</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "'Playfair Display', serif", color: "white", fontSize: 17, fontWeight: 600 }}>
                Millet
              </div>
              <div style={{ color: "#b8d898", fontSize: 12, marginTop: 1 }}>
                Refarmsoil AI · Climate-Smart Nutrition
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#7dde52" }} />
              <span style={{ color: "#b8d898", fontSize: 11 }}>Online</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              style={{ background: "none", border: "none", color: "rgba(255,255,255,0.6)", fontSize: 20, cursor: "pointer", marginLeft: 8, lineHeight: 1 }}
            >×</button>
          </div>

          {/* Messages */}
          <div style={{
            flex: 1, overflowY: "auto", padding: "16px 16px 8px",
            background: "#fafaf7", display: "flex", flexDirection: "column", gap: 12,
          }}>
            {messages.map((msg, i) => (
              <div key={i} className="msg-bubble" style={{
                display: "flex",
                flexDirection: msg.role === "user" ? "row-reverse" : "row",
                alignItems: "flex-end", gap: 8,
              }}>
                <div style={{
                  width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
                  background: msg.role === "user" ? "#e8f0d8" : "#2d4a1e",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 14,
                }}>
                  {msg.role === "user" ? USER_AVATAR : BOT_AVATAR}
                </div>
                <div style={{
                  maxWidth: "75%",
                  background: msg.role === "user"
                    ? "linear-gradient(135deg, #5a7a3a, #7aaa4a)"
                    : "white",
                  color: msg.role === "user" ? "white" : "#2a3520",
                  padding: "10px 14px",
                  borderRadius: msg.role === "user"
                    ? "18px 18px 4px 18px"
                    : "18px 18px 18px 4px",
                  fontSize: 14, lineHeight: 1.55,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
                  border: msg.role === "assistant" ? "1px solid #e8eede" : "none",
                }}
                  dangerouslySetInnerHTML={{ __html: renderContent(msg.content) }}
                />
              </div>
            ))}

            {loading && (
              <div className="msg-bubble" style={{ display: "flex", alignItems: "flex-end", gap: 8 }}>
                <div style={{
                  width: 28, height: 28, borderRadius: "50%", background: "#2d4a1e",
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14,
                }}>🌾</div>
                <div style={{
                  background: "white", padding: "10px 14px", borderRadius: "18px 18px 18px 4px",
                  border: "1px solid #e8eede", boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
                }}>
                  <TypingDots />
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Quick Replies */}
          {messages.length <= 1 && (
            <div style={{
              padding: "8px 16px", background: "#fafaf7",
              display: "flex", flexWrap: "wrap", gap: 6,
              borderTop: "1px solid #eef3e6",
            }}>
              {QUICK_REPLIES.map((q) => (
                <button
                  key={q} className="quick-btn"
                  onClick={() => sendMessage(q)}
                  style={{
                    padding: "6px 12px", borderRadius: 20, fontSize: 12,
                    border: "1px solid #5a7a3a", background: "white",
                    color: "#5a7a3a", cursor: "pointer", transition: "all 0.2s",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div style={{
            padding: "12px 16px", background: "white",
            borderTop: "1px solid #eef3e6",
            display: "flex", gap: 10, alignItems: "flex-end", flexShrink: 0,
          }}>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask about Millet-Us, millets, farming..."
              rows={1}
              style={{
                flex: 1, border: "1.5px solid #dde8cc", borderRadius: 12,
                padding: "10px 14px", fontSize: 14, resize: "none",
                fontFamily: "'Inter', sans-serif", color: "#2a3520",
                background: "#fafaf7", lineHeight: 1.5,
                maxHeight: 80, overflowY: "auto",
              }}
            />
            <button
              className="send-btn"
              onClick={() => sendMessage()}
              disabled={!input.trim() || loading}
              style={{
                width: 40, height: 40, borderRadius: "50%", border: "none",
                background: input.trim() && !loading ? "#5a7a3a" : "#c8d9b0",
                color: "white", cursor: input.trim() && !loading ? "pointer" : "default",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 16, flexShrink: 0, transition: "background 0.2s",
              }}
            >
              ➤
            </button>
          </div>

          {/* Footer */}
          <div style={{
            textAlign: "center", padding: "6px 0 10px",
            fontSize: 10, color: "#aab890", background: "white",
          }}>
            Powered by Refarmsoil · <span style={{ color: "#5a7a3a" }}>refarmsoil.com</span>
          </div>

        </div>
      </div>
    </>
  );
}
