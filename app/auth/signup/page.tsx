import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Metadata } from "next";
import Breadcrumb from "@/Breadcrumbs/Breadcrumb";
import SignUp from "@/Auth/SignUp";
export const metadata: Metadata = {
  title: "Signup Page | Next.js E-commerce Dashboard Template",
  description: "This is Signup page for TailAdmin Next.js",
  // other metadata
};

const SignUpFun: React.FC = () => {
  return <SignUp />;
};

export default SignUpFun;
