import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/MustardSeed-Photos/DSC0071"
          alt="Professional photography studio"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-3xl">
          <p className="text-primary-foreground/80 uppercase tracking-[0.3em] text-sm mb-4">
            Creative Production Space
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-primary-foreground leading-tight mb-6">
            <span className="block text-balance">Where Creatives</span>
            <span className="block font-semibold italic">Come to Create</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-xl leading-relaxed">
            A creative production space focused on photography, model portfolio development, and story-driven content. Not just a shoot — a structured, professional experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              asChild 
              size="lg" 
              className="bg-background text-foreground hover:bg-background/90 text-base px-8"
            >
              <Link href="#portfolio">
                View Portfolio
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-base px-8"
            >
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 text-primary-foreground/70">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-primary-foreground/30" />
        </div>
      </div>
    </section>
  )
}
