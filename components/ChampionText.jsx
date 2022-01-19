
export default function ChampionCard(props) {

    const style = {
        color: "black",
        fontSize: "8rem",
        cursor: "pointer",
        margin: "0"
    }

    return (
        <p style={style} >{props.text}</p>
    )
}