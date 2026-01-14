import React, { useContext, useEffect, useMemo, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { MyThemeContext } from "../App"

const Hero = () => {
  const { theme } = useContext(MyThemeContext)
  const isLight = theme === "LIGHT"

  const [recipes, setRecipes] = useState([])
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  const intervalRef = useRef(null)

  const fallback = useMemo(
    () => [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=2000&q=80",
    ],
    []
  )

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data.recipes || []))
      .catch(() => setRecipes([]))
  }, [])

  const slides = useMemo(() => {
    const list = [...recipes]
      .sort((a, b) => (b.id || 0) - (a.id || 0))
      .slice(0, 8)
      .map((r) => ({
        img: r.image,
        title: r.name,
        subtitle: `Cuisine: ${r.cuisine || "—"} • Prep: ${r.prepTimeMinutes ?? "-"} min • Calories: ${
          r.caloriesPerServing ?? "-"
        }`,
        ctaTo: r.id ? `/recipe/${r.id}` : "/recipes",
      }))

    return list.length
      ? list
      : fallback.map((img) => ({
          img,
          title: "Discover Recipes That Make Cooking Simple",
          subtitle: "Browse curated recipes with clear steps, prep time, calories, and cuisine.",
          ctaTo: "/recipes",
        }))
  }, [recipes, fallback])

  const active = slides[activeIndex] || slides[0]

  // Auto-rotate slides
  useEffect(() => {
    if (paused || slides.length <= 1) return
    intervalRef.current = setInterval(() => {
      setActiveIndex((p) => (p + 1) % slides.length)
    }, 5000)
    return () => clearInterval(intervalRef.current)
  }, [paused, slides.length])

  // Parallax scroll
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY || 0)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <section
      className="relative h-[75vh] md:h-[85vh] w-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background Image */}
      <img
        src={active?.img}
        alt={active?.title || "Hero food"}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          transform: `translateY(${Math.min(scrollY * 0.18, 60)}px) scale(1.08)`,
          filter: isLight
            ? "saturate(1.05) contrast(1.02)"
            : "saturate(0.95) contrast(1.05)",
        }}
      />

      {/* Overlay */}
      <div className={`absolute inset-0 ${isLight ? "bg-black/40" : "bg-black/60"}`} />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <div className="max-w-3xl">
          <span className="inline-block mb-4 px-4 py-2 text-sm font-semibold rounded-full bg-white/80 text-slate-900 backdrop-blur">
            🍲 TasteNest
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
            {active?.title || "Discover Recipes That Make Cooking Simple"}
          </h1>

          <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
            {active?.subtitle ||
              "Browse curated recipes with clear steps, prep time, calories, and cuisine — all in one clean place."}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={active?.ctaTo || "/recipes"}
              className="px-8 py-3 rounded-xl font-semibold bg-white text-slate-900 hover:bg-slate-100 transition shadow-lg"
            >
              View Highlight →
            </Link>

            <Link
              to="/recipes"
              className="px-8 py-3 rounded-xl font-semibold border border-white text-white hover:bg-white/10 transition"
            >
              Explore Recipes
            </Link>

            <Link
              to="/blogs"
              className="px-8 py-3 rounded-xl font-semibold border border-white text-white hover:bg-white/10 transition"
            >
              Read Blogs
            </Link>
          </div>

          {/* Dots */}
          <div className="mt-7 flex justify-center gap-2">
            {slides.slice(0, 8).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setActiveIndex(i)}
                className={`h-2.5 rounded-full transition ${
                  i === activeIndex
                    ? "w-8 bg-white"
                    : "w-2.5 bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-24 ${
          isLight
            ? "bg-gradient-to-t from-slate-100 to-transparent"
            : "bg-gradient-to-t from-slate-900 to-transparent"
        }`}
      />
    </section>
  )
}

export default Hero
