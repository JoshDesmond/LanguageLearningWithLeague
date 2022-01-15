import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chinese Champion Names</title>
        <meta name="description" content="An app to study the chinese League champion names" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ChampionCard></ChampionCard>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
