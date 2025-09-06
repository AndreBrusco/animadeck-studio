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
                  <p className="text-sm text-muted-foreground">Estúdio de Jogos</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
                Dando vida à educação política através de aventuras envolventes em arte pixelada.
                Experimente a política brasileira como nunca antes nesta experiência única de jogo.
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

            {/* Support Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Suporte</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Central de Ajuda
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Relatórios de Bug
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Fórum da Comunidade
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Entre em Contato
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Política de Privacidade
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
                © 2024 Capi Senador Estúdio de Jogos. Todos os direitos reservados.
              </p>
              <p className="text-muted-foreground text-xs mt-1">
                Jogos educacionais para conscientização política.
              </p>
            </div>

            <div className="flex items-center space-x-2 text-muted-foreground text-sm">
              <span>Feito com</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>no Brasil</span>
              <span className="pixel-font">🇧🇷</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;