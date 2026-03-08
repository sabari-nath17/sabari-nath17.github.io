import { Github, Linkedin, Instagram, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpeg";

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

const workFocus = [
  { title: "AI Systems Development", desc: "Designing applied ML solutions integrated into real software systems." },
  { title: "Product Architecture", desc: "Structures that efficiently integrate APIs, models, and backend services." },
  { title: "Startup Development", desc: "Exploring and validating early-stage technology products." },
  { title: "Operational Automation", desc: "Software systems that improve workflow efficiency and decision-making." },
];

const technicalSkills = [
  "C Programming",
  "Python",
  "Java",
  "R",
  "Data Structures & Algorithms",
  "Machine Learning",
  "AI System Design",
  "API Integration",
  "Google Cloud Platform",
];

const otherSkills = [
  "Marketing & Product Positioning",
  "Business Management",
  "Communication",
  "Photography",
  "Video Editing",
  "Stock Market & Trading",
];

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/sabarinath17", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/sabari-nath17", label: "GitHub" },
  { icon: Instagram, href: "https://instagram.com/sabbaariiii", label: "Instagram" },
];

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <motion.section
    variants={fade}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-60px" }}
    className={className}
  >
    {children}
  </motion.section>
);

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
    {children}
  </p>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background">
      <div className="mx-auto max-w-xl px-6 py-24 sm:py-32">

        {/* Hero — the "header" of the resume */}
        <Section className="flex flex-col items-center text-center">
          <div className="mb-8 h-32 w-32 overflow-hidden rounded-full border-2 border-border shadow-sm">
            <img src={profileImg} alt="SabariNath SA" className="h-full w-full object-cover grayscale" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            SabariNath SA
          </h1>
          <p className="mt-1.5 text-sm font-medium text-muted-foreground">
            AI Systems &amp; Product Builder
          </p>
          <p className="mt-2 flex items-center gap-1 text-xs text-muted-foreground/70">
            <MapPin className="h-3 w-3" /> Kerala, India
          </p>

          {/* Social row — scannable, compact */}
          <div className="mt-6 flex gap-5">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </Section>

        <hr className="my-14 border-border" />

        {/* Summary — the bold "hook" paragraph */}
        <Section>
          <SectionLabel>Summary</SectionLabel>
          <p className="text-[15px] leading-[1.75] text-foreground/90">
            Focused on building <strong>applied AI systems</strong> and software designed to improve real-world operations. Work centers on machine learning applications, product architecture, and early-stage technology ventures.
          </p>
        </Section>

        <hr className="my-14 border-border" />

        {/* About — supporting detail, lighter weight */}
        <Section>
          <SectionLabel>About</SectionLabel>
          <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              I design and build practical AI-powered systems that integrate machine learning, data science, and statistical modeling with real operational workflows — technology that functions as <strong className="text-foreground/80">reliable infrastructure</strong> rather than isolated prototypes.
            </p>
            <p>
              Alongside engineering, I study business strategy, product development, and operational management — approaching technology from both a technical and business perspective. This includes research documentation and technical analysis of economic and data-driven systems.
            </p>
            <p>
              Currently pursuing <strong className="text-foreground/80">BCA in Artificial Intelligence</strong> while independently building software products and startup ideas.
            </p>
            <p>
              Long-term focus: building scalable technology systems and managing teams capable of growing them into sustainable companies.
            </p>
          </div>
        </Section>

        <hr className="my-14 border-border" />

        {/* Work Focus — bullet-style for scannability */}
        <Section>
          <SectionLabel>Work Focus</SectionLabel>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-5">
            {workFocus.map((item) => (
              <motion.div key={item.title} variants={fade} className="flex gap-3">
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/30" />
                <div>
                  <h3 className="text-sm font-semibold">{item.title}</h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Section>

        <hr className="my-14 border-border" />

        {/* Skills — structured with technical + non-technical */}
        <Section>
          <SectionLabel>Skills &amp; Interests</SectionLabel>

          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground/60">Technical</p>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-wrap gap-2">
            {technicalSkills.map((s) => (
              <motion.span
                key={s}
                variants={fade}
                className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
              >
                {s}
              </motion.span>
            ))}
          </motion.div>

          <p className="mb-3 mt-6 text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground/60">Interests &amp; Other</p>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-wrap gap-2">
            {otherSkills.map((s) => (
              <motion.span
                key={s}
                variants={fade}
                className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
              >
                {s}
              </motion.span>
            ))}
          </motion.div>
        </Section>

        {/* Footer */}
        <footer className="mt-20 border-t border-border pt-8 text-center text-[11px] text-muted-foreground/60">
          <p>© {new Date().getFullYear()} SabariNath SA</p>
          <p className="mt-0.5">AI Systems · Product Development · Technology Ventures</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
