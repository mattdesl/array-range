var range = require('./')
var test = require('tape').test

test("creates a new dense array for functional use", function(t) {
    var expected = [0,1,2]
    t.deepEqual(range(3), expected, 'creates range from zero')

    expected = [1,2,3]
    t.deepEqual(range(1, 4), expected, 'creates range from zero')

    t.deepEqual(range(), [], 'empty array') 
    t.deepEqual(range('foo'), [], 'zero array')

    function index(x, i, self) {
        return i+1
    }

    expected = [1,2,3,4]
    t.deepEqual(range(4).map(index), expected, 'works with map function')
    t.deepEqual(range(5).map( function(x) { return x*x }), [ 0, 1, 4, 9, 16 ])

    t.throws(range.bind(null, 5, 2), 'throws error')
    t.deepEqual(range(-2,1), [-2,-1,0], 'accepts negatives')
    t.end()
})


