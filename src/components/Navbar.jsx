import { Link, useLocation } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const linkStyle = (path) => ({
    color: isActive(path) ? 'var(--color-primary)' : 'var(--color-text)',
    fontWeight: isActive(path) ? 'bold' : 'normal',
    borderBottom: isActive(path) ? '2px solid var(--color-primary)' : 'none',
    paddingBottom: '0.25rem'
  });

  return (
    <nav style={{
      backgroundColor: 'var(--color-white)',
      boxShadow: 'var(--shadow-sm)',
      padding: '1rem 0',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link to="/" style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: 'var(--color-primary)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <Heart fill="var(--color-primary)" size={24} />
          <span>Leadership Project</span>
        </Link>

        <ul style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <li><Link to="/" style={linkStyle('/')}>Home</Link></li>
          <li><Link to="/background" style={linkStyle('/background')}>The Issue</Link></li>
          <li><Link to="/tutorials" style={linkStyle('/tutorials')}>DIY Toys</Link></li>
          <li><Link to="/donate" className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>Donate</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
