// Write a function that takes a string and returns it reversed.

// Example:
// Input: "hello"
// Output: "olleh"

function reverseString(str) {
    // Split the string into an array of characters
    const charArray = str.split('');
    
    // Reverse the array of characters
    const reversedArray = charArray.reverse();
    
    // Join the reversed array back into a string
    const reversedStr = reversedArray.join('');
    
    return reversedStr;
}

// Example usage:
console.log(reverseString("hello")); // Output: "olleh"


// Function to reverse a string
const reverseStr = (str) => {
  return str.split("").reverse().join("");
};

// Example usage
console.log(reverseStr("hello")); // Output: "olleh"


const strReverse = str => str.split("").reverse().join("");

console.log(strReverse("hello")); // "olleh"


// Problem 2: Count Vowels in a String
// Write a function that counts how many vowels (a, e, i, o, u) are in a given string.

// Example:

// Input: "programming"
// Output: 3

function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

// Example usage:
console.log(countVowels("programming")); // Output: 3


const countVowels = (str) => (str.match(/[aeiou]/gi) || []).length;

console.log(countVowels("programming")); // Output: 3



