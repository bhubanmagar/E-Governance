import Navbar from "../components/NavBar";

const LoginPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[url('https://media.cntraveler.com/photos/53ea87e3976f8f2d44d52081/master/w_1600,c_limit/durbar-palace-square-bhaktapur-nepal.jpg')]  bg-cover bg-no-repeat  h-screen max-w-full flex justify-center items-center text-red-600 font-bold text-2xl">
        <form action="" className="h-96 border p-4 rounded-md">
          <label htmlFor="email">Email</label>
          <br />
          <br />
          <input
            className="rounded-md p-2 bg-slate-300"
            type="email"
            name="email"
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <br />
          <input
            className="rounded-md p-2 bg-slate-300"
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
