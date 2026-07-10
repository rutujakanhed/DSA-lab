import { Compass, Goal, CheckCircle2, ShieldCheck, Cpu, Terminal } from 'lucide-react';

export default function About() {
  const objectives = [
    'Analyze temporal and spatial complexities of different structures.',
    'Formulate dynamic pointer systems for linear, hierarchical, and graph relations.',
    'Master recursive backtracking states and functional stack framing.',
    'Implement customized collision resolution schemes and lookup tables.',
    'Acquire standard conventions in industrial clean coding and documentations.'
  ];

  const facilities = [
    { title: 'Intel Core i7 Workstations', desc: '40 high-performance desktops with dual-boot systems running Linux (Ubuntu) and Windows.' },
    { title: 'Offline Reference Guides', desc: 'Complete local documentation databases for standard language runtimes and compilers.' },
    { title: 'Modern Compilers & IDEs', desc: 'Pre-configured gcc/g++, openJDK, Python v3, VS Code, CLion, and PyCharm environments.' },
    { title: 'Virtual Execution Monitors', desc: 'In-house profiling tools to audit hardware memory leakage and auxiliary frame boundaries.' }
  ];

  const rules = [
    'Silence must be strictly maintained within the laboratory workspace at all times.',
    'Daily session sign-in and sign-out in the central physical log register is mandatory.',
    'Storage drives or unauthorized external media are barred to maintain node integrity.',
    'Personal systems must be registered with the support desk before joining the subnet.',
    'Food, drinks, or generic liquids are strictly banned near computing terminals.',
    'Ensure all systems and peripheral displays are shut down cleanly before leaving.'
  ];

  const languages = [
    { name: 'C Language', badge: 'C', detail: 'Procedural structured programming, raw pointer manipulation, and direct malloc/free memory control.' },
    { name: 'C++ Language', badge: 'C++', detail: 'Object Oriented DSA, standard template library (STL), customized classes, and pointer links.' },
    { name: 'Java Platform', badge: 'Java', detail: 'Garbage-collected automatic reference handles, robust package boundaries, and multi-thread sync.' },
    { name: 'Python Platform', badge: 'Py', detail: 'Rapid prototyping, clean logical scripts, dynamic structures, and algorithmic visualization blocks.' }
  ];

  return (
    <main id="about-view">
      {/* Overview Block */}
      <section className="section" id="about-intro">
        <div className="container about-grid">
          <div className="about-img-box" id="about-visuals">
            <img 
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600&h=450" 
              alt="DSA Lab Workspace" 
              className="about-main-img" 
              id="about-main-photo"
            />
            <div className="about-floating-card" id="about-stats-card">
              <div className="floating-num">40+</div>
              <div className="floating-text">Active Workstations running 24/7</div>
            </div>
          </div>

          <div className="about-content" id="about-intro-text">
            <span className="section-tag">About Our Lab</span>
            <h2>Cultivating Rigorous Logical Foundations</h2>
            <p>
              The Data Structures and Algorithms Laboratory serves as the logical core of our engineering curriculum. Here, students translate theoretical complexity limits (Big O notation) into structured code that operates with maximum efficiency on modern physical machines.
            </p>
            <p>
              We believe code is an art form driven by scientific principles. From tracing pointers on paper boards to validating graphs with cycle detectors, we provide a holistic, hands-on environment.
            </p>

            <div className="about-highlights" id="about-sub-bullets">
              <div className="about-hl-item">
                <CheckCircle2 className="about-hl-icon" size={20} />
                <div className="about-hl-text">
                  <h4>Practical Profiling</h4>
                  <p>Students audit code with real CPU cycle checks.</p>
                </div>
              </div>
              <div className="about-hl-item">
                <CheckCircle2 className="about-hl-icon" size={20} />
                <div className="about-hl-text">
                  <h4>Peer Code Review</h4>
                  <p>Weekly modular audits encourage robust logic sharing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Panel */}
      <section className="section alt-bg" id="vision-mission-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Core Tenets</span>
            <h2 className="section-title">Vision & Mission</h2>
          </div>

          <div className="vision-mission-grid">
            <div className="vision-card" id="card-vision">
              <div className="vm-header">
                <Compass size={32} style={{ color: 'var(--secondary)' }} />
                <h3 className="vm-title">Our Vision</h3>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.975rem', lineHeight: '1.7' }}>
                To establish a premier educational repository for mathematical data modeling, cultivating globally competitive computer science graduates possessing meticulous logic, problem-solving prowess, and algorithmic precision.
              </p>
            </div>

            <div className="mission-card" id="card-mission">
              <div className="vm-header">
                <Goal size={32} style={{ color: 'var(--secondary)' }} />
                <h3 className="vm-title">Our Mission</h3>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.975rem', lineHeight: '1.7' }}>
                To empower students with extensive hands-on proficiency in building robust structures from raw pointers up, to cultivate continuous habits of rigorous runtime profiling, and to foster academic integrity through collaborative coding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lab Objectives Panel */}
      <section className="section" id="lab-objectives">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="section-header">
            <span className="section-tag">Aims</span>
            <h2 className="section-title">Laboratory Objectives</h2>
            <p className="section-subtitle">
              By completing the curriculum, our student engineers confidently achieve the following capabilities:
            </p>
          </div>

          <div className="rules-panel" style={{ padding: '32px' }} id="objectives-list-box">
            <ul className="rules-list" style={{ margin: 0 }}>
              {objectives.map((obj, idx) => (
                <li key={idx} id={`objective-item-${idx}`}>
                  <div className="rule-number">{idx + 1}</div>
                  <div className="rule-text" style={{ fontWeight: '500' }}>{obj}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Rules and Guidelines + Software Stack */}
      <section className="section alt-bg" id="rules-software-stack">
        <div className="container rules-languages-grid">
          {/* Rules List */}
          <div className="rules-panel" id="rules-guidelines-box">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <ShieldCheck size={28} style={{ color: 'var(--secondary)' }} />
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--primary)' }}>Laboratory Guidelines</h3>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              All students must adhere to these policies to ensure a safe, collaborative, and high-quality learning workspace:
            </p>
            <ul className="rules-list">
              {rules.map((rule, idx) => (
                <li key={idx} id={`rule-item-${idx}`}>
                  <div className="rule-number" style={{ backgroundColor: 'rgba(239, 68, 68, 0.08)', color: '#EF4444' }}>{idx + 1}</div>
                  <div className="rule-text">{rule}</div>
                </li>
              ))}
            </ul>
          </div>

          {/* Software Languages Stack */}
          <div className="languages-panel" id="supported-languages-box">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <Terminal size={28} style={{ color: 'var(--secondary)' }} />
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--primary)' }}>Languages & Platforms</h3>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                Students are trained to implement and test their logical solutions across multiple compilation environments:
              </p>
            </div>

            <div className="language-cards-grid">
              {languages.map((lang, idx) => (
                <div className="lang-card" key={idx} id={`lang-card-${idx}`}>
                  <div className="lang-logo">{lang.badge}</div>
                  <h4>{lang.name}</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '8px', lineHeight: '1.5' }}>
                    {lang.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Available */}
      <section className="section" id="lab-facilities">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Infrastructure</span>
            <h2 className="section-title">Laboratory Facilities Available</h2>
            <p className="section-subtitle">
              We provide state-of-the-art diagnostic resources to aid precision program diagnostics:
            </p>
          </div>

          <div className="highlights-grid">
            {facilities.map((fac, idx) => (
              <div className="highlight-card" key={idx} id={`facility-card-${idx}`}>
                <div className="highlight-icon-wrapper" style={{ backgroundColor: 'rgba(15, 76, 129, 0.06)' }}>
                  <Cpu size={24} />
                </div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{fac.title}</h3>
                <p style={{ fontSize: '0.9rem' }}>{fac.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
