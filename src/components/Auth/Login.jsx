import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    let { value, name } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(form.email, form.password);
    setForm({
      email: "",
      password: "",
    });
    // console.log(form, "submit ____");
  };
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="border-2 border-emerald-500 p-20 rounded-xl">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="  outline-none bg-transparent border-2 border-emerald-600 rounded-full py-3 px-5 text-xl placeholder:text-gray-400"
            type="email"
            placeholder="Enter your email"
          />
          <input
            name="password"
            value={form.password}
            required
            onChange={handleChange}
            className=" outline-none bg-transparent border-2 border-emerald-600 rounded-full py-3 px-5 text-xl placeholder:text-gray-400 mt-5"
            type="password"
            placeholder="Type password"
          />
          <button className="text-lg mt-7 font-semibold text-white outline-none hover:bg-emerald-700 bg-emerald-600 border-emerald-600 rounded-full w-full py-2 px-8  placeholder:text-white ">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
