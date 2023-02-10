function generatePattern(charSet, patternLength) {
  let results = [];
  
  function generate(current, charsLeft) {
    if (charsLeft === 0) {
      results.push(current);
      return;
    }

    for (let i = 0; i < charSet.length; i++) {
      generate(current + charSet[i], charsLeft - 1);
    }
  }
  
  generate("", patternLength);
  return results;
}


let charSet = "abcdefghijklmnopqrstuvwxyz";
let patternLength = 4;
let patterns = generatePattern(charSet, patternLength);
console.log(patterns);
