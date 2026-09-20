import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../features/authSlice';
import { useNavigate } from 'react-router-dom';

export default function LoginRegister() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate real production API Response structural framework
    const mockUser = { id: 101, name: isLogin ? 'John Doe' : name, email };
    dispatch(loginSuccess({ user: mockUser, token: 'mock-jwt-token-string' }));
    navigate('/dashboard');
  };

  return (
    <div className="container" style={{ maxWidth: '400px', marginTop: '50px', background: '#fff', padding: '25px', borderRadius: '8px' }}>
      <h2>{isLogin ? 'Login to Portal' : 'Register Account'}</h2>
      <form onSubmit={handleSubmit} style={{ marginTop: '15px' }}>
        {!isLogin && <input type="text" placeholder="Full Name" required onChange={e => setName(e.target.value)} />}
        <input type="email" placeholder="Email Address" required onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" required onChange={e => setPassword(e.target.value)} />
        <button type="submit" style={{ width: '100%', background: '#ff4757', color: '#fff', padding: '12px', marginTop: '10px' }}>
          {isLogin ? 'Login' : 'Register'}
        </button>
      </form>
      <p style={{ marginTop: '15px', textAlign: 'center', fontSize: '14px' }}>
        {isLogin ? "Don't have an account? " : "Already have an account? "}
        <span style={{ color: '#ff4757', cursor: 'pointer', fontWeight: 'bold' }} onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Register Here' : 'Login Here'}
        </span>
      </p>
    </div>
  );
}