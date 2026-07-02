"use client";

import { useTasks } from "./TasksContext";
import { Subtask } from "./types";
import { useRef, useState, PointerEvent } from "react";

const HOURS_PX = 56;

function minutesToHHMM(mins: number) {
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    return String(h).padStart(2, "0") + ":" + String(m).padStart(2, "0");
}

function hhmmToMinutes(time: string) {
    const hoursMinutes = time.split(":").map(Number);
    return hoursMinutes[0] * 60 + hoursMinutes[1];
}

function addDays(date: string, days: number) {
    const [y, m, d] = date.split("-").map(Number);
    return new Date(y, m - 1, d + days).toLocaleDateString("en-CA");
}

export default function CalendarBlock({ subtask }: { subtask: Subtask }) {
    const top = hhmmToMinutes(subtask.startTime) / 60 * HOURS_PX;
    const height = subtask.duration / 60 * HOURS_PX;

    const startX = useRef(0);
    const startY = useRef(0);
    const colWidth = useRef(0);
    const [dragDx, setDragDx] = useState(0);
    const [dragDy, setDragDy] = useState(0);
    const [durationHy, setDurationHy] = useState(0);

    const mode = useRef<"move" | "resize" | null>(null);
    const { updateSubtask } = useTasks();

    function handlePointerDown(e: PointerEvent<HTMLDivElement>) {
        // x-axis
        startX.current = e.clientX;
        colWidth.current = e.currentTarget.parentElement!.getBoundingClientRect().width;

        // y-axis
        startY.current = e.clientY;
        e.currentTarget.setPointerCapture(e.pointerId);
        const rect = e.currentTarget.getBoundingClientRect();
        mode.current = rect.bottom - e.clientY < 12 ? "resize" : "move";
        if (mode.current === "resize") e.currentTarget.style.cursor = "ns-resize";
    }
    function handlePointerMove(e: PointerEvent<HTMLDivElement>) {
        if (mode.current === null) return;
        else if (mode.current === "move") {
            setDragDx(e.clientX - startX.current);
            setDragDy(e.clientY - startY.current);
        }
        else {
            setDurationHy(e.clientY - startY.current);
        }
    }
    function handlePointerUp(e: PointerEvent<HTMLDivElement>) {
        const offset = mode.current === "move" ? dragDy : durationHy;
        const deltaMinutes = Math.round(offset / HOURS_PX * 60 / 15) * 15;
        const deltaDays = Math.round(dragDx / colWidth.current);
        
        if (mode.current === "move") {
            const originalMinutes = hhmmToMinutes(subtask.startTime);
            const newMinutes = Math.min(Math.max(originalMinutes + deltaMinutes, 0), 24 * 60 - subtask.duration);
            
            updateSubtask(subtask.id, { startTime: minutesToHHMM(newMinutes), date: addDays(subtask.date, deltaDays) });
        }
        else {
            updateSubtask(subtask.id, { duration: Math.max(subtask.duration + deltaMinutes, 15) })
        }
        e.currentTarget.style.cursor = "";
        setDragDx(0);
        setDragDy(0);
        setDurationHy(0);
        mode.current = null;
    }

    return(
        <div 
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            style={{ top: top + dragDy, height: height + durationHy, transform: `translateX(${dragDx}px)` }}
            className="absolute rounded-lg bg-indigo-500 flex justify-center 
                left-1 right-1 p-2 font-semibold text-xs text-white cursor-move select-none touch-none">

            {/* change cursor when hovering block bottom edge */}
            <div className="absolute bottom-0 left-0 right-0 h-3 cursor-ns-resize" /> 
            {subtask.title}
        </div>
    );
}