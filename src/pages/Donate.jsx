import React from 'react';
import VideoSlideshow from '../components/VideoSlideshow';
import '../components/VideoSlideshow.css';

// Vite way to import multiple videos
const videoModules = import.meta.glob('../assets/videos/*.{mp4,webm}', { eager: true });
const videos = Object.keys(videoModules).map((key) => ({
    src: videoModules[key].default,
    title: key.split('/').pop()
}));

const Donate = () => {
    return (
        <div className="container py-xl">
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                <h1>Support Our Cause</h1>

                <div style={{
                    backgroundColor: 'var(--color-accent)',
                    padding: '3rem',
                    borderRadius: 'var(--radius-lg)',
                    marginTop: '2rem'
                }}>
                    <h2 style={{ color: 'var(--color-primary-dark)' }}>Donation Hotline</h2>
                    <p style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: '1rem 0' }}>
                        0507614631
                    </p>
                    <p>
                        Your support helps create better learning conditions for children with special needs—children who deserve far more than the limited facilities many of their schools currently have.
                    </p>
                </div>

                <div style={{ marginTop: '3rem', textAlign: 'left' }}>
                    <p className="mb-lg">
                        Even small contributions go a long way in helping us provide simple learning aids, advocate for improved conditions, and bring joy and stimulation into classrooms that often lack the basics.
                    </p>
                    <p>
                        By donating materials or funds, you become part of a collective effort to make these learning environments more supportive, dignified, and accessible. Every little bit helps us move closer to giving these children the better facilities and opportunities they deserve.
                    </p>
                </div>

                <div style={{ marginTop: '4rem', textAlign: 'left' }}>
                    <h2 style={{ marginBottom: '1rem', textAlign: 'center' }}>See the Impact</h2>
                    <VideoSlideshow videos={videos} />
                </div>
            </div>
        </div>
    );
};

export default Donate;
