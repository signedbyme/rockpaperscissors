import Player from '../src/js/Player';

describe('Player', () => {

    it('should set name on construction', () => {
        let name = 'test';
        let player = new Player(name);
        expect(player.name).to.equal(name);
    });

    it('should have no weapon on construction', () => {
        let name = 'test';
        let player = new Player(name);
        expect(player.weapon).to.be.null;
    });

    it('should allow name to be set', () => {
        let name = 'test';
        let player = new Player(name);
        let newName = 'test2';
        player.name = newName;
        expect(player.name).to.equal(newName);
    });

    it('should allow weapon to be set', () => {
        let name = 'test';
        let player = new Player(name);
        let weapon = 'rock';
        player.weapon = weapon;
        expect(player.weapon).to.equal(weapon);
    });

    it('should return the players name', () => {
        let name = 'test';
        let player = new Player(name);
        expect(player.name).to.equal(name);
    });

    it('should return the players weapon', () => {
        let name = 'test';
        let player = new Player(name);
        let weapon = 'paper';
        player.weapon = weapon;
        expect(player.weapon).to.equal(weapon);
    });

});
