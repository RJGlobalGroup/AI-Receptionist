import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User } from 'lucide-react';

interface Message {
  id: number;
  sender: 'bot' | 'user';
  text: string;
}

const CONVERSATION_SCRIPT: Message[] = [
  { id: 1, sender: 'user', text: "Hi, I'm interested in booking a consultation." },
  { id: 2, sender: 'bot', text: "Hello! I'd be happy to help with that. What day works best for you this week?" },
  { id: 3, sender: 'user', text: "How about Thursday afternoon?" },
  { id: 4, sender: 'bot', text: "I have an opening at 2:00 PM and 3:30 PM EST on Thursday. Do either of those work?" },
  { id: 5, sender: 'user', text: "3:30 PM is perfect." },
  { id: 6, sender: 'bot', text: "Great! I've locked in 3:30 PM EST on Thursday. I'll send a calendar invite shortly. Is there anything specific you'd like to discuss?" },
];

export const DemoChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const startDemo = () => {
    if (hasStarted) return;
    setHasStarted(true);
    setCurrentStep(0);
    setMessages([]);
  };

  useEffect(() => {
    if (!hasStarted) return;

    if (currentStep < CONVERSATION_SCRIPT.length) {
      const msg = CONVERSATION_SCRIPT[currentStep];
      
      const typingDelay = msg.sender === 'bot' ? 1000 : 500;
      const readingDelay = 1000;

      setIsTyping(true);
      
      const timer = setTimeout(() => {
        setIsTyping(false);
        setMessages(prev => [...prev, msg]);
        setCurrentStep(prev => prev + 1);
      }, typingDelay + (currentStep === 0 ? 0 : readingDelay)); // Fast start for first msg

      return () => clearTimeout(timer);
    }
  }, [currentStep, hasStarted]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20">
      {/* Phone/Chat UI */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto w-full max-w-md"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-purple-600 rounded-[2.5rem] blur opacity-30"></div>
        <div className="relative bg-black border border-gray-800 rounded-[2rem] overflow-hidden shadow-2xl h-[600px] flex flex-col">
          {/* Header */}
          <div className="bg-[#075e54] p-4 flex items-center gap-3 text-white shadow-md z-10">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Bot size={24} />
            </div>
            <div>
              <h3 className="font-semibold">RJ Sales Agent</h3>
              <p className="text-xs text-white/80">Online 24/7</p>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 bg-[#0b141a] p-4 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-gray-800">
             {/* Background Pattern */}
             <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat"></div>
            
            <AnimatePresence>
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] p-3 rounded-lg text-sm relative z-10 ${
                      msg.sender === 'user' 
                        ? 'bg-[#005c4b] text-white rounded-tr-none' 
                        : 'bg-[#202c33] text-white rounded-tl-none'
                    }`}
                  >
                    {msg.text}
                    <span className="text-[10px] text-gray-400 block text-right mt-1">
                      {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {isTyping && (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                className="flex justify-start"
              >
                <div className="bg-[#202c33] p-3 rounded-lg rounded-tl-none flex gap-1 items-center">
                  <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-75"></span>
                  <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-150"></span>
                </div>
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="bg-[#202c33] p-3 flex items-center gap-2 border-t border-gray-800 z-10">
            <div className="flex-1 bg-[#2a3942] rounded-full h-10 px-4 flex items-center text-gray-400 text-sm">
              Try sending a message...
            </div>
            <button 
                onClick={startDemo}
                className="w-10 h-10 bg-[#00a884] rounded-full flex items-center justify-center text-white hover:bg-[#008f72] transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Description */}
      <motion.div 
         initial={{ opacity: 0, x: 30 }}
         whileInView={{ opacity: 1, x: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.8 }}
         className="space-y-6"
      >
        <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center text-green-400 mb-4">
          <MessageCircle size={28} />
        </div>
        <h2 className="text-4xl font-bold">Experience Lightning-Fast Response Times</h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          See how our AI agents handle complex booking flows, answer questions, and nurture leads in real-time. No more waiting hours for an email reply.
        </p>
        
        <ul className="space-y-4 mt-6">
          {[
            'Handle multiple conversations simultaneously',
            'Seamless human handoff when needed',
            'Context-aware responses based on CRM data',
            'Customizable tone and personality'
          ].map((item, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-brand-500/20 flex items-center justify-center text-brand-500">
                <CheckCircle2 size={14} />
              </div>
              <span className="text-gray-300">{item}</span>
            </li>
          ))}
        </ul>

        <div className="pt-8">
            <button 
                onClick={startDemo}
                className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors mr-4"
            >
                {hasStarted ? "Restart Demo" : "Start Live Demo"}
            </button>
            <button className="text-white hover:text-brand-400 font-medium transition-colors">
                Book Full Consultation →
            </button>
        </div>
      </motion.div>
    </div>
  );
};

import { MessageCircle, CheckCircle2 } from 'lucide-react';
