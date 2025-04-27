"use client";

import { useEffect } from "react";
import "./experience.css";

export default function Experience() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const timeline = document.querySelector(".timeline") as HTMLElement;
      const experienceWrapper = document.querySelector(
        ".experience-wrapper"
      ) as HTMLElement;
      const drawLine = document.querySelector(".draw-line") as HTMLElement;
      const defaultLine = document.querySelector(
        ".default-line"
      ) as HTMLElement;
      const items = document.querySelectorAll(
        ".timeline li"
      ) as NodeListOf<HTMLElement>;

      if (!timeline || !drawLine || !defaultLine || !experienceWrapper) return;

      const sectionTop = experienceWrapper.offsetTop;
      const sectionHeight = experienceWrapper.offsetHeight;
      const timelineHeight = defaultLine.offsetHeight;

      const mouseY = e.clientY + window.scrollY;

      const rawProgress = (mouseY - sectionTop) / sectionHeight;
      const slowedProgress = Math.min(Math.max(rawProgress, 0), 1); // Clamp between 0 and 1

      drawLine.style.height = `${slowedProgress * timelineHeight}px`;

      const drawLineBottom = drawLine.offsetTop + drawLine.offsetHeight;

      items.forEach((item) => {
        const itemTop = item.offsetTop;
        if (drawLineBottom > itemTop) {
          item.classList.add("in-view");
        } else {
          item.classList.remove("in-view");
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="experience-wrapper">
      <div className="timeline">
        <ul>
          <span className="default-line"></span>
          <span className="draw-line"></span>

          <li>
            <div className="content">
              <h2>Napses (MVP Rockets)</h2>
              <p>Full Stack Developer Intern (May 2024 – Present)</p>
              <p>
                Reusable NestJS templates, scalable APIs, PostgreSQL
                replication.
              </p>
            </div>
          </li>

          <li>
            <div className="content">
              <h2>KnG Group</h2>
              <p>Backend Developer Intern (Feb 2024 – Mar 2024)</p>
              <p>
                Rostering app, modular React UI components, API documentation.
              </p>
            </div>
          </li>

          <li>
            <div className="content">
              <h2>Slippy</h2>
              <p>Full Stack Developer Intern (Jul 2023 – Nov 2023)</p>
              <p>
                Microservices, third-party API integrations, real-time data
                handling.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
