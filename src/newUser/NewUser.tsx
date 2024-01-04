// import React, { useEffect, useState } from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import { FormikProps } from "formik";
// import { useFormikContext } from "formik";
// import SlimNav from "../layout/SlimNav";
// import bida from "../assets/pricing/bida.png";
// import fab from "../assets/pricing/fab.png";
// import prem from "../assets/pricing/prem.png";
// import standard from "../assets/pricing/standard.png";
// import * as Yup from "yup";
// import { Link } from "react-router-dom";
// import { useFormik } from "formik";

// interface FormValues {
//   login: string;
//   pass: string;
//   pass2: string;
//   firstName: string;
//   lastName: string;
//   NIP: string;
//   industry: string;
//   orgSize: string;
//   numOfInvoices: string;
//   phoneNum: string;
// }
// interface DisplayFieldValueProps {
//   fieldName: keyof FormValues;
// }

// const DisplayFieldValue: React.FC<DisplayFieldValueProps> = ({ fieldName }) => {
//   const { values } = useFormikContext<FormValues>();
//   return <div className="text-2xl mb-6">{values[fieldName]}</div>;
// };


//   const Plancard: React.FC<PlancardProps> = ({ val }) => {
//     const getPlanDetails = (value: string | null) => {
//       switch (value) {
//         case "Do 5":
//           return { name: "Darmowy", image: bida, price: "0" };
//         case "Do 15":
//           return { name: "Standard", image: standard, price: "29.99" };
//         case "Do 35":
//           return { name: "Premium", image: prem, price: "69.99" };
//         case "Powyżej 35":
//           return { name: "Biznes", image: fab, price: "99.99" };
//         default:
//           return { name: "", image: null, price: "0.00" };
//       }
//     };

//     const planDetails = getPlanDetails(val);

//     return (
//       <div className="w-1/2 flex flex-col items-center p-4 mr-[15%]">
//         <h2 className="text-2xl mb-5">Rekomendowany plan:</h2>
//         <div className="border-4 rounded-md border-[#1A9367] w-1/2 p-4">
//           {planDetails.image && (
//             <img
//               src={planDetails.image}
//               alt={planDetails.name}
//               className="mx-auto"
//             />
//           )}
//           <h1 className="text-4xl text-center pt-8">{planDetails.name}</h1>
//           <h3 className="text-center text-xl pb-8">
//             {planDetails.price} zł/mies
//           </h3>
//         </div>
//       </div>
//     );
//   };

//   const handleNextStep = () => {
//     setStep((prev) => prev + 1);
//   };

//   const handleSizeSelect = (
//     size: string,
//     setFieldValue: FormikProps<FormValues>["setFieldValue"]
//   ) => {
//     setFieldValue("orgSize", size);
//     setSelectedSize(size);
//   };

//   const handleAmountSelect = (
//     amount: string,
//     setFieldValue: FormikProps<FormValues>["setFieldValue"]
//   ) => {
//     setFieldValue("numOfInvoices", amount);
//     setSelectedAmount(amount);
//   };

//   const handleSubmit = (values: FormValues) => {
//     console.log(values);
//     setStep((prev) => prev + 1);
//   };



//               {step === 2 && (
//                 <div className="flex flex-row space-x-4 mt-4 justify-center">
//                   <button
//                     type="button"
//                     onClick={() => handleSizeSelect("JDG", setFieldValue)}
//                     className={`w-1/2  border-2 rounded p-4 h-[450px] border-green-800 text-2xl ${
//                       selectedSize === "JDG" ? "bg-green-200" : "bg-slate-100"
//                     }`}
//                   >
//                     Jednoosobowa działalność gospodarcza
//                   </button>

//                   <button
//                     type="button"
//                     onClick={() =>
//                       handleSizeSelect("Mikro - przedsiębiorca", setFieldValue)
//                     }
//                     className={`w-1/5  border-2 rounded p-4 hidden h-[450px] border-green-800 text-2xl ${
//                       selectedSize === "Mikro - przedsiębiorca"
//                         ? "bg-green-200"
//                         : "bg-slate-100"
//                     }`}
//                   >
//                     Mikro - przedsiębiorca
//                   </button>
//                   <button
//                     type="button"
//                     onClick={() =>
//                       handleSizeSelect("Biuro Rachunkowe", setFieldValue)
//                     }
//                     className={`w-1/5 border-2 rounded p-4 hidden h-[450px] border-green-800 text-2xl ${
//                       selectedSize === "Biuro Rachunkowe"
//                         ? "bg-green-200"
//                         : "bg-slate-100"
//                     }`}
//                   >
//                     Biuro rachunkowe
//                   </button>
//                   <button
//                     type="button"
//                     onClick={() =>
//                       handleSizeSelect("Średnia lub duża firma", setFieldValue)
//                     }
//                     className={`w-1/5 border-2 rounded p-4 hidden h-[450px] border-green-800 text-2xl ${
//                       selectedSize === "Średnia lub duża firma"
//                         ? "bg-green-200"
//                         : "bg-slate-100"
//                     }`}
//                   >
//                     Średnia lub duża firma
//                   </button>
//                 </div>
//               )}
//               {step === 2 && selectedSize !== null && (
//                 <button
//                   className="w-1/5 text-4xl mt-12 bg-[#1A9367] p-3 rounded-lg text-white border-2 border-black shadow-2xl"
//                   onClick={handleNextStep}
//                 >
//                   Kontynuuj
//                 </button>
//               )}
//               {step === 3 && (
//                 <>
//                   <button
//                     type="button"
//                     className={`text-3xl border-2 w-1/5 py-2 rounded border-green-800 mb-5 ${
//                       selectedAmount === "Do 5"
//                         ? "bg-green-200"
//                         : "bg-slate-100"
//                     }`}
//                     onClick={() => handleAmountSelect("Do 5", setFieldValue)}
//                   >
//                     Do 5
//                   </button>
//                   <button
//                     type="button"
//                     className={`text-3xl border-2 w-1/5 py-2 rounded border-green-800 mb-5 ${
//                       selectedAmount === "Do 10"
//                         ? "bg-green-200"
//                         : "bg-slate-100"
//                     }`}
//                     onClick={() => handleAmountSelect("Do 15", setFieldValue)}
//                   >
//                     Do 15
//                   </button>
//                   <button
//                     type="button"
//                     className={`text-3xl border-2 w-1/5 py-2 rounded border-green-800 mb-5 ${
//                       selectedAmount === "Do 35"
//                         ? "bg-green-200"
//                         : "bg-slate-100"
//                     }`}
//                     onClick={() => handleAmountSelect("Do 20", setFieldValue)}
//                   >
//                     Do 35
//                   </button>
//                   <button
//                     type="button"
//                     className={`text-3xl border-2 w-1/5 py-2 rounded border-green-800 mb-5 ${
//                       selectedAmount === "Powyżej 20"
//                         ? "bg-green-200"
//                         : "bg-slate-100"
//                     }`}
//                     onClick={() =>
//                       handleAmountSelect("Powyżej 35", setFieldValue)
//                     }
//                   >
//                     Powyżej 35
//                   </button>
//                 </>
//               )}
//               {step === 3 && selectedAmount !== null && (
//                 <button
//                   className="w-1/5 text-4xl mt-12 bg-[#1A9367] p-3 rounded-lg text-white border-2 border-black shadow-2xl"
//                   onClick={handleNextStep}
//                 >
//                   Kontynuuj
//                 </button>
//               )}
//               {step === 4 && (
//                 <>
//                   <label htmlFor="firstName" className="text-2xl">
//                     Imię
//                   </label>
//                   <Field
//                     name="firstName"
//                     type="text"
//                     className="text-3xl bg-slate-100 w-1/5 placeholder:text-center rounded-lg border-2 border-black my-2 text-center"
//                     placeholder="Imię"
//                     disabled
//                   />

//                   <label htmlFor="lastName" className="text-2xl">
//                     Nazwisko
//                   </label>
//                   <Field
//                     name="lastName"
//                     type="text"
//                     className="text-3xl bg-slate-100 w-1/5 placeholder:text-center rounded-lg border-2 border-black my-2 text-center"
//                     placeholder="Nazwisko"
//                     disabled
//                   />

//                   <label htmlFor="NIP" className="text-2xl">
//                     NIP
//                   </label>
//                   <Field
//                     name="NIP"
//                     type="text"
//                     className="text-3xl bg-slate-100 w-1/5 placeholder:text-center rounded-lg border-2 border-black my-2 text-center"
//                     placeholder="NIP"
//                     disabled
//                   />

//                   <label htmlFor="industry" className="text-2xl">
//                     Branża
//                   </label>
//                   <Field
//                     type="text"
//                     name="industry"
//                     className="text-3xl bg-slate-100 w-1/5 rounded-lg border-2 border-black my-2 text-center"
//                     disabled
//                   ></Field>

//                   <label htmlFor="orgSize" className="text-2xl">
//                     Rozmiar organizacji
//                   </label>
//                   <Field
//                     name="orgSize"
//                     type="text"
//                     className="text-3xl bg-slate-100 w-1/5 placeholder:text-center rounded-lg border-2 border-black my-2 text-center"
//                     placeholder="Rozmiar organizacji"
//                     disabled
//                   />

//                   <label htmlFor="numOfInvoices" className="text-2xl">
//                     Ilość faktur
//                   </label>
//                   <Field
//                     name="numOfInvoices"
//                     type="text"
//                     className="text-3xl bg-slate-100 w-1/5 placeholder:text-center rounded-lg border-2 border-black my-2  text-center"
//                     placeholder="Ilość faktur"
//                     disabled
//                   />
//                   <div className="w-full flex flex-row justify-around">
//                     <button
//                       className="w-1/5 text-2xl mt-4 bg-[#C5221F] p-3 rounded-lg text-white border-2 border-black shadow-2xl"
//                       onClick={() => setStep(0)}
//                     >
//                       Nie, wróc do początku
//                     </button>
//                     <button
//                       className="w-1/5 text-2xl mt-4 bg-[#1A9367] p-3 rounded-lg text-white border-2 border-black shadow-2xl"
//                       onClick={handleNextStep}
//                     >
//                       Tak, kontynuuj
//                     </button>
//                   </div>
//                 </>
//               )}
//               {step === 5 && (
//                 <>
//                   <Field
//                     name="phoneNum"
//                     type="text"
//                     className="text-4xl bg-slate-100 w-1/5 placeholder:text-center rounded-lg border-2 border-black mt-10"
//                     placeholder="+48 123 456 789"
//                   />
//                   <ErrorMessage name="phoneNum" />
//                   <button
//                     className="w-1/5 text-4xl mt-12 bg-[#1A9367] p-3 rounded-lg text-white border-2 border-black shadow-2xl"
//                     onClick={handleNextStep}
//                   >
//                     Pomiń
//                   </button>
//                 </>
//               )}
//               {step === 6 && (
//                 <>
//                   <div className="flex flex-row w-full h-full">
//                     <div className="w-2/3 flex flex-row p-4 ml-[15%] items-center">
//                       <div className=" w-1/3">
//                         <div className="text-2xl mb-6">Imię:</div>
//                         <div className="text-2xl mb-6">Nazwisko:</div>
//                         <div className="text-2xl mb-6">NIP:</div>
//                         <div className="text-2xl mb-6">Branża:</div>
//                         <div className="text-2xl mb-6">Forma działaności:</div>
//                         <div className="text-2xl mb-6">Ilość faktur:</div>
//                       </div>
//                       <div className=" w-2/3 text-right">
//                         <DisplayFieldValue fieldName="firstName" />
//                         <DisplayFieldValue fieldName="lastName" />
//                         <DisplayFieldValue fieldName="NIP" />
//                         <DisplayFieldValue fieldName="industry" />
//                         <div className="text-2xl mb-6">{selectedSize}</div>
//                         <div className="text-2xl mb-6">{selectedAmount}</div>
//                       </div>
//                     </div>
//                     <Plancard val={selectedAmount} />
//                   </div>
//                   <button
//                     className="w-1/5 text-4xl mt-12 bg-[#1A9367] p-3 rounded-lg text-white border-2 border-black shadow-2xl"
//                     type="submit"
//                   >
//                     Kontynuuj
//                   </button>
//                 </>
//               )}
//               {step === 7 && (
//                 <div className="w-full flex flex-col justify-center items-center">
//                   <h1 className="text-4xl text-center mb-12">
//                     Pomyślnie utworzyłeś swoje konto!
//                   </h1>
//                   <Link to="/" className="w-1/5 flex justify-center">
//                     <button className="text-2xl bg-[#1A9367] p-3 rounded-lg text-white border-2 border-black shadow-2xl">
//                       Strona logowania
//                     </button>
//                   </Link>
//                 </div>
//               )}
//             </Form>
//           )}
//         </Formik>
//       </section>
//     </>
//   );
// };

// export default NewUser;

import { ErrorMessage, useFormik, FormikProvider } from "formik";
import * as Yup from "yup";
import SlimNav from "../layout/SlimNav";

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
    },
  });

  return (
    <>
      <SlimNav />
      <FormikProvider value={formik}>
        <section className="lg:mt-14 mt-24 flex flex-col items-center font-poppins w-full">
          <form
            onSubmit={formik.handleSubmit}
            className="w-full flex flex-col items-center text-3xl"
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
                className="text-3xl bg-slate-100 lg:w-3/5 w-[90%] placeholder:text-center rounded-lg border-2 border-black mb-4 text-gray-700"
              >
                <option value="" disabled selected hidden className="">
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
                value={formik.values.numOfInvoices}
                className="text-3xl bg-slate-100 lg:w-3/5 w-[90%] placeholder:text-center rounded-lg border-2 border-black mb-4 text-gray-700"
              >
                <option value="" disabled selected hidden className="">
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
    </>
  );
};

export default NewUser;
