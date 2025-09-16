import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sparkles, Stars } from "lucide-react";

interface HoroscopeFormProps {
  onSubmit: (data: { name: string; dob: string }) => void;
  isLoading: boolean;
}

const HoroscopeForm = ({ onSubmit, isLoading }: HoroscopeFormProps) => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    
    onSubmit({ name: name.trim(), dob: dob.trim() });
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-gradient-card backdrop-blur-sm border border-border rounded-2xl p-8 shadow-card">
        <div className="text-center mb-6">
          <div className="flex justify-center mb-4">
            <Sparkles className="w-8 h-8 text-secondary animate-pulse-glow" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Discover Your Cosmic Truth</h2>
          <p className="text-muted-foreground">Enter your details to unlock the mysteries of the universe</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground font-medium">
              Your Name
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:ring-primary focus:border-primary"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="dob" className="text-foreground font-medium">
              Date of Birth (Optional)
            </Label>
            <Input
              id="dob"
              type="text"
              placeholder="YYYY-MM-DD (e.g., 1999-09-15)"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:ring-primary focus:border-primary"
            />
            <p className="text-xs text-muted-foreground">
              Leave empty to get horoscope based on your name's first letter
            </p>
          </div>

          <Button 
            type="submit" 
            disabled={!name.trim() || isLoading}
            className="w-full bg-gradient-cosmic text-primary-foreground font-semibold py-3 rounded-xl hover:shadow-glow transition-all duration-300 disabled:opacity-50"
          >
            {isLoading ? (
              <div className="flex items-center">
                <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
                Reading the Stars...
              </div>
            ) : (
              <div className="flex items-center">
                <Sparkles className="w-4 h-4 mr-2" />
                Reveal My Horoscope
              </div>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default HoroscopeForm;