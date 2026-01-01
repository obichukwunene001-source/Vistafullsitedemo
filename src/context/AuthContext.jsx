import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const redirectTo = (import.meta.env.MODE === 'development' ? window.location.origin : import.meta.env.VITE_REDIRECT_URL) || window.location.origin;

  useEffect(() => {
    // Handle OAuth redirect (parse session from URL if present), then get current session
    const initAuth = async () => {
      console.debug('[Auth] initAuth start, url:', window.location.href);
      try {
        // After OAuth redirect Supabase puts session params in the URL; parse them first
        const resp = await supabase.auth.getSessionFromUrl().catch((err) => ({ error: err }));
        console.debug('[Auth] getSessionFromUrl response:', resp);
      } catch (err) {
        console.warn('[Auth] getSessionFromUrl threw:', err);
      }

      const { data } = await supabase.auth.getSession();
      console.debug('[Auth] getSession current session:', data);
      setUser(data?.session?.user ?? null);
      setLoading(false);
    };

    initAuth();

    // Listen for auth state changes
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      console.debug('[Auth] onAuthStateChange event:', event, 'session:', session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => authListener.subscription.unsubscribe();
  }, []);

  const signup = async (email, password) => {
    const { data, error } = await supabase.auth.signUp(
      { email, password },
      { options: { emailRedirectTo: redirectTo } }
    );
    return { data, error };
  };

  const login = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    return { data, error };
  };

  const loginWithGoogle = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo }
    });
    return { data, error };
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, signup, login, loginWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
