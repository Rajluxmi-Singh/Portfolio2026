import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Controlled zoom (stops at 1.35x)
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 1.35]);

  // Fade out once text fills viewport
  const opacity = useTransform(scrollYProgress, [0.55, 1], [1, 0]);

  // Slight upward movement for cinematic feel
  const y = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section id="hero" ref={ref} className="hero-section">
      <div className="hero-sticky">
        <motion.div
          style={{ scale, opacity, y }}
          className="hero-content"
        >
          <h1 className="hero-heading">
            Product, Design & Development
          </h1>

          <p className="hero-subtext">
            Portfolio 2026
          </p>

          <div className="hero-buttons">
            <a href="https://www.behance.net/rajluxmisingh224" 
              target="_blank"
              className="primary-btn">
              Explore My Behance
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-btn"
            >
              View Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}