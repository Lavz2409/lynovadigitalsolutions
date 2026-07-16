import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { z } from "zod";
import { toast } from "sonner";
import {
  Sparkles,
  Palette,
  LayoutGrid,
  Rocket,
  ShieldCheck,
  Clock,
  HeartHandshake,
  Wallet,
  ArrowRight,
  ArrowUpRight,
  Mail,
  Phone,
  Instagram,
  Menu,
  X,
  Code2,
  AppWindow,
  FolderOpen,
  BookOpenText,
  FileText,
  IdCard,
  Megaphone,
  Presentation,
  GraduationCap,
  PenTool,
  Search,
  ClipboardList,
  Wrench,
  Quote,
} from "lucide-react";
import { Toaster } from "@/components/ui/sonner";
import logo from "@/assets/lynova-logo.png";
import heroBg from "@/assets/hero-bg.jpg";
import projHeavenly from "@/assets/portfolio/heavenly-dreamcakes.png";
import projCafe from "@/assets/portfolio/cafedelvolcan.png";
import projEcobloom from "@/assets/portfolio/ecobloom.png";

export const Route = createFileRoute("/")({
  component: Index,
});

/* ---------- Reveal on scroll ---------- */
function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: React.ElementType;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag
      ref={ref as never}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 800ms ease ${delay}ms, transform 800ms ease ${delay}ms`,
      }}
    >
      {children}
    </Tag>
  );
}

/* ---------- Navigation ---------- */
const NAV = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/70"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt="LYNOVA Digital Solutions" className="h-9 w-auto" />
        </a>
        <nav className="hidden items-center gap-9 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              style={{ fontFamily: "var(--font-button)" }}
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="btn-primary hidden rounded-full px-5 py-2.5 text-sm font-medium md:inline-flex"
        >
          Let's Talk
        </a>
        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur md:hidden">
          <div className="flex flex-col px-6 py-4">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm text-foreground"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-3 rounded-full px-5 py-2.5 text-center text-sm"
            >
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-28 md:pt-52 md:pb-40">
      {/* soft blue shapes */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div
          className="blob"
          style={{
            width: 520,
            height: 520,
            background: "var(--light-blue)",
            top: -140,
            right: -120,
          }}
        />
        <div
          className="blob"
          style={{
            width: 420,
            height: 420,
            background: "color-mix(in oklab, var(--primary) 22%, white)",
            bottom: -160,
            left: -100,
            animationDelay: "-6s",
          }}
        />
      </div>

      <div className="mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <img
            src={logo}
            alt="LYNOVA Digital Solutions"
            className="mx-auto mb-10 h-24 w-auto md:h-32"
          />
        </Reveal>
        <Reveal delay={80}>
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-white/60 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur"
            style={{ fontFamily: "var(--font-button)", letterSpacing: "0.08em" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            DIGITAL SOLUTIONS · DESIGN · GROWTH
          </div>
        </Reveal>
        <Reveal delay={140}>
          <h1 className="mx-auto max-w-4xl text-4xl leading-[1.1] text-foreground md:text-6xl">
            Building Digital Experiences <br className="hidden md:block" />
            That{" "}
            <span className="italic" style={{ color: "var(--primary)" }}>
              Inspire Growth.
            </span>
          </h1>
        </Reveal>
        <Reveal delay={220}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            We help businesses establish a strong digital presence through
            websites, web applications, branding, and marketing solutions
            designed with clarity and purpose.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href="#portfolio" className="btn-primary inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm">
              View Our Work <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="btn-secondary inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm">
              Let's Talk
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- About ---------- */
function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-12 md:gap-20">
        <Reveal className="md:col-span-5">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-primary" style={{ fontFamily: "var(--font-button)" }}>
            About Lynova
          </p>
          <h2 className="text-3xl leading-tight md:text-5xl">
            A quiet studio for a loud digital world.
          </h2>
        </Reveal>
        <Reveal className="md:col-span-7" delay={120}>
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              LYNOVA Digital Solutions is a digital studio helping businesses
              and individuals build their presence online through thoughtful
              design and reliable technology.
            </p>
            <p>
              From websites and web applications to brand identity and marketing,
              every project we take on is guided by a simple belief: clarity
              wins. We build products that feel calm to use, easy to trust, and
              made to grow with you.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-8">
              <div>
                <div className="text-3xl text-foreground">15+</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl text-foreground">100%</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">Custom Built</div>
              </div>
              <div>
                <div className="text-3xl text-foreground">24/7</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Services ---------- */
type Service = { icon: React.ElementType; title: string; desc: string };

const BUSINESS_SERVICES: Service[] = [
  { icon: Code2, title: "Website Development", desc: "Fast, modern websites tailored to your brand." },
  { icon: AppWindow, title: "Web Applications", desc: "Custom web apps built to solve real problems." },
  { icon: FolderOpen, title: "Portfolio Websites", desc: "Elegant portfolios that showcase your work." },
  { icon: Palette, title: "Brand Identity", desc: "Cohesive visual systems your audience remembers." },
  { icon: PenTool, title: "Logo Design", desc: "Distinct marks crafted with care and intent." },
  { icon: BookOpenText, title: "Brochure Design", desc: "Print-ready brochures that read beautifully." },
  { icon: IdCard, title: "Visiting Card Design", desc: "Small format, big first impressions." },
  { icon: Megaphone, title: "Digital Marketing", desc: "Reach, engagement, and growth done right." },
];

const STUDENT_SERVICES: Service[] = [
  { icon: FileText, title: "Project Works", desc: "End-to-end academic projects with clean delivery." },
  { icon: ClipboardList, title: "Assignments", desc: "Well-researched, well-formatted assignments." },
  { icon: Presentation, title: "Presentations", desc: "Slides designed to inform and impress." },
];

function ServiceCard({ s }: { s: Service }) {
  const Icon = s.icon;
  return (
    <div className="card-lift group flex flex-col rounded-2xl border border-border bg-card p-7">
      <div
        className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-xl"
        style={{ background: "var(--light-blue)" }}
      >
        <Icon className="h-5 w-5" style={{ color: "var(--primary)" }} />
      </div>
      <h3 className="mb-2 text-lg text-foreground">{s.title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32" style={{ background: "var(--surface-alt)" }}>
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-primary" style={{ fontFamily: "var(--font-button)" }}>
            Services
          </p>
          <h2 className="text-3xl leading-tight md:text-5xl">Everything you need to build online.</h2>
          <p className="mt-5 text-muted-foreground">
            Considered, end-to-end services for businesses and students.
          </p>
        </Reveal>

        <Reveal>
          <div className="mb-10 flex items-center gap-3">
            <span className="h-px flex-1 bg-border" />
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground" style={{ fontFamily: "var(--font-button)" }}>
              Business Solutions
            </span>
            <span className="h-px flex-1 bg-border" />
          </div>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BUSINESS_SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <ServiceCard s={s} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="my-10 mt-20 flex items-center gap-3">
            <span className="h-px flex-1 bg-border" />
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground" style={{ fontFamily: "var(--font-button)" }}>
              Student Services
            </span>
            <span className="h-px flex-1 bg-border" />
          </div>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STUDENT_SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <ServiceCard s={s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Portfolio ---------- */
const PROJECTS = [
  {
    title: "Heavenly Dreamcakes",
    tag: "Bakery · Landing Page",
    desc: "A warm, elegant landing page for a bespoke cake studio, built to convert curious visitors into orders.",
    url: "https://agent-6a431e7afcfa035b96938--heavenly-dreamcakes.netlify.app",
    image: projHeavenly,
  },
  {
    title: "Café Del Volcán",
    tag: "Café · Story-led Site",
    desc: "An atmospheric single-page experience for a Shanghai café — story, menu and visit information in one calm scroll.",
    url: "https://agent-6a42bd7ec4e2e7deb9ece3e4--cafedelvolcan.netlify.app",
    image: projCafe,
  },
  {
    title: "Ecobloom Exim Global Export",
    tag: "Exports · Corporate Site",
    desc: "A polished corporate presence for a global spice exporter, with clear product storytelling and inquiries built-in.",
    url: "https://ecobloomeximglobalexport.netlify.app/",
    image: projEcobloom,
  },
];

function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-primary" style={{ fontFamily: "var(--font-button)" }}>
            Selected Work
          </p>
          <h2 className="text-3xl leading-tight md:text-5xl">Websites we're proud of.</h2>
          <p className="mt-5 text-muted-foreground">
            A small selection of recent projects, each built end-to-end.
          </p>
        </Reveal>

        <div className="space-y-24 md:space-y-32">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title}>
              <div className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
                i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}>
                <div className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)]">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={p.image}
                      alt={`${p.title} website`}
                      className="h-full w-full object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div>
                  <p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground" style={{ fontFamily: "var(--font-button)" }}>
                    {p.tag}
                  </p>
                  <h3 className="text-2xl leading-tight md:text-4xl">{p.title}</h3>
                  <p className="mt-5 text-muted-foreground">{p.desc}</p>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm"
                  >
                    Visit Website <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Why Choose ---------- */
const REASONS = [
  { icon: Sparkles, title: "Custom Solutions", desc: "Built around your brand — never templated." },
  { icon: LayoutGrid, title: "Modern Design", desc: "Clean, current interfaces with lasting appeal." },
  { icon: ShieldCheck, title: "Reliable Support", desc: "We stay involved long after launch day." },
  { icon: Wallet, title: "Affordable Pricing", desc: "Premium quality without an inflated invoice." },
  { icon: Clock, title: "On-Time Delivery", desc: "Realistic timelines we actually respect." },
  { icon: HeartHandshake, title: "Attention to Detail", desc: "The small things — polished with intent." },
];

function WhyChoose() {
  return (
    <section className="relative py-24 md:py-32" style={{ background: "var(--surface-alt)" }}>
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-primary" style={{ fontFamily: "var(--font-button)" }}>
            Why Lynova
          </p>
          <h2 className="text-3xl leading-tight md:text-5xl">Six reasons teams stay with us.</h2>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r, i) => {
            const Icon = r.icon;
            return (
              <Reveal key={r.title} delay={i * 60}>
                <div className="card-lift flex items-start gap-5 rounded-2xl border border-border bg-card p-7">
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                    style={{ background: "var(--light-blue)" }}
                  >
                    <Icon className="h-5 w-5" style={{ color: "var(--primary)" }} />
                  </div>
                  <div>
                    <h3 className="text-lg text-foreground">{r.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Process ---------- */
const STEPS = [
  { icon: Search, title: "Discovery" },
  { icon: ClipboardList, title: "Planning" },
  { icon: PenTool, title: "Design" },
  { icon: Code2, title: "Development" },
  { icon: Rocket, title: "Launch" },
  { icon: Wrench, title: "Support" },
];

function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto mb-20 max-w-2xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-primary" style={{ fontFamily: "var(--font-button)" }}>
            Process
          </p>
          <h2 className="text-3xl leading-tight md:text-5xl">From first call to long after launch.</h2>
        </Reveal>

        <div className="relative">
          <div
            aria-hidden
            className="pointer-events-none absolute left-6 right-6 top-6 hidden h-px md:block"
            style={{
              background:
                "linear-gradient(to right, transparent, var(--border) 15%, var(--border) 85%, transparent)",
            }}
          />
          <div className="grid grid-cols-2 gap-y-12 md:grid-cols-6 md:gap-8">
            {STEPS.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.title} delay={i * 90}>
                  <div className="flex flex-col items-center text-center">
                    <div
                      className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card shadow-[var(--shadow-soft)]"
                    >
                      <Icon className="h-5 w-5" style={{ color: "var(--primary)" }} />
                    </div>
                    <div
                      className="mt-4 text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
                      style={{ fontFamily: "var(--font-button)" }}
                    >
                      Step {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="mt-1 text-base text-foreground">{s.title}</div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonials (placeholders) ---------- */
const TESTIMONIALS = [
  { name: "Your Story Here", role: "Future Client", body: "We're building space for real client stories. Yours could be the first." },
  { name: "Coming Soon", role: "Future Client", body: "Fresh reviews will appear here as new projects wrap up." },
  { name: "Reserved", role: "Future Client", body: "Kind words, honest feedback — soon to be shared in this spot." },
];

function Testimonials() {
  return (
    <section className="relative py-24 md:py-32" style={{ background: "var(--surface-alt)" }}>
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-primary" style={{ fontFamily: "var(--font-button)" }}>
            Kind Words
          </p>
          <h2 className="text-3xl leading-tight md:text-5xl">Voices, coming soon.</h2>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="card-lift flex h-full flex-col rounded-2xl border border-border bg-card p-8">
                <Quote className="h-6 w-6" style={{ color: "var(--primary)" }} />
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">{t.body}</p>
                <div className="mt-8 border-t border-border pt-5">
                  <div className="text-sm text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */
const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(5, "Enter a valid phone").max(30),
  message: z.string().trim().min(10, "Tell us a little more").max(2000),
});

function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      message: String(fd.get("message") || ""),
    };
    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form.");
      return;
    }
    setSubmitting(true);
    const subject = encodeURIComponent(`New inquiry from ${parsed.data.name}`);
    const body = encodeURIComponent(
      `Name: ${parsed.data.name}\nEmail: ${parsed.data.email}\nPhone: ${parsed.data.phone}\n\n${parsed.data.message}`,
    );
    window.location.href = `mailto:lynovadigisolutions@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      toast.success("Opening your email client…");
      setSubmitting(false);
    }, 400);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-5 md:gap-16">
        <Reveal className="md:col-span-2">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-primary" style={{ fontFamily: "var(--font-button)" }}>
            Contact
          </p>
          <h2 className="text-3xl leading-tight md:text-5xl">Let's build something considered.</h2>
          <p className="mt-5 text-muted-foreground">
            Tell us about your project, your timeline, or just say hello. We
            reply personally, usually within a day.
          </p>

          <div className="mt-10 space-y-5">
            <a href="mailto:lynovadigisolutions@gmail.com" className="group flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl" style={{ background: "var(--light-blue)" }}>
                <Mail className="h-5 w-5" style={{ color: "var(--primary)" }} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground" style={{ fontFamily: "var(--font-button)" }}>Email</div>
                <div className="mt-0.5 text-foreground transition-colors group-hover:text-primary">lynovadigisolutions@gmail.com</div>
              </div>
            </a>
            <a href="tel:+918754041242" className="group flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl" style={{ background: "var(--light-blue)" }}>
                <Phone className="h-5 w-5" style={{ color: "var(--primary)" }} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground" style={{ fontFamily: "var(--font-button)" }}>Phone</div>
                <div className="mt-0.5 text-foreground transition-colors group-hover:text-primary">+91 8754 041 242</div>
              </div>
            </a>
            <a
              href="https://www.instagram.com/lynovadigisolutions?igsh=b2tnNnRveml2Mjd3"
              target="_blank"
              rel="noreferrer"
              className="group flex items-start gap-4"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl" style={{ background: "var(--light-blue)" }}>
                <Instagram className="h-5 w-5" style={{ color: "var(--primary)" }} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground" style={{ fontFamily: "var(--font-button)" }}>Instagram</div>
                <div className="mt-0.5 text-foreground transition-colors group-hover:text-primary">@lynovadigisolutions</div>
              </div>
            </a>
          </div>
        </Reveal>

        <Reveal className="md:col-span-3" delay={120}>
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] md:p-10"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <FormField label="Your Name" name="name" placeholder="Jane Doe" />
              <FormField label="Email" name="email" type="email" placeholder="jane@company.com" />
              <FormField label="Phone" name="phone" placeholder="+91 00000 00000" />
              <FormField label="Subject / Service" name="subject" placeholder="Website, branding, etc." optional />
            </div>
            <div className="mt-5">
              <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-muted-foreground" style={{ fontFamily: "var(--font-button)" }}>
                Message
              </label>
              <textarea
                name="message"
                rows={6}
                placeholder="Tell us about your project…"
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/70 focus:border-primary focus:ring-4 focus:ring-primary/10"
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="btn-primary mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-sm disabled:opacity-70 md:w-auto"
            >
              {submitting ? "Sending…" : "Send Message"} <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function FormField({
  label,
  name,
  type = "text",
  placeholder,
  optional = false,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  optional?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-muted-foreground" style={{ fontFamily: "var(--font-button)" }}>
        {label} {optional && <span className="normal-case tracking-normal text-muted-foreground/60">(optional)</span>}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/70 focus:border-primary focus:ring-4 focus:ring-primary/10"
      />
    </div>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="border-t border-border py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <img src={logo} alt="LYNOVA Digital Solutions" className="h-10 w-auto" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              LYNOVA Digital Solutions — websites, apps, branding and
              marketing, designed with clarity and purpose.
            </p>
          </div>
          <div>
            <div className="mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground" style={{ fontFamily: "var(--font-button)" }}>
              Quick Links
            </div>
            <ul className="space-y-3 text-sm">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-foreground/80 transition-colors hover:text-primary">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground" style={{ fontFamily: "var(--font-button)" }}>
              Contact
            </div>
            <ul className="space-y-3 text-sm">
              <li><a href="mailto:lynovadigisolutions@gmail.com" className="text-foreground/80 hover:text-primary">Email</a></li>
              <li><a href="tel:+918754041242" className="text-foreground/80 hover:text-primary">+91 8754 041 242</a></li>
              <li>
                <a
                  href="https://www.instagram.com/lynovadigisolutions?igsh=b2tnNnRveml2Mjd3"
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground/80 hover:text-primary"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} LYNOVA Digital Solutions. All rights reserved.</div>
          <div style={{ fontFamily: "var(--font-button)", letterSpacing: "0.15em" }}>
            CRAFTED WITH CARE
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Page ---------- */
function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster />
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <WhyChoose />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
