"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const role = formData.get("role") as string;

    switch (role) {
      case "admin":
        router.push(`/?role=${role}`);
        break;
      case "manager":
        router.push(`/Manager?role=${role}`);
        break;
      case "reception":
        router.push(`/Receptionist?role=${role}`);
        break;
      case "coordinator":
        router.push(`/Coordinator?role=${role}`);
        break;
      default:
        router.push(`/?role=${role}`);
    }
  };

  return (
    <div className="p-0 gap-3 m-[-70px]">
      <div className="flex justify-center items-center h-screen">
        <div className="w-96">
          <h1 className="text-3xl font-bold mb-4">Login</h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded px-4 py-2"
              />
            </div>
            <div>
              <label htmlFor="password" className="block">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="w-full border border-gray-300 rounded px-4 py-2"
              />
            </div>
            {/* Role dropdown selection from Admin, manager, reception and coordinator */}
            <div>
              <label htmlFor="role" className="block">
                Role
              </label>
              <select
                id="role"
                name="role"
                className="w-full border border-gray-300 rounded px-4 py-2"
              >
                <option value="admin">Admin</option>
                <option value="manager">Manager</option>
                <option value="reception">Reception</option>
                <option value="coordinator">Coordinator</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white rounded px-4 py-2"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
