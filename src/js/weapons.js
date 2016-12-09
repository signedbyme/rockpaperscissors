const weaponRules = {
    rock: {
        paper: false,
        scissors: true
    },
    paper: {
        rock: true,
        scissors: false
    },
    scissors: {
        rock: false,
        paper: true
    }
}

const WEAPONS = Object.keys(weaponRules);

export {weaponRules, WEAPONS};