import { ArrowRight, Code, Cpu, Award, GraduationCap, CheckCircle2 } from 'lucide-react';

interface HomeProps {
  setCurrentPage: (page: string) => void;
}

export default function Home({ setCurrentPage }: HomeProps) {
  return (
    <main id="home-view">
      {/* Hero Banner Section */}
      <section className="hero-section" id="home-hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="hero-badge" id="hero-badge-tag">
              <GraduationCap size={16} />
              <span>Academic Year 2026-2027</span>
            </div>
            <h1>
              Master Data Structures <br />
              <span>& Algorithms</span>
            </h1>
            <p>
              Deepen your structural reasoning, analyze computational complexities, and build efficient solutions to complex algorithmic problems in C, C++, Java, and Python.
            </p>
            <div className="hero-cta">
              <button 
                onClick={() => setCurrentPage('experiments')} 
                className="btn-primary"
                id="hero-cta-primary"
              >
                <span>Explore Experiments</span>
                <ArrowRight size={18} />
              </button>
              <button 
                onClick={() => setCurrentPage('about')} 
                className="btn-outline"
                id="hero-cta-outline"
              >
                <span>Lab Overview</span>
              </button>
            </div>
          </div>

          <div className="hero-visual" id="hero-visual-panel">
            <div className="code-mockup" id="hero-code-box">
              <div className="code-header">
                <div className="code-dots">
                  <div className="code-dot red"></div>
                  <div className="code-dot yellow"></div>
                  <div className="code-dot green"></div>
                </div>
                <div className="code-title">binary_search.cpp</div>
              </div>
              <div className="code-line"><span className="code-keyword">#include</span> <span className="code-string">&lt;iostream&gt;</span></div>
              <div className="code-line"><span className="code-keyword">using namespace</span> std;</div>
              <div className="code-line"></div>
              <div className="code-line"><span className="code-keyword">int</span> <span className="code-function">binarySearch</span>(<span className="code-keyword">int</span> arr[], <span className="code-keyword">int</span> x, <span className="code-keyword">int</span> n) &#123;</div>
              <div className="code-line">  <span className="code-keyword">int</span> l = <span className="code-string">0</span>, r = n - <span className="code-string">1</span>;</div>
              <div className="code-line">  <span className="code-keyword">while</span> (l &lt;= r) &#123;</div>
              <div className="code-line">    <span className="code-keyword">int</span> m = l + (r - l) / <span className="code-string">2</span>;</div>
              <div className="code-line">    <span className="code-keyword">if</span> (arr[m] == x) <span className="code-keyword">return</span> m;</div>
              <div className="code-line">    <span className="code-keyword">if</span> (arr[m] &lt; x) l = m + <span className="code-string">1</span>;</div>
              <div className="code-line">    <span className="code-keyword">else</span> r = m - <span className="code-string">1</span>;</div>
              <div className="code-line">  &#125;</div>
              <div className="code-line">  <span className="code-keyword">return</span> -<span className="code-string">1</span>; <span className="code-comment">// Not Found</span></div>
              <div className="code-line">&#125;</div>
            </div>
          </div>
        </div>
      </section>

      {/* Lab Highlights Section */}
      <section className="section" id="lab-highlights">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Key Features</span>
            <h2 className="section-title">Why Core DSA Matters</h2>
            <p className="section-subtitle">
              Developing a sound grasp of memory configurations, pointers, and traversal recursion underpins efficient modern systems engineering.
            </p>
          </div>

          <div className="highlights-grid">
            {/* Card 1 */}
            <div className="highlight-card" id="hl-card-1">
              <div className="highlight-icon-wrapper">
                <Code size={26} />
              </div>
              <h3>Rigorous Problem Solving</h3>
              <p>
                Train your mind to decompose abstract computational challenges into granular, logical steps using structured diagrams and trace sheets.
              </p>
            </div>

            {/* Card 2 */}
            <div className="highlight-card" id="hl-card-2">
              <div className="highlight-icon-wrapper">
                <Cpu size={26} />
              </div>
              <h3>Algorithmic Optimization</h3>
              <p>
                Analyze asymptotic behaviors of algorithms. Practice trimming down runtime latency and auxiliary stack footprints to O(1) space constraints.
              </p>
            </div>

            {/* Card 3 */}
            <div className="highlight-card" id="hl-card-3">
              <div className="highlight-icon-wrapper">
                <Award size={26} />
              </div>
              <h3>Technical Placement Prep</h3>
              <p>
                Synthesize optimal logic paths under timed scenarios, preparing yourself for technical screening boards at high-tier product engineering companies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome / Introductory Section */}
      <section className="section alt-bg" id="lab-intro-section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="section-header">
            <span className="section-tag">Welcome Message</span>
            <h2 className="section-title">Introduction to the DSA Laboratory</h2>
          </div>
          <div style={{ color: 'var(--text-muted)', fontSize: '1.05rem', display: 'flex', flexDirection: 'column', gap: '20px', lineHeight: '1.8' }}>
            <p>
              Welcome to the <strong>Data Structures and Algorithms (DSA) Laboratory</strong>. As a critical pillar of our Computer Science Curriculum, this laboratory provides students with hands-on exposure to implementing linear, non-linear, hierarchical, and network models of data storage.
            </p>
            <p>
              Our curriculum challenges students to move beyond merely calling black-box library APIs. Instead, you will build data arrays, custom double-linked reference chains, binary AVL systems, hash directories, and topological sorting systems <strong>from first principles</strong>.
            </p>
            <p>
              Equipped with high-performance workstations, reference compilations, and dedicated mentoring profiles, the laboratory acts as an active incubator for solid analytical skills, writing clean modular code, and tracing memory leaks.
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px', gap: '24px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.925rem', fontWeight: '500', color: 'var(--primary)' }}>
              <CheckCircle2 size={18} style={{ color: 'var(--secondary)' }} />
              <span>Hardware Traced Stack Limits</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.925rem', fontWeight: '500', color: 'var(--primary)' }}>
              <CheckCircle2 size={18} style={{ color: 'var(--secondary)' }} />
              <span>Multi-Language Compilations</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.925rem', fontWeight: '500', color: 'var(--primary)' }}>
              <CheckCircle2 size={18} style={{ color: 'var(--secondary)' }} />
              <span>Structured Analytical Journals</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
