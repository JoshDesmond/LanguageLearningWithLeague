
function getName(index) {
    console.log(index);
    return fetch(`http://localhost:3000/${index}`)
        .then((response) => response.json())
}

const NUM_CHAMPS = 157;

class Model {

    /**
     * 
     * @param {function} setChampionFunction 
     */
    constructor(setChampionFunction) {
        this.setChampion = setChampionFunction;
        /** @type {Set} Set of champion indices remaining */
        this._activeChampionList = new Set();
        this._currentIndex = 0; // TODO duplicate state
        for (let x = 0; x < NUM_CHAMPS; x++) {
            this._activeChampionList.add(x);
        }
    }


    /**
     * @returns {Number} an integer between 0 and NUM_CHAMPS-1
     */
    _getNextChampionInt() {
        const champsRemaining = this._activeChampionList.size;
        const index = Math.floor((Math.random() * champsRemaining));
        let i = 0;

        for (let val of this._activeChampionList.keys()) {
            if (i++ === index) {
                this._currentIndex = val; // TODO kinda hacky
                return val;
            }
        }
    }

    nextCard() {
        this._activeChampionList.delete(this._currentIndex); // TODO temp
        const newIndex = this._getNextChampionInt();
        console.log(`newIndex: ${newIndex}`);
        getName(newIndex)
            .then((data) => {
                this.setChampion({ index: newIndex, name: data.name, image: data.image });
                console.log(this._activeChampionList);
            });
    }
}

export { Model }