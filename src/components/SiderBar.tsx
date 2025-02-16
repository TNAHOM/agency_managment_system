import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import {
  BarChart2,
  ClipboardList,
  LogOut,
  Settings,
  Table,
} from "lucide-react";

export function Sidebar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const role = searchParams.get("role");

  return (
    <div className="w-64 h-screen bg-[#404252] flex flex-col text-white fixed top-0 left-0">
      <div className="p-6">
        <h1 className="text-2xl font-bold">HOFIZ</h1>
      </div>

      <nav className="flex-1">
        <Link
          href={
            role === "admin"
              ? `/?role=${role}`
              : role === "reception"
              ? `/Receptionist?role=${role}`
              : role === "manager"
              ? `/Manager?role=${role}`
              : role === "coordinator"
              ? `/coordinator?role=${role}`
              : `/?role=${role}`
          }
          className={`flex items-center px-6 py-3 ${
            pathname === "/dashboard" ||
            (role === "admin" && pathname === "/") ||
            (role === "reception" && pathname === "/Receptionist") ||
            (role === "manager" && pathname === "/Manager") ||
            (role === "coordinator" && pathname === "/coordinator")
              ? "bg-[#5b5d6b]"
              : "text-gray-300 hover:bg-[#5b5d6b]"
          } transition-colors`}
        >
          <BarChart2 className="w-5 h-5 mr-3" />
          Dashboard
        </Link>

        <Link
          href={`/form-field?role=${role}`}
          className={`flex items-center px-6 py-3 ${
            pathname === "/form-field"
              ? "bg-[#5b5d6b]"
              : "text-gray-300 hover:bg-[#5b5d6b]"
          } transition-colors`}
        >
          <ClipboardList className="w-5 h-5 mr-3" />
          Form Field
        </Link>

        <Link
          href={`/Status-Tracker?role=${role}`}
          className={`flex items-center px-6 py-3 ${
            pathname === "/Status-Tracker"
              ? "bg-[#5b5d6b]"
              : "text-gray-300 hover:bg-[#5b5d6b]"
          } transition-colors`}
        >
          <Table className="w-5 h-5 mr-3" />
          Status Tracker
        </Link>

        <Link
          href={`/Graph?role=${role}`}
          className={`flex items-center px-6 py-3 ${
            pathname === "/Graph"
              ? "bg-[#5b5d6b]"
              : "text-gray-300 hover:bg-[#5b5d6b]"
          } transition-colors`}
        >
          <BarChart2 className="w-5 h-5 mr-3" />
          Graph
        </Link>

        {role === "admin" && (
          <Link
            href={`/Control-Room?role=${role}`}
            className={`flex items-center px-6 py-3 ${
              pathname === "/control-room"
                ? "bg-[#5b5d6b]"
                : "text-gray-300 hover:bg-[#5b5d6b]"
            } transition-colors`}
          >
            <Settings className="w-5 h-5 mr-3" />
            Control Room
          </Link>
        )}
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
