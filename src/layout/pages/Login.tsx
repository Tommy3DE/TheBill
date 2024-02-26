import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { login } = useAuth();
  const navigate = useNavigate();


  const requestBody = {
    email: email,
    password: password,
  };
  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://185.25.150.225/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        const { refresh, access } = await response.json();
        login(access, refresh);
        navigate('/logged')
      } else {
        toast.error("Błędne dane logowania", {
          position: "top-right",
          autoClose: 7000,
        });
      }
    } catch (error) {
      console.error("Błąd logowania:", error);
    }
  };
  return (
    <section className="h-screen">
      <Navbar />
      <div className="mt-32 flex flex-col w-full items-center text-2xl mx-auto max-w-[1980px]">
        <form
          onSubmit={handleLogin}
          className="p-5 lg:border-4 border-green-700 lg:w-1/4 lg:h-1/6 flex flex-col justify-center items-center rounded-lg"
        >
          <label htmlFor="mail">Email</label>
          <input
            type="email"
            id="mail"
            className="bg-slate-200 p-2 mt-2 mb-4 rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="pass">Hasło</label>
          <input
            type="password"
            id="pass"
            className="bg-slate-200 p-2 mt-2 rounded-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <a href="#" className="text-lg mt-2 underline hover:text-purple-700">
            Zapomniałeś hasła?
          </a>
          <button
            type="submit"
            className="w-full lg:w-auto lg:mt-5 mt-10 bg-green-700 text-white p-2 rounded-lg"
          >
            Zaloguj
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
