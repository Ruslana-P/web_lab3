function checkBrackets(str) {
  const stack = [];
  const openingBrackets = "({[";
  const closingBrackets = ")}]";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (openingBrackets.includes(char)) {
      stack.push(char);
    }

    if (closingBrackets.includes(char)) {
      const lastOpeningBracket = stack.pop();

      if (
        openingBrackets.indexOf(lastOpeningBracket) !==
        closingBrackets.indexOf(char)
      ) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(checkBrackets("function someFn() { let arr = [1, 2, 3]; }")); // true
console.log(checkBrackets("function someFn( { let arr = [1, 2, 3]; }")); // false
console.log(checkBrackets("function test() { let arr = (1, 2, 3; }")); // false
console.log(checkBrackets("{[()]}")); // true
console.log(checkBrackets("{[()]")); // false
