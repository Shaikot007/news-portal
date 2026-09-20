import { Link } from 'react-router-dom';
import './NewsCard.css';

export default function NewsCard({ article }) {
  return (
    <div className="news-card">
      <img src={article.image || 'https://placeholder.com'} alt={article.title} />
      <div className="news-card-content">
        <span className="category-tag">{article.category || 'General'}</span>
        <h3>{article.title}</h3>
        <p>{article.description?.substring(0, 100)}...</p>
        <Link to={`/news/${article.id}`} className="read-more">Read More &rarr;</Link>
      </div>
    </div>
  );
}