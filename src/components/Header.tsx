import { Button } from "@/components/ui/button";
import { Menu, Gamepad2 } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-lg overflow-hidden">
              <img
                src="/run_capi.png"
                alt="Capi Senador Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Capi Senador</h1>
              <p className="text-sm text-muted-foreground">Estúdio de Jogos</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            <a href="#home" className="px-4 py-2 rounded-lg text-foreground hover:text-primary hover:bg-primary/10 border border-transparent hover:border-primary/20 transition-all duration-300 hover:shadow-md hover:shadow-primary/10">
              Início
            </a>
            <a href="#about" className="px-4 py-2 rounded-lg text-foreground hover:text-primary hover:bg-primary/10 border border-transparent hover:border-primary/20 transition-all duration-300 hover:shadow-md hover:shadow-primary/10">
              Sobre
            </a>
            <a href="#features" className="px-4 py-2 rounded-lg text-foreground hover:text-primary hover:bg-primary/10 border border-transparent hover:border-primary/20 transition-all duration-300 hover:shadow-md hover:shadow-primary/10">
              Recursos
            </a>
            <a href="#gallery" className="px-4 py-2 rounded-lg text-foreground hover:text-primary hover:bg-primary/10 border border-transparent hover:border-primary/20 transition-all duration-300 hover:shadow-md hover:shadow-primary/10">
              Galeria
            </a>
            <a href="#agradecimentos" className="px-4 py-2 rounded-lg text-foreground hover:text-primary hover:bg-primary/10 border border-transparent hover:border-primary/20 transition-all duration-300 hover:shadow-md hover:shadow-primary/10">
              Agradecimentos
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Button size="sm" className="gaming-gradient" asChild>
              <Link to="/play">
                <Gamepad2 className="w-4 h-4 mr-2" />
                Jogar Agora
              </Link>
            </Button>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;