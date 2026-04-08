import styles from './Skills.module.css';

const skillCategories = [
  {
    title: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'CSS / Animations', level: 88 },
      { name: 'Vue.js', level: 75 },
    ],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js / Express', level: 90 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'GraphQL', level: 78 },
    ],
  },
  {
    title: 'Tools & Cloud',
    icon: '☁️',
    skills: [
      { name: 'Docker / Kubernetes', level: 82 },
      { name: 'AWS / GCP', level: 80 },
      { name: 'Git / CI/CD', level: 92 },
      { name: 'Figma', level: 85 },
    ],
  },
];

const techStack = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL',
  'MongoDB', 'Docker', 'AWS', 'GraphQL', 'Redis', 'Prisma', 'Tailwind',
];

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.sectionLabel}>My Skills</p>
          <h2 className={styles.title}>Technical <span className={styles.accent}>Expertise</span></h2>
          <p className={styles.subtitle}>A comprehensive toolkit built over years of hands-on experience</p>
        </div>
        <div className={styles.categories}>
          {skillCategories.map((cat) => (
            <div key={cat.title} className={styles.categoryCard}>
              <div className={styles.categoryHeader}>
                <span className={styles.icon}>{cat.icon}</span>
                <h3>{cat.title}</h3>
              </div>
              <div className={styles.skillList}>
                {cat.skills.map((skill) => (
                  <div key={skill.name} className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillPercent}>{skill.level}%</span>
                    </div>
                    <div className={styles.skillBar}>
                      <div
                        className={styles.skillFill}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.techCloud}>
          <h3 className={styles.techTitle}>Technologies I Work With</h3>
          <div className={styles.techTags}>
            {techStack.map((tech) => (
              <span key={tech} className={styles.techTag}>{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
