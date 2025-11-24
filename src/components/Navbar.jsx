import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Navbar = () => {
  return (
    <nav style={{ 
      backgroundColor: 'var(--color-white)', 
      boxShadow: 'var(--shadow-sm)',
      padding: '1rem 0'
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
        
        <ul style={{ display: 'flex', gap: '2rem' }}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/background">The Issue</Link></li>
          <li><Link to="/tutorials">DIY Toys</Link></li>
          <li><Link to="/donate" className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>Donate</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
