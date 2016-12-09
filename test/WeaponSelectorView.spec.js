import WeaponSelectorView from '../src/js/WeaponSelectorView';

describe('WeaponSelectorView', () => {

    describe('render', () => {

        it('should render a list of weapons', () => {
            let weaponSelectorView = new WeaponSelectorView();
            weaponSelectorView.render();
            expect(weaponSelectorView.element.innerHTML).to.equal();
        });

    });

});