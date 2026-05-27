import styles from "./Projects.module.css";
import Link from "next/link";

export default function Projects({ dict }: { dict: any }) {
  const projects = [
    {
      title: dict.p1_title,
      description: dict.p1_desc,
      tech: ["Next.js", "TypeScript", "TailwindCSS", "MySQL"],
      link: "#"
    },
    {
      title: dict.p2_title,
      description: dict.p2_desc,
      tech: ["React", "Java", "Python", "Redis"],
      link: "#"
    },
    {
      title: dict.p3_title,
      description: dict.p3_desc,
      tech: ["Next.js", "TypeScript", "CSS Modules"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <h2 className="section-title">{dict.title}</h2>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div key={index} className={`${styles.projectCard} glass-panel`}>
              <div className={styles.projectContent}>
                <div className={styles.folderIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                  </svg>
                  <div className={styles.projectLinks}>
                    <Link href={project.link}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </Link>
                  </div>
                </div>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
              </div>
              <ul className={styles.techList}>
                {project.tech.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}