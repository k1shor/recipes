import React, { useContext } from "react"
import Hero from "../components/Hero"
import MyCarousel2 from "../components/MyCarousel2"
import MyCarousel from "../components/MyCarousel"
import { MyThemeContext } from "../App"

const Homepage = () => {
  const { theme } = useContext(MyThemeContext)
  const isLight = theme === "LIGHT"

  return (
    <div
      className={`min-h-screen ${
        isLight
          ? "bg-gradient-to-br from-slate-100 to-slate-200"
          : "bg-gradient-to-br from-slate-900 to-slate-950"
      }`}
    >
      {/* Hero */}
      <Hero />

      <div className="max-w-6xl mx-auto px-4 py-10 space-y-12">
        {/* Highlight Carousel (Latest Blogs + Recipes) */}
        <section className="space-y-4">
          <div>
            <h2
              className={`text-2xl md:text-3xl font-extrabold ${
                isLight ? "text-slate-800" : "text-slate-100"
              }`}
            >
              Highlights
            </h2>
            <p className={`${isLight ? "text-slate-600" : "text-slate-300"}`}>
              Latest recipes and blogs hand-picked for you.
            </p>
          </div>

          <MyCarousel2 />
        </section>

        {/* Secondary Carousel */}
        <section className="space-y-4">
          <div>
            <h2
              className={`text-2xl md:text-3xl font-extrabold ${
                isLight ? "text-slate-800" : "text-slate-100"
              }`}
            >
              Explore More
            </h2>
            <p className={`${isLight ? "text-slate-600" : "text-slate-300"}`}>
              Discover more inspiration to keep cooking.
            </p>
          </div>

          <MyCarousel />
        </section>
      </div>
    </div>
  )
}

export default Homepage
