"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const categories = ["All", "Portraits", "Creative Work", "Events", "Food"]

const portfolioItems = [
  { id: 1, category: "Portraits", image: "/MustardSeed-Photos/PORTRAITS/_DSC0736.jpg", title: "Model Portrait" },
  { id: 2, category: "Creative Work", image: "/MustardSeed-Photos/CREATIVE_WORK/_DSC0126.jpg", title: "Editorial Shoot" },
  { id: 3, category: "Events", image: "/MustardSeed-Photos/EVENTS/_DSC0451.jpg", title: "21st Birthday Party" },
  { id: 4, category: "Food", image: "/MustardSeed-Photos/FOOD/1000130662.jpg", title: "Food Content" },
  { id: 5, category: "Portraits", image: "/MustardSeed-Photos/PORTRAITS/_DSC1525 (4).jpg", title: "Professional Headshot" },
  { id: 6, category: "Creative Work", image: "/MustardSeed-Photos/CREATIVE_WORK/_DSC0154.jpg", title: "Studio Session" },
]

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredItems = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory)

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-accent uppercase tracking-[0.3em] text-sm mb-4">
            Our Work
          </p>
          <h2 className="text-3xl md:text-5xl font-light text-foreground mb-6">
            Featured <span className="font-semibold italic">Portfolio</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Explore a selection of our finest work across various photography genres.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-2 text-sm uppercase tracking-wider transition-colors rounded-full",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-[4/5] overflow-hidden rounded-lg cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs uppercase tracking-widest text-primary-foreground/80 mb-1">
                  {item.category}
                </span>
                <h3 className="text-xl font-semibold text-primary-foreground">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
