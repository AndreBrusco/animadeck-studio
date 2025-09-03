import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Trophy, Clock } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            About the Game
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            A Political Adventure Like No Other
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Step into the pixelated world of Brazilian politics with Capi Senador, 
            where every decision matters and legislative secrets await discovery.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              The Story Behind the Game
            </h3>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Navigate through the complex world of Brazilian politics as Capi Senador, 
                a determined character on a mission to uncover the truth behind legislative 
                mysteries. This retro-inspired game combines classic platformer mechanics 
                with educational political content.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Featuring beautiful pixel art inspired by classic Mario games, immersive 
                gameplay, and authentic Brazilian political scenarios, this game offers 
                both entertainment and education.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="gaming-card p-6 text-center">
              <CardContent className="p-0">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-bold text-foreground mb-2">Brazilian Setting</h4>
                <p className="text-sm text-muted-foreground">
                  Authentic political environments
                </p>
              </CardContent>
            </Card>

            <Card className="gaming-card p-6 text-center">
              <CardContent className="p-0">
                <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-bold text-foreground mb-2">Educational</h4>
                <p className="text-sm text-muted-foreground">
                  Learn about politics while playing
                </p>
              </CardContent>
            </Card>

            <Card className="gaming-card p-6 text-center">
              <CardContent className="p-0">
                <Trophy className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-bold text-foreground mb-2">Achievements</h4>
                <p className="text-sm text-muted-foreground">
                  Unlock political milestones
                </p>
              </CardContent>
            </Card>

            <Card className="gaming-card p-6 text-center">
              <CardContent className="p-0">
                <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-bold text-foreground mb-2">Retro Style</h4>
                <p className="text-sm text-muted-foreground">
                  Classic pixel art aesthetics
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Game Highlights */}
        <div className="bg-card rounded-2xl p-8 border border-border">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Game Highlights
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-primary-foreground pixel-font">🏛️</span>
              </div>
              <h4 className="font-bold text-foreground mb-2">Authentic Locations</h4>
              <p className="text-muted-foreground text-sm">
                Explore detailed pixel art versions of real Brazilian political buildings
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-accent-foreground pixel-font">🎯</span>
              </div>
              <h4 className="font-bold text-foreground mb-2">Engaging Missions</h4>
              <p className="text-muted-foreground text-sm">
                Complete challenging tasks that mirror real political processes
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-secondary-foreground pixel-font">📚</span>
              </div>
              <h4 className="font-bold text-foreground mb-2">Learn & Play</h4>
              <p className="text-muted-foreground text-sm">
                Educational content seamlessly integrated into gameplay
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;