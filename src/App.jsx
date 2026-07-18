import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useState, useEffect } from 'react'

// Pages
import HomePage from './pages/HomePage'
import CoursesPage from './pages/CoursesPage'
import CourseDetailPage from './pages/CourseDetailPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import LoginPage from './pages/auth/LoginPage'
import RegisterPage from './pages/auth/RegisterPage'
import StudentDashboard from './pages/student/StudentDashboard'
import AdminDashboard from './pages/admin/AdminDashboard'
import HireTalentPage from './pages/HireTalentPage'
import SuccessStoriesPage from './pages/SuccessStoriesPage'
import BlogPage from './pages/BlogPage'
import BlogDetailPage from './pages/BlogDetailPage'
import ProductsPage from './pages/ProductsPage'
import ServicesPage from './pages/ServicesPage'
import PortfolioPage from './pages/PortfolioPage'
import SpecialOfferPage from './pages/SpecialOfferPage'
import NotFoundPage from './pages/NotFoundPage'

// Context
import { ThemeProvider } from './context/ThemeContext'
import { AuthProvider } from './context/AuthContext'

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                background: '#161929',
                color: '#F1F5F9',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '12px',
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.9rem',
              },
              success: {
                iconTheme: { primary: '#22C55E', secondary: '#161929' },
              },
              error: {
                iconTheme: { primary: '#EF4444', secondary: '#161929' },
              },
            }}
          />
          <Routes>
            {/* Public */}
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/courses/:slug" element={<CourseDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/hire-talent" element={<HireTalentPage />} />
            <Route path="/success-stories" element={<SuccessStoriesPage />} />
            <Route path="/blog/:slug" element={<BlogDetailPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/special-offers" element={<SpecialOfferPage />} />

            {/* Auth */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            {/* Portals */}
            <Route path="/app/*" element={<StudentDashboard />} />
            <Route path="/admin/*" element={<AdminDashboard />} />

            {/* 404 */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
