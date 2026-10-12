import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Braces,
  ChartNoAxesCombined,
  Github,
  Linkedin,
  Mail,
  Menu,
  Network,
  ScanEye,
  Sparkles,
  Workflow,
  FileDown,
} from "lucide-react";

const projects = [
  {
    number: "01",
    type: "RETRIEVAL-AUGMENTED GENERATION · KNOWLEDGE GRAPHS",
    title: "PV-RAG",
    subtitle: "Temporal Legal Question Answering System",
    description:
      "A temporal-aware legal assistant designed to retrieve the right version of Indian laws. Combines semantic retrieval with a knowledge graph to provide more context-aware answers.",
    tags: ["SentenceTransformers", "ChromaDB", "FastAPI", "Groq", "NetworkX"],
    icon: Network,
    tone: "lavender",
    github: "https://github.com/Rithik40/PV-RAG",
  },
  {
    number: "02",
    type: "COMPUTER VISION · DEEP LEARNING",
    title: "Driver Drowsiness Detection",
    subtitle: "3D-CNN + LSTM with facial landmarks",
    description:
      "A video-based driver fatigue detection system combining spatiotemporal learning with facial landmark signals, plus Grad-CAM explainability and real-time webcam inference.",
    tags: ["PyTorch", "3D-CNN", "LSTM", "MediaPipe", "OpenCV"],
    icon: ScanEye,
    tone: "mint",
    github: "https://github.com/Rithik40/Driver-Drowsiness-",
  },
  {
    number: "03",
    type: "AUTOML · LLM AGENTS",
    title: "Autonomous ML Pipeline Agent",
    subtitle: "Dataset-to-model automation through Telegram",
    description:
      "An AI-powered agent that inspects datasets, infers classification or regression tasks, chooses preprocessing and candidate models, and produces detailed PDF evaluation reports.",
    tags: ["Groq Llama 3.3", "XGBoost", "LightGBM", "SMOTE", "Telegram"],
    icon: Workflow,
    tone: "peach",
    github: "https://github.com/Rithik40/AI-Agent-for-Autonomous-ML-Pipelines",
  },
  {
    number: "04",
    type: "PREDICTIVE ANALYTICS · EXPLAINABLE AI",
    title: "Gym Analytics Dashboard",
    subtitle: "Ensemble learning for calorie prediction",
    description:
      "An end-to-end predictive pipeline for estimating calories burned from physiological and workout data, with hyperparameter optimization and an interactive Flask dashboard.",
    tags: ["XGBoost", "Random Forest", "Optuna", "Flask", "Stacking"],
    icon: ChartNoAxesCombined,
    tone: "blue",
    github: "https://github.com/Rithik40/Gym-Analytics-Dashboard",
  },
];

const skillGroups = [
  { title: "Programming", skills: ["Python", "SQL"] },
  { title: "Machine Learning", skills: ["Supervised & Unsupervised Learning", "Feature Engineering", "SMOTE", "Explainable AI"] },
  { title: "Deep Learning", skills: ["PyTorch", "TensorFlow", "CNN", "LSTM", "Spatiotemporal Models"] },
  { title: "LLM & AI Systems", skills: ["RAG", "LangChain", "Knowledge Graphs", "Groq API"] },
  { title: "Data & Databases", skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "PostgreSQL", "MySQL", "MongoDB"] },
  { title: "Tools & Frameworks", skills: ["Flask", "FastAPI", "GitHub", "Jupyter", "VS Code", "Google Colab", "Kaggle", "Tavily API"] },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a href="#home" className="wordmark" aria-label="Rithik B home">
          rb<span>.</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
        </nav>
        <a className="header-contact" href="#contact">
          Let&apos;s connect <ArrowUpRight size={15} />
        </a>
      </header>

      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> OPEN TO INTERNSHIP OPPORTUNITIES</div>
          <h1>Hi, I&apos;m Rithik.<br /><span>I build intelligent</span><br />things with data.</h1>
          <p className="hero-intro">
            Data Science postgraduate exploring the intersection of machine learning,
            deep learning, and AI-powered systems — turning complex problems into useful tools.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="button button-dark">Explore my work <ArrowDownRight size={17} /></a>
            <a href="#contact" className="text-link">Get in touch <ArrowUpRight size={15} /></a>
          </div>
          <div className="hero-socials">
            <a href="https://github.com/Rithik40" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
            <a href="https://www.linkedin.com/in/rithik-balasubramanian-921a7426b/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
            <a href="mailto:rithikrithik222@gmail.com"><Mail size={17} /> Email</a>
          </div>
        </div>
        <div className="hero-art" aria-label="Abstract data science illustration">
          <div className="art-grid" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />
          <div className="art-core"><BrainCircuit size={57} strokeWidth={1.25} /></div>
          <div className="float-card card-top"><span className="mini-dot purple" /> Machine Learning <b>01</b></div>
          <div className="float-card card-right"><span className="mini-dot green" /> Neural Networks</div>
          <div className="float-card card-bottom"><Braces size={15} /> Build · Learn · Iterate</div>
          <div className="art-caption">CURIOUS BY DESIGN <span>✳</span></div>
        </div>
        <a className="scroll-note" href="#about"><span /> SCROLL TO EXPLORE</a>
      </section>

      <section className="intro-band">
        <div className="section-wrap intro-inner">
          <span className="section-kicker">A LITTLE ABOUT MY WORK</span>
          <p>
            I enjoy building systems that bring together <em>data, models, and real-world utility</em> —
            from temporal legal search to computer vision and automated machine learning.
          </p>
        </div>
      </section>

      <section className="section-wrap about-section" id="about">
        <div className="section-heading">
          <div><span className="section-kicker">01 / ABOUT</span><h2>Curiosity into<br /><span>working systems.</span></h2></div>
          <p className="section-lead">My focus is on practical AI: thoughtful pipelines, useful interfaces, and models built around the problem they need to solve.</p>
        </div>
        <div className="about-grid">
          <article className="about-note">
            <div className="note-icon"><Sparkles size={20} /></div>
            <h3>Problem-first thinking</h3>
            <p>I approach projects by understanding the task, shaping the data pipeline, and choosing methods that fit the use case.</p>
          </article>
          <article className="about-note">
            <div className="note-icon"><BrainCircuit size={20} /></div>
            <h3>Applied AI & ML</h3>
            <p>From ensemble models to RAG systems and spatiotemporal networks, I enjoy experimenting across the AI stack.</p>
          </article>
          <article className="about-note">
            <div className="note-icon"><Workflow size={20} /></div>
            <h3>End-to-end delivery</h3>
            <p>I connect model development with APIs, dashboards, and simple interfaces so experiments become usable tools.</p>
          </article>
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="section-wrap">
          <div className="section-heading projects-heading">
            <div><span className="section-kicker">02 / SELECTED WORK</span><h2>Projects with a<br /><span>purpose.</span></h2></div>
            <p className="section-lead">A selection of projects spanning intelligent retrieval, computer vision, automated ML, and predictive analytics.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <article className={`project-card ${project.tone}`} key={project.number}>
                  <div className="project-card-top"><span>{project.number} / FEATURED PROJECT</span><Icon size={21} strokeWidth={1.6} /></div>
                  <div className="project-illustration">
                    <div className="illustration-ring ring-a" /><div className="illustration-ring ring-b" />
                    <div className="illustration-center"><Icon size={39} strokeWidth={1.3} /></div>
                    <span className="illustration-label">{project.type.split(" · ")[0]}</span>
                  </div>
                  <div className="project-content">
                    <span className="project-type">{project.type}</span>
                    <h3>{project.title}</h3>
                    <h4>{project.subtitle}</h4>
                    <p>{project.description}</p>
                    <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                    <a className="project-link" href={project.github} target="_blank" rel="noreferrer">View on GitHub <ArrowUpRight size={16} /></a>
                  </div>
                </article>
              );
            })}
          </div>
          <p className="project-footnote">Explore each project through its GitHub repository.</p>
        </div>
      </section>

      <section className="section-wrap skills-section" id="skills">
        <div className="section-heading">
          <div><span className="section-kicker">03 / TOOLKIT</span><h2>Tools I use to<br /><span>make things work.</span></h2></div>
          <p className="section-lead">A growing toolkit across programming, modeling, data, and application development.</p>
        </div>
        <div className="skills-layout">
          <div className="skills-mark"><div className="skills-mark-inner"><Braces size={48} strokeWidth={1.1} /><span>TOOLS<br />& METHODS</span></div><div className="skills-orbit" /></div>
          <div className="skills-list">
            {skillGroups.map((group, index) => (
              <div className="skill-row" key={group.title}>
                <span className="skill-index">0{index + 1}</span>
                <h3>{group.title}</h3>
                <div className="skill-tags">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="education-section" id="education">
        <div className="section-wrap education-inner">
          <div><span className="section-kicker">04 / EDUCATION</span><h2>Learning is<br /><span>part of the process.</span></h2></div>
          <article className="education-card">
            <div className="education-year">2022 — 2027 <span>IN PROGRESS</span></div>
            <h3>Integrated M.Sc. Data Science</h3>
            <p className="institution">Amrita Vishwa Vidyapeetham</p>
            <div className="education-divider" />
            <p className="course-label">RELEVANT COURSEWORK</p>
            <div className="course-tags"><span>Machine Learning</span><span>Deep Learning</span><span>NLP</span><span>Data Visualisation</span><span>Big Data Analytics</span><span>DBMS</span><span>Cloud Computing</span></div>
            <div className="cgpa">CGPA <strong>7.42 <small>/ 10</small></strong></div>
          </article>
        </div>
      </section>

      <section className="cert-section section-wrap">
        <div className="cert-icon"><ChartNoAxesCombined size={23} /></div>
        <div><span className="section-kicker">CERTIFICATION</span><h3>Data Analytics with Excel</h3><p>Amrita Vishwa Vidyapeetham</p></div>
        <span className="cert-check">✓</span>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-wrap contact-inner">
          <span className="section-kicker">05 / WHAT&apos;S NEXT?</span>
          <h2>Have a problem<br />worth <span>solving?</span></h2>
          <p>I&apos;m looking for opportunities to learn, contribute, and build useful data-driven solutions with a team.</p>
          <a className="button button-light" href="mailto:rithikrithik222@gmail.com">Start a conversation <ArrowUpRight size={17} /></a>
          <div className="contact-bottom">
            <a href="mailto:rithikrithik222@gmail.com"><Mail size={16} /> rithikrithik222@gmail.com</a>
            <a href="https://github.com/Rithik40" target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a>
            <a href="https://www.linkedin.com/in/rithik-balasubramanian-921a7426b/" target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a>
            <a href="tel:+919047272668">+91 90472 72668</a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <a href="#home" className="wordmark">rb<span>.</span></a>
        <span>Designed with curiosity. Built with intention.</span>
        <span>© {new Date().getFullYear()} Rithik B</span>
      </footer>
    </main>
  );
}
