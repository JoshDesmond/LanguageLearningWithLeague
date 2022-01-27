import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ChampionCard from '../components/ChampionCard'
import { useState } from 'react'

// TODO
function getName(index) {
  return fetch(`http://localhost:3000/${index}`)
    .then((response) => response.json())
}

// TODO
const NUM_CHAMPS = 157;
function getRandomChampionInt() {
  // Returns a vlue between 0 and NUM_CHAMPS-1
  return Math.floor((Math.random() * NUM_CHAMPS));
}

// TODO
const nextChamp = () => {

};


export default function Home() {

  const [champion, setChampion] = useState({ index: 0, name: "", image: "https://game.gtimg.cn/images/lol/act/img/skinloading/37000" });

  const nextCard = (e) => {
    if (e) { /* TODO */ }
    const newIndex = getRandomChampionInt();
    setChampion({...champion, index: newIndex});
    getName(newIndex)
      .then(data => {
        setChampion({...champion, name: data.name, image: data.image });
      });
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
