import { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface AuthContextType {
  isLoggedIn: boolean;
  accessToken: string | null;
  refreshToken: string | null;
  login: (newAccessToken: string, newRefreshToken: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  accessToken: null,
  refreshToken: null,
  login: (_newAccessToken: string, _newRefreshToken: string) => {},
  logout: () => {},
});

export const useAuth = () => {
  return useContext(AuthContext);
};

interface AuthProviderProps {
  children: ReactNode;
}
export const AuthProvider = ({ children }: AuthProviderProps) => {
  // Początkowy stan oparty na wartościach z localStorage
  const initialAccessToken = localStorage.getItem('accessToken');
  const initialRefreshToken = localStorage.getItem('refreshToken');
  
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(!!initialAccessToken && !!initialRefreshToken);
  const [accessToken, setAccessToken] = useState<string | null>(initialAccessToken);
  const [refreshToken, setRefreshToken] = useState<string | null>(initialRefreshToken);

  const login = (newAccessToken: string, newRefreshToken: string) => {
    localStorage.setItem('accessToken', newAccessToken);
    localStorage.setItem('refreshToken', newRefreshToken);
    setIsLoggedIn(true);
    setAccessToken(newAccessToken);
    setRefreshToken(newRefreshToken); 
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setIsLoggedIn(false);
    setAccessToken(null);
    setRefreshToken(null); 
  };

  const refreshAccessToken = async () => {
    try {
      const response = await fetch('https://api.onebill.com.pl/api/refresh', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refresh: localStorage.getItem('refreshToken') }),
      });
  
      if (response.ok) {
        const { access, refresh } = await response.json();
        localStorage.setItem('accessToken', access);
        localStorage.setItem('refreshToken', refresh);
        setAccessToken(access);
        setRefreshToken(refresh);
        scheduleTokenRefresh();
      } else {
        logout();
      }
    } catch (error) {
      console.error('Błąd odświeżania tokena:', error);
      logout();
    }
  };
  
  const scheduleTokenRefresh = () => {
    const refreshTime = 14 * 60 * 1000; 
    setTimeout(refreshAccessToken, refreshTime);
  };

  useEffect(() => {
    if (isLoggedIn) {
      scheduleTokenRefresh();
    }
  }, [isLoggedIn]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, accessToken, refreshToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

