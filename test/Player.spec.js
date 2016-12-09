import Player from '../src/js/Player';

describe('Player', () => {
    let name = 'test';
    let player;

    beforeEach( ()=> {
        player = new Player(name); 
    });

    it('should set name on construction', () => {
        expect(player.name).to.equal(name);
    });

    it('should have no weapon on construction', () => {
        expect(player.weapon).to.be.null;
    });

    it('should allow name to be set', () => {
        let newName = 'test2';
        player.name = newName;
        expect(player.name).to.equal(newName);
    });

    it('should allow weapon to be set', () => {
        let weapon = 'rock';
        player.weapon = weapon;
        expect(player.weapon).to.equal(weapon);
    });

    it('should return the players name', () => {
        expect(player.name).to.equal(name);
    });

    it('should return the players weapon', () => {
        let weapon = 'paper';
        player.weapon = weapon;
        expect(player.weapon).to.equal(weapon);
    });

});
