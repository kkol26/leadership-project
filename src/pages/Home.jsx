import React from 'react';
import MediaGallery from '../components/MediaGallery';
import '../components/MediaGallery.css';
import './Home.css';
import heroImg from '../assets/images/IMG-20251126-WA0000.jpg';

// Top Row Images
import img49 from '../assets/images/IMG-20251126-WA0049.jpg';
import img57 from '../assets/images/IMG-20251126-WA0057.jpg';
import img16 from '../assets/images/IMG-20251126-WA0016.jpg';
import img12 from '../assets/images/IMG-20251126-WA0012.jpg';

// Bottom Rows Images
import img00 from '../assets/images/IMG-20251126-WA0000.jpg';
import img01 from '../assets/images/IMG-20251126-WA0001.jpg';
import img02 from '../assets/images/IMG-20251126-WA0002.jpg';
import img03 from '../assets/images/IMG-20251126-WA0003.jpg';
import img04 from '../assets/images/IMG-20251126-WA0004.jpg';
import img05 from '../assets/images/IMG-20251126-WA0005.jpg';
import img06 from '../assets/images/IMG-20251126-WA0006.jpg';
import img07 from '../assets/images/IMG-20251126-WA0007.jpg';
import img48 from '../assets/images/IMG-20251126-WA0048.jpg';
import img36 from '../assets/images/IMG-20251126-WA0036.jpg';

const topImages = [
    { src: img49, alt: "Gallery Image 49" },
    { src: img57, alt: "Gallery Image 57" },
    { src: img16, alt: "Gallery Image 16" },
    { src: img12, alt: "Gallery Image 12" },
];

const bottomImages = [
    { src: img00, alt: "Gallery Image 00" },
    { src: img01, alt: "Gallery Image 01" },
    { src: img02, alt: "Gallery Image 02" },
    { src: img03, alt: "Gallery Image 03" },
    { src: img04, alt: "Gallery Image 04" },
    { src: img05, alt: "Gallery Image 05" },
    { src: img06, alt: "Gallery Image 06" },
    { src: img07, alt: "Gallery Image 07" },
    { src: img48, alt: "Gallery Image 48" },
    { src: img36, alt: "Gallery Image 36" },
];

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
                <MediaGallery images={topImages} />
                <MediaGallery images={bottomImages} />
            </section>
        </div>
    );
};

export default Home;
