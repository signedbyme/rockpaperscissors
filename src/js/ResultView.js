export default class ResultView {

    constructor(element, playerOne, playerTwo, onPlayAgain) {
        this.element = element;
        this._playerOne = playerOne;
        this._playerTwo = playerTwo;
        this._winner = null;
        this._onPlayAgain = onPlayAgain;
    }

    render() {
        let result = this.resultMessage();
        this.element.innerHTML = this.resultTemplate(result);
        this.attachPlayAgainClickHandler();
        this.show();
    }

    set winner(winner) {
        this._winner = winner;
    }

    get winner() {
        return this._winner;
    }

    resultTemplate(result) {
        return `${result}
                    <div class="player-weapon-choice">${this._playerOne.name} chose ${this._playerOne.weapon}</div>
                    <div class="player-weapon-choice">${this._playerTwo.name} chose ${this._playerTwo.weapon}</div>
                    <button>Play again</button>`;
    }

    resultMessage() {
        let resultMessage = `<h2>It's a draw!</h2>`;

        if (this.winner) {
            resultMessage = `<h2>And the winner is...${this.winner.name}!</h2>`;

            if (this.winner === this._playerOne) {
                resultMessage += `<p>${this._playerOne.weapon} beats ${this._playerTwo.weapon}.</p>`;
            } else {
                resultMessage += `<p>${this._playerTwo.weapon} beats ${this._playerOne.weapon}.</p>`;
            }
        }

        return resultMessage;
    }

    show() {
        this.element.style.display = 'block';
    }

    attachPlayAgainClickHandler(){
        let playAgainButtonElem = this.element.getElementsByTagName('button')[0];
        playAgainButtonElem.addEventListener('click', (e) => {
            e.preventDefault();
            this._onPlayAgain();
        });
    }

    hide() {
        this.element.innerHTML = '';
        this.element.style.display = 'none';
    }

}
