import { Bell } from "lucide-react";
import { User as Avatar } from "lucide-react";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white border-b">
      <h1 className="text-xl font-semibold">Welcome Back, Admin 👋</h1>

      <div className="flex items-center gap-4">
        <button className="relative">
          <Bell className="w-6 h-6 text-gray-600" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
            2
          </span>
        </button>

        <div className="flex items-center gap-3">
          <Avatar />
          <span className="font-medium">Admin Name</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
