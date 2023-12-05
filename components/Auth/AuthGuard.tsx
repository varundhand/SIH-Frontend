"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { usePathname, useRouter } from "next/navigation";
import { AppDispatch } from "../../redux/store";
import { User, revalidateToken } from "../../services/auth.services";
import { clearUser, getUser, setUser } from "../../redux/features/userSlice";

interface AuthGuardProps {
  children: React.ReactNode;
}

function AuthGuard({ children }: AuthGuardProps) {
  const router = useRouter();
  const user = useSelector(getUser);
  const dispatch = useDispatch<AppDispatch>(); // Use the AppDispatch type for dispatch

  const pathname = usePathname();

  useEffect(() => {
    const token = localStorage.getItem("accessToken") as string;
    const isAuthRoute = pathname.startsWith("/auth");

    const revalidation = async (token: string) => {
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
        router.push(pathname);
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

    if (token && !isAuthRoute && !user?.email) {
      revalidate();
    }

    if (!token) {
      dispatch(clearUser());
      router.push("/auth/signin");
    }
  }, [dispatch, pathname, router, user?.email]);

  return <>{children}</>;
}

export default AuthGuard;
