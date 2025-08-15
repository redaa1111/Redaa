"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ElectroFutureStore() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const categories = [
    { id: "all", name: "All Products", icon: "⚡" },
    { id: "smartphones", name: "Smartphones", icon: "📱" },
    { id: "laptops", name: "Laptops", icon: "💻" },
    { id: "audio", name: "Audio", icon: "🎧" },
    { id: "gaming", name: "Gaming", icon: "🎮" },
    { id: "wearables", name: "Wearables", icon: "⌚" },
  ]

  const featuredProducts = [
    {
      id: "1",
      name: "QuantumPhone Pro X",
      category: "smartphones",
      price: "$1,299",
      originalPrice: "$1,499",
      image: "/placeholder-46p34.png",
      badge: "New",
      rating: 4.9,
      features: ["Holographic Display", "AI Assistant", "Quantum Processor"],
    },
    {
      id: "2",
      name: "NeuralBook Ultra",
      category: "laptops",
      price: "$2,499",
      originalPrice: "$2,799",
      image: "/transparent-laptop.png",
      badge: "Bestseller",
      rating: 4.8,
      features: ["Neural Processing", "Transparent OLED", "48hr Battery"],
    },
    {
      id: "3",
      name: "SonicWave Elite",
      category: "audio",
      price: "$399",
      originalPrice: "$499",
      image: "/placeholder-jjnw7.png",
      badge: "Sale",
      rating: 4.7,
      features: ["3D Audio", "Noise Cancellation", "Wireless Charging"],
    },
    {
      id: "4",
      name: "GameSphere VR",
      category: "gaming",
      price: "$899",
      originalPrice: "$999",
      image: "/placeholder-xibtk.png",
      badge: "Hot",
      rating: 4.9,
      features: ["8K Resolution", "Haptic Feedback", "Eye Tracking"],
    },
    {
      id: "5",
      name: "LifeTracker Pro",
      category: "wearables",
      price: "$599",
      originalPrice: "$699",
      image: "/placeholder-kzeoc.png",
      badge: "New",
      rating: 4.6,
      features: ["Health Monitoring", "Holographic UI", "7-day Battery"],
    },
    {
      id: "6",
      name: "CyberPad Max",
      category: "laptops",
      price: "$1,899",
      originalPrice: "$2,199",
      image: "/placeholder-wnnxs.png",
      badge: "Featured",
      rating: 4.8,
      features: ["Flexible Display", "Stylus Included", "5G Ready"],
    },
  ]

  const filteredProducts =
    selectedCategory === "all"
      ? featuredProducts
      : featuredProducts.filter((product) => product.category === selectedCategory)

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-full w-64 bg-sidebar border-r border-sidebar-border transform transition-transform duration-300 z-50 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        <div className="p-6">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center animate-glow">
              <span className="text-primary-foreground font-bold">E</span>
            </div>
            <h1 className="text-xl font-bold text-sidebar-foreground font-[family-name:var(--font-work-sans)]">
              ElectroFuture
            </h1>
          </div>

          <nav className="space-y-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 font-[family-name:var(--font-open-sans)] ${
                  selectedCategory === category.id
                    ? "bg-sidebar-primary text-sidebar-primary-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent/10 hover:text-sidebar-accent"
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Header */}
        <header className="bg-card border-b border-border sticky top-0 z-40 backdrop-blur-sm bg-card/80">
          <div className="flex items-center justify-between px-6 py-4">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden p-2 rounded-lg hover:bg-muted">
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div className="w-full h-0.5 bg-foreground"></div>
                <div className="w-full h-0.5 bg-foreground"></div>
                <div className="w-full h-0.5 bg-foreground"></div>
              </div>
            </button>

            <div className="flex items-center gap-4">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search products..."
                  className="w-64 px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring font-[family-name:var(--font-open-sans)]"
                />
              </div>
              <Button variant="outline" className="animate-pulse-border bg-transparent">
                Cart (0)
              </Button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20">
          <div className="absolute inset-0 bg-[url('/futuristic-tech-pattern.png')] opacity-5"></div>
          <div className="relative max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in-up font-[family-name:var(--font-work-sans)]">
              Welcome to the
              <span className="text-primary block">Future</span>
            </h1>
            <p
              className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-up font-[family-name:var(--font-open-sans)]"
              style={{ animationDelay: "0.2s" }}
            >
              Discover cutting-edge electronics that redefine what's possible. Experience tomorrow's technology today.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg animate-glow"
              >
                Explore Products
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg animate-pulse-border bg-transparent">
                Watch Demo
              </Button>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-foreground font-[family-name:var(--font-work-sans)]">
              {selectedCategory === "all"
                ? "Featured Products"
                : categories.find((c) => c.id === selectedCategory)?.name}
            </h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Grid
              </Button>
              <Button variant="outline" size="sm">
                List
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <Card
                key={product.id}
                className="group overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant={product.badge === "Sale" ? "destructive" : "secondary"} className="animate-float">
                      {product.badge}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-card/80 backdrop-blur-sm rounded-full px-2 py-1 text-sm font-medium">
                      ⭐ {product.rating}
                    </div>
                  </div>
                  {hoveredProduct === product.id && (
                    <div className="absolute inset-0 bg-primary/20 flex items-center justify-center animate-fade-in-up">
                      <Button className="bg-primary hover:bg-primary/90 text-primary-foreground animate-glow">
                        Quick View
                      </Button>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-card-foreground mb-2 font-[family-name:var(--font-work-sans)]">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                  </div>
                  <div className="space-y-2 mb-4">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                        <span className="font-[family-name:var(--font-open-sans)]">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
                      Add to Cart
                    </Button>
                    <Button variant="outline" size="icon" className="animate-pulse-border bg-transparent">
                      ♡
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-card border-t border-border mt-20">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center animate-glow">
                    <span className="text-primary-foreground font-bold">E</span>
                  </div>
                  <h3 className="text-lg font-bold text-card-foreground font-[family-name:var(--font-work-sans)]">
                    ElectroFuture
                  </h3>
                </div>
                <p className="text-muted-foreground font-[family-name:var(--font-open-sans)]">
                  Pioneering the future of technology with innovative electronics that transform how we live and work.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-card-foreground mb-4 font-[family-name:var(--font-work-sans)]">
                  Products
                </h4>
                <ul className="space-y-2 text-muted-foreground font-[family-name:var(--font-open-sans)]">
                  <li>
                    <a href="#" className="hover:text-primary transition-colors">
                      Smartphones
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary transition-colors">
                      Laptops
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary transition-colors">
                      Audio
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary transition-colors">
                      Gaming
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-card-foreground mb-4 font-[family-name:var(--font-work-sans)]">
                  Support
                </h4>
                <ul className="space-y-2 text-muted-foreground font-[family-name:var(--font-open-sans)]">
                  <li>
                    <a href="#" className="hover:text-primary transition-colors">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary transition-colors">
                      Warranty
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary transition-colors">
                      Returns
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary transition-colors">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-card-foreground mb-4 font-[family-name:var(--font-work-sans)]">
                  Newsletter
                </h4>
                <p className="text-muted-foreground mb-4 font-[family-name:var(--font-open-sans)]">
                  Stay updated with the latest tech innovations
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter email"
                    className="flex-1 px-3 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring font-[family-name:var(--font-open-sans)]"
                  />
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground animate-glow">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
            <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground font-[family-name:var(--font-open-sans)]">
              <p>&copy; 2024 ElectroFuture. All rights reserved. Built for the future.</p>
            </div>
          </div>
        </footer>
      </div>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}
    </div>
  )
}
