import { Code, Palette, Smartphone, Zap, Database } from "lucide-react"

const skills = [
  {
    icon: <Code className="w-12 h-12" />,
    title: "Frontend Development",
    description: "Building responsive and accessible user interfaces with modern frameworks",
  },
  {
    icon: <Database className="w-12 h-12" />,
    title: "Backend Development",
    description: "Creating robust APIs and server-side applications",
  },
  {
    icon: <Palette className="w-12 h-12" />,
    title: "UI/UX Design",
    description: "Designing intuitive and engaging user experiences",
  },
  {
    icon: <Smartphone className="w-12 h-12" />,
    title: "Responsive Design",
    description: "Ensuring websites work perfectly on all devices",
  },
  {
    icon: <Zap className="w-12 h-12" />,
    title: "Performance Optimization",
    description: "Improving website speed and efficiency",
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 relative after:content-[''] after:absolute after:bottom-[-16px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-20 after:h-1 after:bg-primary after:rounded">
          My Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-8 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-border"
            >
              <div className="text-primary mb-6">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
              <p className="text-muted-foreground">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
