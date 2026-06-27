"use client";

import { useState } from "react";
import TaskListView from "./TaskPanel/TaskListView";
import TodayView from "./TaskPanel/TodayView";
import ChatboxView from "./TaskPanel/ChatboxView";

export default function TaskPanel() {
    const [tab, setTab] = useState<"Tasks" | "Today" | "AI">("Tasks");
    const tabs = [
        { id: "Tasks", label: "Tasks"},
        { id: "Today", label: "Today"},
        { id: "AI", label: "AI" },
    ] as const;
    
    return (
        // 
        <div className="flex flex-col h-full text-black gap-4">
            {/* 3 Tab Buttons */}
            <div className="flex bg-indigo-100/50 h-10 p-1 rounded-lg gap-1">
                {tabs.map((t) => (
                    <button key={t.id} type="button" onClick={() => setTab(t.id)}
                        className={`flex-1 rounded-md px-3 font-sans transition cursor-pointer ${
                            tab === t.id ? 'bg-white font-semibold text-black shadow-sm' : 'text-gray-600 hover:font-[550]'
                        }`}>
                        {t.label}
                    </button>
                ))}
            </div>

            <div className="pl-3 flex-1 min-h-0">
                {tab === "Tasks" && <TaskListView />}
                {tab === "Today" && <TodayView />}
                {tab === "AI" && <ChatboxView />}
            </div>
        </div>
    );
}