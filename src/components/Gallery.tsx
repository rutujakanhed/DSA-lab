import { useState } from 'react';
import { Eye, X, Filter } from 'lucide-react';
import { galleryItems } from '../data';
import { GalleryItem } from '../types';

export default function Gallery() {
  const [filter, setFilter] = useState<'all' | 'lab' | 'activity' | 'infrastructure'>('all');
  const [lightboxImage, setLightboxImage] = useState<GalleryItem | null>(null);

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <main id="gallery-view">
      <section className="section" id="gallery-main-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Campus Visuals</span>
            <h2 className="section-title">Laboratory Gallery</h2>
            <p className="section-subtitle">
              Browse snapshots representing our physical infrastructure, collaborative coding events, student research presentations, and active lecture blocks.
            </p>
          </div>

          {/* Filtering Bar */}
          <div className="gallery-filter-bar" id="gallery-tabs">
            <button 
              onClick={() => setFilter('all')} 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              id="gallery-tab-all"
            >
              All Snapshots
            </button>
            <button 
              onClick={() => setFilter('lab')} 
              className={`filter-btn ${filter === 'lab' ? 'active' : ''}`}
              id="gallery-tab-lab"
            >
              Laboratory Views
            </button>
            <button 
              onClick={() => setFilter('activity')} 
              className={`filter-btn ${filter === 'activity' ? 'active' : ''}`}
              id="gallery-tab-activity"
            >
              Student Activities
            </button>
            <button 
              onClick={() => setFilter('infrastructure')} 
              className={`filter-btn ${filter === 'infrastructure' ? 'active' : ''}`}
              id="gallery-tab-infra"
            >
              Infrastructure
            </button>
          </div>

          {/* Grid Layout */}
          <div className="gallery-grid-layout" id="gallery-images-container">
            {filteredItems.map((item) => (
              <div 
                className="gallery-item-box" 
                key={item.id}
                onClick={() => setLightboxImage(item)}
                id={`gallery-item-box-${item.id}`}
              >
                <div className="gallery-img-wrapper">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="gallery-img"
                    id={`gallery-img-${item.id}`}
                  />
                  <div className="gallery-img-overlay">
                    <div className="gallery-overlay-icon">
                      <Eye size={20} />
                    </div>
                  </div>
                </div>
                <div className="gallery-label">
                  <span>
                    {item.category === 'lab' ? 'Lab View' : item.category === 'activity' ? 'Student Session' : 'Infrastructure'}
                  </span>
                  <h4>{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Overlay */}
      {lightboxImage && (
        <div 
          className="modal-overlay" 
          onClick={() => setLightboxImage(null)}
          style={{ cursor: 'zoom-out' }}
          id="gallery-lightbox-overlay"
        >
          <div 
            style={{ 
              position: 'relative', 
              maxWidth: '900px', 
              maxHeight: '80vh', 
              backgroundColor: 'var(--white)',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)'
            }}
            onClick={(e) => e.stopPropagation()}
            id="gallery-lightbox-content"
          >
            <button 
              onClick={() => setLightboxImage(null)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                backgroundColor: 'rgba(0,0,0,0.6)',
                color: 'var(--white)',
                border: 'none',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: '10'
              }}
              id="close-lightbox-btn"
            >
              <X size={18} />
            </button>
            <img 
              src={lightboxImage.imageUrl} 
              alt={lightboxImage.title} 
              style={{ width: '100%', height: 'auto', maxHeight: '70vh', objectFit: 'contain', display: 'block' }}
              id="lightbox-enlarged-photo"
            />
            <div style={{ padding: '20px 24px', backgroundColor: 'var(--white)', borderTop: '1px solid var(--border-color)' }}>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--secondary)', fontWeight: '700', letterSpacing: '0.05em' }}>
                {lightboxImage.category === 'lab' ? 'Lab View' : lightboxImage.category === 'activity' ? 'Student Session' : 'Infrastructure'}
              </span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: '700', color: 'var(--primary)', marginTop: '4px' }}>
                {lightboxImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
