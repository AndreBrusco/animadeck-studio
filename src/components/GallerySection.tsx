import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Play, Image as ImageIcon, Maximize2 } from "lucide-react";

const GallerySection = () => {
  // Mock gallery items - in a real app, these would be actual game screenshots
  const galleryItems = [
    {
      type: "screenshot",
      title: "Nível do Congresso Nacional",
      description: "Navegue pelo icônico prédio do Congresso Nacional brasileiro",
      category: "Jogabilidade"
    },
    {
      type: "screenshot",
      title: "Seleção de Personagem",
      description: "Escolha seu estilo de aventura política",
      category: "UI/UX"
    },
    {
      type: "video",
      title: "Trailer de Jogabilidade",
      description: "Veja o Capi Senador em ação",
      category: "Vídeo"
    },
    {
      type: "screenshot",
      title: "Desafios Políticos",
      description: "Resolva quebra-cabeças legislativos complexos",
      category: "Jogabilidade"
    },
    {
      type: "screenshot",
      title: "Marco Históricos Brasileiros",
      description: "Explore versões pixeladas de locais famosos",
      category: "Ambiente"
    },
    {
      type: "video",
      title: "Entrevista com Desenvolvedores",
      description: "Bastidores com a equipe de desenvolvimento",
      category: "Vídeo"
    }
  ];

  const categories = ["Todos", "Jogabilidade", "UI/UX", "Ambiente", "Vídeo"];

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
            Explore capturas de tela, vídeos e conteúdo dos bastidores da
            jornada de desenvolvimento do Capi Senador.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "Todos" ? "default" : "outline"}
              size="sm"
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {galleryItems.map((item, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                        {/* Placeholder for media content */}
                        <div className="text-center">
                          {item.type === "video" ? (
                            <Play className="w-12 h-12 text-primary mb-2 mx-auto" />
                          ) : (
                            <ImageIcon className="w-12 h-12 text-primary mb-2 mx-auto" />
                          )}
                          <p className="text-sm text-muted-foreground pixel-font">
                            {item.type === "video" ? "Conteúdo de Vídeo" : "Captura de Tela"}
                          </p>
                        </div>

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <Button size="sm" className="bg-white text-primary hover:bg-blue-50">
                            <Maximize2 className="w-4 h-4 mr-2" />
                            Ver Completo
                          </Button>
                        </div>

                        {/* Category Badge */}
                        <Badge
                          variant="secondary"
                          className="absolute top-3 left-3 text-xs"
                        >
                          {item.category}
                        </Badge>
                      </div>

                      <div className="p-4">
                        <h3 className="font-semibold text-foreground mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

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