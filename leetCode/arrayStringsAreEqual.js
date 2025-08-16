const arrayStringsAreEqual = function(word1, word2) {
    let wordOne = word1.join('');
    let wordTwo = word2.join('');
    if(wordOne === wordTwo)
        return true
    return false;
};
