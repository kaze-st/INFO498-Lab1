// Given an array of ints a and an int k, return if there exists a pair (x, y) in a such that x + y = k.
// This can be solved in O(nlog(n)) time trivially, or even in O(n) if you use another data structure
function hasPairSumToK(a, k) {
    if (a.length <= 1) {
        return false;
    }
    else {
        var sorted = a.sort();
        var num = 0;
        var num2 = a.length - 1;
        while (num <= a.length / 2 && num2 >= a.length / 2) {
            var sum = sorted[num] + sorted[num2];
            if (Math.abs(sum) < Math.abs(k)) {
                num++;
            }
            else if (Math.abs(sum) > Math.abs(k)) {
                num2--;
            }
            else {
                return true;
            }
        }
        return false;
    }
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
