import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { useConnectWallet } from "@web3-onboard/react";
import { ethers } from "ethers";

const buttonStyles = {
  borderRadius: "6px",
  background: "#111827",
  border: "none",
  fontSize: "18px",
  fontWeight: "600",
  cursor: "pointer",
  color: "white",
  padding: "14px 12px",
  marginTop: "40px",
  fontFamily: "inherit",
};

export default function Home() {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();

  // create an ethers provider
  let ethersProvider;

  if (wallet) {
    ethersProvider = new ethers.providers.Web3Provider(wallet.provider, "any");
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          THIS IS APP 1 <br />
        </h1>
        <h3>
          Proxy will return localhost:2137 (first app) and then localhost:2138
          (second app) after 10 seconds
        </h3>

        <button
          style={buttonStyles}
          disabled={connecting}
          onClick={() => (wallet ? disconnect(wallet) : connect())}
        >
          {connecting ? "Connecting" : wallet ? "Disconnect" : "Connect"}
        </button>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
