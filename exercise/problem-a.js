"use strict";
function hasPairSumToK(a, k) {
    var obj = {};
    var found = false;
    for (var _i = 0, a_1 = a; _i < a_1.length; _i++) {
        var num = a_1[_i];
        if (obj[k - num]) {
            found = true;
            break;
        }
        obj[num] = true;
    }
    return found;
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
