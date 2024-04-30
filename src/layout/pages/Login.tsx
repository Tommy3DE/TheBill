import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import FadeInWhenVisible from "../../components/FadeInWhenVisible";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleForgotPass = async () => {
    const emailParam = encodeURIComponent(email); 
    const url = `https://api.onebill.com.pl/api/reset_pass?email=${emailParam}`;
  
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });
  
    if (response.ok) {
      toast.info(
        "Jeżeli konto powiązane z tym adresem istnieje, otrzymasz link do zrestartowania hasła",
        {
          position: "top-right",
          autoClose: 7000,
        }
      );
    } else {
      toast.error("Wystąpił problem podczas wysyłania prośby o reset hasła");
    }
  };
  

  const requestBody = {
    email: email,
    password: password,
  };
  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://api.onebill.com.pl/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        const { refresh, access } = await response.json();
        login(access, refresh);
        localStorage.setItem("accessToken", access);
        localStorage.setItem("refreshToken", refresh);
        navigate("/logged");
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
      <FadeInWhenVisible>
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
            <div
              onClick={handleForgotPass}
              className="text-lg mt-2 underline hover:text-blue-700 cursor-pointer"
            >
              Zapomniałeś hasła?
            </div>
            <button
              type="submit"
              className="w-full lg:w-auto lg:mt-5 mt-10 bg-green-700 text-white p-2 rounded-lg"
            >
              Zaloguj
            </button>
          </form>
        </div>
      </FadeInWhenVisible>
    </section>
  );
};

export default Login;
