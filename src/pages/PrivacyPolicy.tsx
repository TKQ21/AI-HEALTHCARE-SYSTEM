import { useEffect, useState } from "react";
import { Activity, Moon, Sun, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  const [dark, setDark] = useState(
    () => document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  const sections = [
    {
      title: "Information We Collect",
      color: "hsl(197,100%,60%)",
      body: "We may collect symptom inputs, non-identifiable usage data, and basic device/browser information. We do not intentionally collect personally identifiable information unless voluntarily submitted via contact forms.",
    },
    {
      title: "How We Use Information",
      color: "hsl(145,100%,55%)",
      body: "Information is used to provide clinical decision support functionality, improve system performance, and enhance user experience.",
    },
    {
      title: "Data Storage",
      color: "hsl(320,100%,60%)",
      body: "This platform does not guarantee permanent storage of medical or health-related inputs. Users should not rely on this system for medical record keeping.",
    },
    {
      title: "Data Sharing",
      color: "hsl(55,100%,60%)",
      body: "We do not sell, rent, or trade personal information with third parties.",
    },
    {
      title: "Security",
      color: "hsl(0,100%,65%)",
      body: "Reasonable safeguards are implemented to protect user data. However, no online system can guarantee complete security.",
    },
    {
      title: "Medical Disclaimer",
      color: "hsl(197,100%,60%)",
      body: "AI Healthcare System provides clinical decision support only and does not replace licensed medical professionals.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden transition-colors duration-500">
      {/* Fixed neon orb backgrounds */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute rounded-full blur-3xl" style={{ width: 500, height: 500, left: "-10%", top: "-5%", background: dark ? "radial-gradient(circle, hsl(197 100% 50% / 0.12), transparent 70%)" : "radial-gradient(circle, hsl(197 100% 50% / 0.05), transparent 70%)" }} />
        <div className="absolute rounded-full blur-3xl" style={{ width: 400, height: 400, right: "-5%", bottom: "20%", background: dark ? "radial-gradient(circle, hsl(320 100% 55% / 0.10), transparent 70%)" : "radial-gradient(circle, hsl(320 100% 55% / 0.04), transparent 70%)" }} />
      </div>

      {/* NAV */}
      <nav className="relative z-50 flex items-center justify-between px-6 md:px-12 py-4 border-b border-border/30 backdrop-blur-md bg-background/60">
        <Link to="/" className="flex items-center gap-2">
          <Activity className="w-7 h-7" style={{ color: "hsl(197,100%,60%)", filter: "drop-shadow(0 0 6px hsl(197,100%,60%))" }} />
          <span className="text-lg font-bold tracking-wide" style={dark ? { color: "hsl(197,100%,70%)", textShadow: "0 0 10px hsl(197,100%,60%)" } : {}}>
            AI Healthcare System
          </span>
        </Link>
        <button
          onClick={() => setDark(!dark)}
          className="p-2 rounded-full border border-border/50 hover:border-border transition-all duration-300 backdrop-blur-sm bg-background/40"
          aria-label="Toggle dark mode"
        >
          {dark ? (
            <Sun className="w-5 h-5 text-[hsl(55,100%,60%)]" style={{ filter: "drop-shadow(0 0 6px hsl(55,100%,60%))" }} />
          ) : (
            <Moon className="w-5 h-5 text-[hsl(220,80%,30%)]" />
          )}
        </button>
      </nav>

      {/* CONTENT */}
      <main className="relative z-10 max-w-3xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold tracking-widest uppercase mb-5"
            style={{ borderColor: "hsl(197,100%,60%)", color: dark ? "hsl(197,100%,70%)" : "hsl(197,80%,35%)", boxShadow: dark ? "0 0 12px hsl(197 100% 60% / 0.4)" : "none" }}>
            <ShieldCheck className="w-3.5 h-3.5" />
            Legal Document
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-3"
            style={dark ? {
              background: "linear-gradient(135deg, hsl(197,100%,70%), hsl(145,100%,60%))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            } : { color: "hsl(220,80%,15%)" }}>
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground">Effective Date: 18 February 2026</p>
        </div>

        {/* Intro */}
        <p className="text-base leading-relaxed text-muted-foreground mb-10 text-center">
          AI Healthcare System respects your privacy and is committed to protecting user information.
        </p>

        {/* Sections */}
        <div className="flex flex-col gap-6">
          {sections.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border p-6 backdrop-blur-sm"
              style={{
                borderColor: `${s.color}40`,
                background: dark ? `${s.color}08` : "hsl(0 0% 100% / 0.85)",
                boxShadow: dark ? `0 0 20px ${s.color}12` : "0 2px 12px hsl(0 0% 0% / 0.05)",
              }}
            >
              <h2
                className="text-lg font-bold mb-2"
                style={{ color: dark ? s.color : "hsl(220,80%,20%)", textShadow: dark ? `0 0 8px ${s.color}60` : "none" }}
              >
                {s.title}
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div
          className="mt-10 rounded-2xl border-2 p-6 text-center"
          style={{
            borderColor: "hsl(197,100%,60%)",
            background: dark ? "hsl(197 100% 50% / 0.05)" : "hsl(197 100% 50% / 0.04)",
            boxShadow: dark ? "0 0 25px hsl(197 100% 60% / 0.15)" : "none",
          }}
        >
          <p className="text-sm text-muted-foreground">
            Questions about this policy? Contact us at{" "}
            <a href="mailto:aihealthcaresystem@gmail.com" className="font-semibold hover:underline"
              style={{ color: dark ? "hsl(197,100%,70%)" : "hsl(197,80%,35%)" }}>
              aihealthcaresystem@gmail.com
            </a>
          </p>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-border/30 backdrop-blur-sm bg-background/60 px-6 py-8 text-center">
        <p className="text-xs text-muted-foreground">© 2026 AI Healthcare System · All Rights Reserved</p>
        <div className="flex justify-center gap-5 mt-2">
          {[{ label: "Privacy Policy", to: "/privacy" }, { label: "Terms of Use", to: "/terms" }, { label: "Contact", to: "/contact" }].map((l, i) => {
            const cols = ["hsl(197,100%,60%)", "hsl(145,100%,55%)", "hsl(320,100%,60%)"];
            return <Link key={l.label} to={l.to} className="text-xs font-medium hover:underline" style={{ color: dark ? cols[i] : "hsl(220,60%,30%)" }}>{l.label}</Link>;
          })}
        </div>
      </footer>
    </div>
  );
}
