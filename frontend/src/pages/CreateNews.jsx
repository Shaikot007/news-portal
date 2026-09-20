import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNews } from '../features/newsSlice';
import { useNavigate } from 'react-router-dom';

export default function CreateNews() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePublish = (e) => {
    e.preventDefault();
    const generatedArticle = {
      id: Date.now(),
      title,
      description: desc,
      category: 'User Post',
      image: 'https://picsum.photos'
    };
    dispatch(addNews(generatedArticle));
    navigate('/news');
  };

  return (
    <div className="container" style={{ maxWidth: '700px', background: '#fff', padding: '25px', borderRadius: '8px' }}>
      <h2>✍️ Write & Publish Article</h2>
      <form onSubmit={handlePublish} style={{ marginTop: '15px' }}>
        <input type="text" placeholder="Article Headline" required value={title} onChange={e => setTitle(e.target.value)} />
        <textarea placeholder="Write complete structural reporting details..." rows="8" required value={desc} onChange={e => setDesc(e.target.value)}></textarea>
        <button type="submit" style={{ background: '#2ed573', color: 'white', padding: '12px 24px', marginTop: '10px' }}>Publish News</button>
      </form>
    </div>
  );
}