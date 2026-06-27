"use client";

import { useState } from "react";
import { Sparkles, ArrowUp } from "lucide-react";

export default function ChatboxView(){
    const [input, setInput] = useState("");
    const messages = [
        { id: 1, role: "ai", text: "Hi! How can I help you plan your day?" },
        { id: 2, role: "user", text: "What's due tomorow?" },
    ];

    return (
        <div className="h-full flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-center gap-3">
                <Sparkles size={22}/><h1 className="font-semibold text-xl gap-2 py-3">CalendAIr</h1>
            </div>
            <div className="flex flex-col h-full min-h-0 p-2">
                {/* Conversation History */}
                <div className="flex-1 min-h-0 overflow-y-auto simple-scroll flex flex-col gap-2 p-1">
                    {messages.map((m) => (
                        <div key={m.id}
                        className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm ${
                            m.role === 'user' ? 'self-end bg-indigo-800 text-white' : 'self-start bg-gray-100 text-black'}`}>
                            {m.text}
                        </div>
                    ))}
                </div>
                {/* Input Prompt Box */}
                <div className="shrink-0 flex items-center gap-2 pt-2">
                    <input type="text" value={input} onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask me anything..."
                    className="flex-1 min-w-0 rounded-xl border border-gray-300 px-4 py-2
                        text-sm outline-none focus:border-gray-500"/>
                    <button type="button" aria-label="Send"
                        className="shrink-0 w-9 h-9 rounded-xl bg-indigo-800 text-white flex items-center justify-center hover:bg-indigo-600 cursor-pointer">
                        <ArrowUp size={18} />
                    </button>
                </div>
            </div>
        </div>


        
    );
}