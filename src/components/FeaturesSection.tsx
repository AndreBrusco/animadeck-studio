import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Gamepad2,
  Palette,
  Globe,
  BookOpen,
  Zap,
  Heart
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Gamepad2 className="w-8 h-8 text-yellow-700" />,
      title: "Jogabilidade Clássica",
      description: "Experimente mecânicas de plataforma inspiradas no Mario com controles suaves e jogabilidade responsiva.",
      highlight: "Jogos Retro",
      gradient: "from-yellow-50 to-yellow-100",
      shadow: "shadow-yellow-200/30"
    },
    {
      icon: <Palette className="w-8 h-8 text-blue-700" />,
      title: "Maestria em Pixel Art",
      description: "Arte pixelada linda feita à mão que traz cenários políticos brasileiros à vida.",
      highlight: "Excelência Visual",
      gradient: "from-blue-50 to-blue-100",
      shadow: "shadow-blue-200/30"
    },
    {
      icon: <Globe className="w-8 h-8 text-green-700" />,
      title: "Cultura Brasileira",
      description: "Mergulhe na cultura política brasileira autêntica e marcos históricos.",
      highlight: "Aprendizado Cultural",
      gradient: "from-green-50 to-green-100",
      shadow: "shadow-green-200/30"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-gray-700" />,
      title: "Conteúdo Educacional",
      description: "Aprenda sobre processos legislativos enquanto se diverte nesta experiência única de jogo.",
      highlight: "Aprenda & Jogue",
      gradient: "from-gray-50 to-gray-100",
      shadow: "shadow-gray-200/30"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-700" />,
      title: "Desafios Dinâmicos",
      description: "Enfrente cenários políticos cada vez mais complexos que testam seu pensamento estratégico.",
      highlight: "Jogabilidade Estratégica",
      gradient: "from-yellow-50 to-orange-50",
      shadow: "shadow-orange-200/30"
    },
    {
      icon: <Heart className="w-8 h-8 text-green-700" />,
      title: "Feito com Amor",
      description: "Criado com paixão tanto por jogos quanto por educação política por desenvolvedores brasileiros.",
      highlight: "Espírito Indie",
      gradient: "from-green-50 to-emerald-50",
      shadow: "shadow-emerald-200/30"
    }
  ];

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Recursos do Jogo
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Por Que os Jogadores Amam o Capi Senador
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubra o que torna este jogo de aventura política uma experiência única e envolvente
            para jogadores de todas as idades.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className={`group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden bg-gradient-to-br ${feature.gradient} ${feature.shadow} hover:scale-105`}>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-4 bg-white/60 rounded-xl group-hover:bg-white/80 transition-all duration-300 shadow-lg">
                    {feature.icon}
                  </div>
                  <Badge className="text-xs bg-white/80 text-gray-800 border-gray-300">
                    {feature.highlight}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-gray-900 font-bold group-hover:text-gray-800 transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed font-medium">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature Spotlight */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8 lg:p-12 border border-primary/20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <Badge className="mb-4 bg-primary text-primary-foreground">
                🏆 Design Premiado
              </Badge>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Aventura Política Imersiva
              </h3>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Experimente a mistura perfeita de entretenimento e educação. Nosso jogo
                foi reconhecido por sua abordagem inovadora à educação política
                através de jogos, tornando tópicos complexos acessíveis e divertidos.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">6+ Níveis Únicos</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Amor pelo Brasil</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Atualizações Regulares</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-card rounded-2xl p-6 border border-border retro-shadow">
                <div className="pixel-font text-center">
                  <div className="text-4xl mb-4">🎮</div>
                  <h4 className="font-bold text-foreground mb-2">Pronto para Jogar?</h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    Junte-se a milhares de jogadores já aproveitando esta aventura política única!
                  </p>
                  <Button className="w-full gaming-gradient" asChild>
                    <a href="/play">
                      Inicie Sua Jornada
                    </a>
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