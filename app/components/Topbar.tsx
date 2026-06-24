import { PanelLeft } from "lucide-react";

export default function Topbar({ title }: { title: string }) {
    return (
        <div className="h-16 bg-white border-b flex items-center justify-between px-6">
            <p className="text-lg flex items-center gap-5 text-gray-900">
                <PanelLeft size={20} />{title}
            </p>
        </div>
    );
}