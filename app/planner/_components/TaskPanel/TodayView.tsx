import { Clock } from "lucide-react";

export default function TodayView() {
    return (
        <div className="flex flex-col h-full min-h-0 gap-4">
            <div className="rounded-xl border border-gray-300 p-4 shrink-0">
                <div className="flex items-center gap-3 mb-3">
                    <Clock size={22} /><p className="front-semibold text-sm">Today</p>
                </div>
                {/* Task Horizontal Bar */}
                <div className="h-3 w-full rounded-full bg-gray-300 overflow-hidden flex">
                    {/* color bar */}
                    <div className="bg-blue-500 h-full" style={{ width: "25%" }} />
                    <div className="bg-green-500 h-full" style={{ width: "15%"}} />
                    {/* remaining gray space */}
                </div>
            </div>
            {/* Today's Task List */}
            <div className="flex-1 min-h-0 overflow-y-auto simple-scroll flex flex-col gap-4">
                <div>
                    {/* Timed Events */}
                    <h2 className="font-semibold mb-2">Schedule</h2>
                    <div className="rounded-xl border border-gray-300 p-4 shrink-0">

                    </div>
                </div>
                <div>
                    {/* Tasks checklist */}
                    <h2 className="font-semibold mb-2">Tasks</h2>
                    <div className="rounded-xl border border-gray-300 p-4 shrink-0">

                    </div>
                </div>
            </div>
        </div>
    );
}