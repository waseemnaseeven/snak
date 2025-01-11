"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Send, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface AgentResponse {
  text: string;
  timestamp: number;
  isTyping: boolean;
}

const StarknetAgent = () => {
  const [input, setInput] = useState("");
  const [currentResponse, setCurrentResponse] = useState<AgentResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showLoadingMessage, setShowLoadingMessage] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (isLoading) {
      timeoutId = setTimeout(() => {
        setShowLoadingMessage(true);
      }, 5000);
    } else {
      setShowLoadingMessage(false);
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isLoading]);

  const formatResponse = (jsonString: string) => {
    try {
      const data = JSON.parse(jsonString);
      if (data.output?.[0]?.text) {
        // Remove JSON syntax and clean up the text
        const cleanText = data.output[0].text
          .replace(/\{"input":.*?"output":\[.*?"text":"|"\]\}$/g, '') // Remove JSON wrapper
          .replace(/\\n/g, '\n') // Convert \n to actual newlines
          .replace(/\\"/g, '"'); // Convert escaped quotes
        return cleanText;
      }
      return jsonString;
    } catch {
      return jsonString;
    }
  };

  const typeResponse = (response: AgentResponse) => {
    const text = response.text;
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      setCurrentResponse((prevResponse) => {
        if (!prevResponse) return prevResponse;
        return {
          ...prevResponse,
          text: text.slice(0, currentIndex + 1),
          isTyping: currentIndex < text.length - 1,
        };
      });

      currentIndex++;
      if (currentIndex >= text.length) {
        clearInterval(typingInterval);
      }
    }, 10);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setIsLoading(true);
    setShowLoadingMessage(false);

    const newResponse = {
      text: "",
      timestamp: Date.now(),
      isTyping: true,
    };

    setCurrentResponse(newResponse);

    try {
      const response = await fetch("/api/agent/request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "test",
        },
        body: JSON.stringify({
          request: input,
        }),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();
      const formattedText = formatResponse(JSON.stringify(data));
      typeResponse({ ...newResponse, text: formattedText });

    } catch (error) {
      console.error("Error details:", error);
      const errorMessage = process.env.NODE_ENV === 'development' 
        ? `Error: ${error instanceof Error ? error.message : 'Unknown error'}`
        : "Sorry, there was an error processing your request. Please try again.";
      
      typeResponse({
        ...newResponse,
        text: errorMessage,
      });
    } finally {
      setIsLoading(false);
      setInput("");
    }
  };
  
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50 flex items-center justify-center px-4">
      <div className="w-full max-w-lg -mt-32 flex flex-col gap-4 md:gap-8">
        <div className="flex items-center gap-3 md:gap-4 px-2 md:px-0">
          <div className="relative w-8 h-8 md:w-10 md:h-10">
            <Image
              src="https://pbs.twimg.com/profile_images/1834202903189618688/N4J8emeY_400x400.png"
              alt="Starknet Logo"
              fill
              className="rounded-full object-cover"
            />
          </div>
          <h1 className="text-lg md:text-2xl font-semibold text-white">
            Starknet Agent
          </h1>
        </div>

        <Card className="w-full bg-neutral-900 border-neutral-800 shadow-xl">
          <CardContent className="p-3 md:p-6 space-y-4 md:space-y-6">
            <form onSubmit={handleSubmit} className="relative">
              <Input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full bg-neutral-800 border-neutral-700 text-neutral-100 pr-12 focus:ring-2 focus:ring-blue-500 text-sm md:text-base py-2 md:py-3"
                placeholder="Type your request..."
                disabled={isLoading}
              />
              <Button
                type="submit"
                size="sm"
                className="absolute right-2 top-1/2 -translate-y-1/2 hover:scale-110 transition-all"
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader2 className="h-3 w-3 md:h-4 md:w-4 animate-spin" />
                ) : (
                  <Send className="h-3 w-3 md:h-4 md:w-4" />
                )}
              </Button>
            </form>

            {currentResponse && (
              <Alert className="bg-neutral-800 border-neutral-700">
                <AlertDescription className="text-xs md:text-sm text-neutral-200 font-mono whitespace-pre-wrap break-words leading-relaxed">
                  {showLoadingMessage ? "Processing..." : currentResponse.text}
                  {(currentResponse.isTyping || isLoading) && (
                    <span className="animate-pulse ml-1">▋</span>
                  )}
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StarknetAgent;