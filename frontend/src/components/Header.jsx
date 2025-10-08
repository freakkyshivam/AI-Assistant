
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { Sparkles, Search, Youtube, Globe, MessageCircle, Mic, Languages, Zap, ChevronRight, Brain, Cpu } from 'lucide-react';
export default function App() {

      
    

  return (
    <header>
     <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-2xl border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative">
                <Cpu className="w-8 h-8 text-blue-400 group-hover:rotate-180 transition-transform duration-700" />
                <div className="absolute inset-0 bg-blue-400/40 blur-xl rounded-full group-hover:bg-blue-400/60 transition-all"></div>
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Ai-shika
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="hover:text-blue-400 transition-colors font-medium relative group">
                Features
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all"></span>
              </a>
              <a href="#how" className="hover:text-cyan-400 transition-colors font-medium relative group">
                How It Works
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all"></span>
              </a>
              <a href="#languages" className="hover:text-purple-400 transition-colors font-medium relative group">
                Languages
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all"></span>
              </a>
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="relative group bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2.5 rounded-full font-semibold overflow-hidden">
                    <span className="relative z-10">Sign In</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton 
                  appearance={{
                    elements: {
                      avatarBox: "w-10 h-10 ring-2 ring-blue-400 hover:ring-purple-400 transition-all"
                    }
                  }}
                />
              </SignedIn>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}