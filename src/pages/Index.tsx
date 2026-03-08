import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com", label: "X / Twitter" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
];

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col items-center bg-background px-6 py-20 text-foreground sm:py-32">
      {/* Hero */}
      <section className="flex flex-col items-center gap-6">
        <div className="h-36 w-36 overflow-hidden rounded-full border border-border sm:h-44 sm:w-44">
          <img
            src="/placeholder.svg"
            alt="Profile photo"
            className="h-full w-full object-cover grayscale"
          />
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Alex Morgan
          </h1>
          <p className="mt-2 text-base text-muted-foreground sm:text-lg">
            Founder &amp; CEO at Acme Labs
          </p>
        </div>
      </section>

      <Separator className="my-12 max-w-xs" />

      {/* About */}
      <section className="max-w-md text-center">
        <h2 className="mb-4 text-lg font-semibold tracking-tight sm:text-xl">
          About Me
        </h2>
        <p className="leading-relaxed text-muted-foreground">
          I build products that simplify complex problems. Previously engineering
          at Big&nbsp;Co, now focused on making developer tools more accessible.
          When I'm not coding, I'm probably hiking or reading about space
          exploration.
        </p>
      </section>

      <Separator className="my-12 max-w-xs" />

      {/* Social Links */}
      <nav className="flex gap-6" aria-label="Social links">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Icon className="h-5 w-5" />
          </a>
        ))}
      </nav>

      {/* Footer */}
      <footer className="mt-auto pt-20 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Alex Morgan
      </footer>
    </div>
  );
};

export default Index;
