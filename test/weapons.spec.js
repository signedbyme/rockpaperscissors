import {weaponRules, WEAPONS} from '../src/js/weapons';

describe('weapons module', () => {

    describe('weaponRules', () => {
        it('should be an object of weapon rules', () => {
            expect(weaponRules).to.be.an('object');
        });
    });

    describe('WEAPONS', () => {
        it('should contain rock, paper and scissor', () => {
            expect(WEAPONS).to.have.lengthOf(3);
            expect(WEAPONS).to.eql(['rock','paper','scissors']);
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
