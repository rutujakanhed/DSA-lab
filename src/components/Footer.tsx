import { Mail, MapPin, Phone, Github, Linkedin, Twitter, GraduationCap } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="app-footer">
      <div className="footer-top container">
        <div className="footer-grid">
          {/* About Column */}
          <div className="footer-about" id="footer-col-about">
            <h3 id="footer-logo">DSA LAB</h3>
            <p>
              The Department of Computer Science & Engineering's Data Structures and Algorithms Laboratory is dedicated to establishing sound logical, mathematical, and architectural basics for next-generation software developers.
            </p>
            <div className="footer-socials" id="footer-socials-wrapper">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="social-link" id="social-github">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-link" id="social-linkedin">
                <Linkedin size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-link" id="social-twitter">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links Column 1 */}
          <div className="footer-section" id="footer-col-quicklinks">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links-list">
              <li>
                <button onClick={() => setCurrentPage('home')} id="foot-btn-home">
                  Home Overview
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('about')} id="foot-btn-about">
                  About Laboratory
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('experiments')} id="foot-btn-experiments">
                  All Experiments
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('resources')} id="foot-btn-resources">
                  Lab Resources
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links Column 2 */}
          <div className="footer-section" id="footer-col-support">
            <h4 className="footer-title">Academic Support</h4>
            <ul className="footer-links-list">
              <li>
                <button onClick={() => setCurrentPage('faculty')} id="foot-btn-faculty">
                  Faculty Mentors
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('gallery')} id="foot-btn-gallery">
                  Lab Gallery
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('contact')} id="foot-btn-contact">
                  Support & Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer-section" id="footer-col-contact">
            <h4 className="footer-title">Contact Office</h4>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <MapPin size={18} className="footer-contact-icon" />
                <span>
                  Room 402, Engineering Block IV,<br />
                  Academic Campus, Tech Avenue
                </span>
              </li>
              <li className="footer-contact-item">
                <Phone size={18} className="footer-contact-icon" />
                <span>+1 (234) 567-890</span>
              </li>
              <li className="footer-contact-item">
                <Mail size={18} className="footer-contact-icon" />
                <span>dsalab@college.edu</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-flex">
          <p id="copyright-text">
            &copy; {currentYear} Department of Computer Science & Engineering. All rights reserved.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <GraduationCap size={16} style={{ color: 'var(--accent)' }} />
            <span>Accredited Lab Program #CS-402</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
