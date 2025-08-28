// Footer Component
// Generated: 2025-08-28T08:37:36.857Z
// Template: footer-c001
// Context: layout
// Position: layout.footer.0

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Dribbble,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
  Zap,
  Sparkles
} from "lucide-react"

export default function Footer() {
  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Brand Identity", href: "#services" },
        { name: "Web Design", href: "#services" },
        { name: "Social Media", href: "#services" },
        { name: "Digital Marketing", href: "#services" },
        { name: "UI/UX Design", href: "#services" },
        { name: "Creative Strategy", href: "#services" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Our Work", href: "#portfolio" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Team", href: "/team" },
        { name: "Careers", href: "/careers" },
        { name: "Contact", href: "#contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Design Blog", href: "/blog" },
        { name: "Creative Tips", href: "/tips" },
        { name: "Brand Guidelines", href: "/guidelines" },
        { name: "Free Resources", href: "/resources" },
        { name: "Inspiration", href: "/inspiration" },
        { name: "Tutorials", href: "/tutorials" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "/help" },
        { name: "Project Inquiry", href: "#contact" },
        { name: "Partnership", href: "/partnership" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Policy", href: "/cookies" }
      ]
    }
  ]

  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
    { name: "Dribbble", icon: Dribbble, href: "https://dribbble.com" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
    { name: "Facebook", icon: Facebook, href: "https://facebook.com" }
  ]

  return (
    <footer className="bg-secondary/20 border-t border-primary/20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                  <Zap className="size-5 text-background" />
                </div>
                <span className="font-bold text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Neon Creative Studio
                </span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                We're a bold creative agency specializing in branding, web design, and social media marketing. 
                Let's create something extraordinary together and make your brand shine.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">hello@neoncreative.studio</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+1 (555) NEON-123</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Creative District, Design Ave 100</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <Sparkles className="size-4 text-accent" />
                Creative Updates
              </h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 text-sm border border-primary/20 rounded-md bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary backdrop-blur-sm"
                />
                <Button size="sm" className="px-3 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Get creative inspiration and design tips. No spam, pure creativity.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm text-primary">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary/20 bg-secondary/10 backdrop-blur-sm relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2024 Neon Creative Studio. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Crafted with <Heart className="size-3 text-primary fill-current" /> and creativity
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2">Follow our work:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-all duration-200 group hover:scale-110"
                  >
                    <Icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-primary/10">
            <Link href="/sitemap" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Sitemap
            </Link>
            <Link href="/accessibility" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Accessibility
            </Link>
            <Link href="/cookies" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Cookie Settings
            </Link>
            <Link href="/project-inquiry" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Start a Project
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}