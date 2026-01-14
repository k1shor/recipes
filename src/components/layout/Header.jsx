import React, { useContext, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { MyThemeContext } from "../../App"
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi"

const Header = () => {
  const { theme, setTheme } = useContext(MyThemeContext)
  const isLight = theme === "LIGHT"
  const [open, setOpen] = useState(false)

  const toggleTheme = () => setTheme(isLight ? "DARK" : "LIGHT")

  const linkBase =
    "px-3 py-2 rounded-xl font-semibold transition whitespace-nowrap"
  const linkLight = "text-slate-700 hover:text-slate-900 hover:bg-white/70"
  const linkDark = "text-slate-200 hover:text-white hover:bg-white/10"
  const activeLight = "bg-slate-900 text-white shadow"
  const activeDark = "bg-white text-slate-900 shadow"

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/recipes", label: "Recipes" }, // ✅ NEW
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/gallery", label: "Gallery" },
    { to: "/blogs", label: "Blogs" },
    { to: "/contact", label: "Contact" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 border-b ${
        isLight
          ? "bg-white/70 backdrop-blur-xl border-white"
          : "bg-slate-950/60 backdrop-blur-xl border-white/10"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className={`flex items-center gap-2 text-xl md:text-2xl font-extrabold ${
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

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `${linkBase} ${isLight ? linkLight : linkDark} ${
                    isActive ? (isLight ? activeLight : activeDark) : ""
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right Controls */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl font-semibold shadow transition ${
              isLight
                ? "bg-slate-900 text-white hover:opacity-95"
                : "bg-white text-slate-900 hover:bg-slate-100"
            }`}
          >
            {isLight ? <FiMoon /> : <FiSun />}
            {isLight ? "Dark" : "Light"}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className={`md:hidden h-10 w-10 flex items-center justify-center rounded-xl border shadow transition ${
              isLight
                ? "bg-white/70 border-white text-slate-900 hover:bg-white"
                : "bg-white/5 border-white/10 text-white hover:bg-white/10"
            }`}
          >
            {open ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div
          className={`md:hidden border-t backdrop-blur-xl ${
            isLight
              ? "bg-white/70 border-white"
              : "bg-slate-950/60 border-white/10"
          }`}
        >
          <div className="max-w-6xl mx-auto px-4 py-4 grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `${linkBase} ${isLight ? linkLight : linkDark} ${
                    isActive ? (isLight ? activeLight : activeDark) : ""
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <button
              onClick={() => {
                toggleTheme()
                setOpen(false)
              }}
              className={`col-span-2 mt-3 px-4 py-2 rounded-xl font-semibold shadow transition ${
                isLight
                  ? "bg-slate-900 text-white"
                  : "bg-white text-slate-900"
              }`}
            >
              Switch to {isLight ? "Dark" : "Light"} Mode
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
