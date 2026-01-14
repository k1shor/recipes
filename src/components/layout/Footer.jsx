import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { MyThemeContext } from "../../App"
import { FiFacebook, FiInstagram, FiMail, FiTwitter } from "react-icons/fi"

const Footer = () => {
  const { theme } = useContext(MyThemeContext)
  const isLight = theme === "LIGHT"

  return (
    <footer
      className={`pt-16 border-t ${
        isLight
          ? "bg-white/60 backdrop-blur-xl border-white"
          : "bg-slate-950/40 backdrop-blur-xl border-white/10"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className={`flex items-center gap-2 text-2xl font-extrabold ${
                isLight ? "text-slate-900" : "text-white"
              }`}
            >
              <span
                className={`inline-flex h-9 w-9 items-center justify-center rounded-2xl shadow ${
                  isLight ? "bg-slate-900 text-white" : "bg-white text-slate-900"
                }`}
              >
                🍲
              </span>
              Taste<span className={isLight ? "text-slate-600" : "text-slate-300"}>Nest</span>
            </Link>

            <p className={`mt-3 leading-relaxed ${isLight ? "text-slate-600" : "text-slate-300"}`}>
              Simple, beautiful recipes with clear instructions. Browse by cuisine, prep time, and tags.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <a
                href="#"
                className={`h-10 w-10 rounded-2xl border shadow flex items-center justify-center transition ${
                  isLight
                    ? "bg-white/70 border-white hover:bg-white text-slate-900"
                    : "bg-white/10 border-white/15 hover:bg-white/15 text-white"
                }`}
                aria-label="Facebook"
              >
                <FiFacebook />
              </a>
              <a
                href="#"
                className={`h-10 w-10 rounded-2xl border shadow flex items-center justify-center transition ${
                  isLight
                    ? "bg-white/70 border-white hover:bg-white text-slate-900"
                    : "bg-white/10 border-white/15 hover:bg-white/15 text-white"
                }`}
                aria-label="Instagram"
              >
                <FiInstagram />
              </a>
              <a
                href="#"
                className={`h-10 w-10 rounded-2xl border shadow flex items-center justify-center transition ${
                  isLight
                    ? "bg-white/70 border-white hover:bg-white text-slate-900"
                    : "bg-white/10 border-white/15 hover:bg-white/15 text-white"
                }`}
                aria-label="Twitter"
              >
                <FiTwitter />
              </a>
              <a
                href="#"
                className={`h-10 w-10 rounded-2xl border shadow flex items-center justify-center transition ${
                  isLight
                    ? "bg-white/70 border-white hover:bg-white text-slate-900"
                    : "bg-white/10 border-white/15 hover:bg-white/15 text-white"
                }`}
                aria-label="Email"
              >
                <FiMail />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`text-lg font-extrabold ${isLight ? "text-slate-800" : "text-slate-100"}`}>
              Quick Links
            </h3>

            <ul className={`mt-4 space-y-3 font-semibold ${isLight ? "text-slate-700" : "text-slate-200"}`}>
              <li><Link className="hover:underline" to="/">Home</Link></li>
              <li><Link className="hover:underline" to="/recipes">Recipes</Link></li>
              <li><Link className="hover:underline" to="/blogs">Blogs</Link></li>
              <li><Link className="hover:underline" to="/services">Services</Link></li>
              <li><Link className="hover:underline" to="/about">About</Link></li>
              <li><Link className="hover:underline" to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Popular */}
          <div>
            <h3 className={`text-lg font-extrabold ${isLight ? "text-slate-800" : "text-slate-100"}`}>
              Popular Categories
            </h3>

            <ul className={`mt-4 space-y-3 ${isLight ? "text-slate-600" : "text-slate-300"}`}>
              <li className="flex items-center gap-2">🍝 Quick Meals</li>
              <li className="flex items-center gap-2">🥗 Healthy</li>
              <li className="flex items-center gap-2">🍛 Asian</li>
              <li className="flex items-center gap-2">🍕 Italian</li>
              <li className="flex items-center gap-2">🍰 Desserts</li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className={`text-lg font-extrabold ${isLight ? "text-slate-800" : "text-slate-100"}`}>
              Stay Updated
            </h3>
            <p className={`mt-3 ${isLight ? "text-slate-600" : "text-slate-300"}`}>
              Get new recipes and blog tips. (UI only)
            </p>

            <div className="mt-4 flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className={`w-full rounded-xl px-4 py-3 outline-none border transition ${
                  isLight
                    ? "bg-white border-slate-200 focus:border-slate-400"
                    : "bg-white/5 border-white/10 text-white placeholder:text-slate-400 focus:border-white/30"
                }`}
              />
              <button
                type="button"
                className={`px-4 py-3 rounded-xl font-semibold shadow transition ${
                  isLight
                    ? "bg-slate-900 text-white hover:opacity-95"
                    : "bg-white text-slate-900 hover:bg-slate-100"
                }`}
                onClick={() => alert("Connect your backend later 🙂")}
              >
                Join
              </button>
            </div>

            <p className={`mt-3 text-sm ${isLight ? "text-slate-500" : "text-slate-400"}`}>
              We don’t spam. Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className={`mt-12 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3 ${
          isLight ? "border-slate-200" : "border-white/10"
        }`}>
          <p className={`${isLight ? "text-slate-600" : "text-slate-300"}`}>
            © {new Date().getFullYear()} TasteNest. All rights reserved.
          </p>
          <div className={`flex gap-4 text-sm font-semibold ${isLight ? "text-slate-600" : "text-slate-300"}`}>
            <Link to="/privacy" className="hover:underline">Privacy</Link>
            <Link to="/terms" className="hover:underline">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
