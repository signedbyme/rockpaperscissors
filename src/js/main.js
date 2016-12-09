require('../css/main.scss');

import WeaponSelectorView from './WeaponSelectorView';
import ResultView from './ResultView';
import Player from './Player';
import randomWeaponSelector from './randomWeaponSelector';
import calculateWinner from './calculateWinner';

const playerOne = new Player('You');
const playerTwo = new Player('The computer');
const simulatedPlayerName = 'Lazy ol\' you';

const weaponsElem = document.getElementsByClassName('js-weapons')[0];
const weaponSelectorView = new WeaponSelectorView(weaponsElem, onWeaponSelectHandler, onSimulatorClickHandler);

const resultElem = document.getElementsByClassName('js-game-result')[0];
const resultView = new ResultView(resultElem, playerOne, playerTwo, onPlayAgainHandler);

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
    weaponSelectorView.hide();
    resultView.winner = calculateWinner(playerOne, playerTwo);
    resultView.render();
}

function onSimulatorClickHandler() {
    playerOne.name = simulatedPlayerName;
    playerOne.weapon = randomWeaponSelector();
    showResultScreen();
}

function onWeaponSelectHandler(weapon) {
    playerOne.weapon = weapon;
    showResultScreen();
}

function onPlayAgainHandler() {
    resultView.hide();
    startGame();
}