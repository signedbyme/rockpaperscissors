import WeaponSelectorView from '../src/js/WeaponSelectorView';

describe('WeaponSelectorView', () => {

    describe('render', () => {

        it('should render a list of weapons', () => {
            let element = document.createElement('section');
            element.innerHTML = '<ul></ul><button></button>';

            let expectedHTML = `<section>
                <ul>
                    <li><button id="rock" class="weapon-button weapon-rock">rock</button></li>
                    <li><button id="paper" class="weapon-button weapon-paper">paper</button></li>
                    <li><button id="scissors" class="weapon-button weapon-scissors">scissors</button></li>
                </ul>
                <button></button>
            </section>`

            let weaponSelectorView = new WeaponSelectorView(element);
            weaponSelectorView.render();

            expect(weaponSelectorView.element.innerHTML).to.equal(expectedHTML);
        });

    });

});