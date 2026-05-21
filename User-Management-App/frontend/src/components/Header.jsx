import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white/70 backdrop-blur-xl border-b border-gray-200/50 sticky top-0 z-50 transition-colors">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2 text-gray-900 font-semibold text-xl tracking-tight">
          <span className="text-2xl"></span>
          <span>UserManager</span>
        </NavLink>
        <nav className="flex gap-6">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `text-[15px] font-medium transition-all duration-200 px-4 py-1.5 rounded-full ${
                isActive
                  ? "bg-[#1d1d1f] text-white"
                  : "text-gray-500 hover:text-gray-900 hover:bg-gray-100/50"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/add-user"
            className={({ isActive }) =>
              `text-[15px] font-medium transition-all duration-200 px-4 py-1.5 rounded-full ${
                isActive
                  ? "bg-[#1d1d1f] text-white"
                  : "text-gray-500 hover:text-gray-900 hover:bg-gray-100/50"
              }`
            }
          >
            Add User
          </NavLink>
          <NavLink
            to="/users"
            className={({ isActive }) =>
              `text-[15px] font-medium transition-all duration-200 px-4 py-1.5 rounded-full ${
                isActive
                  ? "bg-[#1d1d1f] text-white"
                  : "text-gray-500 hover:text-gray-900 hover:bg-gray-100/50"
              }`
            }
          >
            Users
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
