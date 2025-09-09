import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Play, Image as ImageIcon, Maximize2, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

// Importar as imagens dos personagens
import CapiSenador from "@/assets/CapiSenador.png";
import DraVotania from "@/assets/Dra. Votania.png";
import DonaJustina from "@/assets/Dona Justina.png";
import Presidenton from "@/assets/Presidenton.png";

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);

  const categories = ["Todos", "Personagens", "Cenários", "Assets", "Easter Eggs"];

  // Dados dos personagens
  const characters = [
    {
      name: "Capi Senador",
      image: CapiSenador,
      description: "Que capivara!!! O protagonista principal do jogo, um cavalo selvagem, uma besta enjaulada, um capivara político que navega pelos corredores do poder brasileiro sem se contentar com a mesma e velha burocracia."
    },
    {
      name: "Dra. Votania",
      image: DraVotania,
      description: "Nascida na Câmara dos Deputados com uma urna eletrônica no peito, ela transforma quóruns e votações em puzzles, amizade em leis. Traz tudo o que o povo quer e quando quer."
    },
    {
      name: "Dona Justina",
      image: DonaJustina,
      description: "Uma personagem sábia e experiente nascida do Judiciarismo Brasileiro. Representa a tradição e os valores familiares na política. Dona Justina traz consigo décadas de experiência e sabedoria para guiar os mais jovens na jornada política."
    },
    {
      name: "Presidenton",
      image: Presidenton,
      description: "O “bigodão” que manda ver nos bastidores! De terno e faixa presidencial, ele mostra como as leis viram ações no governo… enquanto corre estilo Mario atrás de assinaturas de sanção."
    }
  ];

  // Dados dos cenários (placeholder)
  const scenarios = [
    {
      name: "Congresso Nacional",
      image: "/placeholder.svg",
      description: "O icônico prédio do Congresso Nacional brasileiro, recriado em pixel art para uma experiência imersiva na política nacional."
    }
  ];

  // Dados dos assets (placeholder)
  const assets = [
    {
      name: "Projeto de Lei",
      image: "/projeto-lei-asset.svg",
      description: "Elementos visuais que representam documentos legislativos e processos políticos do jogo."
    }
  ];

  // Dados dos easter eggs (placeholder)
  const easterEggs = [
    {
      name: "Votos Escondidos",
      image: "/votos-escondidos.svg",
      description: "Secrets e referências especiais escondidas ao longo do jogo para jogadores mais atentos."
    }
  ];

  const nextCharacter = () => {
    setCurrentCharacterIndex((prev) => (prev + 1) % characters.length);
  };

  const prevCharacter = () => {
    setCurrentCharacterIndex((prev) => (prev - 1 + characters.length) % characters.length);
  };

  const renderContent = () => {
    switch (activeCategory) {
      case "Personagens":
        return (
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-8 p-8">
                  {/* Imagem do personagem */}
                  <div className="relative">
                    <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center p-8">
                      <img
                        src={characters[currentCharacterIndex].image}
                        alt={characters[currentCharacterIndex].name}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>

                    {/* Navegação */}
                    <div className="flex justify-between mt-4">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={prevCharacter}
                        className="flex items-center gap-2"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        Anterior
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={nextCharacter}
                        className="flex items-center gap-2"
                      >
                        Próximo
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Descrição do personagem */}
                  <div className="flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-foreground mb-4">
                      {characters[currentCharacterIndex].name}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {characters[currentCharacterIndex].description}
                    </p>

                    {/* Indicador de posição */}
                    <div className="flex justify-center mt-6 gap-2">
                      {characters.map((_, index) => (
                        <div
                          key={index}
                          className={`w-2 h-2 rounded-full transition-colors ${index === currentCharacterIndex ? "bg-primary" : "bg-muted"
                            }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case "Cenários":
        return (
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <CardContent className="p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Cenários em Desenvolvimento
                  </h3>
                  <p className="text-muted-foreground">
                    Em breve, você poderá explorar os diversos cenários do jogo.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case "Assets":
        return (
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <CardContent className="p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Assets do Jogo
                  </h3>
                  <p className="text-muted-foreground">
                    Elementos visuais e recursos do Capi Senador.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case "Easter Eggs":
        return (
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <CardContent className="p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Easter Eggs
                  </h3>
                  <p className="text-muted-foreground">
                    Descubra os segredos escondidos no jogo!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      default: // "Todos"
        return (
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Personagens */}
              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <img
                      src={CapiSenador}
                      alt="Capi Senador"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Personagens</h3>
                  <p className="text-sm text-muted-foreground">
                    Conheça os personagens únicos do jogo
                  </p>
                </CardContent>
              </Card>

              {/* Cenários */}
              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <ImageIcon className="w-16 h-16 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Cenários</h3>
                  <p className="text-sm text-muted-foreground">
                    Explore os locais icônicos da política brasileira
                  </p>
                </CardContent>
              </Card>

              {/* Assets */}
              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <img
                      src="/projeto-lei-asset.svg"
                      alt="Assets"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Assets</h3>
                  <p className="text-sm text-muted-foreground">
                    Elementos visuais e recursos do jogo
                  </p>
                </CardContent>
              </Card>

              {/* Easter Eggs */}
              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <img
                      src="/votos-escondidos.svg"
                      alt="Easter Eggs"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Easter Eggs</h3>
                  <p className="text-sm text-muted-foreground">
                    Descubra os segredos escondidos
                  </p>
                </CardContent>
              </Card>

              {/* Vídeo Trailer */}
              <Card className="group hover:shadow-lg transition-all duration-300 md:col-span-2 lg:col-span-1">
                <CardContent className="p-6">
                  <div className="aspect-video bg-black rounded-lg flex items-center justify-center mb-4">
                    <Play className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Trailer</h3>
                  <p className="text-sm text-muted-foreground">
                    Veja o jogo em ação
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Galeria e Mídia
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Veja o Jogo em Ação
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore personagens, cenários, assets e muito mais do universo do Capi Senador.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              className="rounded-full"
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Content based on active category */}
        {renderContent()}

        {/* Video Spotlight */}
        <div id="trailer" className="mt-16">
          <Card className="max-w-4xl mx-auto overflow-hidden">
            <CardContent className="p-0">
              <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  controls
                  poster="/trailer-poster.jpg"
                  preload="metadata"
                >
                  <source src="/trailer.mp4" type="video/mp4" />
                  <source src="/trailer.webm" type="video/webm" />
                  <p className="text-white text-center p-8">
                    Seu navegador não suporta vídeos HTML5.
                    <a href="/trailer.mp4" className="text-blue-400 underline">Clique aqui para baixar o vídeo</a>
                  </p>
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  );
};

export default GallerySection;