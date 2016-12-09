require('../css/main.scss');

import WeaponSelectorView from './WeaponSelectorView';
import Player from './Player';
import randomWeaponSelector from './randomWeaponSelector';

const playerOne = new Player('You');
const playerTwo = new Player('Mr.Robot (aka the computer)');
const weaponsElem = document.getElementsByClassName('js-weapons')[0];
const weaponSelectorView = new WeaponSelectorView(weaponsElem);

startGame();

function startGame() {
    playerOne.weapon = null;
    playerTwo.weapon = randomWeaponSelector();
    showWeaponSelectorScreen();
}

function showWeaponSelectorScreen(){
    weaponSelectorView.render();
}