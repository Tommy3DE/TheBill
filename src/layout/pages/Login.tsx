import Navbar from "../Navbar";

const Login = () => {
  return (
    <section className="h-screen">
      <Navbar />
      <div className="mt-32 flex flex-col w-full items-center text-2xl">
        <div className="p-5 lg:border-4 border-green-700 lg:w-1/4 lg:h-1/6 flex flex-col justify-center items-center rounded-lg">
          <label htmlFor="mail">Email</label>
          <input type="email" id="mail" className="bg-slate-200 p-2 mt-2 mb-4 rounded-lg" />
          <label htmlFor="pass">Hasło</label>
          <input type="password" id="pass" className="bg-slate-200 p-2 mt-2 rounded-lg"/>
          <a href="" target="_blank" className="text-lg mt-2 underline hover:text-purple-700">Zapomniałeś hasła?</a>
          <button className="w-full lg:w-auto lg:mt-5 mt-10 bg-green-700 text-white p-2 rounded-lg">
            Zaloguj
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
