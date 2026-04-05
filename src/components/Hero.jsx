import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import {
  CheckCircle2,
  Layout,
  TrendingUp,
  Zap,
  Star,
  Users,
  Calendar,
  Award,
  BookOpen,
  Heart,
  GitFork,
  Briefcase,
} from 'lucide-react'

// Helper to get icon for each stat key
const getStatIcon = (key) => {
  switch (key) {
    case 'repos':
      return <GitFork className="h-3.5 w-3.5" />
    case 'followers':
      return <Users className="h-3.5 w-3.5" />
    case 'joined':
      return <Calendar className="h-3.5 w-3.5" />
    case 'badges':
      return <Award className="h-3.5 w-3.5" />
    case 'certificates':
      return <Award className="h-3.5 w-3.5" />
    case 'articles':
      return <BookOpen className="h-3.5 w-3.5" />
    case 'reputation':
      return <Star className="h-3.5 w-3.5" />
    case 'designs':
      return <Layout className="h-3.5 w-3.5" />
    case 'loves':
      return <Heart className="h-3.5 w-3.5" />
    case 'jobs':
      return <Briefcase className="h-3.5 w-3.5" />
    default:
      return <Star className="h-3.5 w-3.5" />
  }
}

// Cache helper
const CACHE_KEY = 'platform_stats'
const CACHE_DURATION = 7 * 24 * 60 * 60 * 1000 // 7 days

const getCachedData = () => {
  const cached = localStorage.getItem(CACHE_KEY)
  if (!cached) return null
  const { data, timestamp } = JSON.parse(cached)
  if (Date.now() - timestamp > CACHE_DURATION) {
    localStorage.removeItem(CACHE_KEY)
    return null
  }
  return data
}

const setCachedData = (data) => {
  localStorage.setItem(
    CACHE_KEY,
    JSON.stringify({ data, timestamp: Date.now() }),
  )
}

const platforms = [
  {
    name: 'GitHub',
    url: 'https://github.com/xb-16',
    username: 'xb-16',
    icon: <img src="/github.svg" alt="GitHub" className="h-6 w-6" />,
    fetch: async (username) => {
      const res = await fetch(`https://api.github.com/users/${username}`)
      if (!res.ok) throw new Error()
      const data = await res.json()
      return {
        repos: data.public_repos,
        followers: data.followers,
        joined: new Date(data.created_at).getFullYear(),
      }
    },
  },
  {
    name: 'HackerRank',
    url: 'https://www.hackerrank.com/profile/xbhackermrc',
    icon: (
      <img
        src="/hackerrank.svg"
        alt="HackerRank"
        className="h-6 w-6 scale-125"
      />
    ),
    staticData: {
      badges: '5',
      certificates: 5,
      joined: '2020',
    },
  },
  {
    name: 'Dev.to',
    url: 'https://dev.to/xb16',
    icon: <img src="/dev.to.png" alt="Dev.to" className="h-6 w-6 scale-110" />,
    staticData: {
      articles: 8,
      followers: 48,
      joined: '2024',
    },
  },
  {
    name: 'Stack Overflow',
    url: 'https://stackoverflow.com/users/24086384',
    username: '24086384',
    icon: (
      <img src="/Stack Overflow.svg" alt="Stack Overflow" className="h-6 w-6" />
    ),
    fetch: async (userId) => {
      const res = await fetch(
        `https://api.stackexchange.com/2.3/users/${userId}?site=stackoverflow`,
      )
      if (!res.ok) throw new Error()
      const data = await res.json()
      const user = data.items[0]
      return {
        reputation: user.reputation,
        badges: user.badge_counts.bronze,
        joined: new Date(user.creation_date * 1000).getFullYear(),
      }
    },
  },
  {
    name: 'CodePen',
    url: 'https://codepen.io/Un_Kown',
    icon: (
      <img
        src="/codepen.svg"
        alt="CodePen"
        className="h-6 w-6 scale-125 object-fit"
      />
    ),
    staticData: {
      designs: 15,
      loves: 40,
      joined: '2020',
    },
  },
  {
    name: 'Upwork',
    url: 'https://www.upwork.com/freelancers/~01example', // Replace with your actual Upwork profile URL
    icon: <Briefcase className="h-6 w-6 text-[var(--lagoon)]" />,
    staticData: {
      jobs: 12,
      earnings: '$5K+',
      joined: '2023',
    },
  },
]

function PlatformCard({ platform, data, loading, error }) {
  return (
    <motion.a
      href={platform.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-xl border border-[var(--line)] bg-white dark:bg-gray-900/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[var(--lagoon)]/10"
      whileHover={{ y: -4 }}
    >
      <div
        className="absolute inset-0 rounded-xl bg-gradient-to-r from-[var(--lagoon)] to-[var(--palm)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ padding: '1px', margin: '-1px', zIndex: -1 }}
      />
      <div className="relative rounded-xl bg-white dark:bg-gray-900/50 p-5 text-nowrap">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-gradient-to-br from-[var(--lagoon)]/20 to-[var(--palm)]/20 p-2">
            {platform.icon}
          </div>
          <h3 className="text-lg font-semibold text-[var(--sea-ink)] dark:text-white">
            {platform.name}
          </h3>
        </div>

        {loading ? (
          <div className="mt-4 space-y-2">
            <div className="h-3 w-full animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
            <div className="h-3 w-2/3 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
          </div>
        ) : error ? (
          <p className="mt-4 text-sm text-red-500">Failed to load data</p>
        ) : (
          <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
            {Object.entries(data).map(([key, value]) => (
              <div
                key={key}
                className="flex items-center gap-1.5 text-xs text-[var(--sea-ink-soft)] dark:text-gray-400"
              >
                {getStatIcon(key)}
                <span className="capitalize">{key}:</span>
                <span className="font-mono font-semibold text-[var(--sea-ink)] dark:text-gray-200">
                  {value}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.a>
  )
}

export function Hero() {
  const [platformData, setPlatformData] = useState({})
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    const fetchAll = async () => {
      // Check cache first
      const cached = getCachedData()
      if (cached) {
        setPlatformData(cached)
        setLoading(false)
        return
      }

      setLoading(true)
      const results = {}
      const errs = {}

      await Promise.all(
        platforms.map(async (p) => {
          if (p.staticData) {
            results[p.name] = p.staticData
          } else if (p.fetch) {
            try {
              const data = await p.fetch(p.username)
              results[p.name] = data
            } catch {
              errs[p.name] = true
            }
          }
        }),
      )

      setPlatformData(results)
      setErrors(errs)
      setCachedData(results)
      setLoading(false)
    }

    fetchAll()
  }, [])

  return (
    <div className="space-y-12">
      {/* Top section: two columns */}
      <div className="grid gap-8 md:grid-cols-2 md:gap-12">
        {/* Left column: Name */}
        <div>
          <h1 className="text-4xl text-nowrap font-bold text-[var(--sea-ink)] md:text-6xl">
            Ahmed ASSARI
          </h1>
          <div className="my-6 h-1 w-20 rounded-full bg-gradient-to-r from-[var(--lagoon)] to-[var(--palm)]" />
          {/* Platform cards – full width grid */}
          <div className="grid grid-cols-2 gap-4">
            {platforms.map((p) => (
              <PlatformCard
                key={p.name}
                platform={p}
                data={platformData[p.name]}
                loading={loading && !platformData[p.name]}
                error={errors[p.name]}
              />
            ))}
          </div>
        </div>

        {/* Right column: Intro + Principles */}
        <div className="space-y-6 flex flex-col justify-center ">
          <div className="space-y-4 text-[var(--sea-ink-soft)]">
            <p className="text-lg leading-relaxed">
              I craft full‑stack web applications with a clean UI, robust &
              scalable backend & a strong foundation in Laravel and React.
            </p>
            <p className="text-lg leading-relaxed">
              I'm enthusiastic about leveraging AI tools to enhance
              productivity. I am also passionate about web application
              penetration testing, CTFs, malware analysis, & exploit
              development.
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface)]/50 p-5 backdrop-blur-sm">
            <h4 className="mb-3 flex items-center gap-2 text-lg font-semibold text-[var(--sea-ink)]">
              <TrendingUp className="h-5 w-5 text-[var(--lagoon)]" />
              My Principles
            </h4>
            <ul className="space-y-3">
              <li className="group flex items-start gap-3 transition-all hover:translate-x-1">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[var(--lagoon)] transition-colors group-hover:text-[var(--lagoon-deep)]" />
                <div>
                  <span className="font-semibold text-[var(--sea-ink)]">
                    Architecture Over Features:
                  </span>
                  <span className="text-[var(--sea-ink-soft)]">
                    {' '}
                    I prioritize well‑structured, maintainable code that stands
                    the test of time over quick hacks.
                  </span>
                </div>
              </li>
              <li className="group flex items-start gap-3 transition-all hover:translate-x-1">
                <Layout className="mt-0.5 h-5 w-5 flex-shrink-0 text-[var(--lagoon)] transition-colors group-hover:text-[var(--lagoon-deep)]" />
                <div>
                  <span className="font-semibold text-[var(--sea-ink)]">
                    User‑First Design:
                  </span>
                  <span className="text-[var(--sea-ink-soft)]">
                    {' '}
                    I design with the user in mind to ensure a seamless and
                    intuitive experience.
                  </span>
                </div>
              </li>
              <li className="group flex items-start gap-3 transition-all hover:translate-x-1">
                <Zap className="mt-0.5 h-5 w-5 flex-shrink-0 text-[var(--lagoon)] transition-colors group-hover:text-[var(--lagoon-deep)]" />
                <div>
                  <span className="font-semibold text-[var(--sea-ink)]">
                    Ship Early, Ship Often:
                  </span>
                  <span className="text-[var(--sea-ink-soft)]">
                    {' '}
                    I advocate for iterative development and frequent releases
                    to gather feedback and improve the product.
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
