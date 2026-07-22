import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Search, Calendar, Clock, BookOpen, ChevronRight, User } from 'lucide-react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { BLOG_POSTS } from '../data/constants'
import './BlogPage.css'

export default function BlogPage() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = useMemo(() => {
    const list = new Set(BLOG_POSTS.map(post => post.category))
    return ['all', ...Array.from(list)]
  }, [])

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter(post => {
      const matchesCategory = activeCategory === 'all' || post.category === activeCategory
      const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase()) ||
                            post.excerpt.toLowerCase().includes(search.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [activeCategory, search])

  return (
    <div className="blog-page">
      <Navbar />

      {/* Hero */}
      <section className="blog-hero">
        <div className="blog-hero-mesh" />
        <div className="container">
          <div className="blog-hero-inner text-center">
            <span className="section-label">📚 Synovers Blog</span>
            <h1 className="blog-hero-title">
              Insights, Roadmaps & <span className="text-gradient">Tech Trends</span>
            </h1>
            <p className="blog-hero-sub">
              Stay ahead in your career with expert advice, roadmap guides, and analysis on AI, software engineering, and digital business.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Categories */}
      <section className="blog-controls-section">
        <div className="container">
          <div className="blog-controls-bar card">
            {/* Category tabs */}
            <div className="blog-tabs">
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`blog-tab ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat === 'all' ? 'All Articles' : cat}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="blog-search">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="blog-search-input"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section blog-grid-section">
        <div className="container">
          {filteredPosts.length === 0 ? (
            <div className="no-posts text-center card" style={{ padding: 'var(--space-12)' }}>
              <BookOpen size={48} style={{ color: 'var(--color-text-muted)', marginBottom: '16px' }} />
              <h3>No articles found</h3>
              <p>Try searching for other keywords or selecting another category.</p>
            </div>
          ) : (
            <div className="blog-grid">
              {filteredPosts.map(post => (
                <div key={post.id} className="blog-card card">
                  <div className="blog-card-img">
                    <img
                      src={post.image}
                      alt={post.imageAlt || post.title}
                      className="blog-card-image"
                      loading="lazy"
                    />
                    <div className="blog-card-overlay">
                      <span className="badge badge-primary blog-category">{post.category}</span>
                      <span className="blog-card-hover-tip">Open article</span>
                    </div>
                  </div>
                  <div className="blog-card-body">
                    <div className="blog-meta">
                      <span><Calendar size={13} /> {post.date}</span>
                      <span><Clock size={13} /> {post.readTime}</span>
                    </div>
                    <h3 className="blog-title">{post.title}</h3>
                    <p className="blog-excerpt">{post.excerpt}</p>
                    <div className="blog-footer">
                      <div className="blog-author">
                        <div className="author-avatar"><User size={12} /></div>
                        <span>By Synovers Team</span>
                      </div>
                      <Link to={`/blog/${post.slug}`} className="read-more-link">
                        Read Article <ChevronRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="blog-newsletter">
        <div className="container">
          <div className="newsletter-card card">
            <h2 className="newsletter-title">Subscribe to our Newsletter</h2>
            <p className="newsletter-sub">Get weekly career roadmaps, tech alerts, and placement opportunity updates directly in your inbox.</p>
            <form className="newsletter-form" onSubmit={async e => {
              e.preventDefault();
              const email = e.target.elements.email.value;
              try {
                const response = await fetch("https://formsubmit.co/ajax/synovers1@gmail.com", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                  },
                  body: JSON.stringify({
                    _subject: "New Newsletter Subscriber",
                    _captcha: "false",
                    Email: email
                  })
                });
                if (response.ok) {
                  toast.success('Subscribed successfully!');
                  e.target.reset();
                } else {
                  toast.error('Failed to subscribe. Please try again.');
                }
              } catch (error) {
                toast.error('Something went wrong.');
              }
            }}>
              <input type="email" name="email" placeholder="Your work/personal email" className="input-field" required />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
