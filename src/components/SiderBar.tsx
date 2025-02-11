import Link from "next/link";
import {
  BarChart2,
  ClipboardList,
  LogOut,
  Settings,
  Table,
} from "lucide-react";

export function Sidebar() {
  return (
    <div className="w-64 bg-[#404252] h-screen flex flex-col text-white">
      <div className="p-6">
        <h1 className="text-2xl font-bold">HOFIZ</h1>
      </div>

      <nav className="flex-1">
        <Link
          href="/dashboard"
          className="flex items-center px-6 py-3 text-gray-300 hover:bg-[#5b5d6b] transition-colors"
        >
          <BarChart2 className="w-5 h-5 mr-3" />
          Dashboard
        </Link>

        <Link
          href="/form-field"
          className="flex items-center px-6 py-3 text-gray-300 hover:bg-[#5b5d6b] transition-colors"
        >
          <ClipboardList className="w-5 h-5 mr-3" />
          Form Field
        </Link>

        <Link
          href="/status-tracker"
          className="flex items-center px-6 py-3 text-gray-300 hover:bg-[#5b5d6b] transition-colors"
        >
          <Table className="w-5 h-5 mr-3" />
          Status Tracker
        </Link>

        <Link
          href="/graph"
          className="flex items-center px-6 py-3 text-gray-300 hover:bg-[#5b5d6b] transition-colors"
        >
          <BarChart2 className="w-5 h-5 mr-3" />
          Graph
        </Link>

        <Link
          href="/control-room"
          className="flex items-center px-6 py-3 text-gray-300 hover:bg-[#5b5d6b] transition-colors"
        >
          <Settings className="w-5 h-5 mr-3" />
          Control Room
        </Link>
      </nav>

      <div className="p-6">
        <button className="flex items-center text-gray-300 hover:text-white transition-colors">
          <LogOut className="w-5 h-5 mr-3" />
          Log out
        </button>
      </div>
    </div>
  );
}
