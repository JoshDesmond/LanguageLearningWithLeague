import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ChampionCard from '../components/ChampionCard'
import { useState } from 'react'

export default function Home() {

  const [count, setCount] = useState(0);

  const nextCard = (e) => {
    setCount(count + 1);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Chinese Champion Names</title>
        <meta name="description" content="An app to study the chinese League champion names" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ChampionCard count={count}></ChampionCard>
        <button className={styles.button} onClick={nextCard}>Next Champion</button>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
