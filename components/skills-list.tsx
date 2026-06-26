"use client";

import { measureNaturalWidth, prepareWithSegments } from "@chenglou/pretext";
import { Fragment, useLayoutEffect, useRef, useState } from "react";

const SKILLS = [
  "AI Developer Tools",
  "Relational Database Concepts",
  "Advanced Python",
  "Advanced Java",
  "HTML",
  "CSS",
  "JavaScript",
  "Enterprise Software Engineering",
  "Systems Programming",
  "TypeScript",
  "C",
  "Rust",
  "C#",
  "Go",
  "PostgreSQL",
  "Web Technologies",
  "UI on Mobile Platforms",
  "Scikit-Learn",
  "Pandas",
  "NumPy",
  "Git-Based Collaboration",
  "Technical Documentation",
  "TensorFlow",
  "PyTorch",
  "Project Management",
  "Developer Advocacy Experience",
  "React.js",
  "Next.js",
  "FastAPI",
  "TailwindCSS",
  "CI/CD Platforms",
  "API Design",
  "Cloud Platforms / Containerization",
] as const;

const DOT_WIDTH_EM = 1.25;
const WIDTH_FUDGE_PX = 2;

function canvasFont(element: HTMLElement) {
  const style = getComputedStyle(element);
  return `${style.fontStyle} ${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
}

function lineWidth(
  line: readonly string[],
  measure: (text: string) => number,
  dotWidth: number,
) {
  return line.reduce(
    (total, skill, index) =>
      total + (index > 0 ? dotWidth : 0) + measure(skill),
    0,
  );
}

function packSkills(
  skills: readonly string[],
  maxWidth: number,
  measure: (text: string) => number,
  dotWidth: number,
): string[][] {
  const lines: string[][] = [];
  let currentLine: string[] = [];

  for (const skill of skills) {
    const candidate = [...currentLine, skill];

    if (
      currentLine.length > 0 &&
      lineWidth(candidate, measure, dotWidth) > maxWidth
    ) {
      lines.push(currentLine);
      currentLine = [skill];
    } else {
      currentLine = candidate;
    }
  }

  if (currentLine.length > 0) {
    lines.push(currentLine);
  }

  return lines;
}

function linesEqual(a: string[][], b: string[][]) {
  if (a.length !== b.length) return false;
  return a.every((line, index) => {
    const other = b[index];
    return (
      line.length === other.length &&
      line.every((skill, skillIndex) => skill === other[skillIndex])
    );
  });
}

function SkillLine({ line }: { line: string[] }) {
  return (
    <div className="flex items-center justify-center whitespace-nowrap">
      {line.map((skill, index) => (
        <Fragment key={`${index}-${skill}`}>
          {index > 0 && (
            <span
              aria-hidden
              className="inline-flex size-[1.25em] shrink-0 items-center justify-center"
            >
              <span className="size-[0.25em] rounded-full bg-foreground/60" />
            </span>
          )}
          <span>{skill}</span>
        </Fragment>
      ))}
    </div>
  );
}

export default function SkillsList() {
  const containerRef = useRef<HTMLDivElement>(null);
  const widthCacheRef = useRef<Map<string, number>>(new Map());
  const fontRef = useRef("");
  const [lines, setLines] = useState<string[][] | null>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let frame = 0;

    const update = () => {
      const { width } = container.getBoundingClientRect();
      if (width <= 0) return;

      const font = canvasFont(container);
      const fontSizePx = Number.parseFloat(
        getComputedStyle(container).fontSize,
      );
      const dotWidth = fontSizePx * DOT_WIDTH_EM;
      const maxWidth = Math.max(0, width - WIDTH_FUDGE_PX);

      if (fontRef.current !== font) {
        fontRef.current = font;
        widthCacheRef.current.clear();
      }

      const cache = widthCacheRef.current;
      const measure = (text: string) => {
        const cached = cache.get(text);
        if (cached !== undefined) return cached;

        const measured = measureNaturalWidth(prepareWithSegments(text, font));
        cache.set(text, measured);
        return measured;
      };

      const nextLines = packSkills(SKILLS, maxWidth, measure, dotWidth);
      setLines((previous) =>
        previous && linesEqual(previous, nextLines) ? previous : nextLines,
      );
    };

    const scheduleUpdate = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    scheduleUpdate();

    const observer = new ResizeObserver(scheduleUpdate);
    observer.observe(container);

    document.fonts.addEventListener("loadingdone", scheduleUpdate);
    void document.fonts.ready.then(scheduleUpdate);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      document.fonts.removeEventListener("loadingdone", scheduleUpdate);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="space-y-2 text-lg leading-normal text-pretty"
    >
      {lines?.map((line, index) => (
        <SkillLine key={index} line={line} />
      ))}
    </div>
  );
}
