import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useUsers } from "../context/UserContext";

export default function AddUser() {
  const { addUser, loading } = useUsers();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const result = await addUser({
      ...data,
      mobileNumber: Number(data.mobileNumber),
    });
    if (result.success) {
      reset();
      navigate("/users");
    }
  };

  return (
    <div className="min-h-screen bg-[#fbfbfd] flex items-center justify-center py-16 px-4">
      <div className="w-full max-w-[480px]">
        <div className="text-center mb-10">
          <h1 className="text-[40px] leading-tight font-semibold text-[#1d1d1f] tracking-tight mb-2">
            Add User
          </h1>
          <p className="text-[#86868b] text-[17px]">Enter user details below.</p>
        </div>

        <div className="bg-white/70 backdrop-blur-2xl rounded-[32px] shadow-sm border border-[#d2d2d7]/50 p-10">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
            <div>
              <input
                id="name"
                type="text"
                placeholder="Full Name"
                className={`w-full px-4 py-3.5 rounded-xl border text-[17px] outline-none transition-all focus:ring-4 focus:ring-[#0071e3]/20 ${
                  errors.name ? "border-[#ff3b30] bg-[#ff3b30]/5" : "border-[#d2d2d7] bg-[#f5f5f7] focus:bg-white focus:border-[#0071e3]"
                }`}
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="text-[#ff3b30] text-[13px] mt-1.5 ml-1 font-medium">{errors.name.message}</p>
              )}
            </div>

            <div>
              <input
                id="email"
                type="email"
                placeholder="Email Address"
                className={`w-full px-4 py-3.5 rounded-xl border text-[17px] outline-none transition-all focus:ring-4 focus:ring-[#0071e3]/20 ${
                  errors.email ? "border-[#ff3b30] bg-[#ff3b30]/5" : "border-[#d2d2d7] bg-[#f5f5f7] focus:bg-white focus:border-[#0071e3]"
                }`}
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email" },
                })}
              />
              {errors.email && (
                <p className="text-[#ff3b30] text-[13px] mt-1.5 ml-1 font-medium">{errors.email.message}</p>
              )}
            </div>

            <div>
              <input
                id="mobileNumber"
                type="number"
                placeholder="Mobile Number"
                className={`w-full px-4 py-3.5 rounded-xl border text-[17px] outline-none transition-all focus:ring-4 focus:ring-[#0071e3]/20 ${
                  errors.mobileNumber ? "border-[#ff3b30] bg-[#ff3b30]/5" : "border-[#d2d2d7] bg-[#f5f5f7] focus:bg-white focus:border-[#0071e3]"
                }`}
                {...register("mobileNumber", {
                  required: "Mobile number is required",
                  minLength: { value: 10, message: "Must be at least 10 digits" },
                })}
              />
              {errors.mobileNumber && (
                <p className="text-[#ff3b30] text-[13px] mt-1.5 ml-1 font-medium">{errors.mobileNumber.message}</p>
              )}
            </div>

            <div>
              <input
                id="dateOfBirth"
                type="date"
                className={`w-full px-4 py-3.5 rounded-xl border text-[17px] text-[#1d1d1f] outline-none transition-all focus:ring-4 focus:ring-[#0071e3]/20 ${
                  errors.dateOfBirth ? "border-[#ff3b30] bg-[#ff3b30]/5" : "border-[#d2d2d7] bg-[#f5f5f7] focus:bg-white focus:border-[#0071e3]"
                }`}
                {...register("dateOfBirth", { required: "Date of birth is required" })}
              />
              {errors.dateOfBirth && (
                <p className="text-[#ff3b30] text-[13px] mt-1.5 ml-1 font-medium">{errors.dateOfBirth.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#0071e3] text-white font-medium py-3.5 px-6 rounded-full hover:bg-[#0077ED] transition-colors duration-200 disabled:opacity-50 mt-4 text-[17px]"
            >
              {loading ? "Saving..." : "Continue"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
