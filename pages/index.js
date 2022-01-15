import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ChampionCard from '../components/ChampionCard'

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
