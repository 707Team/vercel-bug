import "@/styles/globals.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { appWithTranslation } from "next-i18next";

function App({ Component, pageProps }) {
  const { locale } = useRouter();
  useEffect(() => {
    const dir = locale === "ar" ? "rtl" : "ltr";
    const lang = locale === "ar" ? "ar" : "en";
    document.querySelector("html").setAttribute("dir", dir);
    document.querySelector("html").setAttribute("lang", lang);
  }, [locale]);
  return <Component {...pageProps} />;
}

export default appWithTranslation(App);
