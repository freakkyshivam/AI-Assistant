import React, { useState } from 'react';
import axios from 'axios';
import { useAuth, useUser } from "@clerk/clerk-react";
import { User, Link, Sparkles, Cpu, ArrowLeft, Image } from "lucide-react";

const CreateAssistant = () => {
  const { getToken } = useAuth();
  const { user } = useUser();
  const [assistantName, setAssistantName] = useState("");
  const [assistantImage, setAssistantImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const token = await getToken();
      const name = user.fullName;
      const res = await axios.post(
        "http://localhost:3000/api/create-assistant",
        { assistantName, assistantImage, user, name },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true
        }
      );
      setAssistantName("");
      setAssistantImage("");
      console.log("✅ Assistant saved:", res.data.assistant);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Animated Background */}
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
        <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl top-20 left-10 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl bottom-20 right-10 animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <div className="w-full max-w-2xl">
          {/* Back Button */}
          <button 
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>

          {/* Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-2xl border border-blue-400/30 rounded-3xl p-8 md:p-12 shadow-2xl">
              
              {/* Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl mb-6 relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                  <Cpu className="relative w-10 h-10 text-blue-400 group-hover:rotate-180 transition-transform duration-700" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent mb-3">
                  Create Your Assistant
                </h1>
                <p className="text-gray-400 text-lg">
                  Customize your AI-powered assistant
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Assistant Name */}
                <div className="group">
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center">
                      <User className="w-4 h-4 text-blue-400" />
                    </div>
                    Assistant Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., My Personal Aishika"
                    required
                    value={assistantName}
                    onChange={(e) => setAssistantName(e.target.value)}
                    className="w-full px-5 py-4 bg-slate-800/50 border border-blue-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all hover:border-blue-400/40"
                  />
                </div>

                {/* Assistant Image */}
                <div className="group">
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
                      <Link className="w-4 h-4 text-purple-400" />
                    </div>
                    Assistant Image URL
                  </label>
                  <input
                    type="url"
                    placeholder="https://example.com/image.jpg"
                    value={assistantImage}
                    onChange={(e) => setAssistantImage(e.target.value)}
                    className="w-full px-5 py-4 bg-slate-800/50 border border-purple-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400/50 transition-all hover:border-purple-400/40"
                  />
                  <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                    <Image className="w-3 h-3" />
                    Optional: Add a custom image for your assistant
                  </p>
                </div>

                {/* Image Preview */}
                {assistantImage && (
                  <div className="flex flex-col items-center gap-3 p-6 bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-2xl border border-blue-500/20">
                    <p className="text-sm text-gray-400 font-medium">Preview</p>
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-xl group-hover:blur-2xl transition-all"></div>
                      <img 
                        src={assistantImage} 
                        alt="Assistant preview" 
                        className="relative w-32 h-32 rounded-2xl object-cover border-2 border-blue-400/50 shadow-2xl"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="hidden w-32 h-32 rounded-2xl bg-slate-800/50 border-2 border-red-400/50 items-center justify-center">
                        <p className="text-red-400 text-xs text-center px-2">Invalid Image URL</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* User Info Display */}
                {user && (
                  <div className="flex items-center gap-3 p-4 bg-slate-800/30 rounded-xl border border-cyan-500/20">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Creating as</p>
                      <p className="text-white font-semibold">{user.fullName || user.username}</p>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full relative group bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 px-8 py-4 rounded-xl font-bold text-lg overflow-hidden hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Creating...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-5 h-5" />
                        Create Assistant
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
              </form>

              {/* Info Box */}
              <div className="mt-6 p-4 bg-blue-500/5 border border-blue-500/20 rounded-xl">
                <p className="text-sm text-gray-400 text-center">
                  💡 Your assistant will have access to YouTube search, Google search, and multilingual support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAssistant;