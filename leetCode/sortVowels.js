
function sortVowels(s) {
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

  // Step 1: Extract vowels
  const extracted = [];
  for (let ch of s) {
    if (vowels.has(ch)) {
      extracted.push(ch);
    }
  }

  // Step 2: Sort vowels by ASCII value
  extracted.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));

  // Step 3: Build result
  let result = "";
  let vowelIndex = 0;
  for (let ch of s) {
    if (vowels.has(ch)) {
      result += extracted[vowelIndex++];
    } else {
      result += ch;
    }
  }

  return result;
}

// Example usage:
console.log(sortVowels("lEetcOde")); // Output: "lEOtcede"
console.log(sortVowels("lYmpH"));    // Output: "lYmpH"
