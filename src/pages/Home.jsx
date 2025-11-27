import React from 'react';
import MediaGallery from '../components/MediaGallery';
import '../components/MediaGallery.css';
import './Home.css';
import heroImg from '../assets/images/IMG-20251126-WA0000.jpg'; // Using first image as hero/intro image

// Vite way to import multiple images
const imageModules = import.meta.glob('../assets/images/*.{png,jpg,jpeg,webp,svg}', { eager: true });
const images = Object.keys(imageModules).map((key) => ({
    src: imageModules[key].default,
    alt: key.split('/').pop().replace(/\.[^.]+$/, "").replace(/[-_]/g, " ")
})).slice(0, 10);

const Home = () => {
    return (
        <div>
            <section className="hero-section">
                <div className="container">
                    <h1 className="hero-title">Empowering Special Needs Education</h1>
                    <p className="hero-text">
                        Creative solutions for inclusive classrooms in Ghana.
                    </p>
                </div>
            </section>

            <section className="container py-xl">
                <div className="about-grid">
                    <div>
                        <div className="about-image-container">
                            <img
                                src={heroImg}
                                alt="Team at school"
                                className="about-image"
                            />
                        </div>
                    </div>
                    <div>
                        <h2>Who We Are</h2>
                        <p style={{ marginBottom: '1rem' }}>
                            We are a team of Ashesi University students working on a service project that brings practical solutions to communities in Ghana.
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            Our focus is on supporting schools for children with special needs, where we spend time interacting, learning, and finding creative ways to help. Through this project, we design and make sensory toys and learning aids from recycled materials — simple tools that spark joy, encourage focus, and make classrooms more inclusive.
                        </p>
                        <p>
                            For us, this is more than a school project — it’s a way to serve, to learn, and to use creativity to make a difference, one small step at a time.
                        </p>
                    </div>
                </div>
            </section>

            <section className="container py-xl">
                <h2 className="section-title">Our Journey in Pictures</h2>
                <MediaGallery images={images} />
            </section>
        </div>
    );
};

export default Home;
