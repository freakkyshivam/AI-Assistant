import React, { useState, useEffect } from 'react';
import { Sparkles, Search, Youtube, Globe, MessageCircle, Mic, Languages, Zap, ChevronRight, Brain, Cpu } from 'lucide-react';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const features = [
    {
      icon: <Youtube className="w-8 h-8" />,
      title: "YouTube Search",
      description: "Search and find videos on YouTube instantly. Just ask Ai-shika to find any content you need.",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Google Search",
      description: "Get real-time information from Google. Ask anything and get accurate results instantly.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Languages className="w-8 h-8" />,
      title: "Multilingual Support",
      description: "Talk in Hindi, English, or Hinglish. Ai-shika understands and responds in your preferred language.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Natural Conversation",
      description: "Just say anything! Chat naturally like talking to a friend. Ai-shika understands context and intent.",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: <Mic className="w-8 h-8" />,
      title: "Voice Commands",
      description: "Speak naturally in any language. Ai-shika listens and responds to your voice commands.",
      gradient: "from-orange-500 to-yellow-500"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Smart AI",
      description: "Powered by advanced AI that learns and adapts to provide you with the best assistance.",
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Grid Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950"></div>
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        ></div>
        
        {/* Glowing Orbs */}
        <div 
          className="absolute w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
          style={{
            top: '20%',
            left: '10%',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        ></div>
        <div 
          className="absolute w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
          style={{
            top: '60%',
            right: '10%',
            transform: `translate(${-mousePosition.x * 0.03}px, ${-mousePosition.y * 0.03}px)`
          }}
        ></div>
        <div 
          className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
          style={{
            top: '40%',
            left: '50%',
            transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`
          }}
        ></div>
      </div>

   
      

      {/* Hero Section */}
      <div className="relative pt-32 pb-24 px-6 z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-xl px-5 py-2.5 rounded-full mb-8 border border-blue-400/30 hover:border-blue-400/50 transition-all">
            <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
            <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Next-Gen AI Assistant
            </span>
          </div>
          
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
              Ai-shika
            </span>
          </h1>
          
          <div className="relative inline-block mb-6">
            <h2 className="text-3xl md:text-4xl font-light text-gray-300">
              Your AI-Powered Assistant
            </h2>
            <div className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-6 max-w-3xl mx-auto leading-relaxed">
            Search YouTube & Google • Understand Hindi, English & Hinglish • Natural Conversations
          </p>
          
          <p className="text-lg text-blue-300/80 mb-12 max-w-2xl mx-auto">
            बस कुछ भी बोलो! Just say anything! Ai-shika samajhti hai aur help karti hai 🚀
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="group relative bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 px-10 py-4 rounded-full font-bold text-lg overflow-hidden hover:scale-105 transition-transform">
                  <span className="relative z-10 flex items-center gap-2">
                    Start Using Ai-shika
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <button className="group relative bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 px-10 py-4 rounded-full font-bold text-lg overflow-hidden hover:scale-105 transition-transform">
                <span className="relative z-10 flex items-center gap-2">
                  Open Ai-shika
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            </SignedIn>
            
          </div>

          {/* Floating Feature Pills */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-16">
            <div className="flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-xl px-4 py-2.5 rounded-full border border-blue-400/30 hover:border-blue-400/50 transition-all hover:scale-105">
              <Search className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium">Smart Search</span>
            </div>
            <div className="flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl px-4 py-2.5 rounded-full border border-purple-400/30 hover:border-purple-400/50 transition-all hover:scale-105">
              <Languages className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium">3 Languages</span>
            </div>
            <div className="flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-xl px-4 py-2.5 rounded-full border border-cyan-400/30 hover:border-cyan-400/50 transition-all hover:scale-105">
              <Mic className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium">Voice Enabled</span>
            </div>
            <div className="flex items-center gap-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-xl px-4 py-2.5 rounded-full border border-indigo-400/30 hover:border-indigo-400/50 transition-all hover:scale-105">
              <Brain className="w-4 h-4 text-indigo-400" />
              <span className="text-sm font-medium">AI Powered</span>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-blue-400 font-semibold text-sm tracking-widest uppercase">Capabilities</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Powerful AI Features
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need in one intelligent assistant
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-8 hover:border-blue-400/50 transition-all hover:transform hover:scale-105 cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className={`relative bg-gradient-to-br ${feature.gradient} bg-opacity-10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl"></div>
                  {feature.icon}
                </div>
                
                <h3 className="relative text-2xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="relative text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Language Support Section */}
      <div id="languages" className="py-24 px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block mb-4">
            <span className="text-purple-400 font-semibold text-sm tracking-widest uppercase">Multilingual</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Speak Your Language
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-16">
            Ai-shika understands you, no matter how you speak
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-orange-900/20 to-red-900/20 backdrop-blur-xl rounded-3xl p-8 border border-orange-500/30 hover:border-orange-400/50 transition-all hover:scale-105 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative text-5xl mb-4">🇮🇳</div>
              <h3 className="relative text-2xl font-bold mb-3">Hindi</h3>
              <p className="relative text-gray-400">"Ai-shika, YouTube par coding tutorials dhundo"</p>
            </div>
            
            <div className="group relative bg-gradient-to-br from-blue-900/20 to-cyan-900/20 backdrop-blur-xl rounded-3xl p-8 border border-blue-500/30 hover:border-blue-400/50 transition-all hover:scale-105 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative text-5xl mb-4">🌍</div>
              <h3 className="relative text-2xl font-bold mb-3">English</h3>
              <p className="relative text-gray-400">"Ai-shika, search for cooking recipes on Google"</p>
            </div>
            
            <div className="group relative bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/30 hover:border-purple-400/50 transition-all hover:scale-105 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative text-5xl mb-4">🔄</div>
              <h3 className="relative text-2xl font-bold mb-3">Hinglish</h3>
              <p className="relative text-gray-400">"Ai-shika, YouTube pe latest songs search karo"</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 blur-3xl"></div>
          <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-2xl border border-blue-400/30 rounded-3xl p-12 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-4">
                Join thousands of users using Ai-shika every day
              </p>
              <p className="text-lg text-blue-300/80 mb-8">
                आज ही शुरू करें - It's free and easy!
              </p>
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="relative group bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 px-12 py-4 rounded-full font-bold text-lg overflow-hidden hover:scale-105 transition-transform">
                    <span className="relative z-10">Start Free Now</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <button className="relative group bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 px-12 py-4 rounded-full font-bold text-lg overflow-hidden hover:scale-105 transition-transform">
                  <span className="relative z-10">Continue to Dashboard</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
              </SignedIn>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-blue-500/20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <Cpu className="w-6 h-6 text-blue-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Ai-shika
              </span>
            </div>
            <div className="text-gray-400 text-center">
              <p>© 2025 Ai-shika. Your multilingual AI assistant.</p>
              <p className="text-sm mt-1">Powered by Advanced AI Technology</p>
              <p className="text-sm mt-1">Made By Shivam Chaudhary</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">Privacy</a>
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">Terms</a>
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">Support</a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}