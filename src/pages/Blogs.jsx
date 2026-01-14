import React, { useContext, useMemo } from "react"
import { Link } from "react-router-dom"
import { MyThemeContext } from "../App"

const Blogs = () => {
  const {theme} = useContext(MyThemeContext)
  const isLight = theme === "LIGHT"

  const blogs = useMemo(
    () => [
      {
        id: 1,
        title: "5 Quick Dinners You Can Make in 20 Minutes",
        excerpt:
          "Busy day? These fast and flavorful dinners are perfect for weeknights — minimal prep, maximum taste.",
        content: [
          "Weeknight cooking doesn’t have to feel like a big project. If you’re short on time, focus on simple techniques: high heat, minimal chopping, and pantry-friendly ingredients.",
          "Try a 20-minute stir-fry: protein + veggies + sauce. Or a quick pasta where the sauce cooks while the noodles boil. Even a wrap or bowl can feel complete with the right balance.",
          "Rule of thumb: pick ONE main ingredient, ONE fast carb, and ONE sauce. You’ll get variety without stress.",
        ],
        author: "TasteNest Editorial",
        date: "Jan 10, 2026",
        category: "Quick Meals",
        readTime: "4 min read",
        cover:
          "https://images.unsplash.com/photo-1528712306091-ed0763094c98?auto=format&fit=crop&w=1600&q=80",
        tags: ["quick", "weeknight", "easy"],
      },
      {
        id: 2,
        title: "How to Build a Balanced Plate (Without Overthinking)",
        excerpt:
          "A simple guide to smarter meals: protein, fiber, and healthy fats — plus easy swaps you can start today.",
        content: [
          "Balanced meals are about consistency, not perfection. Aim for: a protein source, a fiber-rich carb, and a healthy fat.",
          "Examples: eggs + oats + nuts; chicken + rice + salad; tofu + noodles + sesame oil + veggies.",
          "Start with one upgrade: add veggies to anything. Then improve protein. Then choose whole grains when possible.",
        ],
        author: "Nutrition Team",
        date: "Jan 7, 2026",
        category: "Nutrition",
        readTime: "6 min read",
        cover:
          "https://images.unsplash.com/photo-1543353071-087092ec393a?auto=format&fit=crop&w=1600&q=80",
        tags: ["healthy", "balanced", "tips"],
      },
      {
        id: 3,
        title: "Beginner Kitchen Skills: Knife Basics & Safety",
        excerpt:
          "Chopping shouldn’t feel scary. Learn simple knife grips, cutting styles, and safety tips for confidence.",
        content: [
          "Start with a sharp knife — it’s safer than a dull one. Use a stable cutting board with a damp towel underneath.",
          "Grip the knife with your index finger and thumb around the blade (not the handle only). Use your other hand as a claw to protect fingertips.",
          "Practice: slice onions, dice tomatoes, and chop herbs. Slow and steady builds speed naturally.",
        ],
        author: "Chef Support",
        date: "Jan 3, 2026",
        category: "Cooking Basics",
        readTime: "5 min read",
        cover:
          "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=1600&q=80",
        tags: ["skills", "knife", "beginner"],
      },
      {
        id: 4,
        title: "Spice Guide: Make Any Dish Taste Better",
        excerpt:
          "A practical spice guide — what to buy first, how to store it, and quick flavor combos you’ll reuse.",
        content: [
          "If you’re building a spice shelf, start with: cumin, paprika, turmeric, chili flakes, black pepper, and oregano.",
          "Store spices away from heat and light. Replace ground spices every 12–18 months for best flavor.",
          "Quick combos: cumin + paprika + garlic for savory warmth; turmeric + ginger for bright earthiness; oregano + chili for punch.",
        ],
        author: "TasteNest Editorial",
        date: "Dec 28, 2025",
        category: "Guides",
        readTime: "7 min read",
        cover:
          "https://images.unsplash.com/photo-1505577058444-a3dab90d4253?auto=format&fit=crop&w=1600&q=80",
        tags: ["spices", "flavor", "guide"],
      },
    ],
    []
  )

  const recent = blogs[0]
  const archive = blogs.slice(1)

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
            <h1 className={`text-3xl md:text-4xl font-extrabold ${isLight ? "text-slate-800" : "text-slate-100"}`}>
              Blogs & Guides
            </h1>
            <p className={`mt-2 max-w-2xl ${isLight ? "text-slate-600" : "text-slate-300"}`}>
              Read our latest article in full, or browse the archive for more.
            </p>
          </div>

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
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent full */}
          <div
            className={`lg:col-span-2 rounded-3xl overflow-hidden border shadow-2xl ${
              isLight
                ? "bg-white/80 backdrop-blur-xl border-white"
                : "bg-white/5 backdrop-blur-xl border-white/10"
            }`}
          >
            <div className="overflow-hidden">
              <img
                src={recent.cover}
                alt={recent.title}
                className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>

            <div className="p-6 md:p-10">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className={`text-xs px-3 py-1 rounded-full ${isLight ? "bg-slate-900 text-white" : "bg-white text-slate-900"}`}>
                  {recent.category}
                </span>
                <span className={`text-xs px-3 py-1 rounded-full ${isLight ? "bg-slate-100 text-slate-700" : "bg-white/10 text-slate-200"}`}>
                  {recent.readTime}
                </span>
              </div>

              <h2 className={`text-2xl md:text-3xl font-extrabold ${isLight ? "text-slate-800" : "text-slate-100"}`}>
                {recent.title}
              </h2>

              <p className={`mt-3 text-lg leading-relaxed ${isLight ? "text-slate-600" : "text-slate-300"}`}>
                {recent.excerpt}
              </p>

              <p className={`mt-4 text-sm ${isLight ? "text-slate-500" : "text-slate-400"}`}>
                {recent.author} • {recent.date}
              </p>

              <div className="mt-6 space-y-4">
                {recent.content.map((para, i) => (
                  <p key={i} className={`text-lg leading-relaxed ${isLight ? "text-slate-700" : "text-slate-200"}`}>
                    {para}
                  </p>
                ))}
              </div>

              <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {recent.tags.map((t, i) => (
                    <span
                      key={i}
                      className={`text-xs px-3 py-1 rounded-full border ${
                        isLight ? "bg-slate-50 border-slate-200 text-slate-700" : "bg-white/5 border-white/10 text-slate-200"
                      }`}
                    >
                      #{t}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/blog/${recent.id}`}
                  className={`px-5 py-2 rounded-xl font-semibold shadow transition ${
                    isLight ? "bg-slate-900 text-white hover:opacity-95" : "bg-white text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  Open as Page →
                </Link>
              </div>
            </div>
          </div>

          {/* Archive with thumbnails */}
          <aside className="space-y-6">
            <div
              className={`rounded-3xl border shadow-xl p-6 ${
                isLight
                  ? "bg-white/80 backdrop-blur-xl border-white"
                  : "bg-white/5 backdrop-blur-xl border-white/10"
              }`}
            >
              <h3 className={`text-xl font-bold ${isLight ? "text-slate-800" : "text-slate-100"}`}>
                Archive
              </h3>
              <p className={`text-sm mt-1 ${isLight ? "text-slate-600" : "text-slate-300"}`}>
                More posts to explore
              </p>

              <div className="mt-4 space-y-3">
                {archive.map((b) => (
                  <Link
                    key={b.id}
                    to={`/blog/${b.id}`}
                    className={`group flex gap-3 rounded-2xl p-3 border transition ${
                      isLight
                        ? "bg-slate-50 border-slate-200 hover:bg-slate-100"
                        : "bg-white/5 border-white/10 hover:bg-white/10"
                    }`}
                  >
                    <div className="w-20 h-16 rounded-xl overflow-hidden flex-shrink-0">
                      <img
                        src={b.cover}
                        alt={b.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div className="min-w-0">
                      <p className={`font-bold truncate ${isLight ? "text-slate-800" : "text-slate-100"}`}>
                        {b.title}
                      </p>
                      <p className={`text-xs mt-1 ${isLight ? "text-slate-500" : "text-slate-400"}`}>
                        {b.author} • {b.date}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <span
                          className={`text-[11px] px-2 py-0.5 rounded-full ${
                            isLight ? "bg-slate-900 text-white" : "bg-white text-slate-900"
                          }`}
                        >
                          {b.category}
                        </span>
                        <span
                          className={`text-[11px] px-2 py-0.5 rounded-full ${
                            isLight ? "bg-slate-200 text-slate-800" : "bg-white/10 text-slate-200"
                          }`}
                        >
                          {b.readTime}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

export default Blogs
