"use client";

type OptionGroupProps<T> = {
    value: T,
    onChange: (value: T) => void,
    options: { value: T; label: string }[],
    legend: string,
}

export default function OptionGroup<T extends string>({legend, options, value, onChange }: OptionGroupProps<T>) {
    return (
        <fieldset className="flex flex-row gap-4">
            <legend className="font-semibold pb-1">{legend}</legend>
            {options.map((o) => (
                <button key={o.value} type="button" onClick={() => onChange(o.value)} className={`h-9 rounded-lg
                border border-gray-300 flex items-center justify-center flex-1 cursor-pointer ${
                value === o.value ? 'bg-indigo-900 text-white font-semibold' : 'hover:bg-gray-200'}`}>
                {o.label}
                </button>
            ))}
        </fieldset>
    );
}