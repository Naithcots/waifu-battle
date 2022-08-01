import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "../components/Layout";
import GlobalStyle from "../styles/GlobalStyle";

const MyApp = ({ Component, pageProps }) => {
  const client = new QueryClient();

  return (
    <>
      <GlobalStyle />
      <QueryClientProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </>
  );
};

export default MyApp;
