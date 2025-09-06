import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Download, Star, Gamepad2 } from "lucide-react";
import heroImage from "@/assets/hero-game-banner2.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gaming-gradient"></div>
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(2px)'
        }}
      ></div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <Badge variant="secondary" className="mb-4 pixel-font">
              🎮 Novo Jogo de Aventura Política
            </Badge>

            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Capi Senador
              <span className="block text-3xl lg:text-4xl text-blue-200 mt-2 pixel-font">
                e os Segredos Legislativos
              </span>
            </h1>

            <p className="text-xl text-blue-100 mb-8 max-w-lg mx-auto lg:mx-0">
              Embarque em uma jornada épica pixelada pela política brasileira.
              Descubra segredos legislativos e navegue pelos corredores do poder nesta
              aventura política inspirada no retro.
            </p>

            {/* Stats */}
            <div className="flex justify-center lg:justify-start space-x-6 mb-8">
              <div className="text-center">
                <div className="flex items-center text-yellow-400 mb-1">
                  <Star className="w-5 h-5 fill-current mr-1" />
                  <span className="font-bold text-white">4.8</span>
                </div>
                <p className="text-sm text-blue-200">Avaliação dos Jogadores</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-2xl text-white">10+</p>
                <p className="text-sm text-blue-200">Níveis</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-2xl text-white">FREE</p>
                <p className="text-sm text-blue-200">Para Jogar</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-white text-primary hover:bg-blue-50 text-lg px-8">
                <Download className="w-5 h-5 mr-2" />
                Download Grátis
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8">
                <Play className="w-5 h-5 mr-2" />
                Ver Trailer
              </Button>
            </div>
          </div>

          {/* Game Preview */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden retro-shadow border-4 border-white/20">
              <img
                src={heroImage}
                alt="Capi Senador Game Preview"
                className="w-full h-auto pixel-font"
                style={{ imageRendering: 'pixelated' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating UI Elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 retro-shadow">
              <Play className="w-6 h-6 text-primary" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-primary rounded-full p-3 retro-shadow">
              <Gamepad2 className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;