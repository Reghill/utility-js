const minimum = require('./minimum');


describe('Minimum', () => {

    it('Minimum of [1,2,3,4] is 1', () => {
        expect(minimum([1,2,3,4])).toEqual(1);
    });

    it('Minimum of [5,4,3,2] is 2', () => {
        expect(minimum([5,4,3,2])).toEqual(2)
    });

})
