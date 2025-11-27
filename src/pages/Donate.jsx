import React from 'react';
import VideoSlideshow from '../components/VideoSlideshow';
import '../components/VideoSlideshow.css';
import './Donate.css';

// Vite way to import multiple videos
const videoModules = import.meta.glob('../assets/videos/*.{mp4,webm}', { eager: true });
const videos = Object.keys(videoModules).map((key) => ({
    src: videoModules[key].default,
    title: key.split('/').pop()
}));

const Donate = () => {
    return (
        <div className="container py-xl">
            <div className="donate-container">
                <h1>Support Our Cause</h1>

                <div className="donation-box">
                    <h2 className="donation-title">Donation Hotline</h2>
                    <p className="donation-number">
                        0507614631
                    </p>
                    <p>
                        Your support helps create better learning conditions for children with special needs—children who deserve far more than the limited facilities many of their schools currently have.
                    </p>
                </div>

                <div className="impact-section">
                    <p className="mb-lg">
                        Even small contributions go a long way in helping us provide simple learning aids, advocate for improved conditions, and bring joy and stimulation into classrooms that often lack the basics.
                    </p>
                    <p>
                        By donating materials or funds, you become part of a collective effort to make these learning environments more supportive, dignified, and accessible. Every little bit helps us move closer to giving these children the better facilities and opportunities they deserve.
                    </p>
                </div>

                <div className="slideshow-section">
                    <h2 className="slideshow-title">See the Impact</h2>
                    <VideoSlideshow videos={videos} />
                </div>
            </div>
        </div>
    );
};

export default Donate;
