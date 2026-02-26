import AnimatedSection from "./AnimatedSection";

export default function About() {
  return (
    <AnimatedSection>
      <section id="about" className="about-section">
        <div className="about-grid">

          <div className="about-image">
            {/* Replace with your actual image */}
            <img src="./src/assets/photo.jpg" alt="Rajluxmi Singh" />
          </div>

          <div>
            <h2>About Me</h2>
            <p>
             I’m a B.Tech student with a strong interest in building meaningful digital products at the intersection of design, product strategy and technology.

My experience spans UI/UX design, product documentation and full-stack development projects. I’ve worked on enterprise dashboards, financial reporting systems, chatbot redesigns and web-based applications where I translated business requirements into structured, intuitive user experiences. Through these projects, I learned how to think beyond screens: defining user flows, identifying friction points, prioritizing features and aligning design decisions with business goals.

Alongside design and product exposure, I’ve developed technical projects using the MERN stack, which has strengthened my understanding of system architecture, APIs, databases and real-world implementation constraints. This cross-functional exposure helps me collaborate effectively with developers while maintaining a user-first perspective.

I’m naturally analytical, detail-oriented and curious. I enjoy breaking down complex problems, structuring ambiguity and building solutions that are not just functional, but purposeful.

My goal is to continue growing in roles where I can contribute to product development holistically understanding the user, defining the problem and helping build scalable digital solutions.
            </p>
          </div>

        </div>
      </section>
    </AnimatedSection>
  );
}