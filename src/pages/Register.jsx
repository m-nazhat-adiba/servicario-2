import React from "react";
import BasicInput from "../components/input/BasicInput";
import useInput from "../hooks/useInput";
import * as api from "../api";

function Register() {
  const emailHook = useInput();
  const passwordHook = useInput();
  const fullName = useInput();

  const registerUser = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const register = await api.registerUser(emailHook, passwordHook, fullName);
  };

  return (
    <div className="container mx-auto w-full h-screen flex justify-center items-center bg-gray-50">
      <div className="px-6 py-10 w-full max-w-lg bg-white shadow-lg">
        <header className="text-center mb-10">
          <h1 className="text-4xl">Register</h1>
          <p>Please register to proceed</p>
        </header>
        <form onSubmit={registerUser} className="flex flex-col gap-4">
          <BasicInput
            id="fullName"
            handleChange={fullName}
            type="input"
            label="Full Name"
            placeholder="John Doe"
          />
          <BasicInput
            id="email"
            handleChange={emailHook}
            type="email"
            label="Email"
            placeholder="something@email.com"
          />
          <BasicInput
            id="password"
            handleChange={passwordHook}
            type="password"
            label="Password"
            placeholder="Password"
          />
          <button
            type="submit"
            className="mt-10 px-4 py-2 w-full bg-blue-500 rounded-full text-white"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
