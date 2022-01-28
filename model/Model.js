
function getName(index) {
    return fetch(`http://localhost:3000/${index}`)
        .then((response) => response.json())
}

const NUM_CHAMPS = 157;
/**
 * @returns {Number} an integer between 0 and NUM_CHAMPS-1
 */
function getRandomChampionInt() {
    return Math.floor((Math.random() * NUM_CHAMPS));
}


class Model {

    /**
     * 
     * @param {function} setChampionFunction 
     */
    constructor(setChampionFunction) {
        this.setChampion = setChampionFunction;
    }



    nextCard() {
        const newIndex = getRandomChampionInt();
        const that = this;
        getName(newIndex)
            .then((data) => {
                this.setChampion({ index: newIndex, name: data.name, image: data.image });
            });
    }
}

export { Model }