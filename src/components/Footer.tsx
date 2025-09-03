import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Gamepad2, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail,
  Heart
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Gamepad2 className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Capi Senador</h3>
                  <p className="text-sm text-muted-foreground">Gaming Studio</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
                Bringing political education to life through engaging pixel art adventures. 
                Experience Brazilian politics like never before in this unique gaming experience.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Youtube className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Game Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Game</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#download" className="text-muted-foreground hover:text-primary transition-colors">
                    Download
                  </a>
                </li>
                <li>
                  <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="text-muted-foreground hover:text-primary transition-colors">
                    Screenshots
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    System Requirements
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Changelog
                  </a>
                </li>
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Support</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Bug Reports
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Community Forum
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground text-sm">
                © 2024 Capi Senador Gaming Studio. All rights reserved.
              </p>
              <p className="text-muted-foreground text-xs mt-1">
                Educational gaming for political awareness.
              </p>
            </div>

            <div className="flex items-center space-x-2 text-muted-foreground text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>in Brazil</span>
              <span className="pixel-font">🇧🇷</span>
            </div>
          </div>
        </div>

        {/* Download CTA */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 mb-8 border border-primary/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Start Your Political Adventure?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Download Capi Senador now and embark on an educational journey through 
              Brazilian politics. It's free to play!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gaming-gradient text-lg px-8">
                <Gamepad2 className="w-5 h-5 mr-2" />
                Download for Free
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                View System Requirements
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;