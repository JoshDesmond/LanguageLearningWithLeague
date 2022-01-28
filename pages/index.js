import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ChampionCard from '../components/ChampionCard'
import { useState } from 'react'
import { Model } from '../model/Model.js'


export default function Home() {

  const [champion, setChampion] = useState({ index: 0, name: "黑暗之女", image: "https://game.gtimg.cn/images/lol/act/img/skinloading/1000.jpg" });
  const [model, setModel] = useState(new Model(setChampion));

  const nextCard = () => {
    model.nextCard();
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Chinese Champion Names</title>
        <meta name="description" content="An app to study the chinese League champion names" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ChampionCard name={champion.name} image={champion.image}></ChampionCard>
        <div>
          <button className={styles.button} onClick={nextCard}>Wrong</button>
          <button className={styles.button} onClick={nextCard}>Right</button>
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
