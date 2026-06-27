"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebar } from "./SidebarContext";
import { GraduationCap, LayoutDashboard, Sparkles, BarChart3 } from "lucide-react";

export default function Sidebar() {
    const pathname = usePathname();
    const sidebar = useSidebar();
    const isExpanded = sidebar?.isExpanded ?? true;
    const iconSize = 22;

    return (
        <div className={`${isExpanded ? 'w-72' : 'w-18'} bg-white border-r p-4 flex flex-col transition-all duration-300`}>
            <h1 className={`text-2xl font-bold text-black mb-10 flex items-center gap-3 mt-1 ml-1 ${isExpanded ? '' : 'justify-center'}`}>
                <GraduationCap size={32}/>{isExpanded && "CalendAIr"}
            </h1>
            
            <nav className="space-y-2 text-gray-900">
                <Link href="/dashboard" className={`flex items-center gap-2 px-3 rounded-lg h-10 ${
                    pathname === '/dashboard' ? 'bg-indigo-100 text-black font-semibold' : 'hover:bg-gray-100'
                } ${isExpanded ? '' : 'justify-center'}`}>
                    <LayoutDashboard size={iconSize} className="shrink-0" />{isExpanded && "Dashboard"}
                </Link>
                <Link href="/planner" className={`flex items-center gap-2 px-3 rounded-lg h-10 ${
                    pathname === '/planner' ? 'bg-indigo-100 text-black font-semibold' : 'hover:bg-gray-100'
                } ${isExpanded ? '' : 'justify-center'}`}>
                    <Sparkles size={iconSize} className="shrink-0" />{isExpanded && "AI Planner"}
                </Link>
                <Link href="/performance" className={`flex items-center gap-2 px-3 rounded-lg h-10 ${
                    pathname === '/performance' ? 'bg-indigo-100 text-black font-semibold' : 'hover:bg-gray-100'
                } ${isExpanded ? '' : 'justify-center'}`}>
                    <BarChart3 size={iconSize} className="shrink-0" />{isExpanded && "Performance"}
                </Link> 
            </nav>

            <div className={`mt-auto flex items-center gap-3 ${isExpanded ? '' : 'justify-center'}`}>
                <div className="w-8 h-8 bg-gray-300 rounded-full shrink-0"></div>
                {isExpanded && <p className="text-sm font-semibold text-gray-800"></p>}
            </div>
        </div>
    );
}