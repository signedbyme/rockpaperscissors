export default class Player {

    constructor(name) {
        this._name = name
        this._weapon = null;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get weapon() {
        return this._weapon;
    }

    set weapon(weapon) {
        this._weapon = weapon;
    }
}