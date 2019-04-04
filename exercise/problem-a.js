// Given an array of ints a and an int k, return if there exists a pair (x, y) in a such that x + y = k.
// This can be solved in O(nlog(n)) time trivially, or even in O(n) if you use another data structure
// [1, 2, 4, 5, 3]
// k = 7
function hasPairSumToK(a, k) {
    var set = new Set();
    for (var _i = 0, a_1 = a; _i < a_1.length; _i++) {
        var n = a_1[_i];
        var rem = k - n;
        if (set.has(rem)) {
            return true;
        }
        else {
            set.add(n);
        }
    }
    return false;
}
// TESTS don't touch them
function test(actual, expected) {
    if (hasPairSumToK(actual[0], actual[1]) != expected) {
        console.log('ERROR: hasPairSumToK(', actual[0], ',', actual[1], ') should be', expected);
    }
    else {
        console.log('All tests passed!');
    }
}
test([[], 2], false);
test([[-1, -2, -3], -5], true);
test([[1, 2, 3, 4, 5, 7], 8], true);
test([[1, 2, 3, 4, 96, -5], -4], true);
test([[-1, -2, -3], 2], false);
test([[1, 2, 3], 9], false);
test([[7, 8, 9], 6], false);
