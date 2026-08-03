import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'

interface StoryCaption {
  range: [number, number]
  text: string
  side: 'left' | 'right'
}

interface ScrollStoryProps {
  videoSrc: string
  heightVh?: number
  eyebrow: string
  title: string
  subtitle?: string
  captions: StoryCaption[]
  cue?: string
}

function Caption({
  scrollYProgress,
  range,
  text,
  side,
}: {
  scrollYProgress: MotionValue<number>
  range: [number, number]
  text: string
  side: 'left' | 'right'
}) {
  const [start, end] = range
  const fade = Math.min(0.04, (end - start) / 3)
  const opacity = useTransform(
    scrollYProgress,
    [start, start + fade, end - fade, end],
    [0, 1, 1, 0],
  )
  const startX = side === 'left' ? -48 : 48
  const x = useTransform(scrollYProgress, [start, start + fade], [startX, 0])

  return (
    <motion.p
      style={{ opacity, x }}
      className={`absolute top-[52%] max-w-md px-6 text-base leading-relaxed font-medium text-white drop-shadow-lg md:max-w-lg md:text-lg ${
        side === 'left'
          ? 'left-6 text-left md:left-16'
          : 'right-6 text-right md:right-16'
      }`}
    >
      {text}
    </motion.p>
  )
}

export function ScrollStory({
  videoSrc,
  heightVh = 220,
  eyebrow,
  title,
  subtitle,
  captions,
  cue = 'Scroll to continue',
}: ScrollStoryProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const progressRef = useRef(0)
  const rafRef = useRef<number | null>(null)
  const lastSetRef = useRef(-1)
  const [ready, setReady] = useState(false)

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] })
  const headingOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])
  const headingY = useTransform(scrollYProgress, [0, 0.1], [0, -40])
  const cueOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0])

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (v) => {
      progressRef.current = v
    })
    return unsubscribe
  }, [scrollYProgress])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoadedMetadata = () => setReady(true)
    video.addEventListener('loadedmetadata', handleLoadedMetadata)

    const tick = () => {
      rafRef.current = requestAnimationFrame(tick)
      if (!video.duration) return
      const target = Math.min(progressRef.current, 1) * video.duration
      if (Math.abs(target - lastSetRef.current) > 0.01) {
        video.currentTime = target
        lastSetRef.current = target
      }
    }
    rafRef.current = requestAnimationFrame(tick)

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata)
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div ref={containerRef} className="relative" style={{ height: `${heightVh}vh` }} data-nav-theme="dark">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-slate-900">
        <video
          ref={videoRef}
          src={videoSrc}
          muted
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
          style={{ opacity: ready ? 1 : 0, transition: 'opacity 0.5s ease' }}
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/55 via-black/10 to-black/50" />

        <motion.div
          style={{ opacity: headingOpacity, y: headingY }}
          className="pointer-events-none absolute inset-x-0 top-24 z-10 px-6 text-center"
        >
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur">
            {eyebrow}
          </span>
          <h1 className="mx-auto mt-6 max-w-3xl font-serif text-4xl font-normal tracking-tight text-white drop-shadow-md md:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/85 drop-shadow">{subtitle}</p>
          )}
        </motion.div>

        {captions.map((c) => (
          <Caption
            key={c.text}
            scrollYProgress={scrollYProgress}
            range={c.range}
            text={c.text}
            side={c.side}
          />
        ))}

        <motion.div
          style={{ opacity: cueOpacity }}
          className="pointer-events-none absolute inset-x-0 bottom-10 z-10 flex flex-col items-center gap-2 text-white/80"
        >
          <span className="text-sm">{cue}</span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="text-xl"
          >
            ↓
          </motion.span>
        </motion.div>
      </div>
    </div>
  )
}
