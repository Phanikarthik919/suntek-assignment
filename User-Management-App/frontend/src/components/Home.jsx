import { Link } from "react-router-dom";
import { useUsers } from "../context/UserContext";

export default function Home() {
  const { users, loading } = useUsers();

  return (
    <div className="min-h-screen bg-[#fbfbfd] text-[#1d1d1f]">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 pt-32 pb-20 text-center">
        <h1 className="text-6xl font-semibold tracking-tight mb-4">
          User Management. <br />
          <span className="text-[#86868b]">Beautifully simple.</span>
        </h1>
        <p className="text-xl text-[#86868b] max-w-2xl mx-auto mb-10 font-medium">
          A sleek, modern, and robust user management system designed with precision.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/add-user"
            className="inline-block bg-[#0071e3] text-white font-medium px-8 py-3.5 rounded-full shadow-sm hover:bg-[#0077ED] transition-colors duration-200 text-[15px]"
          >
            Add New User
          </Link>
          <Link
            to="/users"
            className="inline-block bg-[#e8e8ed] text-[#1d1d1f] font-medium px-8 py-3.5 rounded-full hover:bg-[#d2d2d7] transition-colors duration-200 text-[15px]"
          >
            View All Users
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white/60 backdrop-blur-xl rounded-[28px] shadow-sm p-8 text-center border border-[#d2d2d7]/50">
            <div className="text-5xl font-semibold text-[#1d1d1f] mb-2">
              {loading ? "..." : users.length}
            </div>
            <div className="text-[#86868b] text-[15px] font-medium">Active Users</div>
          </div>
          <div className="bg-white/60 backdrop-blur-xl rounded-[28px] shadow-sm p-8 text-center border border-[#d2d2d7]/50">
            <div className="text-5xl font-semibold text-[#1d1d1f] mb-2">REST</div>
            <div className="text-[#86868b] text-[15px] font-medium">Architecture</div>
          </div>
          <div className="bg-white/60 backdrop-blur-xl rounded-[28px] shadow-sm p-8 text-center border border-[#d2d2d7]/50">
            <div className="text-5xl font-semibold text-[#1d1d1f] mb-2">100%</div>
            <div className="text-[#86868b] text-[15px] font-medium">Responsive</div>
          </div>
        </div>
      </section>
    </div>
  );
}
