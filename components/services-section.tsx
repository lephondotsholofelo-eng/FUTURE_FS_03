import Image from "next/image"
import { Camera, Heart, PartyPopper, Package } from "lucide-react"

const services = [
  {
    icon: Camera,
    title: "Portrait Photography",
    description: "Professional headshots, family portraits, and personal branding photography that captures your unique essence.",
    image: "/images/portrait-sample.jpg",
    features: ["Individual Portraits", "Family Sessions", "Professional Headshots", "Creative Concepts"],
  },
  {
    icon: Heart,
    title: "Wedding Photography",
    description: "Timeless wedding photography that tells the story of your special day with elegance and emotion.",
    image: "/images/wedding-sample.jpg",
    features: ["Full Day Coverage", "Engagement Sessions", "Bridal Portraits", "Album Design"],
  },
  {
    icon: PartyPopper,
    title: "Event Photography",
    description: "Corporate events, celebrations, and gatherings documented with professionalism and artistic flair.",
    image: "/images/event-sample.jpg",
    features: ["Corporate Events", "Birthday Parties", "Graduations", "Conferences"],
  },
  {
    icon: Package,
    title: "Product Photography",
    description: "High-quality commercial photography that showcases your products in their best light.",
    image: "/images/product-sample.jpg",
    features: ["E-commerce Ready", "Lifestyle Shots", "Flat Lay", "360° Views"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-accent uppercase tracking-[0.3em] text-sm mb-4">
            What We Offer
          </p>
          <h2 className="text-3xl md:text-5xl font-light text-foreground mb-6">
            Our Photography <span className="font-semibold italic">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            From personal moments to professional needs, we offer a comprehensive range of photography services tailored to your vision.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Image */}
              <div className="relative h-64 md:h-72 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/10 transition-colors" />
                <div className="absolute top-4 left-4 w-12 h-12 bg-background rounded-full flex items-center justify-center">
                  <service.icon className="w-5 h-5 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs uppercase tracking-wider text-muted-foreground bg-secondary px-3 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
