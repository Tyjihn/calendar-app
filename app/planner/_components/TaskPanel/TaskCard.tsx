"use client";

import { ChevronDown, Trash2 } from "lucide-react";
import { Task } from "../types";
import { useState } from "react";

type TaskCardProps = { task: Task };

export default function TaskCard({ task }: TaskCardProps) {
    const isTask = true;
    const [isExpanded, setExpanded] = useState(false);

    return(
        <div className="rounded-lg border border-gray-300 py-2">
            <div className="flex items-center gap-3 px-5 cursor-pointer select-none" onClick={() => setExpanded(!isExpanded)}>
                {isTask && (
                    <button type="button" aria-label="Done"
                        className="w-5 h-5 rounded-full border-2 border-gray-300 shrink-0 cursor-pointer hover:border-gray-500" />
                )}
                <div className="flex-1 min-w-0">
                    <p className="truncate text-sm">{ task.title }</p>
                    <div className="w-[19ch] flex justify-between text-xs text-gray-500">
                        <span className="capitalize">{ task.type }</span>
                        <span>Due {new Date(task.dueDate).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</span>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <button type="button" aria-label="Expand" className="shrink-0 text-gray-600 cursor-pointer
                        w-6 h-6 rounded-full bg-white hover:bg-gray-200 flex items-center justify-center">
                        <ChevronDown size={14} className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>
                    <button type="button" onClick={() => {}} 
                        aria-label="Delete" className="shrink-0 text-red-700 cursor-pointer
                            w-6 h-6 rounded-full bg-white hover:bg-gray-200 flex items-center justify-center">
                        <Trash2 size={14}/>
                    </button>
                </div>
            </div>
            {/* Expanded Card Section */}
            {isExpanded && (
                <div className="p-2 pl-15 flex flex-col gap-4 mt-2 text-xs text-gray-600">
                    { task.subtasks.map((subtask, index) => (
                        <div key={index} className="flex items-center gap-3">
                            <button type="button" aria-label="Done"
                                className="w-4 h-4 rounded-full border-2 border-gray-300 
                                shrink-0 cursor-pointer hover:border-gray-500" onClick={() => {}}/>
                            { subtask }
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}