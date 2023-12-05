import { Metadata } from "next";
import Stats from "../components/Dashboard/Stats";
import { useSelector } from "react-redux";
import React from "react";

export const metadata: Metadata = {
  title: "Secure Compose | Revolutionizing Software Security",
  description:
    "Automate SBOM generation, identify versions precisely, and detect anomalies with SecureCompose. Elevate your cybersecurity with real-time updates and a user-friendly interface. Stay compliant, secure your software supply chain effortlessly. ",
  // other metadata
};

export default function Home() {
  return (
    <>
      <Stats />
    </>
  );
}
