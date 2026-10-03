import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Mic } from "lucide-react";
import { Action, ProductShell, Questions } from "@/components/marketing/shell";

export const metadata: Metadata = {
  title: "Mythic AI — An adventure you can talk to",
  description:
    "Meet Mythic AI, a voice-driven tabletop roleplaying prototype with an AI dungeon master, generated worlds, and interruptible conversations.",
  alternates: { canonical: "https://jilva.dev/mythic-ai" },
};
const source = "https://github.com/joshuasilva414/mythic-ai";

export default function MythicPage() {
  return (
    <ProductShell
      product="mythic-ai"
      action={{ href: source, label: "Explore the prototype" }}
    >
      <section className="mythic-hero product-section">
        <div className="hero-copy">
          <h1>
            An adventure
            <br />
            you can <em>talk to.</em>
          </h1>
          <p className="hero-description">
            Enter a world with an AI dungeon master. Speak your next move, talk
            to its characters, and take part in a story that responds to you.
          </p>
          <div className="product-actions">
            <Action href={source}>Explore Mythic AI</Action>
            <Action href="#how-it-works" secondary>
              Inside the adventure
            </Action>
          </div>
          <p className="availability">
            A voice-driven tabletop roleplaying prototype.
          </p>
        </div>
        <div className="story-scene">
          <div className="scene-ornament" aria-hidden="true">
            <span />
            <svg viewBox="0 0 100 100">
              <path d="M50 3 93 26 93 74 50 97 7 74 7 26Z M50 3 28 37 7 26 M50 3 72 37 93 26 M28 37 72 37 50 76Z M7 74 28 37 50 97 72 37 93 74 M7 74 50 76 93 74" />
            </svg>
            <span />
          </div>
          <p className="scene-setting">The city of Aurelion</p>
          <blockquote>
            “The city glows along the Tidefields as sunset seals the canals in
            molten gold.”
          </blockquote>
          <div className="spoken-action">
            <Mic size={18} aria-hidden="true" />
            <p>“I walk down to the water.”</p>
            <div className="voice-wave" aria-hidden="true">
              {[12, 22, 35, 17, 29, 42, 20, 32, 14].map((height, index) => (
                <i key={index} style={{ height }} />
              ))}
            </div>
          </div>
          <p className="example-caption">
            Illustrative exchange inspired by the prototype
          </p>
        </div>
      </section>
      <section className="mythic-statement">
        <p>
          You bring the next move.
          <br />
          <em>The dungeon master answers.</em>
        </p>
      </section>
      <section className="product-section mythic-workflow" id="how-it-works">
        <div className="section-intro">
          <h2>
            At the table,
            <br />
            conversation comes first.
          </h2>
          <p>
            Mythic AI explores a simple idea: a roleplaying adventure should
            feel like a conversation you can join.
          </p>
        </div>
        <div className="workflow-columns">
          <article>
            <h3>A world to step into.</h3>
            <p>
              Generated world settings establish the backdrop for your campaign.
              The dungeon master uses that setting to guide the adventure.
            </p>
          </article>
          <article>
            <h3>A voice in the story.</h3>
            <p>
              Speak directly to the dungeon master and characters. Voice input
              and spoken responses bring the exchange beyond a text box.
            </p>
          </article>
          <article>
            <h3>Room to interrupt.</h3>
            <p>
              Change direction while the dungeon master is speaking. The
              prototype supports interrupting a response so you can take your
              turn.
            </p>
          </article>
        </div>
      </section>
      <section className="product-section mythic-showcase">
        <div className="section-intro">
          <h2>Meet the dungeon master.</h2>
          <p>
            A look inside the working prototype: voice controls, a campaign
            conversation, and a story waiting for your response.
          </p>
        </div>
        <figure className="screenshot mythic-screenshot">
          <Image
            src="/images/projects/mythic-ai.png"
            alt="Mythic AI prototype with microphone and playback controls and the dungeon master's spoken introduction to Aurelion"
            width={2048}
            height={1117}
            sizes="90vw"
          />
          <figcaption>Actual prototype interface</figcaption>
        </figure>
      </section>
      <Questions
        items={[
          {
            question: "Can I play it now?",
            answer:
              "Mythic AI is a prototype. Its repository is available to explore the implementation and setup; this page does not offer a hosted game.",
          },
          {
            question: "Is this an official Dungeons & Dragons product?",
            answer:
              "No. Mythic AI is an independent tabletop roleplaying experiment inspired by D&D. It is not affiliated with or endorsed by Wizards of the Coast.",
          },
          {
            question: "Does it support voice?",
            answer:
              "The prototype includes voice input, spoken dungeon-master responses, and response interruption. Your local setup needs the services and configuration used by the project.",
          },
          {
            question: "Is it a complete tabletop rules engine?",
            answer:
              "The project focuses on AI-guided storytelling and voice interaction. It should not be treated as a complete or rules-accurate replacement for a tabletop game system.",
          },
        ]}
      />
      <section className="product-close product-section">
        <h2>
          Every adventure starts
          <br />
          with <em>a first move.</em>
        </h2>
        <Action href={source}>Explore the Mythic AI prototype</Action>
        <a className="text-link" href="/projects">
          More projects by Joshua Silva{" "}
          <ArrowRight size={17} aria-hidden="true" />
        </a>
      </section>
    </ProductShell>
  );
}
