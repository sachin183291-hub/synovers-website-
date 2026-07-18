import { Link } from 'react-router-dom'
import { Clock, Users, ChevronRight, TrendingUp, BookOpen } from 'lucide-react'

export default function CourseCard({ course, delay = 0 }) {
  const discount = Math.round((1 - course.price / course.originalPrice) * 100)

  return (
    <div
      className="course-card card"
      style={{ '--course-color': course.color, animationDelay: `${delay}s` }}
    >
      {/* Colored bar */}
      <div className="course-card-bar" style={{ background: course.color }} />

      {course.image && (
        <div className="course-card-image-wrap">
          <img src={course.image} alt={course.title} className="course-card-image" />
          {course.logo && (
            <div className="course-card-logo">
              <img src={course.logo} alt="tech logo" className="course-logo-icon" />
            </div>
          )}
        </div>
      )}

      <div className="course-card-body">
        {/* Badges */}
        <div className="course-card-badges">
          {course.isTrending && (
            <span className="badge badge-accent">
              <TrendingUp size={11} /> Trending
            </span>
          )}
          <span className="badge badge-primary">{course.category}</span>
          <span className="badge" style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--color-text-secondary)', border: '1px solid var(--color-border)' }}>
            {course.level}
          </span>
        </div>

        <h3 className="course-card-title">{course.title}</h3>
        <p className="course-card-desc">{course.shortDesc}</p>

        {/* Tags */}
        <div className="course-tags">
          {course.tags.slice(0, 4).map(tag => (
            <span key={tag} className="course-tag">{tag}</span>
          ))}
        </div>

        {/* Meta */}
        <div className="course-meta">
          <span><Clock size={13} /> {course.duration}</span>
          <span><BookOpen size={13} /> {course.hours}hrs</span>
          <span><Users size={13} /> {course.students.toLocaleString()}</span>
        </div>

        {course.pricingTiers && (
          <div className="course-duration-options">
            {course.pricingTiers.map(tier => (
              <span key={tier.duration} className="course-duration-option">{tier.duration}</span>
            ))}
          </div>
        )}

        {/* Rating */}
        <div className="course-rating">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <span key={i} style={{ color: i < Math.round(course.rating) ? '#F59E0B' : 'var(--color-surface-3)' }}>★</span>
            ))}
          </div>
          <span className="rating-num">{course.rating}</span>
          <span className="rating-count">({course.reviews.toLocaleString()})</span>
        </div>

        {/* Instructor */}
        <div className="course-instructor">
          <div className="instructor-avatar" style={{ background: course.color }}>
            {course.instructor.name[0]}
          </div>
          <div>
            <span className="instructor-name">{course.instructor.name}</span>
            <span className="instructor-title">{course.instructor.title}</span>
          </div>
        </div>
      </div>

      <div className="course-card-footer">
        <div className="course-price-block">
          <span className="course-price">₹{course.price.toLocaleString()}</span>
          <span className="course-orig-price">₹{course.originalPrice.toLocaleString()}</span>
          <span className="course-discount">{discount}% OFF</span>
        </div>
        <Link to={`/courses/${course.slug}`} className="btn btn-primary btn-sm">
          View Course <ChevronRight size={14} />
        </Link>
      </div>
    </div>
  )
}
