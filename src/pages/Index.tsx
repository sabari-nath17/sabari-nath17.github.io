import { Github, Linkedin, Instagram, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import profileImg from "@/assets/profile.jpeg";

const workFocus = [
  {
    title: "AI Systems Development",
    desc: "Designing applied machine learning solutions integrated into real software systems.",
  },
  {
    title: "Product Architecture",
    desc: "Developing application structures that efficiently integrate APIs, models, and backend services.",
  },
  {
    title: "Startup Development",
    desc: "Exploring and validating early-stage technology products.",
  },
  {
    title: "Operational Automation",
    desc: "Creating software systems that improve workflow efficiency and operational decision-making.",
  },
];

const skills = [
  { title: "Marketing & Product Positioning", desc: "Understanding how products are introduced, communicated, and adopted in markets." },
  { title: "Business Management", desc: "Interest in operational strategy, organizational structure, and team coordination." },
  { title: "Communication", desc: "Presenting technical and product ideas clearly." },
  { title: "Photography", desc: "Visual composition and content creation." },
  { title: "Video Editing", desc: "Producing and structuring visual content." },
  { title: "Stock Market & Trading", desc: "Interest in financial markets, trading strategies, and market behavior analysis." },
];

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/sabarinath17", label: "LinkedIn", display: "linkedin.com/in/sabarinath17" },
  { icon: Github, href: "https://github.com/sabari-nath17", label: "GitHub", display: "github.com/sabari-nath17" },
  { icon: Instagram, href: "https://instagram.com/sabbaariiii", label: "Instagram", display: "instagram.com/sabbaariiii" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-2xl px-6 py-20 sm:py-28">

        {/* Hero */}
        <section className="flex flex-col items-center text-center">
          <div className="mb-8 h-40 w-40 overflow-hidden rounded-full border border-border sm:h-48 sm:w-48">
            <img
              src={profileImg}
              alt="SabariNath SA"
              className="h-full w-full object-cover grayscale"
            />
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            SabariNath SA
          </h1>
          <p className="mt-2 text-base font-medium text-muted-foreground sm:text-lg">
            AI Systems &amp; Product Builder
          </p>
          <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground">
            Focused on building applied AI systems and software designed to improve real-world operations. Work centers on machine learning applications, product architecture, and early-stage technology ventures.
          </p>
          <p className="mt-4 flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" />
            Based in Kerala, India.
          </p>
        </section>

        <Separator className="my-16" />

        {/* About */}
        <section>
          <h2 className="mb-6 text-xl font-semibold tracking-tight">About</h2>
          <div className="space-y-4 leading-relaxed text-muted-foreground">
            <p>
              I work on designing and building practical AI-powered systems that integrate machine learning with real operational workflows.
            </p>
            <p>
              My interest lies in developing technology that functions as reliable infrastructure rather than isolated prototypes. This involves combining machine learning, backend systems, and product thinking to create solutions that are efficient, scalable, and usable in real environments.
            </p>
            <p>
              Alongside engineering, I actively study business strategy, product development, and operational management, allowing me to approach technology not only from a technical perspective but also from a business and systems viewpoint.
            </p>
            <p>
              Currently pursuing BCA in Artificial Intelligence while independently building and experimenting with software products and startup ideas.
            </p>
            <p>
              My long-term focus is building scalable technology systems and managing teams capable of executing and growing them into sustainable companies.
            </p>
          </div>
        </section>

        <Separator className="my-16" />

        {/* Work Focus */}
        <section>
          <h2 className="mb-8 text-xl font-semibold tracking-tight">Work Focus</h2>
          <div className="grid gap-8 sm:grid-cols-2">
            {workFocus.map((item) => (
              <div key={item.title}>
                <h3 className="mb-1.5 text-sm font-semibold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <Separator className="my-16" />

        {/* Skills & Interests */}
        <section>
          <h2 className="mb-8 text-xl font-semibold tracking-tight">Skills &amp; Interests</h2>
          <div className="grid gap-8 sm:grid-cols-2">
            {skills.map((item) => (
              <div key={item.title}>
                <h3 className="mb-1.5 text-sm font-semibold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <Separator className="my-16" />

        {/* Connect */}
        <section>
          <h2 className="mb-8 text-xl font-semibold tracking-tight">Connect</h2>
          <div className="space-y-4">
            {socials.map(({ icon: Icon, href, label, display }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span className="text-sm">{display}</span>
              </a>
            ))}
          </div>
          <p className="mt-6 flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" />
            Kerala, India
          </p>
        </section>

        {/* Footer */}
        <footer className="mt-20 border-t border-border pt-8 text-center text-xs text-muted-foreground">
          <p>© SabariNath SA</p>
          <p className="mt-1">AI Systems · Product Development · Technology Ventures</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
