import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/authSlice';
import './Header.css';

export default function Header() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <header className="main-header">
      <div className="header-container">
        <Link to="/" className="logo">🔥 CHRONICLE NEWS</Link>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/news">All News</Link>
          <Link to="/contact">Contact</Link>
          {user ? (
            <>
              <Link to="/create-news">Create News</Link>
              <Link to="/dashboard" className="user-badge">Dashboard ({user.name})</Link>
              <button onClick={() => { dispatch(logout()); navigate('/'); }} className="logout-btn">Logout</button>
            </>
          ) : (
            <Link to="/login" className="login-btn">Login</Link>
          )}
        </nav>
      </div>
    </header>
  );
}