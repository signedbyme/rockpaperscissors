require('../css/main.scss');

import WeaponSelectorView from './WeaponSelectorView';
import Player from './Player';
import randomWeaponSelector from './randomWeaponSelector';
import calculateWinner from '..//calculateWinner';

const playerOne = new Player('You');
const playerTwo = new Player('Mr.Robot (aka the computer)');
const weaponsElem = document.getElementsByClassName('js-weapons')[0];
const weaponSelectorView = new WeaponSelectorView(weaponsElem, onWeaponSelectHandler, onSimulatorClickHandler);

startGame();

function startGame() {
    playerOne.weapon = null;
    playerTwo.weapon = randomWeaponSelector();
    showWeaponSelectorScreen();
}

function showWeaponSelectorScreen(){
    weaponSelectorView.render();
}

function showResultScreen() {
    let winningPlayer = calculateWinner(playerOne, playerTwo);
    weaponSelectorView.hide();
}

function onSimulatorClickHandler() {
    playerOne.name = 'Lazy ol\' you';
    playerOne.weapon = randomWeaponSelector();
}

function onWeaponSelectHandler(weapon) {
    playerOne.weapon = weapon;
}