import React, { createContext, useContext, useState, useCallback } from 'react';
import { AUTH_ACCOUNTS, USERS } from '../data/mockData';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState('');

  const login = useCallback((email, password) => {
    setError('');
    const account = AUTH_ACCOUNTS[email.toLowerCase()];
    if (!account || account.password !== password) {
      setError('Invalid email or password. Try jane.smith@company.com / password123');
      return false;
    }
    const user = USERS.find(u => u.id === account.userId);
    setCurrentUser(user);
    return true;
  }, []);

  const logout = useCallback(() => {
    setCurrentUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout, error, setError }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
