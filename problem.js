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

function countVowel(str) {
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
console.log(countVowel("programming")); // Output: 3


const countVowels = (str) => (str.match(/[aeiou]/gi) || []).length;

console.log(countVowels("programming")); // Output: 3


// Problem 3: Check for Palindrome
// Write a function that checks if a string is a palindrome (reads the same forward and backward).

// Example:

// Input: "madam"
// Output: true
// Input: "hello"
// Output: false

function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}
// Example usage:
console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("hello")); // Output: false

// Arrow function version
const checkPalindrome = (s) => {
    const reversed = s.split("").reverse().join("");
    return s === reversed;
}


// Example usage
console.log(checkPalindrome("madam")); // true  
console.log(checkPalindrome("hello")); // false



// Problem 4: Find the Maximum Number
// Write a function that takes an array of numbers and returns the largest number.

// Example:

// Input: [5, 1, 9, 3]
// Output: 9

function findMax(arr) {
    return Math.max(...arr);
}
// Example usage:
console.log(findMax([5, 1, 9, 3])); // Output: 9

// Arrow function version
const maxNumber = (arr) => Math.max(...arr);
console.log(maxNumber([5, 1, 9, 3])); // 9
