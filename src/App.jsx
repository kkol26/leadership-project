import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Background from './pages/Background';
import Tutorials from './pages/Tutorials';
import Donate from './pages/Donate';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/background" element={<Background />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
