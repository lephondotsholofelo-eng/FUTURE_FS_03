"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Mail, Phone, MapPin, Instagram, Facebook, Send } from "lucide-react"

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@mustardseedstudio.co.za" },
  { icon: Phone, label: "Phone", value: "+27 12 345 6789" },
  { icon: MapPin, label: "Location", value: "Johannesburg, South Africa" },
]

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/mustardseed.stu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
]

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formState)
    alert("Thank you for your inquiry! We'll get back to you soon.")
    setFormState({ name: "", email: "", phone: "", service: "", message: "" })
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent uppercase tracking-[0.3em] text-sm mb-4">
            Get in Touch
          </p>
          <h2 className="text-3xl md:text-5xl font-light text-foreground mb-6">
            Let&apos;s Create <span className="font-semibold italic">Together</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Ready to capture your special moments? Get in touch to discuss your photography needs and book a session.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Contact Information
            </h3>
            <div className="space-y-6 mb-10">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">
                      {info.label}
                    </p>
                    <p className="text-foreground font-medium">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Follow Us
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={social.label}
                    
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-lg p-6 md:p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit}>
              <FieldGroup>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field>
                    <FieldLabel htmlFor="name">Your Name</FieldLabel>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      required
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="email">Email Address</FieldLabel>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      required
                    />
                  </Field>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field>
                    <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+27 12 345 6789"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="service">Service Interested In</FieldLabel>
                    <Input
                      id="service"
                      placeholder="e.g., Wedding Photography"
                      value={formState.service}
                      onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                    />
                  </Field>
                </div>
                <Field>
                  <FieldLabel htmlFor="message">Your Message</FieldLabel>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your photography needs..."
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    required
                  />
                </Field>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Send Message
                  <Send className="ml-2 w-4 h-4" />
                </Button>
              </FieldGroup>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
