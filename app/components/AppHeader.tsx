"use client";

import { PanelLeft } from "lucide-react";
import { useSidebar } from "./SidebarContext";

export default function AppHeader({ title }: { title: string }) {
    const sidebar = useSidebar();
    return (
        <div className="h-16 bg-white border-b flex items-center justify-between px-4">
            <p className="text-lg flex items-center gap-3 font-sans font-[550] text-gray-900">
                <button type="button" onClick={() => sidebar?.toggle()} aria-label="Toggle sidebar" 
                    className="cursor-pointer w-9 h-9 rounded-lg bg-white hover:bg-gray-200 flex items-center justify-center">
                    <PanelLeft size={20} />
                </button>
                {title}
            </p>
        </div>
    );
}