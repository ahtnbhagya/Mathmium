/* =========================================================
   MATHMIUM PUZZLE ZONE
   100 MATHEMATICS CHALLENGES

   UPDATED FEATURES
   1. Twenty different colours for each category
   2. Every question has its own colour
   3. The same colour sequence is used in all five categories
   4. Full-screen puzzle workspace
   5. Topic title and Back to Puzzles hidden during play
   6. Previous, Check Answer, Next and Hint remain accessible
   7. Responsive desktop, tablet and mobile layouts
========================================================= */

(function () {
"use strict";

/* =========================================================
   1. RESPONSIVE STYLES
========================================================= */

const styles = `
#activity-window {
    width: min(100%, 1150px);
    max-width: 1150px;
    margin: 0 auto;
    box-sizing: border-box;
    overflow-x: hidden;
}

#activity-window *,
#activity-window *::before,
#activity-window *::after {
    box-sizing: border-box;
}

/* FULL-SCREEN WORKSPACE */

#activity-window.active {
    position: fixed !important;
    inset: 0 !important;
    z-index: 99999 !important;
    width: 100vw !important;
    max-width: none !important;
    height: 100vh !important;
    height: 100dvh !important;
    max-height: 100vh !important;
    max-height: 100dvh !important;
    margin: 0 !important;
    padding: 0 !important;
    overflow-x: hidden !important;
    overflow-y: auto !important;
    background: #FFFFFF;
    overscroll-behavior: contain;
}

#activity-content {
    width: 100%;
    min-width: 0;
    overflow-x: hidden;
}

#activity-window.active #activity-content {
    min-height: 100%;
    height: 100%;
    overflow-y: auto;
}

/* HIDE TOPIC TITLE AND BACK BUTTON DURING PLAY */

#activity-window.active #activity-title,
#activity-window.active #back-button {
    display: none !important;
}

/* MAIN GAME AREA */

.game-area {
    width: 100%;
    min-height: 100%;
    padding: clamp(10px, 2vw, 24px);
    border-radius: 0;
    overflow: visible;
    background: var(--panel);
}

.game-progress {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 8px;
    font-size: 13px;
    font-weight: 700;
    margin-bottom: 9px;
}

.progress-track {
    width: 100%;
    height: 7px;
    background: #E9EDF4;
    border-radius: 20px;
    overflow: hidden;
    margin-bottom: 12px;
}

.progress-fill {
    height: 100%;
    border-radius: inherit;
    background: var(--main);
    transition: width .3s ease;
}

.question-number {
    text-align: center;
    font-size: 11px;
    letter-spacing: 1.5px;
    font-weight: 800;
    margin: 8px 0;
    color: var(--dark);
}

.game-layout {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(230px, 285px);
    gap: clamp(12px, 2vw, 22px);
    align-items: stretch;
    margin-top: 12px;
}

/* QUESTION AREA */

.question-panel {
    min-width: 0;
    padding: clamp(12px, 2vw, 22px);
    border-radius: 16px;
    border: 1px solid var(--line);
    background: var(--question-bg);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    overflow: hidden;
}

.question-panel h3 {
    margin: 0 0 8px;
    font-size: clamp(18px, 2vw, 23px);
    line-height: 1.3;
    color: var(--dark);
}

.question-instruction {
    margin: 0 auto 14px;
    font-size: clamp(12px, 1.4vw, 15px);
    line-height: 1.55;
    color: #5F6877;
}

.puzzle-question {
    width: 100%;
    margin: 14px auto;
    padding: clamp(14px, 2vw, 24px);
    border-radius: 13px;
    background: var(--panel);
    border: 1px solid var(--line);
    text-align: center;
    font-size: clamp(17px, 2.5vw, 26px);
    font-weight: 700;
    line-height: 1.6;
    overflow-wrap: anywhere;
}

/* CONTROL PANEL */

.control-panel {
    min-width: 0;
    padding: 15px;
    border-radius: 16px;
    border: 1px solid var(--line);
    background: var(--control-bg);
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-self: start;
    position: sticky;
    top: 10px;
}

.control-heading {
    font-size: 12px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--dark);
    margin: 0 0 2px;
}

.control-panel button,
.inline-controls button {
    font-family: inherit;
    cursor: pointer;
    touch-action: manipulation;
    font-weight: 700;
    border-radius: 10px;
    transition: transform .15s ease, opacity .15s ease;
}

.control-panel button:active,
.inline-controls button:active {
    transform: scale(.98);
}

.control-panel button:disabled,
.inline-controls button:disabled {
    opacity: .4;
    cursor: not-allowed;
}

.check-button {
    display: block;
    width: 100%;
    min-height: 48px;
    padding: 11px 14px;
    border: none;
    background: var(--main);
    color: white;
    font-size: 15px;
    box-shadow: 0 3px 8px var(--shadow);
}

.check-button:hover {
    filter: brightness(.96);
}

.side-navigation {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 8px;
}

.side-navigation button {
    min-width: 0;
    min-height: 43px;
    padding: 9px 5px;
    border: 1px solid var(--line);
    background: white;
    color: var(--dark);
    font-size: 13px;
}

.hint-button {
    width: 100%;
    min-height: 43px;
    padding: 10px 12px;
    border: 1px solid var(--main);
    background: var(--hint-bg);
    color: var(--dark);
    font-size: 14px;
}

.hint-box {
    display: none;
    padding: 12px;
    border-radius: 10px;
    background: white;
    border: 1px solid var(--line);
    color: #535D6C;
    font-size: 13px;
    line-height: 1.55;
    overflow-wrap: anywhere;
}

.hint-box.show {
    display: block;
}

/* FEEDBACK */

.feedback {
    display: none;
    width: 100%;
    padding: 11px 12px;
    border-radius: 10px;
    font-size: 13px;
    line-height: 1.5;
    overflow-wrap: anywhere;
}

.feedback.show {
    display: block;
}

.feedback.correct {
    display: block;
    color: #27633B;
    background: #DDF5E3;
    border: 1px solid #A8DAB5;
}

.feedback.incorrect {
    display: block;
    color: #963D50;
    background: #FFE4E8;
    border: 1px solid #F3BAC5;
}

/* INLINE CONTROLS */

.inline-controls {
    width: 100%;
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.65fr) minmax(0, 1fr);
    gap: 9px;
    margin-top: 14px;
}

.inline-controls button {
    min-width: 0;
    min-height: 47px;
    padding: 10px 6px;
    font-size: clamp(12px, 1.4vw, 14px);
}

.inline-previous,
.inline-next {
    background: white;
    border: 1px solid var(--line);
    color: var(--dark);
}

.inline-check {
    background: var(--main);
    color: white;
    border: none;
    box-shadow: 0 3px 8px var(--shadow);
}

.inline-hint-area {
    width: 100%;
    margin-top: 11px;
}

.inline-hint-area .hint-button {
    width: 100%;
}

/* ANSWER INPUT */

.answer-area {
    width: 100%;
    max-width: 430px;
    margin: 16px auto;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.answer-area label {
    text-align: center;
    font-size: 13px;
    font-weight: 700;
    color: var(--dark);
}

.answer-input {
    width: 100%;
    height: 48px;
    padding: 10px 14px;
    border: 2px solid var(--line);
    border-radius: 10px;
    background: white;
    font-size: 18px;
    text-align: center;
    outline: none;
}

.answer-input:focus {
    border-color: var(--main);
}

/* NUMBER TOWERS */

.tower-container {
    width: 100%;
    margin: 5px auto;
    text-align: center;
}

.tower {
    width: 100%;
    max-width: 620px;
    margin: 10px auto;
    padding: 5px;
    overflow-x: auto;
}

.tower-row {
    display: flex;
    justify-content: center;
    gap: clamp(5px, 1.2vw, 12px);
    margin: 7px auto;
    min-width: min-content;
}

.tower-block,
.tower-input {
    width: clamp(38px, 5.5vw, 62px);
    height: clamp(38px, 5.5vw, 58px);
    flex: 0 0 auto;
    border-radius: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: clamp(14px, 1.8vw, 19px);
    font-weight: 800;
}

.tower-block {
    background: var(--main);
    color: white;
}

.tower-input {
    min-width: 0;
    padding: 3px;
    border: 2px dashed var(--main);
    background: var(--panel);
    color: var(--dark);
    outline: none;
}

.tower-input:focus {
    border-style: solid;
}

.tower-input.correct-cell {
    border: 2px solid #4C9A65;
    background: #DDF5E3;
}

.tower-input.wrong-cell {
    border: 2px solid #C34868;
    background: #FFE4E8;
}

/* BALANCE EQUALS */

.balance-equation-wrapper {
    width: 100%;
    margin: 12px auto;
}

.balance-equation {
    width: 100%;
    min-width: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: clamp(5px, 1vw, 11px);
    padding: clamp(12px, 2vw, 22px);
    border-radius: 14px;
    background: white;
    border: 1px solid var(--line);
}

.balance-element {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    min-width: clamp(32px, 4vw, 45px);
    min-height: clamp(37px, 4.5vw, 47px);
    padding: 6px 9px;
    border-radius: 9px;
    font-size: clamp(16px, 2.4vw, 23px);
    font-weight: 800;
}

.balance-number {
    color: #245AA8;
    background: #DCEBFF;
}

.balance-operator {
    color: #8064C9;
    background: #EAE1FF;
}

.balance-equals {
    color: #27633B;
    background: #DDF5E3;
    font-size: 26px;
}

.balance-bracket {
    color: #513A91;
    font-size: 28px;
    padding: 0 2px;
}

.balance-missing-input {
    width: clamp(55px, 7vw, 75px);
    height: clamp(42px, 5vw, 53px);
    min-width: 0;
    padding: 3px;
    border: 2px dashed #D69B19;
    border-radius: 10px;
    background: #FFF2B8;
    color: #805800;
    font-size: 20px;
    font-weight: 800;
    text-align: center;
}

.balance-fraction {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 32px;
    color: #245AA8;
    font-size: 18px;
    font-weight: 800;
}

.fraction-numerator,
.fraction-denominator {
    padding: 2px 8px;
}

.fraction-line {
    width: 100%;
    height: 2px;
    background: #245AA8;
}

.balance-colour-guide {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px 13px;
    margin-top: 12px;
}

.guide-item {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 11px;
    color: #555;
}

.guide-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
}

.guide-blue { background: #3978D4; }
.guide-purple { background: #8064C9; }
.guide-yellow { background: #E5B52B; }
.guide-green { background: #4C9A65; }

.balance-answer-label {
    margin-top: 10px;
    text-align: center;
    font-size: 12px;
    color: #626B79;
}

/* COMPLETION */

.completion-area {
    width: 100%;
    max-width: 650px;
    margin: 0 auto;
    padding: 25px 15px;
    text-align: center;
}

.completion-area h2 {
    font-size: clamp(22px, 4vw, 31px);
    color: var(--dark);
}

.score-display {
    margin: 20px auto;
    padding: 20px;
    border-radius: 15px;
    background: var(--question-bg);
    color: var(--dark);
    font-size: 27px;
    font-weight: 800;
}

.completion-button {
    width: min(100%, 400px);
    min-height: 46px;
    margin: 8px auto;
    padding: 10px;
    border: none;
    border-radius: 10px;
    display: block;
    background: var(--main);
    color: white;
    font-size: 14px;
    font-weight: 700;
}

/* TABLET */

@media (max-width: 760px) {
    .game-layout {
        grid-template-columns: minmax(0, 1fr) 220px;
        gap: 10px;
    }

    .control-panel {
        padding: 11px;
    }

    .question-panel {
        padding: 12px;
    }
}

/* MOBILE */

@media (max-width: 600px) {
    #activity-window.active {
        padding: 0 !important;
    }

    .game-area {
        padding: 10px;
    }

    .game-layout {
        grid-template-columns: minmax(0, 1fr);
        gap: 10px;
    }

    .question-panel {
        min-height: auto;
    }

    .control-panel {
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        gap: 9px;
        padding: 12px;
        position: sticky;
        bottom: 0;
        top: auto;
        z-index: 5;
        box-shadow: 0 -4px 14px rgba(0,0,0,.06);
    }

    .control-heading {
        margin-bottom: 0;
    }

    .check-button {
        min-height: 46px;
    }

    .side-navigation button {
        min-height: 42px;
    }

    .hint-button {
        min-height: 42px;
    }

    .inline-controls {
        gap: 6px;
    }

    .inline-controls button {
        min-height: 45px;
        padding: 8px 3px;
    }

    .puzzle-question {
        font-size: 19px;
    }
}

/* SMALL MOBILE */

@media (max-width: 360px) {
    .game-area {
        padding: 7px;
    }

    .question-panel,
    .control-panel {
        padding: 10px;
    }

    .inline-controls {
        gap: 4px;
    }

    .inline-controls button {
        font-size: 11px;
    }
}
`;

function installStyles() {
    if (document.getElementById("mathmium-puzzle-layout-styles")) return;

    const style = document.createElement("style");
    style.id = "mathmium-puzzle-layout-styles";
    style.textContent = styles;
    document.head.appendChild(style);
}

/* =========================================================
   2. QUESTION COLOUR SYSTEM
========================================================= */

/*
   Each question receives a different colour.
   The same 20-colour sequence is repeated in every category.
*/

const questionColours = [
    165, 195, 220, 345, 275,
    35, 145, 205, 315, 185,
    255, 15, 125, 230, 295,
    55, 175, 330, 95, 245
];

function getQuestionColour(index) {
    return questionColours[index % questionColours.length];
}

function applyQuestionColour(root, index) {
    if (!root) return;

    const hue = getQuestionColour(index);

    const colours = {
        "--main": `hsl(${hue} 58% 43%)`,
        "--dark": `hsl(${hue} 62% 29%)`,
        "--panel": `hsl(${hue} 75% 97%)`,
        "--control-bg": `hsl(${hue} 72% 93%)`,
        "--question-bg": `hsl(${hue} 82% 89%)`,
        "--line": `hsl(${hue} 48% 78%)`,
        "--hint-bg": `hsl(${hue} 75% 93%)`,
        "--shadow": `hsla(${hue}, 58%, 43%, .18)`
    };

    Object.entries(colours).forEach(([key, value]) => {
        root.style.setProperty(key, value);
    });
}

/* =========================================================
   3. DATA HELPERS
========================================================= */

const N = value => ({ type: "number", value: String(value) });
const O = value => ({ type: "operator", value });
const I = () => ({ type: "input", value: "{blank}" });
const E = () => ({ type: "equals", value: "=" });
const B = value => ({ type: "bracket", value });
const F = (numerator, denominator) => ({
    type: "fraction",
    numerator: String(numerator),
    denominator: String(denominator)
});

function balanceQuestion(id, level, title, instruction, left, right,
                         answer, hint, explanation) {
    return {
        id, level, title, instruction, left,
        equals: E(), right, answer, hint, explanation
    };
}

/* =========================================================
   4. NUMBER TOWERS - 20
========================================================= */

const towerBases = [
    [2,3,4],[1,5,2],[4,2,6],[3,3,5],[7,1,4],
    [2,6,3],[5,4,2],[6,2,7],[3,8,1],[4,5,3],
    [1,2,3,4],[2,1,4,3],[5,2,1,6],[3,4,2,5],[6,1,3,2],
    [4,3,5,1],[2,5,2,4],[8,1,2,3],[3,6,1,2],[5,2,4,1]
];

const towerHints = [
    "Add 2 + 3 and 3 + 4.",
    "Start with the two numbers on the left.",
    "Try adding 4 + 2 and 2 + 6.",
    "Each upper number is made from two numbers below it.",
    "Start by adding the left pair.",
    "Add the bottom numbers in pairs.",
    "What is 5 + 4?",
    "The top number is the sum of the middle numbers.",
    "Add 3 + 8 and 8 + 1.",
    "Remember that neighbouring pairs share a number.",
    "Work from the bottom row upwards.",
    "Add each pair of neighbouring numbers.",
    "Complete one row before moving to the next.",
    "Add the two numbers directly below each space.",
    "Start with 6 + 1.",
    "Every number is the sum of its two lower neighbours.",
    "Add across the bottom row in pairs.",
    "The top number is the sum of the two numbers beneath it.",
    "Find each middle number by adding the pair below it.",
    "Complete all the sums from bottom to top."
];

const towerPuzzles = towerBases.map((base, i) => ({
    id: i + 1,
    base,
    hint: towerHints[i]
}));

/* =========================================================
   5. MISSING NUMBER OPERATIONS - 20
========================================================= */

const missingPuzzles = [
    ["8 + ___ = 15",7,"Subtract 8 from 15."],
    ["___ + 9 = 21",12,"Subtract 9 from 21."],
    ["24 - ___ = 16",8,"Find the difference between 24 and 16."],
    ["___ - 7 = 18",25,"Add 7 to 18."],
    ["6 × ___ = 42",7,"Divide 42 by 6."],
    ["___ × 8 = 56",7,"Divide 56 by 8."],
    ["63 ÷ ___ = 9",7,"Ask: 9 times what equals 63?"],
    ["___ ÷ 5 = 8",40,"Multiply 8 by 5."],
    ["17 + ___ = 30",13,"Subtract 17 from 30."],
    ["45 - ___ = 29",16,"Subtract 29 from 45."],
    ["9 × ___ = 81",9,"Think of the 9 times table."],
    ["72 ÷ ___ = 8",9,"What number multiplied by 8 gives 72?"],
    ["___ + 26 = 50",24,"Subtract 26 from 50."],
    ["100 - ___ = 64",36,"Find the difference between 100 and 64."],
    ["12 × ___ = 96",8,"Divide 96 by 12."],
    ["___ ÷ 6 = 11",66,"Multiply 11 by 6."],
    ["7 × ___ = 84",12,"Divide 84 by 7."],
    ["90 ÷ ___ = 10",9,"What number multiplied by 10 gives 90?"],
    ["38 + ___ = 100",62,"Subtract 38 from 100."],
    ["___ - 35 = 47",82,"Add 35 to 47."]
].map((p, i) => ({
    id: i + 1,
    question: p[0],
    answer: p[1],
    hint: p[2]
}));

/* =========================================================
   6. NUMBER RIDDLES - 20
========================================================= */

const riddleData = [
    ["I am an even number between 10 and 20. I am also a multiple of 3. What number am I?",[12,18],"List the even numbers between 10 and 20. Which are divisible by 3?"],
    ["I am greater than 30 and less than 40. My digits add up to 9. What number am I?",36,"Try the numbers from 31 to 39."],
    ["Double me and you get 26. What number am I?",13,"Divide 26 by 2."],
    ["I am a number. Add 15 to me and the answer is 40. What number am I?",25,"Subtract 15 from 40."],
    ["I am a multiple of 5 between 40 and 50. My digits add up to 9. What number am I?",45,"Check the multiples of 5 in that range."],
    ["I am an odd number. I am greater than 20 and less than 30. My digits add up to 7. What number am I?",25,"Try the odd numbers from 21 to 29."],
    ["Multiply me by 4 to get 36. What number am I?",9,"Divide 36 by 4."],
    ["I am 10 more than 37. What number am I?",47,"Add 10 to 37."],
    ["I am a two-digit number. My tens digit is 4 and my ones digit is 2. What number am I?",42,"Put the tens digit before the ones digit."],
    ["I am a number between 50 and 60. I am divisible by 7. What number am I?",56,"Count by 7s."],
    ["I am half of 86. What number am I?",43,"Divide 86 by 2."],
    ["I am 5 less than 100. What number am I?",95,"Subtract 5 from 100."],
    ["I am a multiple of 8 between 30 and 40. What number am I?",32,"Count by 8s."],
    ["My digits add up to 10. I am a two-digit number, and my tens digit is 6. What number am I?",64,"Find the ones digit that makes the digit sum 10."],
    ["I am three times 14. What number am I?",42,"Add 14 three times."],
    ["I am a number between 70 and 80. I am even and divisible by 6. What number am I?",[72,78],"Check the multiples of 6 in that range."],
    ["Take away 18 from me and you get 32. What number am I?",50,"Add 18 to 32."],
    ["I am the smallest three-digit number. What number am I?",100,"Think about the first number with three digits."],
    ["I am a two-digit number. My digits are the same, and their sum is 12. What number am I?",66,"Each digit must be half of 12."],
    ["I am a number between 1 and 100. I am divisible by both 3 and 5, and I am greater than 40 but less than 50. What number am I?",45,"Find a multiple of 15 between 40 and 50."]
];

const riddlePuzzles = riddleData.map((p, i) => ({
    id: i + 1,
    question: p[0],
    answer: p[1],
    hint: p[2]
}));

/* =========================================================
   7. BALANCE EQUALS - 20
========================================================= */

const balancePuzzles = [

    balanceQuestion(1,"Easy","Make Both Sides Equal!","Find the missing number to balance the equation.",[N(8),O("+"),N(7)],[I(),O("+"),N(5)],10,"First calculate 8 + 7. Then find the number that makes the right side equal 15.","8 + 7 = 15. The missing number is 10 because 10 + 5 = 15."),

    balanceQuestion(2,"Easy","Find the Missing Number","Both sides must have the same value.",[N(18),O("−"),N(6)],[I(),O("+"),N(4)],8,"What number plus 4 gives 12?","18 − 6 = 12. The missing number is 8 because 8 + 4 = 12."),

    balanceQuestion(3,"Easy","Multiplication Balance","Complete the right side of the equation.",[N(5),O("×"),N(4)],[I(),O("+"),N(6)],14,"Calculate 5 × 4 first. Then subtract 6.","5 × 4 = 20. The missing number is 14 because 14 + 6 = 20."),

    balanceQuestion(4,"Easy","Division Balance","Find the number that makes both sides equal.",[N(36),O("÷"),N(4)],[I(),O("+"),N(3)],6,"36 ÷ 4 = 9. What number plus 3 equals 9?","36 ÷ 4 = 9. The missing number is 6 because 6 + 3 = 9."),

    balanceQuestion(5,"Easy","Subtraction Challenge","Complete the missing number.",[N(25),O("+"),N(15)],[N(50),O("−"),I()],10,"The left side equals 40. What should you subtract from 50 to get 40?","25 + 15 = 40. The missing number is 10 because 50 − 10 = 40."),

    balanceQuestion(6,"Medium","Multiplication Mystery","Find the missing factor.",[N(42),O("−"),N(18)],[N(6),O("×"),I()],4,"42 − 18 = 24. Which number multiplied by 6 gives 24?","42 − 18 = 24. The missing number is 4 because 6 × 4 = 24."),

    balanceQuestion(7,"Medium","Balance the Difference","Find the missing number.",[N(7),O("×"),N(6)],[N(50),O("−"),I()],8,"7 × 6 = 42. What should you subtract from 50 to get 42?","7 × 6 = 42. The missing number is 8 because 50 − 8 = 42."),

    balanceQuestion(8,"Medium","Find the Starting Number","Complete the equation.",[N(64),O("÷"),N(8)],[I(),O("−"),N(2)],10,"64 ÷ 8 = 8. What number minus 2 equals 8?","64 ÷ 8 = 8. The missing number is 10 because 10 − 2 = 8."),

    balanceQuestion(9,"Medium","Integer Balance","Remember to use positive and negative numbers.",[N("−5"),O("+"),N(12)],[I(),O("+"),N(10)],-3,"Calculate −5 + 12. Then find the number that adds to 10 to give the same result.","−5 + 12 = 7. The missing number is −3 because −3 + 10 = 7."),

    balanceQuestion(10,"Medium","Integer Multiplication","Complete the missing number.",[N("−8"),O("+"),N(20)],[N(3),O("×"),I()],4,"First calculate −8 + 20. Then divide the result by 3.","−8 + 20 = 12. The missing number is 4 because 3 × 4 = 12."),

    balanceQuestion(11,"Challenge","Decimal Balance","Balance the equation using decimals.",[N("2.5"),O("+"),N("1.5")],[I(),O("+"),N(1)],3,"Add 2.5 and 1.5 first.","2.5 + 1.5 = 4. The missing number is 3 because 3 + 1 = 4."),

    balanceQuestion(12,"Challenge","Find the Missing Value","Complete the subtraction equation.",[N(15),O("÷"),N(3)],[N(12),O("−"),I()],7,"15 ÷ 3 = 5. What should you subtract from 12 to get 5?","15 ÷ 3 = 5. The missing number is 7 because 12 − 7 = 5."),

    balanceQuestion(13,"Challenge","Fraction Balance","Complete the equation using a decimal number.",[F(3,4),O("+"),F(1,4)],[N(2),O("×"),I()],0.5,"3/4 + 1/4 = 1. Then find half of 1.","3/4 + 1/4 = 1. The missing number is 0.5 because 2 × 0.5 = 1."),

    balanceQuestion(14,"Challenge","Decimal Division Balance","Find the missing number.",[N("1.2"),O("+"),N("0.8")],[I(),O("÷"),N(2)],4,"The left side equals 2. What number divided by 2 gives 2?","1.2 + 0.8 = 2. The missing number is 4 because 4 ÷ 2 = 2."),

    balanceQuestion(15,"Challenge","Multiplication Mystery","Find the missing factor.",[N(5),O("×"),I()],[N(45),O("−"),N(10)],7,"Calculate 45 − 10 first. Then divide by 5.","45 − 10 = 35. The missing number is 7 because 5 × 7 = 35."),

    balanceQuestion(16,"Challenge","Complete the Balance","Find the missing number.",[N(100),O("÷"),N(5)],[I(),O("+"),N(8)],12,"100 ÷ 5 = 20. Subtract 8 to find the missing number.","100 ÷ 5 = 20. The missing number is 12 because 12 + 8 = 20."),

    balanceQuestion(17,"Challenge","Negative Number Challenge","Complete the multiplication equation.",[N("−6"),O("×"),I()],[N("−24")],4,"A negative number multiplied by a positive number gives a negative answer.","The missing number is 4 because −6 × 4 = −24."),

    balanceQuestion(18,"Challenge","Subtraction Balance","Find the missing number.",[N(30),O("−"),I()],[N(4),O("×"),N(5)],10,"Calculate 4 × 5 first. Then subtract the result from 30.","4 × 5 = 20. The missing number is 10 because 30 − 10 = 20."),

    balanceQuestion(19,"Challenge","Brackets Balance","Find the number inside the brackets.",[N(2),O("×"),B("("),I(),O("+"),N(3),B(")")],[N(18)],6,"Divide 18 by 2 first. Then subtract 3.","18 ÷ 2 = 9. The missing number is 6 because 6 + 3 = 9."),

    balanceQuestion(20,"Challenge","Final Balance Challenge","Find the missing divisor.",[N(48),O("÷"),I()],[N(6)],8,"48 divided by which number equals 6?","The missing number is 8 because 48 ÷ 8 = 6.")
];

/* =========================================================
   8. INTEGER PUZZLES - 20
========================================================= */

const integerData = [
    ["(-8) + 15 = ?",7,"Start at -8 and move 15 steps to the right.","-8 + 15 = 7"],
    ["12 + (-7) = ?",5,"Subtract 7 from 12.","12 - 7 = 5"],
    ["(-9) - 6 = ?",-15,"Move 6 more steps to the left from -9.","-9 - 6 = -15"],
    ["(-6) × 4 = ?",-24,"A negative multiplied by a positive gives a negative.","-6 × 4 = -24"],
    ["(-35) ÷ 5 = ?",-7,"A negative divided by a positive gives a negative.","-35 ÷ 5 = -7"],
    ["18 + (-25) = ?",-7,"Find the difference between 25 and 18.","18 - 25 = -7"],
    ["(-12) - (-5) = ?",-7,"Subtracting a negative is the same as adding.","-12 + 5 = -7"],
    ["(-8) × (-3) = ?",24,"Two negative factors give a positive answer.","-8 × -3 = 24"],
    ["(-18) + 7 - (-3) = ?",-8,"Change subtraction of a negative into addition.","-18 + 7 + 3 = -8"],
    ["(-5) × (-4) - 6 = ?",14,"Multiply first, then subtract.","20 - 6 = 14"],
    ["36 ÷ (-9) + 11 = ?",7,"Divide before adding.","-4 + 11 = 7"],
    ["(-7) × (3 - 5) = ?",14,"Calculate inside the brackets first.","-7 × (-2) = 14"],
    ["45 - [12 + (-8)] = ?",41,"Simplify inside the brackets first.","45 - 4 = 41"],
    ["(-48) ÷ (-6) - 13 = ?",-5,"A negative divided by a negative gives a positive.","8 - 13 = -5"],
    ["(-4) × 5 + 32 ÷ (-4) = ?",-28,"Perform multiplication and division first.","-20 + (-8) = -28"],
    ["(-6) × [4 - 9] + 8 = ?",38,"Work inside the brackets first.","-6 × (-5) + 8 = 38"],
    ["72 ÷ [(-3) × 4] = ?",-6,"Calculate the denominator first.","72 ÷ (-12) = -6"],
    ["(-15) + 6 × (-4) - (-9) = ?",-30,"Multiply before adding and subtracting.","-15 - 24 + 9 = -30"],
    ["[(-8) + 3] × [(-2) - 4] = ?",30,"Calculate both brackets before multiplying.","(-5) × (-6) = 30"],
    ["100 ÷ (-5) + [(-6) × (-3)] - 8 = ?",-10,"Calculate division and multiplication first.","-20 + 18 - 8 = -10"]
];

const integerPuzzles = integerData.map((p, i) => ({
    id: i + 1,
    level: i < 8 ? "Easy" : i < 15 ? "Medium" : "Hard",
    question: p[0],
    answer: p[1],
    hint: p[2],
    explanation: p[3]
}));

/* =========================================================
   9. CATEGORY COLLECTION
========================================================= */

window.MATHMIUM_PUZZLES = [
    {
        id: "number-towers",
        title: "Number Towers",
        description: "Complete each tower by adding the two numbers directly below.",
        puzzles: towerPuzzles
    },
    {
        id: "missing-number-operations",
        title: "Missing Number Operations",
        description: "Find the missing number that makes each equation true.",
        puzzles: missingPuzzles
    },
    {
        id: "number-riddles",
        title: "Number Riddles",
        description: "Read each clue and discover the mystery number.",
        puzzles: riddlePuzzles
    },
    {
        id: "balance-equals",
        title: "Balance Equals",
        description: "Balance both sides of each equation by finding the missing number.",
        puzzles: balancePuzzles
    },
    {
        id: "integer-puzzles",
        title: "Integer Puzzles",
        description: "Challenge yourself with positive and negative numbers.",
        puzzles: integerPuzzles
    }
];

window.MATHMIUM_BALANCE_EQUALS = balancePuzzles;

window.getBalanceEqualsQuestion = id =>
    balancePuzzles.find(q => q.id === Number(id));

window.getBalanceEqualsByLevel = level =>
    balancePuzzles.filter(q =>
        q.level.toLowerCase() === String(level).toLowerCase()
    );

window.getBalanceEqualsHint = id =>
    window.getBalanceEqualsQuestion(id)?.hint || "";

window.getBalanceEqualsExplanation = id =>
    window.getBalanceEqualsQuestion(id)?.explanation || "";

/* =========================================================
   10. GAME INITIALISATION
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    installStyles();

    const grid = document.getElementById("puzzle-grid");
    const library = document.getElementById("puzzle-library");
    const empty = document.getElementById("empty-state");
    const activity = document.getElementById("activity-window");
    const activityTitle = document.getElementById("activity-title");
    const content = document.getElementById("activity-content");
    const backButton = document.getElementById("back-button");

    if (!grid || !library || !activity || !content) {
        console.error("Mathmium Puzzle Zone: Required HTML elements were not found.");
        return;
    }

    let category = null;
    let currentIndex = 0;
    let score = 0;
    let answers = {};

    const categoryThemes = {
        "number-towers": {
            main: "#159E94",
            dark: "#087D76",
            question: "#DFFFF9"
        },
        "missing-number-operations": {
            main: "#3978D4",
            dark: "#245AA8",
            question: "#DCEBFF"
        },
        "number-riddles": {
            main: "#C34868",
            dark: "#8A2947",
            question: "#FFDDE5"
        },
        "balance-equals": {
            main: "#8064C9",
            dark: "#513A91",
            question: "#EAE1FF"
        },
        "integer-puzzles": {
            main: "#E17B43",
            dark: "#A64B20",
            question: "#FFE8D2"
        }
    };

    const icons = [
        `<svg viewBox="0 0 100 100" fill="none" aria-hidden="true">
            <path d="M50 10 L12 85 H88 Z" stroke="currentColor" stroke-width="6" stroke-linejoin="round"/>
            <path d="M31 61 H69 M40 45 H60" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>
        </svg>`,
        `<svg viewBox="0 0 100 100" fill="none" aria-hidden="true">
            <rect x="12" y="15" width="76" height="70" rx="15" stroke="currentColor" stroke-width="6"/>
            <path d="M30 38 H70 M30 60 H70" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>
        </svg>`,
        `<svg viewBox="0 0 100 100" fill="none" aria-hidden="true">
            <circle cx="50" cy="50" r="37" stroke="currentColor" stroke-width="6"/>
            <path d="M36 37 Q50 23 64 37 Q72 49 50 61 V67" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>
            <circle cx="50" cy="78" r="4" fill="currentColor"/>
        </svg>`,
        `<svg viewBox="0 0 100 100" fill="none" aria-hidden="true">
            <path d="M50 8 L60 37 L90 50 L60 63 L50 92 L40 63 L10 50 L40 37 Z" stroke="currentColor" stroke-width="6" stroke-linejoin="round"/>
        </svg>`,
        `<svg viewBox="0 0 100 100" fill="none" aria-hidden="true">
            <path d="M15 30 H85 M15 70 H85" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>
            <path d="M30 20 L15 30 L30 40 M70 60 L85 70 L70 80" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="50" cy="50" r="12" stroke="currentColor" stroke-width="5"/>
        </svg>`
    ];

    /* =====================================================
       COMMON HELPERS
    ===================================================== */

    function escapeHTML(value) {
        return String(value).replace(/[&<>"']/g, char => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        })[char]);
    }

    function applyTheme() {
        const root = document.querySelector("#activity-window");
        applyQuestionColour(root, currentIndex);
    }

    function calculateTower(base) {
        const rows = [base.slice()];

        while (rows[rows.length - 1].length > 1) {
            const previous = rows[rows.length - 1];
            const next = [];

            for (let i = 0; i < previous.length - 1; i++) {
                next.push(previous[i] + previous[i + 1]);
            }

            rows.push(next);
        }

        return rows;
    }

    function acceptedAnswers(puzzle) {
        return Array.isArray(puzzle.answer)
            ? puzzle.answer.map(Number)
            : [Number(puzzle.answer)];
    }

    function isCorrect(value, puzzle) {
        if (String(value).trim() === "") return false;

        const number = Number(value);

        return Number.isFinite(number) &&
            acceptedAnswers(puzzle).some(answer =>
                Math.abs(number - answer) < 0.000001
            );
    }

    function isSideLayout() {
        return [
            "number-towers",
            "missing-number-operations",
            "balance-equals"
        ].includes(category.id);
    }

    function scrollToActivity() {
        activity.scrollTop = 0;
        content.scrollTop = 0;
    }

    /* =====================================================
       CATEGORY LIBRARY
    ===================================================== */

    function displayCategories() {

        grid.innerHTML = "";

        if (empty) empty.classList.remove("show");

        window.MATHMIUM_PUZZLES.forEach((item, index) => {

            const theme = categoryThemes[item.id];

            const card = document.createElement("button");
            card.type = "button";
            card.className = "puzzle-card";

            card.style.setProperty("--main", theme.main);
            card.style.setProperty("--light", theme.question);
            card.style.setProperty("--dark", theme.dark);

            const icon = document.createElement("div");
            icon.className = "puzzle-icon";
            icon.innerHTML = icons[index];

            const name = document.createElement("div");
            name.className = "puzzle-name";
            name.textContent = item.title;

            const description = document.createElement("div");
            description.className = "puzzle-description";
            description.textContent = item.description;

            const meta = document.createElement("div");
            meta.className = "puzzle-meta";
            meta.textContent = item.puzzles.length + " CHALLENGES";

            card.append(icon, name, description, meta);
            card.addEventListener("click", () => openCategory(item));

            grid.appendChild(card);
        });
    }

    /* =====================================================
       OPEN CATEGORY
    ===================================================== */

    function openCategory(item) {

        category = item;
        currentIndex = 0;
        score = 0;
        answers = {};

        library.style.display = "none";
        activity.classList.add("active");

        if (activityTitle) activityTitle.style.display = "none";
        if (backButton) backButton.style.display = "none";

        applyTheme();
        showPuzzle();
        scrollToActivity();
    }

    /* =====================================================
       LEVEL LABEL
    ===================================================== */

    function levelHTML(puzzle) {

        if (!puzzle.level) return "";

        const levelColor = {
            Easy: "#159E94",
            Medium: "#D17A27",
            Challenge: "#8064C9",
            Hard: "#C34868"
        }[puzzle.level] || "#3978D4";

        return `
            <div style="
                display:inline-block;
                align-self:flex-start;
                padding:5px 13px;
                margin-bottom:10px;
                border-radius:20px;
                background:${levelColor}18;
                color:${levelColor};
                font-size:11px;
                font-weight:800;
            ">
                ${escapeHTML(puzzle.level)} Level
            </div>
        `;
    }

    /* =====================================================
       NUMBER TOWER RENDERER
    ===================================================== */

    function renderTower(puzzle) {

        const rows = calculateTower(puzzle.base);

        let html = `
            <div class="tower-container">
                <h3>Complete the Number Tower</h3>

                <p class="question-instruction">
                    Each number is the sum of the two numbers directly below it.
                    Fill in all the empty blocks.
                </p>

                <div class="tower">
        `;

        for (let r = rows.length - 1; r >= 0; r--) {

            html += `<div class="tower-row">`;

            rows[r].forEach((number, c) => {

                if (r === 0) {
                    html += `<div class="tower-block">${number}</div>`;
                } else {
                    html += `
                        <input
                            class="tower-input"
                            type="number"
                            inputmode="numeric"
                            step="1"
                            data-row="${r}"
                            data-col="${c}"
                            aria-label="Missing tower number"
                        >
                    `;
                }
            });

            html += `</div>`;
        }

        html += `
                </div>
            </div>
        `;

        return html;
    }

    /* =====================================================
       BALANCE EQUATION RENDERER
    ===================================================== */

    function renderBalanceElement(element) {

        if (element.type === "number") {
            return `<span class="balance-element balance-number">${escapeHTML(element.value)}</span>`;
        }

        if (element.type === "operator") {
            return `<span class="balance-element balance-operator">${escapeHTML(element.value)}</span>`;
        }

        if (element.type === "equals") {
            return `<span class="balance-element balance-equals">=</span>`;
        }

        if (element.type === "bracket") {
            return `<span class="balance-element balance-bracket">${escapeHTML(element.value)}</span>`;
        }

        if (element.type === "input") {
            return `
                <input
                    id="puzzle-answer"
                    class="balance-missing-input"
                    type="number"
                    step="any"
                    inputmode="decimal"
                    placeholder="?"
                    aria-label="Enter the missing number"
                >
            `;
        }

        if (element.type === "fraction") {
            return `
                <span class="balance-fraction">
                    <span class="fraction-numerator">${escapeHTML(element.numerator)}</span>
                    <span class="fraction-line"></span>
                    <span class="fraction-denominator">${escapeHTML(element.denominator)}</span>
                </span>
            `;
        }

        return "";
    }

    function renderBalance(puzzle) {

        const elements = [
            ...puzzle.left,
            puzzle.equals,
            ...puzzle.right
        ];

        return `
            <div class="balance-equation-wrapper">

                <div class="balance-equation">
                    ${elements.map(renderBalanceElement).join("")}
                </div>

                <div class="balance-colour-guide">
                    <span class="guide-item">
                        <span class="guide-dot guide-blue"></span>
                        Numbers
                    </span>
                    <span class="guide-item">
                        <span class="guide-dot guide-purple"></span>
                        Operations
                    </span>
                    <span class="guide-item">
                        <span class="guide-dot guide-yellow"></span>
                        Missing number
                    </span>
                    <span class="guide-item">
                        <span class="guide-dot guide-green"></span>
                        Equals
                    </span>
                </div>

                <div class="balance-answer-label">
                    Enter your answer in the yellow box.
                </div>

            </div>
        `;
    }

    /* =====================================================
       QUESTION CONTENT
    ===================================================== */

    function renderQuestion(puzzle) {

        if (category.id === "number-towers") {
            return renderTower(puzzle);
        }

        if (category.id === "balance-equals") {
            return `
                <div class="question-panel">
                    <h3>${escapeHTML(puzzle.title)}</h3>
                    <p class="question-instruction">${escapeHTML(puzzle.instruction)}</p>
                    ${renderBalance(puzzle)}
                </div>
            `;
        }

        if (category.id === "missing-number-operations") {
            return `
                <div class="question-panel">
                    <h3>Find the Missing Number</h3>

                    <p class="question-instruction">
                        Find the number that makes the equation correct.
                    </p>

                    <div class="puzzle-question">
                        ${escapeHTML(puzzle.question)}
                    </div>

                    <div class="answer-area">
                        <label for="puzzle-answer">Enter your answer</label>
                        <input
                            id="puzzle-answer"
                            class="answer-input"
                            type="number"
                            step="any"
                            inputmode="decimal"
                            placeholder="Your answer"
                        >
                    </div>
                </div>
            `;
        }

        if (category.id === "number-riddles") {
            return `
                <div class="question-panel">
                    <h3>Can You Solve the Riddle?</h3>

                    <p class="question-instruction">
                        Read the clues carefully and find the mystery number.
                    </p>

                    <div class="puzzle-question">
                        ${escapeHTML(puzzle.question)}
                    </div>

                    <div class="answer-area">
                        <label for="puzzle-answer">Your mystery number</label>
                        <input
                            id="puzzle-answer"
                            class="answer-input"
                            type="number"
                            step="any"
                            inputmode="decimal"
                            placeholder="Enter your answer"
                        >
                    </div>
                </div>
            `;
        }

        return `
            <div class="question-panel">
                <h3>Solve the Integer Challenge</h3>

                <p class="question-instruction">
                    Calculate carefully. Remember the rules for positive and negative numbers.
                </p>

                <div class="puzzle-question">
                    ${escapeHTML(puzzle.question)}
                </div>

                <div class="answer-area">
                    <label for="puzzle-answer">Enter your answer</label>
                    <input
                        id="puzzle-answer"
                        class="answer-input"
                        type="number"
                        step="any"
                        inputmode="decimal"
                        placeholder="Your answer"
                    >
                </div>
            </div>
        `;
    }

    /* =====================================================
       CONTROL PANEL
    ===================================================== */

    function renderSideControls() {

        return `
            <div class="control-panel">

                <p class="control-heading">Your Controls</p>

                <button class="check-button" id="check-answer">
                    Check Answer
                </button>

                <div class="side-navigation">

                    <button
                        id="previous-puzzle"
                        ${currentIndex === 0 ? "disabled" : ""}
                    >
                        Previous
                    </button>

                    <button id="next-puzzle">
                        ${currentIndex === category.puzzles.length - 1
                            ? "Finish"
                            : "Next"}
                    </button>

                </div>

                <div class="feedback" id="feedback" aria-live="polite"></div>

                <button class="hint-button" id="hint-button">
                    Show Hint
                </button>

                <div class="hint-box" id="hint-box"></div>

            </div>
        `;
    }

    function renderInlineControls() {

        return `
            <div class="feedback" id="feedback" aria-live="polite"></div>

            <div class="inline-controls">

                <button
                    class="inline-previous"
                    id="previous-puzzle"
                    ${currentIndex === 0 ? "disabled" : ""}
                >
                    Previous
                </button>

                <button class="inline-check" id="check-answer">
                    Check Answer
                </button>

                <button class="inline-next" id="next-puzzle">
                    ${currentIndex === category.puzzles.length - 1
                        ? "Finish"
                        : "Next"}
                </button>

            </div>

            <div class="inline-hint-area">

                <button class="hint-button" id="hint-button">
                    Show Hint
                </button>

                <div class="hint-box" id="hint-box"></div>

            </div>
        `;
    }

    /* =====================================================
       DISPLAY QUESTION
    ===================================================== */

    function showPuzzle() {

        const puzzle = category.puzzles[currentIndex];
        const total = category.puzzles.length;
        const progress = ((currentIndex + 1) / total) * 100;

        const sideLayout = isSideLayout();

        /* CHANGE COLOUR FOR EVERY QUESTION */

        applyTheme();

        let mainContent = "";

        if (category.id === "number-towers") {
            mainContent = `
                <div class="question-panel">
                    ${renderTower(puzzle)}
                </div>
            `;
        } else {
            mainContent = renderQuestion(puzzle);
        }

        const controls = sideLayout
            ? renderSideControls()
            : renderInlineControls();

        content.innerHTML = `

            <div class="game-area">

                <div class="game-progress">
                    <span>Challenge ${currentIndex + 1} of ${total}</span>
                    <span>Score: ${score}</span>
                </div>

                <div class="progress-track">
                    <div
                        class="progress-fill"
                        style="width:${progress}%"
                    ></div>
                </div>

                <div class="question-number">
                    CHALLENGE ${String(currentIndex + 1).padStart(2,"0")}
                </div>

                ${levelHTML(puzzle)}

                <div class="game-layout">

                    ${mainContent}

                    ${controls}

                </div>

            </div>
        `;

        /* CHECK ANSWER */

        document.getElementById("check-answer")
            .addEventListener("click", checkAnswer);

        /* PREVIOUS */

        document.getElementById("previous-puzzle")
            .addEventListener("click", () => {

                if (currentIndex > 0) {
                    currentIndex--;
                    showPuzzle();
                    scrollToActivity();
                }
            });

        /* NEXT */

        document.getElementById("next-puzzle")
            .addEventListener("click", () => {

                if (currentIndex < total - 1) {
                    currentIndex++;
                    showPuzzle();
                    scrollToActivity();
                } else {
                    finishCategory();
                    scrollToActivity();
                }
            });

        /* HINT */

        document.getElementById("hint-button")
            .addEventListener("click", toggleHint);

        /* ENTER KEY */

        const input = document.getElementById("puzzle-answer");

        if (input) {
            input.addEventListener("keydown", event => {
                if (event.key === "Enter") checkAnswer();
            });
        }

        /* TOWER ENTER KEY */

        content.querySelectorAll(".tower-input").forEach(input => {
            input.addEventListener("keydown", event => {
                if (event.key === "Enter") checkAnswer();
            });
        });

        /* RESTORE ANSWER */

        restoreAnswer();
    }

    /* =====================================================
       HINT
    ===================================================== */

    function toggleHint() {

        const puzzle = category.puzzles[currentIndex];
        const box = document.getElementById("hint-box");
        const button = document.getElementById("hint-button");

        const isVisible = box.classList.toggle("show");

        box.textContent = isVisible ? puzzle.hint : "";
        button.textContent = isVisible ? "Hide Hint" : "Show Hint";
    }

    /* =====================================================
       RESTORE PREVIOUS ANSWER
    ===================================================== */

    function restoreAnswer() {

        const saved = answers[currentIndex];

        if (!saved) return;

        if (category.id === "number-towers") {

            const rows = calculateTower(
                category.puzzles[currentIndex].base
            );

            content.querySelectorAll(".tower-input").forEach(input => {

                const key = input.dataset.row + "-" + input.dataset.col;

                if (saved.values[key] !== undefined) {
                    input.value = saved.values[key];
                }

                if (input.value !== "") {

                    const correct =
                        Number(input.value) ===
                        rows[Number(input.dataset.row)][Number(input.dataset.col)];

                    input.classList.toggle("correct-cell", correct);
                    input.classList.toggle("wrong-cell", !correct);
                }
            });

        } else {

            const input = document.getElementById("puzzle-answer");

            if (input) {
                input.value = saved.value ?? "";

                if (saved.correct) {
                    input.style.borderColor = "#159E94";
                    input.style.background = "#DDF5E3";
                }
            }
        }

        if (saved.correct) {
            showFeedback(
                saved.explanation
                    ? "Correct! " + saved.explanation
                    : "Correct! Excellent work!",
                true
            );
        } else if (saved.attempted) {
            showFeedback("Not quite! Try again. You can do it!", false);
        }
    }

    /* =====================================================
       FEEDBACK
    ===================================================== */

    function showFeedback(message, correct) {

        const feedback = document.getElementById("feedback");

        if (!feedback) return;

        feedback.textContent = message;
        feedback.className =
            "feedback show " + (correct ? "correct" : "incorrect");
    }

    /* =====================================================
       CHECK ANSWER
    ===================================================== */

    function checkAnswer() {

        const puzzle = category.puzzles[currentIndex];

        if (answers[currentIndex]?.correct) return;

        if (category.id === "number-towers") {
            checkTower(puzzle);
            return;
        }

        const input = document.getElementById("puzzle-answer");

        if (!input) return;

        const value = input.value.trim();

        if (!value) {
            showFeedback("Please enter your answer first.", false);
            input.focus();
            return;
        }

        const correct = isCorrect(value, puzzle);

        answers[currentIndex] = {
            value,
            attempted: true,
            correct,
            explanation: puzzle.explanation || ""
        };

        if (correct) {

            score++;

            showFeedback(
                puzzle.explanation
                    ? "Correct! " + puzzle.explanation
                    : "Correct! Excellent work!",
                true
            );

            input.style.borderColor = "#159E94";
            input.style.background = "#DDF5E3";

            if (category.id === "balance-equals") {
                input.style.borderStyle = "solid";
            }

        } else {

            showFeedback(
                "Not quite! Check your work and try again.",
                false
            );

            input.style.borderColor = "#C34868";
            input.style.background = "#FFF0F2";
        }

        updateScore();
    }

    /* =====================================================
       CHECK NUMBER TOWER
    ===================================================== */

    function checkTower(puzzle) {

        const rows = calculateTower(puzzle.base);
        const inputs = content.querySelectorAll(".tower-input");

        const values = {};

        let complete = true;
        let correct = true;

        inputs.forEach(input => {

            const row = Number(input.dataset.row);
            const col = Number(input.dataset.col);
            const key = row + "-" + col;

            values[key] = input.value.trim();

            if (input.value.trim() === "") {
                complete = false;
            } else if (
                !Number.isFinite(Number(input.value)) ||
                Number(input.value) !== rows[row][col]
            ) {
                correct = false;
            }
        });

        if (!complete) {
            showFeedback("Please fill in all the empty blocks.", false);
            return;
        }

        answers[currentIndex] = {
            values,
            attempted: true,
            correct
        };

        if (correct) {

            score++;

            answers[currentIndex].explanation =
                "Every number is the sum of the two numbers directly below it.";

            showFeedback(
                "Amazing! Your number tower is correct!",
                true
            );

            inputs.forEach(input => {
                input.classList.add("correct-cell");
                input.classList.remove("wrong-cell");
            });

        } else {

            showFeedback(
                "Not quite! Check the highlighted numbers and try again.",
                false
            );

            inputs.forEach(input => {

                const row = Number(input.dataset.row);
                const col = Number(input.dataset.col);

                const right =
                    Number(input.value) === rows[row][col];

                input.classList.toggle("correct-cell", right);
                input.classList.toggle("wrong-cell", !right);
            });
        }

        updateScore();
    }

    /* =====================================================
       UPDATE SCORE
    ===================================================== */

    function updateScore() {

        const scoreText = content.querySelector(".game-progress span:last-child");

        if (scoreText) {
            scoreText.textContent = "Score: " + score;
        }
    }

    /* =====================================================
       FINISH CATEGORY
    ===================================================== */

    function finishCategory() {

        const total = category.puzzles.length;
        const percentage = Math.round(score / total * 100);

        let message;

        if (percentage === 100) {
            message = "Perfect score! Outstanding work!";
        } else if (percentage >= 70) {
            message = "Wonderful effort! Keep practising!";
        } else if (percentage >= 40) {
            message = "Good effort! You are making progress!";
        } else {
            message = "Every challenge helps you learn. Keep trying!";
        }

        content.innerHTML = `

            <div class="completion-area">

                <h2>Adventure Completed!</h2>

                <p>
                    You have completed all ${total} challenges
                    in ${escapeHTML(category.title)}.
                </p>

                <div class="score-display">
                    ${score} / ${total} Correct
                    <br>
                    <span style="font-size:16px">
                        ${percentage}% Score
                    </span>
                </div>

                <p>${message}</p>

                <button class="completion-button" id="restart-button">
                    Play Again
                </button>

                <button
                    class="completion-button"
                    id="categories-button"
                    style="background:#3978D4"
                >
                    Back to Puzzle Library
                </button>

            </div>
        `;

        document.getElementById("restart-button")
            .addEventListener("click", () => {

                currentIndex = 0;
                score = 0;
                answers = {};

                applyTheme();
                showPuzzle();
                scrollToActivity();
            });

        document.getElementById("categories-button")
            .addEventListener("click", goBack);
    }

    /* =====================================================
       RETURN TO LIBRARY
    ===================================================== */

    function goBack() {

        activity.classList.remove("active");
        library.style.display = "block";

        if (activityTitle) activityTitle.style.display = "";
        if (backButton) backButton.style.display = "";

        category = null;

        window.scrollTo({
            top: library.getBoundingClientRect().top + window.scrollY - 15,
            behavior: "smooth"
        });
    }

    /* =====================================================
       START
    ===================================================== */

    if (backButton) {
        backButton.addEventListener("click", goBack);
    }

    displayCategories();

    console.log(
        "Mathmium Puzzle Zone ready:",
        window.MATHMIUM_PUZZLES.length,
        "categories,",
        window.MATHMIUM_PUZZLES.reduce(
            (sum, item) => sum + item.puzzles.length,
            0
        ),
        "challenges."
    );

});

})();
