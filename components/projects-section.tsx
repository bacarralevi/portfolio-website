import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "99 Card Duel",
    description: "A thrilling card game against a difficult AI",
    image: "assets/99.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://99-arwin50s-projects.vercel.app/?fbclid=IwY2xjawJwZl9leHRuA2FlbQIxMAABHgaHzhp1OIVW7LPn_SuI-j1ZYNwArEzmodV11LsYR8jSt57ay_WIEC6XPgNL_aem_H_KXbJklN084Y2nIvijgXg",
    sourceUrl: "https://github.com/arwin50/99.git",
  },
  {
    title: "Paper Townsmen",
    description: "An interactive 2d shooting game against AI mobs.",
    image: "assets/paper_townsmen.png",
    tags: ["Python", "Pygame", "Pytmx"],
    liveUrl: "#",
    sourceUrl: "https://github.com/Loweso/paper-townsman.git",
  },
  {
    title: "Reddit Duplicate",
    description: "A simple duplicate version of old Reddit.",
    image: "assets/reddit.png",
    tags: ["HTML", "CSS"],
    liveUrl: "#",
    sourceUrl: "https://github.com/Clarlyte/long-exam-1-webdev.git",
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 relative after:content-[''] after:absolute after:bottom-[-16px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-20 after:h-1 after:bg-primary after:rounded">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden border-border bg-card hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="font-normal">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button asChild size="sm" className="gap-2">
                    <Link href={project.liveUrl}>
                      <ExternalLink className="h-4 w-4" />
                      <span>Live Demo</span>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="gap-2">
                    <Link href={project.sourceUrl}>
                      <Github className="h-4 w-4" />
                      <span>Source</span>
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
