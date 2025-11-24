const Tutorials = () => {
    const tutorials = [
        {
            title: "1. Sensory Bottle (Baby Oil + Glitter + Water Bottle)",
            materials: [
                "Empty plastic water bottle",
                "Baby oil",
                "Clean water",
                "Glitter (any colour)",
                "Food colouring (optional)",
                "Super glue or hot glue gun (to seal the lid)"
            ],
            steps: [
                "Wash and dry the bottle completely.",
                "Fill half the bottle with water.",
                "Add a few drops of food colouring (optional).",
                "Pour in baby oil until the bottle is almost full — leave a small gap at the top.",
                "Add glitter (about 1–2 teaspoons).",
                "Close the lid tightly and shake to test the effect.",
                "Seal the lid with super glue to prevent leaks.",
                "Shake gently and watch the glitter float and swirl — perfect for calming sensory play."
            ]
        },
        {
            title: "2. Stress Ball (Rice/Sand + Balloon)",
            materials: [
                "Balloon (thick ones work best)",
                "Rice or clean sand",
                "Small funnel (or rolled paper)",
                "Scissors",
                "Another balloon (optional for double-layer strength)"
            ],
            steps: [
                "Stretch the balloon by pulling it a few times.",
                "Place a funnel in the balloon opening.",
                "Slowly pour rice or sand through the funnel until the balloon is full and firm.",
                "Remove the balloon from the funnel and squeeze out any trapped air.",
                "Tie the balloon securely.",
                "(Optional) Cut the neck off a second balloon and stretch it over the filled one for extra strength.",
                "Lightly roll it in your hands — you now have a soft, durable stress ball."
            ]
        },
        {
            title: "3. Bottle Shaker (Bottle + Rice or Beads)",
            materials: [
                "Empty plastic bottle",
                "Rice, beans, or plastic beads",
                "Stickers/coloured paper (optional decoration)",
                "Glue for sealing"
            ],
            steps: [
                "Wash and dry the bottle.",
                "Fill it with rice, beans, or beads — about one-third full (so it can shake properly).",
                "Close the lid and shake to test the sound.",
                "Seal the lid with glue to keep it secure.",
                "Decorate the outside with stickers or coloured tape (optional).",
                "Shake, tap, or roll — it makes a great sound-based sensory tool."
            ]
        }
    ];

    return (
        <div className="container py-xl">
            <h1 className="text-center">How to Make Sensory Toys</h1>
            <p className="text-center mb-lg" style={{ maxWidth: '600px', margin: '0 auto 3rem' }}>
                Simple, low-cost DIY projects to create engaging learning aids.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                {tutorials.map((tutorial, index) => (
                    <div key={index} style={{
                        backgroundColor: 'var(--color-white)',
                        padding: '2rem',
                        borderRadius: 'var(--radius-lg)',
                        boxShadow: 'var(--shadow-md)'
                    }}>
                        <h2 style={{ color: 'var(--color-primary)' }}>{tutorial.title}</h2>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem', marginTop: '1.5rem' }}>
                            <div>
                                <h3 style={{ fontSize: '1.2rem', color: 'var(--color-secondary)' }}>Materials</h3>
                                <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
                                    {tutorial.materials.map((item, idx) => (
                                        <li key={idx} style={{ marginBottom: '0.5rem' }}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 style={{ fontSize: '1.2rem', color: 'var(--color-secondary)' }}>Steps</h3>
                                <ol style={{ listStyleType: 'decimal', paddingLeft: '1.5rem' }}>
                                    {tutorial.steps.map((step, idx) => (
                                        <li key={idx} style={{ marginBottom: '0.5rem' }}>{step}</li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tutorials;
