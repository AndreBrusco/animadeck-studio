import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Play as PlayIcon, Download, Star, Gamepad2, Users, Trophy, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import plenarioCadeado from "@/assets/plenario_cadeado.png";
import presidentonTunel from "@/assets/Presidenton_tunel.png";
import plenarinho from "@/assets/plenarinho.png";
import labirintoCamara from "@/assets/labirinto_camara.png";
import donaJustina from "@/assets/Dona Justina.png";
import presidentonTunelImage from "@/assets/Presidenton_tunel.png";
import tunelTempo from "@/assets/tunel_tempo.png";
import capaEasterEggs from "@/assets/capa_easter-eggs.jpg";

const Play = () => {
    // Estado para controlar o carrossel da Fase 3
    const [currentFase3ImageIndex, setCurrentFase3ImageIndex] = useState(0);
    // Estado para controlar o carrossel da Fase 4
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const fase3Images = [
        plenarioCadeado,
        labirintoCamara
    ];

    const fase4Images = [
        tunelTempo,
        plenarinho,
        capaEasterEggs
    ];

    const nextFase3Image = () => {
        setCurrentFase3ImageIndex((prev) => (prev + 1) % fase3Images.length);
    };

    const prevFase3Image = () => {
        setCurrentFase3ImageIndex((prev) => (prev - 1 + fase3Images.length) % fase3Images.length);
    };

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % fase4Images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + fase4Images.length) % fase4Images.length);
    };
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

                            <Button size="sm" className="gaming-gradient" asChild>
                                <Link to="/" className="px-4 py-2 rounded-lg text-foreground hover:text-primary hover:bg-primary/10 border border-transparent hover:border-primary/20 transition-all duration-300 hover:shadow-md hover:shadow-primary/10">
                                    <ArrowLeft className="w-4 h-4 mr-2" />
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
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 lg:p-12 border-4 border-blue-200">
                        {/* Título da Fase */}
                        <div className="text-center mb-8">
                            <div className="flex items-center justify-center mb-4">
                                <Badge className="bg-blue-600 text-white text-lg px-4 py-2 mr-4">
                                    Fase 1
                                </Badge>
                                <h2 className="text-3xl font-bold text-gray-900">
                                    A Caminhada do Capi Senador
                                </h2>
                            </div>
                            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                                Capi acorda, fecha a porta de casa (👀 cena inicial) e parte pelas ruas de Brasília em busca de apoio.
                                De bairro em bairro, ele conversa com cidadãos, escuta problemas reais e apresenta suas propostas.
                                Cada voto coletado é um passo rumo ao Senado — <strong>mas cuidado com os obstáculos que confundem,</strong>
                                atrasam e desviam a atenção do bem comum. <strong>Cada voto escondido conta!</strong>
                            </p>
                        </div>

                        {/* Objetivos e Controles lado a lado */}
                        <div className="grid lg:grid-cols-2 gap-8 mb-8">
                            {/* Objetivos da Fase */}
                            <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-blue-100">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Objetivos da Fase:</h3>
                                <div className="space-y-4">
                                    {/* Objetivo 1 - Votos escondidos */}
                                    <div className="flex items-center space-x-4 p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
                                        <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-white flex items-center justify-center shadow-sm">
                                            <img
                                                src="/votos-escondidos.svg"
                                                alt="Votos escondidos"
                                                className="w-12 h-12 object-contain"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-gray-700 font-medium">Adquira 1.500 ponto/votos e torne-se um Senador!!</p>
                                        </div>
                                    </div>

                                    {/* Objetivo 2 - Fraude urnas */}
                                    <div className="flex items-center space-x-4 p-3 rounded-lg bg-red-50 hover:bg-red-100 transition-colors">
                                        <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-white flex items-center justify-center shadow-sm">
                                            <img
                                                src="/dra-votania.svg"
                                                alt="Fraude urnas"
                                                className="w-12 h-12 object-contain"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-gray-700 font-medium">Desviar das fraude-urnas!</p>
                                        </div>
                                    </div>

                                    {/* Objetivo 3 - Dra. Votânia */}
                                    <div className="flex items-center space-x-4 p-3 rounded-lg bg-green-50 hover:bg-green-100 transition-colors">
                                        <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-white flex items-center justify-center shadow-sm">
                                            <img
                                                src="/fraude-urnas.svg"
                                                alt="Dra. Votânia"
                                                className="w-12 h-12 object-contain"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-gray-700 font-medium">Encontre com a Dra. Votânia, e siga seu caminho até o parlamento.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Controles do Jogo */}
                            <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-blue-100">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Controles do Jogo:</h3>
                                <div className="space-y-4">
                                    {/* Mover para a esquerda */}
                                    <div className="flex items-center space-x-4 p-3 rounded-lg bg-orange-50 hover:bg-orange-100 transition-colors">
                                        <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-white flex items-center justify-center shadow-sm">
                                            <div className="w-12 h-12 bg-orange-100 rounded flex items-center justify-center">
                                                <span className="text-2xl font-bold text-orange-600">←</span>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-gray-700 font-medium">Mover para a esquerda</p>
                                        </div>
                                    </div>

                                    {/* Mover para a direita */}
                                    <div className="flex items-center space-x-4 p-3 rounded-lg bg-orange-50 hover:bg-orange-100 transition-colors">
                                        <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-white flex items-center justify-center shadow-sm">
                                            <div className="w-12 h-12 bg-orange-100 rounded flex items-center justify-center">
                                                <span className="text-2xl font-bold text-orange-600">→</span>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-gray-700 font-medium">Mover para a direita</p>
                                        </div>
                                    </div>

                                    {/* Subir e descer escadas */}
                                    <div className="flex items-center space-x-4 p-3 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors">
                                        <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-white flex items-center justify-center shadow-sm">
                                            <div className="w-12 h-12 bg-purple-100 rounded flex items-center justify-center">
                                                <div className="flex flex-col items-center">
                                                    <span className="text-lg font-bold text-purple-600">↑</span>
                                                    <span className="text-lg font-bold text-purple-600">↓</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-gray-700 font-medium">Subir e descer escadas</p>
                                        </div>
                                    </div>

                                    {/* Pular */}
                                    <div className="flex items-center space-x-4 p-3 rounded-lg bg-green-50 hover:bg-green-100 transition-colors">
                                        <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-white flex items-center justify-center shadow-sm">
                                            <div className="w-12 h-12 bg-green-100 rounded flex items-center justify-center">
                                                <span className="text-lg font-bold text-green-600">SPACE</span>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-gray-700 font-medium">Pular</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Jogo da Fase 1 */}
                        <div className="bg-white rounded-xl p-4 shadow-lg border-2 border-blue-100 hover:shadow-xl transition-shadow duration-300">
                            <div className="mb-4 text-center">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    🎮 Jogue Agora: A Caminhada do Capi Senador
                                </h3>
                                <p className="text-sm text-gray-600">
                                    Use as setas para se mover, SPACE para pular e colete todos os votos escondidos!
                                </p>
                            </div>
                            <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
                                <iframe
                                    src="https://gd.games/games/f1aae93f-8bdd-4a2d-b204-50de0409d215"
                                    allowTransparency={true}
                                    width="100%"
                                    height="100%"
                                    frameBorder="0"
                                    scrolling="no"
                                    allowFullScreen
                                    className="rounded-lg absolute inset-0 w-full h-full"
                                    title="Capi Senador - Fase 1: A Caminhada do Capi Senador"
                                ></iframe>
                            </div>
                        </div>

                        {/* Aprendizado Cívico */}
                        <div className="mt-8">
                            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-3xl p-8 border-2 border-yellow-200">
                                <div className="flex items-center mb-6">
                                    <h2 className="text-2xl font-bold text-gray-900 mr-3">
                                        Aprendizado Cívico (rapidinho)
                                    </h2>
                                    <span className="text-3xl">🎓⚡</span>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* Como virar senador */}
                                    <div className="bg-white rounded-xl p-6 shadow-sm">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                            <span className="text-2xl mr-2">🏛️</span>
                                            Como virar senador
                                        </h3>
                                        <div className="space-y-3">
                                            <div className="flex items-center space-x-3 p-2 rounded-lg bg-blue-50">
                                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <span className="text-sm font-bold text-blue-600">1</span>
                                                </div>
                                                <p className="text-gray-700 text-sm">Filiação partidária</p>
                                            </div>
                                            <div className="flex items-center space-x-3 p-2 rounded-lg bg-blue-50">
                                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <span className="text-sm font-bold text-blue-600">2</span>
                                                </div>
                                                <p className="text-gray-700 text-sm">Registro na Justiça Eleitoral</p>
                                            </div>
                                            <div className="flex items-center space-x-3 p-2 rounded-lg bg-blue-50">
                                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <span className="text-sm font-bold text-blue-600">3</span>
                                                </div>
                                                <p className="text-gray-700 text-sm">Campanha regular</p>
                                            </div>
                                            <div className="flex items-center space-x-3 p-2 rounded-lg bg-blue-50">
                                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <span className="text-sm font-bold text-blue-600">4</span>
                                                </div>
                                                <p className="text-gray-700 text-sm">Maioria de votos no estado/DF</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Mandato e renovação */}
                                    <div className="bg-white rounded-xl p-6 shadow-sm">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                            <span className="text-2xl mr-2">⏰</span>
                                            Mandato e Renovação
                                        </h3>
                                        <div className="space-y-3">
                                            <div className="flex items-center space-x-3 p-2 rounded-lg bg-green-50">
                                                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <span className="text-lg">8</span>
                                                </div>
                                                <p className="text-gray-700 text-sm">Anos de mandato</p>
                                            </div>
                                            <div className="flex items-center space-x-3 p-2 rounded-lg bg-green-50">
                                                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <span className="text-lg">3</span>
                                                </div>
                                                <p className="text-gray-700 text-sm">Senadores por estado/DF</p>
                                            </div>
                                            <div className="flex items-center space-x-3 p-2 rounded-lg bg-green-50">
                                                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <span className="text-sm">1/3</span>
                                                </div>
                                                <p className="text-gray-700 text-sm">Renovação alternada</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Papéis dos Poderes */}
                                    <div className="bg-white rounded-xl p-6 shadow-sm md:col-span-2">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                            <span className="text-2xl mr-2">⚖️</span>
                                            Papéis dos Poderes
                                        </h3>
                                        <div className="grid md:grid-cols-3 gap-4">
                                            <div className="flex items-center space-x-3 p-3 rounded-lg bg-red-50">
                                                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                    <span className="text-lg">🏛️</span>
                                                </div>
                                                <div>
                                                    <p className="font-medium text-gray-900 text-sm">Executivo</p>
                                                    <p className="text-gray-600 text-xs">Executa políticas</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-3 p-3 rounded-lg bg-blue-50">
                                                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                    <span className="text-lg">📜</span>
                                                </div>
                                                <div>
                                                    <p className="font-medium text-gray-900 text-sm">Legislativo</p>
                                                    <p className="text-gray-600 text-xs">Faz leis e fiscaliza</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-3 p-3 rounded-lg bg-purple-50">
                                                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                    <span className="text-lg">⚖️</span>
                                                </div>
                                                <div>
                                                    <p className="font-medium text-gray-900 text-sm">Judiciário</p>
                                                    <p className="text-gray-600 text-xs">Garante regras (TSE)</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Fase 2 */}
                <section className="mb-16">
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 lg:p-12 border-4 border-green-200">
                        <div className="grid lg:grid-cols-2 gap-8 items-center">
                            <div>
                                <div className="flex items-center mb-4">
                                    <Badge className="bg-green-600 text-white text-lg px-8 py-2 mr-8">
                                        Fase2
                                    </Badge>
                                    <h2 className="text-3xl font-bold text-gray-900">
                                        O Projeto de Lei que vai mudar o Brasil!
                                    </h2>
                                </div>
                                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                    Espalhados pelo parlamento, Capi encontra pistas de um <strong>Projeto de Lei (PL)</strong> capaz de melhorar a vida de milhões.
                                    Para montar o texto final, ele precisa coletar <strong>fragmentos de artigos e incisos</strong>, enquanto dribla os <strong>Anti-Democratis</strong>,
                                    capangas que tentam confundir o processo e atrasar a votação. <strong>Corra, revise, componha o PL — e não deixe a democracia cair!</strong>
                                </p>
                                <div className="bg-white rounded-xl p-6 shadow-sm">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Objetivos da Fase:</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li>• Colete <strong>10 fragmentos de Projetos de Lei</strong> para completar o texto.</li>
                                        <li>• Fuja dos Anti-Democratis</li>
                                        <li><strong>• Finalize o projeto</strong> e entregue para análise antes de ser alcançado!</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm">
                                <iframe
                                    src="https://scratch.mit.edu/projects/1212364427/embed"
                                    allowTransparency={true}
                                    width="100%"
                                    height="402"
                                    frameBorder="0"
                                    scrolling="no"
                                    allowFullScreen
                                    className="rounded-lg"
                                ></iframe>
                            </div>
                        </div>

                        {/* Aprendizado Cívico - Fase 2 */}
                        <div className="mt-8">
                            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 border-2 border-green-200">
                                <div className="flex items-center mb-6">
                                    <h2 className="text-2xl font-bold text-gray-900 mr-3">
                                        Aprendizado Cívico (rapidinho)
                                    </h2>
                                    <span className="text-3xl">🎓⚡</span>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* Processo Legislativo - Parte 1 */}
                                    <div className="bg-white rounded-xl p-6 shadow-sm">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                            <span className="text-2xl mr-2">📋</span>
                                            Caminho do Projeto de Lei
                                        </h3>
                                        <div className="space-y-3">
                                            <div className="flex items-center space-x-3 p-2 rounded-lg bg-green-50">
                                                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <span className="text-sm font-bold text-green-600">1</span>
                                                </div>
                                                <p className="text-gray-700 text-sm">Iniciativa: apresentação do PL</p>
                                            </div>
                                            <div className="flex items-center space-x-3 p-2 rounded-lg bg-green-50">
                                                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <span className="text-sm font-bold text-green-600">2</span>
                                                </div>
                                                <p className="text-gray-700 text-sm">Numeração e leitura: protocolo e envio às comissões</p>
                                            </div>
                                            <div className="flex items-center space-x-3 p-2 rounded-lg bg-green-50">
                                                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <span className="text-sm font-bold text-green-600">3</span>
                                                </div>
                                                <p className="text-gray-700 text-sm">Comissões: análise de constitucionalidade, mérito e emendas</p>
                                            </div>
                                            <div className="flex items-center space-x-3 p-2 rounded-lg bg-green-50">
                                                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <span className="text-sm font-bold text-green-600">4</span>
                                                </div>
                                                <p className="text-gray-700 text-sm">Votação na Casa iniciadora: plenário aprova e envia à Casa revisora</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Processo Legislativo - Parte 2 */}
                                    <div className="bg-white rounded-xl p-6 shadow-sm">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                            <span className="text-2xl mr-2">⚖️</span>
                                            Finalização e Aprovação
                                        </h3>
                                        <div className="space-y-3">
                                            <div className="flex items-center space-x-3 p-2 rounded-lg bg-blue-50">
                                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <span className="text-sm font-bold text-blue-600">5</span>
                                                </div>
                                                <p className="text-gray-700 text-sm">Revisão: aprovação, emenda ou rejeição pela outra Casa</p>
                                            </div>
                                            <div className="flex items-center space-x-3 p-2 rounded-lg bg-blue-50">
                                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <span className="text-sm font-bold text-blue-600">6</span>
                                                </div>
                                                <p className="text-gray-700 text-sm">Envio ao Executivo: sanção ou veto presidencial</p>
                                            </div>
                                            <div className="flex items-center space-x-3 p-2 rounded-lg bg-blue-50">
                                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <span className="text-sm font-bold text-blue-600">7</span>
                                                </div>
                                                <p className="text-gray-700 text-sm">Veto: Congresso pode derrubar ou manter</p>
                                            </div>
                                            <div className="flex items-center space-x-3 p-2 rounded-lg bg-blue-50">
                                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <span className="text-sm font-bold text-blue-600">8</span>
                                                </div>
                                                <p className="text-gray-700 text-sm">Virou lei: promulgação e publicação no Diário Oficial</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Resumo do Processo */}
                                    <div className="bg-white rounded-xl p-6 shadow-sm md:col-span-2">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                            <span className="text-2xl mr-2">📝</span>
                                            Resumo: Como um PL vira Lei
                                        </h3>
                                        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-4 border-l-4 border-yellow-400">
                                            <p className="text-gray-700 text-sm leading-relaxed">
                                                <strong>Em resumo:</strong> Um Projeto de Lei começa com sua apresentação, passa por comissões para análise,
                                                é votado nas duas Casas do Congresso (Câmara e Senado), vai para o Presidente que pode sancionar ou vetar,
                                                e se aprovado, vira lei após ser publicado no Diário Oficial. Todo esse processo garante que as leis sejam
                                                bem analisadas e representem a vontade do povo brasileiro! 🇧🇷
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Fase 3 */}
                <section className="mb-16">
                    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-3xl p-8 lg:p-12">
                        <div className="grid lg:grid-cols-2 gap-8 items-center">
                            <div className="relative rounded-xl h-80 overflow-hidden shadow-lg">
                                {/* Imagem atual */}
                                <img
                                    src={fase3Images[currentFase3ImageIndex]}
                                    alt={`O Confronto - Imagem ${currentFase3ImageIndex + 1}`}
                                    className="w-full h-full object-cover"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

                                {/* Conteúdo sobreposto */}
                                <div className="absolute bottom-4 left-4 text-white">
                                    <h3 className="text-lg font-bold">
                                        {currentFase3ImageIndex === 0 ? "🔒 O Confronto" : "🏛️ Labirinto da Câmara"}
                                    </h3>
                                    <p className="text-sm opacity-90">
                                        {currentFase3ImageIndex === 0
                                            ? "Capi enfrenta os obstáculos da conspiração"
                                            : "Capi navega pelos corredores da Câmara"
                                        }
                                    </p>
                                </div>

                                {/* Setas de navegação */}
                                <button
                                    onClick={prevFase3Image}
                                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
                                    aria-label="Imagem anterior"
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </button>

                                <button
                                    onClick={nextFase3Image}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
                                    aria-label="Próxima imagem"
                                >
                                    <ChevronRight className="w-6 h-6" />
                                </button>

                                {/* Indicadores de posição */}
                                <div className="absolute bottom-4 right-4 flex space-x-2">
                                    {fase3Images.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentFase3ImageIndex(index)}
                                            className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentFase3ImageIndex
                                                ? 'bg-white'
                                                : 'bg-white/50 hover:bg-white/70'
                                                }`}
                                            aria-label={`Ir para imagem ${index + 1}`}
                                        />
                                    ))}
                                </div>

                                {/* Contador de imagens */}
                                <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                                    {currentFase3ImageIndex + 1} / {fase3Images.length}
                                </div>
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
                                    As portas do Plenário da Câmara estão fechadas por um grande cadeado simbólico,
                                    representando as barreiras políticas e regimentais. Capi precisa navegar por um
                                    labirinto de corredores que se abrem conforme ele acerta o caminho certo do processo
                                    legislativo. É o momento de levar o Projeto de Lei para votação na Câmara dos Deputados, mas os atalhos
                                    errados podem levá-lo a becos sem saída, representando arquivamentos ou manobras
                                    de procrastinação. <strong>Dona Justina surge como mentora, guiando Capi através
                                        da sabedoria jurídica e dos valores democráticos.</strong>
                                </p>
                                <div className="bg-white rounded-xl p-6 shadow-sm">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Objetivos da Fase:</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li>• <strong>Encontrar a sequência correta</strong> de encaminhamentos regimentais</li>
                                        <li>• <strong>Passar pelas comissões</strong> e superar pedidos de vista</li>
                                        <li>• <strong>Driblar obstruções</strong> e manobras de procrastinação</li>
                                        <li>• <strong>Destravar os acessos</strong> para conduzir o PL até o Plenário</li>
                                        <li>• <strong>Responder corretamente</strong> aos enigmas sobre processo legislativo</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Aprendizado Cívico - Fase 3 */}
                        <div className="mt-8">
                            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-3xl p-8 border-2 border-yellow-200">
                                <div className="flex items-center mb-6">
                                    <h2 className="text-2xl font-bold text-gray-900 mr-3">
                                        Aprendizado Cívico (rapidinho)
                                    </h2>
                                    <span className="text-3xl">🎓⚡</span>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* Processo Legislativo na Câmara - Parte 1 */}
                                    <div className="bg-white rounded-xl p-6 shadow-sm">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                            <span className="text-2xl mr-2">🏛️</span>
                                            Caminho do PL na Câmara
                                        </h3>
                                        <div className="space-y-3">
                                            <div className="flex items-center space-x-3 p-2 rounded-lg bg-yellow-50">
                                                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <span className="text-sm font-bold text-yellow-600">1</span>
                                                </div>
                                                <p className="text-gray-700 text-sm">Apresentação e numeração do PL</p>
                                            </div>
                                            <div className="flex items-center space-x-3 p-2 rounded-lg bg-yellow-50">
                                                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <span className="text-sm font-bold text-yellow-600">2</span>
                                                </div>
                                                <p className="text-gray-700 text-sm">Distribuição às comissões temáticas</p>
                                            </div>
                                            <div className="flex items-center space-x-3 p-2 rounded-lg bg-yellow-50">
                                                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <span className="text-sm font-bold text-yellow-600">3</span>
                                                </div>
                                                <p className="text-gray-700 text-sm">Análise de constitucionalidade e mérito</p>
                                            </div>
                                            <div className="flex items-center space-x-3 p-2 rounded-lg bg-yellow-50">
                                                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <span className="text-sm font-bold text-yellow-600">4</span>
                                                </div>
                                                <p className="text-gray-700 text-sm">Relatório e parecer das comissões</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Obstáculos e Manobras - Parte 2 */}
                                    <div className="bg-white rounded-xl p-6 shadow-sm">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                            <span className="text-2xl mr-2">⚠️</span>
                                            Obstáculos do Processo
                                        </h3>
                                        <div className="space-y-3">
                                            <div className="flex items-center space-x-3 p-2 rounded-lg bg-red-50">
                                                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <span className="text-sm font-bold text-red-600">A</span>
                                                </div>
                                                <p className="text-gray-700 text-sm">Pedidos de vista (até 2 sessões)</p>
                                            </div>
                                            <div className="flex items-center space-x-3 p-2 rounded-lg bg-red-50">
                                                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <span className="text-sm font-bold text-red-600">B</span>
                                                </div>
                                                <p className="text-gray-700 text-sm">Obstruções e manobras regimentais</p>
                                            </div>
                                            <div className="flex items-center space-x-3 p-2 rounded-lg bg-red-50">
                                                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <span className="text-sm font-bold text-red-600">C</span>
                                                </div>
                                                <p className="text-gray-700 text-sm">Arquivamento por falta de prazo</p>
                                            </div>
                                            <div className="flex items-center space-x-3 p-2 rounded-lg bg-red-50">
                                                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <span className="text-sm font-bold text-red-600">D</span>
                                                </div>
                                                <p className="text-gray-700 text-sm">Recursos e questionamentos</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Dona Justina e Valores - Parte 3 */}
                                    <div className="bg-white rounded-xl p-6 shadow-sm md:col-span-2">
                                        <div className="flex flex-col lg:flex-row gap-6 items-start">
                                            {/* Imagem da Dona Justina */}
                                            <div className="flex-shrink-0 mx-auto lg:mx-0">
                                                <div className="w-32 h-32 rounded-xl overflow-hidden shadow-lg border-2 border-yellow-200">
                                                    <img
                                                        src={donaJustina}
                                                        alt="Dona Justina - Mentora da Sabedoria Jurídica"
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <p className="text-center text-sm text-gray-600 mt-2 font-medium">
                                                    👩‍⚖️ Dona Justina
                                                </p>
                                            </div>

                                            {/* Conteúdo dos Valores */}
                                            <div className="flex-1">
                                                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                                    <span className="text-2xl mr-2">⚖️</span>
                                                    Sabedoria e Valores
                                                </h3>
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    <div className="space-y-3">
                                                        <div className="flex items-center space-x-3 p-3 rounded-lg bg-green-50">
                                                            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                                <span className="text-lg">⚖️</span>
                                                            </div>
                                                            <div>
                                                                <p className="font-medium text-gray-900 text-sm">Tradição Jurídica</p>
                                                                <p className="text-gray-600 text-xs">Sabedoria do Judiciário</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center space-x-3 p-3 rounded-lg bg-blue-50">
                                                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                                <span className="text-lg">🏛️</span>
                                                            </div>
                                                            <div>
                                                                <p className="font-medium text-gray-900 text-sm">Valores Democráticos</p>
                                                                <p className="text-gray-600 text-xs">Compromisso com a sociedade</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="space-y-3">
                                                        <div className="flex items-center space-x-3 p-3 rounded-lg bg-purple-50">
                                                            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                                <span className="text-lg">👨‍👩‍👧‍👦</span>
                                                            </div>
                                                            <div>
                                                                <p className="font-medium text-gray-900 text-sm">Valores Familiares</p>
                                                                <p className="text-gray-600 text-xs">Tradição e responsabilidade</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center space-x-3 p-3 rounded-lg bg-orange-50">
                                                            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                                <span className="text-lg">🎯</span>
                                                            </div>
                                                            <div>
                                                                <p className="font-medium text-gray-900 text-sm">Orientação Estratégica</p>
                                                                <p className="text-gray-600 text-xs">Caminhos seguros e perigosos</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Resumo da Fase 3 */}
                                    <div className="bg-white rounded-xl p-6 shadow-sm md:col-span-2">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                            <span className="text-2xl mr-2">🔓</span>
                                            Resumo: Destravando o Labirinto Legislativo
                                        </h3>
                                        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-4 border-l-4 border-yellow-400">
                                            <p className="text-gray-700 text-sm leading-relaxed">
                                                <strong>Em resumo:</strong> A Fase 3 representa o desafio de navegar pelo complexo processo legislativo da Câmara dos Deputados.
                                                Capi precisa encontrar a sequência correta de encaminhamentos, superar obstáculos como pedidos de vista e obstruções,
                                                e contar com a orientação de Dona Justina para destravar o labirinto e levar o PL até o Plenário.
                                                <strong> Cada decisão correta abre um caminho iluminado, enquanto erros ativam os Anti-Democratis!</strong>
                                                Na próxima fase, Capi viajará pelo Túnel do Tempo para aprender com as Constituições do passado! 🕰️✨
                                            </p>
                                        </div>
                                    </div>
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
                                    Depois de destravar os corredores do Plenário, CapiSenador descobre que não está sozinho.
                                    Conspiradores sombrios espalharam teorias da conspiração e fake news, tentando desviar o
                                    verdadeiro sentido do Projeto de Lei. Para restaurar a confiança da democracia, Capi deve
                                    atravessar o misterioso <strong>Túnel do Tempo do Senado Federal</strong>, onde ecos das
                                    Constituições passadas revelam segredos da história. <strong>Presidenton, o bigodudo de
                                        faixa presidencial, surge como aliado para explicar como as leis precisam da sanção
                                        presidencial para virar realidade!</strong>
                                </p>
                                <div className="bg-white rounded-xl p-6 shadow-sm">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Objetivos da Fase:</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li>• <strong>Desviar de objetos distorcidos</strong> (jornais falsos, microfones bugados)</li>
                                        <li>• <strong>Coletar Fragmentos Históricos</strong> das Constituições brasileiras</li>
                                        <li>• <strong>Restaurar a linha temporal</strong> para impedir apagamento da memória política</li>
                                        <li>• <strong>Colaborar com Presidenton</strong> para entender sanção presidencial</li>
                                        <li>• <strong>Chegar ao Plenarinho</strong> e descobrir as origens do Senado</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="relative bg-white rounded-xl h-80 overflow-hidden shadow-lg">
                                {/* Imagem atual */}
                                <img
                                    src={fase4Images[currentImageIndex]}
                                    alt={`Fase 4 - Imagem ${currentImageIndex + 1}`}
                                    className="w-full h-full object-cover"
                                />

                                {/* Setas de navegação */}
                                <button
                                    onClick={prevImage}
                                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
                                    aria-label="Imagem anterior"
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </button>

                                <button
                                    onClick={nextImage}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
                                    aria-label="Próxima imagem"
                                >
                                    <ChevronRight className="w-6 h-6" />
                                </button>

                                {/* Indicadores de posição */}
                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                    {fase4Images.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentImageIndex(index)}
                                            className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentImageIndex
                                                ? 'bg-white'
                                                : 'bg-white/50 hover:bg-white/70'
                                                }`}
                                            aria-label={`Ir para imagem ${index + 1}`}
                                        />
                                    ))}
                                </div>

                                {/* Contador de imagens */}
                                <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                                    {currentImageIndex + 1} / {fase4Images.length}
                                </div>
                            </div>
                        </div>

                        {/* Aprendizado Cívico - Fase 4 */}
                        <div className="mt-8">
                            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8 border-2 border-purple-200">
                                <div className="flex items-center mb-6">
                                    <h2 className="text-2xl font-bold text-gray-900 mr-3">
                                        Aprendizado Cívico (rapidinho)
                                    </h2>
                                    <span className="text-3xl">🎓⚡</span>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* Fake News e Conspirações - Parte 1 */}
                                    <div className="bg-white rounded-xl p-6 shadow-sm">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                            <span className="text-2xl mr-2">⚠️</span>
                                            Ameaças à Democracia
                                        </h3>
                                        <div className="space-y-3">
                                            <div className="flex items-center space-x-3 p-2 rounded-lg bg-red-50">
                                                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <span className="text-sm font-bold text-red-600">1</span>
                                                </div>
                                                <p className="text-gray-700 text-sm">Fake news distorcem a realidade</p>
                                            </div>
                                            <div className="flex items-center space-x-3 p-2 rounded-lg bg-red-50">
                                                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <span className="text-sm font-bold text-red-600">2</span>
                                                </div>
                                                <p className="text-gray-700 text-sm">Teorias conspiratórias confundem</p>
                                            </div>
                                            <div className="flex items-center space-x-3 p-2 rounded-lg bg-red-50">
                                                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <span className="text-sm font-bold text-red-600">3</span>
                                                </div>
                                                <p className="text-gray-700 text-sm">Mídia distorcida espalha mentiras</p>
                                            </div>
                                            <div className="flex items-center space-x-3 p-2 rounded-lg bg-red-50">
                                                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <span className="text-sm font-bold text-red-600">4</span>
                                                </div>
                                                <p className="text-gray-700 text-sm">Conspiradores atacam a democracia</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* História das Constituições - Parte 2 */}
                                    <div className="bg-white rounded-xl p-6 shadow-sm">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                            <span className="text-2xl mr-2">📜</span>
                                            Constituições Brasileiras
                                        </h3>
                                        <div className="space-y-3">
                                            <div className="flex items-center space-x-3 p-2 rounded-lg bg-blue-50">
                                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <span className="text-sm font-bold text-blue-600">1824</span>
                                                </div>
                                                <p className="text-gray-700 text-sm">Primeira Constituição do Império</p>
                                            </div>
                                            <div className="flex items-center space-x-3 p-2 rounded-lg bg-blue-50">
                                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <span className="text-sm font-bold text-blue-600">1891</span>
                                                </div>
                                                <p className="text-gray-700 text-sm">Primeira República</p>
                                            </div>
                                            <div className="flex items-center space-x-3 p-2 rounded-lg bg-blue-50">
                                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <span className="text-sm font-bold text-blue-600">1988</span>
                                                </div>
                                                <p className="text-gray-700 text-sm">Constituição Cidadã atual</p>
                                            </div>
                                            <div className="flex items-center space-x-3 p-2 rounded-lg bg-blue-50">
                                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <span className="text-sm font-bold text-blue-600">+</span>
                                                </div>
                                                <p className="text-gray-700 text-sm">Evolução democrática contínua</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Presidenton e Sanção Presidencial - Parte 3 */}
                                    <div className="bg-white rounded-xl p-6 shadow-sm md:col-span-2">
                                        <div className="flex flex-col lg:flex-row gap-6 items-start">
                                            {/* Imagem do Presidenton */}
                                            <div className="flex-shrink-0 mx-auto lg:mx-0">
                                                <div className="w-32 h-32 rounded-xl overflow-hidden shadow-lg border-2 border-purple-200">
                                                    <img
                                                        src={presidentonTunelImage}
                                                        alt="Presidenton - O Bigodudo de Faixa Presidencial"
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <p className="text-center text-sm text-gray-600 mt-2 font-medium">
                                                    🏛️ Presidenton
                                                </p>
                                            </div>

                                            {/* Conteúdo do Presidenton */}
                                            <div className="flex-1">
                                                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                                    <span className="text-2xl mr-2">🏛️</span>
                                                    Sanção Presidencial e Poderes
                                                </h3>
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    <div className="space-y-3">
                                                        <div className="flex items-center space-x-3 p-3 rounded-lg bg-green-50">
                                                            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                                <span className="text-lg">✍️</span>
                                                            </div>
                                                            <div>
                                                                <p className="font-medium text-gray-900 text-sm">Sanção Presidencial</p>
                                                                <p className="text-gray-600 text-xs">Aprovação final das leis</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center space-x-3 p-3 rounded-lg bg-blue-50">
                                                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                                <span className="text-lg">🗣️</span>
                                                            </div>
                                                            <div>
                                                                <p className="font-medium text-gray-900 text-sm">Diálogo Democrático</p>
                                                                <p className="text-gray-600 text-xs">Governo e Parlamento</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="space-y-3">
                                                        <div className="flex items-center space-x-3 p-3 rounded-lg bg-purple-50">
                                                            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                                <span className="text-lg">⚖️</span>
                                                            </div>
                                                            <div>
                                                                <p className="font-medium text-gray-900 text-sm">Equilíbrio dos Poderes</p>
                                                                <p className="text-gray-600 text-xs">Legislativo + Executivo + Judiciário</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center space-x-3 p-3 rounded-lg bg-orange-50">
                                                            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                                <span className="text-lg">🎯</span>
                                                            </div>
                                                            <div>
                                                                <p className="font-medium text-gray-900 text-sm">Linha Temporal</p>
                                                                <p className="text-gray-600 text-xs">Proteção da memória política</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Resumo da Fase 4 */}
                                    <div className="bg-white rounded-xl p-6 shadow-sm md:col-span-2">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                            <span className="text-2xl mr-2">🕰️</span>
                                            Resumo: O Túnel do Tempo e a Revelação
                                        </h3>
                                        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 border-l-4 border-purple-400">
                                            <p className="text-gray-700 text-sm leading-relaxed">
                                                <strong>Em resumo:</strong> A Fase 4 representa a jornada através do Túnel do Tempo do Senado Federal,
                                                onde CapiSenador enfrenta fake news e conspirações que ameaçam a democracia. Com a ajuda de Presidenton,
                                                ele coleta fragmentos das Constituições brasileiras e restaura a linha temporal.
                                                <strong> Só conhecendo o passado é possível proteger o futuro da democracia!</strong>
                                                Ao chegar ao Plenarinho, Capi descobre as origens do Senado e se prepara para a votação final! 🏛️✨
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Fase 5 */}
                <section className="mb-16">
                    <div className="bg-gradient-to-r from-orange-50 to-rose-50 rounded-3xl p-8 lg:p-12 border-4 border-orange-200">
                        {/* Título da Fase */}
                        <div className="text-center mb-8">
                            <div className="flex items-center justify-center mb-4">
                                <Badge className="bg-red-900 text-white text-lg px-4 py-2 mr-4">
                                    Fase 5
                                </Badge>
                                <h2 className="text-3xl font-bold text-gray-900">
                                    A votação mais importante do Brasil!
                                </h2>
                            </div>
                            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                                Chegou a hora da verdade! Capi precisa <strong>passar o super Projeto de Lei</strong> no Senado Federal e garantir que ele siga para apreciação legislativa.
                                Mas o caminho até a vitória não será fácil: três poderosos "cometas" jurídicos surgem para barrar a democracia!
                            </p>
                        </div>

                        {/* Objetivos e Controles lado a lado */}
                        <div className="grid lg:grid-cols-2 gap-8 mb-8">
                            {/* Objetivos da Fase */}
                            <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-red-100">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Objetivos da Fase:</h3>
                                <div className="space-y-4">
                                    {/* Objetivo 1 - Confrontar líderes */}
                                    <div className="flex items-center space-x-4 p-3 rounded-lg bg-red-50 hover:bg-red-100 transition-colors">
                                        <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-white flex items-center justify-center shadow-sm">
                                            <div className="w-12 h-12 bg-red-100 rounded flex items-center justify-center">
                                                <span className="text-2xl">⚔️</span>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-gray-700 font-medium"><strong>Confrontar os líderes da conspiração</strong> no plenário.</p>
                                        </div>
                                    </div>

                                    {/* Objetivo 2 - Expor verdade */}
                                    <div className="flex items-center space-x-4 p-3 rounded-lg bg-yellow-50 hover:bg-yellow-100 transition-colors">
                                        <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-white flex items-center justify-center shadow-sm">
                                            <div className="w-12 h-12 bg-yellow-100 rounded flex items-center justify-center">
                                                <span className="text-2xl">📢</span>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-gray-700 font-medium"><strong>Quebrar os obstáculos</strong> através do papel da aprovação constitucinal das lesi e garantir que a justiça prevaleça.</p>
                                        </div>
                                    </div>

                                    {/* Objetivo 3 - Garantir justiça */}
                                    <div className="flex items-center space-x-4 p-3 rounded-lg bg-green-50 hover:bg-green-100 transition-colors">
                                        <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-white flex items-center justify-center shadow-sm">
                                            <div className="w-12 h-12 bg-green-100 rounded flex items-center justify-center">
                                                <span className="text-2xl">⚖️</span>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-gray-700 font-medium">Garantir que a justiça prevaleça</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Controles do Jogo */}
                            <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-red-100">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Controles do Jogo:</h3>
                                <div className="space-y-4">
                                    {/* Movimentação - Setas */}
                                    <div className="flex items-center space-x-4 p-3 rounded-lg bg-orange-50 hover:bg-orange-100 transition-colors">
                                        <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-white flex items-center justify-center shadow-sm">
                                            <div className="w-12 h-12 bg-orange-100 rounded flex items-center justify-center">
                                                <div className="grid grid-cols-2 gap-1">
                                                    <div className="w-3 h-3"></div>
                                                    <span className="text-lg font-bold text-orange-600">↑</span>
                                                    <span className="text-lg font-bold text-orange-600">←</span>
                                                    <span className="text-lg font-bold text-orange-600">→</span>
                                                    <span className="text-lg font-bold text-orange-600">↓</span>
                                                    <div className="w-3 h-3"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-gray-700 font-medium">Movimentação: esquerda, direita, cima e baixo</p>
                                        </div>
                                    </div>

                                    {/* Disparador de Aprovação */}
                                    <div className="flex items-center space-x-4 p-3 rounded-lg bg-green-50 hover:bg-green-100 transition-colors">
                                        <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-white flex items-center justify-center shadow-sm">
                                            <img
                                                src="/projeto-lei-asset.svg"
                                                alt="Projeto de Lei"
                                                className="w-12 h-12 object-contain"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-gray-700 font-medium">
                                                <strong>SPACE</strong> - Disparador de aprovação de Projeto
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Obstáculos */}
                        <div className="mb-8">
                            <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-red-100">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Obstáculos:</h3>
                                <div className="space-y-4">
                                    {/* Asteroide da Inconstitucionalidade */}
                                    <div className="flex items-center space-x-4 p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
                                        <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-white flex items-center justify-center shadow-sm">
                                            <div className="w-12 h-12 bg-blue-100 rounded flex items-center justify-center">
                                                <span className="text-2xl">☄️</span>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-gray-700 font-medium">
                                                <strong>Asteroide da Inconstitucionalidade</strong> — atinge quando o PL não respeita a Constituição.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Asteroide do Arquivamento */}
                                    <div className="flex items-center space-x-4 p-3 rounded-lg bg-orange-50 hover:bg-orange-100 transition-colors">
                                        <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-white flex items-center justify-center shadow-sm">
                                            <div className="w-12 h-12 bg-orange-100 rounded flex items-center justify-center">
                                                <span className="text-2xl">☄️</span>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-gray-700 font-medium">
                                                <strong>Asteroide do Arquivamento</strong> — quando o projeto não avança nas comissões ou perde prazos.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Asteroide do Veto */}
                                    <div className="flex items-center space-x-4 p-3 rounded-lg bg-green-50 hover:bg-green-100 transition-colors">
                                        <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-white flex items-center justify-center shadow-sm">
                                            <div className="w-12 h-12 bg-green-100 rounded flex items-center justify-center">
                                                <span className="text-2xl">☄️</span>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-gray-700 font-medium">
                                                <strong>Asteroide do Veto</strong> — o Presidente pode barrar o PL, parcial ou totalmente.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Iframe do Jogo */}
                        <div className="bg-white rounded-xl p-4 shadow-sm border-2 border-red-100 mb-8">
                            <iframe
                                src="https://scratch.mit.edu/projects/1212366977/embed"
                                allowTransparency={true}
                                width="100%"
                                height="402"
                                frameBorder="0"
                                scrolling="no"
                                allowFullScreen
                                className="rounded-lg"
                            ></iframe>
                        </div>

                        {/* Aprendizado Cívico - Fase 5 */}
                        <div className="mt-8">
                            <div className="bg-gradient-to-r from-orange-20 to-pink-500 rounded-3xl p-8 border-2 border-orange-200">
                                <div className="flex items-center mb-6">
                                    <h2 className="text-2xl font-bold text-gray-900 mr-3">
                                        Aprendizado Cívico (rapidinho)
                                    </h2>
                                    <span className="text-3xl">🎓⚡</span>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* Processo de Votação - Parte 1 */}
                                    <div className="bg-white rounded-xl p-6 shadow-sm">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                            <span className="text-2xl mr-2">🗳️</span>
                                            Processo de Votação
                                        </h3>
                                        <div className="space-y-3">
                                            <div className="flex items-center space-x-3 p-2 rounded-lg bg-red-50">
                                                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <span className="text-sm font-bold text-red-600">1</span>
                                                </div>
                                                <p className="text-gray-700 text-sm">Quórum: maioria absoluta dos membros</p>
                                            </div>
                                            <div className="flex items-center space-x-3 p-2 rounded-lg bg-red-50">
                                                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <span className="text-sm font-bold text-red-600">2</span>
                                                </div>
                                                <p className="text-gray-700 text-sm">Votação: maioria simples dos presentes</p>
                                            </div>
                                            <div className="flex items-center space-x-3 p-2 rounded-lg bg-red-50">
                                                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <span className="text-sm font-bold text-red-600">3</span>
                                                </div>
                                                <p className="text-gray-700 text-sm">Registro: voto nominal e público</p>
                                            </div>
                                            <div className="flex items-center space-x-3 p-2 rounded-lg bg-red-50">
                                                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <span className="text-sm font-bold text-red-600">4</span>
                                                </div>
                                                <p className="text-gray-700 text-sm">Resultado: aprovado ou rejeitado</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Poderes e Responsabilidades - Parte 2 */}
                                    <div className="bg-white rounded-xl p-6 shadow-sm">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                            <span className="text-2xl mr-2">🏛️</span>
                                            Poderes do Senado
                                        </h3>
                                        <div className="space-y-3">
                                            <div className="flex items-center space-x-3 p-2 rounded-lg bg-blue-50">
                                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <span className="text-sm font-bold text-blue-600">A</span>
                                                </div>
                                                <p className="text-gray-700 text-sm">Aprovar ou rejeitar projetos de lei</p>
                                            </div>
                                            <div className="flex items-center space-x-3 p-2 rounded-lg bg-blue-50">
                                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <span className="text-sm font-bold text-blue-600">B</span>
                                                </div>
                                                <p className="text-gray-700 text-sm">Fiscalizar atos do Poder Executivo</p>
                                            </div>
                                            <div className="flex items-center space-x-3 p-2 rounded-lg bg-blue-50">
                                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <span className="text-sm font-bold text-blue-600">C</span>
                                                </div>
                                                <p className="text-gray-700 text-sm">Processar e julgar crimes de responsabilidade</p>
                                            </div>
                                            <div className="flex items-center space-x-3 p-2 rounded-lg bg-blue-50">
                                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <span className="text-sm font-bold text-blue-600">D</span>
                                                </div>
                                                <p className="text-gray-700 text-sm">Representar os estados e o DF</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Resumo da Democracia */}
                                    <div className="bg-white rounded-xl p-6 shadow-sm md:col-span-2">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                            <span className="text-2xl mr-2">🇧🇷</span>
                                            Resumo: A Força da Democracia
                                        </h3>
                                        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-4 border-l-4 border-yellow-400">
                                            <p className="text-gray-700 text-sm leading-relaxed">
                                                <strong>Em resumo:</strong> O Senado Federal é a Casa da Federação, onde cada estado tem igual representação.
                                                Suas decisões impactam toda a nação, garantindo que os interesses regionais sejam respeitados no processo legislativo.
                                                A votação transparente e democrática é o coração da nossa República!
                                                <strong> Cada voto conta para o futuro do Brasil!</strong> 🇧🇷✨
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
