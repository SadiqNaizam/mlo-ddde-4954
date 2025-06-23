import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

const Footer: React.FC = () => {
  console.log('Footer loaded');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/40 border-t">
      <div className="container py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} The Reading Room. All rights reserved.
          </p>
        </div>
        <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm">
          <Link to="/about-us" className="text-muted-foreground hover:text-primary transition-colors">
            About Us
          </Link>
          <Link to="/terms-of-service" className="text-muted-foreground hover:text-primary transition-colors">
            Terms of Service
          </Link>
          <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
            Privacy Policy
          </Link>
          <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;