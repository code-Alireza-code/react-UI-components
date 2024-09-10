import { FaLock, FaUser } from "react-icons/fa";

function LoginForm() {
  return (
    <div className="w-[420px] bg-transparent border-2 border-solid border-white/20 shadow-[customShadow] text-white rounded-[10px] py-8 px-10">
      <form>
        <h1 className="text-[36px] text-center">Login</h1>
        <div className="relative w-full h-[50px] my-8 mx-0">
          <input
            type="text"
            placeholder="Username"
            className="w-full h-full bg-transparent outline-none border-2 border-solid border-white/20 rounded-[40px] text-[16px] text-white py-5 pr-12 pl-5 placeholder:text-white"
          />
          <FaUser className="absolute right-5 top-1/2 -translate-y-1/2 text-[20px]" />
        </div>
        <div className="relative w-full h-[50px] my-8 mx-0">
          <input
            type="password"
            placeholder="Password"
            className="w-full h-full bg-transparent outline-none border-2 border-solid border-white/20 rounded-[40px] text-[16px] text-white py-5 pr-12 pl-5 placeholder:text-white"
          />
          <FaLock className="absolute right-5 top-1/2 -translate-y-1/2 text-[20px]" />
        </div>
        <div className="flex justify-between text-[14.5px] -mt-4 mx-0 mb-4">
          <label>
            <input type="checkbox" className="accent-white mr-1" />
            Remeber me
          </label>
          <a href="#" className="text-white no-underline hover:underline">
            forgot password?
          </a>
        </div>
        <button
          type="submit"
          className="w-full h-[45px] bg-white border-none outline-none rounded-[40px] shadow-[customShadow] cursor-pointer text-[16px] text-[#333] font-semibold"
        >
          Login
        </button>
        <div className="text-[14.5px] text-center mt-5 mx-0 mb-4">
          <p>
            Don't have an account ?{" "}
            <a
              href="#"
              className="text-white no-underline font-semibold hover:underline"
            >
              Register
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
