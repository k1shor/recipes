import axios from "axios"
import React, { useContext, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { MyThemeContext } from "../App"

const Recipe = () => {
  const { theme } = useContext(MyThemeContext)
  const isLight = theme === "LIGHT"

  const { id } = useParams()

  const [post, setPost] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios
      .get(`https://dummyjson.com/recipes/${id}`)
      .then((response) => setPost(response.data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [id])

  return (
    <div
      className={`min-h-screen py-10 px-4 ${
        isLight
          ? "bg-gradient-to-br from-slate-100 to-slate-200"
          : "bg-gradient-to-br from-slate-900 to-slate-950"
      }`}
    >
      <div className="max-w-5xl mx-auto">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-6">
          <Link
            to="/recipes"
            className={`font-semibold ${
              isLight
                ? "text-slate-700 hover:text-slate-900"
                : "text-slate-200 hover:text-white"
            }`}
          >
            ← Back to Recipes
          </Link>

          <div className="flex gap-3">
            <Link
              to="/blogs"
              className={`px-4 py-2 rounded-xl border shadow transition ${
                isLight
                  ? "bg-white/70 backdrop-blur border-white hover:bg-white text-slate-800"
                  : "bg-white/10 border-white/15 hover:bg-white/15 text-white"
              }`}
            >
              Blogs
            </Link>
            <Link
              to="/services"
              className={`px-4 py-2 rounded-xl border shadow transition ${
                isLight
                  ? "bg-white/70 backdrop-blur border-white hover:bg-white text-slate-800"
                  : "bg-white/10 border-white/15 hover:bg-white/15 text-white"
              }`}
            >
              Services
            </Link>
          </div>
        </div>

        {/* Card */}
        <div
          className={`rounded-3xl shadow-2xl border overflow-hidden ${
            isLight
              ? "bg-white/80 backdrop-blur-xl border-white"
              : "bg-white/5 backdrop-blur-xl border-white/10"
          }`}
        >
          {loading ? (
            <div className="flex justify-center items-center h-72">
              <div
                className={`h-12 w-12 rounded-full border-4 animate-spin ${
                  isLight
                    ? "border-slate-300 border-t-slate-900"
                    : "border-white/20 border-t-white"
                }`}
              />
            </div>
          ) : (
            <>
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.name}
                  loading="lazy"
                  className="w-full h-64 md:h-96 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 md:p-10">
                {/* Title */}
                <h1
                  className={`text-3xl md:text-4xl font-extrabold ${
                    isLight ? "text-slate-800" : "text-slate-100"
                  }`}
                >
                  {post.name}
                </h1>

                {/* Meta */}
                <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: "Prep Time", value: `${post.prepTimeMinutes ?? "-"} min` },
                    { label: "Servings", value: post.servings ?? "-" },
                    { label: "Cuisine", value: post.cuisine ?? "-" },
                    { label: "Calories", value: post.caloriesPerServing ?? "-" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={`rounded-2xl p-4 border shadow-sm ${
                        isLight
                          ? "bg-slate-50 border-slate-200"
                          : "bg-white/5 border-white/10"
                      }`}
                    >
                      <p className={`text-sm ${isLight ? "text-slate-500" : "text-slate-400"}`}>
                        {item.label}
                      </p>
                      <p className={`font-bold mt-1 ${isLight ? "text-slate-800" : "text-slate-100"}`}>
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Ingredients & Instructions */}
                <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Ingredients */}
                  <div
                    className={`rounded-3xl p-6 border shadow-sm ${
                      isLight
                        ? "bg-white/70 border-white"
                        : "bg-white/5 border-white/10"
                    }`}
                  >
                    <h2 className={`text-2xl font-bold ${isLight ? "text-slate-800" : "text-slate-100"}`}>
                      Ingredients
                    </h2>
                    <ul className={`mt-4 space-y-2 ${isLight ? "text-slate-700" : "text-slate-200"}`}>
                      {post?.ingredients?.map((item, i) => (
                        <li key={i} className="flex gap-3">
                          <span className={`mt-2 h-2 w-2 rounded-full ${isLight ? "bg-slate-800" : "bg-slate-200"}`} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Instructions */}
                  <div
                    className={`rounded-3xl p-6 border shadow-sm ${
                      isLight
                        ? "bg-white/70 border-white"
                        : "bg-white/5 border-white/10"
                    }`}
                  >
                    <h2 className={`text-2xl font-bold ${isLight ? "text-slate-800" : "text-slate-100"}`}>
                      Instructions
                    </h2>
                    <ol className={`mt-4 space-y-3 list-decimal list-inside ${isLight ? "text-slate-700" : "text-slate-200"}`}>
                      {post?.instructions?.map((step, i) => (
                        <li
                          key={i}
                          className={`rounded-2xl p-3 border ${
                            isLight ? "bg-slate-50 border-slate-200" : "bg-white/5 border-white/10"
                          }`}
                        >
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                {/* Tags */}
                <div className="mt-10">
                  <h2 className={`text-xl font-bold ${isLight ? "text-slate-800" : "text-slate-100"}`}>
                    Tags
                  </h2>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {post?.tags?.map((tag, i) => (
                      <span
                        key={i}
                        className={`text-sm px-4 py-1 rounded-full border ${
                          isLight
                            ? "bg-slate-900 text-white border-slate-900"
                            : "bg-white text-slate-900 border-white"
                        }`}
                      >
                        #{tag}
                      </span>
                    ))}
                    {!post?.tags?.length && (
                      <span className={`${isLight ? "text-slate-600" : "text-slate-300"}`}>
                        No tags available.
                      </span>
                    )}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-10 flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/recipes"
                    className={`px-5 py-3 rounded-xl font-semibold shadow transition text-center ${
                      isLight
                        ? "bg-slate-900 text-white hover:opacity-95"
                        : "bg-white text-slate-900 hover:bg-slate-100"
                    }`}
                  >
                    Browse More Recipes
                  </Link>
                  <Link
                    to="/blogs"
                    className={`px-5 py-3 rounded-xl font-semibold border shadow transition text-center ${
                      isLight
                        ? "bg-white/70 backdrop-blur border-white hover:bg-white text-slate-800"
                        : "bg-white/10 border-white/15 hover:bg-white/15 text-white"
                    }`}
                  >
                    Read Cooking Blogs
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Recipe
