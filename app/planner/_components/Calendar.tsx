"use client";

import { Fragment } from "react";
import { useTasks } from "./TasksContext";
import CalendarBlock from "./CalendarBlock";

export default function Calendar() {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const hours = Array.from({ length: 24 }, (_, i) => i);
    const formatHour = (h: number) => `${h % 12 || 12} ${h < 12 ? 'AM' : 'PM'}`
    const cols = "grid grid-cols-[60px_repeat(7,minmax(80px,1fr))]";
    const { tasks } = useTasks();
    const allSubtasks = tasks.flatMap((t) => t.subtasks);

    const today = new Date();
    const offsetToMonday = (today.getDay() + 6) % 7;
    const monday = new Date(today);
    monday.setDate(today.getDate() - offsetToMonday);
    const weekDates = Array.from({ length: 7 }, (_, i) => {
        const d = new Date(monday);
        d.setDate(monday.getDate() + i);
        return d;
    });
    
    return (
        <div className="flex flex-col h-full">
            <div className={`${cols} pr-3.5`}>
                <div className="h-20 border-b border-gray-300" />
                {days.map((d, i) => (
                    <div key={d} className="relative flex flex-col border-b border-gray-300 p-2 text-gray-600 text-center text-sm font-semibold">
                        <p>{d}</p>
                        <p className="text-3xl text-indigo-900/90 mt-2">{weekDates[i].getDate()}</p>
                        <span className="absolute left-0 top-1/2 translate-y-1/2 h-1/3 border-l border-gray-300"></span>
                    </div>
                ))}
            </div>

            <div className="flex-1 min-h-0 overflow-y-auto simple-scroll">
                {/* overlay for time blocks */}
                <div className="relative">
                    {/* format calendar */}
                    <div className={cols}>
                        {hours.map((h) => (
                            <Fragment key={h}>
                                <div className="relative text-xs text-gray-600 font-sans font-medium">
                                    {h !== 0 && (
                                        <span className="absolute top-0 right-0 -translate-x-1/2 -translate-y-1/2 pl-2 whitespace-nowrap">
                                            {formatHour(h)}
                                        </span>
                                    )}
                                    <div className="absolute bottom-0 right-0 w-1/6 border-b border-gray-300"></div>
                                </div>
                                {days.map((d) => (
                                    <div key={d + h} className="relative border-l border-gray-300 h-14">
                                        {h !== 0 && <div className="border-t border-gray-200 w-7/8 mx-auto" />}
                                    </div>
                                ))}
                            </Fragment>
                        ))}
                    </div>
                    {/* display all assigned tasks in blocks */}
                    <div className={`${cols} absolute inset-0 pointer-events-auto`}>
                        <div/> {/* skip first column */}
                        {weekDates.map((date, colIndex) => (
                            <div key={colIndex} className="relative">
                                {allSubtasks
                                    .filter((subtask) => subtask.date === date.toLocaleDateString("en-CA"))
                                    .map((subtask) => <CalendarBlock key={subtask.id} subtask={subtask}/>)
                                }
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}