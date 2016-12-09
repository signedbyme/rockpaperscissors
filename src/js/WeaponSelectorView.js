export default class WeaponSelectorView {

    constructor(element) {
        this.element = element;
        this._weaponListElem = this.element.getElementsByClassName('js-weapon-list')[0];
        this._simutatorButtonElem = this.element.getElementsByClassName('js-simutator')[0];
    }

}