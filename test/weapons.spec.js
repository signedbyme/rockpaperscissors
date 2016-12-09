import {weaponRules} from '../src/js/weapons';

describe('weapons module', () => {

    describe('weaponRules', () => {
        it('should be an object of weapon rules', () => {
            expect(weaponRules).to.be.an('object');
        });
    });

});
