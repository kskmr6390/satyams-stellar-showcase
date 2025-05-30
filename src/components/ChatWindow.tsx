
import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const ChatWindow = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Satyam AI. How can I help you today? Feel free to ask about my experience, projects, or anything else!",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [showApiKeyInput, setShowApiKeyInput] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessageToGemini = async (message: string) => {
    if (!apiKey) {
      return "Please provide your Google Gemini API key first.";
    }

    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `You are Satyam Kumar, a Senior Backend Engineer with 6+ years of experience. Answer questions about your professional background, skills, and projects based on this information:

Professional Experience:
- Senior Backend Engineer at Entropik (2021-Present): Led team of 5 developers, built Qatalyst AI platform, reduced latency by 90%, improved accuracy by 30%
- Associate Software Engineer at Teamlease (2019-2021): Automated workflows, refactored legacy systems, improved efficiency by 70%

Key Skills: Python, FastAPI, Django, AWS, Elasticsearch, LangChain, SQL Server, Docker, Microservices

Notable Achievements:
- Developer of the Month at Entropik
- Team Leadership Excellence
- Performance Optimization Champion (90% latency reduction, 30% accuracy improvement, 25% cost reduction)

Major Projects:
- Qatalyst: AI-powered market research platform
- RAG system using LangChain and LLMs
- Hybrid semantic + keyword search engine
- Video processing pipelines with AWS Lambda

Respond as Satyam in first person, being professional yet approachable. Keep responses concise and relevant.

User question: ${message}`
            }]
          }]
        })
      });

      if (!response.ok) {
        throw new Error('Failed to get response from Gemini');
      }

      const data = await response.json();
      return data.candidates[0]?.content?.parts[0]?.text || "Sorry, I couldn't process your request right now.";
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      return "Sorry, I'm having trouble connecting right now. Please check your API key or try again later.";
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    const aiResponse = await sendMessageToGemini(inputValue);

    const aiMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: aiResponse,
      sender: 'ai',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, aiMessage]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleApiKeySubmit = () => {
    if (apiKey.trim()) {
      setShowApiKeyInput(false);
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-110"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-96 h-[500px] bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold">Satyam AI</h3>
              <p className="text-sm opacity-90">Backend Engineer Assistant</p>
            </div>
          </div>

          {/* API Key Input */}
          {showApiKeyInput && (
            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border-b border-yellow-200 dark:border-yellow-800">
              <p className="text-sm text-yellow-800 dark:text-yellow-200 mb-2">
                Enter your Google Gemini API key to start chatting:
              </p>
              <div className="flex gap-2">
                <input
                  type="password"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder="Enter API key..."
                  className="flex-1 px-3 py-2 text-sm border border-yellow-300 dark:border-yellow-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-slate-700 dark:text-white"
                />
                <button
                  onClick={handleApiKeySubmit}
                  className="px-4 py-2 bg-purple-600 text-white text-sm rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Set
                </button>
              </div>
            </div>
          )}

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.sender === 'ai' && (
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-white'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                </div>
                {message.sender === 'user' && (
                  <div className="w-8 h-8 bg-slate-300 dark:bg-slate-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3 justify-start">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-slate-100 dark:bg-slate-700 p-3 rounded-2xl">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-slate-200 dark:border-slate-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                className="flex-1 px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-slate-700 dark:text-white"
                disabled={isLoading || showApiKeyInput}
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading || !inputValue.trim() || showApiKeyInput}
                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWindow;
