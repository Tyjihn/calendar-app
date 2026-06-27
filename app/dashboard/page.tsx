import AppHeader from "../components/AppHeader";
import Card from "./_components/Card";
import { CalendarClock, ClipboardList, NotebookPen, CircleCheckBig } from "lucide-react";

export default function DashboardPage() {
  return (
    <>
      <AppHeader title="Dashboard" />
      <div className="h-18 flex items-center px-8 pt-2">
        <h1 className="font-bold text-xl text-gray-600">
          Today's Date
        </h1>
      </div>

      <main className="px-6 pb-6 grid grid-cols-1 md:grid-cols-12 gap-4">
        <Card icon={<CircleCheckBig />} title="Today's Tasks" span="col-span-6">
          <ul>
            <li>Finish CS assignment</li>
            <li>Review lecture notes</li>
            <li>Swimming</li>
          </ul>
        </Card>

        <Card icon={<ClipboardList />} title="Ongoing Assignments" span="col-span-6">
          <p>AI Systems Project - 40% complete</p>
        </Card>

        <Card icon={<NotebookPen />} title="Today's Study Plan" span="col-span-7">
          <p>2h Algorithms, 1h ML, 1h review</p>
        </Card>

        <Card icon={<CalendarClock />} title="Upcoming Deadlines" span="col-span-5">
          <ul>
            <li>HCI Project - Friday</li>
            <li>Math Quiz - Monday</li>
          </ul>
        </Card>
      </main>
    </>
  );
}