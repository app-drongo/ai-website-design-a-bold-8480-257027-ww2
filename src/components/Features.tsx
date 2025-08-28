// Features Component
// Generated: 2025-08-28T08:37:36.857Z
// Template: features-c001
// Context: Homepage
// Position: pages.0.sections.3

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Palette, 
  Globe, 
  Smartphone, 
  BarChart3, 
  Zap, 
  Users,
  Megaphone,
  Camera,
  Target
} from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Palette,
      title: "Brand Identity Design",
      description: "Complete visual identity packages including logos, color schemes, and brand guidelines that make you unforgettable.",
      badge: "Branding"
    },
    {
      icon: Globe,
      title: "Custom Web Design",
      description: "Stunning, conversion-focused websites that capture your brand essence and drive business growth.",
      badge: "Web Design"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Approach",
      description: "Every design optimized for mobile devices to reach your audience wherever they are.",
      badge: "Mobile"
    },
    {
      icon: Megaphone,
      title: "Social Media Marketing",
      description: "Strategic social campaigns that build communities, increase engagement, and boost brand awareness.",
      badge: "Social Media"
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Data-driven insights to measure campaign success and optimize your digital marketing ROI.",
      badge: "Analytics"
    },
    {
      icon: Camera,
      title: "Creative Content",
      description: "Eye-catching visuals, videos, and graphics that tell your brand story and captivate audiences.",
      badge: "Content"
    },
    {
      icon: Target,
      title: "Strategic Planning",
      description: "Comprehensive digital strategies tailored to your business goals and target market.",
      badge: "Strategy"
    },
    {
      icon: Users,
      title: "Brand Consulting",
      description: "Expert guidance on brand positioning, messaging, and market differentiation strategies.",
      badge: "Consulting"
    },
    {
      icon: Zap,
      title: "Rapid Turnaround",
      description: "Fast project delivery without compromising quality, perfect for startups and growing businesses.",
      badge: "Speed"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Our Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need to
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Stand Out Online
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From bold branding to cutting-edge web design, we deliver creative solutions 
            that help startups and small businesses make their mark in the digital world.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to transform your brand with bold creative solutions?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Start Your Project
            </button>
            <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              View Our Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}