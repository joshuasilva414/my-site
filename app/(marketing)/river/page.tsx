import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { Action, ProductShell, Questions } from "@/components/marketing/shell";

export const metadata: Metadata = {
  title: "River — A résumé grounded in your experience",
  description:
    "Organize your experience, connect it to a job, and tailor a résumé with AI assistance. Meet River, an evidence-backed résumé workspace.",
  alternates: { canonical: "https://jilva.dev/river" },
};

export default function RiverPage() {
  return (
    <ProductShell
      product="river"
      action={{ href: "https://river.jilva.dev", label: "Open River" }}
    >
      <section className="river-hero product-section">
        <div className="hero-copy">
          <h1>
            Your experience.
            <br />A clearer <em>story.</em>
          </h1>
          <p className="hero-description">
            A résumé should start with what you’ve actually done. River brings
            your evidence, job targets, and drafts into one workspace—so every
            application has a stronger foundation.
          </p>
          <div className="product-actions">
            <Action href="https://river.jilva.dev">Open River</Action>
            <Action href="#how-it-works" secondary>
              Explore the workflow
            </Action>
          </div>
          <p className="availability">
            A personal résumé workspace. Access may require an invitation.
          </p>
        </div>
        <div
          className="river-proof"
          aria-label="Illustrative journey from evidence to résumé"
        >
          <div className="proof-source">
            <span className="small-label">Your evidence</span>
            <p>Built a scheduling tool for a student organization.</p>
            <span className="evidence-tag">
              <Check size={13} aria-hidden="true" /> Your original experience
            </span>
          </div>
          <div className="proof-connector">
            <ArrowRight aria-hidden="true" />
            <span>Shape it for the role</span>
          </div>
          <div className="resume-paper">
            <div className="paper-heading">Alex Morgan</div>
            <div className="paper-subtitle">Software Engineer</div>
            <div className="paper-rule" />
            <h3>Selected experience</h3>
            <p>
              Built a scheduling tool that helped a student organization
              coordinate its events.
            </p>
            <h3>Relevant skills</h3>
            <p>Application development · Scheduling workflows</p>
            <div className="paper-rule faint" />
            <span>Illustrative résumé excerpt</span>
          </div>
        </div>
      </section>
      <section className="river-statement">
        <p>
          Good tailoring starts with <em>real evidence.</em>
        </p>
        <span>Keep the substance. Make the connection clear.</span>
      </section>
      <section className="product-section workflow" id="how-it-works">
        <div className="section-intro">
          <h2>
            From scattered experience
            <br />
            to a focused application.
          </h2>
          <p>Give your next résumé a repeatable process.</p>
        </div>
        <div className="workflow-columns">
          <article>
            <h3>Keep your evidence together.</h3>
            <p>
              Collect the experience and supporting material behind your work.
              Build a library you can return to when the next opportunity
              appears.
            </p>
          </article>
          <article>
            <h3>Understand the role.</h3>
            <p>
              Add a job description and review its requirements. Connect the
              role to relevant experience before you start rewriting.
            </p>
          </article>
          <article>
            <h3>Tailor, review, export.</h3>
            <p>
              Use AI assistance to develop your draft, review the language, and
              inspect the PDF before exporting your résumé.
            </p>
          </article>
        </div>
      </section>
      <section className="product-section product-showcase">
        <div className="showcase-copy">
          <h2>
            A workspace for
            <br />
            your next move.
          </h2>
          <p>
            Job targets, an evidence bank, reusable content, and résumé
            templates live together. Spend less effort moving between scattered
            documents.
          </p>
          <p>
            You decide what belongs in the final draft. AI suggestions are a
            starting point for your review.
          </p>
          <a className="text-link" href="https://river.jilva.dev">
            Visit the River workspace{" "}
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
        <figure className="screenshot river-screenshot">
          <Image
            src="/images/projects/river-workspace.jpg"
            alt="River workspace showing job targets, evidence bank, content library, and templates"
            width={618}
            height={616}
            sizes="(max-width: 760px) 90vw, 45vw"
          />
          <figcaption>River’s job-target workspace</figcaption>
        </figure>
      </section>
      <Questions
        items={[
          {
            question: "Does River write my résumé for me?",
            answer:
              "River helps organize your evidence and tailor drafts with AI assistance. You review the suggestions and decide what to include. Check every claim against your own experience before using it.",
          },
          {
            question: "How does AI access work?",
            answer:
              "River supports personal AI provider connections. You configure your own connection in the workspace; provider access and usage charges are separate.",
          },
          {
            question: "Can I export a PDF?",
            answer:
              "Yes. River supports résumé templates, PDF review, and export. Review the final document before sending it with an application.",
          },
          {
            question: "Can I start using it today?",
            answer:
              "Open River to see the current sign-in and access options. It is a personal project with controlled access, rather than an unrestricted public signup.",
          },
        ]}
      />
      <section className="product-close product-section">
        <h2>
          Give your experience
          <br />a place to come together.
        </h2>
        <Action href="https://river.jilva.dev">Open River</Action>
      </section>
    </ProductShell>
  );
}
