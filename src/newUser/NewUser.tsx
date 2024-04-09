import { ErrorMessage, useFormik, FormikProvider } from "formik";
import * as Yup from "yup";
import SlimNav from "../layout/SlimNav";

import { useState } from "react";
import { PricingTile, pricing } from "../layout/pages/Cennik/PricingOptions";
import { FaCheckCircle } from "react-icons/fa";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Footer from "../layout/Footer";

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
  const [changePlan, setChangePlan] = useState(false);
  const [wantInvoice, setWantInvoice] = useState(false);
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
      setShowPartTwo((prev) => !prev);

      const apiUrl = "https://api.onebill.com.pl/api/register";

      const requestBody = {
        email: values.login,
        password: values.pass,
        NIP: values.NIP,
        first_name: values.firstName,
        last_name: values.lastName,
        industry: values.industry,
        max_invoices: values.numOfInvoices,
        org_size: "JDG",
        package: "Premium",
      };

      fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setShowPartTwo((prev) => !prev);
        })
        .catch((error) => {
          console.error(
            "There was a problem with your fetch operation:",
            error
          );
        });
    },
  });
  const getSelectedPlan = (): PricingTile | undefined => {
    const selectedNumOfInvoices = formik.values.numOfInvoices;
    if (selectedNumOfInvoices === "Standard") {
      return pricing[0];
    } else if (selectedNumOfInvoices === "Premium") {
      return pricing[1];
    } else if (selectedNumOfInvoices === "Biznes") {
      return pricing[2];
    }
  };
  const handlePlan = () => {
    setChangePlan((prev) => !prev);
  };
  const handleInvoice = () => {
    setWantInvoice((prev) => !prev);
  };

  const handlePlanChange = (tileId: number): void => {
    const selectedTile = pricing.find((tile) => tile.id === tileId);

    let numOfInvoicesValue: string = "";

    if (selectedTile) {
      if (selectedTile.point1.includes("15")) {
        numOfInvoicesValue = "Standard";
      } else if (selectedTile.point1.includes("35")) {
        numOfInvoicesValue = "Premium";
      } else if (
        selectedTile.point1.toLowerCase().includes("nieograniczonej")
      ) {
        numOfInvoicesValue = "Biznes";
      }
    }

    if (numOfInvoicesValue !== "") {
      formik.setFieldValue("numOfInvoices", numOfInvoicesValue);
    }
    handlePlan();
  };

  return (
    <>
      <SlimNav />
      <div className="mx-auto max-w-[1980px]">
        {changePlan && (
          <div className="h-screen w-full bg-gray-300 bg-opacity-80 fixed top-0 left-0 flex flex-row justify-center">
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
                  {tile.point5 && (
                    <div className="flex flex-row items-center w-full mb-3">
                      <FaCheckCircle className="text-lg mr-2 w-1/6 text-green-500" />
                      <p className="font-bold text-lg w-5/6">{tile.point5}</p>
                    </div>
                  )}
                  {tile.point6 && (
                    <div className="flex flex-row items-center w-full mb-3">
                      <FaCheckCircle className="text-lg mr-2 w-1/6 text-green-500" />
                      <p className="font-bold text-lg w-5/6">{tile.point6}</p>
                    </div>
                  )}
                  {tile.point7 && (
                    <div className="flex flex-row items-center w-full mb-3">
                      <FaCheckCircle className="text-lg mr-2 w-1/6 text-green-500" />
                      <p className="font-bold text-lg w-5/6">{tile.point7}</p>
                    </div>
                  )}
                  {tile.point8 && (
                    <div className="flex flex-row items-center w-full mb-3">
                      <FaCheckCircle className="text-lg mr-2 w-1/6 text-green-500" />
                      <p className="font-bold text-lg w-5/6">{tile.point8}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
        {showPartTwo === false && (
          <FormikProvider value={formik}>
            <section className="lg:mt-14 mt-24 flex flex-col items-center font-poppins w-full">
              <form
                onSubmit={formik.handleSubmit}
                className="w-full flex flex-col items-center text-3xl mt-12"
              >
                <div className="mb-6 w-full flex flex-col items-center">
                  <input
                    id="login"
                    name="login"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.login}
                    placeholder="Adres email"
                    className="form-input mt-1 shadow-sm rounded-lg border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 w-2/4"
                  />
                  <ErrorMessage
                    name="login"
                    component="div"
                    className="text-sm text-red-600"
                  />
                </div>
                <div className="mb-6 w-full flex flex-col items-center">
                  <input
                    id="pass"
                    name="pass"
                    type="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.pass}
                    placeholder="Hasło"
                    className="form-input mt-1 shadow-sm rounded-lg border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 w-2/4"
                  />
                  <ErrorMessage
                    name="pass"
                    component="div"
                    className="text-sm text-red-600"
                  />
                </div>
                <div className="mb-6 w-full flex flex-col items-center">
                  <input
                    id="pass2"
                    name="pass2"
                    type="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.pass2}
                    placeholder="Powtórz Hasło"
                    className="form-input mt-1 shadow-sm rounded-lg border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 w-2/4"
                  />
                  <ErrorMessage
                    name="pass2"
                    component="div"
                    className="text-sm text-red-600"
                  />
                </div>

                <div className="mb-6 w-full flex flex-col items-center">
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                    placeholder="Imię"
                    className="form-input mt-1 shadow-sm rounded-lg border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 w-2/4"
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="text-sm text-red-600"
                  />
                </div>

                <div className="mb-6 w-full flex flex-col items-center">
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                    placeholder="Nazwisko"
                    className="form-input mt-1 shadow-sm rounded-lg border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 w-2/4"
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="text-sm text-red-600"
                  />
                </div>

                <div className="mb-6 w-full flex flex-col items-center">
                  <input
                    id="nip"
                    name="NIP"
                    type="number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.NIP}
                    placeholder="Numer NIP"
                    className="form-input mt-1 shadow-sm rounded-lg border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 w-2/4"
                  />
                  <ErrorMessage
                    name="NIP"
                    component="div"
                    className="text-sm text-red-600"
                  />
                </div>

                <div className="mb-6 w-full flex flex-col items-center">
                  <select
                    id="industry"
                    name="industry"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.industry}
                    defaultValue={""}
                    className="form-input mt-1 shadow-sm rounded-lg border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 w-2/4"
                  >
                    <option value="" disabled hidden className="">
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
                  <ErrorMessage
                    name="industry"
                    component="div"
                    className="text-sm text-red-600"
                  />
                </div>

                <div className="mb-6 w-full flex flex-col items-center">
                  <select
                    id="numOfInvoices"
                    name="numOfInvoices"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    defaultValue={""}
                    value={formik.values.numOfInvoices}
                    className="form-input mt-1 shadow-sm rounded-lg border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 w-2/4"
                  >
                    <option value="" disabled hidden className="">
                      Ilość miesięcznych faktur
                    </option>
                    <option value="Standard">Do 15</option>
                    <option value="Premium">Do 35</option>
                    <option value="Biznes">Powyżej 35</option>
                  </select>
                  <ErrorMessage
                    name="numOfInvoices"
                    component="div"
                    className="text-sm text-red-600"
                  />
                </div>

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
          <section className="lg:mt-14 mt-24 flex flex-col items-center font-poppins lg:mx-[15%]">
            {(() => {
              const selectedPlan = getSelectedPlan();
              if (!selectedPlan) {
                return <p>No plan selected</p>;
              }
              return (
                <>
                  <div className="font-playFair mb-10">
                    <h1 className="text-5xl mt-24 font-bold">
                      <span className="text-[#1A9367]">Podsumowanie</span>{" "}
                      zamówienia
                    </h1>
                    <p className="text-3xl font-bold text-center my-5">
                      Dla konta
                    </p>
                    <p className="flex flex-row items-center justify-center text-4xl">
                      <HiOutlineEnvelope className="mr-2 text-4xl" />{" "}
                      {formik.values.login}
                    </p>
                  </div>
                  <div className="w-full bg-[#1A9367] p-6 flex lg:flex-row flex-col rounded-xl">
                    <div className="lg:w-1/3 rounded-xl flex flex-col items-start bg-slate-100 lg:mr-8 p-10">
                      <h1 className="font-playFair text-4xl mx-auto">
                        Podsumowanie
                      </h1>
                      <div className="border border-green-700 my-5 w-full">
                        {" "}
                      </div>
                      <div className="flex justify-between w-full items-center">
                        <h1 className="font-bold text-xl">Plan:</h1>
                        <h1 className="font-bold text-xl">
                          {selectedPlan.title}
                        </h1>
                      </div>
                      <div className="flex justify-between w-full items-center">
                        <h1 className="font-bold text-xl">Cena netto:</h1>
                        <h1 className="font-bold text-xl">
                          {(selectedPlan.priceMth * 0.77).toFixed(2)}
                        </h1>
                      </div>
                      <div className="flex justify-between w-full items-center">
                        <h1 className="font-bold text-xl">VAT:</h1>
                        <h1 className="font-bold text-xl">
                          {(selectedPlan.priceMth * 0.23).toFixed(2)}
                        </h1>
                      </div>
                      <div className="border border-green-700 my-5 w-full">
                        {" "}
                      </div>
                      <div className="flex justify-between w-full items-center">
                        <h1 className="text-2xl font-bold text-[#1A9367]">
                          Razem:
                        </h1>
                        <h1 className="text-2xl font-bold text-[#1A9367]">
                          {selectedPlan.priceMth}
                        </h1>
                      </div>
                      {wantInvoice && (
                        <div className="my-5 -mx-3">
                          <h2 className="text-center text-2xl  font-playFair font-bold">
                            Dane do Faktury
                          </h2>
                          <p>NIP</p>
                          <input type="text" value={formik.values.NIP} />
                          <p>Nazwa Firmy</p>
                          <input type="text" />
                          <p>Adres</p>
                          <input type="text" />
                        </div>
                      )}
                    </div>

                    <div className="lg:w-2/3 rounded-xl flex flex-col bg-white mt-5 lg:mt-0">
                      <div className="flex flex-row justify-around items-center">
                        <h1 className="text-5xl text-[#35D299] font-poppins font-bold">
                          {selectedPlan.title}
                        </h1>
                        <img
                          src={selectedPlan.img}
                          alt={selectedPlan.title}
                          className="h-24"
                        />
                      </div>
                      <div className="border border-green-700 my-5 w-full">
                        {" "}
                      </div>
                      {Object.entries(selectedPlan)
                        .filter(
                          ([key, value]) => key.startsWith("point") && value
                        )
                        .map(([key, value]) => (
                          <p
                            key={key}
                            className="flex flex-row items-start w-full mb-5 lg:mx-10 mx-2"
                          >
                            <FaCheckCircle className="text-3xl mr-2 text-green-500" />
                            <span className=" text-xl w-5/6">{value}</span>
                          </p>
                        ))}
                      <div className="mx-auto my-5">
                        <button
                          className="px-4 py-2  rounded-lg text-2xl hover:scale-95 bg-green-300"
                          onClick={() => handlePlanChange(selectedPlan.id)}
                        >
                          Zmien Plan
                        </button>
                      </div>
                    </div>
                  </div>
                  <p className="mb-3 mt-5">
                    <input
                      type="checkbox"
                      name="invoice"
                      id="inv1"
                      className="mr-2 w-6 h-6"
                      onClick={handleInvoice}
                    />
                    <span className="text-[#1A9367] font-playFair text-3xl">
                      Chcę otrzymać fakturę
                    </span>
                  </p>
                  <p className="flex flex-row justify-around items-center ">
                    <input
                      type="checkbox"
                      name="regulamin"
                      id="reg1"
                      className=" w-6 h-6 mr-2"
                    />
                    <span className="text-xl">
                      Akceptuję regulamin płatności
                    </span>
                  </p>
                  <Link to="/newUser/paymentPage">
                    <button className="bg-[#1A9367] mx-auto px-10 py-4 font-playFair text-3xl rounded-full text-white my-10">
                      Zamawiam i płacę
                    </button>
                  </Link>
                  <Footer />
                </>
              );
            })()}
          </section>
        )}
      </div>
    </>
  );
};

export default NewUser;
