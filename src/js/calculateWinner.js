import { weaponRules } from './weapons';

export default function calculateWinner(playerOne, playerTwo){
    if (playerOne.weapon === playerTwo.weapon) {
        return null
    }

    return weaponRules[playerOne.weapon][playerTwo.weapon] ? playerOne : playerTwo;
}
