import { Mail, Award, BookMarked, ShieldCheck } from 'lucide-react';
import { facultyList } from '../data';

export default function Faculty() {
  return (
    <main id="faculty-view">
      <section className="section" id="faculty-team-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Educators</span>
            <h2 className="section-title">Laboratory Mentors</h2>
            <p className="section-subtitle">
              Our experienced academic staff guides students through complexity evaluations, trace sheet reviews, and optimal compilation layouts.
            </p>
          </div>

          <div className="faculty-grid" id="faculty-cards-container">
            {facultyList.map((faculty) => (
              <div className="faculty-card" key={faculty.id} id={`faculty-card-${faculty.id}`}>
                {/* Image Section */}
                <div className="faculty-img-wrapper" id={`faculty-img-wrapper-${faculty.id}`}>
                  <img 
                    src={faculty.photoUrl} 
                    alt={faculty.name} 
                    className="faculty-img"
                    id={`faculty-photo-${faculty.id}`}
                  />
                </div>

                {/* Info Details */}
                <div className="faculty-info">
                  <div className="faculty-designation">{faculty.designation}</div>
                  <h3 className="faculty-name">{faculty.name}</h3>
                  <div className="faculty-qualification">{faculty.qualification}</div>

                  {/* Expertise */}
                  <div className="faculty-detail-item" id={`faculty-exp-${faculty.id}`}>
                    <Award size={16} className="faculty-detail-icon" />
                    <span className="faculty-detail-text">
                      <strong>Focus:</strong> {faculty.expertise}
                    </span>
                  </div>

                  {/* Email */}
                  <div className="faculty-detail-item" style={{ marginTop: 'auto' }} id={`faculty-email-${faculty.id}`}>
                    <Mail size={16} className="faculty-detail-icon" />
                    <span className="faculty-detail-text">
                      <a 
                        href={`mailto:${faculty.email}`} 
                        style={{ color: 'var(--secondary)', textDecoration: 'none', fontWeight: '500' }}
                        id={`faculty-mailto-link-${faculty.id}`}
                      >
                        {faculty.email}
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lab Leadership Quote */}
      <section className="section alt-bg" id="faculty-leadership-quote">
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', color: 'rgba(0, 119, 182, 0.15)', fontFamily: 'Georgia, serif', lineHeight: '0', marginBottom: '20px' }}>“</div>
          <p style={{ fontStyle: 'italic', fontSize: '1.25rem', color: 'var(--primary)', fontWeight: '500', marginBottom: '20px' }}>
            To write simple, clean, optimal code that maps efficiently to memory is to understand the physics of computer science. Our goal in the DSA Laboratory is to turn abstract complexity models into concrete, robust engineering disciplines.
          </p>
          <div style={{ fontSize: '3rem', color: 'rgba(0, 119, 182, 0.15)', fontFamily: 'Georgia, serif', lineHeight: '0', display: 'inline-block', transform: 'rotate(180deg)', marginTop: '20px' }}>“</div>
          <h4 style={{ fontFamily: 'var(--font-display)', color: 'var(--text-dark)', fontWeight: '700', fontSize: '1.1rem', marginTop: '10px' }}>Dr. Evelyn Carter</h4>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Lab Director & Head of Program</span>
        </div>
      </section>
    </main>
  );
}
