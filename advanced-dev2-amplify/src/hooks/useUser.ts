import {
  fetchAuthSession,
  fetchUserAttributes,
  getCurrentUser,
} from "aws-amplify/auth";
import { useEffect, useState } from "react";

export const useUser = () => {
  const [user, setUser] = useState();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getCurrentUser();
      try {
        const { tokens } = await fetchAuthSession();
        const isAdmin = (
          tokens?.accessToken.payload["cognito:groups"] as any[]
        ).includes("admin");
        setIsAdmin(isAdmin);
        setUser(user as any);
      } catch (error) {}
      setUser(user as any);
    };
    fetchUser();
  }, []);

  return { user, isAdmin };
};
