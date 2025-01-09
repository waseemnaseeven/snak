"use client"

import React, { useState, useEffect } from 'react';
import { Send, Loader2 } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface AgentResponse {
  text: string;
  timestamp: number;
  isTyping: boolean;
}

interface ApiResponse {
  message: string;
  statusCode: number;
  data: {
    input: string;
    output: Array<{
      index: number;
      type: string;
      text: string;
    }>;
  };
}

const StarknetAgent = () => {
  const [input, setInput] = useState('');
  const [responses, setResponses] = useState<AgentResponse[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const typeResponse = (response: AgentResponse, index: number) => {
    const text = response.text;
    let currentIndex = 0;
    
    const typingInterval = setInterval(() => {
      setResponses(prevResponses => {
        const newResponses = [...prevResponses];
        const currentResponse = { ...newResponses[index] };
        currentResponse.text = text.slice(0, currentIndex + 1);
        currentResponse.isTyping = currentIndex < text.length - 1;
        newResponses[index] = currentResponse;
        return newResponses;
      });

      currentIndex++;
      if (currentIndex >= text.length) {
        clearInterval(typingInterval);
      }
    }, 30);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setIsLoading(true);
    
    const newResponse = {
      text: '',
      timestamp: Date.now(),
      isTyping: true
    };

    setResponses(prev => [...prev, newResponse]);
    
    try {
      const response = await fetch('/api/agent/request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'test'
        },
        body: JSON.stringify({
          request: input
        })
      });

      const data: ApiResponse = await response.json();
      
      // Get the text from the first output item
      const responseText = data.data.output[0].text.trim();
      typeResponse({ ...newResponse, text: responseText }, responses.length);
    } catch (error) {
      typeResponse({ 
        ...newResponse, 
        text: 'Sorry, there was an error processing your request.' 
      }, responses.length);
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
      setInput('');
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50 flex flex-col items-center p-4 md:pt-48 pt-8">
      <div className="w-full max-w-lg flex flex-col gap-4 md:gap-8">
        {/* Header */}
        <div className="flex items-center gap-3 md:gap-4">
          <img 
            src="https://pbs.twimg.com/profile_images/1656626983617323010/xzIYc6hK_400x400.png"
            alt="Starknet Logo" 
            className="w-8 h-8 md:w-10 md:h-10 rounded-full"
          />
          <h1 className="text-xl md:text-2xl font-semibold text-white">Starknet Agent</h1>
        </div>

        {/* Main Interface */}
        <Card className="w-full bg-neutral-900 border-neutral-800 shadow-xl">
          <CardContent className="p-3 md:p-6 space-y-4 md:space-y-6">
            {/* Input Form */}
            <form onSubmit={handleSubmit} className="relative">
              <Input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full bg-neutral-800 border-neutral-700 text-neutral-100 pr-12 focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
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

            {/* Response History */}
            <div className="space-y-2 md:space-y-3">
              {responses.map((response) => (
                <Alert 
                  key={response.timestamp} 
                  className="bg-neutral-800 border-neutral-700"
                >
                  <AlertDescription 
                    className="text-xs md:text-sm text-neutral-200 font-mono break-words"
                  >
                    {response.text}
                    {response.isTyping && (
                      <span className="animate-pulse">▋</span>
                    )}
                  </AlertDescription>
                </Alert>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StarknetAgent;