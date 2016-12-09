import calculateWinner from '../src/js/calculateWinner';

describe('calculateWinner', () => {

        it('should return null if a draw', () => {
            let playerOne = { weapon: 'rock'};
            let playerTwo = { weapon: 'rock'};

            let result = calculateWinner(playerOne, playerTwo);

            expect(result).to.be.null;
        });

        it('should return the winning player', () => {
            let playerOne = { weapon: 'rock'};
            let playerTwo = { weapon: 'paper'};

            let result = calculateWinner(playerOne, playerTwo);

            expect(result.weapon).to.equal(playerTwo.weapon);
        });

});
