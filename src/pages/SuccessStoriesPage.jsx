import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Star, Quote, Search, TrendingUp, ArrowUpRight, Award, Compass } from 'lucide-react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { TESTIMONIALS } from '../data/constants'
import './SuccessStoriesPage.css'

export default function SuccessStoriesPage() {
  const [filterCourse, setFilterCourse] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const coursesList = useMemo(() => {
    const list = new Set(TESTIMONIALS.map(t => t.course))
    return ['all', ...Array.from(list)]
  }, [])

  const filteredStories = useMemo(() => {
    return TESTIMONIALS.filter(t => {
      const matchCourse = filterCourse === 'all' || t.course === filterCourse
      const matchSearch = t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          t.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          t.text.toLowerCase().includes(searchQuery.toLowerCase())
      return matchCourse && matchSearch
    })
  }, [filterCourse, searchQuery])

  // Aggregate stats
  const averageHike = '120%'
  const highestPackage = '18 LPA'
  const partnerCount = '5+'

  return (
    <div className="stories-page">
      <Navbar />

      {/* Hero */}
      <section className="stories-hero">
        <div className="stories-hero-mesh" />
        <div className="container">
          <div className="stories-hero-inner text-center">
            <span className="section-label">🏆 Success Stories</span>
            <h1 className="stories-hero-title">
              Our Graduates <span className="text-gradient">Speak For Us</span>
            </h1>
            <p className="stories-hero-sub">
              Discover how 7500+ students from diverse backgrounds transitioned into high-paying IT roles with Synovers's practical programs.
            </p>
          </div>
        </div>
      </section>

      {/* Metrics Row */}
      <section className="stories-metrics-section">
        <div className="container">
          <div className="stories-metrics-grid">
            {[
              { label: 'Highest Package Offered', value: highestPackage, desc: 'AI Engineer Role', icon: <Award /> },
              { label: 'Average Salary Hike', value: averageHike, desc: 'Non-IT to IT Transitions', icon: <TrendingUp /> },
              { label: 'Hiring Partners', value: partnerCount, desc: 'Leading Indian MNCs & Startups', icon: <Compass /> }
            ].map((metric, i) => (
              <div key={i} className="metric-story-card card">
                <div className="metric-story-icon">{metric.icon}</div>
                <div>
                  <h3 className="metric-story-value text-gradient">{metric.value}</h3>
                  <p className="metric-story-label">{metric.label}</p>
                  <span className="metric-story-desc">{metric.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="stories-filters-section">
        <div className="container">
          <div className="stories-filters-bar card">
            <div className="stories-search-input-wrap">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                placeholder="Search alumni, companies, keywords..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="stories-search-input"
              />
            </div>
            <div className="stories-filter-select-wrap">
              <select
                value={filterCourse}
                onChange={e => setFilterCourse(e.target.value)}
                className="stories-filter-select"
              >
                <option value="all">All Programs</option>
                {coursesList.filter(c => c !== 'all').map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Stories Catalog */}
      <section className="section stories-catalog-section">
        <div className="container">
          {filteredStories.length === 0 ? (
            <div className="no-stories text-center">
              <p>No success stories found matching your filter criteria.</p>
            </div>
          ) : (
            <div className="stories-grid">
              {filteredStories.map(story => (
                <div key={story.id} className="story-card card">
                  <div className="story-quote-icon"><Quote size={28} /></div>
                  <div className="story-rating">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} size={15} fill="#F59E0B" color="#F59E0B" />
                    ))}
                  </div>
                  <p className="story-text">"{story.text}"</p>
                  <div className="story-profile">
                    <div className="story-avatar">
                      {story.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </div>
                    <div className="story-details">
                      <h4 className="story-name">{story.name}</h4>
                      <p className="story-role">{story.role} @ <strong>{story.company}</strong></p>
                      <span className="story-course">{story.course} · {story.batch}</span>
                    </div>
                    <div className="story-ctc-card">
                      <span className="story-ctc-label">CTC Package</span>
                      <span className="story-ctc-val">{story.ctc}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="stories-cta">
        <div className="container">
          <div className="stories-cta-card card">
            <h2>Be Our Next Success Story</h2>
            <p>Join thousands of professionals who successfully switched careers. Free counseling & EMI options are available.</p>
            <div className="stories-cta-actions">
              <Link to="/courses" className="btn btn-primary btn-lg">Explore Programs</Link>
              <Link to="/contact" className="btn btn-outline btn-lg">Book Free Demo Class</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
