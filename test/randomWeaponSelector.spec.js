import randomWeaponSelector from '../src/js/randomWeaponSelector';
import {WEAPONS} from '../src/js/weapons';

describe('randomWeaponSelector', () => {

        it('should return a weapon', () => {
            //TODO this doesn't really test for randomness
            let weapon = randomWeaponSelector();
            expect(WEAPONS).to.include(weapon);
        });

});
