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

export default function ChampionCard() {
    const [name, setName] = useState([]);
    const [image, setImage] = useState();
    const [showImage, setShowImage] = useState(false);

    const styles = {
        display: "flex",
        flexFlow: "column",
        alignItems: "center"
    }

    useEffect(() => {
        const index = getRandomChampionInt();
        let mounted = true;
        getName(index)
            .then(data => {
                if (mounted) {
                    setName(data.name);
                    setImage(data.image);
                }
            });
        return () => mounted = false;
    }, [])

    const makeImageVisible = () => {
        console.log("visibilizing");
        setShowImage(true);
    }


    return (
        <div style={styles}>
            <ChampionText text={name} action={makeImageVisible}></ChampionText>
            <div style={{ visibility: (showImage ? "visible" : "hidden") }}>
                {image ? <Image
                    src={image} placeholder="empty" alt="champion picture" width={380} height={560} /> : <></>}
            </div>
        </div>
    );
}