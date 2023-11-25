import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import SlimNav from "../layout/SlimNav";
import * as Yup from "yup";

interface FormValues {
  firstName: string;
  lastName: string;
  NIP: string;
  industry: string;
  orgSize: string;
  numOfInvoices: number;
}

const NewUser = () => {
  const [step, setStep] = useState<number>(0);

  const initialValues: FormValues = {
    firstName: "",
    lastName: "",
    NIP: "",
    industry: "",
    orgSize: '',
    numOfInvoices: 0
  };

  const handleSubmit = (values: FormValues, actions) => {
    if (step === 1 || step === 2) {
      setStep((prev) => prev + 1);
    } else {
      console.log("Final form data", values);
    }
  };

  const handleSizeSelect = (val: string, setFieldValue) => {
    setFieldValue("orgSize", val);
  };

  const handleAmountSelect = (amount: number, setFieldValue) => {
    setFieldValue("numOfInvoices", amount);
  }

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Imię jest wymagane"),
    lastName: Yup.string().required("Nazwisko jest wymagane"),
    NIP: Yup.string()
      .matches(/^[0-9]{10}$/, "NIP musi składać się z 10 cyfr")
      .required("NIP jest wymagany"),
    industry: Yup.string().required("Branża jest wymagana"),
    orgSize: Yup.string().required("Proszę wybrać rozmiar organizacji"),
    numOfInvoices: Yup.number().required("Proszę wybrać ilość faktur"),
  });

  return (
    <>
      <SlimNav />
      <section className="mt-14 flex flex-col items-center font-poppins">
        {step === 0 && (
          <>
            <h1 className="text-4xl">
              Do założenia konta, potrzebne są następujące informacje
            </h1>

            <h3 className="mt-4 italic text-gray-400">
              Od automatycznego zarządzania swoimi kosztami dzieli Cię 90 sekund
            </h3>
          </>
        )}
        {step === 1 && <h1  className="mb-10 text-4xl">Wybierz opcję odpowiadającą Twojemu biznesowi</h1>}
        {step === 2 && <h1  className="mb-10 text-4xl">Ile faktur kosztowych otrzymujesz każdego miesiąca?</h1>}


        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <Form className="flex flex-col w-full items-center">
            {step === 0 && (
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
                  <option value="tech">IT</option>
                  <option value="finance">Księgowość</option>
                  <option value="education">Edukacja</option>
                  <option value="health">Zdrowie</option>
                  <option value="construction">Budowlana</option>
                  <option value="beauty">Beauty</option>
                  <option value="services">Usługi</option>
                  <option value="other">Inna</option>
                </Field>
                <ErrorMessage name="industry" />

                <button
                  className="w-1/5 text-4xl mt-12 bg-[#1A9367] p-3 rounded-lg text-white border-2 border-black shadow-2xl"
                  type="submit"
                >
                  Kontynuuj
                </button>
              </>
            )}
            {step === 1 && (
              <div className="flex flex-row space-x-4 mt-4 justify-center">
                <button
                  type="button"
                  onClick={() => handleSizeSelect("JDG", setFieldValue)}
                  className={`w-1/5 bg-slate-100 border-2 rounded p-4 h-[450px] border-green-800 text-2xl ${
                    selectedSize === "JDG" ? "bg-green-200" : ""
                  }`}
                >
                  Jednoosobowa działalność gospodarcza
                </button>
                <button
                  type="button"
                  onClick={() => handleSizeSelect("Mikro", setFieldValue)}
                  className={`w-1/5 bg-slate-100 border-2 rounded p-4 h-[450px] border-green-800 text-2xl ${
                    selectedSize === "Mikro" ? "bg-green-200" : ""
                  }`}
                >
                  Mikro - przedsiębiorca
                </button>
                <button
                  type="button"
                  onClick={() => handleSizeSelect("BiuroRachunkowe", setFieldValue)}
                  className={`w-1/5 bg-slate-100 border-2 rounded p-4 h-[450px] border-green-800 text-2xl ${
                    selectedSize === "BiuroRachunkowe" ? "bg-green-200" : ""
                  }`}
                >
                  Biuro rachunkowe
                </button>
                <button
                  type="button"
                  onClick={() => handleSizeSelect("DuzaFirma", setFieldValue)}
                  className={`w-1/5 bg-slate-100 border-2 rounded p-4 h-[450px] border-green-800 text-2xl ${
                    selectedSize === "DuzaFirma" ? "bg-green-200" : ""
                  }`}
                >
                  Średnia lub duża firma
                </button>
              </div>
            )}
            {step === 1 && selectedSize !== null && (
              <button
                className="w-1/5 text-4xl mt-12 bg-[#1A9367] p-3 rounded-lg text-white border-2 border-black shadow-2xl"
                type="submit"
              >
                Kontynuuj
              </button>
            )}
            {step === 2 && <>
                <button type="button" className={`text-3xl border-2 w-1/5 py-2 rounded border-green-800 bg-slate-100 mb-5 ${selectedAmount === 5 && 'bg-green-200'}`} onClick={() => handleAmountSelect(5, setFieldValue)}>Do 5</button>
                <button type="button" className={`text-3xl border-2 w-1/5 py-2 rounded border-green-800 bg-slate-100 mb-5 ${selectedAmount === 10 && 'bg-green-200'}`} onClick={() => handleAmountSelect(10, setFieldValue)}>Do 10</button>
                <button type="button" className={`text-3xl border-2 w-1/5 py-2 rounded border-green-800 bg-slate-100 mb-5 ${selectedAmount === 20 && 'bg-green-200'}`} onClick={() => handleAmountSelect(5, setFieldValue)}>Do 20</button>
                <button type="button" className={`text-3xl border-2 w-1/5 py-2 rounded border-green-800 bg-slate-100 mb-5 ${selectedAmount === 30 && 'bg-green-200'}`} onClick={() => handleAmountSelect(5, setFieldValue)}>Powyżej 20</button>
            </>}
            {step === 2 && selectedAmount !== null && (
                <button
                className="w-1/5 text-4xl mt-12 bg-[#1A9367] p-3 rounded-lg text-white border-2 border-black shadow-2xl"
                type="submit"
              >
                Kontynuuj
              </button>
            )}
            {step === 3 && <>
                
            </>}
          </Form>
        </Formik>
      </section>
    </>
  );
};

export default NewUser;
