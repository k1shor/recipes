import React, { useContext, useEffect, useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { MyThemeContext } from "../App"

const DataFetch = () => {
  const { theme } = useContext(MyThemeContext)
  const isLight = theme === "LIGHT"

  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(false)

  const [search, setSearch] = useState("")
  const [cuisine, setCuisine] = useState("ALL")

  useEffect(() => {
    setLoading(true)
    fetch("https://dummyjson.com/recipes")
      .then((response) => response.json())
      .then((data) => setRecipes(data.recipes || []))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [])

  const cuisines = useMemo(() => {
    const set = new Set(recipes.map((r) => r.cuisine).filter(Boolean))
    return ["ALL", ...Array.from(set).sort()]
  }, [recipes])

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    return recipes.filter((r) => {
      const matchSearch = q ? r.name?.toLowerCase().includes(q) : true
      const matchCuisine = cuisine === "ALL" ? true : r.cuisine === cuisine
      return matchSearch && matchCuisine
    })
  }, [recipes, search, cuisine])

  const inputBase =
    "w-full rounded-xl px-4 py-3 outline-none border transition"
  const lightInput = "bg-white border-slate-200 focus:border-slate-400"
  const darkInput =
    "bg-white/5 border-white/10 text-white placeholder:text-slate-400 focus:border-white/30"

  return (
    <div
      className={`min-h-screen py-10 px-4 ${
        isLight
          ? "bg-linear-to-br from-slate-100 to-slate-200"
          : "bg-linear-to-br from-slate-900 to-slate-950"
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
              Recipes
            </h1>
            <p className={`mt-2 ${isLight ? "text-slate-600" : "text-slate-300"}`}>
              Search by name, filter by cuisine, and open any recipe to see full details.
            </p>
          </div>

          <div className="flex gap-3">
            <Link
              to="/blogs"
              className={`px-5 py-2 rounded-xl border shadow transition ${
                isLight
                  ? "bg-white/70 backdrop-blur border-white hover:bg-white text-slate-800"
                  : "bg-white/10 border-white/15 hover:bg-white/15 text-white"
              }`}
            >
              Blogs
            </Link>
            <Link
              to="/services"
              className={`px-5 py-2 rounded-xl border shadow transition ${
                isLight
                  ? "bg-white/70 backdrop-blur border-white hover:bg-white text-slate-800"
                  : "bg-white/10 border-white/15 hover:bg-white/15 text-white"
              }`}
            >
              Services
            </Link>
          </div>
        </div>

        {/* Filters */}
        <div
          className={`rounded-3xl shadow-xl border p-5 md:p-6 mb-8 ${
            isLight
              ? "bg-white/80 backdrop-blur-xl border-white"
              : "bg-white/5 backdrop-blur-xl border-white/10"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="md:col-span-2">
              <label className={`text-sm font-semibold ${isLight ? "text-slate-700" : "text-slate-200"}`}>
                Search
              </label>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search recipes by name..."
                className={`${inputBase} ${isLight ? lightInput : darkInput} mt-2`}
              />
            </div>

            {/* Cuisine */}
            <div>
              <label className={`text-sm font-semibold ${isLight ? "text-slate-700" : "text-slate-200"}`}>
                Cuisine
              </label>
              <select
                value={cuisine}
                onChange={(e) => setCuisine(e.target.value)}
                className={`${inputBase} ${isLight ? lightInput : darkInput} mt-2`}
              >
                {cuisines.map((c) => (
                  <option key={c} value={c} className="text-slate-900">
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Result summary */}
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <p className={`${isLight ? "text-slate-600" : "text-slate-300"}`}>
              Showing <span className="font-bold">{filtered.length}</span> recipes
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch("")
                setCuisine("ALL")
              }}
              className={`px-4 py-2 rounded-xl font-semibold border shadow-sm transition ${
                isLight
                  ? "bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-800"
                  : "bg-white/5 border-white/10 hover:bg-white/10 text-white"
              }`}
            >
              Reset Filters
            </button>
          </div>
        </div>

        {/* Grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className={`rounded-3xl overflow-hidden border shadow-xl p-5 animate-pulse ${
                  isLight ? "bg-white/80 border-white" : "bg-white/5 border-white/10"
                }`}
              >
                <div className={`h-44 rounded-2xl ${isLight ? "bg-slate-200" : "bg-white/10"}`} />
                <div className={`h-5 mt-5 rounded ${isLight ? "bg-slate-200" : "bg-white/10"}`} />
                <div className={`h-4 mt-3 w-2/3 rounded ${isLight ? "bg-slate-200" : "bg-white/10"}`} />
                <div className="mt-5 flex gap-2">
                  <div className={`h-6 w-16 rounded-full ${isLight ? "bg-slate-200" : "bg-white/10"}`} />
                  <div className={`h-6 w-20 rounded-full ${isLight ? "bg-slate-200" : "bg-white/10"}`} />
                </div>
              </div>
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div
            className={`rounded-3xl border shadow-xl p-10 text-center ${
              isLight ? "bg-white/80 border-white" : "bg-white/5 border-white/10"
            }`}
          >
            <h2 className={`text-2xl font-bold ${isLight ? "text-slate-800" : "text-slate-100"}`}>
              No recipes found
            </h2>
            <p className={`mt-2 ${isLight ? "text-slate-600" : "text-slate-300"}`}>
              Try a different keyword or change the cuisine filter.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((r) => (
              <div
                key={r.id}
                className={`group rounded-3xl overflow-hidden border shadow-xl transition hover:shadow-2xl ${
                  isLight
                    ? "bg-white/80 backdrop-blur-xl border-white"
                    : "bg-white/5 backdrop-blur-xl border-white/10"
                }`}
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={r.image}
                    alt={r.name}
                    loading="lazy"
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Body */}
                <div className="p-6">
                  {/* meta chips */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span
                      className={`text-xs px-3 py-1 rounded-full ${
                        isLight ? "bg-slate-900 text-white" : "bg-white text-slate-900"
                      }`}
                    >
                      {r.cuisine || "Cuisine"}
                    </span>
                    <span
                      className={`text-xs px-3 py-1 rounded-full ${
                        isLight ? "bg-slate-100 text-slate-700" : "bg-white/10 text-slate-200"
                      }`}
                    >
                      {r.prepTimeMinutes} min
                    </span>
                    <span
                      className={`text-xs px-3 py-1 rounded-full ${
                        isLight ? "bg-slate-100 text-slate-700" : "bg-white/10 text-slate-200"
                      }`}
                    >
                      {r.caloriesPerServing} cal
                    </span>
                  </div>

                  <h3
                    className={`text-xl font-extrabold leading-snug ${
                      isLight ? "text-slate-800" : "text-slate-100"
                    }`}
                  >
                    {r.name}
                  </h3>

                  {/* tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {(r.tags || []).slice(0, 3).map((t, i) => (
                      <span
                        key={i}
                        className={`text-xs px-3 py-1 rounded-full border ${
                          isLight
                            ? "bg-slate-50 border-slate-200 text-slate-700"
                            : "bg-white/5 border-white/10 text-slate-200"
                        }`}
                      >
                        #{t}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-6 flex gap-3">
                    <Link
                      to={`/recipe/${r.id}`}
                      className={`w-full text-center px-4 py-2 rounded-xl font-semibold shadow transition ${
                        isLight
                          ? "bg-slate-900 text-white hover:opacity-95"
                          : "bg-white text-slate-900 hover:bg-slate-100"
                      }`}
                    >
                      View Recipe →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <p className={`text-center text-sm mt-10 ${isLight ? "text-slate-500" : "text-slate-400"}`}>
          Discover something delicious today.
        </p>
      </div>
    </div>
  )
}

export default DataFetch
