import { useUsers } from "../context/UserContext";
import { Link } from "react-router-dom";

export default function UserList() {
  const { users, loading, error, message, deleteUser } = useUsers();

  const formatDate = (dateStr) => {
    if (!dateStr) return "—";
    return new Date(dateStr).toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-[#fbfbfd] py-16 px-4">
      <div className="max-w-[1000px] mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-4">
          <div>
            <h1 className="text-[40px] font-semibold text-[#1d1d1f] tracking-tight">Users</h1>
            <p className="text-[#86868b] text-[17px] mt-1">
              {loading ? "Loading..." : `${users.length} active user${users.length !== 1 ? "s" : ""}`}
            </p>
          </div>
          <Link
            to="/add-user"
            className="inline-flex items-center justify-center bg-[#0071e3] text-white font-medium px-5 py-2.5 rounded-full hover:bg-[#0077ED] transition-colors duration-200 text-[15px]"
          >
            Add User
          </Link>
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex items-center justify-center py-32">
            <div className="w-8 h-8 border-4 border-[#d2d2d7] border-t-[#0071e3] rounded-full animate-spin"></div>
          </div>
        )}

        {/* Empty state */}
        {!loading && users.length === 0 && (
          <div className="text-center py-32 bg-white/50 backdrop-blur-xl rounded-[32px] border border-[#d2d2d7]/50">
            <h2 className="text-[24px] font-semibold text-[#1d1d1f] mb-2">No users found</h2>
            <p className="text-[#86868b] text-[17px] mb-8">Get started by adding your first user.</p>
            <Link
              to="/add-user"
              className="inline-block bg-[#0071e3] text-white font-medium px-6 py-2.5 rounded-full hover:bg-[#0077ED] transition"
            >
              Add First User
            </Link>
          </div>
        )}

        {/* Table */}
        {!loading && users.length > 0 && (
          <div className="bg-white/70 backdrop-blur-2xl rounded-[32px] shadow-sm border border-[#d2d2d7]/50 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#d2d2d7]/50 bg-[#f5f5f7]/50">
                    <th className="px-6 py-4 text-[#86868b] font-medium text-[12px] uppercase tracking-widest">Name</th>
                    <th className="px-6 py-4 text-[#86868b] font-medium text-[12px] uppercase tracking-widest">Email</th>
                    <th className="px-6 py-4 text-[#86868b] font-medium text-[12px] uppercase tracking-widest">Mobile</th>
                    <th className="px-6 py-4 text-[#86868b] font-medium text-[12px] uppercase tracking-widest">Date of Birth</th>
                    <th className="px-6 py-4 text-[#86868b] font-medium text-[12px] uppercase tracking-widest text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#d2d2d7]/30">
                  {users.map((user) => (
                    <tr
                      key={user._id}
                      className="hover:bg-[#f5f5f7]/80 transition-colors duration-150"
                    >
                      <td className="px-6 py-4 font-medium text-[#1d1d1f] text-[15px]">
                        {user.name}
                      </td>
                      <td className="px-6 py-4 text-[#515154] text-[15px]">{user.email}</td>
                      <td className="px-6 py-4 text-[#515154] text-[15px]">{user.mobileNumber}</td>
                      <td className="px-6 py-4 text-[#515154] text-[15px]">{formatDate(user.dateOfBirth)}</td>
                      <td className="px-6 py-4 text-right">
                        <button
                          onClick={() => {
                            if (window.confirm(`Are you sure you want to delete ${user.name}?`)) {
                              deleteUser(user._id);
                            }
                          }}
                          className="text-[#ff3b30] hover:text-[#d70015] font-medium text-[14px] transition-colors"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
