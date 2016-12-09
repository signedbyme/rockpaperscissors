import ResultView from '../src/js/ResultView';

describe('ResultView', () => {

    describe('render', () => {


        it('should render the result', () => {
            let element = document.createElement('section');
            let playerOne = {
                name: 'Player one',
                weapon: 'rock'
            };
            let playerTwo = {
                name: 'Player two',
                weapon: 'paper'
            };

            let expectedHTML = `<h2>And the winner is...Player two!</h2>
                    <div>Player one chose rock</div>
                    <div>Player chose paper</div>
                    <button>Play again</button>`

            let resultView = new ResultView(element, playerOne, playerTwo);
            resultView.render();

            expect(resultView.element.innerHTML).to.include(expectedHTML);
        });

    });

});
