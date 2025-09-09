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
                                            <p className="text-gray-700 font-medium">Encontrar todos os votos escondidos ao longo de Brasília!</p>
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
                                            <p className="text-gray-700 font-medium">Desviar das fraude urnas!</p>
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
                                            <p className="text-gray-700 font-medium">Encontrar com a Dra. Votânia</p>
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

                        {/* Imagem da Fase 1 */}
                        <div className="bg-gray-200 rounded-xl h-80 flex items-center justify-center border-2 border-blue-100">
                            <p className="text-gray-500 text-lg">Imagem da Fase 1</p>
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
                                    <Badge className="bg-green-600 text-white text-lg px-4 py-2 mr-4">
                                        Fase 2
                                    </Badge>
                                    <h2 className="text-3xl font-bold text-gray-900">
                                        O Projeto de Lei que vai mudar o Brasil!
                                    </h2>
                                </div>
                                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                    Nos túneis e corredores do Congresso, Capi encontra pistas de um <strong>Projeto de Lei (PL)</strong> capaz de melhorar a vida de milhões.
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
