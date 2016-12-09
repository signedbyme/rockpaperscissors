import { WEAPONS } from './weapons';

export default class WeaponSelectorView {

    constructor(element, onWeaponClickHandler, onSimulatorClickHandler) {
        this.element = element;
        this._weaponListElem = this.element.getElementsByClassName('js-weapon-list')[0];
        this._simutatorButtonElem = this.element.getElementsByClassName('js-simutator')[0];
        this._onWeaponClickHandler = onWeaponClickHandler;
        this._onSimulatorClickHandler = onSimulatorClickHandler;
    }

    render() {
        this._weaponListElem.innerHTML = this.generateWeaponsHTML();
        this.attachWeaponClickHandlers(this._onWeaponClickHandler);
        this.addSimulatorClickHandler(this._onSimulatorClickHandler);
        this.show();
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
        return this._weaponListElem.getElementsByTagName('button');
    }

    addSimulatorClickHandler(onSimulatorClickHandler) {
        this._simutatorButtonElem.addEventListener("click", onSimulatorClickHandler);
    }

    hide() {
        this.element.style.display = 'none';
    }

    show() {
        this.element.style.display = 'block';
    }
}