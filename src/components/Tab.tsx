import React from 'react'

const Tab = () => {
  return (
    <div className="p-0 gap-3 m-[-70px]">
      <div className="flex justify-center items-center h-screen">
        <div className="w-3/6">
          <h1 className="text-3xl font-bold mb-4">Add user to this platform / SignUp</h1>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                className="w-full border border-gray-300 rounded px-4 py-2"
              />
            </div>
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
              <label htmlFor="phone" className="block">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone Number"
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
            <div>
              <label htmlFor="confirmPassword" className="block">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="w-full border border-gray-300 rounded px-4 py-2"
              />
            </div>
            <div>
              <label htmlFor="image" className="block">
                Profile Image
              </label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                className="w-full border border-gray-300 rounded px-4 py-2"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white rounded px-4 py-2"
            >
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Tab