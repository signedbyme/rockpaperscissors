import calculateWinner from '../src/js/calculateWinner';

describe('calculateWinner', () => {

        it('should return null if a draw', () => {
            let playerOne = { weapon: 'Rock'};
            let playerTwo = { weapon: 'Rock'};

            let result = calculateWinner(playerOne, playerTwo);

            expect(result).to.be.null;
        });

        it('should return the winning player', () => {

        });

});
