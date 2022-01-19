
export default function ChampionCard(props) {

    const style = {
        color: "black",
        fontSize: "8rem",
        cursor: "pointer",
        margin: "0"
    }

    return (
        <p style={style} onClick={props.action}>{props.text}</p>
    )
}