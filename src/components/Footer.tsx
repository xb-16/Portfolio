import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--line)] bg-[var(--header-bg)] backdrop-blur-md">
      <div className="mx-auto max-w-[1080px] px-4 py-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className=" text-xl font-bold text-[var(--sea-ink)]">
              Ahmed ASSARI
            </h3>
            <p className="mt-2 text-sm text-[var(--sea-ink-soft)]">
              Laravel & React Developer crafting modern & secured web experiences, always learning and adapting.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-[var(--sea-ink)]">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-[var(--sea-ink-soft)]">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:xbhackermrc@gmail.com" className="hover:text-[var(--lagoon-deep)] transition-colors">
                  xbhackermrc@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+212770774083" className="hover:text-[var(--lagoon-deep)] transition-colors">
                  +212 7 70 77 40 83
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Morocco</span>
              </li>
            </ul>
          </div>

          {/* Social / Copyright */}
          <div>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-[var(--sea-ink)]">
              Follow
            </h4>
            <div className="flex gap-3">
              {/* Add social links if desired – optional */}
              <ul className="flex flex-col gap-3">
                <li>
                  <a
                    href="https://github.com/xb-16"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--lagoon-deep)] transition-colors"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@%D8%AD%D8%B0%D9%8A%D9%81%D8%A9%D8%A3%D8%AD%D9%85%D8%AF"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--lagoon-deep)] transition-colors"
                  >
                    Youtube
                  </a>
                </li>
              </ul>
            </div>
            <p className="mt-6 text-xs text-[var(--sea-ink-soft)]">
              © {currentYear} xb-16. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}