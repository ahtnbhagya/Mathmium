// puzzles.js
// Add, remove, or edit puzzles inside each category.
// Number tower rows are ordered from bottom to top.
// In each tower, every number is the sum of the two numbers directly below it.

window.MATHMIUM_PUZZLES = [
  {
    id: "number-towers",
    title: "Number Towers",
    description: "Complete each tower by adding the two numbers directly below.",
    puzzles: [
      {
        id: 1,
        rows: [[2, 3, 4], [5, 7], [12]],
        answer: "5, 7, 12",
        hint: "Add each pair of neighbouring numbers."
      },
      {
        id: 2,
        rows: [[1, 5, 2], [6, 7], [13]],
        answer: "6, 7, 13",
        hint: "The middle row contains the sums of the bottom pairs."
      },
      {
        id: 3,
        rows: [[4, 2, 6], [6, 8], [14]],
        answer: "6, 8, 14",
        hint: "Add 4 + 2, then 2 + 6."
      },
      {
        id: 4,
        rows: [[3, 3, 5], [6, 8], [14]],
        answer: "6, 8, 14",
        hint: "Each upper number is made from two numbers below it."
      },
      {
        id: 5,
        rows: [[7, 1, 4], [8, 5], [13]],
        answer: "8, 5, 13",
        hint: "Try adding the left pair first."
      },
      {
        id: 6,
        rows: [[2, 6, 3], [8, 9], [17]],
        answer: "8, 9, 17",
        hint: "Add the bottom numbers in pairs."
      },
      {
        id: 7,
        rows: [[5, 4, 2], [9, 6], [15]],
        answer: "9, 6, 15",
        hint: "5 + 4 gives the left middle number."
      },
      {
        id: 8,
        rows: [[6, 2, 7], [8, 9], [17]],
        answer: "8, 9, 17",
        hint: "The top number is the sum of the two middle numbers."
      },
      {
        id: 9,
        rows: [[3, 8, 1], [11, 9], [20]],
        answer: "11, 9, 20",
        hint: "Add 3 + 8 and 8 + 1."
      },
      {
        id: 10,
        rows: [[4, 5, 3], [9, 8], [17]],
        answer: "9, 8, 17",
        hint: "The two middle numbers share the bottom middle number."
      },
      {
        id: 11,
        rows: [[1, 2, 3, 4], [3, 5, 7], [8, 12], [20]],
        answer: "3, 5, 7; 8, 12; 20",
        hint: "Work from the bottom row upward."
      },
      {
        id: 12,
        rows: [[2, 1, 4, 3], [3, 5, 7], [8, 12], [20]],
        answer: "3, 5, 7; 8, 12; 20",
        hint: "Add each pair of neighbouring numbers."
      },
      {
        id: 13,
        rows: [[5, 2, 1, 6], [7, 3, 7], [10, 10], [20]],
        answer: "7, 3, 7; 10, 10; 20",
        hint: "Check each row before moving to the next."
      },
      {
        id: 14,
        rows: [[3, 4, 2, 5], [7, 6, 7], [13, 13], [26]],
        answer: "7, 6, 7; 13, 13; 26",
        hint: "The top number is the sum of the row beneath it."
      },
      {
        id: 15,
        rows: [[6, 1, 3, 2], [7, 4, 5], [11, 9], [20]],
        answer: "7, 4, 5; 11, 9; 20",
        hint: "Start with 6 + 1 and 1 + 3."
      },
      {
        id: 16,
        rows: [[4, 3, 5, 1], [7, 8, 6], [15, 14], [29]],
        answer: "7, 8, 6; 15, 14; 29",
        hint: "Every number is the sum of its two lower neighbours."
      },
      {
        id: 17,
        rows: [[2, 5, 2, 4], [7, 7, 6], [14, 13], [27]],
        answer: "7, 7, 6; 14, 13; 27",
        hint: "Add across the bottom row in pairs."
      },
      {
        id: 18,
        rows: [[8, 1, 2, 3], [9, 3, 5], [12, 8], [20]],
        answer: "9, 3, 5; 12, 8; 20",
        hint: "The top is 12 + 8."
      },
      {
        id: 19,
        rows: [[3, 6, 1, 2], [9, 7, 3], [16, 10], [26]],
        answer: "9, 7, 3; 16, 10; 26",
        hint: "Find each middle number by adding the pair below it."
      },
      {
        id: 20,
        rows: [[5, 2, 4, 1], [7, 6, 5], [13, 11], [24]],
        answer: "7, 6, 5; 13, 11; 24",
        hint: "Complete the bottom-to-top sums."
      }
    ]
  },

  {
    id: "missing-number-operations",
    title: "Missing Number Operations",
    description: "Find the missing number that makes each equation true.",
    puzzles: [
      { id: 1, question: "8 + __ = 15", answer: "7", hint: "Subtract 8 from 15." },
      { id: 2, question: "__ + 9 = 21", answer: "12", hint: "Subtract 9 from 21." },
      { id: 3, question: "24 - __ = 16", answer: "8", hint: "Find the difference between 24 and 16." },
      { id: 4, question: "__ - 7 = 18", answer: "25", hint: "Add 7 to 18." },
      { id: 5, question: "6 × __ = 42", answer: "7", hint: "Divide 42 by 6." },
      { id: 6, question: "__ × 8 = 56", answer: "7", hint: "Divide 56 by 8." },
      { id: 7, question: "63 ÷ __ = 9", answer: "7", hint: "Ask: 9 times what equals 63?" },
      { id: 8, question: "__ ÷ 5 = 8", answer: "40", hint: "Multiply 8 by 5." },
      { id: 9, question: "17 + __ = 30", answer: "13", hint: "Subtract 17 from 30." },
      { id: 10, question: "45 - __ = 29", answer: "16", hint: "Subtract 29 from 45." },
      { id: 11, question: "9 × __ = 81", answer: "9", hint: "Think of the 9 times table." },
      { id: 12, question: "72 ÷ __ = 8", answer: "9", hint: "Ask: 8 times what equals 72?" },
      { id: 13, question: "__ + 26 = 50", answer: "24", hint: "Subtract 26 from 50." },
      { id: 14, question: "100 - __ = 64", answer: "36", hint: "Find the difference between 100 and 64." },
      { id: 15, question: "12 × __ = 96", answer: "8", hint: "Divide 96 by 12." },
      { id: 16, question: "__ ÷ 6 = 11", answer: "66", hint: "Multiply 11 by 6." },
      { id: 17, question: "7 × __ = 84", answer: "12", hint: "Divide 84 by 7." },
      { id: 18, question: "90 ÷ __ = 10", answer: "9", hint: "Ask: 10 times what equals 90?" },
      { id: 19, question: "38 + __ = 100", answer: "62", hint: "Subtract 38 from 100." },
      { id: 20, question: "__ - 35 = 47", answer: "82", hint: "Add 35 to 47." }
    ]
  },

  {
    id: "number-riddles",
    title: "Number Riddles",
    description: "Read each clue and work out the mystery number.",
    puzzles: [
      { id: 1, question: "I am an even number between 10 and 20. I am also a multiple of 3. What number am I?", answer: "12 or 18", hint: "List the even numbers between 10 and 20, then check which are divisible by 3." },
      { id: 2, question: "I am greater than 30 and less than 40. My digits add up to 9. What number am I?", answer: "36", hint: "Try the numbers from 31 to 39." },
      { id: 3, question: "Double me and you get 26. What number am I?", answer: "13", hint: "Divide 26 by 2." },
      { id: 4, question: "I am a number. Add 15 to me and the answer is 40. What number am I?", answer: "25", hint: "Subtract 15 from 40." },
      { id: 5, question: "I am a multiple of 5 between 40 and 50. My digits add up to 9. What number am I?", answer: "45", hint: "Check the multiples of 5 in that range." },
      { id: 6, question: "I am an odd number. I am greater than 20 and less than 30. My digits add up to 7. What number am I?", answer: "25", hint: "Try the odd numbers from 21 to 29." },
      { id: 7, question: "Multiply me by 4 to get 36. What number am I?", answer: "9", hint: "Divide 36 by 4." },
      { id: 8, question: "I am 10 more than 37. What number am I?", answer: "47", hint: "Add 10 to 37." },
      { id: 9, question: "I am a two-digit number. My tens digit is 4 and my ones digit is 2. What number am I?", answer: "42", hint: "Put the tens digit before the ones digit." },
      { id: 10, question: "I am a number between 50 and 60. I am divisible by 7. What number am I?", answer: "56", hint: "Count by 7s: 7, 14, 21..." },
      { id: 11, question: "I am half of 86. What number am I?", answer: "43", hint: "Divide 86 by 2." },
      { id: 12, question: "I am 5 less than 100. What number am I?", answer: "95", hint: "Subtract 5 from 100." },
      { id: 13, question: "I am a multiple of 8 between 30 and 40. What number am I?", answer: "32", hint: "Count by 8s." },
      { id: 14, question: "My digits add up to 10. I am a two-digit number, and my tens digit is 6. What number am I?", answer: "64", hint: "Find the ones digit that makes the digit sum 10." },
      { id: 15, question: "I am three times 14. What number am I?", answer: "42", hint: "Add 14 three times." },
      { id: 16, question: "I am a number between 70 and 80. I am even and divisible by 6. What number am I?", answer: "72 or 78", hint: "Check the multiples of 6 in that range." },
      { id: 17, question: "Take away 18 from me and you get 32. What number am I?", answer: "50", hint: "Add 18 to 32." },
      { id: 18, question: "I am the smallest three-digit number. What number am I?", answer: "100", hint: "Think about the first number with three digits." },
      { id: 19, question: "I am a two-digit number. My digits are the same, and their sum is 12. What number am I?", answer: "66", hint: "Each digit must be half of 12." },
      { id: 20, question: "I am a number between 1 and 100. I am divisible by both 3 and 5, and I am greater than 40 but less than 50. What number am I?", answer: "45", hint: "Find a multiple of 15 between 40 and 50." }
    ]
  }
];
