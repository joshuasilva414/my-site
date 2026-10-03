import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, BookOpen, Check } from "lucide-react";
import { Action, ProductShell, Questions } from "@/components/marketing/shell";

export const metadata: Metadata = {
  title: "Bonsai — Give your curiosity a direction",
  description:
    "Explore Bonsai, an AI learning workspace with structured courses, visual curriculum graphs, adaptive textbooks, and whiteboard tutoring.",
  alternates: { canonical: "https://jilva.dev/bonsai" },
};
const source = "https://github.com/joshuasilva414/bonsai";

export default function BonsaiPage() {
  return (
    <ProductShell
      product="bonsai"
      action={{ href: source, label: "Explore the project" }}
    >
      <section className="bonsai-hero product-section">
        <div className="hero-copy">
          <h1>
            Give your curiosity
            <br />
            <em>a direction.</em>
          </h1>
          <p className="hero-description">
            There’s a lot you want to learn. Bonsai turns a learning goal into a
            connected course, with a textbook and an AI whiteboard tutor to help
            you work through it.
          </p>
          <div className="product-actions">
            <Action href={source}>Explore Bonsai on GitHub</Action>
            <Action href="#how-it-works" secondary>
              Follow a learning path
            </Action>
          </div>
          <p className="availability">An independent project in development.</p>
        </div>
        <div
          className="learning-path"
          aria-label="Illustrative course path for learning databases"
        >
          <div className="path-goal">
            <span className="small-label">A goal becomes a course</span>
            <p>
              “I want to understand
              <br />
              how databases work.”
            </p>
          </div>
          <div className="path-trunk" />
          <div className="path-topics">
            <div>
              <span className="topic-marker">
                <Check size={17} aria-hidden="true" />
              </span>
              <h3>Data models</h3>
              <p>Build the foundation</p>
            </div>
            <div className="topic-active">
              <span className="topic-marker">
                <BookOpen size={17} aria-hidden="true" />
              </span>
              <h3>Queries & indexes</h3>
              <p>Work through the ideas</p>
            </div>
            <div>
              <span className="topic-marker topic-open" />
              <h3>Transactions</h3>
              <p>Connect what comes next</p>
            </div>
          </div>
          <p className="example-caption">
            Illustrative curriculum · Your path starts with your goal
          </p>
        </div>
      </section>
      <section className="product-section bonsai-workflow" id="how-it-works">
        <div className="section-intro">
          <h2>
            See the connections.
            <br />
            <em>Build your understanding.</em>
          </h2>
          <p>
            A course gives your curiosity structure. Different ways to explore
            help you stay with an idea until it makes sense.
          </p>
        </div>
        <div className="learning-methods">
          <article>
            <span className="method-word">Map</span>
            <div>
              <h3>Know where you’re going.</h3>
              <p>
                AI-generated course outlines turn a broad topic into smaller
                concepts. Explore a visual curriculum graph to see how they fit
                together.
              </p>
            </div>
          </article>
          <article>
            <span className="method-word">Read</span>
            <div>
              <h3>Work through one idea at a time.</h3>
              <p>
                Adaptive textbook sessions give you a place to explore the
                material within the context of your course.
              </p>
            </div>
          </article>
          <article>
            <span className="method-word">Practice</span>
            <div>
              <h3>Think it through on the whiteboard.</h3>
              <p>
                Choose a subtopic and work with an AI tutor. Your board,
                conversation, and lesson state are saved so you can return to
                the attempt.
              </p>
            </div>
          </article>
        </div>
      </section>
      <section className="product-section product-showcase">
        <figure className="screenshot bonsai-screenshot">
          <Image
            src="/images/projects/bonsai-home.jpg"
            alt="Bonsai home screen inviting a learner to describe their goals and what they already know"
            width={618}
            height={540}
            sizes="(max-width: 760px) 90vw, 45vw"
          />
          <figcaption>Begin with what you want to learn</figcaption>
        </figure>
        <div className="showcase-copy">
          <h2>
            Start with a goal.
            <br />
            Return with questions.
          </h2>
          <p>
            Learning rarely happens in one sitting. Resume a whiteboard attempt
            with its conversation intact, or start fresh when you want another
            approach.
          </p>
          <p>
            Bonsai is an exploration of what a more personal learning workspace
            can be.
          </p>
          <a className="text-link" href={source}>
            See how Bonsai is being built{" "}
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
      </section>
      <Questions
        items={[
          {
            question: "Is there a public app I can use?",
            answer:
              "Bonsai is in development. The project repository is the current place to explore the implementation and local setup instructions; a public hosted app is not offered here.",
          },
          {
            question: "What does the whiteboard remember?",
            answer:
              "Each whiteboard attempt saves its board, conversation, and lesson state. You can resume the latest attempt or start a separate fresh attempt.",
          },
          {
            question: "Is the learning material generated by AI?",
            answer:
              "Yes. Bonsai uses AI to generate course outlines and support learning sessions. Generated explanations can be wrong, so check important details against reliable sources.",
          },
          {
            question: "Who is Bonsai for?",
            answer:
              "Bonsai is designed around self-directed learning: you bring a topic or goal and work through the concepts with structure, reading, and practice.",
          },
        ]}
      />
      <section className="product-close product-section">
        <h2>
          Make room for
          <br />
          <em>what you want to know.</em>
        </h2>
        <Action href={source}>Explore the Bonsai project</Action>
      </section>
    </ProductShell>
  );
}
