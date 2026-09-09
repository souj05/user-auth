export interface User { id: string; name: string; email: string; createdAt: string; }
export interface AuthContextType {
  user: User | null; token: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void; isLoading: boolean;
}
