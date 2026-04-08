import styles from './Experience.module.css';

const experiences = [
  {
    role: 'Senior Full Stack Developer',
    company: 'TechCorp Inc.',
    period: '2022 – Present',
    description: 'Led development of microservices architecture serving 2M+ users. Built React-based design system adopted across 5 product teams. Improved system performance by 40%.',
    technologies: ['Next.js', 'Node.js', 'Kubernetes', 'PostgreSQL'],
    type: 'work',
  },
  {
    role: 'Full Stack Developer',
    company: 'StartupXYZ',
    period: '2020 – 2022',
    description: 'Built scalable SaaS platform from scratch. Implemented real-time features using WebSockets. Reduced deployment time by 60% through CI/CD pipeline optimization.',
    technologies: ['React', 'Express', 'MongoDB', 'Docker'],
    type: 'work',
  },
  {
    role: 'Frontend Developer',
    company: 'Digital Agency Co.',
    period: '2019 – 2020',
    description: 'Created responsive web experiences for 15+ clients. Specialized in animations and performance optimization. Delivered projects 20% ahead of schedule on average.',
    technologies: ['Vue.js', 'SASS', 'JavaScript', 'Webpack'],
    type: 'work',
  },
  {
    role: 'B.S. Computer Science',
    company: 'State University',
    period: '2015 – 2019',
    description: 'Graduated with honors. Specialized in Software Engineering and Data Structures. Thesis on distributed systems and performance optimization.',
    technologies: ['Java', 'Python', 'Algorithms', 'Databases'],
    type: 'education',
  },
];

export default function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.sectionLabel}>Journey</p>
          <h2 className={styles.title}>Work <span className={styles.accent}>Experience</span></h2>
          <p className={styles.subtitle}>My professional path and educational background</p>
        </div>
        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div key={index} className={`${styles.item} ${exp.type === 'education' ? styles.education : ''}`}>
              <div className={styles.marker}>
                <div className={styles.dot}>
                  {exp.type === 'education' ? '🎓' : '💼'}
                </div>
                {index < experiences.length - 1 && <div className={styles.line} />}
              </div>
              <div className={styles.content}>
                <div className={styles.meta}>
                  <span className={styles.period}>{exp.period}</span>
                  <span className={styles.type}>{exp.type === 'education' ? 'Education' : 'Work'}</span>
                </div>
                <h3 className={styles.role}>{exp.role}</h3>
                <p className={styles.company}>{exp.company}</p>
                <p className={styles.description}>{exp.description}</p>
                <div className={styles.techs}>
                  {exp.technologies.map((tech) => (
                    <span key={tech} className={styles.tech}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
