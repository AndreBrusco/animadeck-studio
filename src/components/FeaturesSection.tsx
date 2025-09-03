import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Gamepad2, 
  Palette, 
  Globe, 
  BookOpen, 
  Zap, 
  Heart,
  ChevronRight
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Gamepad2 className="w-8 h-8 text-primary" />,
      title: "Classic Gameplay",
      description: "Experience Mario-inspired platformer mechanics with smooth controls and responsive gameplay.",
      highlight: "Retro Gaming"
    },
    {
      icon: <Palette className="w-8 h-8 text-primary" />,
      title: "Pixel Art Mastery",
      description: "Beautiful hand-crafted pixel art that brings Brazilian political scenarios to life.",
      highlight: "Visual Excellence"
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Brazilian Culture",
      description: "Immerse yourself in authentic Brazilian political culture and landmarks.",
      highlight: "Cultural Learning"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      title: "Educational Content",
      description: "Learn about legislative processes while having fun in this unique gaming experience.",
      highlight: "Learn & Play"
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Dynamic Challenges",
      description: "Face increasingly complex political scenarios that test your strategic thinking.",
      highlight: "Strategic Gameplay"
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Made with Love",
      description: "Crafted with passion for both gaming and political education by Brazilian developers.",
      highlight: "Indie Spirit"
    }
  ];

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Game Features
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Players Love Capi Senador
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover what makes this political adventure game a unique and engaging experience 
            for players of all ages.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-secondary rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {feature.icon}
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {feature.highlight}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="mt-4 p-0 h-auto text-primary hover:text-primary/80 group-hover:translate-x-1 transition-transform"
                >
                  Learn more
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature Spotlight */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8 lg:p-12 border border-primary/20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <Badge className="mb-4 bg-primary text-primary-foreground">
                🏆 Award-Winning Design
              </Badge>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Immersive Political Adventure
              </h3>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Experience the perfect blend of entertainment and education. Our game 
                has been recognized for its innovative approach to political education 
                through gaming, making complex topics accessible and fun.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">10+ Unique Levels</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Multi-language Support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Regular Updates</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-card rounded-2xl p-6 border border-border retro-shadow">
                <div className="pixel-font text-center">
                  <div className="text-4xl mb-4">🎮</div>
                  <h4 className="font-bold text-foreground mb-2">Ready to Play?</h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    Join thousands of players already enjoying this unique political adventure!
                  </p>
                  <Button className="w-full gaming-gradient">
                    Start Your Journey
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;