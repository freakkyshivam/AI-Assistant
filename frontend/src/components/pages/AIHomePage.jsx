import React, { useEffect } from "react";
import axios from "axios";
import { useAuth, useUser } from "@clerk/clerk-react";

const AIHomePage = () => {
  const { getToken } = useAuth();
  const { user } = useUser();

  useEffect(() => {
    
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.lang = "en-IN";

    
    recognition.onresult = async (e) => {
      const userInput = e.results[e.results.length - 1][0].transcript.trim();
      console.log("🎙 Heard:", userInput);

      try {
        const token = await getToken();
        const assistantName = "Jarvish";
        const userName = user?.fullName || "User";
        const response = await axios.post(
          "http://localhost:3000/api/ask-to-ai",
          { userInput, assistantName, userName },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
          }
        );

        console.log("🤖 AI Response:", response.data);

        const parsed = response.data;
        if (parsed?.response) {
          const speech = new SpeechSynthesisUtterance(parsed.response);
          window.speechSynthesis.speak(speech);
        }

      } catch (error) {
        console.error("❌ Error talking to AI:", error);
      }
    };

    recognition.start();
    console.log("🎧 Voice recognition started...");
    return () => {
      recognition.stop();
      console.log("🛑 Voice recognition stopped.");
    };
  }, [getToken, user]);  

  return (
    <div className="min-h-screen bg-black text-white">

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
      <div className="relative z-10 min-h-screen p-6 mt-[4rem]">
<h2 className="text-xl font-semibold text-center mt-6">
        🎤 Voice Assistant Active
      </h2>
      <p className="text-center text-gray-600">Say something like “Open Instagram”</p>
      </div>
      
    </div>
  );
};

export default AIHomePage;
