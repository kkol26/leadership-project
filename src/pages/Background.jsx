import React from 'react';

const Background = () => {
    return (
        <div className="container py-xl">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h1 className="text-center">The Issue</h1>

                <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
                    Many schools for children with special needs in Ghana face deep challenges. Classrooms are often overcrowded, furniture is old or broken, and essential learning tools are missing. In some schools, even basic sensory materials — things that help children explore, calm down, or communicate — are unavailable. This issue is usually caused by chronic underfunding.
                </p>

                <div style={{
                    backgroundColor: 'var(--color-white)',
                    padding: '2rem',
                    borderRadius: 'var(--radius-md)',
                    boxShadow: 'var(--shadow-md)',
                    marginBottom: '2rem',
                    borderLeft: '4px solid var(--color-secondary)'
                }}>
                    <h3>Key Facts</h3>
                    <p style={{ marginBottom: '1rem' }}>
                        There are approximately <strong>31 public special schools</strong>, which are notoriously underfunded by the government, having received an average of <strong>GHS 218 per student</strong> compared to the <strong>GHS 740 per student</strong> that general schools received from 2019 to 2024 (Ministry of Education, 2024).
                    </p>
                    <p>
                        The majority of private schools are NGO-run and rely on donors or fees, so they operate on limited budgets and lack basic resources and teachers with adequate skills (Good Governance Africa, 2020). The most well-resourced institutions are usually too expensive to be accessible to the majority of the country.
                    </p>
                </div>

                <p>
                    This lack of facilities affects how students learn and how teachers teach. It limits opportunities for children who already face unique challenges and makes inclusion harder to achieve.
                </p>
                <p className="mt-lg">
                    Our project shines a light on this issue by taking a small but meaningful step: creating low-cost, handmade learning aids while raising awareness about the need for better facilities, funding, and support for special needs education in Ghana.
                </p>
            </div>
        </div>
    );
};

export default Background;
