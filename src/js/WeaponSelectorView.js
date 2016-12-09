import { WEAPONS } from './weapons';

export default class WeaponSelectorView {

    constructor(element) {
        this.element = element;
        this._weaponListElem = this.element.getElementsByClassName('js-weapon-list')[0];
        this._simutatorButtonElem = this.element.getElementsByClassName('js-simutator')[0];
    }

    render() {
        this._weaponListElem.innerHTML = this.generateWeaponsHTML();
    }

    generateWeaponsHTML() {
        let weaponsMarkup = '';
        WEAPONS.forEach( (weapon) => {
            return weaponsMarkup += this.weaponTemplate(weapon);
        });
        return weaponsMarkup;
    }

    weaponTemplate(weapon) {
        return `<li><button id="${weapon}" class="weapon-button weapon-${weapon.toLowerCase()}">${weapon}</button></li>`;
    }
}