import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Trophy, Clock } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Sobre o Jogo
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Uma Aventura Política Como Nenhuma Outra
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Entre no mundo pixelado da política brasileira com Capi Senador,
            onde cada decisão importa e segredos legislativos aguardam descoberta.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              A História Por Trás do Jogo
            </h3>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Navegue pelo complexo mundo da política brasileira como Capi Senador,
                um personagem determinado em uma missão para descobrir a verdade por trás dos
                mistérios legislativos. Este jogo inspirado no retro combina mecânicas clássicas
                de plataforma com conteúdo político educacional.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Com arte pixelada linda inspirada nos clássicos jogos do Mario, jogabilidade
                imersiva e cenários políticos brasileiros autênticos, este jogo oferece
                tanto entretenimento quanto educação.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="gaming-card p-6 text-center">
              <CardContent className="p-0">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-bold text-foreground mb-2">Ambiente Brasileiro</h4>
                <p className="text-sm text-muted-foreground">
                  Ambientes políticos autênticos
                </p>
              </CardContent>
            </Card>

            <Card className="gaming-card p-6 text-center">
              <CardContent className="p-0">
                <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-bold text-foreground mb-2">Educativo</h4>
                <p className="text-sm text-muted-foreground">
                  Aprenda sobre política enquanto joga
                </p>
              </CardContent>
            </Card>

            <Card className="gaming-card p-6 text-center">
              <CardContent className="p-0">
                <Trophy className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-bold text-foreground mb-2">Conquistas</h4>
                <p className="text-sm text-muted-foreground">
                  Desbloqueie marcos políticos
                </p>
              </CardContent>
            </Card>

            <Card className="gaming-card p-6 text-center">
              <CardContent className="p-0">
                <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-bold text-foreground mb-2">Estilo Retro</h4>
                <p className="text-sm text-muted-foreground">
                  Estética clássica de arte pixelada
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Game Highlights */}
        <div className="bg-card rounded-2xl p-8 border border-border">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Destaques do Jogo
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-primary-foreground pixel-font">🏛️</span>
              </div>
              <h4 className="font-bold text-foreground mb-2">Locais Autênticos</h4>
              <p className="text-muted-foreground text-sm">
                Explore versões detalhadas em arte pixelada de prédios políticos brasileiros reais
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-accent-foreground pixel-font">🎯</span>
              </div>
              <h4 className="font-bold text-foreground mb-2">Missões Engajantes</h4>
              <p className="text-muted-foreground text-sm">
                Complete tarefas desafiadoras que espelham processos políticos reais
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-secondary-foreground pixel-font">📚</span>
              </div>
              <h4 className="font-bold text-foreground mb-2">Aprenda & Jogue</h4>
              <p className="text-muted-foreground text-sm">
                Conteúdo educacional perfeitamente integrado à jogabilidade
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;