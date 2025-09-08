
const uniqueMorseRepresentations = function(words) {
    const morse = [
        ".-","-...","-.-.","-..",".","..-.","--.","....","..",
        ".---","-.-",".-..","--","-.","---",".--.","--.-",".-.",
        "...","-","..-","...-",".--","-..-","-.--","--.."
    ];

    const set = new Set();

    for (let word of words) {
        let transformation = "";
        for (let ch of word) {
            transformation += morse[ch.charCodeAt(0) - 97]; // map 'a' → 0, 'b' → 1, etc.
        }
        set.add(transformation);
    }

    return set.size;
};
