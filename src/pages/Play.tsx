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
                {/* Hero Section */}
                <section className="text-center mb-16">
                    <Badge variant="secondary" className="mb-4 text-lg px-4 py-2">
                        🎮 História do Jogo
                    </Badge>

                    <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Capi Senador
                        <span className="block text-3xl lg:text-4xl text-blue-600 mt-2">
                            e os Segredos Legislativos
                        </span>
                    </h1>

                    <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                        Embarque em uma jornada épica através de 5 fases emocionantes,
                        onde Capi Senador desvenda os mistérios da política brasileira.
                    </p>
                </section>

                {/* Fase 1 */}
                <section className="mb-16">
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 lg:p-12">
                        <div className="grid lg:grid-cols-2 gap-8 items-center">
                            <div>
                                <div className="flex items-center mb-4">
                                    <Badge className="bg-blue-600 text-white text-lg px-4 py-2 mr-4">
                                        Fase 1
                                    </Badge>
                                    <h2 className="text-3xl font-bold text-gray-900">
                                        O Início da Jornada
                                    </h2>
                                </div>
                                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                    Capi Senador, um jovem idealista, descobre que algo estranho está acontecendo
                                    no Congresso Nacional. Documentos importantes estão desaparecendo e decisões
                                    cruciais estão sendo tomadas sem o conhecimento público.
                                </p>
                                <div className="bg-white rounded-xl p-6 shadow-sm">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Objetivos da Fase:</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li>• Explorar os corredores do Congresso</li>
                                        <li>• Coletar evidências iniciais</li>
                                        <li>• Conversar com funcionários</li>
                                        <li>• Descobrir pistas sobre os documentos</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="bg-gray-200 rounded-xl h-80 flex items-center justify-center">
                                <p className="text-gray-500 text-lg">Imagem da Fase 1</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Fase 2 */}
                <section className="mb-16">
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 lg:p-12">
                        <div className="grid lg:grid-cols-2 gap-8 items-center">
                            <div>
                                <div className="flex items-center mb-4">
                                    <Badge className="bg-green-600 text-white text-lg px-4 py-2 mr-4">
                                        Fase 2
                                    </Badge>
                                    <h2 className="text-3xl font-bold text-gray-900">
                                        A Descoberta
                                    </h2>
                                </div>
                                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                    Capi encontra um antigo sistema de túneis secretos que conectam diferentes
                                    partes do Congresso. Aqui, ele descobre que existe uma conspiração muito
                                    maior do que imaginava, envolvendo figuras poderosas.
                                </p>
                                <div className="bg-white rounded-xl p-6 shadow-sm">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Objetivos da Fase:</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li>• Navegar pelos túneis secretos</li>
                                        <li>• Resolver quebra-cabeças complexos</li>
                                        <li>• Encontrar documentos confidenciais</li>
                                        <li>• Desvendar a identidade dos conspiradores</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm">
                                <iframe
                                    src="https://scratch.mit.edu/projects/1212364427/embed"
                                    allowtransparency="true"
                                    width="100%"
                                    height="402"
                                    frameBorder="0"
                                    scrolling="no"
                                    allowFullScreen
                                    className="rounded-lg"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Fase 3 */}
                <section className="mb-16">
                    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-3xl p-8 lg:p-12">
                        <div className="grid lg:grid-cols-2 gap-8 items-center">
                            <div className="bg-gray-200 rounded-xl h-80 flex items-center justify-center">
                                <p className="text-gray-500 text-lg">Imagem da Fase 3</p>
                            </div>
                            <div>
                                <div className="flex items-center mb-4">
                                    <Badge className="bg-yellow-600 text-white text-lg px-4 py-2 mr-4">
                                        Fase 3
                                    </Badge>
                                    <h2 className="text-3xl font-bold text-gray-900">
                                        O Confronto
                                    </h2>
                                </div>
                                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                    Capi é descoberto pelos conspiradores e precisa fugir pelos corredores
                                    do Congresso. Esta fase é repleta de ação, onde ele deve usar sua
                                    inteligência e agilidade para escapar de seus perseguidores.
                                </p>
                                <div className="bg-white rounded-xl p-6 shadow-sm">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Objetivos da Fase:</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li>• Fugir dos guardas corruptos</li>
                                        <li>• Usar o ambiente a seu favor</li>
                                        <li>• Encontrar rotas de escape</li>
                                        <li>• Proteger as evidências coletadas</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Fase 4 */}
                <section className="mb-16">
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8 lg:p-12">
                        <div className="grid lg:grid-cols-2 gap-8 items-center">
                            <div>
                                <div className="flex items-center mb-4">
                                    <Badge className="bg-purple-600 text-white text-lg px-4 py-2 mr-4">
                                        Fase 4
                                    </Badge>
                                    <h2 className="text-3xl font-bold text-gray-900">
                                        A Revelação
                                    </h2>
                                </div>
                                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                    Capi finalmente descobre a verdade por trás da conspiração. Ele encontra
                                    documentos que revelam um plano para manipular o sistema democrático
                                    brasileiro. Agora, ele deve decidir como agir.
                                </p>
                                <div className="bg-white rounded-xl p-6 shadow-sm">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Objetivos da Fase:</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li>• Analisar os documentos encontrados</li>
                                        <li>• Entender o alcance da conspiração</li>
                                        <li>• Tomar decisões morais importantes</li>
                                        <li>• Preparar-se para o confronto final</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="bg-gray-200 rounded-xl h-80 flex items-center justify-center">
                                <p className="text-gray-500 text-lg">Imagem da Fase 4</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Fase 5 */}
                <section className="mb-16">
                    <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-3xl p-8 lg:p-12">
                        <div className="grid lg:grid-cols-2 gap-8 items-center">
                            <div>
                                <div className="flex items-center mb-4">
                                    <Badge className="bg-red-600 text-white text-lg px-4 py-2 mr-4">
                                        Fase 5
                                    </Badge>
                                    <h2 className="text-3xl font-bold text-gray-900">
                                        O Desfecho
                                    </h2>
                                </div>
                                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                    A fase final! Capi deve confrontar os conspiradores e expor a verdade
                                    ao público. Esta é a batalha mais difícil, onde todas as suas habilidades
                                    e conhecimentos serão testados.
                                </p>
                                <div className="bg-white rounded-xl p-6 shadow-sm">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Objetivos da Fase:</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li>• Confrontar os líderes da conspiração</li>
                                        <li>• Expor a verdade publicamente</li>
                                        <li>• Garantir que a justiça prevaleça</li>
                                        <li>• Salvar a democracia brasileira</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm">
                                <iframe
                                    src="https://scratch.mit.edu/projects/1212366977/embed"
                                    allowtransparency="true"
                                    width="100%"
                                    height="402"
                                    frameBorder="0"
                                    scrolling="no"
                                    allowFullScreen
                                    className="rounded-lg"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white">
                    <h2 className="text-4xl font-bold mb-6">
                        Pronto para Iniciar Sua Jornada?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Embarque nesta aventura épica e ajude Capi Senador a desvendar
                        os segredos legislativos que ameaçam a democracia brasileira.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-4">
                            <Gamepad2 className="w-6 h-6 mr-3" />
                            Começar Jornada
                        </Button>
                        <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
                            <PlayIcon className="w-6 h-6 mr-3" />
                            Ver Trailer
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
