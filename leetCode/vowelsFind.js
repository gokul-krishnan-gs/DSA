const mostFrequentVowelConsonant = function(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    const freq = new Map();

    // Count frequency of each character
    for (let ch of s) {
        freq.set(ch, (freq.get(ch) || 0) + 1);
    }

    let maxVowel = 0;
    let maxConsonant = 0;

    // Find max frequency among vowels and consonants
    for (let [ch, count] of freq) {
        if (vowels.has(ch)) {
            maxVowel = Math.max(maxVowel, count);
        } else {
            maxConsonant = Math.max(maxConsonant, count);
        }
    }

    return maxVowel + maxConsonant;
};