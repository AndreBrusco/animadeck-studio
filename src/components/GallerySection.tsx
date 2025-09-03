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
      title: "Congress Building Level",
      description: "Navigate through the iconic Brazilian Congress building",
      category: "Gameplay"
    },
    {
      type: "screenshot",
      title: "Character Selection",
      description: "Choose your political adventure style",
      category: "UI/UX"
    },
    {
      type: "video",
      title: "Gameplay Trailer",
      description: "Watch Capi Senador in action",
      category: "Video"
    },
    {
      type: "screenshot",
      title: "Political Challenges",
      description: "Solve complex legislative puzzles",
      category: "Gameplay"
    },
    {
      type: "screenshot",
      title: "Brazilian Landmarks",
      description: "Explore pixelated versions of famous locations",
      category: "Environment"
    },
    {
      type: "video",
      title: "Developer Interview",
      description: "Behind the scenes with the development team",
      category: "Video"
    }
  ];

  const categories = ["All", "Gameplay", "UI/UX", "Environment", "Video"];

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Gallery & Media
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            See the Game in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore screenshots, videos, and behind-the-scenes content from 
            Capi Senador's development journey.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
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
                            {item.type === "video" ? "Video Content" : "Screenshot"}
                          </p>
                        </div>
                        
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <Button size="sm" className="bg-white text-primary hover:bg-blue-50">
                            <Maximize2 className="w-4 h-4 mr-2" />
                            View Full
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
        <div className="mt-16">
          <Card className="max-w-4xl mx-auto overflow-hidden">
            <CardContent className="p-0">
              <div className="relative aspect-video bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-white/30 transition-colors cursor-pointer">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Official Game Trailer</h3>
                  <p className="text-white/80">
                    Watch the complete gameplay experience in our official trailer
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"></div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Want to See More?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Follow our development journey on social media for the latest updates, 
            behind-the-scenes content, and exclusive previews.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg">
              Follow on Twitter
            </Button>
            <Button variant="outline" size="lg">
              Join Discord
            </Button>
            <Button size="lg" className="gaming-gradient">
              Download Press Kit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;