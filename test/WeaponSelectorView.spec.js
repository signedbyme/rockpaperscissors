import WeaponSelectorView from '../src/js/WeaponSelectorView';

describe('WeaponSelectorView', () => {

    describe('render', () => {

        it('should render a list of weapons', () => {
            let element = document.createElement('section');
            element.innerHTML = '<ul class="js-weapon-list"></ul><button class="js-simutator"></button>';

            let expectedHTML = `<li><button id="rock" class="weapon-button weapon-rock">rock</button></li><li><button id="paper" class="weapon-button weapon-paper">paper</button></li><li><button id="scissors" class="weapon-button weapon-scissors">scissors</button></li>`

            let weaponSelectorView = new WeaponSelectorView(element);
            weaponSelectorView.render();

            expect(weaponSelectorView.element.innerHTML).to.include(expectedHTML);
        });

        it('should add click handlers to the weapon buttons', () => {

            let element = document.createElement('section');
            element.innerHTML = '<ul class="js-weapon-list"></ul><button class="js-simutator"></button>';

            //TODO: get sinon working for spys
            let clickCount = 0;
            let onClickSpy = () => {clickCount++};
            let weaponSelectorView = new WeaponSelectorView(element, onClickSpy);

            weaponSelectorView.render();
            let weaponButtons = weaponSelectorView.element.getElementsByClassName('weapon-button');

            weaponButtons[0].click();
            expect(clickCount).to.equal(1);
            weaponButtons[1].click();
            expect(clickCount).to.equal(2);
            weaponButtons[2].click();
            expect(clickCount).to.equal(3);
        });

        it('should add click handler to the simulate button', () => {

            let element = document.createElement('section');
            element.innerHTML = '<ul class="js-weapon-list"></ul><button class="js-simutator"></button>';

            //TODO: get sinon working for spys
            let clickCount = 0;
            let onClickSpy = () => {clickCount++};
            let weaponSelectorView = new WeaponSelectorView(element, () => {}, onClickSpy);

            weaponSelectorView.render();
            let simulatorButton = weaponSelectorView.element.getElementsByClassName('js-simutator')[0];

            simulatorButton.click();
            expect(clickCount).to.equal(1);
        });

        it('should show the element', () => {

            let element = document.createElement('section');
            element.style.display = 'none';
            element.innerHTML = '<ul class="js-weapon-list"></ul><button class="js-simutator"></button>';

            let weaponSelectorView = new WeaponSelectorView(element, () => {}, () => {});

            weaponSelectorView.render();

            expect(weaponSelectorView.element.style.display).to.equal('block');
        });

    });

});
