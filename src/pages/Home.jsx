const Home = () => {
    return (
        <div>
            <section style={{
                backgroundColor: 'var(--color-accent)',
                padding: '4rem 0',
                textAlign: 'center'
            }}>
                <div className="container">
                    <h1 style={{ marginBottom: '1rem' }}>Empowering Special Needs Education</h1>
                    <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
                        Creative solutions for inclusive classrooms in Ghana.
                    </p>
                </div>
            </section>

            <section className="container py-xl">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '4rem',
                    alignItems: 'center'
                }}>
                    <div>
                        <div style={{
                            backgroundColor: '#ddd',
                            height: '300px',
                            borderRadius: 'var(--radius-lg)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#666'
                        }}>
                            [Picture of us at the school]
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
        </div>
    );
};

export default Home;
