import { Fragment } from "react";

export default function Calendar() {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const hours = Array.from({ length: 24 }, (_, i) => i);
    const formatHour = (h: number) => `${h % 12 || 12} ${h < 12 ? 'AM' : 'PM'}`
    const cols = "grid grid-cols-[60px_repeat(7,minmax(80px,1fr))]";
    
    return (
        <div className="flex flex-col h-full">
            <div className={`${cols} pr-3.5`}>
                <div className="h-20 border-b border-gray-300" />
                {days.map((d) => (
                    <div key={d} className="relative border-b border-gray-300 p-2 text-gray-600 text-center text-sm font-semibold">
                        {d}
                        <span className="absolute left-0 top-1/2 translate-y-1/2 h-1/3 border-l border-gray-300"></span>
                    </div>
                ))}
            </div>

            <div className="flex-1 min-h-0 overflow-y-auto simple-scroll">
                <div className={cols}>
                    {hours.map((h) => (
                        <Fragment key={h}>
                            <div className="relative text-xs text-gray-600 font-sans font-[500]">
                                {h !== 0 && (
                                    <span className="absolute top-0 right-0 -translate-x-1/2 -translate-y-1/2 pl-2 whitespace-nowrap">
                                        {formatHour(h)}
                                    </span>
                                )}
                                <div className="absolute bottom-0 right-0 w-1/6 border-b border-gray-300"></div>
                            </div>
                            {days.map((d) => (
                                <div key={d + h} className="relative border-l border-gray-300 h-14">
                                    {h !== 0 && <div className="border-t border-gray-200 w-7/8 mx-auto" />}
                                </div>
                            ))}
                        </Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
}