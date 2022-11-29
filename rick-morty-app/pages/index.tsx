import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rick and Morey | API Rest</title>
        <meta name="description" content="Developer @cleytonchagasbr" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <footer className={styles.footer}></footer>
    </div>
  );
}
