require('../css/main.scss');

import WeaponSelectorView from './WeaponSelectorView';
import Player from './Player';

const playerOne = new Player('You');
const playerTwo = new Player('Mr.Robot (aka the computer)');
const weaponsElem = document.getElementsByClassName('js-weapons')[0];
const weaponSelectorView = new WeaponSelectorView(weaponsElem);

startGame();

function startGame() {
    playerOne.weapon = null;
    playerTwo.weapon = null;
    showWeaponSelectorScreen();
}

function showWeaponSelectorScreen(){
    weaponSelectorView.render();
}