import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="experience-heading">Experience</h2>

        <div className="experience-grid">
          
          {/* Experience 1 */}
          <motion.div
            className="experience-banner"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="experience-logo">
              <img src="/fluxgen.png" alt="FluxGen logo" />
            </div>
            <div className="experience-left">
              <h3>Product Management Intern</h3>
              <span>FluxGen Sustainable Technologies (Aug 2025 - Feb 2026) </span>
            </div>

            <div className="experience-right">
              <p>
               Led cross-industry market research to shape the AquaGen Dashboard roadmap and translated user insights into product requirements for 3+ features, collaborating closely with engineering teams to enhance client engagement.
              </p>
            </div>
          </motion.div>

          {/* Experience 2 */}
          <motion.div
            className="experience-banner"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="experience-logo">
              <img src="/smc.png" alt="FluxGen logo" />
            </div>
            <div className="experience-left">
              <h3>UI/UX Intern</h3>
              <span>SMC Global Securities (June 2025 - July 2025)</span>
            </div>

            <div className="experience-right">
              <p>
                Improved UX for 3+ financial dashboards used by 10,000+ users, delivering high-fidelity Figma designs and streamlined developer handoffs across Agile sprints.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}