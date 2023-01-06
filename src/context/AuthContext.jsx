import { createContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { LoadingScreen } from "@/components/Misc";
import { useLoginAndFetchProfile } from "@/features/auth/hooks/useLoginAndFetchProfile";
import { useUserProfile } from "@/features/auth/hooks/useUserProfile";
import { useLogout, useSignUp } from "@/features/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const loginAndFetchProfileMutation = useLoginAndFetchProfile();
  const userProfileMutation = useUserProfile();
  const signUpMutation = useSignUp();
  const logoutMutation = useLogout();
  const isAuthenticated = user !== null;

  useEffect(() => {
    if (!user) {
      setIsLoading(true);
      userProfileMutation
        .mutateAsync()
        .then((response) => {
          if (response.user) {
            setUser(response.user);
          } else {
            logout();
          }
        })
        .catch((err) => console.log(`AUTH ERROR: ${err}`))
        .finally(() => setIsLoading(false));
    }
  }, [user]);

  const login = async ({ email, password }) => {
    setIsLoading(true);
    await loginAndFetchProfileMutation
      .mutateAsync({ email, password })
      .then((response) => {
        if (response.user) {
          setUser(response.user);
        }
      })
      .catch((error) => console.log(`Error logging in: ${error}`))
      .finally(() => setIsLoading(false));
  };

  const signUp = async ({ email, password, confirmPassword }) => {
    console.log(email);
    console.log(password);
    console.log(confirmPassword);
    setIsLoading(true);
    await signUpMutation
      .mutateAsync({ email, password, confirmPassword })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(`Error logging in: ${error}`))
      .finally(() => setIsLoading(false));
  };

  const logout = () => {
    setIsLoading(true);
    logoutMutation
      .mutateAsync()
      .catch((err) => console.log(err))
      .finally(() => {
        setUser(null);
        if (location.pathname !== "/signup" && location.pathname !== "/") {
          navigate("/login");
        }
        setIsLoading(false);
      });
  };

  const contextData = {
    isLoading,
    login,
    logout,
    signUp,
    user,
    isAuthenticated,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {isLoading ? <LoadingScreen /> : children}
    </AuthContext.Provider>
  );
};

export default AuthContext;