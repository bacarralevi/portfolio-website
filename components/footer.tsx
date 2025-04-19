export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <p className="text-muted-foreground">&copy; {currentYear} Levi Bacarra. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
