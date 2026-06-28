"use client";

import { useState } from "react";
import { X, Minus, Plus, Lightbulb } from "lucide-react";
import { Task, TaskType, Difficulty } from "../types";
import OptionGroup from "./OptionGroup";

type TaskModalProps = {
    isOpen: boolean,
    onClose: () => void;
    onSubmit: (task: Task) => void;
};

export default function TaskModal({isOpen, onClose, onSubmit}: TaskModalProps) {
    const today = new Date().toLocaleDateString("en-CA");

    const [title, setTitle] = useState("");
    const [type, setType] = useState<TaskType>("assignment");
    const [dueDate, setDueDate] = useState("");
    const [difficulty, setDifficulty] = useState<Difficulty>("medium");
    const [subtaskCount, setSubtaskCount] = useState(4);
    const [description, setDescription] = useState("");
    const typeOptions: { value: TaskType; label: string }[] = [
        { value: "assignment", label: "Assignment" },
        { value: "exam", label: "Exam" },
        { value: "project", label: "Project" },
    ];
    const difficultyOptions: { value: Difficulty; label: string }[] = [
        { value: "hard", label: "Hard" },
        { value: "medium", label: "Medium" },
        { value: "easy", label: "Easy" },
    ];
    const [step, setStep] = useState(1);
    const [errorField, setErrorField] = useState<"title" | "dueDate" | null>(null);
    
    if(!isOpen) return null;

    function reset() {
        setTitle("");
        setType("assignment");
        setDueDate("");
        setDifficulty("medium");
        setSubtaskCount(4);
        setDescription("");
        setStep(1);
    }

    function submit() {
        if (!title.trim()) return;
        onSubmit({
            id: crypto.randomUUID(),
            title: title.trim(),
            type,
            dueDate,
            difficulty,
            subtasks: Array.from({ length: subtaskCount }, (_, i) => `Subtask ${i + 1}`),
            description: description.trim() || undefined,
        })
        reset();
        onClose();
    }

    function close() {
        reset();
        onClose();
    }

    function updateSubtasks(delta: number) {
        setSubtaskCount((n) =>Math.max(2, Math.min(10, n + delta)))
    }

    function goNext() {
        if (!title.trim()) {
            setErrorField("title");
            return;
        }
        else if (!dueDate) {
            setErrorField("dueDate");
            return;
        }
        setErrorField(null);
        setStep(2);
    }

    return(
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
            <div className="bg-white rounded-xl px-6 py-5 w-full max-w-lg text-black shadow-xl"
                onClick={(e) => e.stopPropagation()}>
                <div className="flex items-center justify-between mb-4">
                    {/* Header + Close button */}
                    <h2 className="text-lg font-semibold">Add Task</h2>
                    <button type="button" aria-label="close" onClick={close}
                        className="w-8 h-8 rounded-full bg-white flex items-center justify-center
                            text-gray-500 hover:bg-gray-200 hover:text-gray-800 cursor-pointer">
                            <X size={20} />
                    </button>
                </div>
                <form onSubmit={(e) => {e.preventDefault(); submit();}} className="flex flex-col gap-5">
                    {step === 1 && (
                        <>
                        {/* Select task type */}
                        <OptionGroup legend="Type" options={typeOptions} value={type} onChange={setType} />
                        {/* Input title */}
                        <label className="flex flex-col">
                            <p className="font-semibold pb-1">Title</p> 
                            <input 
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="e.g. Math HW"
                                className="border border-gray-300 hover:border-gray-500 rounded-md px-3 py-2"
                            />
                            {errorField === "title" && <p className="text-red-600 text-sm mt-1 ml-1">Please enter a title!</p>}
                        </label>
                        {/* Select due date */}
                        <label className="flex flex-col">
                            <p className="font-semibold pb-1">Due Date</p>
                            <input 
                                type="date"
                                value={dueDate}
                                min={today}
                                onChange={(e) => setDueDate(e.target.value)}
                                className="border border-gray-300 hover:border-gray-500 rounded-md px-3 py-2 cursor-pointer"
                            />
                        {   errorField === "dueDate" && <p className="text-red-600 text-sm mt-1 ml-1">Please select a the due date!</p>}
                        </label>
                        {/* Next Button */}
                        <button type="button" className="w-15 h-9 rounded-lg border border-gray-300 hover:bg-gray-200 font-semibold
                            flex items-center justify-center self-end cursor-pointer mt-1" onClick={() => goNext()}>
                            Next
                        </button>
                        </>
                    )}
                    {step === 2 && (
                        <>
                        {/* Select difficulty */}
                        <OptionGroup legend="Difficulty" options={difficultyOptions} value={difficulty} onChange={setDifficulty}/>
                        {/* Select number of subtaskCount */}
                        <div className="flex flex-col">
                            <p className="font-semibold pb-2">Subtasks</p>
                            <div className="flex flex-row items-center gap-3">
                                <button type="button" className="w-8 h-8 rounded-lg border border-gray-300 bg-white hover:bg-gray-200
                                    flex items-center justify-center cursor-pointer" onClick={() => updateSubtasks(-1)}><Minus size={18}/></button>
                                <span className="w-8 text-center">{subtaskCount}</span>
                                <button type="button" className="w-8 h-8 rounded-lg border border-gray-300 bg-white hover:bg-gray-200
                                    flex items-center justify-center cursor-pointer" onClick={() => updateSubtasks(1)}><Plus size={18}/></button>
                            </div>
                        </div>
                        {/* Add description */}
                        <label className="flex flex-col">
                            <p className="font-semibold pb-2">Assignment Description / Notes
                                <span className="font-normal ml-2">(Optional)</span>
                            </p>
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="e.g. Java program modeling a bank account hierarchy using inheritance & polymorphism"
                                className="min-h-25 rounded-lg border border-gray-300 hover:border-gray-500 px-3 py-2"/>
                            <div className="flex flex-row text-xs text-indigo-900/75 pl-1 pt-1 gap-1">
                                <Lightbulb size={14}/> Add details or attach documents for better schedule
                            </div>
                        </label>
                        
                        <div className="flex flex-row self-end gap-3">
                            <button type="button" className="w-22 h-9 rounded-lg border border-gray-300 hover:bg-gray-200 font-semibold
                                flex items-center justify-center self-end cursor-pointer mt-1" onClick={() => setStep(1)}>
                                Previous
                            </button>
                            <button type="submit" className="w-23 h-9 rounded-lg border border-gray-300 bg-indigo-900 hover:bg-indigo-700
                                font-semibold text-white flex items-center justify-center self-end cursor-pointer mt-1">
                                Generate
                            </button>
                        </div>
                        </>
                    )}
                </form>
            </div>
        </div>
    );
}

