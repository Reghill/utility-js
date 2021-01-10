const maximum = require('./maximum');

describe('Maximum', () => {

    it('Maximum of [1,2,3,4] is 4', () => {
        expect(maximum([1, 2, 3, 4])).toEqual(4);
    });

    it('Maximum of [5,4,3,2] is 5', () => {
        expect(maximum([5,4,3,2])).toEqual(5);
    });
})
