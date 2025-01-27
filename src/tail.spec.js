const tail = require('./tail');
describe('Tail', () => {

    it('Tail of [1,2,3,4] is [2,3,4]', () => {
        expect(tail([1, 2, 3, 4])).toEqual([2,3,4]);
    });

    it('Tail of [5,4,3,2] is [4,3,2]', () => {
        expect(tail([5, 4, 3, 2])).toEqual([4,3,2]);
    });

    it('Tail of [] is []', () => {
        expect(tail([])).toEqual([]);
    });

})