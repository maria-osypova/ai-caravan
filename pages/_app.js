import GlobalStyle from "../styles/GlobalStyle";
import { SWRConfig } from "swr";
import Layout from "@/components/Layout";
import "../styles/globals.css";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isPublicPage = router.pathname.startsWith("/public");

  return (
    <SWRConfig
      value={{
        fetcher: async (...args) => {
          const response = await fetch(...args);
          if (!response.ok) {
            throw new Error(`Request with ${JSON.stringify(args)} failed.`);
          }
          return await response.json();
        },
      }}
    >
      <div
        style={{
          backgroundColor: isPublicPage ? "#2525A7" : "white",
          minHeight: "100vh",
        }}
      >
        <Layout>
          <GlobalStyle />
          <Component {...pageProps} />
        </Layout>
      </div>
    </SWRConfig>
  );
}
