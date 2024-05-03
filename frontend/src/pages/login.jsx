import { useState } from "react";
import Navbar from "../components/NavBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/signin", {
        email: email,
        password: password,
      });
      alert("Sucessfull!");
      localStorage.setItem("authorized", true);
      navigate("/adminView", { replace: true });
    } catch (error) {
      alert("Email or Password doesn't match");
      navigate("/admin");
    }
  };
  return (
    <>
      <Navbar />
      <div className="bg-[url('https://media.cntraveler.com/photos/53ea87e3976f8f2d44d52081/master/w_1600,c_limit/durbar-palace-square-bhaktapur-nepal.jpg')]  bg-cover bg-no-repeat  h-screen max-w-full flex justify-center items-center  ">
        <form
          method="POST"
          onSubmit={loginHandler}
          className="h-80 border p-4 rounded-md"
        >
          <label className=" text-red-600 font-bold text-xl" htmlFor="email">
            Email
          </label>
          <br />
          <br />
          <input
            className="rounded-md p-2 bg-slate-300 text-black"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
          />
          <br />
          <label className=" text-red-600 font-bold text-xl" htmlFor="password">
            Password
          </label>
          <br />
          <br />
          <input
            className="rounded-md p-2 bg-slate-300 text-black"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
          />
          <br />
          <br />
          <button
            className="bg-green-700 p-2 text-white rounded-md w-36 "
            type="submit"
          >
            LogIn
          </button>
        </form>
      </div>
    </>
  );
};
export default LoginPage;
