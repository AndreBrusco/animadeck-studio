import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Play, Download, Star, Gamepad2, Users, Trophy, Clock } from "lucide-react";
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
                  <Play className="w-4 h-4 mr-2" />
                  Ver Trailer
                </a>
              </Button>
              <Button size="sm" className="gaming-gradient" asChild>
                <Link to="/">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Voltar ao Menu Principal
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-12">
                {/* Hero Section */}
                <section className="text-center mb-16">
                    <Badge variant="secondary" className="mb-4 text-lg px-4 py-2">
                        🎮 Jogo de Aventura Política
                    </Badge>

                    <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Capi Senador
                        <span className="block text-3xl lg:text-4xl text-blue-600 mt-2">
                            e os Segredos Legislativos
                        </span>
                    </h1>

                    <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                        Embarque em uma jornada épica pixelada pela política brasileira.
                        Descubra segredos legislativos e navegue pelos corredores do poder nesta
                        aventura política inspirada no retro.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4">
                            <Play className="w-6 h-6 mr-3" />
                            Jogar Agora
                        </Button>
                        <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8 py-4">
                            <Download className="w-6 h-6 mr-3" />
                            Baixar Demo
                        </Button>
                    </div>

                    {/* Game Stats */}
                    <div className="flex justify-center space-x-8">
                        <div className="text-center">
                            <div className="flex items-center text-yellow-500 mb-1">
                                <Star className="w-6 h-6 fill-current mr-2" />
                                <span className="font-bold text-2xl text-gray-900">5.0</span>
                            </div>
                            <p className="text-sm text-gray-600">Avaliação</p>
                        </div>
                        <div className="text-center">
                            <p className="font-bold text-2xl text-gray-900">6+</p>
                            <p className="text-sm text-gray-600">Níveis</p>
                        </div>
                        <div className="text-center">
                            <p className="font-bold text-2xl text-gray-900">FREE</p>
                            <p className="text-sm text-gray-600">Para Jogar</p>
                        </div>
                    </div>
                </section>

                {/* Game Description */}
                <section className="mb-16">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                Uma Aventura Política Única
                            </h2>
                            <div className="space-y-4">
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Navegue pelo complexo mundo da política brasileira como Capi Senador,
                                    um personagem determinado em uma missão para descobrir a verdade por trás dos
                                    mistérios legislativos.
                                </p>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Este jogo inspirado no retro combina mecânicas clássicas de plataforma
                                    com conteúdo político educacional, oferecendo tanto entretenimento quanto educação.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                                <CardContent className="p-0">
                                    <Gamepad2 className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                                    <h3 className="font-bold text-gray-900 mb-2">Jogabilidade Clássica</h3>
                                    <p className="text-sm text-gray-600">
                                        Controles suaves e responsivos
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                                <CardContent className="p-0">
                                    <Users className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                                    <h3 className="font-bold text-gray-900 mb-2">Educativo</h3>
                                    <p className="text-sm text-gray-600">
                                        Aprenda sobre política
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                                <CardContent className="p-0">
                                    <Trophy className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                                    <h3 className="font-bold text-gray-900 mb-2">Conquistas</h3>
                                    <p className="text-sm text-gray-600">
                                        Desbloqueie marcos políticos
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                                <CardContent className="p-0">
                                    <Clock className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                                    <h3 className="font-bold text-gray-900 mb-2">Estilo Retro</h3>
                                    <p className="text-sm text-gray-600">
                                        Arte pixelada clássica
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Game Features */}
                <section className="mb-16">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
                        Recursos do Jogo
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle className="text-xl text-gray-900">Locais Autênticos</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">
                                    Explore versões detalhadas em arte pixelada de prédios políticos brasileiros reais,
                                    incluindo o Congresso Nacional e outros marcos históricos.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle className="text-xl text-gray-900">Missões Engajantes</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">
                                    Complete tarefas desafiadoras que espelham processos políticos reais,
                                    desde votações até negociações legislativas.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle className="text-xl text-gray-900">Aprenda & Jogue</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">
                                    Conteúdo educacional perfeitamente integrado à jogabilidade,
                                    tornando o aprendizado sobre política divertido e envolvente.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white">
                    <h2 className="text-4xl font-bold mb-6">
                        Pronto para Começar Sua Aventura?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Baixe o Capi Senador agora e embarque em uma jornada educacional pela
                        política brasileira. É grátis para jogar!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-4">
                            <Gamepad2 className="w-6 h-6 mr-3" />
                            Jogar Agora
                        </Button>
                        <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
                            <Download className="w-6 h-6 mr-3" />
                            Baixar Demo
                        </Button>
                    </div>
                </section>
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
