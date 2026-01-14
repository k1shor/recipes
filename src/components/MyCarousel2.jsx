import React, { useContext, useEffect, useMemo, useState } from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Link } from "react-router-dom"
import { MyThemeContext } from "../App"

const MyCarousel2 = () => {
  const { theme } = useContext(MyThemeContext)
  const isLight = theme === "LIGHT"

  // Dummy blogs (latest first)
  const blogs = useMemo(
    () => [
      {
        id: 4,
        title: "Spice Guide: Make Any Dish Taste Better",
        subtitle: "A simple guide to flavors, pairing, and quick upgrades.",
        author: "TasteNest Editorial",
        date: "Dec 28, 2025",
        cover:
          "https://images.unsplash.com/photo-1505577058444-a3dab90d4253?auto=format&fit=crop&w=1600&q=80",
        cta1: { label: "Read Blog", to: "/blog/4" },
        cta2: { label: "All Blogs", to: "/blogs" },
        badge: "Latest Blog",
      },
      {
        id: 3,
        title: "Beginner Kitchen Skills: Knife Basics & Safety",
        subtitle: "Cut faster, safer, and cleaner with these fundamentals.",
        author: "Chef Support",
        date: "Jan 3, 2026",
        cover:
          "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=1600&q=80",
        cta1: { label: "Read Blog", to: "/blog/3" },
        cta2: { label: "All Blogs", to: "/blogs" },
        badge: "Cooking Basics",
      },
      {
        id: 2,
        title: "How to Build a Balanced Plate (Without Overthinking)",
        subtitle: "Easy nutrition tips you can follow every day.",
        author: "Nutrition Team",
        date: "Jan 7, 2026",
        cover:
          "https://images.unsplash.com/photo-1543353071-087092ec393a?auto=format&fit=crop&w=1600&q=80",
        cta1: { label: "Read Blog", to: "/blog/2" },
        cta2: { label: "All Blogs", to: "/blogs" },
        badge: "Nutrition",
      },
    ],
    []
  )

  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data.recipes || []))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }, [])

  // Latest recipes by highest id
  const latestRecipes = useMemo(() => {
    return [...recipes].sort((a, b) => (b.id || 0) - (a.id || 0)).slice(0, 3)
  }, [recipes])

  // Convert recipe objects to "slide objects" compatible with the old layout
  const recipeSlides = useMemo(() => {
    return latestRecipes.map((r, idx) => ({
      key: `recipe-${r.id}`,
      img: r.image,
      title: r.name,
      subtitle: `Cuisine: ${r.cuisine || "—"} • Prep: ${r.prepTimeMinutes ?? "-"} min • Calories: ${
        r.caloriesPerServing ?? "-"
      }`,
      badge: idx === 0 ? "Recently Added" : "New Recipe",
      cta1: { label: "View Recipe", to: `/recipe/${r.id}` },
      cta2: { label: "All Recipes", to: "/recipes" },
      meta: [
        { label: "Prep", value: `${r.prepTimeMinutes ?? "-"} min` },
        { label: "Servings", value: r.servings ?? "-" },
        { label: "Cuisine", value: r.cuisine ?? "-" },
        { label: "Calories", value: r.caloriesPerServing ?? "-" },
      ],
    }))
  }, [latestRecipes])

  const blogSlides = useMemo(() => {
    return blogs.map((b) => ({
      key: `blog-${b.id}`,
      img: b.cover,
      title: b.title,
      subtitle: b.subtitle,
      badge: b.badge,
      cta1: b.cta1,
      cta2: b.cta2,
      meta: [
        { label: "Author", value: b.author },
        { label: "Date", value: b.date },
        { label: "Type", value: "Blog" },
        { label: "Read", value: "2–4 min" },
      ],
    }))
  }, [blogs])

  const slides = useMemo(() => {
    // Keep it mixed: 1 recipe, 1 blog, 1 recipe, 1 blog...
    const mix = []
    const max = Math.max(recipeSlides.length, blogSlides.length)
    for (let i = 0; i < max; i++) {
      if (recipeSlides[i]) mix.push(recipeSlides[i])
      if (blogSlides[i]) mix.push(blogSlides[i])
    }
    return mix.length ? mix : blogSlides
  }, [recipeSlides, blogSlides])

  return (
    <div
      className={`rounded-3xl overflow-hidden border shadow-2xl ${
        isLight
          ? "bg-white/80 backdrop-blur-xl border-white"
          : "bg-white/5 backdrop-blur-xl border-white/10"
      }`}
    >
      {loading && slides.length === 0 ? (
        <div className="h-[280px] md:h-[460px] flex items-center justify-center">
          <div
            className={`h-12 w-12 rounded-full border-4 animate-spin ${
              isLight ? "border-slate-300 border-t-slate-900" : "border-white/20 border-t-white"
            }`}
          />
        </div>
      ) : (
        <Carousel
          infiniteLoop
          showThumbs={false}
          useKeyboardArrows
          autoPlay
          interval={4500}
          transitionTime={700}
          animationHandler="fade"
          showStatus={false}
          swipeable
          emulateTouch
          renderIndicator={(onClickHandler, isSelected, index, label) => (
            <li
              key={index}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              role="button"
              tabIndex={0}
              aria-label={`${label} ${index + 1}`}
              className={`inline-block mx-1 my-2 rounded-full transition cursor-pointer ${
                isSelected ? "w-8" : "w-2.5"
              } ${
                isSelected
                  ? isLight
                    ? "bg-slate-900"
                    : "bg-white"
                  : isLight
                  ? "bg-slate-300 hover:bg-slate-400"
                  : "bg-white/20 hover:bg-white/30"
              }`}
              style={{ height: "10px" }}
            />
          )}
        >
          {slides.map((s) => (
            <div key={s.key} className="relative">
              {/* Image */}
              <img
                src={s.img}
                alt={s.title}
                className="h-[280px] md:h-[460px] object-cover"
                loading="lazy"
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 ${
                  isLight
                    ? "bg-gradient-to-r from-white/80 via-white/25 to-transparent"
                    : "bg-gradient-to-r from-slate-950/80 via-slate-950/35 to-transparent"
                }`}
              />

              {/* Content */}
              <div className="absolute inset-0 flex items-center">
                <div className="px-6 md:px-10 max-w-2xl text-left">
                  <span
                    className={`inline-flex items-center gap-2 text-xs md:text-sm font-semibold px-4 py-2 rounded-full border shadow-sm ${
                      isLight
                        ? "bg-white/70 backdrop-blur border-white text-slate-700"
                        : "bg-white/10 backdrop-blur border-white/15 text-slate-200"
                    }`}
                  >
                    🍲 {s.badge || "TasteNest Highlights"}
                  </span>

                  <h2
                    className={`mt-4 text-2xl md:text-4xl font-extrabold leading-tight ${
                      isLight ? "text-slate-900" : "text-white"
                    }`}
                  >
                    {s.title}
                  </h2>

                  <p
                    className={`mt-3 text-base md:text-lg leading-relaxed ${
                      isLight ? "text-slate-700" : "text-slate-200"
                    }`}
                  >
                    {s.subtitle}
                  </p>

                  {/* Meta mini grid */}
                  {s.meta?.length > 0 && (
                    <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
                      {s.meta.map((m, i) => (
                        <div
                          key={i}
                          className={`rounded-2xl p-3 border shadow-sm ${
                            isLight
                              ? "bg-white/70 backdrop-blur border-white"
                              : "bg-white/10 backdrop-blur border-white/15"
                          }`}
                        >
                          <p className={`text-xs ${isLight ? "text-slate-500" : "text-slate-300"}`}>
                            {m.label}
                          </p>
                          <p className={`font-bold ${isLight ? "text-slate-900" : "text-white"}`}>
                            {m.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* CTA */}
                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <Link
                      to={s.cta1.to}
                      className={`px-6 py-3 rounded-xl font-semibold shadow transition text-center ${
                        isLight
                          ? "bg-slate-900 text-white hover:opacity-95"
                          : "bg-white text-slate-900 hover:bg-slate-100"
                      }`}
                    >
                      {s.cta1.label} →
                    </Link>

                    <Link
                      to={s.cta2.to}
                      className={`px-6 py-3 rounded-xl font-semibold border shadow transition text-center ${
                        isLight
                          ? "bg-white/70 backdrop-blur border-white hover:bg-white text-slate-800"
                          : "bg-white/10 border-white/15 hover:bg-white/15 text-white"
                      }`}
                    >
                      {s.cta2.label}
                    </Link>
                  </div>
                </div>
              </div>

              {/* bottom fade */}
              <div
                className={`absolute inset-x-0 bottom-0 h-16 ${
                  isLight
                    ? "bg-gradient-to-t from-white/60 to-transparent"
                    : "bg-gradient-to-t from-slate-950/60 to-transparent"
                }`}
              />
            </div>
          ))}
        </Carousel>
      )}
    </div>
  )
}

export default MyCarousel2
