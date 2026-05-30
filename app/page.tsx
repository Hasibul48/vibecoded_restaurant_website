'use client'

import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const testimonials = [
  { quote: "The most transcendent dining experience I have had in a decade. Bellini's truffle risotto is nothing short of a masterpiece.", name: "James Thornton", source: "The New York Times", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face&q=60" },
  { quote: "Aurelius redefines what fine dining means in the 21st century. Impeccable service, daring flavors, and an atmosphere of pure elegance.", name: "Sophia Laurent", source: "Michelin Guide", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=face&q=60" },
  { quote: "An orchestra of flavors conducted with precision. The Wagyu Tomahawk alone is worth the journey to New York.", name: "David Chen", source: "Food & Wine Magazine", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face&q=60" },
  { quote: "Every plate tells a story, and at Aurelius, each chapter is more captivating than the last. A true gem of New York dining.", name: "Elena Vasquez", source: "Forbes Travel Guide", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face&q=60" },
  { quote: "The wine pairing is an education in itself. Each vintage chosen to elevate Bellini's already extraordinary cuisine.", name: "Marcus Webb", source: "The Wall Street Journal", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=face&q=60" },
  { quote: "Bellini's hand-rolled pappardelle is a revelation — silken ribbons of pasta that taste of tradition and imagination in every bite.", name: "Isabella Rossi", source: "La Cucina Italiana", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=face&q=60" },
  { quote: "From the amuse-bouche to the petit fours, every detail is considered. This is cooking at the highest level.", name: "Thomas Knight", source: "The Guardian", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=64&h=64&fit=crop&crop=face&q=60" },
  { quote: "The dessert alone — Valrhona chocolate with sea salt and olive oil — is worth the pilgrimage. Hauntingly beautiful.", name: "Amara Osei", source: "Condé Nast Traveler", avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=64&h=64&fit=crop&crop=face&q=60" },
  { quote: "Aurelius has achieved something rare — a dining room that feels both grand and intimate, where every guest is treated like royalty.", name: "Liam Gallagher", source: "The Independent", avatar: "https://images.unsplash.com/photo-1509955259780-7b1468f5f77c?w=64&h=64&fit=crop&crop=face&q=60" },
  { quote: "The tasting menu is a journey through Bellini's imagination — surprising, bold, and deeply satisfying. An unforgettable evening.", name: "Victoria Park", source: "Harper's Bazaar", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&fit=crop&crop=face&q=60" },
]

const signatures = [
  { name: "Truffle Pappardelle", desc: "Wild mushrooms, aged parmesan, fresh thyme", badge: "Handmade", img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&h=900&fit=crop&auto=format&q=80" },
  { name: "Herb-Crusted Lamb", desc: "Rosemary, garlic confit, red wine jus", badge: "Grilled", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=900&fit=crop&auto=format&q=80" },
  { name: "Wagyu Tomahawk", desc: "Herb crust, roasted root vegetables", badge: "Prime Cut", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=900&fit=crop&auto=format&q=80" },
  { name: "Butter-Poached Lobster", desc: "Vanilla beurre blanc, sea asparagus", badge: "Ocean Fresh", img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=900&fit=crop&auto=format&q=80" },
  { name: "Black Truffle Risotto", desc: "Carnaroli, aged parmesan, Perigord truffle", badge: "Creamy", img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&h=900&fit=crop&auto=format&q=80" },
  { name: "Valrhona Chocolate", desc: "Dark ganache, sea salt, olive oil", badge: "Decadent", img: "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?w=800&h=900&fit=crop&auto=format&q=80" },
  { name: "Truffle Pizza", desc: "Mushroom duxelles, fontina, arugula", badge: "Wood-Fired", img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=900&fit=crop&auto=format&q=80" },
]

export default function Home() {
  const progressRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)
  const sigRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const gsap = (window as any).gsap
    const ScrollTrigger = (window as any).ScrollTrigger
    if (!gsap || !ScrollTrigger) return

    gsap.registerPlugin(ScrollTrigger)

    // Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.6,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    let lastSTUpdate = 0
    lenis.on('scroll', () => {
      const now = performance.now()
      if (now - lastSTUpdate > 50) {
        lastSTUpdate = now
        ScrollTrigger.update()
      }
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    const spring = [0.16, 1, 0.3, 1]

    // Loader
    const loader = document.getElementById('pageLoader')
    if (loader) {
      setTimeout(() => { loader.classList.add('hidden') }, 600)
    }

    // Hero stagger
    const heroTimeline = gsap.timeline({
      delay: 0.6,
      defaults: { duration: 1, ease: spring }
    })
    heroTimeline
      .from('.hero-img-rotate', { scale: 0.6, opacity: 0, duration: 1.2 })
      .from('.hero-text-line', { y: 60, opacity: 0, stagger: 0.1 }, '-=0.6')
      .from('.hero-description', { y: 30, opacity: 0 }, '-=0.4')
      .from('.hero-buttons', { y: 30, opacity: 0 }, '-=0.3')
      .from('.chef-profile', { y: 20, opacity: 0 }, '-=0.2')
      .from('.particle', { scale: 0, opacity: 0, stagger: 0.03 }, '-=0.4')
      .from('.food-item', { scale: 0, opacity: 0, stagger: 0.05 }, '-=0.3')

    // Food items scroll out — each in different direction
    const foodDirs = [
      { x: -70, y: -60, rotate: -15 },
      { x: 70, y: -50, rotate: 12 },
      { x: -50, y: 70, rotate: -10 },
      { x: 60, y: 65, rotate: 18 },
    ]
    gsap.utils.toArray('.food-item').forEach((item: any, i: number) => {
      const d = foodDirs[i] || foodDirs[0]
      gsap.to(item, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
        },
        x: d.x,
        y: d.y,
        rotation: d.rotate,
        opacity: 0,
        ease: 'none',
      })
    })

    // Scroll reveals
    const revealDefaults = { duration: 0.9, ease: spring }
    gsap.utils.toArray('.reveal').forEach((el: any) => {
      gsap.fromTo(el, { opacity: 0, y: 40 }, {
        opacity: 1, y: 0,
        scrollTrigger: { trigger: el, start: 'top 88%', end: 'top 40%', toggleActions: 'play none none none' },
        ...revealDefaults
      })
    })
    gsap.utils.toArray('.reveal-left').forEach((el: any) => {
      gsap.fromTo(el, { opacity: 0, x: -50 }, {
        opacity: 1, x: 0,
        scrollTrigger: { trigger: el, start: 'top 85%', end: 'top 40%', toggleActions: 'play none none none' },
        ...revealDefaults
      })
    })
    gsap.utils.toArray('.reveal-right').forEach((el: any) => {
      gsap.fromTo(el, { opacity: 0, x: 50 }, {
        opacity: 1, x: 0,
        scrollTrigger: { trigger: el, start: 'top 85%', end: 'top 40%', toggleActions: 'play none none none' },
        ...revealDefaults
      })
    })
    gsap.utils.toArray('.reveal-scale').forEach((el: any) => {
      gsap.fromTo(el, { opacity: 0, scale: 0.88 }, {
        opacity: 1, scale: 1,
        scrollTrigger: { trigger: el, start: 'top 88%', end: 'top 40%', toggleActions: 'play none none none' },
        ...revealDefaults
      })
    })

    // Menu items stagger
    gsap.utils.toArray('.menu-item').forEach((item: any, i: number) => {
      gsap.fromTo(item, { opacity: 0, x: -20 }, {
        opacity: 1, x: 0, duration: 0.6, delay: i * 0.06, ease: spring,
        scrollTrigger: { trigger: item, start: 'top 90%', end: 'top 40%', toggleActions: 'play none none none' }
      })
    })

    // Awards stagger
    gsap.utils.toArray('.award-item').forEach((item: any, i: number) => {
      gsap.fromTo(item, { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.6, delay: i * 0.08, ease: spring,
        scrollTrigger: { trigger: item, start: 'top 85%', toggleActions: 'play none none none' }
      })
    })

    // Stat counters
    document.querySelectorAll('.story-stat .number').forEach((el: any) => {
      const text = el.textContent.trim()
      const isK = text.indexOf('K') > -1
      const num = parseFloat(text) || 0
      if (isK) {
        const obj = { val: 0 }
        gsap.to(obj, {
          val: num, duration: 2, ease: 'power2.out',
          onUpdate: () => {
            const v = Math.floor(obj.val)
            el.textContent = v >= 1000 ? (v / 1000).toFixed(0) + 'K+' : v + '+'
          },
          scrollTrigger: { trigger: el.closest('.story-stat'), start: 'top 85%', toggleActions: 'play none none reverse' }
        })
      } else {
        const obj = { val: 0 }
        gsap.to(obj, {
          val: num, duration: 2, ease: 'power2.out',
          onUpdate: () => { el.textContent = Math.floor(obj.val) },
          scrollTrigger: { trigger: el.closest('.story-stat') || el, start: 'top 85%', toggleActions: 'play none none reverse' }
        })
      }
    })

    // Navbar active state (IntersectionObserver)
    const navLinks = document.querySelectorAll('.nav-link')
    const sections: { id: string; el: Element; link: Element }[] = []
    navLinks.forEach((link) => {
      const sectionId = link.getAttribute('data-section')
      const section = document.getElementById(sectionId!)
      if (section) sections.push({ id: sectionId!, el: section, link })
    })
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id')
          navLinks.forEach((link) => {
            link.classList.remove('active')
            if (link.getAttribute('data-section') === id) link.classList.add('active')
          })
        }
      })
    }, { threshold: 0.25, rootMargin: '-80px 0px -20% 0px' })
    sections.forEach((s) => sectionObserver.observe(s.el))

    // Scroll progress bar
    const progress = progressRef.current
    if (progress) {
      const handleProgress = () => {
        const scrollTop = window.pageYOffset
        const docHeight = document.documentElement.scrollHeight - window.innerHeight
        progress.style.width = (docHeight > 0 ? (scrollTop / docHeight) * 100 : 0) + '%'
      }
      window.addEventListener('scroll', handleProgress)
    }

    // Light spot parallax
    gsap.utils.toArray('.light-spot').forEach((spot: any) => {
      gsap.to(spot, {
        y: () => Math.random() * 80 + 40,
        x: () => (Math.random() - 0.5) * 60,
        ease: 'none',
        scrollTrigger: {
          trigger: spot.closest('section') || spot.parentElement,
          start: 'top bottom', end: 'bottom top', scrub: 1.5
        }
      })
    })

    // Magnetic buttons
    document.querySelectorAll('.btn-primary, .btn-glass').forEach((btn: any) => {
      btn.addEventListener('mousemove', (e: MouseEvent) => {
        const rect = btn.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        gsap.to(btn, { x: x * 0.15, y: y * 0.15, duration: 0.4, ease: 'power2.out' })
      })
      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: spring })
      })
    })

    // Mouse follower
    const follower = followerRef.current
    if (follower) {
      let mouseX = 0, mouseY = 0, followerX = 0, followerY = 0
      const onMouseMove = (e: MouseEvent) => { mouseX = e.clientX; mouseY = e.clientY }
      document.addEventListener('mousemove', onMouseMove)
      const animateFollower = () => {
        followerX += (mouseX - followerX) * 0.08
        followerY += (mouseY - followerY) * 0.08
        follower.style.transform = `translate(${followerX}px, ${followerY}px) translate(-50%, -50%)`
        requestAnimationFrame(animateFollower)
      }
      animateFollower()
      document.querySelectorAll('a, button, .menu-item, .horizontal-card, .award-item, .testimonial-card').forEach((el) => {
        el.addEventListener('mouseenter', () => follower.classList.add('active'))
        el.addEventListener('mouseleave', () => follower.classList.remove('active'))
      })
    }

    // Particles randomization
    document.querySelectorAll('.particle').forEach((p: any) => {
      const duration = parseFloat(p.style.animationDuration) || 8
      const delay = parseFloat(p.style.animationDelay) || 0
      p.style.animationDuration = (duration + (Math.random() * 2 - 1)) + 's'
      p.style.animationDelay = (delay + Math.random()) + 's'
    })

    // Signatures auto-scroll + drag
    const sigTrack = sigRef.current
    if (sigTrack) {
      let sigSpeed = 0.8
      const step = 304
      let sigPos = 0
      let sigTarget: number | null = null
      let isSigAuto = true
      let isSigDrag = false
      let dragStartX = 0
      let dragStartPos = 0
      let snapTimer: any = null
      let resumeDelay = 2000

      const getMaxScroll = () => Math.max(0, sigTrack.scrollWidth - sigTrack.parentElement!.clientWidth)

      const applyPos = (val: number) => {
        const max = getMaxScroll()
        sigPos = Math.max(0, Math.min(max, val))
        sigTrack.style.transform = `translateX(${-sigPos}px)`
      }

      const sigLoop = () => {
        if (sigTarget !== null) {
          const diff = sigTarget - sigPos
          if (Math.abs(diff) < 0.5) {
            applyPos(sigTarget)
            sigTarget = null
            clearTimeout(snapTimer)
            snapTimer = setTimeout(() => { isSigAuto = true }, resumeDelay)
            resumeDelay = 2000
          } else {
            applyPos(sigPos + diff * 0.12)
          }
        } else if (isSigAuto) {
          const max = getMaxScroll()
          let next = sigPos + sigSpeed
          if (next >= max) next = 0
          applyPos(next)
        }
        requestAnimationFrame(sigLoop)
      }

      const snapNearest = () => {
        const idx = Math.round(sigPos / step)
        const max = getMaxScroll()
        sigTarget = Math.max(0, Math.min(max, idx * step))
      }

      sigTrack.addEventListener('mousedown', (e) => {
        isSigDrag = true; isSigAuto = false; sigTarget = null
        sigTrack.style.cursor = 'grabbing'
        dragStartX = e.clientX; dragStartPos = sigPos
        e.preventDefault()
      })
      document.addEventListener('mousemove', (e) => {
        if (!isSigDrag) return
        applyPos(dragStartPos - (e.clientX - dragStartX))
      })
      document.addEventListener('mouseup', () => {
        if (!isSigDrag) return
        isSigDrag = false; sigTrack.style.cursor = 'grab'; snapNearest()
      })
      sigTrack.addEventListener('mouseleave', () => {
        resumeDelay = 0
        if (isSigDrag) { isSigDrag = false; sigTrack.style.cursor = 'grab'; snapNearest() }
      })
      sigTrack.addEventListener('touchstart', (e) => {
        isSigDrag = true; isSigAuto = false; sigTarget = null
        dragStartX = e.touches[0].clientX; dragStartPos = sigPos
      }, { passive: true })
      sigTrack.addEventListener('touchmove', (e) => {
        if (!isSigDrag) return
        applyPos(dragStartPos - (e.touches[0].clientX - dragStartX))
      }, { passive: true })
      sigTrack.addEventListener('touchend', () => {
        if (!isSigDrag) return; isSigDrag = false; snapNearest()
      })

      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        requestAnimationFrame(sigLoop)
      }
    }

    // Section heading character reveal
    document.querySelectorAll('.section-heading').forEach((heading: any) => {
      const words = heading.querySelectorAll('span')
      words.forEach((word: any) => {
        const chars = word.textContent.trim().split('')
        word.textContent = ''
        chars.forEach((char: string) => {
          const span = document.createElement('span')
          span.textContent = char === ' ' ? '\u00A0' : char
          span.style.display = 'inline-block'
          span.style.opacity = '0'
          span.style.transform = 'translateY(30px) rotateX(40deg)'
          span.style.transition = 'none'
          word.appendChild(span)
        })
      })
      const allChars = heading.querySelectorAll('span > span')
      gsap.to(allChars, {
        opacity: 1, y: 0, rotateX: 0, duration: 0.7, stagger: 0.025, ease: spring,
        scrollTrigger: { trigger: heading, start: 'top 85%', toggleActions: 'play none none none' }
      })
    })

    // Nav staggered entrance
    gsap.from('.nav-link', { y: -20, opacity: 0, duration: 0.6, stagger: 0.08, ease: spring, delay: 0.4 })

    // Nav link micro-interactions
    document.querySelectorAll('.nav-link').forEach((link: any) => {
      link.addEventListener('mouseenter', () => gsap.to(link, { scale: 1.05, duration: 0.3, ease: spring }))
      link.addEventListener('mouseleave', () => gsap.to(link, { scale: 1, duration: 0.4, ease: spring }))
    })

    // Footer staggered reveal
    gsap.utils.toArray('.footer-link, .footer-social-ring').forEach((el: any, i: number) => {
      gsap.fromTo(el, { opacity: 0, y: 15 }, {
        opacity: 1, y: 0, duration: 0.5, delay: i * 0.03, ease: spring,
        scrollTrigger: { trigger: el.closest('footer'), start: 'top 85%', toggleActions: 'play none none none' }
      })
    })

    // Card float
    gsap.utils.toArray('.menu-card, .award-item, .reservation-card').forEach((card: any) => {
      gsap.to(card, {
        y: -6, duration: 3 + Math.random() * 1.5, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: Math.random() * 2
      })
    })
    gsap.utils.toArray('.testimonial-card, .horizontal-card').forEach((card: any) => {
      gsap.to(card, {
        y: -24, duration: 4 + Math.random() * 1.5, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: Math.random() * 2, force3D: true
      })
    })

    // Image parallax on hover
    document.querySelectorAll('.showcase-card, .story-image-wrap, .reservation-side-image').forEach((wrap: any) => {
      wrap.addEventListener('mousemove', (e: MouseEvent) => {
        const rect = wrap.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width - 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5
        const img = wrap.querySelector('img')
        if (img) gsap.to(img, { x: x * 15, y: y * 15, duration: 0.8, ease: 'power2.out' })
      })
      wrap.addEventListener('mouseleave', () => {
        const img = wrap.querySelector('img')
        if (img) gsap.to(img, { x: 0, y: 0, duration: 0.8, ease: 'power2.out' })
      })
    })

    // Refresh ScrollTrigger
    window.addEventListener('load', () => ScrollTrigger.refresh())
    window.addEventListener('resize', () => ScrollTrigger.refresh())

    return () => {
      lenis.destroy()
      ScrollTrigger.getAll().forEach((st: any) => st.kill())
    }
  }, [])

  return (
    <main className="overflow-x-hidden">
      <div className="grain-overlay"></div>

      {/* LOADER */}
      <div className="page-loader" id="pageLoader">
        <div className="loader-ring"></div>
      </div>

      {/* SCROLL PROGRESS */}
      <div className="scroll-progress" ref={progressRef}></div>

      {/* MOUSE FOLLOWER */}
      <div className="mouse-follower" ref={followerRef}></div>

      <Navbar variant="home" />

      {/* HERO SECTION */}
      <section ref={heroRef} className="relative min-h-screen flex items-center bg-gradient-shift" style={{ background: 'radial-gradient(ellipse 100% 70% at 50% 20%, #10402e 0%, #092418 50%, #070707 100%)' }}>
        <div className="light-spot light-spot-1"></div>
        <div className="light-spot light-spot-2"></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-0">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-8 lg:gap-16">
            {/* LEFT */}
            <div className="flex-1 md:pr-4 lg:pr-8">
              <div style={{ height: 28 }}></div>
              <div>
                <h1 className="hero-text-line font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] mb-2" style={{ color: 'var(--cream)' }}>Savor the</h1>
                <h1 className="hero-text-line font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] mb-2 italic">
                  <span className="shimmer-text">Art</span>
                </h1>
                <h1 className="hero-text-line font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] mb-6" style={{ color: 'var(--cream)' }}>of Dining</h1>
              </div>
              <div className="hero-description">
                <p className="text-base md:text-lg max-w-md mb-10 leading-relaxed font-light" style={{ color: 'rgba(245, 239, 230, 0.55)' }}>
                  An intimate journey through refined flavors, where tradition meets innovation. Every plate tells a story of passion and craftsmanship.
                </p>
              </div>
              <div className="hero-buttons flex flex-wrap items-center gap-4 md:gap-6">
                <a href="#reservation" className="btn-primary">
                  <span>Reserve a Table</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 8h14M8 1l7 7-7 7"/>
                  </svg>
                </a>
                <a href="#menu" className="btn-glass">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3"/>
                  </svg>
                  View Our Menu
                </a>
              </div>

              {/* Chef Profile */}
              <div className="chef-profile mt-12 md:mt-16 flex flex-wrap items-center gap-4">
                <div className="relative" style={{ width: 48, height: 48 }}>
                  <div className="chef-avatar">
                    <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=100&h=100&fit=crop&crop=face&q=80" alt="Chef" loading="lazy" />
                  </div>
                  <div className="chef-ring"></div>
                </div>
                <div>
                  <p className="text-sm font-medium" style={{ color: 'var(--cream)' }}>Chef Marco Bellini</p>
                  <p className="text-xs" style={{ color: 'rgba(201, 168, 98, 0.6)' }}>Executive Chef</p>
                </div>
                <div className="ml-4 pl-4" style={{ borderLeft: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="flex gap-0.5">
                    {[1,2,3,4].map((i) => (
                      <svg key={i} className="w-3.5 h-3.5" style={{ color: 'var(--gold)' }} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                    ))}
                    <svg className="w-3.5 h-3.5" style={{ color: 'rgba(201, 168, 98, 0.25)' }} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Plate */}
            <div className="flex-1 flex items-center justify-center md:justify-end">
              <div className="relative reveal-scale" style={{ transitionDelay: '0.5s' }}>
                <div className="particle particle-herb" style={{ top: '-8%', left: '0%', animationDelay: '0s', animationDuration: '9s' }}></div>
                <div className="particle particle-herb" style={{ top: '5%', right: '-8%', animationDelay: '1.2s', animationDuration: '7s', transform: 'rotate(30deg)' }}></div>
                <div className="particle particle-spice" style={{ bottom: '10%', left: '-10%', animationDelay: '2.5s', animationDuration: '10s', background: '#8b4513', width: 5, height: 5 }}></div>
                <div className="particle particle-spice" style={{ bottom: '-5%', right: '5%', animationDelay: '0.8s', animationDuration: '8s', background: '#c9a862', width: 4, height: 4 }}></div>
                <div className="particle particle-gold" style={{ top: '-5%', right: '15%', animationDelay: '1.8s', animationDuration: '11s' }}></div>
                <div className="particle particle-gold" style={{ top: '20%', left: '-12%', animationDelay: '3s', animationDuration: '9s' }}></div>
                <div className="particle particle-leaf" style={{ bottom: '15%', right: '-6%', animationDelay: '2s', animationDuration: '8.5s' }}></div>
                <div className="particle particle-leaf" style={{ top: '35%', right: '-8%', animationDelay: '0.5s', animationDuration: '10s', transform: 'rotate(-20deg)' }}></div>
                <div className="particle particle-spice" style={{ top: '-3%', left: '15%', animationDelay: '1s', animationDuration: '7.5s', background: '#654321', width: 3, height: 3 }}></div>
                <div className="particle particle-gold" style={{ bottom: '0%', left: '5%', animationDelay: '2.2s', animationDuration: '12s' }}></div>

                <div className="hidden sm:block food-item" style={{ width: 'clamp(52px, 7vw, 78px)', top: '7%', left: '2%', animationDelay: '0s', animationDuration: '6s' }}>
                  <img src="/food-chicken.png" alt="" className="food-item-img" />
                </div>
                <div className="hidden sm:block food-item" style={{ width: 'clamp(58px, 8vw, 90px)', bottom: '-4%', left: '-2%', animationDelay: '1.5s', animationDuration: '7.5s' }}>
                  <img src="/food-bowl.png" alt="" className="food-item-img" />
                </div>
                <div className="hidden sm:block food-item" style={{ width: 'clamp(55px, 7vw, 80px)', bottom: '-8%', right: '8%', animationDelay: '2.8s', animationDuration: '5.5s' }}>
                  <img src="/food-egg.png" alt="" className="food-item-img" />
                </div>
                <div className="hidden sm:block food-item" style={{ width: 'clamp(62px, 8.5vw, 95px)', top: '-5%', right: '12%', animationDelay: '0.8s', animationDuration: '8s' }}>
                  <img src="/food-burger.png" alt="" className="food-item-img" />
                </div>

                <div className="hero-img-rotate">
                  <img src="/food-plate.png" alt="Gourmet dish" className="hero-food-img" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0b0b0b] to-transparent z-10"></div>
      </section>

      {/* STORY SECTION */}
      <section id="story" className="relative py-24 md:py-32 px-6 md:px-12" style={{ scrollMarginTop: 40, background: 'radial-gradient(ellipse 85% 55% at 50% 30%, #0a3325 0%, #0a1f14 50%, #080808 100%)' }}>
        <div className="light-spot" style={{ width: 450, height: 450, top: '-10%', left: '20%', background: 'radial-gradient(circle, rgba(201,168,98,0.06), transparent)' }}></div>
        <div className="light-spot" style={{ width: 300, height: 300, bottom: '10%', right: '5%', background: 'radial-gradient(circle, rgba(16,64,46,0.15), transparent)' }}></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-20 reveal">
            <p className="text-xs tracking-[4px] uppercase mb-4" style={{ color: 'rgba(201, 168, 98, 0.6)', letterSpacing: '5px' }}>Our Legacy</p>
            <h2 className="section-heading font-serif text-4xl md:text-5xl lg:text-6xl" style={{ color: 'var(--cream)' }}>
              <span>The</span> <span style={{ color: 'var(--gold)' }}>Story</span>
            </h2>
            <div className="deco-line-center mx-auto mt-5"></div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
            <div className="lg:w-1/2 reveal-left">
              <div className="story-image-wrap" style={{ aspectRatio: '4/5', maxHeight: 600 }}>
                <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=1000&fit=crop&auto=format&q=80" alt="Restaurant interior" loading="lazy" />
              </div>
            </div>
            <div className="lg:w-1/2 reveal-right" style={{ position: 'relative' }}>
              <span className="font-script text-4xl md:text-5xl" style={{ color: 'rgba(201, 168, 98, 0.15)', position: 'absolute', top: -20, left: -10, pointerEvents: 'none' }}>&ldquo;</span>
              <h3 className="font-serif text-3xl md:text-4xl mb-6" style={{ color: 'var(--cream)' }}>
                A Vision<span style={{ color: 'var(--gold)' }}> of Excellence</span>
              </h3>
              <div className="space-y-5 text-base leading-relaxed" style={{ color: 'rgba(245, 239, 230, 0.5)', maxWidth: 520 }}>
                <p>Born from a passion for culinary innovation and a reverence for tradition, Aurelius opened its doors with a singular vision: to create not just meals, but memories that linger long after the last bite.</p>
                <p>Nestled in the heart of Manhattan, our kitchen is a sanctuary where the world's finest ingredients meet the artistry of Chef Marco Bellini and his dedicated team.</p>
                <p>Every dish that leaves our pass is a testament to the belief that dining is the most intimate of arts — a symphony of flavor, texture, and emotion, composed with precision and served with warmth.</p>
              </div>

              <div className="mt-8 pt-8" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
                <div className="flex items-center gap-4">
                  <div className="relative" style={{ width: 44, height: 44 }}>
                    <div className="chef-avatar" style={{ width: 44, height: 44 }}>
                      <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=100&h=100&fit=crop&crop=face&q=80" alt="Chef" loading="lazy" />
                    </div>
                    <div className="chef-ring"></div>
                  </div>
                  <div>
                    <p className="font-script text-xl" style={{ color: 'var(--cream)' }}>Marco Bellini</p>
                    <p className="text-xs" style={{ color: 'rgba(201, 168, 98, 0.5)' }}>Executive Chef &amp; Founder</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 sm:gap-6 md:gap-10 mt-10">
                <div className="story-stat">
                  <div className="number" style={{ fontSize: '2rem' }}>12</div>
                  <div className="label">Years</div>
                </div>
                <div className="story-stat-divider"></div>
                <div className="story-stat">
                  <div className="number" style={{ fontSize: '2rem' }}>50k+</div>
                  <div className="label">Guests Served</div>
                </div>
                <div className="story-stat-divider"></div>
                <div className="story-stat">
                  <div className="number" style={{ fontSize: '2rem' }}>18</div>
                  <div className="label">Awards</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MENU SECTION */}
      <section id="menu" className="relative py-24 md:py-32 px-6 md:px-12" style={{ background: 'radial-gradient(ellipse 90% 50% at 50% 30%, #0f3d2e 0%, #0a281a 50%, #0b0b0b 100%)', scrollMarginTop: 40 }}>
        <div className="bg-herb bg-herb-1"></div>
        <div className="bg-herb bg-herb-2"></div>
        <div className="bg-herb bg-herb-3"></div>
        <div className="light-spot" style={{ width: 350, height: 350, top: '30%', right: '10%', background: 'radial-gradient(circle, rgba(201,168,98,0.08), transparent)' }}></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-20 reveal">
            <p className="text-xs tracking-[4px] uppercase mb-4" style={{ color: 'rgba(201, 168, 98, 0.6)', letterSpacing: '5px' }}>Our Curation</p>
            <h2 className="section-heading font-serif text-4xl md:text-5xl lg:text-6xl" style={{ color: 'var(--cream)' }}>
              <span>Featured</span> <span style={{ color: 'var(--gold)' }}>Menu</span>
            </h2>
            <div className="deco-line-center mx-auto mt-5"></div>
          </div>

          <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-16">
            <div className="lg:w-1/2 reveal-left">
              <div className="relative h-full min-h-[360px] md:min-h-[480px] rounded-3xl overflow-hidden" style={{ boxShadow: '0 30px 80px rgba(0,0,0,0.5)' }}>
                <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=900&fit=crop&auto=format&q=80" alt="Featured dish" className="w-full h-full object-cover" style={{ position: 'absolute', inset: 0 }} loading="lazy" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(0,0,0,0.3), transparent 50%, rgba(0,0,0,0.1))' }}></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-block glass px-4 py-2 rounded-full text-xs tracking-widest uppercase" style={{ color: 'var(--gold)' }}>Chef's Special</div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 reveal-right">
              <div className="menu-card h-full flex flex-col breathe-border">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-serif text-2xl md:text-3xl" style={{ color: 'var(--cream)' }}>Degustation</h3>
                  <span className="font-serif text-lg italic" style={{ color: 'var(--gold)' }}>$189</span>
                </div>
                <p className="text-sm mb-8" style={{ color: 'rgba(245, 239, 230, 0.4)' }}>A curated six-course journey through our chef's finest creations</p>

                <div className="flex-1 space-y-1">
                  <div className="menu-item">
                    <div className="menu-item-thumb"><img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=100&h=100&fit=crop&auto=format&q=60" alt="Amuse-bouche" loading="lazy" /></div>
                    <div className="menu-item-dot"></div>
                    <div className="flex-1">
                      <div className="flex justify-between items-baseline"><h4 className="font-serif text-lg" style={{ color: 'var(--cream)' }}>Amuse-Bouche</h4><span className="text-xs font-light" style={{ color: 'rgba(255,255,255,0.3)' }}>—</span></div>
                      <p className="text-xs mt-1" style={{ color: 'rgba(245, 239, 230, 0.35)' }}>Seasonal tartlet · Truffle espuma</p>
                    </div>
                  </div>
                  <div className="menu-item">
                    <div className="menu-item-thumb"><img src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=100&h=100&fit=crop&auto=format&q=60" alt="Foie Gras" loading="lazy" /></div>
                    <div className="menu-item-dot"></div>
                    <div className="flex-1">
                      <div className="flex justify-between items-baseline"><h4 className="font-serif text-lg" style={{ color: 'var(--cream)' }}>Pan-Seared Foie Gras</h4><span className="text-xs font-light" style={{ color: 'rgba(255,255,255,0.3)' }}>—</span></div>
                      <p className="text-xs mt-1" style={{ color: 'rgba(245, 239, 230, 0.35)' }}>Fig compote · Sauternes gel · Brioche</p>
                    </div>
                  </div>
                  <div className="menu-item">
                    <div className="menu-item-thumb"><img src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=100&h=100&fit=crop&auto=format&q=60" alt="Risotto" loading="lazy" /></div>
                    <div className="menu-item-dot"></div>
                    <div className="flex-1">
                      <div className="flex justify-between items-baseline"><h4 className="font-serif text-lg" style={{ color: 'var(--cream)' }}>Black Truffle Risotto</h4><span className="text-xs font-light" style={{ color: 'rgba(255,255,255,0.3)' }}>—</span></div>
                      <p className="text-xs mt-1" style={{ color: 'rgba(245, 239, 230, 0.35)' }}>Carnaroli · Aged parmesan · Périgord truffle</p>
                    </div>
                  </div>
                  <div className="menu-item">
                    <div className="menu-item-thumb"><img src="https://images.unsplash.com/photo-1544025162-d76694265947?w=100&h=100&fit=crop&auto=format&q=60" alt="Wagyu" loading="lazy" /></div>
                    <div className="menu-item-dot"></div>
                    <div className="flex-1">
                      <div className="flex justify-between items-baseline"><h4 className="font-serif text-lg" style={{ color: 'var(--cream)' }}>Wagyu Tomahawk</h4><span className="text-xs font-light" style={{ color: 'rgba(255,255,255,0.3)' }}>—</span></div>
                      <p className="text-xs mt-1" style={{ color: 'rgba(245, 239, 230, 0.35)' }}>Herb crust · Red wine jus · Root vegetables</p>
                    </div>
                  </div>
                  <div className="menu-item">
                    <div className="menu-item-thumb"><img src="https://images.unsplash.com/photo-1506354666786-959d6d497f1a?w=100&h=100&fit=crop&auto=format&q=60" alt="Dessert" loading="lazy" /></div>
                    <div className="menu-item-dot"></div>
                    <div className="flex-1">
                      <div className="flex justify-between items-baseline"><h4 className="font-serif text-lg" style={{ color: 'var(--cream)' }}>Valrhona Chocolate</h4><span className="text-xs font-light" style={{ color: 'rgba(255,255,255,0.3)' }}>—</span></div>
                      <p className="text-xs mt-1" style={{ color: 'rgba(245, 239, 230, 0.35)' }}>Dark ganache · Sea salt · Olive oil</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 flex items-center justify-between" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <span className="text-sm" style={{ color: 'rgba(245, 239, 230, 0.3)' }}>Wine pairing available +$95</span>
                  <a href="/menu" className="btn-glass text-xs py-2 px-5 inline-flex items-center gap-2">Full Menu</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id="testimonials" className="relative py-24 md:py-32 px-6 md:px-12" style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 30%, #0c3024 0%, #091b12 50%, #070707 100%)', scrollMarginTop: 40 }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="light-spot" style={{ width: 500, height: 500, top: '20%', right: '-10%', background: 'radial-gradient(circle, rgba(201,168,98,0.05), transparent)' }}></div>
          <div className="light-spot" style={{ width: 350, height: 350, bottom: '5%', left: '-5%', background: 'radial-gradient(circle, rgba(16,64,46,0.1), transparent)' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-20 reveal">
            <p className="text-xs tracking-[4px] uppercase mb-4" style={{ color: 'rgba(201, 168, 98, 0.6)', letterSpacing: '5px' }}>Testimonials</p>
            <h2 className="section-heading font-serif text-4xl md:text-5xl lg:text-6xl" style={{ color: 'var(--cream)' }}>
              <span>What</span> <span>Guests</span> <span style={{ color: 'var(--gold)' }}>Say</span>
            </h2>
            <div className="deco-line-center mx-auto mt-5"></div>
          </div>

          <div className="testimonials-fade reveal py-10 -my-10">
            <div className="quotes-track">
              {[...testimonials, ...testimonials].map((t, i) => (
                <div key={i} className="testimonial-card">
                  <div className="quote-icon">&ldquo;</div>
                  <div className="stars flex gap-1">
                    {[1,2,3,4,5].map((s) => (
                      <svg key={s} width="14" height="14" fill="currentColor" viewBox="0 0 20 20" style={{ color: 'var(--gold)' }}>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                  <blockquote>{t.quote}</blockquote>
                  <div className="attribution">
                    <div className="avatar"><img src={t.avatar} alt="" loading="lazy" /></div>
                    <div>
                      <div className="name">{t.name}</div>
                      <div className="source">{t.source}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

{/* SIGNATURES SECTION */}
      <section id="signatures" className="relative py-24 md:py-32 px-6 md:px-12" style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 30%, #0a3325 0%, #0a1a14 50%, #070707 100%)' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="light-spot" style={{ width: 400, height: 400, top: '10%', left: '-10%', background: 'radial-gradient(circle, rgba(201,168,98,0.06), transparent)' }}></div>
          <div className="light-spot" style={{ width: 350, height: 350, bottom: '5%', right: '-5%', background: 'radial-gradient(circle, rgba(201,168,98,0.05), transparent)' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-20 reveal">
            <p className="text-xs tracking-[4px] uppercase mb-4" style={{ color: 'rgba(201, 168, 98, 0.6)', letterSpacing: '5px' }}>Fan Favorites</p>
            <h2 className="section-heading font-serif text-4xl md:text-5xl lg:text-6xl" style={{ color: 'var(--cream)' }}>
              <span>Popular</span> <span style={{ color: 'var(--gold)' }}>Items</span>
            </h2>
            <div className="deco-line-center mx-auto mt-5"></div>
          </div>

          <div className="testimonials-fade reveal py-10 -my-10">
            <div className="signatures-track" ref={sigRef}>
              {[...signatures, ...signatures].map((s, i) => (
                <div key={i} className="horizontal-card">
                  <img src={s.img} alt={s.name} loading="lazy" />
                  <div className="horizontal-card-badge">{s.badge}</div>
                  <div className="horizontal-card-content">
                    <div className="dish-name" style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', color: 'var(--cream)', marginBottom: 4 }}>{s.name}</div>
                    <div className="dish-desc" style={{ fontSize: '0.8rem', color: 'rgba(245, 239, 230, 0.4)' }}>{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AWARDS SECTION */}
      <section id="awards" className="relative py-24 md:py-32 px-6 md:px-12" style={{ scrollMarginTop: 40, background: 'radial-gradient(ellipse 85% 55% at 50% 30%, #0d3024 0%, #091a10 50%, #070707 100%)' }}>
        <div className="light-spot" style={{ width: 400, height: 400, top: '15%', left: '-8%', background: 'radial-gradient(circle, rgba(201,168,98,0.06), transparent)' }}></div>
        <div className="light-spot" style={{ width: 300, height: 300, bottom: '10%', right: '5%', background: 'radial-gradient(circle, rgba(16,64,46,0.12), transparent)' }}></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-20 reveal">
            <p className="text-xs tracking-[4px] uppercase mb-4" style={{ color: 'rgba(201, 168, 98, 0.6)', letterSpacing: '5px' }}>Accolades</p>
            <h2 className="section-heading font-serif text-4xl md:text-5xl lg:text-6xl" style={{ color: 'var(--cream)' }}>
              <span>Awards</span> <span>&amp;</span> <span style={{ color: 'var(--gold)' }}>Recognition</span>
            </h2>
            <div className="deco-line-center mx-auto mt-5"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 reveal-scale">
            <div className="award-item">
              <div className="award-icon">
                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="24" cy="16" r="10"/><path d="M24 26v8"/><path d="M18 38h12"/><path d="M24 34l-6 8"/><path d="M24 34l6 8"/><path d="M14 20l-8 4 4 8 8-4"/><path d="M34 20l8 4-4 8-8-4"/>
                </svg>
              </div>
              <div className="award-name" style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', color: 'var(--cream)', marginBottom: 4 }}>Michelin Star</div>
              <div className="award-year" style={{ fontSize: '0.75rem', color: 'rgba(201, 168, 98, 0.5)', letterSpacing: '2px', textTransform: 'uppercase' }}>2023 · 2024</div>
              <div className="award-desc" style={{ fontSize: '0.75rem', color: 'rgba(245, 239, 230, 0.3)', marginTop: 4, maxWidth: 140 }}>Two consecutive years</div>
            </div>

            <div className="award-item">
              <div className="award-icon">
                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="24 4 30 16 44 18 34 28 36 42 24 34 12 42 14 28 4 18 18 16"/>
                </svg>
              </div>
              <div className="award-name" style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', color: 'var(--cream)', marginBottom: 4 }}>James Beard Award</div>
              <div className="award-year" style={{ fontSize: '0.75rem', color: 'rgba(201, 168, 98, 0.5)', letterSpacing: '2px', textTransform: 'uppercase' }}>2024</div>
              <div className="award-desc" style={{ fontSize: '0.75rem', color: 'rgba(245, 239, 230, 0.3)', marginTop: 4, maxWidth: 140 }}>Outstanding Chef</div>
            </div>

            <div className="award-item">
              <div className="award-icon">
                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="24" cy="24" r="18"/><path d="M16 24l6 6 10-10"/><path d="M12 24l6 6"/>
                </svg>
              </div>
              <div className="award-name" style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', color: 'var(--cream)', marginBottom: 4 }}>World's 50 Best</div>
              <div className="award-year" style={{ fontSize: '0.75rem', color: 'rgba(201, 168, 98, 0.5)', letterSpacing: '2px', textTransform: 'uppercase' }}>2024</div>
              <div className="award-desc" style={{ fontSize: '0.75rem', color: 'rgba(245, 239, 230, 0.3)', marginTop: 4, maxWidth: 140 }}>Ranked #22</div>
            </div>

            <div className="award-item">
              <div className="award-icon">
                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M24 4L30 16H44L34 26L38 40L24 32L10 40L14 26L4 16H18L24 4Z"/><circle cx="24" cy="20" r="3"/>
                </svg>
              </div>
              <div className="award-name" style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', color: 'var(--cream)', marginBottom: 4 }}>Forbes Travel Guide</div>
              <div className="award-year" style={{ fontSize: '0.75rem', color: 'rgba(201, 168, 98, 0.5)', letterSpacing: '2px', textTransform: 'uppercase' }}>2024</div>
              <div className="award-desc" style={{ fontSize: '0.75rem', color: 'rgba(245, 239, 230, 0.3)', marginTop: 4, maxWidth: 140 }}>Five-Star Rating</div>
            </div>
          </div>

          <div className="text-center mt-12 reveal">
            <p className="text-sm" style={{ color: 'rgba(245, 239, 230, 0.2)' }}>Our commitment to excellence is recognized by the world's most prestigious culinary institutions.</p>
          </div>
        </div>
      </section>

      {/* RESERVATION SECTION */}
      <section id="reservation" className="relative py-24 md:py-32 px-6 md:px-12" style={{ scrollMarginTop: 40, background: 'radial-gradient(ellipse 80% 50% at 50% 20%, #0d3528 0%, #091f14 50%, #070707 100%)' }}>
        <div className="light-spot" style={{ width: 500, height: 500, top: '-5%', right: '-10%', background: 'radial-gradient(circle, rgba(201,168,98,0.05), transparent)' }}></div>
        <div className="light-spot" style={{ width: 350, height: 350, bottom: '10%', left: '-5%', background: 'radial-gradient(circle, rgba(16,64,46,0.1), transparent)' }}></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-20 reveal">
            <p className="text-xs tracking-[4px] uppercase mb-4" style={{ color: 'rgba(201, 168, 98, 0.6)', letterSpacing: '5px' }}>Book Your Experience</p>
            <h2 className="section-heading font-serif text-4xl md:text-5xl lg:text-6xl" style={{ color: 'var(--cream)' }}>
              <span>Make</span> <span>a</span> <span style={{ color: 'var(--gold)' }}>Reservation</span>
            </h2>
            <div className="deco-line-center mx-auto mt-5"></div>
          </div>

          <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-16">
            <div className="lg:w-1/2 reveal-left">
              <div className="reservation-side-image relative">
                <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=1000&fit=crop&auto=format&q=80" alt="Dining atmosphere" loading="lazy" />
                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <div className="glass rounded-2xl p-5">
                    <div className="flex items-center gap-4">
                      <div className="relative" style={{ width: 40, height: 40 }}>
                        <div className="chef-avatar" style={{ width: 40, height: 40 }}>
                          <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=80&h=80&fit=crop&crop=face&q=60" alt="Chef" loading="lazy" />
                        </div>
                        <div className="chef-ring"></div>
                      </div>
                      <div>
                        <p className="text-sm font-medium" style={{ color: 'var(--cream)' }}>Chef Marco Bellini</p>
                        <p className="text-xs" style={{ color: 'rgba(201, 168, 98, 0.5)' }}>&ldquo;Let us craft your evening.&rdquo;</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 reveal-right flex items-center">
              <div className="reservation-card w-full">
                <form onSubmit={(e) => { e.preventDefault(); alert('Thank you! Your reservation request has been received. We will confirm within 24 hours.') }}>
                  <div className="input-row mb-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 16 }}>
                    <input type="text" className="input-field" placeholder="First name" required />
                    <input type="text" className="input-field" placeholder="Last name" required />
                  </div>
                  <div className="input-row mb-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 16 }}>
                    <input type="email" className="input-field" placeholder="Email address" required />
                    <input type="tel" className="input-field" placeholder="Phone number" />
                  </div>
                  <div className="input-row mb-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 16 }}>
                    <select className="input-field" required defaultValue="">
                      <option value="" disabled>Number of guests</option>
                      {[1,2,3,4,5,6,8].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>)}
                      <option value="10">10+ Guests</option>
                    </select>
                    <select className="input-field" required defaultValue="">
                      <option value="" disabled>Dining time</option>
                      {['17:30','18:00','18:30','19:00','19:30','20:00','20:30','21:00'].map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div className="mb-4">
                    <input type="date" className="input-field" required />
                  </div>
                  <div className="mb-6">
                    <textarea className="input-field" rows={3} placeholder="Special requests (allergies, dietary, occasion...)" style={{ resize: 'none' }}></textarea>
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center text-sm py-4">
                    <span>Confirm Reservation</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 8h14M8 1l7 7-7 7"/>
                    </svg>
                  </button>
                  <p className="text-center text-xs mt-4" style={{ color: 'rgba(245, 239, 230, 0.15)' }}>We will confirm your reservation within 24 hours</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
