import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useFetch } from "../hooks/useFetch";
import { Header } from "../components/Header/index";
import { useEffect, useState } from "react";
import { Character } from "../types/Character";
import { Card } from "../components/Card";

export default function Home() {
  const [characters, setCharacters] = useState<Character[]>();

  const { data } = useFetch("/character");

  if (!data) {
    return <p>Carregando...</p>;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Rick and Morey | API Rest</title>
        <meta name="description" content="Developer @cleytonchagasbr" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className={styles.containerMain}>
        <h2 className={styles.title}>Personagens</h2>
        <div className={styles.containerPerson}>
          {data?.results.map((person: Character) => (
            <Card
              key={person.id}
              id={person.id}
              image={person.image}
              name={person.name}
              species={person.species}
              gender={person.gender}
            />
          ))}
        </div>
      </main>

      <footer className={styles.footer}>Developer by @cleytonchagasbr</footer>
    </div>
  );
}
