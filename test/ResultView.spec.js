import ResultView from '../src/js/ResultView';

describe('ResultView', () => {

    describe('render', () => {

        describe('wining result', () => {

            it('should render the winning result message', () => {
                let element = document.createElement('section');
                let playerOne = {
                    name: 'Player one',
                    weapon: 'rock'
                };
                let playerTwo = {
                    name: 'Player two',
                    weapon: 'paper'
                };

                let resultView = new ResultView(element, playerOne, playerTwo);
                resultView.winner = playerTwo;
                resultView.render();

                expect(resultView.element.innerHTML).to.include('And the winner is...Player two!');
                expect(resultView.element.innerHTML).to.include('paper beats rock');
                expect(resultView.element.innerHTML).to.include('Player one chose rock');
                expect(resultView.element.innerHTML).to.include('Player two chose paper');
            });
        });

        describe('a draw', () => {

            it('should render the draw result message', () => {
                let element = document.createElement('section');
                let playerOne = {
                    name: 'Player one',
                    weapon: 'rock'
                };
                let playerTwo = {
                    name: 'Player two',
                    weapon: 'rock'
                };

                let resultView = new ResultView(element, playerOne, playerTwo);
                resultView.winner = null;
                resultView.render();

                expect(resultView.element.innerHTML).to.include('It\'s a draw');
                expect(resultView.element.innerHTML).to.include('Player one chose rock');
                expect(resultView.element.innerHTML).to.include('Player two chose rock');
            });
        });

    });

});
