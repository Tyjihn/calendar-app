"use client";

import { useState } from "react";
import { ClipboardList, ChevronDown, Trash2 } from "lucide-react";

export default function TaskListView() {
    const isTask = true;
    const [expanded, setExpanded] = useState(false);
    return (
        <div className="flex flex-col h-full min-h-0">
            <div className="flex-1 min-h-0 overflow-y-auto simple-scroll flex flex-col gap-3">
                {/* Tasks Header */}
                <div className="flex items-center font-semibold text-lg gap-2">
                    <ClipboardList size={24} />Assignments / Exams (5)
                </div>
                {/* Task Card */}
                <div className="rounded-lg border border-gray-300 py-2">
                    <div className="flex items-center gap-5 p-1 px-4 cursor-pointer select-none" onClick={() => setExpanded(!expanded)}>
                        {isTask && (
                            <button type="button" aria-label="Done"
                                className="w-6 h-6 rounded-full border-2 border-gray-300 shrink-0 cursor-pointer hover:border-gray-500" />
                        )}
                        <div className="flex-1 min-w-0">
                            <p className="truncate">Math HW</p>
                            <p className="text-xs text-gray-500">assignment * Due Jun 26</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <button type="button" aria-label="Expand" className="shrink-0 text-gray-600 cursor-pointer
                                w-7 h-7 rounded-full bg-white hover:bg-gray-200 flex items-center justify-center">
                                <ChevronDown size={16} className={`transition-transform ${expanded ? 'rotate-180' : ''}`} />
                            </button>
                            <button type="button" onClick={() => {}} 
                                aria-label="Delete" className="shrink-0 text-red-700 cursor-pointer
                                    w-7 h-7 rounded-full bg-white hover:bg-gray-200 flex items-center justify-center">
                                <Trash2 size={16}/>
                            </button>
                        </div>
                    </div>
                    {/* Expanded Card Section */}
                    {expanded && (
                        <div className="p-2 pl-15 flex flex-col gap-3 text-sm text-gray-600">
                            <div className="flex items-center gap-3">
                                <button type="button" aria-label="Done"
                                    className="w-5 h-5 rounded-full border-2 border-gray-300 
                                        shrink-0 cursor-pointer hover:border-gray-500" onClick={() => {}}/>
                                        Read Chapter 4
                            </div>
                            <div className="flex items-center gap-3">
                                <button type="button" aria-label="Done"
                                    className="w-5 h-5 rounded-full border-2 border-gray-300 
                                        shrink-0 cursor-pointer hover:border-gray-500" onClick={() => {}}/>
                                        Finish Reading Response
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}