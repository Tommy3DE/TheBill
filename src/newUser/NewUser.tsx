import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormikProps } from "formik";
import { useFormikContext } from "formik";
import SlimNav from "../layout/SlimNav";
import bida from "../assets/pricing/bida.png";
import fab from "../assets/pricing/fab.png";
import prem from "../assets/pricing/prem.png";
import standard from "../assets/pricing/standard.png";
import * as Yup from "yup";
import { Link } from "react-router-dom";

interface FormValues {
  login: string;
  pass: string;
  pass2: string;
  firstName: string;
  lastName: string;
  NIP: string;
  industry: string;
  orgSize: string;
  numOfInvoices: string;
  phoneNum: string;
}
interface DisplayFieldValueProps {
  fieldName: keyof FormValues;
}

const DisplayFieldValue: React.FC<DisplayFieldValueProps> = ({ fieldName }) => {
  const { values } = useFormikContext<FormValues>();
  return <div className="text-2xl mb-6">{values[fieldName]}</div>;
};

const NewUser = () => {
  const [step, setStep] = useState<number>(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedAmount, setSelectedAmount] = useState<string>("");

  useEffect(() => console.log(selectedAmount), [selectedAmount]);

  interface PlancardProps {
    val: string | null;
  }

  const Plancard: React.FC<PlancardProps> = ({ val }) => {
    const getPlanDetails = (value: string | null) => {
      switch (value) {
        case "Do 5":
          return { name: "Darmowy", image: bida, price: "0" };
        case "Do 15":
          return { name: "Standard", image: standard, price: "29.99" };
        case "Do 35":
          return { name: "Premium", image: prem, price: "69.99" };
        case "Powyżej 35":
          return { name: "Biznes", image: fab, price: "99.99" };
        default:
          return { name: "", image: null, price: "0.00" };
      }
    };

    const planDetails = getPlanDetails(val);

    return (
      <div className="w-1/2 flex flex-col items-center p-4 mr-[15%]">
        <h2 className="text-2xl mb-5">Rekomendowany plan:</h2>
        <div className="border-4 rounded-md border-[#1A9367] w-1/2 p-4">
          {planDetails.image && (
            <img
              src={planDetails.image}
              alt={planDetails.name}
              className="mx-auto"
            />
          )}
          <h1 className="text-4xl text-center pt-8">{planDetails.name}</h1>
          <h3 className="text-center text-xl pb-8">
            {planDetails.price} zł/mies
          </h3>
        </div>
      </div>
    );
  };

  const initialValues: FormValues = {
    login: "",
    pass: "",
    pass2: "",
    firstName: "",
    lastName: "",
    NIP: "",
    industry: "",
    orgSize: "",
    numOfInvoices: "",
    phoneNum: "",
  };

  const handleNextStep = () => {
    setStep((prev) => prev + 1);
  };

  const handleSizeSelect = (
    size: string,
    setFieldValue: FormikProps<FormValues>["setFieldValue"]
  ) => {
    setFieldValue("orgSize", size);
    setSelectedSize(size);
  };

  const handleAmountSelect = (
    amount: string,
    setFieldValue: FormikProps<FormValues>["setFieldValue"]
  ) => {
    setFieldValue("numOfInvoices", amount);
    setSelectedAmount(amount);
  };

  const handleSubmit = (values: FormValues) => {
    console.log(values);
    setStep((prev) => prev + 1);
  };

  const validationSchema = Yup.object().shape({
    login: Yup.string()
      .email("Podaj poprawny adres email")
      .required("Login jest wymagany"),
    pass: Yup.string().required("Hasło jest wymagane"),
    pass2: Yup.string()
      .oneOf([Yup.ref("pass")], "Hasła muszą się zgadzać")
      .required("Potwierdzenie hasła jest wymagane"),
    firstName: Yup.string().required("Imię jest wymagane"),
    lastName: Yup.string().required("Nazwisko jest wymagane"),
    NIP: Yup.string()
      .matches(/^[0-9]{10}$/, "NIP musi składać się z 10 cyfr")
      .required("NIP jest wymagany"),
    industry: Yup.string().required("Branża jest wymagana"),
    orgSize: Yup.string().required("Proszę wybrać rozmiar organizacji"),
    numOfInvoices: Yup.string().required("Proszę wybrać ilość faktur"),
    phoneNum: Yup.string().matches(
      /^[0-9]{9}$/,
      "Numer telefonu musi składać się z 9 cyfr"
    ),
  });

  return (
    <>
      <SlimNav />
      <section className="mt-14 flex flex-col items-center font-poppins">
        {(step === 1 || step === 0) && (
          <>
            <h1 className="text-4xl">
              Do założenia konta, potrzebne są następujące informacje
            </h1>

            <h3 className="mt-4 italic text-gray-400">
              Od automatycznego zarządzania swoimi kosztami dzieli Cię 90 sekund
            </h3>
          </>
        )}
        {step === 2 && (
          <h1 className="mb-10 text-4xl">
            Wybierz opcję odpowiadającą Twojemu biznesowi
          </h1>
        )}
        {step === 3 && (
          <h1 className="mb-10 text-4xl">
            Ile faktur kosztowych otrzymujesz każdego miesiąca?
          </h1>
        )}
        {step === 4 && (
          <h1 className="mb-5 text-4xl">
            Sprawdź, czy dane które podałeś we wcześniejszych formularzach są
            zgodne
          </h1>
        )}
        {step === 5 && (
          <>
            <h1 className="mb-5 text-4xl font-bold">
              Połącz swój WhatsApp do skanowania rachunków papierowych
            </h1>
            <h3 className="mt-4 italic text-gray-400">
              Będziesz mógł łatwo skanować faktury papierowe (za paliwo, z
              supermarketu, itp.) i przesyłać je do aplikacji
            </h3>
          </>
        )}
        {step === 6 && <h1 className="mb-5 text-4xl">Podsumowanie</h1>}

        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ setFieldValue, values, isValid }) => (
            <Form className="flex flex-col w-full items-center">
              {step === 0 && (
                <>
                  <Field
                    name="login"
                    type="email"
                    className="text-4xl bg-slate-100 w-1/5 placeholder:text-center rounded-lg border-2 border-black mt-10"
                    placeholder="Login"
                  />
                  <ErrorMessage name="login" />

                  <Field
                    name="pass"
                    type="text"
                    className="text-4xl bg-slate-100 w-1/5 placeholder:text-center rounded-lg border-2 border-black mt-6"
                    placeholder="Hasło"
                  />
                  <ErrorMessage name="pass" />
                  <Field
                    name="pass2"
                    type="text"
                    className="text-4xl bg-slate-100 w-1/5 placeholder:text-center rounded-lg border-2 border-black mt-6"
                    placeholder="Powtórz Hasło"
                  />
                  <ErrorMessage name="pass2" />
                  {step === 0 && isValid && (
                    <button
                      className="w-1/5 text-4xl mt-12 bg-[#1A9367] p-3 rounded-lg text-white border-2 border-black shadow-2xl"
                      onClick={handleNextStep}
                    >
                      Kontynuuj
                    </button>
                  )}
                </>
              )}
              {step === 1 && (
                <>
                  <Field
                    name="firstName"
                    type="text"
                    className="text-4xl bg-slate-100 w-1/5 placeholder:text-center rounded-lg border-2 border-black mt-10"
                    placeholder="Imię"
                  />
                  <ErrorMessage name="firstName" />

                  <Field
                    name="lastName"
                    type="text"
                    className="text-4xl bg-slate-100 w-1/5 placeholder:text-center rounded-lg border-2 border-black mt-6"
                    placeholder="Nazwisko"
                  />
                  <ErrorMessage name="lastName" />

                  <Field
                    name="NIP"
                    type="text"
                    className="text-4xl bg-slate-100 w-1/5 placeholder:text-center rounded-lg border-2 border-black mt-6"
                    placeholder="NIP"
                  />
                  <ErrorMessage name="NIP" />

                  <Field
                    as="select"
                    name="industry"
                    className="text-4xl bg-slate-100 w-1/5  rounded-lg border-2 border-black mt-6"
                  >
                    <option value="" disabled selected hidden>
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
                  </Field>
                  <ErrorMessage name="industry" />

                  {values.firstName !== "" &&
                    values.lastName !== "" &&
                    values.NIP !== "" &&
                    values.industry !== "" && (
                      <button
                        className="w-1/5 text-4xl mt-12 bg-[#1A9367] p-3 rounded-lg text-white border-2 border-black shadow-2xl"
                        onClick={handleNextStep}
                      >
                        Kontynuuj
                      </button>
                    )}
                </>
              )}
              {step === 2 && (
                <div className="flex flex-row space-x-4 mt-4 justify-center">
                  <button
                    type="button"
                    onClick={() => handleSizeSelect("JDG", setFieldValue)}
                    className={`w-1/2  border-2 rounded p-4 h-[450px] border-green-800 text-2xl ${
                      selectedSize === "JDG" ? "bg-green-200" : "bg-slate-100"
                    }`}
                  >
                    Jednoosobowa działalność gospodarcza
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      handleSizeSelect("Mikro - przedsiębiorca", setFieldValue)
                    }
                    className={`w-1/5  border-2 rounded p-4 hidden h-[450px] border-green-800 text-2xl ${
                      selectedSize === "Mikro - przedsiębiorca"
                        ? "bg-green-200"
                        : "bg-slate-100"
                    }`}
                  >
                    Mikro - przedsiębiorca
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      handleSizeSelect("Biuro Rachunkowe", setFieldValue)
                    }
                    className={`w-1/5 border-2 rounded p-4 hidden h-[450px] border-green-800 text-2xl ${
                      selectedSize === "Biuro Rachunkowe"
                        ? "bg-green-200"
                        : "bg-slate-100"
                    }`}
                  >
                    Biuro rachunkowe
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      handleSizeSelect("Średnia lub duża firma", setFieldValue)
                    }
                    className={`w-1/5 border-2 rounded p-4 hidden h-[450px] border-green-800 text-2xl ${
                      selectedSize === "Średnia lub duża firma"
                        ? "bg-green-200"
                        : "bg-slate-100"
                    }`}
                  >
                    Średnia lub duża firma
                  </button>
                </div>
              )}
              {step === 2 && selectedSize !== null && (
                <button
                  className="w-1/5 text-4xl mt-12 bg-[#1A9367] p-3 rounded-lg text-white border-2 border-black shadow-2xl"
                  onClick={handleNextStep}
                >
                  Kontynuuj
                </button>
              )}
              {step === 3 && (
                <>
                  <button
                    type="button"
                    className={`text-3xl border-2 w-1/5 py-2 rounded border-green-800 mb-5 ${
                      selectedAmount === "Do 5"
                        ? "bg-green-200"
                        : "bg-slate-100"
                    }`}
                    onClick={() => handleAmountSelect("Do 5", setFieldValue)}
                  >
                    Do 5
                  </button>
                  <button
                    type="button"
                    className={`text-3xl border-2 w-1/5 py-2 rounded border-green-800 mb-5 ${
                      selectedAmount === "Do 10"
                        ? "bg-green-200"
                        : "bg-slate-100"
                    }`}
                    onClick={() => handleAmountSelect("Do 15", setFieldValue)}
                  >
                    Do 15
                  </button>
                  <button
                    type="button"
                    className={`text-3xl border-2 w-1/5 py-2 rounded border-green-800 mb-5 ${
                      selectedAmount === "Do 35"
                        ? "bg-green-200"
                        : "bg-slate-100"
                    }`}
                    onClick={() => handleAmountSelect("Do 20", setFieldValue)}
                  >
                    Do 35
                  </button>
                  <button
                    type="button"
                    className={`text-3xl border-2 w-1/5 py-2 rounded border-green-800 mb-5 ${
                      selectedAmount === "Powyżej 20"
                        ? "bg-green-200"
                        : "bg-slate-100"
                    }`}
                    onClick={() =>
                      handleAmountSelect("Powyżej 35", setFieldValue)
                    }
                  >
                    Powyżej 35
                  </button>
                </>
              )}
              {step === 3 && selectedAmount !== null && (
                <button
                  className="w-1/5 text-4xl mt-12 bg-[#1A9367] p-3 rounded-lg text-white border-2 border-black shadow-2xl"
                  onClick={handleNextStep}
                >
                  Kontynuuj
                </button>
              )}
              {step === 4 && (
                <>
                  <label htmlFor="firstName" className="text-2xl">
                    Imię
                  </label>
                  <Field
                    name="firstName"
                    type="text"
                    className="text-3xl bg-slate-100 w-1/5 placeholder:text-center rounded-lg border-2 border-black my-2 text-center"
                    placeholder="Imię"
                    disabled
                  />

                  <label htmlFor="lastName" className="text-2xl">
                    Nazwisko
                  </label>
                  <Field
                    name="lastName"
                    type="text"
                    className="text-3xl bg-slate-100 w-1/5 placeholder:text-center rounded-lg border-2 border-black my-2 text-center"
                    placeholder="Nazwisko"
                    disabled
                  />

                  <label htmlFor="NIP" className="text-2xl">
                    NIP
                  </label>
                  <Field
                    name="NIP"
                    type="text"
                    className="text-3xl bg-slate-100 w-1/5 placeholder:text-center rounded-lg border-2 border-black my-2 text-center"
                    placeholder="NIP"
                    disabled
                  />

                  <label htmlFor="industry" className="text-2xl">
                    Branża
                  </label>
                  <Field
                    type="text"
                    name="industry"
                    className="text-3xl bg-slate-100 w-1/5 rounded-lg border-2 border-black my-2 text-center"
                    disabled
                  ></Field>

                  <label htmlFor="orgSize" className="text-2xl">
                    Rozmiar organizacji
                  </label>
                  <Field
                    name="orgSize"
                    type="text"
                    className="text-3xl bg-slate-100 w-1/5 placeholder:text-center rounded-lg border-2 border-black my-2 text-center"
                    placeholder="Rozmiar organizacji"
                    disabled
                  />

                  <label htmlFor="numOfInvoices" className="text-2xl">
                    Ilość faktur
                  </label>
                  <Field
                    name="numOfInvoices"
                    type="text"
                    className="text-3xl bg-slate-100 w-1/5 placeholder:text-center rounded-lg border-2 border-black my-2  text-center"
                    placeholder="Ilość faktur"
                    disabled
                  />
                  <div className="w-full flex flex-row justify-around">
                    <button
                      className="w-1/5 text-2xl mt-4 bg-[#C5221F] p-3 rounded-lg text-white border-2 border-black shadow-2xl"
                      onClick={() => setStep(0)}
                    >
                      Nie, wróc do początku
                    </button>
                    <button
                      className="w-1/5 text-2xl mt-4 bg-[#1A9367] p-3 rounded-lg text-white border-2 border-black shadow-2xl"
                      onClick={handleNextStep}
                    >
                      Tak, kontynuuj
                    </button>
                  </div>
                </>
              )}
              {step === 5 && (
                <>
                  <Field
                    name="phoneNum"
                    type="text"
                    className="text-4xl bg-slate-100 w-1/5 placeholder:text-center rounded-lg border-2 border-black mt-10"
                    placeholder="+48 123 456 789"
                  />
                  <ErrorMessage name="phoneNum" />
                  <button
                    className="w-1/5 text-4xl mt-12 bg-[#1A9367] p-3 rounded-lg text-white border-2 border-black shadow-2xl"
                    onClick={handleNextStep}
                  >
                    Pomiń
                  </button>
                </>
              )}
              {step === 6 && (
                <>
                  <div className="flex flex-row w-full h-full">
                    <div className="w-2/3 flex flex-row p-4 ml-[15%] items-center">
                      <div className=" w-1/3">
                        <div className="text-2xl mb-6">Imię:</div>
                        <div className="text-2xl mb-6">Nazwisko:</div>
                        <div className="text-2xl mb-6">NIP:</div>
                        <div className="text-2xl mb-6">Branża:</div>
                        <div className="text-2xl mb-6">Forma działaności:</div>
                        <div className="text-2xl mb-6">Ilość faktur:</div>
                      </div>
                      <div className=" w-2/3 text-right">
                        <DisplayFieldValue fieldName="firstName" />
                        <DisplayFieldValue fieldName="lastName" />
                        <DisplayFieldValue fieldName="NIP" />
                        <DisplayFieldValue fieldName="industry" />
                        <div className="text-2xl mb-6">{selectedSize}</div>
                        <div className="text-2xl mb-6">{selectedAmount}</div>
                      </div>
                    </div>
                    <Plancard val={selectedAmount} />
                  </div>
                  <button
                    className="w-1/5 text-4xl mt-12 bg-[#1A9367] p-3 rounded-lg text-white border-2 border-black shadow-2xl"
                    type="submit"
                  >
                    Kontynuuj
                  </button>
                </>
              )}
              {step === 7 && (
                <div className="w-full flex flex-col justify-center items-center">
                  <h1 className="text-4xl text-center mb-12">
                    Pomyślnie utworzyłeś swoje konto!
                  </h1>
                  <Link to="/" className="w-1/5 flex justify-center">
                    <button className="text-2xl bg-[#1A9367] p-3 rounded-lg text-white border-2 border-black shadow-2xl">
                      Strona logowania
                    </button>
                  </Link>
                </div>
              )}
            </Form>
          )}
        </Formik>
      </section>
    </>
  );
};

export default NewUser;
