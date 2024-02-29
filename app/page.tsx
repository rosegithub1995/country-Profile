import Image from "next/image";
import Link from "next/link";

export default function Component() {
  return (
    <div className="flex h-screen bg-orange-600/90">
      <div className="hidden md:block bg-slate-800 p-8 w-2/5 relative">
        <div className="absolute inset-0 bg-opacity-50 bg-gray-900"></div>
        <div className="relative z-10">
          <h2 className="text-4xl font-bold text-white mb-2">
            Create an Account
          </h2>
          <p className="text-white mb-8">
            Kindly fill in your details to be a part of the camp
          </p>
          <form className="space-y-4">
            <div>
              <label
                className="block mb-1 font-semibold text-white"
                htmlFor="email"
              >
                Email address
              </label>
              <input
                className="w-full border rounded-lg px-3 py-2"
                id="email"
                placeholder="Enter email"
                type="email"
              />
            </div>
            <div>
              <label
                className="block mb-1 font-semibold text-white"
                htmlFor="password"
              >
                Create password
              </label>
              <input
                className="w-full border rounded-lg px-3 py-2"
                id="password"
                placeholder="Create password"
                type="password"
              />
            </div>
            <Link href="/dashboard">
              <button
                className="w-full bg-[#f97316] text-white py-2 rounded-lg font-semibold hover:bg-[#ea580c] transition-colors"
                type="submit"
              >
                Sign In
              </button>
            </Link>
          </form>
        </div>
      </div>
      <div className="w-3/5 h-full">
        <video className="w-full h-full object-cover" src="/earth.mp4"></video>
      </div>
    </div>
  );
}
