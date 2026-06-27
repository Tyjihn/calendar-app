import { ReactNode } from "react";

type CardProps = {
  icon: ReactNode;
  title: string;
  span?: string;
  children: ReactNode;
};

export default function Card({ icon, title, span = "col-span-6", children }: CardProps) {
  return (
    <div className={`bg-white p-4 rounded-xl shadow ${span}`}>
      <h2 className="flex items-center gap-3 pt-2 pb-1 text-lg font-semibold text-gray-700 ml-2">
        {icon}
        {title}
      </h2>
      <div className="text-black mt-2 ml-2">{children}</div>
    </div>
  );
}
