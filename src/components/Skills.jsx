import { FaCode, FaChartLine, FaUsers, FaLaptopCode } from "react-icons/fa";
import { MdDesignServices, MdLeaderboard } from "react-icons/md";
import { GiBrain } from "react-icons/gi";
import { HiOutlineLightBulb } from "react-icons/hi";

export default function Skills() {
  const skills = [
    { icon: <FaCode />, label: "Full-Stack Development" },
    { icon: <MdDesignServices />, label: "UI/UX & Figma" },
    { icon: <FaChartLine />, label: "Product Analytics" },
    { icon: <FaUsers />, label: "Leadership & Team Management" },
    { icon: <GiBrain />, label: "Strategic Thinking" },
    { icon: <HiOutlineLightBulb />, label: "Problem Solving" },
    { icon: <MdLeaderboard />, label: "A/B Testing & Research" },
    { icon: <FaLaptopCode />, label: "Clean Code Architecture" },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="skills-heading">
          What Makes Me Valuable?
        </h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-icon">{skill.icon}</div>
              <p>{skill.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}