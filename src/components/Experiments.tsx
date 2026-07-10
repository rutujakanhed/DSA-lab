import { useState } from 'react';
import * as Icons from 'lucide-react';
import { experiments } from '../data';
import { Experiment } from '../types';

export default function Experiments() {
  const [selectedExp, setSelectedExp] = useState<Experiment | null>(null);

  // Helper to render Lucide Icon by string name
  const renderIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return <IconComponent size={24} />;
    }
    return <Icons.Code size={24} />;
  };

  return (
    <main id="experiments-view">
      <section className="section" id="experiments-list-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Syllabus Curriculum</span>
            <h2 className="section-title">Core Laboratory Experiments</h2>
            <p className="section-subtitle">
              Explore our structured catalog of 10 essential laboratory assignments. Click on "Learn More" to view the theoretical objectives, detailed algorithms, code structures, and complexity analyses.
            </p>
          </div>

          <div className="experiments-grid" id="experiments-cards-container">
            {experiments.map((exp) => (
              <div className="experiment-card" key={exp.id} id={`exp-card-${exp.id}`}>
                <div>
                  <div className="exp-badge">{exp.category}</div>
                  <div className="exp-header">
                    <div className="exp-icon-box" id={`exp-icon-box-${exp.id}`}>
                      {renderIcon(exp.icon)}
                    </div>
                    <h3 className="exp-title">{exp.title}</h3>
                  </div>
                  <p className="exp-desc">{exp.shortDesc}</p>
                </div>

                <div className="exp-action">
                  <div className="complexity-tag" id={`complexity-tag-${exp.id}`}>
                    <span>Complexity: </span>
                    <span style={{ color: 'var(--primary)', fontWeight: '600' }}>
                      {exp.id === 'searching' ? 'O(log n)' : exp.id === 'sorting' ? 'O(n log n)' : 'O(n)'}
                    </span>
                  </div>
                  <button 
                    onClick={() => setSelectedExp(exp)} 
                    className="learn-more-btn"
                    id={`btn-learn-more-${exp.id}`}
                  >
                    <span>Learn More</span>
                    <Icons.ChevronRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Modal Popup for Learn More */}
      {selectedExp && (
        <div 
          className="modal-overlay" 
          onClick={() => setSelectedExp(null)}
          id="experiment-modal-overlay"
        >
          <div 
            className="modal-content" 
            onClick={(e) => e.stopPropagation()}
            id="experiment-modal-content"
          >
            {/* Modal Header */}
            <div className="modal-header">
              <div className="modal-header-title">
                <span>{selectedExp.category}</span>
                <h3>{selectedExp.title}</h3>
              </div>
              <button 
                className="modal-close" 
                onClick={() => setSelectedExp(null)}
                id="close-modal-btn"
              >
                <Icons.X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="modal-body">
              {/* Objective */}
              <div id="modal-sec-objective">
                <h4 className="modal-section-title">Laboratory Objective</h4>
                <p className="modal-text">{selectedExp.objective}</p>
              </div>

              {/* Complexity Metrics */}
              <div id="modal-sec-complexity">
                <h4 className="modal-section-title">Asymptotic Analysis</h4>
                <div className="modal-complexity-grid">
                  <div className="modal-complexity-item">
                    <h5>Time Complexity</h5>
                    <p>{selectedExp.complexity.time}</p>
                  </div>
                  <div className="modal-complexity-item">
                    <h5>Space Complexity</h5>
                    <p>{selectedExp.complexity.space}</p>
                  </div>
                </div>
              </div>

              {/* Algorithm Steps */}
              <div id="modal-sec-algorithm">
                <h4 className="modal-section-title">Core Algorithm Steps</h4>
                <ul className="modal-list">
                  {selectedExp.algorithm.map((step, idx) => (
                    <li key={idx} id={`modal-step-item-${idx}`}>{step}</li>
                  ))}
                </ul>
              </div>

              {/* Pseudocode Visualizer */}
              <div id="modal-sec-pseudocode">
                <h4 className="modal-section-title">Reference Pseudocode</h4>
                <pre className="modal-code">
                  <code>{selectedExp.pseudocode}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
