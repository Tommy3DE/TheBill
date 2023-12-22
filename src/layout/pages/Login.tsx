import Navbar from "../Navbar";

const Login = () => {
  return (
    <section className="h-screen">
      <Navbar />
      <div className="mt-32 flex flex-col w-full items-center text-2xl">
        <div className="p-5 border-4 border-green-700 w-1/2 h-1/6 flex flex-col justify-center items-center">
          <label htmlFor="mail">Email</label>
          <input type="email" id="mail" className="bg-slate-200 p-2 rounded-lg" />
          <label htmlFor="pass">Hasło</label>
          <input type="password" id="pass" className="bg-slate-200 p-2 rounded-lg"/>
        </div>
      </div>
    </section>
  );
};

export default Login;
