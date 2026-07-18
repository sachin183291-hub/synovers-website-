import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { BLOG_POSTS } from '../data/constants'
import './BlogPage.css'

function renderBlogContent(content) {
  return content
    .split(/\n\s*\n/)
    .filter(Boolean)
    .map((block, index) => {
      const lines = block.split('\n').map(line => line.trim()).filter(Boolean)
      const listItems = lines.filter(line => line.startsWith('- ')).map(line => line.replace('- ', ''))

      if (lines[0]?.startsWith('### ')) {
        return <h3 key={index} className="blog-section-title">{lines[0].replace('### ', '')}</h3>
      }

      if (listItems.length > 0 && listItems.length === lines.length) {
        return (
          <ul key={index} className="blog-list">
            {listItems.map((item, itemIndex) => <li key={itemIndex}>{item}</li>)}
          </ul>
        )
      }

      return <p key={index} className="blog-paragraph">{block.trim()}</p>
    })
}

export default function BlogDetailPage() {
  const { slug } = useParams()
  const post = BLOG_POSTS.find(p => p.slug === slug)

  if (!post) {
    return (
      <div className="blog-page">
        <Navbar />
        <div className="container" style={{ padding: '120px 0' }}>
          <h2>Article not found</h2>
          <p>The article you're looking for does not exist or has been removed.</p>
          <Link to="/blog" className="btn">Back to blog</Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="blog-page">
      <Navbar />
      <section className="blog-hero" style={{ paddingBottom: '40px' }}>
        <div className="container">
          <div className="blog-hero-inner">
            <span className="section-label">📚 Synovers Blog</span>
            <h1 className="blog-hero-title">{post.title}</h1>
            <div className="blog-meta" style={{ marginTop: 12 }}>
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card blog-detail-card">
            <img
              src={post.image}
              alt={post.imageAlt || post.title}
              className="blog-detail-image"
            />

            <div className="blog-highlight-card">
              <p className="blog-highlight-label">Key takeaway</p>
              <h3>{post.highlight}</h3>
            </div>

            <div className="blog-content">
              {renderBlogContent(post.content)}
            </div>

            <div style={{ marginTop: 24 }}>
              <Link to="/blog" className="read-more-link"><ArrowLeft size={14} /> Back to articles</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
