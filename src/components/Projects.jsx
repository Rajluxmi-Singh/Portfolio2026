import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Obscura",
      subtitle: "Accessible Android Launcher | React Native, TensorFlow, Node.js",
      description:
        "Engineered an AI-powered Android launcher designed for visually impaired users, integrating a VGG16 model to achieve 95% accuracy in detecting currency and text. Reduced navigation time by 40% through custom hot-corner gesture recognition and voice-guided UI flows, supported by Node.js backend services.",
    },
    {
      title: "SpendWise",
      subtitle: "Full-Stack Financial Dashboard | MERN Stack",
      description:
        "Developed a full-stack financial dashboard using the MERN stack, leveraging Python scripts to process transaction data and generate real-time budget visualizations. Built a secure, responsive REST API with Express.js for authentication and data retrieval, improving page load performance by 30%.",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="projects-heading">Selected Projects</h2>

        <div className="projects-wrapper">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <h2>{project.title}</h2>
              <h3>{project.subtitle}</h3>
              <p>{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}