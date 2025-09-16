import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Star, Moon } from "lucide-react";

interface HoroscopeResultProps {
  horoscope: string;
  name: string;
}

const HoroscopeResult = ({ horoscope, name }: HoroscopeResultProps) => {
  return (
    <div className="w-full max-w-2xl mx-auto animate-fade-in-up">
      <Card className="bg-gradient-card backdrop-blur-sm border border-border shadow-card">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <Moon className="w-12 h-12 text-accent animate-pulse-glow" />
              <Star className="w-4 h-4 text-secondary absolute -top-1 -right-1 animate-float" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-foreground flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5 text-secondary" />
            Your Cosmic Reading, {name}
            <Sparkles className="w-5 h-5 text-secondary" />
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-l-2 border-t-2 border-secondary/30 rounded-tl-lg" />
            <div className="absolute -top-2 -right-2 w-8 h-8 border-r-2 border-t-2 border-secondary/30 rounded-tr-lg" />
            <div className="absolute -bottom-2 -left-2 w-8 h-8 border-l-2 border-b-2 border-secondary/30 rounded-bl-lg" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-2 border-b-2 border-secondary/30 rounded-br-lg" />
            
            <div className="bg-background-secondary/50 rounded-xl p-6 border border-border/30">
              <p className="text-card-foreground leading-relaxed text-lg whitespace-pre-wrap">
                {horoscope}
              </p>
            </div>
          </div>
          
          <div className="mt-6 flex justify-center">
            <div className="flex items-center space-x-1 text-muted-foreground text-sm">
              <Star className="w-3 h-3 text-secondary" />
              <span>Powered by Cosmic AI</span>
              <Star className="w-3 h-3 text-secondary" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HoroscopeResult;