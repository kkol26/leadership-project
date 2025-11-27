import React from 'react';
import './MediaGallery.css';

/**
 * MediaGallery renders a responsive grid of images and videos.
 * Props:
 *   images: Array<{src: string, alt: string}>
 *   videos: Array<{src: string, title?: string}>
 */
export default function MediaGallery({ images = [], videos = [] }) {
    return (
        <section className="media-gallery">
            <div className="grid">
                {images.map((img, idx) => (
                    <picture key={`img-${idx}`} className="media-item">
                        <img src={img.src} alt={img.alt} loading="lazy" />
                    </picture>
                ))}
                {videos.map((vid, idx) => (
                    <video
                        key={`vid-${idx}`}
                        src={vid.src}
                        controls
                        muted
                        className="media-item"
                        style={{ width: '100%' }}
                    >
                        {vid.title && <track kind="captions" src="" label={vid.title} />}
                    </video>
                ))}
            </div>
        </section>
    );
}
