'use client'

import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const categories = [
  {
    title: 'Antipasti',
    subtitle: 'To Begin',
    items: [
      { name: 'Burrata & Heirloom Tomatoes', desc: 'Creamy burrata, basil pesto, aged balsamic, micro greens', price: 24, tag: 'Vegetarian' },
      { name: 'Yellowfin Tuna Crudo', desc: 'Citrus marinade, shaved fennel, chili oil, crispy shallots', price: 28, tag: 'GF' },
      { name: 'Roasted Bone Marrow', desc: 'Parsley salad, sourdough crostini, sea salt flakes', price: 22, tag: '' },
      { name: 'Wild Mushroom Arancini', desc: 'Black truffle aioli, parmesan crisp, micro herbs', price: 19, tag: 'Vegetarian' },
      { name: 'Hamachi Tartare', desc: 'Yuzu soy, avocado mousse, sesame tuile, pickled ginger', price: 26, tag: 'Chef\'s Special' },
    ],
  },
  {
    title: 'Primi',
    subtitle: 'Pasta & Risotto',
    items: [
      { name: 'Hand-Rolled Pappardelle', desc: 'Wild mushrooms, aged parmesan, fresh thyme, truffle oil', price: 32, tag: 'Handmade' },
      { name: 'Lobster Ravioli', desc: 'Brown butter, sage, lemon zest, poppy seeds', price: 38, tag: 'Signature' },
      { name: 'Black Truffle Risotto', desc: 'Carnaroli rice, aged parmesan, Périgord truffle', price: 36, tag: 'GF' },
      { name: 'Spaghetti alle Vongole', desc: 'Manila clams, white wine, garlic, chili, fresh parsley', price: 30, tag: '' },
      { name: 'Pumpkin & Sage Gnocchi', desc: 'Brown butter, toasted pine nuts, pecorino, crispy sage', price: 28, tag: 'Vegetarian' },
    ],
  },
  {
    title: 'Secondi',
    subtitle: 'Main Courses',
    items: [
      { name: 'Wagyu Tomahawk', desc: 'Herb crust, roasted root vegetables, red wine jus', price: 89, tag: 'Prime Cut' },
      { name: 'Butter-Poached Lobster', desc: 'Vanilla beurre blanc, sea asparagus, fingerling potatoes', price: 72, tag: 'Ocean Fresh' },
      { name: 'Herb-Crusted Rack of Lamb', desc: 'Rosemary garlic confit, ratatouille, lamb jus', price: 58, tag: '' },
      { name: 'Pan-Seared Duck Breast', desc: 'Cherry gastrique, wild rice, roasted fennel, tarragon', price: 52, tag: 'Chef\'s Special' },
      { name: 'Mediterranean Branzino', desc: 'Lemon caper sauce, olive oil mash, grilled asparagus', price: 48, tag: 'GF' },
    ],
  },
  {
    title: 'Dolci',
    subtitle: 'Desserts',
    items: [
      { name: 'Valrhona Chocolate Ganache', desc: 'Sea salt, olive oil, vanilla bean ice cream', price: 22, tag: 'Decadent' },
      { name: 'Panna Cotta', desc: 'Strawberry balsamic reduction, basil sugar, tuile', price: 18, tag: 'GF' },
      { name: 'Tiramisu', desc: 'Espresso-soaked ladyfingers, mascarpone cream, cocoa', price: 19, tag: '' },
      { name: 'Artisanal Cheese Board', desc: 'Selection of fine cheeses, honeycomb, fig jam, crackers', price: 28, tag: 'For Two' },
    ],
  },
  {
    title: 'Curated Wines',
    subtitle: 'By Glass & Bottle',
    items: [
      { name: 'Domaine de la Romanée-Conti', desc: 'Pinot Noir, Burgundy, France — silky, complex, unforgettable', price: 65, tag: 'Glass' },
      { name: 'Sassicaia Tenuta San Guido', desc: 'Cabernet Blend, Tuscany, Italy — bold, structured, elegant', price: 42, tag: 'Glass' },
      { name: 'Cloudy Bay Sauvignon Blanc', desc: 'Marlborough, New Zealand — crisp, citrus, vibrant', price: 24, tag: 'Glass' },
      { name: 'Château Margaux 2015', desc: 'Bordeaux Blend, France — the pinnacle of winemaking', price: 280, tag: 'Bottle' },
      { name: 'Veuve Clicquot La Grande Dame', desc: 'Champagne, France — refined, toasty, celebratory', price: 195, tag: 'Bottle' },
    ],
  },
]

export default function MenuPage() {
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const gsap = (window as any).gsap
    const ScrollTrigger = (window as any).ScrollTrigger
    if (!gsap || !ScrollTrigger) return

    gsap.registerPlugin(ScrollTrigger)

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

    gsap.utils.toArray('.reveal-menu').forEach((el: any, i: number) => {
      gsap.fromTo(el, { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.7, delay: i * 0.08, ease: spring,
        scrollTrigger: { trigger: el, start: 'top 90%', end: 'top 40%', toggleActions: 'play none none none' }
      })
    })

    gsap.from('.menu-hero-text', { opacity: 0, y: 40, duration: 1, ease: spring, delay: 0.3 })

    return () => {
      lenis.destroy()
      ScrollTrigger.getAll().forEach((st: any) => st.kill())
    }
  }, [])

  return (
    <main ref={menuRef} className="min-h-screen overflow-x-hidden" style={{ background: 'radial-gradient(ellipse 100% 60% at 50% 15%, #0f3d2e 0%, #0a1f14 50%, #070707 100%)' }}>
      <div className="grain-overlay"></div>

      <Navbar variant="simple" />

      <section className="relative pt-32 pb-16 md:pb-24 px-6 md:px-12">
        <div className="light-spot" style={{ width: 400, height: 400, top: '-5%', right: '10%', background: 'radial-gradient(circle, rgba(201,168,98,0.08), transparent)' }}></div>
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <p className="text-xs tracking-[4px] uppercase mb-4" style={{ color: 'rgba(201, 168, 98, 0.6)', letterSpacing: '5px' }}>Our Curation</p>
          <h1 className="menu-hero-text font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4" style={{ color: 'var(--cream)' }}>
            The <span style={{ color: 'var(--gold)' }}>Menu</span>
          </h1>
          <div className="deco-line-center mx-auto mt-5"></div>
          <p className="menu-hero-text text-sm md:text-base mt-6 max-w-2xl mx-auto" style={{ color: 'rgba(245, 239, 230, 0.4)' }}>
            A carefully composed symphony of flavors, crafted by Chef Marco Bellini and his team.
            Each dish tells a story of tradition, innovation, and uncompromising quality.
          </p>
        </div>
      </section>

      <section className="relative px-6 md:px-12 pb-24 md:pb-32">
        <div className="max-w-5xl mx-auto">
          {categories.map((cat, ci) => (
            <div key={ci} className={`reveal-menu ${ci > 0 ? 'mt-16 md:mt-20' : ''}`}>
              <div className="text-center mb-10">
                <p className="text-xs tracking-[4px] uppercase mb-2" style={{ color: 'rgba(201, 168, 98, 0.5)', letterSpacing: '4px' }}>{cat.subtitle}</p>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl" style={{ color: 'var(--cream)' }}>{cat.title}</h2>
                <div className="deco-line-center mx-auto mt-3"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                {cat.items.map((item, ii) => (
                  <div key={ii} className="menu-item-card p-5 md:p-6 rounded-2xl">
                    <div className="flex justify-between items-start gap-4">
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-3 flex-wrap">
                          <h3 className="font-serif text-lg md:text-xl" style={{ color: 'var(--cream)' }}>{item.name}</h3>
                          {item.tag && (
                            <span
                              className="text-[10px] tracking-widest uppercase px-2.5 py-0.5 rounded-full"
                              style={{
                                color: 'var(--gold)',
                                background: 'rgba(201, 168, 98, 0.1)',
                                border: '1px solid rgba(201, 168, 98, 0.15)',
                              }}
                            >
                              {item.tag}
                            </span>
                          )}
                        </div>
                        <p className="text-xs sm:text-sm mt-1.5 leading-relaxed" style={{ color: 'rgba(245, 239, 230, 0.4)' }}>
                          {item.desc}
                        </p>
                      </div>
                      <span className="font-serif text-lg md:text-xl whitespace-nowrap" style={{ color: 'var(--gold)' }}>${item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative px-6 md:px-12 pb-24 md:pb-32">
        <div className="max-w-3xl mx-auto text-center reveal-menu">
          <div className="glass rounded-3xl p-8 md:p-12">
            <h2 className="font-serif text-2xl md:text-3xl mb-4" style={{ color: 'var(--cream)' }}>Ready to <span style={{ color: 'var(--gold)' }}>Dine</span>?</h2>
            <p className="text-sm md:text-base mb-8" style={{ color: 'rgba(245, 239, 230, 0.4)' }}>
              Reserve your table and experience the artistry of Chef Marco Bellini.
            </p>
            <a href="/#reservation" className="btn-primary inline-flex items-center gap-2 text-sm py-3 px-8">
              <span>Reserve a Table</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 8h14M8 1l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
