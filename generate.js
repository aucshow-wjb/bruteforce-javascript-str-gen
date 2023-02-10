/*----------------------------------------------------------------*/
/*----------------------------------------------------------------*/
/*----------------------------------------------------------------*/
/*----------------------------------------------------------------*/
/*----------------------------------------------------------------*/
/*----------------------------------------------------------------*/
//1

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




/*----------------------------------------------------------------*/
/*----------------------------------------------------------------*/
/*----------------------------------------------------------------*/
/*----------------------------------------------------------------*/
/*----------------------------------------------------------------*/
/*----------------------------------------------------------------*/
//2

function generateString(charSet, index, currentString) {
    if (index === charSet.length) {
        console.log(currentString);
        return;
    }
  
    for (let i = charSet.length - 1; i >= 0; i--) {
        let newString = currentString + charSet[i];
        if (!currentString.includes(charSet[i])) {
            generateString(charSet, index + 1, newString);
        }
    }
}

let charSet = "abc";
generateString(charSet, 0, "");
