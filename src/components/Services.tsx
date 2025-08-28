// Services Component
// Generated: 2025-08-28T08:37:36.857Z
// Template: services-c001
// Context: Homepage
// Position: pages.0.sections.1

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Palette,
  Globe,
  Share2,
  Zap,
  Target,
  Rocket,
  Camera,
  TrendingUp,
  ArrowRight
} from "lucide-react"

export default function Services() {
  const services = [
    {
      id: "brand-identity",
      title: "Brand Identity Design",
      description: "Create a memorable brand that stands out with bold logos, color schemes, and visual identity systems.",
      icon: Palette,
      badge: "Most Popular",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity"],
      link: "/services/branding"
    },
    {
      id: "web-design",
      title: "Web Design & Development",
      description: "High-converting websites that capture your brand essence and turn visitors into customers.",
      icon: Globe,
      features: ["Responsive Design", "E-commerce Ready", "SEO Optimized"],
      link: "/services/web-design"
    },
    {
      id: "social-media",
      title: "Social Media Marketing",
      description: "Amplify your brand voice across all platforms with engaging content and strategic campaigns.",
      icon: Share2,
      badge: "Trending",
      features: ["Content Strategy", "Paid Advertising", "Community Management"],
      link: "/services/social-media"
    },
    {
      id: "digital-strategy",
      title: "Digital Strategy",
      description: "Comprehensive digital roadmaps that align your brand goals with market opportunities.",
      icon: Target,
      features: ["Market Research", "Competitor Analysis", "Growth Planning"],
      link: "/services/strategy"
    },
    {
      id: "content-creation",
      title: "Content Creation",
      description: "Compelling visual and written content that tells your brand story and engages your audience.",
      icon: Camera,
      features: ["Photography", "Video Production", "Copywriting"],
      link: "/services/content"
    },
    {
      id: "growth-marketing",
      title: "Growth Marketing",
      description: "Data-driven marketing campaigns designed to scale your business and maximize ROI.",
      icon: TrendingUp,
      features: ["Performance Marketing", "Analytics", "Conversion Optimization"],
      link: "/services/growth"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Our Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Creative Solutions That
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Spark Growth
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From bold branding to digital dominance - we craft experiences that make your startup unforgettable
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            
            return (
              <Card 
                key={service.id}
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    {service.badge && (
                      <Badge variant="secondary" className="text-xs">
                        {service.badge}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative space-y-4">
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                  
                  {/* Features List */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="size-1.5 rounded-full bg-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Learn More Link */}
                  <Button 
                    variant="ghost" 
                    className="w-full group/btn justify-between hover:bg-primary/10"
                    asChild
                  >
                    <a href={service.link}>
                      <span>Explore Service</span>
                      <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
                    </a>
                  </Button>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300 pointer-events-none" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to electrify your brand presence?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Book Strategy Call
            </Button>
            <Button size="lg" variant="outline">
              View Portfolio
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}