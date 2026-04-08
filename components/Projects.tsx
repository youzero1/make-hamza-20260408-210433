import styles from './Projects.module.css';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce solution with real-time inventory, Stripe payments, and advanced analytics dashboard.',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    color: '#6c63ff',
    emoji: '🛒',
    live: '#',
    github: '#',
    featured: true,
  },
  {
    title: 'AI Chat Application',
    description: 'Real-time AI-powered chat app with OpenAI integration, WebSocket connections, and intelligent conversation management.',
    tags: ['React', 'Node.js', 'WebSocket', 'OpenAI'],
    color: '#ff6584',
    emoji: '🤖',
    live: '#',
    github: '#',
    featured: true,
  },
  {
    title: 'Project Management Tool',
    description: 'Collaborative project management platform with drag-and-drop boards, real-time updates, and team analytics.',
    tags: ['Vue.js', 'GraphQL', 'MongoDB', 'Docker'],
    color: '#43e97b',
    emoji: '📊',
    live: '#',
    github: '#',
    featured: true,
  },
  {
    title: 'Design System',
    description: 'Comprehensive component library with 50+ components, dark/light themes, and full accessibility support.',
    tags: ['React', 'Storybook', 'CSS', 'TypeScript'],
    color: '#f6d365',
    emoji: '🎨',
    live: '#',
    github: '#',
    featured: false,
  },
  {
    title: 'Crypto Dashboard',
    description: 'Real-time cryptocurrency tracking dashboard with portfolio management and price alerts.',
    tags: ['React', 'WebSocket', 'Chart.js', 'REST API'],
    color: '#a78bfa',
    emoji: '💰',
    live: '#',
    github: '#',
    featured: false,
  },
  {
    title: 'Social Media App',
    description: 'Modern social platform with posts, stories, real-time messaging, and content recommendation engine.',
    tags: ['Next.js', 'Prisma', 'Redis', 'AWS'],
    color: '#fb923c',
    emoji: '📱',
    live: '#',
    github: '#',
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.sectionLabel}>Portfolio</p>
          <h2 className={styles.title}>Featured <span className={styles.accent}>Projects</span></h2>
          <p className={styles.subtitle}>A selection of my recent work and personal projects</p>
        </div>
        <div className={styles.grid}>
          {projects.map((project) => (
            <div key={project.title} className={`${styles.card} ${project.featured ? styles.featured : ''}`}>
              <div className={styles.cardTop} style={{ background: `linear-gradient(135deg, ${project.color}22, ${project.color}11)`, borderColor: `${project.color}33` }}>
                <span className={styles.emoji}>{project.emoji}</span>
                <div className={styles.links}>
                  <a href={project.live} className={styles.link} aria-label="Live demo">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                  <a href={project.github} className={styles.link} aria-label="GitHub">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.description}</p>
                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag} style={{ color: project.color, borderColor: `${project.color}44`, background: `${project.color}11` }}>{tag}</span>
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
