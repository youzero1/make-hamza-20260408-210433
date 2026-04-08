import styles from './About.module.css';

export default function About() {
  const stats = [
    { value: '5+', label: 'Years Experience' },
    { value: '50+', label: 'Projects Completed' },
    { value: '30+', label: 'Happy Clients' },
    { value: '10+', label: 'Awards Won' },
  ];

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <div className={styles.imagePlaceholder}>
            <div className={styles.avatarCircle}>
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" width="120" height="120">
                <circle cx="50" cy="35" r="22" fill="rgba(108,99,255,0.6)" />
                <ellipse cx="50" cy="85" rx="35" ry="22" fill="rgba(108,99,255,0.4)" />
              </svg>
            </div>
            <div className={styles.floatingBadge1}>React</div>
            <div className={styles.floatingBadge2}>Node.js</div>
            <div className={styles.floatingBadge3}>TypeScript</div>
          </div>
        </div>
        <div className={styles.content}>
          <p className={styles.sectionLabel}>About Me</p>
          <h2 className={styles.title}>Crafting Digital <span className={styles.accent}>Experiences</span> with Passion</h2>
          <p className={styles.text}>
            I&apos;m a full-stack developer with over 5 years of experience building scalable web applications
            and beautiful user interfaces. I specialize in React, Next.js, Node.js, and TypeScript.
          </p>
          <p className={styles.text}>
            My journey started with a fascination for creating things on the internet. Today, I blend
            technical expertise with creative thinking to build products that are both functional and visually stunning.
          </p>
          <div className={styles.stats}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.stat}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
          <a href="#contact" className={styles.btn}>Let&apos;s Work Together</a>
        </div>
      </div>
    </section>
  );
}
