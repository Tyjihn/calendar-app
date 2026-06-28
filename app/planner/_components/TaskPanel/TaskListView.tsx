"use client";

import { useState } from "react";
import { ClipboardList, ChevronDown, Trash2, Plus } from "lucide-react";
import TaskModal from "./TaskModal";
import TaskCard from "./TaskCard";
import { Task } from "../types";

export default function TaskListView() {
    const isTask = true;
    const [isExpanded, setExpanded] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);
    const [tasks, setTasks] = useState<Task[]>([]);
    function addTask(task: Task) { setTasks((prev) => [...prev, task]); }

    return (
        <div className="flex flex-col h-full min-h-0">
            <div className="flex-1 min-h-0 overflow-y-auto simple-scroll flex flex-col gap-3">
                {/* Tasks Header */}
                <div className="flex items-center font-semibold text-lg gap-2">
                    <ClipboardList size={24} />Assignments / Exams ({tasks.length})
                </div>
                {/* "Add" Task Modal */}
                <button type="button" onClick={() => setModalOpen(!isModalOpen)} 
                    className="shrink-0 w-28 h-9 px-2 rounded-lg flex items-center justify-center self-end cursor-pointer bg-indigo-900 hover:bg-indigo-700 text-white gap-2">
                    <Plus size={16} />Add Task
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