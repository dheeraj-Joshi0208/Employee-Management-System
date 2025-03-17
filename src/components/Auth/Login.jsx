import { useState } from "react";
import PropTypes from "prop-types";

const Login = ({ loginHandler }) => {
  console.log(loginHandler);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    loginHandler(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex min-h-screen items-center justify-center rounded-lg p-3 sm:rounded-xl sm:p-4 md:rounded-2xl md:p-5 lg:p-6">
      <div className="w-full max-w-xs rounded-lg border border-gray-300 bg-white p-3 shadow-md sm:max-w-sm sm:rounded-xl sm:p-4 sm:shadow-lg md:max-w-md md:rounded-2xl md:p-6 lg:max-w-lg lg:p-8">
        <form
          onSubmit={submitHandler}
          className="flex flex-col gap-2 border-gray-800 sm:gap-3 md:gap-4"
        >
          <h1 className="text-xl font-bold text-gray-900 sm:text-2xl md:text-3xl">
            Login
          </h1>
          <p className="text-xs text-gray-500 sm:text-sm md:text-base">
            Enter your email below to login to your account
          </p>
          <div className="grid gap-1 pt-2 sm:gap-1.5 sm:pt-3">
            <label className="text-sm text-gray-900 sm:text-base md:text-lg">
              Email
            </label>
            <input
              onChange={(event) => setEmail(event.target.value)}
              required
              value={email}
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-md border border-gray-300 px-2 py-2 text-sm text-black outline-none sm:rounded-lg sm:px-3 sm:text-base md:px-4 md:py-3"
            />
          </div>
          <div className="grid gap-1 pt-2 sm:gap-1.5 sm:pt-3">
            <label className="text-sm text-gray-900 sm:text-base md:text-lg">
              Password
            </label>
            <input
              onChange={(event) => setPassword(event.target.value)}
              required
              value={password}
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-md border border-gray-300 px-2 py-2 text-sm text-black outline-none sm:rounded-lg sm:px-3 sm:text-base md:px-4 md:py-3"
            />
          </div>
          <button className="mt-2 cursor-pointer rounded-md bg-black px-3 py-2 text-sm text-white shadow-md hover:bg-gray-800 sm:rounded-lg sm:px-4 sm:py-3 sm:text-base">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

Login.propTypes = {
  loginHandler: PropTypes.func.isRequired,
};
export default Login;
