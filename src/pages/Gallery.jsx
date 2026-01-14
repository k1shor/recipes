import React, {
  useContext,
  useMemo,
  useRef,
  useState,
  useEffect,
} from "react"
import { MyThemeContext } from "../App"

/* ---------- helpers ---------- */
const clamp = (n, min, max) => Math.max(min, Math.min(max, n))

/* ---------- blur image ---------- */
const BlurImage = ({
  src,
  alt,
  className = "",
  imgClassName = "",
  onClick,
  style,
}) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className={`relative overflow-hidden ${className}`} onClick={onClick}>
      <div
        className={`absolute inset-0 bg-slate-300/40 dark:bg-slate-700/40 transition-opacity duration-500 ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
      />
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`
          w-full h-full object-cover
          transition-all duration-700
          ${loaded ? "blur-0 scale-100" : "blur-xl scale-105"}
          ${imgClassName}
        `}
        style={style}
        draggable={false}
      />
    </div>
  )
}

const Gallery = () => {
  /* ---------- theme (safe) ---------- */
  const themeCtx = useContext(MyThemeContext)
  const theme = themeCtx?.theme ?? themeCtx
  const isLight = theme === "LIGHT"

  /* ---------- images ---------- */
  const images = useMemo(
    () => [
      { id: 1, title: "Quick Bowl", src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe" },
      { id: 2, title: "Healthy Greens", src: "https://images.unsplash.com/photo-1543353071-087092ec393a" },
      { id: 3, title: "Pasta", src: "https://images.unsplash.com/photo-1528712306091-ed0763094c98" },
      { id: 4, title: "Breakfast", src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836" },
      { id: 5, title: "Dessert", src: "https://images.unsplash.com/photo-1505253716362-afaea1b4c0c3" },
      { id: 6, title: "Asian", src: "https://images.unsplash.com/photo-1466637574441-749b8f19452f" },
      { id: 7, title: "Street Food", src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1" },
      { id: 8, title: "Snacks", src: "https://images.unsplash.com/photo-1498837167922-ddd27525d352" },

      { id: 9, title: "Burger", src: "https://images.unsplash.com/photo-1550547660-d9450f859349" },
      { id: 10, title: "Salad", src: "https://images.unsplash.com/photo-1546069901-eacef0df6022" },
      { id: 11, title: "Grill", src: "https://images.unsplash.com/photo-1551183053-bf91a1d81141" },
      { id: 12, title: "Pizza", src: "https://images.unsplash.com/photo-1548365328-8b1c3b38caa1" },
      { id: 13, title: "Soup", src: "https://images.unsplash.com/photo-1547592180-9d8f1a6a1f2a" },
      { id: 14, title: "Seafood", src: "https://images.unsplash.com/photo-1516684732162-798a0062be99" },

      { id: 15, title: "Coffee", src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93" },
      { id: 16, title: "Dessert Plate", src: "https://images.unsplash.com/photo-1551024601-bec78aea704b" },
      { id: 17, title: "Bowls", src: "https://images.unsplash.com/photo-1540914124281-342587941389" },
      { id: 18, title: "Rice Curry", src: "https://images.unsplash.com/photo-1604908177522-4296f6a1c7f5" },
      { id: 19, title: "Sandwich", src: "https://images.unsplash.com/photo-1550317138-10000687a72b" },
      { id: 20, title: "Smoothie", src: "https://images.unsplash.com/photo-1505253758473-96b7015fcd8c" },
    ],
    []
  )

  /* ---------- pagination ---------- */
  const INITIAL = 8
  const STEP = 6
  const [visibleCount, setVisibleCount] = useState(INITIAL)
  const anchorRef = useRef(null)

  const visibleImages = images.slice(0, visibleCount)
  const hasMore = visibleCount < images.length

  const loadMore = () => {
    setVisibleCount((p) => Math.min(p + STEP, images.length))
  }

  useEffect(() => {
    anchorRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }, [visibleCount])

  /* ---------- lightbox ---------- */
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)
  const [zoom, setZoom] = useState(1)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  const openLb = (i) => {
    setIndex(i)
    setZoom(1)
    setOffset({ x: 0, y: 0 })
    setOpen(true)
  }

  const closeLb = () => setOpen(false)
  const next = () => setIndex((i) => (i + 1) % visibleImages.length)
  const prev = () => setIndex((i) => (i - 1 + visibleImages.length) % visibleImages.length)

  const img = visibleImages[index]

  /* ---------- render ---------- */
  return (
    <div
      className={`min-h-screen py-12 ${
        isLight
          ? "bg-gradient-to-br from-slate-100 to-slate-200"
          : "bg-gradient-to-br from-slate-900 to-slate-950"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h1
          className={`text-4xl font-extrabold text-center mb-10 ${
            isLight ? "text-slate-800" : "text-slate-100"
          }`}
        >
          Gallery
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleImages.map((img, i) => (
            <div
              key={img.id}
              ref={i === INITIAL ? anchorRef : null}
              className="cursor-zoom-in rounded-3xl overflow-hidden shadow-xl"
            >
              <BlurImage
                src={`${img.src}?auto=format&fit=crop&w=1200&q=80`}
                alt={img.title}
                className="h-64"
                imgClassName="hover:scale-105 transition-transform duration-500"
                onClick={() => openLb(i)}
              />
            </div>
          ))}

          {hasMore && (
            <button
              onClick={loadMore}
              className={`h-64 rounded-3xl font-extrabold text-xl tracking-widest shadow-xl transition ${
                isLight
                  ? "bg-white text-slate-900 hover:bg-slate-50"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              LOAD MORE
            </button>
          )}
        </div>
      </div>

      {/* ---------- lightbox ---------- */}
      {open && img && (
        <div
          className="fixed inset-0 z-[999] bg-black/80 flex items-center justify-center"
          onClick={closeLb}
        >
          <div
            className="relative max-w-6xl w-full p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <BlurImage
              src={`${img.src}?auto=format&fit=contain&w=2000&q=80`}
              alt={img.title}
              className="max-h-[80vh] bg-black"
              imgClassName="object-contain"
              style={{
                transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})`,
              }}
            />

            <button onClick={prev} className="absolute left-4 top-1/2 text-white text-3xl">
              ❮
            </button>
            <button onClick={next} className="absolute right-4 top-1/2 text-white text-3xl">
              ❯
            </button>
            <button onClick={closeLb} className="absolute top-4 right-4 text-white text-xl">
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery
