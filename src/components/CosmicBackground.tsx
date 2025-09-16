import { useEffect, useState } from "react";

const CosmicBackground = () => {
  const [stars, setStars] = useState<{ id: number; x: number; y: number; size: number; delay: number }[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 50; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          delay: Math.random() * 3,
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-background" />
      
      {/* Mystical Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-mystical" />
      
      {/* Animated Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-secondary animate-pulse-glow"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
      
      {/* Floating Constellation Elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent rounded-full animate-float" style={{ animationDelay: "0s" }} />
      <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-primary rounded-full animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-secondary rounded-full animate-float" style={{ animationDelay: "4s" }} />
      <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-accent rounded-full animate-float" style={{ animationDelay: "1s" }} />
    </div>
  );
};

export default CosmicBackground;