import { createContext, useContext, useState, ReactNode } from 'react';

interface UserData {
  email?: string;
  firstName?: string;
  lastName?: string;
  nip?: string;
  package?: string;
  lastScan?: string;
  bookkeepers: Array<{
    id: number;
    name: string;
    email: string;
  }>;
}

interface UserDataContextType {
  userData: UserData | null;
  setUserData: (data: UserData) => void;
  clearUserData: () => void;
}

const UserDataContext = createContext<UserDataContextType | undefined>(undefined);

interface UserDataProviderProps {
  children: ReactNode;
}

export const UserDataProvider = ({ children }: UserDataProviderProps) => {
  const [userData, setUserDataState] = useState<UserData | null>(null);

  const setUserData = (data: UserData) => {
    setUserDataState(data);
  };

  const clearUserData = () => {
    setUserDataState(null);
  };

  return (
    <UserDataContext.Provider value={{ userData, setUserData, clearUserData }}>
      {children}
    </UserDataContext.Provider>
  );
};

export const useUserData = () => {
  const context = useContext(UserDataContext);
  if (context === undefined) {
    throw new Error('useUserData must be used within a UserDataProvider');
  }
  return context;
};
