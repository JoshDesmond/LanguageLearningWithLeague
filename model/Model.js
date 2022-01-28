
/**
 * 
 * @param {Number} index The champion ID or number to get
 * @returns A
 */
async function getName(index) {
    const response = await fetch(`http://localhost:3000/${index}`);
    return await response.json();
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
        /** @type {Number} The currently displayed champion ID or number */
        this._currentChampionId = 0;
        for (let x = 0; x < NUM_CHAMPS; x++) {
            this._activeChampionList.add(x);
        }
    }


    /**
     * @returns {Number} an integer between 0 and NUM_CHAMPS-1
     */
    _getNextChampionInt() {
        const champsRemaining = this._activeChampionList.size;
        if (champsRemaining === 0) { throw new Error("getChampionInt called with no more champions left") };
        const index = Math.floor((Math.random() * champsRemaining));

        let i = 0;
        for (let val of this._activeChampionList.keys()) {
            if (i++ === index) {
                this._currentChampionId = val;
                return val;
            }
        }
    }

    /**
     * 
     * @param {Boolean} correct True if the answer just provided to trigger nextCard was correct
     */
    nextCard(correct) {
        if (correct) {
            this._activeChampionList.delete(this._currentChampionId);
        }

        const newChampionId = this._getNextChampionInt();
        getName(newChampionId)
            .then((data) => {
                this.setChampion({ index: newChampionId, name: data.name, image: data.image });
            });
    }
}

export { Model }