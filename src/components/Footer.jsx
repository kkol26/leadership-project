const Footer = () => {
    return (
        <footer style={{
            backgroundColor: 'var(--color-primary-dark)',
            color: 'var(--color-white)',
            padding: '2rem 0',
            marginTop: 'auto'
        }}>
            <div className="container text-center">
                <p>&copy; {new Date().getFullYear()} Ashesi University Leadership Project.</p>
                <p style={{ fontSize: '0.9rem', opacity: 0.8, marginTop: '0.5rem' }}>
                    Serving communities, one step at a time.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
