// Function to convert Roman numerals to Arabic numerals
function romanToArabic(roman) {
    // Create an object to store the Roman numeral values
    let romanValues = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    // Initialize the result variable
    let result = 0;
    // Iterate through the Roman numeral string
    for (let i = 0; i < roman.length; i++) {
        // Get the value of the current Roman numeral
        let currentValue = romanValues[roman[i]];
        // Get the value of the next Roman numeral (if there is one)
        let nextValue = romanValues[roman[i + 1]];
        // Check if the current Roman numeral is less than the next one
        if (currentValue < nextValue) {
            // Subtract the current value from the result
            result -= currentValue;
        } else {
            // Add the current value to the result
            result += currentValue;
        }
    }
    // Return the result
    return result;
}

// Function to convert Arabic numerals to Roman numerals
function arabicToRoman(arabic) {
    // Create an array of Roman numeral values
    let romanValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    // Create an array of Roman numeral characters
    let romanChars = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    // Initialize the result variable
    let result = "";
    // Iterate through the Roman numeral values
    for (let i = 0; i < romanValues.length; i++) {
        // Keep subtracting the current Roman numeral value from the Arabic numeral
        // until it is no longer greater than or equal to it
        while (arabic >= romanValues[i]) {
            // Add the current Roman numeral character to the result
            result += romanChars[i];
            // Subtract the current Roman numeral value from the Arabic numeral
            arabic -= romanValues[i];
        }
    }
    // Return the result
    return result;
}

// // Example usage:
// console.log(romanToArabic("XII")); // prints 12
// console.log(arabicToRoman(12)); // prints "XII"

export { arabicToRoman, romanToArabic };

