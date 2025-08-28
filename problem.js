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



// Problem 5: Remove Duplicates from an Array
// Write a function that removes all duplicate numbers from an array.

// Example:

// Input: [1, 2, 2, 3, 4, 4]
// Output: [1, 2, 3, 4]


function removeDuplicates(arr) {
    return [...new Set(arr)];
}
// Example usage:
console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); // Output: [1, 2, 3, 4]
// Arrow function version
const uniqueArray = (arr) => [...new Set(arr)];
console.log(uniqueArray([1, 2, 2, 3, 4, 4])); // [1, 2, 3, 4]


// Problem 6: Sum of All Numbers in an Array
// Write a function that returns the sum of all numbers in an array.

// Example:

// Input: [1, 2, 3, 4]
// Output: 10

function sumArray(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}
// Example usage:
console.log(sumArray([1, 2, 3, 4])); // Output: 10
// Arrow function version
const arraySum = (arr) => arr.reduce((acc, num) => acc + num, 0);
console.log(arraySum([1, 2, 3, 4])); // 10

// Problem 7: Find Even Numbers in an Array
// Write a function that returns all even numbers from a given array.

// Example:

// Input: [1, 2, 3, 4, 5, 6]
// Output: [2, 4, 6]

function findEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}
// Example usage:
console.log(findEvenNumbers([1, 2, 3, 4, 5, 6])); // Output: [2, 4, 6]

// Arrow function version
const evenNumbers = (arr) => arr.filter(num => num % 2 === 0);
console.log(evenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]


// Problem 8: Capitalize First Letter of Each Word
// Write a function that capitalizes the first letter of each word in a string.

// Example:

// Input: "hello world"
// Output: "Hello World"

function capitalizeWords(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
// Example usage:
console.log(capitalizeWords("hello world")); // Output: "Hello World"

// Arrow function version
const capitalizeFirstLetter = (str) => 
  str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");   
console.log(capitalizeFirstLetter("hello world")); // "Hello World"


// Problem 9: Find the Factorial of a Number
// Write a function that calculates the factorial of a number using a loop.

// Example:

// Input: 5
// Output: 120

function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Example usage:
console.log(factorial(5)); // Output: 120

// Arrow function version
const fact = (n) => {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(fact(5)); // 120

// Problem 10: PingPong Challenge
// Write a function that prints numbers from 1 to 20.

// Example:

// For multiples of 3, print "Ping"
// For multiples of 5, print "Pong"
// For multiples of both 3 and 5, print "PingPong"
// If the number is not a multiple of 3 or 5, print the number itself
// Example Output:

// 1, 2, Ping, 4, Pong, Ping, 7, 8, Ping, Pong, 11, Ping, 13, 14, PingPong, 16 …..

function pingPong() {
    for (let i = 1; i <= 20; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("PingPong");
        } else if (i % 3 === 0) {
            console.log("Ping");
        } else if (i % 5 === 0) {
            console.log("Pong");
        } else {
            console.log(i);
        }
    }
}
// Example usage:
pingPong(); // Output: 1, 2, Ping, 4, Pong, Ping, 7, 8, Ping, Pong, 11, Ping, 13, 14, PingPong, 16 …..

// Arrow function version
const pingPongChallenge = () => {
    for (let i = 1; i <= 20; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("PingPong");
        } else if (i % 3 === 0) {
            console.log("Ping");
        } else if (i % 5 === 0) {
            console.log("Pong");
        } else {
            console.log(i);
        }
    }
}
pingPongChallenge(); // 1, 2, Ping, 4, Pong, Ping, 7, 8, Ping, Pong, 11, Ping, 13, 14, PingPong, 16 …..
