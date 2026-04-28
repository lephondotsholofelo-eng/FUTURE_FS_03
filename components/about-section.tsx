import Image from "next/image"
import { Award, Clock, Users, Camera } from "lucide-react"

const stats = [
  { icon: Camera, value: "100+", label: "Productions" },
  { icon: Users, value: "200+", label: "Photoshoots Developed" },
  { icon: Award, value: "Agency", label: "Ready Work" },
  { icon: Clock, value: "Full", label: "Creative Support" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <Image
                src="/MustardSeed-Photos/NN-Portrait.jpg"
                alt="Nhlamulo Nkuna - Professional Photographer"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/10 rounded-lg -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-primary/20 rounded-lg -z-10" />
          </div>

          {/* Content */}
          <div>
            <p className="text-accent uppercase tracking-[0.3em] text-sm mb-4">
              About Me
            </p>
            <h2 className="text-3xl md:text-5xl font-light text-foreground mb-6">
              Meet <span className="font-semibold italic">Nhlamulo Nkuna</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                Welcome to MustardSeedStudio! I&apos;m Nhlamulo Nkuna, founder of a creative production space focused on photography, model portfolio development, and content creation.
              </p>
              <p>
                We specialise in clean, professional visuals for aspiring and agency-ready models, as well as brands looking for high-quality, story-driven content that resonates with their audience.
              </p>
              <p>
                Beyond photography, MustardSeedStudio is designed to support a growing creative ecosystem — bringing together photographers, models, and stylists to collaborate, create, and produce work that is both visually strong and commercially relevant. The goal is to offer not just a shoot, but a structured and professional experience that helps clients build their image, confidence, and portfolio.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <stat.icon className="w-6 h-6 text-accent mx-auto mb-2" />
                  <div className="text-2xl md:text-3xl font-semibold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
