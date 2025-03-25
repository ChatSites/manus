"use client";
import React, { useState, useEffect } from 'react';
import VoiceInterface from './VoiceInterface';
import OpenAIClient from './OpenAIClient';

interface Message {
  role: 'assistant' | 'user';
  content: string;
}

interface EnhancedAIAssistantProps {
  initialMessage?: string;
  brandColor?: string;
  brandName?: string;
  showDynamicContent?: (contentType: string) => void;
}

const EnhancedAIAssistant: React.FC<EnhancedAIAssistantProps> = ({
  initialMessage = "Hello! I'm your ChatSites assistant. How can I help you today?",
  brandColor = "purple",
  brandName = "ChatSites",
  showDynamicContent
}) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: initialMessage }
  ]);
  const [inputText, setInputText] = useState('');
  const [currentUserMessage, setCurrentUserMessage] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  
  // Initialize audio context
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const context = new (window.AudioContext || (window as any).webkitAudioContext)();
      setAudioContext(context);
      
      return () => {
        context.close();
      };
    }
  }, []);
  
  // Auto-scroll to bottom of messages
  useEffect(() => {
    const messagesContainer = document.querySelector('.messages-container');
    if (messagesContainer) {
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
  }, [messages]);

  // Handle user text input
  const handleSendMessage = () => {
    if (inputText.trim() === '') return;
    
    // Add user message
    setMessages(prev => [...prev, { role: 'user', content: inputText }]);
    setCurrentUserMessage(inputText);
    setInputText('');
    
    // Set thinking state
    setIsThinking(true);
  };

  // Handle key press in text input
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  // Handle transcription from voice input
  const handleTranscription = (text: string) => {
    setMessages(prev => [...prev, { role: 'user', content: text }]);
    setCurrentUserMessage(text);
    setIsThinking(true);
  };

  // Handle AI response
  const handleAIResponse = (response: string) => {
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsThinking(false);
    
    // Check for content triggers in the response
    if (response.toLowerCase().includes('booking') || response.toLowerCase().includes('appointment')) {
      showDynamicContent && showDynamicContent('booking');
    } else if (response.toLowerCase().includes('product') || response.toLowerCase().includes('shopping')) {
      showDynamicContent && showDynamicContent('product');
    } else if (response.toLowerCase().includes('video') || response.toLowerCase().includes('watch')) {
      showDynamicContent && showDynamicContent('video');
    }
    
    // Speak the response using Web Speech API
    speakResponse(response);
  };
  
  // Speak response using Web Speech API
  const speakResponse = (text: string) => {
    if ('speechSynthesis' in window) {
      setIsSpeaking(true);
      
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      utterance.volume = 1.0;
      
      // Get available voices and select a good one
      const voices = window.speechSynthesis.getVoices();
      const preferredVoice = voices.find(voice => 
        voice.name.includes('Google') || voice.name.includes('Female') || voice.name.includes('Samantha')
      );
      
      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }
      
      utterance.onend = () => {
        setIsSpeaking(false);
      };
      
      window.speechSynthesis.speak(utterance);
    }
  };

  // Start listening for voice input
  const startListening = () => {
    setIsListening(true);
    
    // Use the Web Speech API for voice recognition
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';
      
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        handleTranscription(transcript);
      };
      
      recognition.onerror = (event) => {
        console.error('Speech recognition error', event.error);
        setIsListening(false);
      };
      
      recognition.onend = () => {
        setIsListening(false);
      };
      
      recognition.start();
    } else {
      console.error('Speech recognition not supported in this browser');
      setIsListening(false);
    }
  };

  // Stop listening for voice input
  const stopListening = () => {
    setIsListening(false);
  };

  // Handle processing state change
  const handleProcessingStateChange = (isProcessing: boolean) => {
    setIsThinking(isProcessing);
  };

  return (
    <div className="enhanced-ai-assistant bg-black rounded-xl p-8 shadow-2xl border border-purple-800 max-w-2xl mx-auto">
      <div className="flex justify-center mb-8">
        <div className={`w-24 h-24 rounded-full bg-${brandColor}-600 ${isThinking || isSpeaking ? 'animate-pulse' : ''} flex items-center justify-center pulsating-orb`}>
          <div className={`w-20 h-20 rounded-full bg-${brandColor}-500 ${isThinking || isSpeaking ? 'animate-pulse' : ''} flex items-center justify-center`}>
            {isSpeaking && (
              <div className="voice-wave">
                <div className="voice-wave-bar"></div>
                <div className="voice-wave-bar"></div>
                <div className="voice-wave-bar"></div>
                <div className="voice-wave-bar"></div>
                <div className="voice-wave-bar"></div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="space-y-4 max-h-80 overflow-y-auto mb-6 messages-container">
        {messages.map((message, index) => (
          <div 
            key={index} 
            className={`bg-gray-800 rounded-lg p-4 ${message.role === 'user' ? 'ml-12' : ''}`}
          >
            <p className={`text-${message.role === 'assistant' ? `${brandColor}-300` : 'blue-300'} font-medium`}>
              {message.role === 'assistant' ? `${brandName} Assistant` : 'You'}
            </p>
            <p>{message.content}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-6 flex flex-col items-center">
        <VoiceInterface 
          onSpeechResult={() => {}}
          isListening={isListening}
          startListening={startListening}
          stopListening={stopListening}
        />
        
        <div className="mt-4 flex items-center w-full bg-gray-800 rounded-full p-2">
          <input 
            type="text" 
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me anything..." 
            className="flex-grow bg-transparent border-none focus:outline-none text-white px-4"
          />
          <button 
            onClick={handleSendMessage}
            className={`bg-${brandColor}-600 hover:bg-${brandColor}-700 rounded-full p-2 ml-2`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* OpenAI Client Integration */}
      <OpenAIClient
        userMessage={currentUserMessage}
        onMessageResponse={handleAIResponse}
        onProcessingStateChange={handleProcessingStateChange}
      />
    </div>
  );
};

export default EnhancedAIAssistant;
