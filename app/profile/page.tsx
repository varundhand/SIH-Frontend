import Image from "next/image";

import { Metadata } from "next";
import Breadcrumb from "@/Breadcrumbs/Breadcrumb";
import { Profile } from "@/Profile/Profile";
export const metadata: Metadata = {
  title: "Profile Page | Next.js E-commerce Dashboard Template",
  description: "This is Profile page for TailAdmin Next.js",
  // other metadata
};

const ProfileFun = () => {
  return <Profile />;
};

export default ProfileFun;
