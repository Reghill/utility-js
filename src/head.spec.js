const head = require('./head');

describe('Head', () => {

    it('Head of [1,2,3,4] is 1', () => {
        expect(head([1, 2, 3, 4])).toEqual(1);
    });

    it('Head of [5,4,3,2] is 5', () => {
        expect(head([5, 4, 3, 2])).toEqual(5);
    });

    it('Head of [] is undefined', () => {
        expect(head([])).toEqual(undefined);
    });


})