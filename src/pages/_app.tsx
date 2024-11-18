import { type AppType } from "next/dist/shared/lib/utils";
import { Firestore } from "@/components/Init";
import { FirebaseAppProvider } from "reactfire";
import { firebaseConfig } from "@/lib/firebase";
import "@/styles/globals.css";
import Head from "next/head";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Connect Camp | YW</title>
      </Head>
      <main className={`font-ocean`}>
        <FirebaseAppProvider firebaseConfig={firebaseConfig}>
          <Firestore>
            <Component {...pageProps} />
          </Firestore>
        </FirebaseAppProvider>
      </main>
    </>
  );
};

export default MyApp;
