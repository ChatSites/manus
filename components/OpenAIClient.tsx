"use client";
import React, { useState, useEffect } from 'react';

interface OpenAIClientProps {
  onMessageResponse: (response: string) => void;
  userMessage: string;
  onProcessingStateChange: (isProcessing: boolean) => void;
}

const OpenAIClient: React.FC<OpenAIClientProps> = ({
  onMessageResponse,
  userMessage,
  onProcessingStateChange
}) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const processMessage = async () => {
      // Skip if no message or already processing
      if (!userMessage || isProcessing) return;
      
      try {
        setIsProcessing(true);
        onProcessingStateChange(true);
        setError(null);
        
        const response = await fetch('/api/openai', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: userMessage }),
        });
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Error communicating with AI service');
        }
        
        const data = await response.json();
        onMessageResponse(data.response);
      } catch (err) {
        console.error('Error processing message:', err);
        setError((err as Error).message || 'An unexpected error occurred');
        onMessageResponse("I'm sorry, I encountered an error processing your request. Please try again later.");
      } finally {
        setIsProcessing(false);
        onProcessingStateChange(false);
      }
    };
    
    if (userMessage) {
      processMessage();
    }
  }, [userMessage, onMessageResponse, onProcessingStateChange]);

  // This component doesn't render anything visible
  return null;
};

export default OpenAIClient;
