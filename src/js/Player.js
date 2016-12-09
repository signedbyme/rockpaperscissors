export default class Player {

    constructor(name) {
        this._name = name
        this._weapon = null;
    }

    get name() {
        return this._name;
    }

    get weapon() {
        return this._weapon;
    }
}