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

//              
//               
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
