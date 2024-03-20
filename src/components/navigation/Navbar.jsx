import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-full py-4">
      <div>
        <h1 className="text-4xl font-semibold">Servicario 2</h1>
      </div>
      <div className="flex gap-6">
        <button>Login</button>
        <button className="px-6 py-2 bg-blue-400 text-white rounded-full">
          Register
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
