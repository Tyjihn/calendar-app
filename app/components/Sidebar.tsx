import Link from "next/link";
import { GraduationCap, LayoutDashboard, Sparkles, BarChart3 } from "lucide-react";

export default function Sidebar() {
    return (
        <div className="w-64 bg-white border-r p-4 flex flex-col">
            <h1 className="text-2xl font-bold text-black mb-10 flex items-center gap-3 mt-1 ml-1">
                <GraduationCap size={28}/>CalendAIr
            </h1>

            <p className="text-lg font-bold text-gray-600 mb-4">Menu</p>
            <nav className="space-y-4 text-gray-900 ml-2">
                <Link href="/dashboard" className="font-semibold flex items-center gap-2">
                    <LayoutDashboard size={20} />Dashboard
                </Link>
                <Link href="/planner" className="flex items-center gap-2">
                    <Sparkles size={20} />AI Planner
                </Link>
                <Link href="/performance" className="flex items-center gap-2">
                    <BarChart3 size={20} />Performance
                </Link> 
            </nav>

            <div className="mt-auto flex items-center gap-3">
                <div className="w-9 h-9 bg-gray-300 rounded-full"></div>
                <p className="font-semibold text-gray-800">Full Name</p>
            </div>
        </div>
    );
}