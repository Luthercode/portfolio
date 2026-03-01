import { useState, useEffect, useRef } from 'react';

/* ==========================================
   DATA
   ========================================== */
const projects = [
  {
    title: 'Controle Financeiro',
    description: 'Sistema completo de gestão financeira pessoal com dashboard interativo, gráficos mensais, categorização de transações e visualização de receitas vs despesas.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Vite'],
    features: ['Dashboard com resumo mensal', 'CRUD de transações', 'Filtros por data e categoria', 'Autenticação segura'],
    github: 'https://github.com/Luthercode/controle-financeiro',
    color: '#8b5cf6',
    icon: '💰'
  },
  {
    title: 'CRM de Clientes',
    description: 'CRM profissional com pipeline de vendas completo, gestão de clientes e interações, sistema de prioridades e dark mode toggle.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Axios'],
    features: ['Pipeline de vendas (6 estágios)', 'Timeline de interações', 'Filtros avançados e busca', 'Dark/Light mode'],
    github: 'https://github.com/Luthercode/crm-clientes',
    color: '#2563eb',
    icon: '👥'
  },
  {
    title: 'Gestão de Tarefas',
    description: 'API profissional com documentação Swagger completa, board Kanban, gestão de projetos e tarefas com filtros, paginação e segurança avançada.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Swagger', 'Helmet'],
    features: ['Swagger UI com 14 endpoints', 'Board Kanban interativo', 'Rate limiting e validação', 'Layout sidebar profissional'],
    github: 'https://github.com/Luthercode/gestao-tarefas',
    color: '#0d9488',
    icon: '📋'
  }
];

const skills = [
  { category: 'Frontend', items: ['React', 'JavaScript (ES6+)', 'HTML5 / CSS3', 'Vite', 'React Router', 'Responsive Design'] },
  { category: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'Swagger/OpenAPI', 'Middleware'] },
  { category: 'Database', items: ['MongoDB', 'Mongoose', 'Aggregation', 'Indexação'] },
  { category: 'Ferramentas', items: ['Git / GitHub', 'VS Code', 'npm', 'Postman', 'Terminal'] }
];

/* ==========================================
   COMPONENTS
   ========================================== */

function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { id: 'home', label: 'Início' },
    { id: 'about', label: 'Sobre' },
    { id: 'projects', label: 'Projetos' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contato' }
  ];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <button className="nav-brand" onClick={() => scrollTo('home')}>
          <span className="brand-code">&lt;</span>Luther<span className="brand-code">/&gt;</span>
        </button>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </button>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {links.map(link => (
            <button
              key={link.id}
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
              onClick={() => scrollTo(link.id)}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg-grid"></div>
      <div className="hero-content">
        <div className="hero-badge">Disponível para trabalho remoto 🇵🇹</div>
        <h1 className="hero-title">
          Olá, eu sou <span className="gradient-text">Anthony</span>
        </h1>
        <p className="hero-subtitle">
          Desenvolvedor <span className="typed-text">Full Stack</span>
        </p>
        <p className="hero-desc">
          Construo aplicações web modernas com React, Node.js e MongoDB.
          Focado em código limpo, APIs bem documentadas e interfaces intuitivas.
        </p>
        <div className="hero-buttons">
          <button className="btn-hero-primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            Ver Projetos
          </button>
          <a href="https://github.com/Luthercode" target="_blank" rel="noreferrer" className="btn-hero-secondary">
            GitHub ↗
          </a>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-value">3</span>
            <span className="hero-stat-label">Projetos</span>
          </div>
          <div className="hero-stat-divider"></div>
          <div className="hero-stat">
            <span className="hero-stat-value">14+</span>
            <span className="hero-stat-label">API Endpoints</span>
          </div>
          <div className="hero-stat-divider"></div>
          <div className="hero-stat">
            <span className="hero-stat-value">100%</span>
            <span className="hero-stat-label">Responsivo</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">
          <span className="section-number">01.</span> Sobre Mim
        </h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              Sou o <strong>Anthony</strong>, conhecido como <strong>Luther</strong> no mundo do código.
              Desenvolvedor Full Stack apaixonado por criar soluções web que fazem a diferença.
            </p>
            <p>
              Trabalho com o ecossistema <strong>JavaScript/Node.js</strong>, construindo
              desde APIs RESTful robustas com documentação Swagger até interfaces React
              modernas e responsivas. Cada projeto que entrego é pensado para ter
              código limpo, boa arquitetura e uma experiência de usuário impecável.
            </p>
            <p>
              Atualmente busco uma oportunidade <strong>remota (home office)</strong> em
              empresa portuguesa, onde posso contribuir com minha dedicação, capacidade
              de aprendizado rápido e vontade de crescer como profissional.
            </p>
            <div className="about-highlights">
              <div className="highlight">
                <span className="highlight-icon">🎯</span>
                <span>Foco em qualidade e boas práticas</span>
              </div>
              <div className="highlight">
                <span className="highlight-icon">🚀</span>
                <span>Aprendizado rápido e autodidata</span>
              </div>
              <div className="highlight">
                <span className="highlight-icon">🏠</span>
                <span>Disponível para trabalho remoto</span>
              </div>
              <div className="highlight">
                <span className="highlight-icon">🇵🇹</span>
                <span>Interesse em empresas portuguesas</span>
              </div>
            </div>
          </div>
          <div className="about-card">
            <div className="terminal-window">
              <div className="terminal-header">
                <span className="terminal-dot red"></span>
                <span className="terminal-dot yellow"></span>
                <span className="terminal-dot green"></span>
                <span className="terminal-title">luther@dev ~</span>
              </div>
              <div className="terminal-body">
                <p><span className="t-prompt">$</span> <span className="t-cmd">whoami</span></p>
                <p className="t-output">Anthony "Luther"</p>
                <p><span className="t-prompt">$</span> <span className="t-cmd">cat stack.txt</span></p>
                <p className="t-output">React · Node.js · Express · MongoDB</p>
                <p><span className="t-prompt">$</span> <span className="t-cmd">echo $GOAL</span></p>
                <p className="t-output">Remote job in Portugal 🇵🇹</p>
                <p><span className="t-prompt">$</span> <span className="t-cmd">ls projects/</span></p>
                <p className="t-output">controle-financeiro/</p>
                <p className="t-output">crm-clientes/</p>
                <p className="t-output">gestao-tarefas/</p>
                <p><span className="t-prompt">$</span> <span className="t-cursor">_</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <h2 className="section-title">
          <span className="section-number">02.</span> Projetos
        </h2>
        <p className="section-desc">
          Cada projeto foi construído do zero — backend, frontend e deploy — demonstrando
          diferentes habilidades e padrões de design.
        </p>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={index} className="project-card" style={{ '--accent': project.color }}>
              <div className="project-card-header">
                <span className="project-icon">{project.icon}</span>
                <span className="project-number">0{index + 1}</span>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-features">
                {project.features.map((f, i) => (
                  <div key={i} className="feature-item">
                    <span className="feature-check" style={{ color: project.color }}>✓</span>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              <div className="project-tech">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-tag">{t}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
                  Ver no GitHub ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">
          <span className="section-number">03.</span> Tecnologias
        </h2>
        <div className="skills-grid">
          {skills.map((group, index) => (
            <div key={index} className="skill-group">
              <h3 className="skill-category">{group.category}</h3>
              <ul className="skill-list">
                {group.items.map((item, i) => (
                  <li key={i} className="skill-item">
                    <span className="skill-bullet"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <h2 className="section-title">
          <span className="section-number">04.</span> Contato
        </h2>
        <div className="contact-content">
          <p className="contact-text">
            Estou aberto a oportunidades de trabalho remoto, especialmente em empresas portuguesas.
            Se quiser conversar sobre um projeto ou oportunidade, entre em contato!
          </p>
          <div className="contact-links">
            <a href="https://github.com/Luthercode" target="_blank" rel="noreferrer" className="contact-card">
              <span className="contact-icon">💻</span>
              <span className="contact-label">GitHub</span>
              <span className="contact-value">@Luthercode</span>
            </a>
            <a href="mailto:luther.dev@email.com" className="contact-card">
              <span className="contact-icon">📧</span>
              <span className="contact-label">Email</span>
              <span className="contact-value">Enviar mensagem</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="contact-card">
              <span className="contact-icon">💼</span>
              <span className="contact-label">LinkedIn</span>
              <span className="contact-value">Anthony Luther</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>Desenvolvido por <strong>"Luther"</strong> — {new Date().getFullYear()}</p>
        <p className="footer-sub">Construído com React + Vite</p>
      </div>
    </footer>
  );
}

/* ==========================================
   APP
   ========================================== */
function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'about', 'projects', 'skills', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar activeSection={activeSection} />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
