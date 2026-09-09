import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';
import { User, AuthContextType } from '../types';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be within AuthProvider');
  return ctx;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (token) { axios.defaults.headers.common['Authorization'] = `Bearer ${token}`; fetchUser(); }
    else { delete axios.defaults.headers.common['Authorization']; setIsLoading(false); }
  }, [token]);

  const fetchUser = async () => {
    try { const { data } = await axios.get(`${API_URL}/auth/me`); setUser(data.user); }
    catch { logout(); } finally { setIsLoading(false); }
  };

  const login = async (email: string, password: string) => {
    const { data } = await axios.post(`${API_URL}/auth/login`, { email, password });
    localStorage.setItem('token', data.token); setToken(data.token); setUser(data.user);
  };

  const register = async (name: string, email: string, password: string) => {
    const { data } = await axios.post(`${API_URL}/auth/register`, { name, email, password });
    localStorage.setItem('token', data.token); setToken(data.token); setUser(data.user);
  };

  const logout = () => {
    localStorage.removeItem('token'); setToken(null); setUser(null);
    delete axios.defaults.headers.common['Authorization'];
  };

  return <AuthContext.Provider value={{ user, token, login, register, logout, isLoading }}>{children}</AuthContext.Provider>;
};
