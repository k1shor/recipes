import React, { useContext, useEffect, useMemo, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { MyThemeContext } from "../App"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"

const MyCarousel = () => {
  const { theme } = useContext(MyThemeContext)
  const isLight = theme === "LIGHT"

  const slides = useMemo(
    () => [
      {
        img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1600&q=80",
        title: "Discover new favorites",
        subtitle: "Browse curated recipes by cuisine, prep time, and tags.",
        cta: { label: "Explore Recipes", to: "/recipes" },
      },
      {
        img: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=1600&q=80",
        title: "Cook with confidence",
        subtitle: "Clear steps, clean UI, and everything you need in one place.",
        cta: { label: "Read Blogs", to: "/blogs" },
      },
      {
        img: "https://images.unsplash.com/photo-1528712306091-ed0763094c98?auto=format&fit=crop&w=1600&q=80",
        title: "Quick meals, big flavor",
        subtitle: "Find fast weeknight ideas that still taste amazing.",
        cta: { label: "Our Services", to: "/services" },
      },
      {
        img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80",
        title: "Healthy choices made easy",
        subtitle: "Prep time, calories, servings — choose what fits your day.",
        cta: { label: "View Recipes", to: "/recipes" },
      },
    ],
    []
  )

  const [index, setIndex] = useState(0)
  const [hovered, setHovered] = useState(false)
  const timerRef = useRef(null)

  const goNext = () => setIndex((p) => (p + 1) % slides.length)
  const goPrev = () => setIndex((p) => (p - 1 + slides.length) % slides.length)
  const goTo = (i) => setIndex(i)

  useEffect(() => {
    if (hovered) return
    timerRef.current = setInterval(() => {
      setIndex((p) => (p + 1) % slides.length)
    }, 4000)

    return () => clearInterval(timerRef.current)
  }, [hovered, slides.length])

  const active = slides[index]

  return (
    <div className="w-full">
      <div
        className={`relative overflow-hidden rounded-3xl border shadow-2xl ${
          isLight
            ? "bg-white/80 backdrop-blur-xl border-white"
            : "bg-white/5 backdrop-blur-xl border-white/10"
        }`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Image */}
        <div className="relative h-64 md:h-[420px] w-full">
          <img
            src={active.img}
            alt={active.title}
            className="h-full w-full object-cover"
            loading="lazy"
          />

          {/* Overlay gradient */}
          <div
            className={`absolute inset-0 ${
              isLight
                ? "bg-gradient-to-r from-white/80 via-white/30 to-transparent"
                : "bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-transparent"
            }`}
          />

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="px-6 md:px-10 max-w-2xl">
              <span
                className={`inline-flex items-center gap-2 text-xs md:text-sm font-semibold px-4 py-2 rounded-full border shadow-sm ${
                  isLight
                    ? "bg-white/70 border-white text-slate-700"
                    : "bg-white/10 border-white/15 text-slate-200"
                }`}
              >
                🍲 TasteNest Carousel
              </span>

              <h2
                className={`mt-4 text-2xl md:text-4xl font-extrabold leading-tight ${
                  isLight ? "text-slate-900" : "text-white"
                }`}
              >
                {active.title}
              </h2>

              <p
                className={`mt-3 text-base md:text-lg leading-relaxed ${
                  isLight ? "text-slate-700" : "text-slate-200"
                }`}
              >
                {active.subtitle}
              </p>

              {active.cta?.to && (
                <div className="mt-6 flex gap-3">
                  <Link
                    to={active.cta.to}
                    className={`px-6 py-3 rounded-xl font-semibold shadow transition ${
                      isLight
                        ? "bg-slate-900 text-white hover:opacity-95"
                        : "bg-white text-slate-900 hover:bg-slate-100"
                    }`}
                  >
                    {active.cta.label} →
                  </Link>
                  <button
                    type="button"
                    onClick={goNext}
                    className={`px-6 py-3 rounded-xl font-semibold border shadow transition ${
                      isLight
                        ? "bg-white/70 border-white hover:bg-white text-slate-800"
                        : "bg-white/10 border-white/15 hover:bg-white/15 text-white"
                    }`}
                  >
                    Next Slide
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Controls */}
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous slide"
            className={`absolute left-4 top-1/2 -translate-y-1/2 h-11 w-11 rounded-2xl border shadow flex items-center justify-center transition ${
              isLight
                ? "bg-white/80 border-white text-slate-900 hover:bg-white"
                : "bg-white/10 border-white/15 text-white hover:bg-white/15"
            }`}
          >
            <FiChevronLeft size={22} />
          </button>

          <button
            type="button"
            onClick={goNext}
            aria-label="Next slide"
            className={`absolute right-4 top-1/2 -translate-y-1/2 h-11 w-11 rounded-2xl border shadow flex items-center justify-center transition ${
              isLight
                ? "bg-white/80 border-white text-slate-900 hover:bg-white"
                : "bg-white/10 border-white/15 text-white hover:bg-white/15"
            }`}
          >
            <FiChevronRight size={22} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 py-4">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2.5 rounded-full transition ${
                i === index ? "w-8" : "w-2.5"
              } ${
                i === index
                  ? isLight
                    ? "bg-slate-900"
                    : "bg-white"
                  : isLight
                  ? "bg-slate-300 hover:bg-slate-400"
                  : "bg-white/20 hover:bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MyCarousel
