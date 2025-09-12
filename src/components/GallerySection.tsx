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

// Importar as imagens dos cenários
import CamaraDeputados from "@/assets/camara_deputados.png";
import Congresso from "@/assets/congresso.jpg";
import TunelDoTempo from "@/assets/tunel_do_tempo.png";
import Senado from "@/assets/senado.png";
import RampaSenado from "@/assets/rampa_senado.png.png";

// Importar as imagens dos easter eggs
import CapaEasterEggs from "@/assets/capa_easter-eggs.jpg";
import LigaBem from "@/assets/ligabem.jpg";
import ILB from "@/assets/ilb.png";
import Plenarinho from "@/assets/plenarinho.png";

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);

  const categories = ["Todos", "Personagens", "Cenários", "Easter Eggs"];

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

  // Dados dos cenários
  const scenarios = [
    {
      name: "Câmara dos Deputados",
      image: CamaraDeputados,
      description: "O coração da democracia brasileira, onde os deputados federais debatem e votam as leis que moldam o país. Um ambiente de intensa atividade política e decisões históricas."
    },
    {
      name: "Congresso Nacional",
      image: Congresso,
      description: "O majestoso prédio do Congresso Nacional, símbolo máximo da política brasileira. Sua arquitetura icônica abriga as duas casas legislativas do país."
    },
    {
      name: "Túnel do Tempo",
      image: TunelDoTempo,
      description: "Um portal mágico que permite viajar através da história política brasileira, testemunhando momentos marcantes e decisões que moldaram o país."
    },
    {
      name: "Senado Federal",
      image: Senado,
      description: "A casa da sabedoria política, onde senadores representam os estados brasileiros e tomam decisões estratégicas para o futuro da nação."
    },
    {
      name: "Rampa do Senado",
      image: RampaSenado,
      description: "A famosa rampa que conecta os diferentes níveis do Senado, testemunha de caminhadas históricas e momentos decisivos da política brasileira."
    }
  ];


  // Dados dos easter eggs
  const easterEggs = [
    {
      name: "Liga Bem",
      image: LigaBem,
      description: "Uma referência especial ao programa social e filantrópico do Senado Federal, formado por grupo de colaboradores voluntários com a vontade de mudar o mundo!"
    },
    {
      name: "ILB - Instituto Legislativo Brasileiro",
      image: ILB,
      description: "Homenagem ao instituto que capacita servidores do Congresso Nacional, mostrando a importância da educação legislativa na política brasileira. Ponto de sabedoria! Aqui o jogador desbloqueia dicas, tutoriais e minigames educativos sobre cidadania, processo legislativo e história política."
    },
    {
      name: "Plenarinho",
      image: Plenarinho,
      description: "Referência ao famoso e saudouso plenário do Senado Federal. Obra que faz parte do acervo do Museu da Casa."
    }
  ];

  const nextCharacter = () => {
    setCurrentCharacterIndex((prev) => (prev + 1) % characters.length);
  };

  const prevCharacter = () => {
    setCurrentCharacterIndex((prev) => (prev - 1 + characters.length) % characters.length);
  };

  const nextScenario = () => {
    setCurrentScenarioIndex((prev) => (prev + 1) % scenarios.length);
  };

  const prevScenario = () => {
    setCurrentScenarioIndex((prev) => (prev - 1 + scenarios.length) % scenarios.length);
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
          <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="p-8">
                  {/* Descrição do cenário - acima da imagem */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {scenarios[currentScenarioIndex].name}
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                      {scenarios[currentScenarioIndex].description}
                    </p>
                  </div>

                  {/* Imagem do cenário - ocupa toda a largura */}
                  <div className="relative">
                    <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center p-8">
                      <img
                        src={scenarios[currentScenarioIndex].image}
                        alt={scenarios[currentScenarioIndex].name}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>

                    {/* Navegação */}
                    <div className="flex justify-between mt-4">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={prevScenario}
                        className="flex items-center gap-2"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        Anterior
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={nextScenario}
                        className="flex items-center gap-2"
                      >
                        Próximo
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Indicador de posição */}
                  <div className="flex justify-center mt-8 gap-2">
                    {scenarios.map((_, index) => (
                      <div
                        key={index}
                        className={`w-3 h-3 rounded-full transition-colors ${index === currentScenarioIndex ? "bg-primary" : "bg-muted"
                          }`}
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );


      case "Easter Eggs":
        return (
          <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden">
              <CardContent className="p-8">
                <div className="text-center mb-12">
                  <h3 className="text-4xl font-bold text-foreground mb-4">
                    🥚 Easter Eggs
                  </h3>
                  <p className="text-xl text-muted-foreground">
                    Descubra as referências especiais escondidas no jogo!
                  </p>
                </div>

                <div className="space-y-8">
                  {easterEggs.map((easterEgg, index) => (
                    <div key={index} className="grid md:grid-cols-2 gap-8 items-center">
                      <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                        <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center p-6">
                          <img
                            src={easterEgg.image}
                            alt={easterEgg.name}
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                      </div>

                      <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                        <h4 className="text-2xl font-bold text-foreground mb-4">
                          {easterEgg.name}
                        </h4>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {easterEgg.description}
                        </p>
                      </div>
                    </div>
                  ))}
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
              <Card
                className="group hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => setActiveCategory("Personagens")}
              >
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
              <Card
                className="group hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => setActiveCategory("Cenários")}
              >
                <CardContent className="p-6">
                  <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <img
                      src={Congresso}
                      alt="Congresso Nacional"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Cenários</h3>
                  <p className="text-sm text-muted-foreground">
                    Explore os locais icônicos da política brasileira
                  </p>
                </CardContent>
              </Card>


              {/* Easter Eggs */}
              <Card
                className="group hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => setActiveCategory("Easter Eggs")}
              >
                <CardContent className="p-6">
                  <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <img
                      src={CapaEasterEggs}
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
        <div id="trailer" className="mt-20 py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-12">
              <h2 className="text-5xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent mb-2">
                🎬 Assista agora o trailer do jogo!
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Descubra a aventura política que está esperando por você
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <Card className="overflow-hidden shadow-2xl border-0 bg-gradient-to-br from-slate-900 to-slate-800">
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default GallerySection;