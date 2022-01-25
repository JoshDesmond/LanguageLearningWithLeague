import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import ChampionText from './ChampionText';

function getName(index) {
    return fetch(`http://localhost:3000/${index}`)
        .then((response) => response.json())
}

const NUM_CHAMPS = 157;
function getRandomChampionInt() {
    // Returns a vlue between 0 and NUM_CHAMPS-1
    return Math.floor((Math.random() * NUM_CHAMPS));
}

function ChampionCard(props) {
    const [champion, setChampion] = useState({name: "", image: ""});
    const [showImage, setShowImage] = useState(false);
    let mounted = false;

    const styles = {
        display: "flex",
        flexFlow: "column",
        alignItems: "center"
    }

    useEffect(() => {
        // if (props.count === 0) return; // Ignore initialization
        const index = getRandomChampionInt();
        getName(index)
            .then(data => {
                setChampion({name: data.name, image: data.image});
                setShowImage(false);
            });
    }, [props.count])

    const makeImageVisible = () => {
        setShowImage(true);
    }

    return (
        <div style={styles}>
            <ChampionText text={champion.name} action={makeImageVisible}></ChampionText>
            <div style={{ visibility: (showImage ? "visible" : "hidden") }}>
                {champion.image ? <Image
                    src={champion.image} placeholder="empty" alt="champion picture" width={380} height={560} /> : <></>}
            </div>
        </div>
    );
}

export default ChampionCard;