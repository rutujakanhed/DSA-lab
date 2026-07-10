import { useState } from 'react';
import { Download, BookOpen, ExternalLink, Code, FileText, CheckCircle2 } from 'lucide-react';
import { referenceBooks, onlineResources } from '../data';

export default function Resources() {
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const triggerDownload = () => {
    setDownloading(true);
    setDownloadSuccess(false);
    setTimeout(() => {
      setDownloading(false);
      setDownloadSuccess(true);
      // Automatically fade out the success message after 4 seconds
      setTimeout(() => setDownloadSuccess(false), 4000);
    }, 1500);
  };

  return (
    <main id="resources-view">
      {/* Lab Manual Action Section */}
      <section className="section" id="resources-manual-banner" style={{ paddingBottom: '40px' }}>
        <div className="container">
          <div className="manual-banner" id="lab-manual-cta-box">
            <div className="manual-banner-content">
              <h3>Download Official Lab Manual</h3>
              <p>
                Access the standard physical workbook containing comprehensive problem listings, sample compiler configurations, tracing worksheets, and reporting guidelines for all 10 experiments.
              </p>
              
              {downloadSuccess && (
                <div 
                  className="submit-success-box" 
                  style={{ marginTop: '16px', background: 'rgba(255, 255, 255, 0.2)', border: '1px solid rgba(255, 255, 255, 0.4)', color: '#fff' }}
                  id="manual-download-success-alert"
                >
                  <CheckCircle2 size={18} />
                  <span style={{ fontSize: '0.85rem', fontWeight: '600' }}>
                    Successfully initiated: DSA_Lab_Manual_v2.4.pdf (4.82 MB)
                  </span>
                </div>
              )}
            </div>

            <div>
              <button 
                onClick={triggerDownload} 
                className="btn-primary" 
                style={{ backgroundColor: 'var(--accent)', color: 'var(--bg-dark)', display: 'flex', gap: '10px', width: '220px', justifyContent: 'center' }}
                disabled={downloading}
                id="download-manual-btn"
              >
                {downloading ? (
                  <>
                    <span>Packaging Manual...</span>
                  </>
                ) : (
                  <>
                    <Download size={18} />
                    <span>Download PDF Manual</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Reference split */}
      <section className="section alt-bg" id="resources-reference-grid" style={{ paddingTop: '60px' }}>
        <div className="container resources-grid">
          {/* Reference Books */}
          <div className="resources-block" id="books-block">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <BookOpen size={24} style={{ color: 'var(--secondary)' }} />
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--primary)', fontWeight: '700' }}>
                Academic Reference Books
              </h3>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '24px' }}>
              We highly recommend consulting these classical works to master mathematical evaluations and abstract heap structures:
            </p>

            <div className="books-list" id="books-cards-container">
              {referenceBooks.map((book, idx) => (
                <div className="book-card" key={idx} id={`book-card-${idx}`}>
                  <div className="book-spine" id={`book-spine-${idx}`}></div>
                  <div className="book-info">
                    <h4>{book.title}</h4>
                    <p style={{ color: 'var(--text-dark)', fontWeight: '500', fontSize: '0.85rem', margin: '4px 0' }}>
                      By {book.author}
                    </p>
                    <p style={{ fontSize: '0.75rem' }}>{book.publisher}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Online Learning and Portals */}
          <div className="resources-block" id="portals-block">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <Code size={24} style={{ color: 'var(--secondary)' }} />
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--primary)', fontWeight: '700' }}>
                Practice & Learning Portals
              </h3>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '24px' }}>
              Utilize these online materials and sandboxed practice engines to run test suites and strengthen your confidence:
            </p>

            <div className="resources-list-compact" id="portals-items-container">
              {onlineResources.map((res, idx) => (
                <div className="resource-item-card" key={idx} id={`portal-item-${idx}`}>
                  <div className="resource-item-icon">
                    <FileText size={18} />
                  </div>
                  <div className="resource-item-content">
                    <h4>{res.title}</h4>
                    <p>{res.description}</p>
                    <a 
                      href={res.url} 
                      target="_blank" 
                      rel="noreferrer"
                      id={`portal-link-${idx}`}
                    >
                      <span>Visit Website</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Preparation Track Notice */}
      <section className="section" id="resources-practice-advice">
        <div className="container" style={{ maxWidth: '850px', textAlign: 'center' }}>
          <span className="section-tag">Practicing Guideline</span>
          <h2 className="section-title">Preparation Workflows</h2>
          <p className="section-subtitle" style={{ lineHeight: '1.7' }}>
            To get the most out of your DSA Lab sessions, we suggest a structured routine: (1) Read the theoretical chapters in your Reference Book, (2) Dry-run the logic steps on a sheet of paper with sample inputs, (3) Implement your program in clean C++ or Java, and (4) Test border cases (empty sets, size overflows, elements out of range) on competitive portals.
          </p>
        </div>
      </section>
    </main>
  );
}
