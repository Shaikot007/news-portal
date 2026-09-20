import { useSelector } from 'react-redux';
import NewsCard from '../components/NewsCard';

export default function News() {
  const articles = useSelector((state) => state.news.articles);

  return (
    <div className="container">
      <h2 style={{ marginBottom: '20px' }}>📰 All Published Articles</h2>
      <div className="news-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
        {articles.map(article => <NewsCard key={article.id} article={article} />)}
      </div>
    </div>
  );
}