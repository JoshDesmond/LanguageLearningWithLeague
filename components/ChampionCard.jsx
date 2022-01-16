import React, { useEffect, useState } from 'react';
import Image from 'next/image';

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
    const [image, setImage] = useState("https://game.gtimg.cn/images/lol/act/img/skinloading/34000.jpg");

    let mounted = true;


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


    return (
        <div>
            <p>{name}</p>
            {mounted ? <Image src={image} alt="champion picture" width={380} height={560} /> : <></>}
            <p>Hello</p>
        </div>
    );
}