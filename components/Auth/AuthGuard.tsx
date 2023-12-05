"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { usePathname, useRouter } from "next/navigation";
import { AppDispatch } from "../../redux/store";
import { User, revalidateToken } from "../../services/auth.services";
import { clearUser, setUser } from "../../redux/features/userSlice";

interface AuthGuardProps {
  children: React.ReactNode;
}

function AuthGuard({ children }: AuthGuardProps) {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>(); // Use the AppDispatch type for dispatch

  const pathname = usePathname();

  useEffect(() => {
    const token = localStorage.getItem("accessToken") as string;

    console.log("Effect ran", token);

    const revalidation = async (token: string) => {
      console.log("Revalidation done");
      try {
        const response = await revalidateToken(token);
        const user: User = response.user;
        // Handle the response if needed
        dispatch(
          setUser({
            _id: "asdas",
            userName: "tempUsername",
            fullName: "tempFullName",
            email: "temp@gmail.com",
            isVerified: true,
            isAdmin: true,
          })
        );
      } catch (error) {
        dispatch(clearUser());
        throw error;
        // Handle errors if needed
      }
    };

    const revalidate = async () => {
      try {
        const response = await revalidation(token);
        console.log(response);
        if (pathname.startsWith("/auth")) router.push("/");
      } catch (error) {
        router.push("/auth/signin");
      }
    };

    if (token) {
      revalidate();
    } else {
      dispatch(clearUser());
      if (!pathname.startsWith("/auth")) router.push("/auth/signin");
    }
  }, [dispatch, pathname, router]);

  return <>{children}</>;
}

export default AuthGuard;
