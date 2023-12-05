import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Metadata } from "next";
import Breadcrumb from "../../../components/Breadcrumbs/Breadcrumb";
import { SignIn } from "../../../components/Auth/SignIn";

export const metadata: Metadata = {
  title: "Signin Page | Next.js E-commerce Dashboard Template",
  description: "This is Signin page for TailAdmin Next.js",
  // other metadata
};

const SignInFun: React.FC = () => {
  return <SignIn />;
};

export default SignInFun;
