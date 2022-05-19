import ArrowLink from "@/components/interactive/links/ArrowLink";
import { useState } from "react";
import Axios from "axios";

function Login() {
  const [usernameLog, setUsernameLog] = useState("");
  const [passwordLog, setPasswordLog] = useState("");

  const accLogin = () => {
    Axios.post("http://localhost:3000/account/login", {
      username: usernameLog,
      password: passwordLog,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="bg-stone-800 text-white ">
      <div className="bg-stone-800 grid h-screen flex flex-col">
        <div className="ml-auto mr-4 mt-4">
          <span className="">
            <ArrowLink className="" href="/">
              Home
            </ArrowLink>
          </span>
        </div>
        <div className="w-full max-w-xs m-auto">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="username"
              >
                USERNAME
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                onChange={(e) => {
                  setUsernameLog(e.target.value);
                }}
              />
            </div>
            <div className="mb-2">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="password"
              >
                PASSWORD
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setPasswordLog(e.target.value);
                }}
              />
              <p className="text-red-500 text-xs italic">
                Please choose a password.
              </p>
            </div>
            <div className="flex items-center justify-between">
              <button onClick={accLogin}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign In
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="/account/signup"
              >
                Sign up here
              </a>
            </div>
          </form>
          <p className="text-center text-gray-500 text-xs">
            &copy;2021 Deals.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
