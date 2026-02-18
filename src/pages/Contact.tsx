import { useEffect, useState } from "react";
import { Activity, Mail, MapPin, Moon, Sun, MessageSquare, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export default function Contact() {
  const [dark, setDark] = useState(
    () => document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  const cards = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "aihealthcaresystem@gmail.com",
      href: "mailto:aihealthcaresystem@gmail.com",
      color: "hsl(197,100%,60%)",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "India",
      href: undefined,
      color: "hsl(145,100%,55%)",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      label: "Response Time",
      value: "Within 24–48 hours",
      href: undefined,
      color: "hsl(320,100%,60%)",
    },
  ];

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden transition-colors duration-500">
      {/* Fixed neon orb backgrounds */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute rounded-full blur-3xl" style={{ width: 500, height: 500, left: "20%", top: "-10%", background: dark ? "radial-gradient(circle, hsl(320 100% 55% / 0.12), transparent 70%)" : "radial-gradient(circle, hsl(320 100% 55% / 0.05), transparent 70%)" }} />
        <div className="absolute rounded-full blur-3xl" style={{ width: 400, height: 400, right: "10%", bottom: "15%", background: dark ? "radial-gradient(circle, hsl(197 100% 50% / 0.10), transparent 70%)" : "radial-gradient(circle, hsl(197 100% 50% / 0.04), transparent 70%)" }} />
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
            style={{ borderColor: "hsl(320,100%,60%)", color: dark ? "hsl(320,100%,70%)" : "hsl(320,60%,35%)", boxShadow: dark ? "0 0 12px hsl(320 100% 60% / 0.4)" : "none" }}>
            <MessageSquare className="w-3.5 h-3.5" />
            Get In Touch
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-3"
            style={dark ? {
              background: "linear-gradient(135deg, hsl(320,100%,65%), hsl(197,100%,70%))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            } : { color: "hsl(220,80%,15%)" }}>
            Contact Us
          </h1>
        </div>

        {/* Description */}
        <div
          className="rounded-2xl border p-8 mb-8 text-center backdrop-blur-sm"
          style={{
            borderColor: "hsl(197,100%,60%40)",
            background: dark ? "hsl(220 25% 7% / 0.8)" : "hsl(0 0% 100% / 0.85)",
            boxShadow: dark ? "0 0 25px hsl(197 100% 60% / 0.10)" : "0 2px 16px hsl(0 0% 0% / 0.05)",
          }}
        >
          <p className="text-base leading-relaxed text-muted-foreground">
            For clinical demonstrations, collaboration, or technical inquiries regarding{" "}
            <strong className="font-semibold text-foreground">AI Healthcare System</strong>, please reach out using the details below.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-3 gap-5 mb-8">
          {cards.map((c) => (
            <div
              key={c.label}
              className="rounded-2xl border p-6 flex flex-col items-center text-center gap-3 backdrop-blur-sm"
              style={{
                borderColor: `${c.color}40`,
                background: dark ? `${c.color}08` : "hsl(0 0% 100% / 0.85)",
                boxShadow: dark ? `0 0 20px ${c.color}12` : "0 2px 12px hsl(0 0% 0% / 0.05)",
              }}
            >
              <div
                className="p-3 rounded-full"
                style={{ background: `${c.color}20`, color: c.color, boxShadow: dark ? `0 0 12px ${c.color}50` : "none" }}
              >
                {c.icon}
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{c.label}</p>
              {c.href ? (
                <a
                  href={c.href}
                  className="text-sm font-semibold break-all hover:underline"
                  style={{ color: dark ? c.color : "hsl(220,70%,25%)", textShadow: dark ? `0 0 8px ${c.color}60` : "none" }}
                >
                  {c.value}
                </a>
              ) : (
                <p className="text-sm font-semibold" style={{ color: dark ? c.color : "hsl(220,70%,25%)" }}>
                  {c.value}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* CTA email button */}
        <div className="text-center">
          <a
            href="mailto:aihealthcaresystem@gmail.com"
            className="btn-neon-blue inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold text-base"
          >
            <Mail className="w-5 h-5" />
            Send us an Email
          </a>
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
