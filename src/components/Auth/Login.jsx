import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(email);
    console.log(password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex items-center justify-center rounded-2xl p-4 md:p-6">
      <div className="w-full max-w-lg rounded-2xl border border-gray-300 bg-white p-4 shadow-lg md:p-8">
        <form
          onSubmit={submitHandler}
          className="flex flex-col gap-4 border-gray-800"
        >
          <h1 className="text-2xl font-bold text-gray-900 md:text-4xl">
            Login
          </h1>
          <p className="text-gray-500 md:text-xl">
            Enter your email below to login to your account
          </p>
          <div className="grid gap-1.5 pt-3">
            <label className="text-gray-900 md:text-xl">Email</label>
            <input
              onChange={(event) => setEmail(event.target.value)}
              required
              value={email}
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-black outline-none"
            />
          </div>
          <div className="grid gap-1.5 pt-3 md:text-xl">
            <label className="text-gray-900">Password</label>
            <input
              onChange={(event) => setPassword(event.target.value)}
              required
              value={password}
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-black outline-none"
            />
          </div>
          <button className="mt-2 cursor-pointer rounded-lg bg-black px-4 py-3 text-white shadow-md hover:bg-gray-800 md:text-xl">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
