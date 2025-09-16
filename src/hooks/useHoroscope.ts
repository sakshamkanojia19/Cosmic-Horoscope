
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

interface HoroscopeData {
  name?: string;
  dob?: string;
}

export const useHoroscope = () => {
  const [horoscope, setHoroscope] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const fetchHoroscope = async (data: HoroscopeData) => {
    setIsLoading(true);
    setError("");
    setHoroscope("");

    try {
      console.log("Sending request to:", "http://localhost:5670/webhook/Horoscope");
      console.log("Request data:", data);

      const response = await fetch("http://localhost:5670/webhook/Horoscope", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      console.log("Response status:", response.status);
      console.log("Response ok:", response.ok);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // ✅ Read once as text
      const rawResponse = await response.text();
      console.log("Raw response:", rawResponse);

      // ✅ Try parsing JSON from the raw text
      let horoscopeText: string;
      try {
        const parsed = JSON.parse(rawResponse);
        horoscopeText =
          typeof parsed === "string"
            ? parsed
            : parsed.horoscope || JSON.stringify(parsed);
      } catch {
        horoscopeText = rawResponse; // fallback to plain text
      }

      console.log("Horoscope text:", horoscopeText);
      setHoroscope(horoscopeText);

      toast({
        title: "✨ Horoscope Ready!",
        description: "Your cosmic reading has been revealed.",
      });
    } catch (err) {
      console.error("Fetch error:", err);
      const errorMessage =
        err instanceof Error ? err.message : "Sorry, something went wrong.";
      setError(errorMessage);
      setHoroscope("");

      toast({
        title: "Cosmic Connection Lost",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const clearHoroscope = () => {
    setHoroscope("");
    setError("");
  };

  return {
    horoscope,
    isLoading,
    error,
    fetchHoroscope,
    clearHoroscope,
  };
};



