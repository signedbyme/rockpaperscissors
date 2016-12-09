import {weaponRules} from '../src/js/weapons';

describe('weapons module', () => {

    describe('weaponRules', () => {
        it('should be an object of weapon rules', () => {
            expect(weaponRules).to.be.an('object');
        });

        it('should contain rules for rock, paper and scissor', () => {
            let weaponKeys = Object.keys(weaponRules);

            expect(weaponKeys).to.have.lengthOf(3);
            expect(weaponRules).to.have.all.keys(['rock','paper','scissors']);
        });
    });

    describe('Rock rules', () => {
        it('Rock beats scissor', () => {
            expect(weaponRules.rock.scissors).to.be.true;
        });

        it('Paper beats rock', () => {
            expect(weaponRules.rock.paper).to.be.false;
        });
    });

    describe('Paper rules', () => {
        it('Paper beats rock', () => {
            expect(weaponRules.paper.rock).to.be.true;
        });

        it('Scissors beats paper', () => {
            expect(weaponRules.paper.scissors).to.be.false;
        });
    });

    describe('Scissors rules', () => {
        it('Scissors beats paper', () => {
            expect(weaponRules.scissors.paper).to.be.true;
        });

        it('Rock beats scissors', () => {
            expect(weaponRules.scissors.rock).to.be.false;
        });
    });

});
