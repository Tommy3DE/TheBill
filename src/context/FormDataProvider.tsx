import React, { createContext, useContext, useState, ReactNode } from "react";

interface FormData {
  login: string;
  pass: string;
  pass2: string;
  firstName: string;
  lastName: string;
  NIP?: number; 
  industry: string;
  numOfInvoices?: string;
  wants_invoice: boolean;
}

interface ContextType {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const initialData: FormData = {
  login: "",
  pass: "",
  pass2: "",
  firstName: "",
  lastName: "",
  NIP: undefined,
  industry: "",
  numOfInvoices: "",
  wants_invoice: false,
};

const FormDataContext = createContext<ContextType>({
  formData: initialData,
  setFormData: () => {},
});

export const useFormData = () => useContext(FormDataContext);

interface FormDataProviderProps {
  children: ReactNode;
}

export const FormDataProvider: React.FC<FormDataProviderProps> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>(initialData);

  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};
