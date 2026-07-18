import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Search, Filter, Star, Users, Clock, Zap, TrendingUp, ChevronRight, BookOpen } from 'lucide-react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import CourseCard from '../components/course/CourseCard'
import { COURSES, CATEGORIES } from '../data/constants'
import './CoursesPage.css'

export default function CoursesPage() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [activeLevel, setActiveLevel] = useState('all')
  const [sortBy, setSortBy] = useState('popular')

  const levels = ['all', 'Beginner', 'Intermediate', 'Advanced']

  const filtered = useMemo(() => {
    let result = [...COURSES]
    if (search) result = result.filter(c =>
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.tags.some(t => t.toLowerCase().includes(search.toLowerCase()))
    )
    if (activeCategory !== 'all') result = result.filter(c => c.category === activeCategory)
    if (activeLevel !== 'all') result = result.filter(c => c.level === activeLevel)
    if (sortBy === 'popular') result.sort((a, b) => b.students - a.students)
    else if (sortBy === 'rating') result.sort((a, b) => b.rating - a.rating)
    else if (sortBy === 'price-low') result.sort((a, b) => a.price - b.price)
    else if (sortBy === 'price-high') result.sort((a, b) => b.price - a.price)
    return result
  }, [search, activeCategory, activeLevel, sortBy])

  return (
    <div className="courses-page">
      <Navbar />

      {/* Hero */}
      <section className="courses-hero">
        <div className="container">
          <div className="courses-hero-inner">
            <span className="section-label">🎓 All Courses</span>
            <h1 className="courses-hero-title">
              Find Your <span className="text-gradient">Perfect Course</span>
            </h1>
            <p className="courses-hero-sub">
              Industry-designed programs with live mentoring, real projects & guaranteed placement support
            </p>
            <div className="courses-search-bar">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                placeholder="Search courses, skills, technologies..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="courses-search-input"
              />
              {search && (
                <button className="search-clear" onClick={() => setSearch('')}>✕</button>
              )}
            </div>
            <div className="courses-hero-stats">
              <span>📚 {COURSES.length} Courses</span>
              <span>🎓 7,500+ Students</span>
              <span>🏆 97% Placement Rate</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="courses-filters-section">
        <div className="container">
          <div className="filters-row">
            <div className="category-filters">
              {CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  <span>{cat.icon}</span> {cat.label}
                </button>
              ))}
            </div>
            <div className="filter-controls">
              <div className="level-filter">
                <Filter size={14} />
                <select value={activeLevel} onChange={e => setActiveLevel(e.target.value)} className="filter-select">
                  {levels.map(l => (
                    <option key={l} value={l}>{l === 'all' ? 'All Levels' : l}</option>
                  ))}
                </select>
              </div>
              <div className="sort-filter">
                <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="filter-select">
                  <option value="popular">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="courses-grid-section section">
        <div className="container">
          <div className="results-header">
            <p className="results-count">
              Showing <strong>{filtered.length}</strong> courses
              {activeCategory !== 'all' && ` in ${activeCategory}`}
            </p>
          </div>

          {filtered.length === 0 ? (
            <div className="no-results">
              <div className="no-results-icon">🔍</div>
              <h3>No courses found</h3>
              <p>Try adjusting your search or filters</p>
              <button className="btn btn-primary" onClick={() => { setSearch(''); setActiveCategory('all'); setActiveLevel('all') }}>
                Clear Filters
              </button>
            </div>
          ) : (
            <>
              <div className="courses-grid">
                {filtered.map(course => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>

              {/* If there are few results, show related suggestions to avoid empty space */}
              {filtered.length > 0 && filtered.length < 4 && (
                <div className="related-courses-section">
                  <h3 className="related-title">You may also like</h3>
                  <div className="related-courses-grid">
                    {COURSES.filter(c => !filtered.some(f => f.id === c.id)).slice(0, 4).map(c => (
                      <CourseCard key={c.id} course={c} />
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
