import { useSelector, useDispatch } from 'react-redux';
import { updateProfile } from '../features/authSlice';
import { deleteNews, editNews } from '../features/newsSlice';
import { useState } from 'react';

export default function Dashboard() {
  const { user } = useSelector(state => state.auth);
  const articles = useSelector(state => state.news.articles);
  const dispatch = useDispatch();
  
  const [username, setUsername] = useState(user?.name || '');
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState('');

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    dispatch(updateProfile({ name: username }));
    alert('Profile records updated successfully!');
  };

  const startEdit = (article) => {
    setEditingId(article.id);
    setEditTitle(article.title);
  };

  const saveEdit = (id) => {
    const matched = articles.find(a => a.id === id);
    dispatch(editNews({ ...matched, title: editTitle }));
    setEditingId(null);
  };

  return (
    <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '30px' }}>
      {/* Profile Modification Segment */}
      <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', height: 'fit-content' }}>
        <h3>👤 Update Profile Information</h3>
        <form onSubmit={handleProfileUpdate} style={{ marginTop: '10px' }}>
          <label style={{ fontSize: '13px', fontWeight: 'bold' }}>Active Handle Name</label>
          <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
          <button type="submit" style={{ background: '#ff4757', color: '#fff', padding: '8px 15px', marginTop: '5px' }}>Save Changes</button>
        </form>
      </div>

      {/* CRUD Controls Segment */}
      <div style={{ background: '#fff', padding: '20px', borderRadius: '8px' }}>
        <h3>🛠️ Manage Your Publications</h3>
        <div style={{ marginTop: '15px' }}>
          {articles.map(article => (
            <div key={article.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #eee', alignItems: 'center' }}>
              {editingId === article.id ? (
                <input type="text" value={editTitle} onChange={e => setEditTitle(e.target.value)} style={{ margin: 0, width: '60%' }} />
              ) : (
                <p style={{ fontWeight: '500' }}>{article.title}</p>
              )}
              
              <div>
                {editingId === article.id ? (
                  <button onClick={() => saveEdit(article.id)} style={{ background: '#2ed573', color: '#fff', padding: '5px 10px', marginRight: '5px' }}>Save</button>
                ) : (
                  <button onClick={() => startEdit(article)} style={{ background: '#ffa502', color: '#fff', padding: '5px 10px', marginRight: '5px' }}>Edit</button>
                )}
                <button onClick={() => dispatch(deleteNews(article.id))} style={{ background: '#ff4757', color: '#fff', padding: '5px 10px' }}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}