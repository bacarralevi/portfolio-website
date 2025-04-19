"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Menu, Moon, Sun, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-primary">Portfolio</div>

          <ul
            className={`fixed md:relative top-0 ${isMenuOpen ? "right-0" : "-right-full"} md:right-0 w-[70%] md:w-auto h-screen md:h-auto bg-background md:bg-transparent flex flex-col md:flex-row items-center justify-center md:justify-end gap-8 md:gap-6 transition-all duration-300 z-50 md:z-auto`}
          >
            <li className="md:hidden absolute top-6 right-6">
              <Button variant="ghost" size="icon" onClick={closeMenu}>
                <X className="h-6 w-6" />
              </Button>
            </li>
            <li>
              <Link
                href="#home"
                className="text-foreground hover:text-primary font-medium relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#skills"
                className="text-foreground hover:text-primary font-medium relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all"
                onClick={closeMenu}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className="text-foreground hover:text-primary font-medium relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all"
                onClick={closeMenu}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="text-foreground hover:text-primary font-medium relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full"
              aria-label="Toggle theme"
            >
              {mounted && theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
