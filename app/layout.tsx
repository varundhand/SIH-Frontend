import "./globals.css";
import "./data-tables-css.css";
import "./satoshi.css";

// import Loader from "@/components/common/Loader";

// import Sidebar from "@/components/Sidebar";
// import Header from "@/components/Header";
import { Providers } from "../redux/provider";
import AuthGuard from "../components/Auth/AuthGuard";
import GlobalLoader from "../components/GlobalLoader/GlobalLoader";
import ToastContainerWrapper from "../components/ToastContainer/ToastContainerWrapper";
import Loader from "../components/common/Loader";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import NextTopLoader from "nextjs-toploader";
import { Root } from "@/Root/Root";
// import { Providers } from "@/redux/provider";
// import GlobalLoader from "@/components/GlobalLoader/GlobalLoader";
// import AuthGuard from "@/components/Auth/AuthGuard";
// import ToastContainerWrapper from "@/components/ToastContainer/ToastContainerWrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Providers>
          <NextTopLoader height={5} color="#3C50E0" showSpinner={false} />
          <AuthGuard>
            <GlobalLoader />
            <ToastContainerWrapper />
            <Root>{children}</Root>
          </AuthGuard>
        </Providers>
      </body>
    </html>
  );
}
