import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { MyThemeContext } from "../App"

const About = () => {
  const {theme} = useContext(MyThemeContext)
  const isLight = theme === "LIGHT"

  return (
    <div
      className={`min-h-screen py-10 px-4 ${
        isLight
          ? "bg-gradient-to-br from-slate-100 to-slate-200"
          : "bg-gradient-to-br from-slate-900 to-slate-950"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <h1
              className={`text-3xl md:text-4xl font-extrabold ${
                isLight ? "text-slate-800" : "text-slate-100"
              }`}
            >
              About TasteNest Recipes
            </h1>
            <p className={`mt-2 max-w-2xl ${isLight ? "text-slate-600" : "text-slate-300"}`}>
              We’re a recipe company that helps people cook with confidence — from quick weekday meals
              to special weekend dishes.
            </p>
          </div>

          <div className="flex gap-3">
            <Link
              to="/"
              className={`px-5 py-2 rounded-xl shadow transition ${
                isLight
                  ? "bg-slate-900 text-white hover:opacity-95 hover:shadow-lg"
                  : "bg-white text-slate-900 hover:bg-slate-100"
              }`}
            >
              Explore Recipes
            </Link>
            <Link
              to="/contact"
              className={`px-5 py-2 rounded-xl border shadow transition ${
                isLight
                  ? "bg-white/70 backdrop-blur border-white hover:bg-white text-slate-800"
                  : "bg-white/10 border-white/15 hover:bg-white/15 text-white"
              }`}
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main */}
          <div
            className={`lg:col-span-2 rounded-3xl shadow-2xl p-6 md:p-10 border ${
              isLight
                ? "bg-white/80 backdrop-blur-xl border-white"
                : "bg-white/5 backdrop-blur-xl border-white/10"
            }`}
          >
            <h2 className={`text-2xl font-bold ${isLight ? "text-slate-800" : "text-slate-100"}`}>
              Who we are
            </h2>
            <p className={`mt-3 leading-relaxed text-lg ${isLight ? "text-slate-700" : "text-slate-200"}`}>
              TasteNest Recipes is built for home cooks who want dependable results. We curate and
              present recipes with clear steps, simple ingredients, and helpful details like prep time,
              servings, cuisine type, and tags — so you can pick the right dish fast and cook it even faster.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                className={`rounded-2xl p-5 shadow-sm border ${
                  isLight ? "bg-slate-50 border-slate-200" : "bg-white/5 border-white/10"
                }`}
              >
                <h3 className={`font-bold text-lg ${isLight ? "text-slate-800" : "text-slate-100"}`}>
                  Our Mission
                </h3>
                <p className={`mt-2 ${isLight ? "text-slate-600" : "text-slate-300"}`}>
                  Make cooking feel easy, enjoyable, and repeatable — one recipe at a time.
                </p>
              </div>

              <div
                className={`rounded-2xl p-5 shadow-sm border ${
                  isLight ? "bg-slate-50 border-slate-200" : "bg-white/5 border-white/10"
                }`}
              >
                <h3 className={`font-bold text-lg ${isLight ? "text-slate-800" : "text-slate-100"}`}>
                  Our Promise
                </h3>
                <p className={`mt-2 ${isLight ? "text-slate-600" : "text-slate-300"}`}>
                  Clear instructions, reliable cooking times, and recipes worth saving.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <h2 className={`text-2xl font-bold ${isLight ? "text-slate-800" : "text-slate-100"}`}>
                What we offer
              </h2>

              <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Curated Collections",
                    desc: "Browse by cuisine, time, difficulty, and trending tags.",
                  },
                  {
                    title: "Recipe Details That Matter",
                    desc: "Ingredients, step-by-step instructions, servings, calories, and more.",
                  },
                  {
                    title: "Fast Discovery",
                    desc: "Beautiful recipe cards designed for quick browsing on any device.",
                  },
                  {
                    title: "Cook With Confidence",
                    desc: "Simple layouts and clean UI — no clutter, just cooking.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`rounded-2xl p-5 border shadow-sm transition hover:shadow-md ${
                      isLight ? "bg-white/70 border-white" : "bg-white/5 border-white/10"
                    }`}
                  >
                    <h3 className={`font-bold text-lg ${isLight ? "text-slate-800" : "text-slate-100"}`}>
                      {item.title}
                    </h3>
                    <p className={`mt-2 ${isLight ? "text-slate-600" : "text-slate-300"}`}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 rounded-2xl p-6 border shadow-sm bg-gradient-to-br from-white to-slate-50
              dark:bg-transparent"
              style={{}}
            >
              <h3 className={`text-xl font-bold ${isLight ? "text-slate-800" : "text-slate-100"}`}>
                Ready to cook something great?
              </h3>
              <p className={`mt-2 ${isLight ? "text-slate-600" : "text-slate-300"}`}>
                Discover recipes you’ll actually make again — and share with people you love.
              </p>

              <div className="mt-4 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/"
                  className={`px-5 py-2 rounded-xl font-semibold shadow transition text-center ${
                    isLight
                      ? "bg-slate-900 text-white hover:opacity-95"
                      : "bg-white text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  Browse Recipes
                </Link>
                <Link
                  to="/services"
                  className={`px-5 py-2 rounded-xl font-semibold border shadow transition text-center ${
                    isLight
                      ? "bg-white/70 border-white hover:bg-white text-slate-800"
                      : "bg-white/10 border-white/15 hover:bg-white/15 text-white"
                  }`}
                >
                  Our Services
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div
              className={`rounded-3xl shadow-xl p-6 border ${
                isLight ? "bg-white/80 backdrop-blur-xl border-white" : "bg-white/5 backdrop-blur-xl border-white/10"
              }`}
            >
              <h3 className={`text-xl font-bold ${isLight ? "text-slate-800" : "text-slate-100"}`}>
                Why people love us
              </h3>
              <ul className={`mt-4 space-y-3 ${isLight ? "text-slate-700" : "text-slate-200"}`}>
                {[
                  "Easy-to-follow steps",
                  "Clean ingredients lists",
                  "Quick metadata (time, servings, cuisine)",
                  "Mobile-first design",
                  "Smart tags for fast discovery",
                ].map((f, i) => (
                  <li key={i} className="flex gap-3">
                    <span className={`mt-2 h-2 w-2 rounded-full ${isLight ? "bg-slate-800" : "bg-slate-200"}`} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl bg-slate-900 text-white shadow-2xl p-6">
              <h3 className="text-xl font-bold">Quick Navigation</h3>
              <div className="mt-4 flex flex-col gap-3">
                <Link to="/" className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 transition">
                  → Recipes
                </Link>
                <Link to="/blogs" className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 transition">
                  → Blogs
                </Link>
                <Link to="/services" className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 transition">
                  → Services
                </Link>
                <Link to="/contact" className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 transition">
                  → Contact
                </Link>
              </div>
            </div>
          </div>
        </div>

        <p className={`text-center text-sm mt-10 ${isLight ? "text-slate-500" : "text-slate-400"}`}>
          © {new Date().getFullYear()} TasteNest Recipes — Cook better, every day.
        </p>
      </div>
    </div>
  )
}

export default About
