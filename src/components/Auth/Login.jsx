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
    <div className="flex items-center justify-center p-6 rounded-2xl">
      <div className="rounded-2xl border border-gray-300 bg-[#FFFFFF] p-8 shadow-lg">
        <form
          onSubmit={submitHandler}
          className="flex w-[420px] flex-col gap-4 border-gray-800"
        >
          <h1 className="text-3xl font-bold text-[#09090B]">Login</h1>
          <p className="text-[#71717A]">
            Enter your email below to login to your account
          </p>
          <div className="grid gap-1.5 pt-3">
            <label className="text-[#09090B]">Email</label>
            <input
              onChange={(event) => setEmail(event.target.value)}
              required
              value={email}
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-[10px] border border-gray-300 px-4 py-3 text-black outline-none"
            />
          </div>
          <div className="grid gap-1.5 pt-3">
            <label className="text-[#09090B]">Password</label>
            <input
              onChange={(event) => setPassword(event.target.value)}
              required
              value={password}
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-[10px] border border-gray-300 px-4 py-3 text-black outline-none"
            />
          </div>
          <button className="cursor-pointer rounded-[10px] bg-black px-4 py-3 text-white shadow-md hover:bg-gray-800">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
