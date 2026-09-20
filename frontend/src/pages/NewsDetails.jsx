import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function NewsDetails() {
  const { id } = useParams();
  const article = useSelector((state) => state.news.articles.find(a => a.id === parseInt(id)));

  if (!article) return <div className="container"><h3>Article configuration loading...</h3></div>;

  return (
    <div className="container" style={{ maxWidth: '800px', background: '#fff', padding: '30px', borderRadius: '8px', marginTop: '20px' }}>
      <span className="category-tag">{article.category}</span>
      <h1 style={{ margin: '15px 0' }}>{article.title}</h1>
      <img src={article.image} alt={article.title} style={{ width: '100%', borderRadius: '8px', marginBottom: '20px' }} />
      <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#444' }}>{article.description}</p>
    </div>
  );
}