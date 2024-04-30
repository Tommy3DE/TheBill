import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SlimNav from "../SlimNav";

interface FormValues {
  password: string;
  confirmPassword: string;
}

const ResetPassPage: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");
  const [login, setLogin] = React.useState<boolean>(false);

  const validationSchema = Yup.object({
    password: Yup.string()
      .min(8, "Hasło musi zawierać co najmniej 8 znaków")
      .required("Hasło jest wymagane"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Hasła muszą się zgadzać")
      .required("Potwierdzenie jest wymagane"),
  });

  const handleSubmit = async (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    setSubmitting(true);
    const url = `https://api.onebill.com.pl/api/reset_pass`;
    const resetBody = { password: values.password, token };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(resetBody),
      });

      if (response.ok) {
        toast.success("Hasło zresetowane pomyślnie!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setLogin(true);
      } else {
        toast.error("Błąd podczas resetowania hasła", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      toast.error("Network error.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="mx-auto font-poppins">
      <SlimNav />
      <div className="max-w-[1980px] mx-auto mt-24">
        <Formik
          initialValues={{ password: "", confirmPassword: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="w-full flex flex-col items-center text-3xl mt-12">
              <div className="mb-6 w-1/2 flex flex-col items-center">
                <Field
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Nowe hasło"
                  className="form-input mt-1 shadow-sm rounded-lg border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 w-2/4"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-sm text-red-600"
                />
              </div>
              <div className="mb-6 w-1/2 flex flex-col items-center">
                <Field
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Powtórz nowe hasło"
                  className="form-input mt-1 shadow-sm rounded-lg border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 w-2/4"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-sm text-red-600"
                />
              </div>
              {!login && (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-500 text-white p-2 rounded mt-4"
                >
                  Zresetuj hasło
                </button>
              )}
              {login && (
                <Link to="/login">
                  <button className="bg-green-500 text-white p-2 rounded mt-4">
                    Przejdź do logowania
                  </button>
                </Link>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default ResetPassPage;
