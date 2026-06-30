import AppHeader from "../components/AppHeader"
import Calendar from "./_components/Calendar"
import TaskPanel from "./_components/TaskPanel";
import ResizableSplit from "./_components/ResizableSplit";
import { TasksProvider } from "./_components/TasksContext";

export default function PlannerPage() {
    return (
        <>
            <AppHeader title="AI Planner" />
            <div className="flex-1 flex flex-col lg:flex-row gap-4 p-4 overflow-hidden">

                <div className="flex-1 overflow-hidden min-h-0">
                    <TasksProvider>
                        <ResizableSplit left={<Calendar/>} right={<TaskPanel/>} />
                    </TasksProvider>
                </div>
            </div>
        </>
    );
}