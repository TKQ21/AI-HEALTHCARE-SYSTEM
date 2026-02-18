import { useEffect, useRef, useState } from "react";
import {
  Activity,
  AlertTriangle,
  Brain,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  Moon,
  ShieldCheck,
  Star,
  Sun,
  Stethoscope,
  Zap,
} from "lucide-react";

// ── Starfield ──────────────────────────────────────────────────────────────
interface StarDot {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  color: string;
}

function Starfield({ dark }: { dark: boolean }) {
  const [stars] = useState<StarDot[]>(() => {
    const neonColors = [
      "hsl(197,100%,70%)",
      "hsl(145,100%,65%)",
      "hsl(0,100%,65%)",
      "hsl(320,100%,65%)",
      "hsl(55,100%,65%)",
      "hsl(180,100%,65%)",
    ];
    return Array.from({ length: 120 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 2,
      color: neonColors[Math.floor(Math.random() * neonColors.length)],
    }));
  });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((s) => (
        <div
          key={s.id}
          className="star absolute rounded-full"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            backgroundColor: dark ? s.color : `${s.color.replace(")", " / 0.4)")}`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
            boxShadow: dark
              ? `0 0 ${s.size * 4}px ${s.color}, 0 0 ${s.size * 8}px ${s.color}`
              : `0 0 ${s.size * 2}px ${s.color}`,
          }}
        />
      ))}
    </div>
  );
}

// ── NeonOrbs background blobs ─────────────────────────────────────────────
function NeonOrbs({ dark }: { dark: boolean }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute rounded-full blur-3xl"
        style={{
          width: 600,
          height: 600,
          left: "-10%",
          top: "-10%",
          background: dark
            ? "radial-gradient(circle, hsl(197 100% 50% / 0.15), transparent 70%)"
            : "radial-gradient(circle, hsl(197 100% 50% / 0.06), transparent 70%)",
        }}
      />
      <div
        className="absolute rounded-full blur-3xl"
        style={{
          width: 500,
          height: 500,
          right: "-5%",
          top: "20%",
          background: dark
            ? "radial-gradient(circle, hsl(320 100% 55% / 0.15), transparent 70%)"
            : "radial-gradient(circle, hsl(320 100% 55% / 0.06), transparent 70%)",
        }}
      />
      <div
        className="absolute rounded-full blur-3xl"
        style={{
          width: 400,
          height: 400,
          left: "30%",
          bottom: "0%",
          background: dark
            ? "radial-gradient(circle, hsl(145 100% 50% / 0.12), transparent 70%)"
            : "radial-gradient(circle, hsl(145 100% 50% / 0.05), transparent 70%)",
        }}
      />
      <div
        className="absolute rounded-full blur-3xl"
        style={{
          width: 350,
          height: 350,
          right: "20%",
          bottom: "10%",
          background: dark
            ? "radial-gradient(circle, hsl(55 100% 55% / 0.10), transparent 70%)"
            : "radial-gradient(circle, hsl(55 100% 55% / 0.04), transparent 70%)",
        }}
      />
    </div>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────
const Index = () => {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  const modules = [
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Emergency Intake",
      desc: "Patient-facing symptom entry interface for structured reporting and urgency guidance.",
      btnText: "Open Emergency Intake",
      btnClass: "btn-neon-red",
      href: "https://ai-pateint-emergency.lovable.app",
      borderClass: "neon-border-blue",
      iconColor: "text-[hsl(0,100%,60%)]",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Symptom Assistant",
      desc: "Conversational AI module that gathers detailed clinical information through intelligent guided questioning.",
      btnText: "Open Symptom Assistant",
      btnClass: "btn-neon-green",
      href: "https://ai-conversation-decision.lovable.app",
      borderClass: "neon-border-green",
      iconColor: "text-[hsl(145,100%,50%)]",
    },
    {
      icon: <ClipboardList className="w-8 h-8" />,
      title: "Clinical Triage Engine",
      desc: "Advanced structured triage system generating prioritized emergency assessment reports for physician review.",
      btnText: "Open Triage Engine",
      btnClass: "btn-neon-pink",
      href: "https://ai-guided-emergency.lovable.app",
      borderClass: "neon-border-pink",
      iconColor: "text-[hsl(320,100%,60%)]",
    },
  ];

  const steps = [
    { num: "01", label: "Patient enters symptoms.", color: "hsl(197,100%,60%)", icon: <Stethoscope className="w-5 h-5" /> },
    { num: "02", label: "AI guides structured clarification.", color: "hsl(145,100%,55%)", icon: <Brain className="w-5 h-5" /> },
    { num: "03", label: "System analyzes risk patterns.", color: "hsl(55,100%,60%)", icon: <Zap className="w-5 h-5" /> },
    { num: "04", label: "Triage priority assigned for physician review.", color: "hsl(320,100%,60%)", icon: <ClipboardList className="w-5 h-5" /> },
  ];

  const benefits = [
    { text: "Standardized triage prioritization", color: "hsl(197,100%,60%)" },
    { text: "Structured clinical documentation", color: "hsl(145,100%,55%)" },
    { text: "Physician-supervised output", color: "hsl(320,100%,60%)" },
    { text: "Audit-ready reporting", color: "hsl(55,100%,60%)" },
    { text: "Built for high-load emergency settings", color: "hsl(0,100%,60%)" },
  ];

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden transition-colors duration-500">
      {/* Global background */}
      <div className="fixed inset-0 z-0">
        <NeonOrbs dark={dark} />
        <Starfield dark={dark} />
      </div>

      {/* ── NAV ─────────────────────────────────────────────── */}
      <nav className="relative z-50 flex items-center justify-between px-6 md:px-12 py-4 border-b border-border/30 backdrop-blur-md bg-background/60">
        <div className="flex items-center gap-2">
          <Activity className="w-7 h-7" style={{ color: "hsl(197,100%,60%)", filter: "drop-shadow(0 0 6px hsl(197,100%,60%))" }} />
          <span className="text-lg font-bold tracking-wide" style={dark ? { color: "hsl(197,100%,70%)", textShadow: "0 0 10px hsl(197,100%,60%)" } : {}}>
            AI Healthcare System
          </span>
        </div>
        <div className="flex items-center gap-3">
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
          <a
            href="#modules"
            className="hidden md:inline-flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium btn-neon-blue"
          >
            Explore Modules
          </a>
        </div>
      </nav>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-24 md:py-36 min-h-[90vh]">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold tracking-widest uppercase mb-6"
          style={{
            borderColor: "hsl(197,100%,60%)",
            color: dark ? "hsl(197,100%,70%)" : "hsl(197,80%,35%)",
            boxShadow: dark ? "0 0 12px hsl(197 100% 60% / 0.4)" : "none",
          }}>
          <ShieldCheck className="w-3.5 h-3.5" />
          Clinical Decision Support Platform
        </div>

        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4 leading-tight"
          style={dark ? {
            background: "linear-gradient(135deg, hsl(197,100%,70%), hsl(145,100%,60%), hsl(320,100%,65%))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0 0 30px hsl(197,100%,50% / 0.5))",
          } : {
            background: "linear-gradient(135deg, hsl(220,80%,20%), hsl(185,70%,35%), hsl(220,80%,20%))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
          AI Healthcare System
        </h1>

        <p className="text-lg md:text-2xl font-semibold mb-4"
          style={dark ? { color: "hsl(145,100%,65%)", textShadow: "0 0 15px hsl(145,100%,55% / 0.5)" } : { color: "hsl(185,60%,35%)" }}>
          Structured Emergency Triage & Supervised Clinical Decision Support
        </p>

        <p className="text-sm md:text-base text-muted-foreground max-w-2xl mb-10 leading-relaxed">
          An integrated AI-powered platform combining patient symptom intake, guided clinical conversations,
          and structured emergency triage assessment. Designed for supervised healthcare environments and institutional use.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://ai-pateint-emergency.lovable.app"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon-red px-8 py-3 rounded-full font-bold text-base flex items-center gap-2"
          >
            <Zap className="w-5 h-5" />
            Start Emergency Intake
          </a>
          <a
            href="https://ai-conversation-decision.lovable.app"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon-blue px-8 py-3 rounded-full font-bold text-base flex items-center gap-2"
          >
            <Stethoscope className="w-5 h-5" />
            Clinician Access
          </a>
        </div>

        {/* Floating badge row */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {["HIPAA-Grade Security", "Real-Time Triage", "AI-Powered", "24/7 Ready"].map((tag, i) => {
            const tagColors = ["hsl(197,100%,60%)", "hsl(145,100%,55%)", "hsl(320,100%,60%)", "hsl(55,100%,60%)"];
            return (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-sm"
                style={{
                  borderColor: tagColors[i],
                  color: dark ? tagColors[i] : "hsl(220,60%,15%)",
                  boxShadow: dark ? `0 0 8px ${tagColors[i]}40` : "none",
                  background: dark ? `${tagColors[i]}15` : `${tagColors[i]}10`,
                }}
              >
                {tag}
              </span>
            );
          })}
        </div>
      </section>

      {/* ── MODULES ──────────────────────────────────────────── */}
      <section id="modules" className="relative z-10 px-6 md:px-12 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-black mb-3"
              style={dark ? {
                background: "linear-gradient(90deg, hsl(197,100%,70%), hsl(320,100%,65%))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              } : { color: "hsl(220,80%,15%)" }}>
              Our Modules
            </h2>
            <p className="text-muted-foreground text-base max-w-xl mx-auto">
              Three specialized AI-powered modules working in concert to deliver comprehensive clinical support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {modules.map((m, i) => (
              <div
                key={m.title}
                className={`card-neon relative rounded-2xl border-2 p-6 flex flex-col gap-4 backdrop-blur-sm ${m.borderClass}`}
                style={{
                  background: dark
                    ? "hsl(220 25% 7% / 0.85)"
                    : "hsl(0 0% 100% / 0.85)",
                }}
              >
                <div
                  className={`inline-flex p-3 rounded-xl w-fit ${m.iconColor}`}
                  style={{ background: dark ? "hsl(220 25% 12% / 0.8)" : "hsl(210 40% 95%)" }}
                >
                  {m.icon}
                </div>
                <h3 className="text-xl font-bold">{m.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">{m.desc}</p>
                <a
                  href={m.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${m.btnClass} px-5 py-2.5 rounded-full font-semibold text-sm flex items-center gap-1.5 w-fit`}
                >
                  {m.btnText}
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────── */}
      <section className="relative z-10 px-6 md:px-12 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-black mb-3"
              style={dark ? {
                background: "linear-gradient(90deg, hsl(145,100%,65%), hsl(55,100%,60%))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              } : { color: "hsl(220,80%,15%)" }}>
              How It Works
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto text-sm">
              A four-step intelligent workflow from symptom entry to triage assignment.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div
                key={s.num}
                className="relative rounded-2xl p-6 flex flex-col items-center text-center gap-3 border backdrop-blur-sm"
                style={{
                  borderColor: `${s.color}50`,
                  background: dark ? "hsl(220 25% 7% / 0.8)" : "hsl(0 0% 100% / 0.8)",
                  boxShadow: dark ? `0 0 20px ${s.color}20` : `0 2px 12px ${s.color}15`,
                }}
              >
                <div
                  className="text-4xl font-black opacity-20 absolute top-3 right-4"
                  style={{ color: s.color }}
                >
                  {s.num}
                </div>
                <div
                  className="p-3 rounded-full"
                  style={{ background: `${s.color}20`, color: s.color, boxShadow: dark ? `0 0 12px ${s.color}50` : "none" }}
                >
                  {s.icon}
                </div>
                <p className="text-sm font-medium leading-relaxed">{s.label}</p>
                {i < steps.length - 1 && (
                  <ChevronRight
                    className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 w-5 h-5 z-10"
                    style={{ color: s.color }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KEY BENEFITS ─────────────────────────────────────── */}
      <section className="relative z-10 px-6 md:px-12 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-black mb-3"
              style={dark ? {
                background: "linear-gradient(90deg, hsl(320,100%,65%), hsl(197,100%,70%))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              } : { color: "hsl(220,80%,15%)" }}>
              Key Benefits
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {benefits.map((b, i) => (
              <div
                key={b.text}
                className="flex items-center gap-3 rounded-xl px-5 py-4 border backdrop-blur-sm"
                style={{
                  borderColor: `${b.color}40`,
                  background: dark ? `${b.color}08` : "hsl(0 0% 100% / 0.8)",
                  boxShadow: dark ? `0 0 15px ${b.color}15` : "none",
                }}
              >
                <CheckCircle2
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: b.color, filter: dark ? `drop-shadow(0 0 5px ${b.color})` : "none" }}
                />
                <span className="text-sm font-medium">{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMPORTANT NOTICE ─────────────────────────────────── */}
      <section className="relative z-10 px-6 md:px-12 py-16">
        <div className="max-w-3xl mx-auto">
          <div
            className="rounded-2xl border-2 p-8 text-center backdrop-blur-sm"
            style={{
              borderColor: "hsl(55,100%,60%)",
              background: dark ? "hsl(55 100% 50% / 0.05)" : "hsl(55 100% 50% / 0.06)",
              boxShadow: dark ? "0 0 30px hsl(55 100% 60% / 0.2), inset 0 0 30px hsl(55 100% 60% / 0.05)" : "0 4px 20px hsl(55 100% 60% / 0.15)",
            }}
          >
            <AlertTriangle
              className="w-10 h-10 mx-auto mb-4"
              style={{ color: "hsl(55,100%,60%)", filter: dark ? "drop-shadow(0 0 8px hsl(55,100%,60%))" : "none" }}
            />
            <h3
              className="text-xl font-black mb-3"
              style={dark ? { color: "hsl(55,100%,70%)", textShadow: "0 0 10px hsl(55,100%,60% / 0.5)" } : { color: "hsl(40,80%,30%)" }}
            >
              ⚠ Important Notice
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              <strong className="font-semibold">This platform provides Clinical Decision Support only.</strong>
              <br /><br />
              It does not independently diagnose, prescribe, or replace licensed medical professionals.
              All final clinical decisions must be made by a qualified healthcare provider.
            </p>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────── */}
      <footer className="relative z-10 border-t border-border/30 backdrop-blur-sm bg-background/60 px-6 md:px-12 py-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                <Activity
                  className="w-5 h-5"
                  style={{ color: "hsl(197,100%,60%)", filter: dark ? "drop-shadow(0 0 5px hsl(197,100%,60%))" : "none" }}
                />
                <span
                  className="font-bold text-base"
                  style={dark ? { color: "hsl(197,100%,70%)", textShadow: "0 0 8px hsl(197,100%,60%)" } : {}}
                >
                  AI Healthcare System
                </span>
              </div>
              <p className="text-xs text-muted-foreground">Supervised Use Only</p>
              <p className="text-xs text-muted-foreground mt-1">© 2026 All Rights Reserved</p>
            </div>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {["Privacy Policy", "Terms of Use", "Contact"].map((link, i) => {
                const linkColors = ["hsl(197,100%,60%)", "hsl(145,100%,55%)", "hsl(320,100%,60%)"];
                return (
                  <a
                    key={link}
                    href="#"
                    className="text-xs font-medium hover:underline transition-colors"
                    style={{ color: dark ? linkColors[i] : "hsl(220,60%,30%)" }}
                  >
                    {link}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-[10px] text-muted-foreground">
              Clinical Decision Support Platform · Not a diagnostic tool · For supervised institutional use only
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
