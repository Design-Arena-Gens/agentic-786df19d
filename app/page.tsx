export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>John Doe</h1>
          <p className="subtitle">Full Stack Developer & Creative Problem Solver</p>
          <a href="#projects" className="cta-button">View My Work</a>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a passionate full stack developer with expertise in building modern web applications.
                With a strong foundation in both frontend and backend technologies, I create seamless
                digital experiences that combine beautiful design with robust functionality.
              </p>
              <p style={{ marginTop: '1rem' }}>
                I love turning complex problems into simple, elegant solutions. When I'm not coding,
                you'll find me exploring new technologies, contributing to open source, or sharing
                knowledge with the developer community.
              </p>
            </div>
            <div className="skills-grid">
              <div className="skill-card">
                <h3>React</h3>
                <p>⚛️</p>
              </div>
              <div className="skill-card">
                <h3>Next.js</h3>
                <p>▲</p>
              </div>
              <div className="skill-card">
                <h3>TypeScript</h3>
                <p>📘</p>
              </div>
              <div className="skill-card">
                <h3>Node.js</h3>
                <p>🟢</p>
              </div>
              <div className="skill-card">
                <h3>Python</h3>
                <p>🐍</p>
              </div>
              <div className="skill-card">
                <h3>PostgreSQL</h3>
                <p>🐘</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section" style={{ background: 'var(--bg-alt)' }}>
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">01</div>
              <div className="project-content">
                <h3>E-Commerce Platform</h3>
                <p>A full-featured online shopping platform with real-time inventory management and secure payment processing.</p>
                <div className="project-tags">
                  <span className="tag">React</span>
                  <span className="tag">Node.js</span>
                  <span className="tag">PostgreSQL</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">02</div>
              <div className="project-content">
                <h3>Task Management App</h3>
                <p>Collaborative project management tool with real-time updates, team messaging, and progress tracking.</p>
                <div className="project-tags">
                  <span className="tag">Next.js</span>
                  <span className="tag">TypeScript</span>
                  <span className="tag">WebSocket</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">03</div>
              <div className="project-content">
                <h3>AI Content Generator</h3>
                <p>Intelligent content creation tool powered by machine learning to help writers overcome creative blocks.</p>
                <div className="project-tags">
                  <span className="tag">Python</span>
                  <span className="tag">FastAPI</span>
                  <span className="tag">OpenAI</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">04</div>
              <div className="project-content">
                <h3>Analytics Dashboard</h3>
                <p>Real-time data visualization platform with customizable widgets and advanced reporting capabilities.</p>
                <div className="project-tags">
                  <span className="tag">Vue.js</span>
                  <span className="tag">D3.js</span>
                  <span className="tag">MongoDB</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">05</div>
              <div className="project-content">
                <h3>Social Media API</h3>
                <p>RESTful API service handling millions of requests with robust authentication and rate limiting.</p>
                <div className="project-tags">
                  <span className="tag">Express</span>
                  <span className="tag">Redis</span>
                  <span className="tag">JWT</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">06</div>
              <div className="project-content">
                <h3>Fitness Tracker</h3>
                <p>Mobile-first progressive web app for tracking workouts, nutrition, and health metrics over time.</p>
                <div className="project-tags">
                  <span className="tag">React</span>
                  <span className="tag">PWA</span>
                  <span className="tag">Firebase</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <p style={{ fontSize: '1.1rem', color: 'var(--text-light)', marginBottom: '2rem' }}>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="contact-links">
              <a href="mailto:john@example.com" className="contact-link">
                <div className="contact-icon">✉️</div>
                <span>Email</span>
              </a>
              <a href="https://github.com" className="contact-link" target="_blank" rel="noopener noreferrer">
                <div className="contact-icon">🐙</div>
                <span>GitHub</span>
              </a>
              <a href="https://linkedin.com" className="contact-link" target="_blank" rel="noopener noreferrer">
                <div className="contact-icon">💼</div>
                <span>LinkedIn</span>
              </a>
              <a href="https://twitter.com" className="contact-link" target="_blank" rel="noopener noreferrer">
                <div className="contact-icon">🐦</div>
                <span>Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; 2024 John Doe. Built with Next.js and deployed on Vercel.</p>
        </div>
      </footer>
    </>
  )
}
