import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNews } from '../features/newsSlice';
import NewsCard from '../components/NewsCard';
import './Home.css';

export default function Home() {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.news.articles);

  useEffect(() => {
    // Mimicking API response payload
    fetch('https://typicode.com')
      .then(res => res.json())
      .then(data => {
        const structuralNews = data.map((item, index) => ({
          id: item.id,
          title: item.title,
          description: item.body,
          category: index % 2 === 0 ? 'Technology' : 'Business',
          image: `https://picsum.photos{item.id + 10}/400/300`
        }));
        dispatch(setNews(structuralNews));
      });
  }, [dispatch]);

  return (
    <div className="container home-page">
      {/* Section 1: Hero Featured Layout */}
      <section className="hero-section">
        <h1>Breaking Updates Worldwide</h1>
        <p>Stay informed with accurate reporting and modern journalistic perspectives.</p>
      </section>

      {/* Section 2: Top 6 Trending News (Requested Functional Rule) */}
      <section className="top-news-section">
        <h2>🔥 Top 6 Headlines</h2>
        <div className="news-grid">
          {articles.slice(0, 6).map(article => <NewsCard key={article.id} article={article} />)}
        </div>
      </section>

      {/* Section 3: Industry Highlights Banner */}
      <section className="banner-section">
        <h3>Subscribe to our Exclusive Daily Newsletters</h3>
        <button className="subscribe-btn">Join Now</button>
      </section>

      {/* Section 4: Technology Vertical */}
      <section className="tech-section">
        <h2>💻 Tech & Innovations</h2>
        <div className="news-grid">
          {articles.filter(a => a.category === 'Technology').slice(0, 3).map(article => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </section>
    </div>
  );
}