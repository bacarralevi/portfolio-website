import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-black/70"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl animate-fadeIn">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight">
            Hello, I'm <span className="text-accent">Levi Bacarra</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-white/90 mb-6">Web Developer & Game Developer</h2>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl">
            I create beautiful, responsive websites with modern technologies and I develop thrilling games to enjoy your time.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-md font-medium">
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-md font-medium bg-transparent text-white border-white hover:bg-white/10"
            >
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-background clip-polygon z-10"></div>
    </section>
  )
}
