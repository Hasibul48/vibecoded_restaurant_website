'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from "@/lib/utils"

interface NavbarProps {
  variant?: 'home' | 'simple'
}

export default function Navbar({ variant = 'simple' }: NavbarProps) {
  const navRef = useRef<HTMLElement>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const nav = navRef.current
    if (!nav) return

    if (variant !== 'home') {
      nav.style.background = 'rgba(11, 11, 11, 0.75)'
      nav.style.backdropFilter = 'blur(30px)'
      nav.style.borderBottom = '1px solid rgba(255, 255, 255, 0.03)'
      return
    }

    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        nav.style.background = 'rgba(11, 11, 11, 0.75)'
        nav.style.backdropFilter = 'blur(30px)'
        nav.style.borderBottom = '1px solid rgba(255, 255, 255, 0.03)'
      } else {
        nav.style.background = 'transparent'
        nav.style.backdropFilter = 'none'
        nav.style.borderBottom = 'none'
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [variant])

  const closeMobile = () => setMenuOpen(false)

  if (variant === 'home') {
    return (
      <>
        <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5" style={{ transition: 'background 0.4s ease, backdrop-filter 0.4s ease' }}>
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <a href="#" className="font-script text-2xl md:text-3xl transition-colors" style={{ color: 'var(--gold)' }}>Aurelius</a>
            <div className="hidden md:flex items-center gap-10">
              <a href="#story" className="nav-link text-sm tracking-widest uppercase transition-colors" style={{ color: 'rgba(245, 239, 230, 0.7)', letterSpacing: '2px' }} data-section="story">Story</a>
              <a href="#menu" className="nav-link text-sm tracking-widest uppercase transition-colors" style={{ color: 'rgba(245, 239, 230, 0.7)', letterSpacing: '2px' }} data-section="menu">Menu</a>
              <a href="#testimonials" className="nav-link text-sm tracking-widest uppercase transition-colors" style={{ color: 'rgba(245, 239, 230, 0.7)', letterSpacing: '2px' }} data-section="testimonials">Testimonials</a>
              <a href="#signatures" className="nav-link text-sm tracking-widest uppercase transition-colors" style={{ color: 'rgba(245, 239, 230, 0.7)', letterSpacing: '2px' }} data-section="signatures">Popular Items</a>
              <a href="#awards" className="nav-link text-sm tracking-widest uppercase transition-colors" style={{ color: 'rgba(245, 239, 230, 0.7)', letterSpacing: '2px' }} data-section="awards">Awards</a>
              <a href="#reservation" className="nav-link text-sm tracking-widest uppercase transition-colors" style={{ color: 'rgba(245, 239, 230, 0.7)', letterSpacing: '2px' }} data-section="reservation">Contact</a>
            </div>
            <button className="md:hidden p-2" style={{ color: 'var(--cream)' }} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 6h18M3 12h18M3 18h18"/>
              </svg>
            </button>
          </div>
        </nav>

        <div
          className={cn(
            "fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden",
            menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
          style={{ background: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(24px)' }}
        >
          <a href="#story" className="font-serif text-2xl transition-colors" style={{ color: 'var(--cream)' }} onClick={closeMobile}>Story</a>
          <a href="#menu" className="font-serif text-2xl transition-colors" style={{ color: 'var(--cream)' }} onClick={closeMobile}>Menu</a>
          <a href="#testimonials" className="font-serif text-2xl transition-colors" style={{ color: 'var(--cream)' }} onClick={closeMobile}>Testimonials</a>
          <a href="#signatures" className="font-serif text-2xl transition-colors" style={{ color: 'var(--cream)' }} onClick={closeMobile}>Popular Items</a>
          <a href="#awards" className="font-serif text-2xl transition-colors" style={{ color: 'var(--cream)' }} onClick={closeMobile}>Awards</a>
          <a href="#reservation" className="font-serif text-2xl transition-colors" style={{ color: 'var(--cream)' }} onClick={closeMobile}>Contact</a>
        </div>
      </>
    )
  }

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5" style={{ transition: 'background 0.4s ease, backdrop-filter 0.4s ease' }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="font-script text-2xl md:text-3xl" style={{ color: 'var(--gold)' }}>Aurelius</a>
        <a href="/" className="text-sm tracking-widest uppercase transition-colors" style={{ color: 'rgba(245, 239, 230, 0.7)', letterSpacing: '2px' }}>Home</a>
      </div>
    </nav>
  )
}
