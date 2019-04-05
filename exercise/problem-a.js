<<<<<<< HEAD
"use strict";
exports.__esModule = true;
// Given an array of ints a and an int k, return if there exists a pair (x, y) in a such that x + y = k.
// This can be solved in O(nlog(n)) time trivially, or even in O(n) if you use another data structure
function hasPairSumToK(a, k) {
    var tempSet = new Set();
    for (var i = 0; i < a.length; i++) {
        var currentNum = a[i];
        var numRem = k - currentNum;
        if (tempSet.has(numRem)) {
            return true;
        }
        else {
            tempSet.add(currentNum);
        }
    }
    return false;
=======
// Given an array of ints a and an int k, return if there exists a pair (x, y) in a such that x + y = k.
// This can be solved in O(nlog(n)) time trivially, or even in O(n) if you use another data structure
function hasPairSumToK(a, k) {
>>>>>>> 2456a19a7d29f62e5682772bc7a862463d11be47
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
