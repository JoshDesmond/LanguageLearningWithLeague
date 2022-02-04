import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import ChampionText from './ChampionText';

/**
 * Component for showing a champion. Takes in image url and name string as props 
 */
function ChampionCard(props) {
    const [showImage, setShowImage] = useState(false);
    const makeImageVisible = () => {
        // Curiously enough, an inline call of setShowImage won't work as an action
        setShowImage(true);
    };

    const styles = {
        display: "flex",
        flexFlow: "column",
        alignItems: "center"
    };

    useEffect(() => {
        setShowImage(false);
    }, [props])

    return (
        <div style={styles}>
            <ChampionText text={props.name} action={makeImageVisible}></ChampionText>
            <div style={{ visibility: (showImage ? "visible" : "hidden"), ...styles }}>
                <Image src={props.image} placeholder="empty" alt="champion picture" width={380} height={560} />
                <div className='translated_text'>{props.translatedText.toUpperCase()}</div>
            </div>
        </div >
    );
}


export default ChampionCard;