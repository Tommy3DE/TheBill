import { createContext, useState, useContext, ReactNode } from 'react';

// Definicja typów dla kontekstu
interface AuthContextType {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

// Utworzenie kontekstu z domyślnymi wartościami
const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

// Hook do użytku kontekstu
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  return useContext(AuthContext);
};

// Typy dla propsów AuthProvider
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const login = () => {
    setIsLoggedIn(true);
    // Dodaj tutaj logikę logowania, np. ustawienie tokena
  };

  const logout = () => {
    setIsLoggedIn(false);
    // Dodaj tutaj logikę wylogowania, np. usunięcie tokena
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
