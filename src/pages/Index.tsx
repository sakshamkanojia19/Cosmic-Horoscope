import { useState } from "react";
import CosmicBackground from "@/components/CosmicBackground";
import HoroscopeForm from "@/components/HoroscopeForm";
import HoroscopeResult from "@/components/HoroscopeResult";
import { useHoroscope } from "@/hooks/useHoroscope";
import { Button } from "@/components/ui/button";
import { Sparkles, Star, RotateCcw } from "lucide-react";
import cosmicHero from "@/assets/cosmic-hero.jpg";

const Index = () => {
  const { horoscope, isLoading, fetchHoroscope, clearHoroscope } = useHoroscope();
  const [submittedName, setSubmittedName] = useState("");

  const handleFormSubmit = (data: { name: string; dob: string }) => {
    setSubmittedName(data.name);
    fetchHoroscope(data);
  };

  const handleNewReading = () => {
    clearHoroscope();
    setSubmittedName("");
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Cosmic Background Effects */}
      <CosmicBackground />
      
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${cosmicHero})` }}
      />
      
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header Section */}
        <header className="text-center mb-12 animate-fade-in-up">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-cosmic rounded-full flex items-center justify-center animate-pulse-glow">
                <Star className="w-10 h-10 text-primary-foreground animate-cosmic-rotation" />
              </div>
              <Sparkles className="w-6 h-6 text-secondary absolute -top-2 -right-2 animate-float" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 bg-gradient-cosmic bg-clip-text text-transparent">
            Cosmic Oracle
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Unlock the mysteries of the universe with AI-powered horoscope readings tailored just for you
          </p>
          
          <div className="flex items-center justify-center mt-6 space-x-4 text-accent">
            <Star className="w-4 h-4 animate-float" style={{ animationDelay: "0s" }} />
            <Star className="w-3 h-3 animate-float" style={{ animationDelay: "1s" }} />
            <Star className="w-5 h-5 animate-float" style={{ animationDelay: "2s" }} />
          </div>
        </header>

        {/* Main Content Area */}
        <main className="max-w-4xl mx-auto">
          {!horoscope ? (
            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <HoroscopeForm onSubmit={handleFormSubmit} isLoading={isLoading} />
            </div>
          ) : (
            <div className="space-y-8">
              <HoroscopeResult horoscope={horoscope} name={submittedName} />
              
              <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                <Button
                  onClick={handleNewReading}
                  variant="outline"
                  className="bg-background-secondary/50 border-border text-foreground hover:bg-muted hover:shadow-glow transition-all duration-300"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Get Another Reading
                </Button>
              </div>
            </div>
          )}
        </main>

        {/* Footer */}
        <footer className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <div className="flex items-center justify-center space-x-2 text-muted-foreground">
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-sm">
              Harness the power of artificial intelligence and ancient wisdom
            </span>
            <Sparkles className="w-4 h-4 text-secondary" />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
