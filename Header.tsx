import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="container px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="text-sm font-medium tracking-tight">
            Migraine Detective™
          </a>

          {/* Navigation */}
          <nav className="flex items-center gap-6">
            <NavLink 
              to="/how-it-works" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground"
            >
              How It Works
            </NavLink>
            <NavLink 
              to="/about-the-method" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground"
            >
              About the Method
            </NavLink>

            {/* CTA */}
            <Button variant="cta" size="sm" asChild>
              <a href="https://calendly.com/migrainedetective">
                Schedule a Conversation
              </a>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
