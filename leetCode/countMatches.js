var countMatches = function(items, ruleKey, ruleValue) {
    let count = 0;
    let keyIndex;

    if (ruleKey === "type") keyIndex = 0;
    else if (ruleKey === "color") keyIndex = 1;
    else keyIndex = 2; // "name"

    for (let i = 0; i < items.length; i++) {
        if (items[i][keyIndex] === ruleValue) {
            count++;
        }
    }

    return count;
};
