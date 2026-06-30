"use client";

import { useState } from "react";
import { ClipboardList, Plus } from "lucide-react";
import TaskModal from "./TaskModal";
import TaskCard from "./TaskCard";
import { useTasks } from "../TasksContext";

export default function TaskListView() {
    const [isModalOpen, setModalOpen] = useState(false);
    const { tasks, addTask } = useTasks();

    return (
        <div className="flex flex-col h-full min-h-0">
            <div className="flex-1 min-h-0 overflow-y-auto simple-scroll flex flex-col gap-3">
                {/* Tasks Header */}
                <div className="flex items-center font-semibold gap-2 mb-1">
                    <ClipboardList size={20} />Assignments / Exams ({tasks.length})
                </div>
                {/* "Add" Task Modal */}
                <button type="button" onClick={() => setModalOpen(!isModalOpen)} 
                    className="shrink-0 h-8 pl-2 pr-2.5 rounded-lg flex items-center justify-center self-end cursor-pointer
                    bg-indigo-900 hover:bg-indigo-700 text-white text-sm gap-1.5">
                    <Plus size={15} />Add Task
                </button>
                <TaskModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} onSubmit={(task) => addTask(task)} />
                {/* Task Cards */}
                {tasks.map((task) => (
                    <TaskCard key={task.id} task={task} />
                ))}
            </div>
        </div>
    );
}