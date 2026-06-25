import AppHeader from "../components/AppHeader"
import Calendar from "../components/Calendar"
import TaskPanel from "../components/TaskPanel";
import ResizableSplit from "../components/ResizableSplit";

export default function PlannerPage() {
    return (
        <>
            <AppHeader title="AI Planner" />
            <div className="flex-1 flex flex-col lg:flex-row gap-4 p-4 overflow-hidden">

                <div className="flex-1 overflow-hidden min-h-0">
                    <ResizableSplit left={<Calendar/>} right={<TaskPanel/>} />
                </div>
            </div>
        </>
    );
}