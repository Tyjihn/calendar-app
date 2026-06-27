"use client";

import { useRef, useState } from "react"; 
import { GripVertical } from "lucide-react";

export default function ResizableSplit({left, right} : {left: React.ReactNode, right: React.ReactNode}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [leftPct, setLeftPct] = useState(66);
    const min = 55, max = 78;

    function onMouseDown() {
        document.body.style.userSelect = "none";
        function move(e: MouseEvent) {
            const rect = containerRef.current?.getBoundingClientRect();
            if (!rect) return;
            const pct = ((e.clientX - rect.left) / rect.width) * 100;
            setLeftPct(Math.min(Math.max(pct, min), max));
        }
        function up() {
            document.body.style.userSelect = "";
            window.removeEventListener("mousemove", move);
            window.removeEventListener("mouseup", up);
        }
        window.addEventListener("mousemove", move);
        window.addEventListener("mouseup", up);
    }

    return (
        <div ref={containerRef} className="flex h-full w-full">
            <div style={{ width: `${leftPct}%` }} 
                className="bg-white rounded-xl shadow p-4 flex flex-col min-h-0">{left}</div>
            <div onMouseDown={onMouseDown} className="w-4 flex items-center justify-center cursor-col-resize shrink-0 text-gray-400">
                <GripVertical />
            </div>
            <div className="flex-1 min-w-0 bg-white rounded-xl shadow p-4 flex flex-col min-h-0">{right}</div>
        </div>
    );
}