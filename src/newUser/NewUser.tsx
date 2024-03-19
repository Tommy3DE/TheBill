import { ErrorMessage, useFormik, FormikProvider } from "formik";
import * as Yup from "yup";
import SlimNav from "../layout/SlimNav";

import { useState } from "react";
import { PricingTile, pricing } from "../layout/pages/Cennik/PricingOptions";
import { FaCheckCircle } from "react-icons/fa";

interface FormValues {
  login: string;
  pass: string;
  pass2: string;
  firstName: string;
  lastName: string;
  NIP: number | undefined;
  industry: string;
  numOfInvoices?: string;
}

const NewUser = () => {
  const [showPartTwo, setShowPartTwo] = useState(false);
  const [changePlan, setChangePlan] = useState(false)
  const formik = useFormik<FormValues>({
    initialValues: {
      login: "",
      pass: "",
      pass2: "",
      firstName: "",
      lastName: "",
      NIP: undefined,
      industry: "",
      numOfInvoices: "",
    },
    validationSchema: Yup.object().shape({
      login: Yup.string()
        .email("Podaj poprawny adres email")
        .required("Email jest wymagany"),
      pass: Yup.string().required("Hasło jest wymagane"),
      pass2: Yup.string()
        .oneOf([Yup.ref("pass")], "Hasła muszą się zgadzać")
        .required("Potwierdzenie jest wymagane"),
      firstName: Yup.string().required("Imię jest wymagane"),
      lastName: Yup.string().required("Nazwisko jest wymagane"),
      NIP: Yup.string()
        .matches(/^[0-9]{10}$/, "NIP powinien składać się z 10 cyfr")
        .required("NIP jest wymagany"),
      industry: Yup.string().required("Branża jest wymagana"),
      numOfInvoices: Yup.string().required("Proszę wybrać ilość faktur"),
    }),
    onSubmit: (values) => {
      console.log(values);

      const apiUrl = 'https://api.onebill.com.pl/api/register';

      const requestBody = {
        email: values.login,
        password: values.pass,
        NIP: values.NIP,
        first_name: values.firstName,
        last_name: values.lastName,
        industry: values.industry, 
        max_invoices: values.numOfInvoices,
        org_size: "JDG",
        package: 'Premium' 
      };

      fetch(apiUrl, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify(requestBody), 
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); 
      })
      .then(data => {
        console.log(data); 
        setShowPartTwo(prev => !prev); 
      })
      .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
      });
    }
    
  });
  const getSelectedPlan = (): PricingTile | undefined => {
    const selectedNumOfInvoices = formik.values.numOfInvoices;
    if (selectedNumOfInvoices === "Do 5") {
      return pricing[0];
    } else if (selectedNumOfInvoices === "Do 15") {
      return pricing[1];
    } else if (selectedNumOfInvoices === "Do 35") {
      return pricing[2];
    } else if (selectedNumOfInvoices === "Powyżej 35") {
      return pricing[3];
    }
  };
  const handlePlan = () => {
    setChangePlan(prev => !prev)
  }

  const handlePlanChange = (tileId: number): void => {
    const selectedTile = pricing.find(tile => tile.id === tileId);
    
    let numOfInvoicesValue: string = "";
  
    if (selectedTile) {
      if (selectedTile.point1.includes("7")) {
        numOfInvoicesValue = "Do 5";
      } else if (selectedTile.point1.includes("15")) {
        numOfInvoicesValue = "Do 15";
      } else if (selectedTile.point1.includes("35")) {
        numOfInvoicesValue = "Do 35";
      } else if (selectedTile.point1.toLowerCase().includes("nieograniczonej")) {
        numOfInvoicesValue = "Powyżej 35";
      }
    }
  
    if (numOfInvoicesValue !== "") {
      formik.setFieldValue("numOfInvoices", numOfInvoicesValue);
    }
    handlePlan()
  };

  return (
    <>
      <SlimNav />
      <div className="mx-auto max-w-[1980px]">
      {changePlan && 
        <div className="h-screen w-full bg-gray-300 bg-opacity-80 fixed top-0 left-0 flex flex-crow">
          {pricing.map((tile) => (
          <div
            key={tile.id}
            className="border-4 rounded-xl lg:w-1/4 lg:mx-4 my-5 lg:my-0 border-green-700 flex flex-col justify-evenly py-10 px-5 bg-white hover:bg-green-200 cursor-pointer"
            onClick={() => handlePlanChange(tile.id)}
          >
            <div className="flex flex-col items-center h-1/2">
              <h1
                className={`text-4xl text-center font-extrabold ${
                  tile.id === 0
                    ? "text-[#61E9B7]"
                    : tile.id === 1
                    ? "text-[#35D299]"
                    : tile.id === 2
                    ? "text-[#1A9367]"
                    : tile.id === 3
                    ? "text-[#C19F46]"
                    : ""
                }`}
              >
                {tile.title}
              </h1>
              <img
                src={tile.img}
                alt={tile.title}
                className="mt-10 rounded-lg h-72"
              />
              <div className="h-1 bg-green-700 w-full my-5" />
              <h1 className=" text-[#1A9367]">
              {tile.priceMth === 0
                    ? "Plan darmowy"
                    : `${tile.priceMth} miesięcznie lub ${tile.priceYrl} rocznie`}
              </h1>
              
            </div>
            <div className="flex flex-col mt-5 justify-start h-1/2">
              <div className="flex flex-row items-center w-full mb-3">
                <FaCheckCircle className="text-lg mr-2 w-1/6 text-green-500" />
                <p className="font-bold text-lg w-5/6">{tile.point1}</p>
              </div>
              <div className="flex flex-row items-center w-full mb-3">
                <FaCheckCircle className="text-lg mr-2 w-1/6 text-green-500" />
                <p className="font-bold text-lg w-5/6">{tile.point2}</p>
              </div>
              <div className="flex flex-row items-center w-full mb-3">
                <FaCheckCircle className="text-lg mr-2 w-1/6 text-green-500" />
                <p className="font-bold text-lg w-5/6">{tile.point3}</p>
              </div>
              {tile.point4 !== "" && (
                <div className="flex flex-row items-center w-full mb-3">
                  <FaCheckCircle className="text-lg mr-2 w-1/6 text-green-500" />
                  <p className="font-bold text-lg w-5/6">{tile.point4}</p>
                </div>
              )}
              {tile.point5 !== "" && (
                <div className="flex flex-row items-center w-full mb-3">
                  <FaCheckCircle className="text-lg mr-2 w-1/6 text-green-500" />
                  <p className="font-bold text-lg w-5/6">{tile.point5}</p>
                </div>
              )}
              {tile.point6 !== "" && (
                <div className="flex flex-row items-center w-full mb-3">
                  <FaCheckCircle className="text-lg mr-2 w-1/6 text-green-500" />
                  <p className="font-bold text-lg w-5/6">{tile.point6}</p>
                </div>
              )}
              {tile.point7 !== "" && (
                <div className="flex flex-row items-center w-full mb-3">
                  <FaCheckCircle className="text-lg mr-2 w-1/6 text-green-500" />
                  <p className="font-bold text-lg w-5/6">{tile.point7}</p>
                </div>
              )}
              {tile.point8 !== "" && (
                <div className="flex flex-row items-center w-full mb-3">
                  <FaCheckCircle className="text-lg mr-2 w-1/6 text-green-500" />
                  <p className="font-bold text-lg w-5/6">{tile.point8}</p>
                </div>
              )}
            </div>
          </div>
        ))}
        </div>
      }
      {showPartTwo === false && (
        <FormikProvider value={formik}>
          <section className="lg:mt-14 mt-24 flex flex-col items-center font-poppins w-full">
            <form
              onSubmit={formik.handleSubmit}
              className="w-full flex flex-col items-center text-3xl mt-12"
            >
              <div className="flex lg:flex-row flex-col justify-between items-center lg:w-2/4 w-full mb-4">
                <label htmlFor="firstName" className=" mb-2">
                  Email
                </label>
                <input
                  id="login"
                  name="login"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.login}
                  className="bg-slate-100 lg:w-3/5 w-[90%] placeholder:text-center rounded-lg border-2 border-black mb-4"
                />
              </div>
              <ErrorMessage
                name="login"
                component="div"
                className="text-sm text-red-600 -mt-4 w-1/2 lg:text-end text-center"
              />
              <div className="flex lg:flex-row flex-col justify-between items-center lg:w-2/4 w-full mb-4">
                <label htmlFor="pass" className="mb-2">
                  Hasło
                </label>
                <input
                  id="pass"
                  name="pass"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.pass}
                  className="bg-slate-100 lg:w-3/5 w-[90%] placeholder:text-center rounded-lg border-2 border-black mb-4"
                />
              </div>
              <ErrorMessage
                name="pass"
                component="div"
                className="text-sm text-red-600 -mt-4 w-1/2 lg:text-end text-center"
              />
              <div className="flex lg:flex-row flex-col justify-between items-center lg:w-2/4 w-full mb-4">
                <label htmlFor="pass2" className="mb-2">
                  Powtórz Hasło
                </label>
                <input
                  id="pass2"
                  name="pass2"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.pass2}
                  className="bg-slate-100 lg:w-3/5 w-[90%] placeholder:text-center rounded-lg border-2 border-black mb-4"
                />
              </div>
              <ErrorMessage
                name="pass2"
                component="div"
                className="text-sm text-red-600 -mt-4 w-1/2 lg:text-end text-center"
              />
              <div className="flex lg:flex-row flex-col justify-between items-center lg:w-2/4 w-full mb-4">
                <label htmlFor="firstName" className="mb-2">
                  Imię
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                  className="bg-slate-100 lg:w-3/5 w-[90%] placeholder:text-center rounded-lg border-2 border-black mb-4"
                />
              </div>
              <ErrorMessage
                name="firstName"
                component="div"
                className="text-sm text-red-600 -mt-4 w-1/2 lg:text-end text-center"
              />
              <div className="flex lg:flex-row flex-col justify-between items-center lg:w-2/4 w-full mb-4">
                <label htmlFor="lastName" className="mb-2">
                  Nazwisko
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                  className="bg-slate-100 lg:w-3/5 w-[90%] placeholder:text-center rounded-lg border-2 border-black mb-4"
                />
              </div>
              <ErrorMessage
                name="lastName"
                component="div"
                className="text-sm text-red-600 -mt-4 w-1/2 lg:text-end text-center"
              />
              <div className="flex lg:flex-row flex-col justify-between items-center lg:w-2/4 w-full mb-4">
                <label htmlFor="nip" className="mb-2">
                  Numer NIP
                </label>
                <input
                  id="nip"
                  name="NIP"
                  type="number"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.NIP}
                  className="bg-slate-100 lg:w-3/5 w-[90%] placeholder:text-center rounded-lg border-2 border-black mb-4"
                />
              </div>
              <ErrorMessage
                name="NIP"
                component="div"
                className="text-sm text-red-600 -mt-4 w-1/2 lg:text-end text-center"
              />
              <div className="flex lg:flex-row flex-col justify-between items-center lg:w-2/4 w-full mb-4">
                <label htmlFor="industry" className="mb-2">
                  Branża
                </label>
                <select
                  id="industry"
                  name="industry"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.industry}
                  defaultValue={''}
                  className="text-3xl bg-slate-100 lg:w-3/5 w-[90%] placeholder:text-center rounded-lg border-2 border-black mb-4 text-gray-700"
                >
                  <option value="" disabled  hidden className="">
                    Wybierz branżę
                  </option>
                  <option value="IT">IT</option>
                  <option value="Księgowość">Księgowość</option>
                  <option value="Edukacja">Edukacja</option>
                  <option value="Zdrowie">Zdrowie</option>
                  <option value="Budowlana">Budowlana</option>
                  <option value="Beauty">Beauty</option>
                  <option value="Usługi">Usługi</option>
                  <option value="Inna">Inna</option>
                </select>
              </div>
              <ErrorMessage
                name="industry"
                component="div"
                className="text-sm text-red-600 -mt-4 w-1/2 lg:text-end text-center"
              />
              <div className="flex lg:flex-row flex-col justify-between items-center lg:w-2/4 w-full mb-4">
                <label htmlFor="numOfInvoices" className="mb-2">
                  Ilosć faktur kosztowych
                </label>
                <select
                  id="numOfInvoices"
                  name="numOfInvoices"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  defaultValue={''}
                  value={formik.values.numOfInvoices}
                  className="text-3xl bg-slate-100 lg:w-3/5 w-[90%] placeholder:text-center rounded-lg border-2 border-black mb-4 text-gray-700"
                >
                  <option value="" disabled hidden className="">
                    Wybierz ilość
                  </option>
                  <option value="Do 5">Do 5</option>
                  <option value="Do 15">Do 15</option>
                  <option value="Do 35">Do 35</option>
                  <option value="Powyżej 35">Powyżej 35</option>
                </select>
              </div>
              <ErrorMessage
                name="numOfInvoices"
                component="div"
                className="text-sm text-red-600 -mt-4 w-1/2 lg:text-end text-center"
              />

              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded mt-4"
              >
                Dalej
              </button>
            </form>
          </section>
        </FormikProvider>
      )}
      {showPartTwo && (
        <section className="lg:mt-14 mt-24 flex flex-col items-center font-poppins w-full">
          <div className="w-full my-12 flex flex-row justify-evenly  items-center">
            <button className="lg:text-2xl px-4 py-2 bg-blue-300 rounded lg:w-1/6" onClick={handlePlan}>
              Zmień plan
            </button>
            <h1 className="lg:text-4xl px-4 py-2 text-center lg:w-1/3 hidden lg:block">
              Zalecamy plan:
            </h1>
            <button className="lg:text-2xl px-4 py-2 bg-green-300 rounded lg:w-1/6">
              Przejdź do Płatności
            </button>
          </div>

          {(() => {
            const selectedPlan = getSelectedPlan();
            console.log(selectedPlan);
            if (!selectedPlan) {
              return <p>No plan selected</p>;
            }
            return (
              <div className="border-4 rounded-xl lg:w-1/4 lg:mx-4  lg:my-0 border-green-700 flex flex-col justify-evenly py-10 px-5 bg-white">
                <img
                  src={selectedPlan.img}
                  alt="plan"
                  className="rounded-lg h-[90%] w-[90%] mx-auto "
                />
                <h2 className={`text-4xl text-center font-bold my-2`}>
                  {selectedPlan.title}
                </h2>
                <h2 className="text-center my-3">
                  {selectedPlan.priceMth === 0
                    ? "Plan darmowy"
                    : `${selectedPlan.priceMth} miesięcznie lub ${selectedPlan.priceYrl} rocznie`}
                </h2>
                <div className="h-1 bg-green-700 w-full  mb-2" />
                {Object.entries(selectedPlan)
                  .filter(([key, value]) => key.startsWith("point") && value)
                  .map(([key, value]) => (
                    <p
                      key={key}
                      className="flex flex-row items-start w-full mb-5"
                    >
                      <FaCheckCircle className="text-3xl mr-2 text-green-500" />
                      <span className=" text-lg w-5/6">{value}</span>
                    </p>
                  ))}
              </div>
            );
          })()}
          
        </section>
      )}
      </div>
    </>
  );
};

export default NewUser;
