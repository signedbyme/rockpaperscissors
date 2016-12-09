import Player from '../src/js/Player';

describe('Player', () => {

    it('should set name on construction', () => {
        let name = 'test';
        let player = new Player(name);
        expect(player.name).to.be(name);
    });

});
