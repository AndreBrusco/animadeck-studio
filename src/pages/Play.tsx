import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Play as PlayIcon, Download, Star, Gamepad2, Users, Trophy, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Play = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            {/* Header */}
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
                            <Link to="/" className="px-4 py-2 rounded-lg text-foreground hover:text-primary hover:bg-primary/10 border border-transparent hover:border-primary/20 transition-all duration-300 hover:shadow-md hover:shadow-primary/10">
                                Início
                            </Link>
                            <a href="/#about" className="px-4 py-2 rounded-lg text-foreground hover:text-primary hover:bg-primary/10 border border-transparent hover:border-primary/20 transition-all duration-300 hover:shadow-md hover:shadow-primary/10">
                                Sobre
                            </a>
                            <a href="/#features" className="px-4 py-2 rounded-lg text-foreground hover:text-primary hover:bg-primary/10 border border-transparent hover:border-primary/20 transition-all duration-300 hover:shadow-md hover:shadow-primary/10">
                                Recursos
                            </a>
                            <a href="/#gallery" className="px-4 py-2 rounded-lg text-foreground hover:text-primary hover:bg-primary/10 border border-transparent hover:border-primary/20 transition-all duration-300 hover:shadow-md hover:shadow-primary/10">
                                Galeria
                            </a>
                            <a href="/#agradecimentos" className="px-4 py-2 rounded-lg text-foreground hover:text-primary hover:bg-primary/10 border border-transparent hover:border-primary/20 transition-all duration-300 hover:shadow-md hover:shadow-primary/10">
                                Agradecimentos
                            </a>
                        </nav>

                        {/* Action Buttons */}
                        <div className="flex items-center space-x-4">
                            <Button variant="outline" size="sm" className="hidden sm:flex" asChild>
                                <a href="/#trailer">
                                    <PlayIcon className="w-4 h-4 mr-2" />
                                    Ver Trailer
                                </a>
                            </Button>
                            <Button size="sm" className="gaming-gradient" asChild>
                            <Link to="/" className="px-4 py-2 rounded-lg text-foreground hover:text-primary hover:bg-primary/10 border border-transparent hover:border-primary/20 transition-all duration-300 hover:shadow-md hover:shadow-primary/10">
                                    <Download className="w-4 h-4 mr-2" />
                                    Voltar a Página Inicial
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-12">
                {/* Content will be added here */}
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-8">
                <div className="container mx-auto px-4 text-center">
                    <div className="flex items-center justify-center space-x-3 mb-4">
                        <div className="w-8 h-8 rounded-lg overflow-hidden">
                            <img
                                src="/run_capi.png"
                                alt="Capi Senador Logo"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold">Capi Senador</h3>
                            <p className="text-sm text-gray-400">Estúdio de Jogos</p>
                        </div>
                    </div>
                    <p className="text-gray-400 text-sm">
                        © 2024 Capi Senador Estúdio de Jogos. Todos os direitos reservados.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Play;
