import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulate API Submission
    setFormSubmitted(true);
    // Reset fields
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    // Auto clear success banner after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <main id="contact-view">
      <section className="section" id="contact-main-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Reach Out</span>
            <h2 className="section-title">Support & Coordination</h2>
            <p className="section-subtitle">
              Have questions regarding seat allocations, laboratory manuals, competition registration, or workspace timings? Get in touch with our team.
            </p>
          </div>

          <div className="contact-grid">
            {/* Contact Info & Map Column */}
            <div className="contact-info-panel" id="contact-details-box">
              <div className="contact-info-block" id="contact-info-address">
                <div className="contact-info-icon-box">
                  <MapPin size={22} />
                </div>
                <div className="contact-info-content">
                  <h4>Physical Location</h4>
                  <p>Room 402, Engineering Block IV, Academic Campus, Tech Avenue, State-90342</p>
                </div>
              </div>

              <div className="contact-info-block" id="contact-info-phone">
                <div className="contact-info-icon-box">
                  <Phone size={22} />
                </div>
                <div className="contact-info-content">
                  <h4>Phone Support</h4>
                  <p>+1 (234) 567-890 &nbsp; (Mon-Fri, 9:00 AM - 5:00 PM)</p>
                </div>
              </div>

              <div className="contact-info-block" id="contact-info-email">
                <div className="contact-info-icon-box">
                  <Mail size={22} />
                </div>
                <div className="contact-info-content">
                  <h4>Coordinator Email</h4>
                  <p>dsalab@college.edu</p>
                </div>
              </div>

              <div className="contact-info-block" id="contact-info-hours">
                <div className="contact-info-icon-box">
                  <Clock size={22} />
                </div>
                <div className="contact-info-content">
                  <h4>Operating Timings</h4>
                  <p>Weekdays: 8:00 AM - 8:00 PM | Sat: 9:00 AM - 1:00 PM</p>
                </div>
              </div>

              {/* Custom CSS Painted Map Mockup */}
              <div className="map-mockup" id="campus-location-map">
                <div className="map-bg"></div>
                <div className="map-road-h"></div>
                <div className="map-road-v"></div>
                <div className="map-pin">
                  <MapPin size={32} fill="#EF4444" color="#fff" />
                </div>
                <div className="map-card">
                  <h5>Engineering Block 4</h5>
                  <p>Level 4, Rooms 401-410. Main Elevator Lobby.</p>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="form-panel" id="message-form-box">
              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--primary)', fontWeight: '700' }}>
                  Send an Inquiry
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '4px' }}>
                  Your submission will be routed directly to the Laboratory Coordinator's desk.
                </p>
              </div>

              {formSubmitted && (
                <div className="submit-success-box" id="form-submission-success-banner">
                  <CheckCircle2 size={20} style={{ flexShrink: 0 }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.9rem' }}>Message Dispatched!</strong>
                    <span style={{ fontSize: '0.8rem' }}>Thank you. The Lab Coordinator will respond to your email shortly.</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form" id="lab-inquiry-form">
                <div className="form-row">
                  <div>
                    <label className="form-label" htmlFor="user-name">Your Full Name *</label>
                    <input 
                      type="text" 
                      id="user-name"
                      required 
                      className="form-control"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                    />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="user-email">University Email *</label>
                    <input 
                      type="email" 
                      id="user-email"
                      required 
                      className="form-control"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. john.d@college.edu"
                    />
                  </div>
                </div>

                <div>
                  <label className="form-label" htmlFor="msg-subject">Subject of Inquiry *</label>
                  <input 
                    type="text" 
                    id="msg-subject"
                    required 
                    className="form-control"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Booking terminal slot, Makeup lab"
                  />
                </div>

                <div>
                  <label className="form-label" htmlFor="msg-text">Detailed Message *</label>
                  <textarea 
                    id="msg-text"
                    required 
                    rows={6}
                    className="form-control"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Type your academic or technical inquiry here..."
                    style={{ resize: 'vertical' }}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn-primary"
                  style={{ display: 'flex', gap: '8px', width: '100%', justifyContent: 'center' }}
                  id="send-message-btn"
                >
                  <Send size={16} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
