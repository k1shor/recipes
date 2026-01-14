import React, { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { MyThemeContext } from "../App"

const Contact = () => {
  const {theme} = useContext(MyThemeContext)
  const isLight = theme === "LIGHT"

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [status, setStatus] = useState({ type: "", text: "" }) // type: success|error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!form.name || !form.email || !form.message) {
      setStatus({ type: "error", text: "Please fill in Name, Email, and Message." })
      return
    }

    // Demo submit (replace with API call)
    setStatus({ type: "success", text: "Message sent! We’ll get back to you soon." })
    setForm({ name: "", email: "", subject: "", message: "" })
  }

  const inputBase =
    "w-full rounded-xl px-4 py-3 outline-none border transition"
  const lightInput = "bg-white border-slate-200 focus:border-slate-400"
  const darkInput = "bg-white/5 border-white/10 text-white placeholder:text-slate-400 focus:border-white/30"

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
              Contact Us
            </h1>
            <p className={`mt-2 max-w-2xl ${isLight ? "text-slate-600" : "text-slate-300"}`}>
              Questions, partnerships, feedback, or suggestions? Send us a message —
              we usually reply within 1–2 business days.
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
              to="/blogs"
              className={`px-5 py-2 rounded-xl border shadow transition ${
                isLight
                  ? "bg-white/70 backdrop-blur border-white hover:bg-white text-slate-800"
                  : "bg-white/10 border-white/15 hover:bg-white/15 text-white"
              }`}
            >
              Read Blogs
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Form */}
          <div
            className={`lg:col-span-2 rounded-3xl shadow-2xl p-6 md:p-10 border ${
              isLight
                ? "bg-white/80 backdrop-blur-xl border-white"
                : "bg-white/5 backdrop-blur-xl border-white/10"
            }`}
          >
            {status.text && (
              <div
                className={`mb-6 rounded-2xl px-4 py-3 border text-sm ${
                  status.type === "success"
                    ? isLight
                      ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                      : "bg-emerald-500/10 border-emerald-400/20 text-emerald-200"
                    : isLight
                    ? "bg-rose-50 border-rose-200 text-rose-800"
                    : "bg-rose-500/10 border-rose-400/20 text-rose-200"
                }`}
              >
                {status.text}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className={`text-sm font-semibold ${isLight ? "text-slate-700" : "text-slate-200"}`}>
                    Full Name *
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={`${inputBase} ${isLight ? lightInput : darkInput} mt-2`}
                  />
                </div>

                <div>
                  <label className={`text-sm font-semibold ${isLight ? "text-slate-700" : "text-slate-200"}`}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={`${inputBase} ${isLight ? lightInput : darkInput} mt-2`}
                  />
                </div>
              </div>

              <div>
                <label className={`text-sm font-semibold ${isLight ? "text-slate-700" : "text-slate-200"}`}>
                  Subject
                </label>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What’s this about?"
                  className={`${inputBase} ${isLight ? lightInput : darkInput} mt-2`}
                />
              </div>

              <div>
                <label className={`text-sm font-semibold ${isLight ? "text-slate-700" : "text-slate-200"}`}>
                  Message *
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Write your message..."
                  className={`${inputBase} ${isLight ? lightInput : darkInput} mt-2 resize-none`}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className={`px-5 py-3 rounded-xl font-semibold shadow transition ${
                    isLight
                      ? "bg-slate-900 text-white hover:opacity-95 hover:shadow-lg"
                      : "bg-white text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  Send Message
                </button>

                <Link
                  to="/services"
                  className={`px-5 py-3 rounded-xl font-semibold border shadow transition text-center ${
                    isLight
                      ? "bg-white/70 backdrop-blur border-white hover:bg-white text-slate-800"
                      : "bg-white/10 border-white/15 hover:bg-white/15 text-white"
                  }`}
                >
                  View Services
                </Link>
              </div>
            </form>
          </div>

          {/* Info / sidebar */}
          <div className="space-y-6">
            <div
              className={`rounded-3xl shadow-xl p-6 border ${
                isLight ? "bg-white/80 backdrop-blur-xl border-white" : "bg-white/5 backdrop-blur-xl border-white/10"
              }`}
            >
              <h3 className={`text-xl font-bold ${isLight ? "text-slate-800" : "text-slate-100"}`}>
                Company Info
              </h3>

              <div className={`mt-4 space-y-3 ${isLight ? "text-slate-700" : "text-slate-200"}`}>
                <p>
                  <span className={`${isLight ? "text-slate-500" : "text-slate-400"} text-sm`}>Email</span>
                  <br />
                  support@tastenest.com
                </p>
                <p>
                  <span className={`${isLight ? "text-slate-500" : "text-slate-400"} text-sm`}>Phone</span>
                  <br />
                  +977-98XXXXXXXX
                </p>
                <p>
                  <span className={`${isLight ? "text-slate-500" : "text-slate-400"} text-sm`}>Hours</span>
                  <br />
                  Sun–Fri: 9:00 AM – 6:00 PM
                </p>
              </div>
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
                <Link to="/about" className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 transition">
                  → About
                </Link>
                <Link to="/services" className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 transition">
                  → Services
                </Link>
              </div>
            </div>
          </div>
        </div>

        <p className={`text-center text-sm mt-10 ${isLight ? "text-slate-500" : "text-slate-400"}`}>
          We love feedback — help us make cooking easier for everyone.
        </p>
      </div>
    </div>
  )
}

export default Contact
