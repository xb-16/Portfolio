import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const platforms = [
  {
    name: "GitHub",
    url: "https://github.com/xb-16",
    username: "xb-16",
    icon: (
      <img
        src="/github.svg"
        alt="GitHub"
        className="h-8 w-8"
      />
    ),    fetch: async (username) => {
      const res = await fetch(`https://api.github.com/users/${username}`);
      if (!res.ok) throw new Error();
      const data = await res.json();
      return {
        repos: data.public_repos,
        followers: data.followers,
        joined: new Date(data.created_at).getFullYear(),
      };
    },
  },
  {
    name: "HackerRank",
    url: "https://www.hackerrank.com/profile/xbhackermrc",
    icon: (
      <img
        src="/hackerrank.svg"
        alt="HackerRank"
        className="h-8 w-8 scale-150"
      />
    ),    staticData: {
      badges: "5",         
      certificates: 5,
      joined: "2020",
    },
  },
  {
    name: "Dev.to",
    url: "https://dev.to/xb16",
    icon: (
      <img
        src="/dev.to.png"
        alt="Dev.to"
        className="h-8 w-8 scale-110"
      />
    ),    staticData: {
      articles: 8,
      followers: 48,
      joined: "2024",
    },
  },
  {
    name: "Stack Overflow",
    url: "https://stackoverflow.com/users/24086384",
    username: "24086384",
    icon: (
      <img
        src="/Stack Overflow.svg"
        alt="Stack Overflow"
        className="h-8 w-8"
      />
    ),
    fetch: async (userId) => {
      const res = await fetch(`https://api.stackexchange.com/2.3/users/${userId}?site=stackoverflow`);
      if (!res.ok) throw new Error();
      const data = await res.json();
      const user = data.items[0];
      return {
        reputation: user.reputation,
        badges: user.badge_counts.bronze,
        joined: new Date(user.creation_date * 1000).getFullYear(),
      };
    },
  },
  {
    name: "CodePen",
    url: "https://codepen.io/Un_Kown",
    icon: (
      <img
        src="/codepen.svg"
        alt="CodePen"
        className="h-8 w-8 scale-150 object-fit"
      />
    ),    staticData: {
      designs: 15,
      loves: 40,
      joined: "2020",
    },
  },
];

function PlatformCard({ platform, data, loading, error }) {
  return (
    <motion.a
      href={platform.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:shadow-xl dark:bg-black/20 dark:border-white/5 dark:hover:bg-black/30"
      whileHover={{ y: -4 }}
    >
      <div className="flex flex-col items-center">
        <div className="mb-4 rounded-full bg-gradient-to-br from-[var(--lagoon)]/20 to-transparent p-3">
          {platform.icon}
        </div>
        <h3 className="mb-2 text-lg font-semibold text-[var(--sea-ink)] dark:text-white">
          {platform.name}
        </h3>
        {loading ? (
          <div className="mt-2 h-12 w-12 animate-pulse rounded-full bg-gray-300 dark:bg-gray-700" />
        ) : error ? (
          <p className="text-sm text-red-500">Failed to load</p>
        ) : (
          <div className="mt-2 text-sm text-[var(--sea-ink-soft)] dark:text-white/80">
              <div className="space-y-1">
                {Object.entries(data).map(([key, value]) => (
                  <div key={key} className="flex justify-between gap-8">
                    <span className="capitalize">{key}:</span>
                    <span className="font-mono font-semibold">{value}</span>
                  </div>
                ))}
              </div>
          </div>
        )}
      </div>
    </motion.a>
  );
}

export function Hero() {
  const [platformData, setPlatformData] = useState({});
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchAll = async () => {
      setLoading(true);
      const results = {};
      const errs = {};

      await Promise.all(
        platforms.map(async (p) => {
          if (p.staticData) {
            // Static data: set immediately
            results[p.name] = p.staticData;
          } else if (p.fetch) {
            try {
              const data = await p.fetch(p.username);
              results[p.name] = data;
            } catch {
              errs[p.name] = true;
            }
          }
        })
      );

      setPlatformData(results);
      setErrors(errs);
      setLoading(false);
    };

    fetchAll();
  }, []);

  return (
    <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
      <div className="space-y-4">
        <h1 className="text-5xl font-bold text-[var(--sea-ink)] md:text-7xl">
          Laravel & React Developer
        </h1>
        <p className="text-xl text-[var(--sea-ink-soft)]">
          I craft full‑stack web applications with a passion for clean UI and robust backends.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-2">
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
  );
}   