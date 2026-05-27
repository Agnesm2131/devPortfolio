import styles from "./Skills.module.css";
import { 
  SiJavascript, SiTypescript, SiHtml5, SiNextdotjs, 
  SiVite, SiPython, SiDotnet, SiSqlite, SiMysql, SiRedis, SiTailwindcss
} from "react-icons/si";
import { FaJava, FaGithub, FaGitAlt } from "react-icons/fa";

const skills = [
  { name: "JavaScript", category: "Frontend", icon: <SiJavascript />, level: 90 },
  { name: "TypeScript", category: "Frontend", icon: <SiTypescript />, level: 85 },
  { name: "HTML5", category: "Frontend", icon: <SiHtml5 />, level: 95 },
  { name: "CSS / Tailwind", category: "Frontend", icon: <SiTailwindcss />, level: 90 },
  { name: "Next.js", category: "Frontend", icon: <SiNextdotjs />, level: 85 },
  { name: "Vite", category: "Frontend", icon: <SiVite />, level: 80 },
  { name: "Java", category: "Backend", icon: <FaJava />, level: 75 },
  { name: "Python", category: "Backend", icon: <SiPython />, level: 70 },
  { name: ".NET", category: "Backend", icon: <SiDotnet />, level: 65 },
  { name: "SQLite", category: "Database", icon: <SiSqlite />, level: 80 },
  { name: "MySQL", category: "Database", icon: <SiMysql />, level: 85 },
  { name: "Redis", category: "Database", icon: <SiRedis />, level: 60 },
  { name: "GitHub", category: "Tools", icon: <FaGithub />, level: 90 },
  { name: "Git", category: "Tools", icon: <FaGitAlt />, level: 85 }
];

export default function Skills({ dict }: { dict: any }) {
  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        <h2 className="section-title">{dict.title}</h2>
        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className={`${styles.skillCard} glass-panel`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className={styles.skillIcon}>
                <div className={styles.iconGlow}></div>
                <span className={styles.icon}>{skill.icon}</span>
              </div>
              <h4>{skill.name}</h4>
              <div className={styles.levelContainer}>
                <div className={styles.levelBar}>
                  <div 
                    className={styles.levelProgress} 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className={styles.levelText}>{skill.level}%</span>
              </div>
              <span className={styles.category}>{skill.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}