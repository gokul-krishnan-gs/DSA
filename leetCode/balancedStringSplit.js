/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let balance = 0; // track difference between R and L
    let count = 0;   // number of balanced substrings

    for (let char of s) {
        if (char === 'R') balance++;
        else balance--; // char === 'L'

        if (balance === 0) {
            count++; // found a balanced substring
        }
    }

    return count;
};
