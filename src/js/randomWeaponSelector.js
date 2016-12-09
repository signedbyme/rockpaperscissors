import { WEAPONS } from './weapons';

export default function getRandomWeapon() {
    return WEAPONS[ Math.floor(Math.random() * WEAPONS.length) ];
}