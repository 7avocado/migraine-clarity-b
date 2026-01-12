const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Brand */}
          <p className="text-sm font-medium mb-5">Migraine Detective™</p>
          
          {/* Disclaimer */}
          <p className="text-xs text-muted-foreground leading-relaxed max-w-lg mx-auto">
            Migraine Detective™ provides educational coaching and self-management tools 
            and does not provide medical diagnosis or treatment. Always consult your 
            licensed clinician for medical decisions.
          </p>

          {/* Copyright */}
          <p className="mt-8 text-xs text-muted-foreground/50">
            © {new Date().getFullYear()} Migraine Detective™. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
