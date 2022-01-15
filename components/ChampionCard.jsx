import React, { useEffect, useState } from 'react';

function getName(index) {
    return fetch(`http://localhost:3000/${index}`, {
    })
        .then(res => {
            res.text()
        })
        .then((data) => {
            JSON.parse(data);
        });
}

const NUM_CHAMPS = 157;
function getRandomChampionInt() {
    // Returns a vlue between 0 and NUM_CHAMPS-1
    return Math.floor((Math.random() * NUM_CHAMPS));
}

export default function ChampionCard() {
    const [name, setName] = useState([]);

    useEffect(() => {
        const index = getRandomChampionInt();
        let mounted = true;
        getName(index)
            .then(res => {
                console.log(res);
                if (mounted) {
                    setName(res.name);
                }
            });
        return () => mounted = false;
    }, [])


    return (
        <div>
            <p>{name}</p>
            <p>Hello</p>
        </div>
    );
}