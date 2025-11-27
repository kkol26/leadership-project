import React, { useState } from 'react';
import './VideoSlideshow.css';

/**
 * VideoSlideshow renders a carousel of videos.
 * Props:
 *   videos: Array<{src: string, title?: string}>
 */
export default function VideoSlideshow({ videos = [] }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!videos.length) return null;

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % videos.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
    };

    const currentVideo = videos[currentIndex];

    return (
        <div className="video-slideshow">
            <div className="video-container">
                <video
                    key={currentVideo.src} // Key ensures video reloads on change
                    src={currentVideo.src}
                    controls
                    className="slide-video"
                >
                    {currentVideo.title && <track kind="captions" src="" label={currentVideo.title} />}
                </video>

                <button className="nav-btn prev" onClick={prevSlide} aria-label="Previous video">
                    &#10094;
                </button>
                <button className="nav-btn next" onClick={nextSlide} aria-label="Next video">
                    &#10095;
                </button>
            </div>

            <div className="slide-info">
                <p>Video {currentIndex + 1} of {videos.length}</p>
            </div>
        </div>
    );
}
