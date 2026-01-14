import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { MyThemeContext } from "../App"

const Services = () => {
  const {theme} = useContext(MyThemeContext)
  const isLight = theme === "LIGHT"

  const services = [
    {
      title: "Recipe Collections",
      desc: "Browse curated recipes by cuisine, difficulty, meal type, and tags — built for fast discovery.",
      points: ["Cuisine-based lists", "Trending & seasonal picks", "Beginner-friendly options"],
    },
    {
      title: "Meal Planning",
      desc: "Plan your week with balanced meal ideas and easy-to-follow recipes that save time.",
      points: ["Weekly meal plans", "Time-saving recipes", "Family-friendly planning"],
    },
    {
      title: "Nutrition Insights",
      desc: "Choose recipes with helpful metadata like calories per serving, servings, and prep time.",
      points: ["Calories per serving", "Prep time & servings", "Smart tags for goals"],
    },
    {
      title: "Cooking Guides",
      desc: "Learn techniques, kitchen basics, and step-by-step guidance to improve confidence.",
      points: ["Skill building tips", "Step-by-step guidance", "Kitchen basics"],
    },
    {
      title: "Recipe Recommendations",
      desc: "Discover dishes based on your preferences — quick meals, healthy options, or comfort food.",
      points: ["Preference-based picks", "Quick & easy suggestions", "Cuisine exploration"],
    },
    {
      title: "Partnerships & Promotions",
      desc: "We collaborate with creators, brands, and food businesses to deliver valuable content.",
      points: ["Creator collaborations", "Brand partnerships", "Promotional campaigns"],
    },
  ]

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
              Our Services
            </h1>
            <p className={`mt-2 max-w-2xl ${isLight ? "text-slate-600" : "text-slate-300"}`}>
              We help people cook smarter and faster with curated recipes, meal planning,
              and practical cooking guidance — all in a clean experience.
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

        {/* Highlight strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {[
            { label: "Curated Recipes", value: "Quality-first selection" },
            { label: "Fast Discovery", value: "Browse & pick quickly" },
            { label: "Clean Instructions", value: "Cook with confidence" },
          ].map((item, i) => (
            <div
              key={i}
              className={`rounded-2xl shadow-lg p-5 border ${
                isLight
                  ? "bg-white/80 backdrop-blur-xl border-white"
                  : "bg-white/5 backdrop-blur-xl border-white/10"
              }`}
            >
              <p className={`text-sm ${isLight ? "text-slate-500" : "text-slate-400"}`}>
                {item.label}
              </p>
              <p className={`text-lg font-bold mt-1 ${isLight ? "text-slate-800" : "text-slate-100"}`}>
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className={`rounded-3xl shadow-xl p-6 border transition hover:shadow-2xl ${
                isLight
                  ? "bg-white/80 backdrop-blur-xl border-white"
                  : "bg-white/5 backdrop-blur-xl border-white/10"
              }`}
            >
              <h2 className={`text-xl font-bold ${isLight ? "text-slate-800" : "text-slate-100"}`}>
                {s.title}
              </h2>
              <p className={`mt-2 leading-relaxed ${isLight ? "text-slate-600" : "text-slate-300"}`}>
                {s.desc}
              </p>

              <ul className={`mt-4 space-y-2 ${isLight ? "text-slate-700" : "text-slate-200"}`}>
                {s.points.map((p, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className={`mt-2 h-2 w-2 rounded-full ${isLight ? "bg-slate-800" : "bg-slate-200"}`} />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <Link
                  to="/contact"
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl font-semibold shadow transition ${
                    isLight
                      ? "bg-slate-900 text-white hover:opacity-95"
                      : "bg-white text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  Learn More <span className="translate-y-[1px]">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`mt-10 rounded-3xl shadow-2xl p-6 md:p-8 border ${
            isLight
              ? "bg-slate-900 text-white border-slate-900"
              : "bg-white/5 backdrop-blur-xl text-white border-white/10"
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div>
              <h3 className="text-2xl font-extrabold">Let’s cook something amazing</h3>
              <p className={`${isLight ? "text-white/80" : "text-slate-200"} mt-2 max-w-2xl`}>
                Want curated recipe packs, partnerships, or meal planning support?
                Tell us what you need — we’ll help you build a better food experience.
              </p>
            </div>

            <div className="flex gap-3">
              <Link
                to="/"
                className={`px-5 py-2 rounded-xl font-semibold shadow transition ${
                  isLight
                    ? "bg-white text-slate-900 hover:bg-slate-100"
                    : "bg-white text-slate-900 hover:bg-slate-100"
                }`}
              >
                Browse Recipes
              </Link>
              <Link
                to="/blogs"
                className={`px-5 py-2 rounded-xl border shadow transition ${
                  isLight
                    ? "bg-white/10 border-white/20 hover:bg-white/15 text-white"
                    : "bg-white/10 border-white/15 hover:bg-white/15 text-white"
                }`}
              >
                Read Blogs
              </Link>
            </div>
          </div>
        </div>

        <p className={`text-center text-sm mt-10 ${isLight ? "text-slate-500" : "text-slate-400"}`}>
          Built for home cooks — clean recipes, clear steps, better meals.
        </p>
      </div>
    </div>
  )
}

export default Services
