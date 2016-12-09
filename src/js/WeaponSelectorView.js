import { WEAPONS } from './weapons';

export default class WeaponSelectorView {

    constructor(element, onWeaponClickHandler) {
        this.element = element;
        this._weaponListElem = this.element.getElementsByClassName('js-weapon-list')[0];
        this._simutatorButtonElem = this.element.getElementsByClassName('js-simutator')[0];
        this._onWeaponClickHandler = onWeaponClickHandler;
    }

    render() {
        this._weaponListElem.innerHTML = this.generateWeaponsHTML();
        this.attachWeaponClickHandlers(this._onWeaponClickHandler);
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

    attachWeaponClickHandlers(onWeaponChosen) {
        let weaponButtons = this.findWeaponButtons();
        let i;
        for (i = 0; i < weaponButtons.length; i++) {
            weaponButtons[i].addEventListener("click", (e) => {
                e.preventDefault();
                onWeaponChosen(e.target.id);
            });
        }
    }

    findWeaponButtons() {
        return this.element.getElementsByTagName('button');
    }
}