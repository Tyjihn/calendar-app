"use client";

import { PanelLeft } from "lucide-react";
import { useSidebar } from "./SidebarContext";

export default function Topbar({ title }: { title: string }) {
    const sidebar = useSidebar();
    return (
        <div className="h-16 bg-white border-b flex items-center justify-between px-6">
            <p className="text-lg flex items-center gap-5 text-gray-900">
                <button type="button" onClick={() => sidebar?.toggle()} aria-label="Toggle sidebar">
                    <PanelLeft size={20} />
                </button>
                {title}
            </p>
        </div>
    );
}