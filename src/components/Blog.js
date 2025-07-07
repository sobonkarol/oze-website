import React, { useState, useEffect } from 'react';
import './Blog.css';

const blogPosts = [
  {
    id: 1,
    title: 'Nowe funkcje klimatyzatorów w 2025 roku',
    image: '/images/blog-klima1.jpg',
    excerpt: 'Nowoczesne klimatyzatory to już nie tylko chłodzenie – poznaj trendy, które zmieniają rynek HVAC...',
    content: `W 2025 roku klimatyzatory oferują m.in. sterowanie głosowe, funkcje samoczyszczenia, jonizacji powietrza oraz automatyczne dostosowanie mocy do warunków. Coraz więcej urządzeń integruje się z systemami smart home i wykorzystuje AI. Ekologiczne czynniki chłodnicze i energooszczędność to nowe standardy.`,
  },
  {
    id: 2,
    title: 'Fotowoltaika a magazyny energii – co się zmieniło?',
    image: '/images/blog-pv1.jpg',
    excerpt: 'Nowe przepisy i technologie sprawiają, że magazynowanie energii staje się coraz bardziej opłacalne...',
    content: `Magazyny energii stają się standardem w nowoczesnych instalacjach PV. Dzięki dotacjom i rozwojowi technologii użytkownicy mogą zwiększyć autokonsumpcję i niezależność od sieci. Coraz popularniejsze są magazyny LiFePO4 oraz systemy zarządzania energią, które automatyzują procesy ładowania i rozładowania.`,
  },
  {
    id: 3,
    title: 'Kiedy warto serwisować klimatyzację?',
    image: '/images/blog-klima2.jpg',
    excerpt: 'Regularny serwis klimatyzatora to klucz do jego sprawności i długowieczności...',
    content: `Serwis klimatyzacji najlepiej przeprowadzać raz w roku – idealnie wiosną. W zakres przeglądu wchodzi m.in. czyszczenie filtrów, skraplacza, parownika, sprawdzenie szczelności oraz poziomu czynnika chłodniczego. Regularne serwisowanie zapewnia lepszą wydajność i chroni przed alergenami.`,
  },
];

const Blog = () => {
  const [activePost, setActivePost] = useState(null);

  // Ukrywanie nawigacji podczas otwartego posta
  useEffect(() => {
    const nav = document.querySelector('.navbar-custom');
    if (nav) {
      nav.style.display = activePost ? 'none' : 'flex';
    }
  }, [activePost]);

  return (
    <section className="blog-section" id="blog">
      <div className="container">
        <h2 className="text-center mb-5">Nasz blog</h2>
        <div className="row">
          {blogPosts.map((post) => (
            <div key={post.id} className="col-md-4 mb-4">
              <div className="blog-card">
                <img src={post.image} alt={post.title} className="blog-image" />
                <h4 className="blog-title">{post.title}</h4>
                <p className="blog-excerpt">{post.excerpt}</p>
                <button className="custom-button" onClick={() => setActivePost(post)}>
                  Czytaj więcej
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Popup z całą treścią */}
        {activePost && (
          <div className="blog-popup">
            <div className="blog-popup-content">
              <button className="blog-popup-close" onClick={() => setActivePost(null)}>
                &times;
              </button>
              <h3>{activePost.title}</h3>
              <img src={activePost.image} alt={activePost.title} className="blog-popup-image" />
              <p>{activePost.content}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;