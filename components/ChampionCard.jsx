import React, { useState } from 'react';

export default function ChampionCard() {

    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    return (
        <ChampionName/>
        <ChampionImage/>
    );
}