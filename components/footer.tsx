import Link from "next/link"
import { Instagram, Facebook, Mail } from "lucide-react"

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
]

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/mustardseed.stu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Mail, href: "mailto:hello@mustardseedstudio.co.za", label: "Email" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">MustardSeedStudio</h3>
            <p className="text-primary-foreground/70 leading-relaxed mb-6">
              Professional photography services capturing life&apos;s most precious moments. Based in Johannesburg, South Africa.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="flex flex-col gap-3 text-primary-foreground/70">
              <li>Portrait Photography</li>
              <li>Wedding Photography</li>
              <li>Event Photography</li>
              <li>Product Photography</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            &copy; {new Date().getFullYear()} MustardSeedStudio. All rights reserved.
          </p>
          <p className="text-primary-foreground/60 text-sm">
            Photography by Nhlamulo Nkuna
          </p>
        </div>
      </div>
    </footer>
  )
}
