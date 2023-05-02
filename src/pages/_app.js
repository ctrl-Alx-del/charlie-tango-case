import "@/styles/globals.css";
import { Header } from "@/components/Header/Header";
import { DispatchContext } from "@/contexts/buyerContext";
import { StoreProvider } from "@/contexts/buyerContext";

export default function App({ Component, pageProps }) {
  return (
    <>
      <StoreProvider>
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
      </StoreProvider>
    </>
  );
}
