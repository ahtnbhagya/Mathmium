/* =========================================================
   MATHMIUM PUZZLE ZONE
   120 MATHEMATICS CHALLENGES

   1. Number Towers                  - 20
   2. Missing Number Operations      - 20
   3. Number Riddles                 - 20
   4. Balance Equals                 - 20
   5. Integer Puzzles                - 20
   6. Decimal Challenges             - 20

   LAYOUT
   Number Towers, Missing Operations,
   Balance Equals, Decimal Challenges:
   Question on left / Controls on right.

   Number Riddles, Integer Puzzles:
   Question first / Controls underneath.

   Every category has its own colour theme.
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

#activity-content {
    width: 100%;
    min-width: 0;
    overflow-x: hidden;
}

.game-area {
    width: 100%;
    padding: clamp(12px, 2vw, 24px);
    border-radius: 18px;
    overflow: hidden;
    background: var(--page-bg);
}

.game-progress {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 8px;
    font-size: 13px;
    font-weight: 700;
    margin-bottom: 9px;
    color: var(--dark);
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
    background: var(--main);
    border-radius: inherit;
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

/* SIDE-BY-SIDE LAYOUT */

.game-layout {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(230px, 285px);
    gap: clamp(12px, 2vw, 22px);
    align-items: stretch;
    margin-top: 12px;
}

/* SINGLE-COLUMN LAYOUT
   Used by Number Riddles and Integer Puzzles.
*/

.game-layout.inline-layout {
    grid-template-columns: minmax(0, 1fr);
    gap: 12px;
}

.question-panel {
    min-width: 0;
    padding: clamp(12px, 2vw, 22px);
    border-radius: 16px;
    border: 1px solid var(--line);
    background: var(--panel);
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
    background: var(--question-bg);
    border: 1px solid var(--line);
    text-align: center;
    font-size: clamp(17px, 2.5vw, 26px);
    font-weight: 700;
    line-height: 1.6;
    overflow-wrap: anywhere;
}

/* RIGHT CONTROL PANEL */

.control-panel {
    min-width: 0;
    padding: 15px;
    border-radius: 16px;
    border: 1px solid var(--line);
    background: var(--control-bg);
    display: flex;
    flex-direction: column;
    gap: 12px;
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

.check-button:hover,
.inline-check:hover {
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

/* INLINE BUTTONS
   Used below Number Riddles and Integer Puzzles.
*/

.inline-controls {
    width: 100%;
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.65fr) minmax(0, 1fr);
    gap: 9px;
    margin-top: 0;
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
    margin-top: 0;
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
    background: var(--question-bg);
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

/* DECIMAL CHALLENGES */

.decimal-equation {
    width: 100%;
    margin: 16px auto;
    padding: clamp(14px, 2vw, 24px);
    border: 1px solid var(--line);
    border-radius: 15px;
    background: white;
    text-align: center;
    font-size: clamp(20px, 3vw, 29px);
    font-weight: 800;
    line-height: 1.8;
    color: var(--dark);
}

.decimal-blank {
    display: inline-block;
    width: clamp(75px, 12vw, 115px);
    height: 44px;
    margin: 3px 5px;
    padding: 5px;
    border: 2px dashed var(--main);
    border-radius: 9px;
    background: var(--question-bg);
    color: var(--dark);
    font-size: 19px;
    font-weight: 800;
    text-align: center;
    vertical-align: middle;
}

.decimal-blank:focus {
    outline: 2px solid var(--main);
    outline-offset: 2px;
}

.decimal-blank.correct-cell {
    border: 2px solid #4C9A65;
    background: #DDF5E3;
}

.decimal-blank.wrong-cell {
    border: 2px solid #C34868;
    background: #FFE4E8;
}

.decimal-sequence {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin: 18px auto;
    padding: 15px;
    border-radius: 14px;
    background: white;
    border: 1px solid var(--line);
}

.sequence-number {
    min-width: 58px;
    min-height: 52px;
    padding: 10px 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background: var(--question-bg);
    color: var(--dark);
    border: 1px solid var(--line);
    font-size: clamp(15px, 2vw, 20px);
    font-weight: 800;
}

.sequence-arrow {
    color: var(--main);
    font-size: 19px;
    font-weight: 800;
}

.decimal-grid {
    width: 100%;
    margin: 16px auto;
    padding: clamp(10px, 2vw, 20px);
    border-radius: 15px;
    background: white;
    border: 1px solid var(--line);
}

.decimal-grid-title {
    margin: 0 0 15px;
    text-align: center;
    color: var(--dark);
    font-size: 16px;
    font-weight: 800;
}

.decimal-bar-row {
    display: grid;
    grid-template-columns: 75px minmax(0, 1fr);
    align-items: center;
    gap: 10px;
    margin: 12px 0;
}

.decimal-row-label {
    font-size: 12px;
    font-weight: 800;
    color: var(--dark);
}

.decimal-bar {
    min-width: 0;
    display: flex;
    gap: 4px;
    min-height: 52px;
}

.decimal-part {
    min-width: 0;
    flex: 1 1 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px 3px;
    border-radius: 8px;
    background: var(--question-bg);
    border: 1px solid var(--line);
    color: var(--dark);
    font-size: clamp(12px, 1.7vw, 17px);
    font-weight: 800;
    overflow-wrap: anywhere;
}

.decimal-part:nth-child(2) {
    background: var(--part-two);
}

.decimal-part:nth-child(3) {
    background: var(--part-three);
}

.decimal-part input {
    width: 100%;
    min-width: 0;
    height: 38px;
    padding: 3px;
    border: 2px dashed var(--main);
    border-radius: 7px;
    background: white;
    color: var(--dark);
    font-size: clamp(12px, 1.6vw, 16px);
    font-weight: 800;
    text-align: center;
}

.decimal-part input:focus {
    outline: 2px solid var(--main);
    outline-offset: 1px;
}

.decimal-part input.correct-cell {
    border: 2px solid #4C9A65;
    background: #DDF5E3;
}

.decimal-part input.wrong-cell {
    border: 2px solid #C34868;
    background: #FFE4E8;
}

.decimal-grid-note {
    margin: 14px 0 0;
    text-align: center;
    font-size: 12px;
    line-height: 1.5;
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
    cursor: pointer;
}

/* TABLET */

@media (max-width: 760px) {
    .game-layout:not(.inline-layout) {
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
    .game-area {
        padding: 10px;
    }

    .game-layout:not(.inline-layout) {
        grid-template-columns: minmax(0, 1fr);
        gap: 10px;
    }

    .game-layout.inline-layout {
        grid-template-columns: minmax(0, 1fr);
    }

    .question-panel {
        min-height: auto;
    }

    .control-panel {
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        gap: 9px;
        padding: 12px;
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

    .decimal-bar-row {
        grid-template-columns: 62px minmax(0, 1fr);
        gap: 6px;
    }

    .decimal-bar {
        gap: 3px;
    }

    .decimal-part {
        padding: 5px 2px;
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

    .decimal-bar-row {
        grid-template-columns: 54px minmax(0, 1fr);
    }

    .decimal-part {
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
   2. DATA HELPERS
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
   3. NUMBER TOWERS - 20
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
   4. MISSING NUMBER OPERATIONS - 20
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
   5. NUMBER RIDDLES - 20
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
   6. BALANCE EQUALS - 20
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
   7. INTEGER PUZZLES - 20
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
   8. DECIMAL CHALLENGES - 20
========================================================= */

/*
   Types:
   calculation = missing decimal calculation
   sequence    = decimal number sequence
   bar-grid    = proportional decimal bar grid

   For bar-grid questions:
   answers[0] = missing value in Row 2
   answers[1] = missing value in Row 3
*/

const decimalPuzzles = [

    {
        id: 1,
        type: "calculation",
        title: "Find the Missing Decimal",
        question: "Complete the addition equation.",
        expression: "2.5 + ___ = 5.0",
        answers: [2.5],
        hint: "Subtract 2.5 from 5.0.",
        explanation: "5.0 − 2.5 = 2.5. The missing number is 2.5."
    },

    {
        id: 2,
        type: "calculation",
        title: "Complete the Addition",
        question: "Find the missing decimal number.",
        expression: "___ + 1.5 = 4.5",
        answers: [3.0],
        hint: "Subtract 1.5 from 4.5.",
        explanation: "4.5 − 1.5 = 3.0. The missing number is 3.0."
    },

    {
        id: 3,
        type: "calculation",
        title: "Decimal Subtraction",
        question: "Find the missing number.",
        expression: "8.6 − ___ = 3.1",
        answers: [5.5],
        hint: "Subtract 3.1 from 8.6.",
        explanation: "8.6 − 3.1 = 5.5. The missing number is 5.5."
    },

    {
        id: 4,
        type: "calculation",
        title: "Decimal Multiplication",
        question: "Complete the multiplication equation.",
        expression: "1.2 × ___ = 3.6",
        answers: [3],
        hint: "Divide 3.6 by 1.2.",
        explanation: "3.6 ÷ 1.2 = 3. The missing number is 3."
    },

    {
        id: 5,
        type: "calculation",
        title: "Decimal Division",
        question: "Find the missing divisor.",
        expression: "7.2 ÷ ___ = 2.4",
        answers: [3],
        hint: "Divide 7.2 by 2.4.",
        explanation: "7.2 ÷ 2.4 = 3. The missing number is 3."
    },

    {
        id: 6,
        type: "calculation",
        title: "Add the Decimals",
        question: "Find the total.",
        expression: "1.5 + 2.75 = ___",
        answers: [4.25],
        hint: "Write 1.5 as 1.50, then add the decimals.",
        explanation: "1.50 + 2.75 = 4.25."
    },

    {
        id: 7,
        type: "sequence",
        title: "Decimal Steps",
        question: "Identify the rule and find the missing number.",
        sequence: ["0.5", "1.0", "1.5", null, "2.5"],
        answers: [2.0],
        rule: "Add 0.5 each time.",
        hint: "Look at how much each number increases.",
        explanation: "The pattern increases by 0.5 each time. The missing number is 2.0."
    },

    {
        id: 8,
        type: "sequence",
        title: "Count Backwards",
        question: "Find the missing number in the sequence.",
        sequence: ["5.0", "4.5", "4.0", null, "3.0"],
        answers: [3.5],
        rule: "Subtract 0.5 each time.",
        hint: "Each number is 0.5 less than the previous number.",
        explanation: "The pattern subtracts 0.5 each time. The missing number is 3.5."
    },

    {
        id: 9,
        type: "sequence",
        title: "Small Decimal Steps",
        question: "Complete the decimal pattern.",
        sequence: ["1.2", "1.4", null, "1.8", "2.0"],
        answers: [1.6],
        rule: "Add 0.2 each time.",
        hint: "Find the difference between 1.2 and 1.4.",
        explanation: "The pattern increases by 0.2 each time. The missing number is 1.6."
    },

    {
        id: 10,
        type: "sequence",
        title: "Decimal Growth",
        question: "Find the missing number.",
        sequence: ["2.5", "5.0", "10.0", null, "40.0"],
        answers: [20.0],
        rule: "Multiply each number by 2.",
        hint: "Each number is double the previous number.",
        explanation: "The pattern doubles each time. The missing number is 20.0."
    },

    {
        id: 11,
        type: "sequence",
        title: "Quarter Steps",
        question: "Complete the sequence.",
        sequence: ["3.75", "3.50", null, "3.00", "2.75"],
        answers: [3.25],
        rule: "Subtract 0.25 each time.",
        hint: "Find the difference between the first two numbers.",
        explanation: "The pattern decreases by 0.25 each time. The missing number is 3.25."
    },

    {
        id: 12,
        type: "sequence",
        title: "Tiny Decimal Steps",
        question: "Find the missing decimal number.",
        sequence: ["0.04", "0.08", "0.12", null, "0.20"],
        answers: [0.16],
        rule: "Add 0.04 each time.",
        hint: "Look at the increase from 0.04 to 0.08.",
        explanation: "The pattern increases by 0.04 each time. The missing number is 0.16."
    },

    {
        id: 13,
        type: "bar-grid",
        title: "Proportional Decimal Bars",
        total: 2.25,
        row2: ["1.05", null],
        row3: ["0.5", "0.75", null],
        answers: [1.20, 1.00],
        hint: "Both rows must add up to 2.25. Subtract the known parts from the total.",
        explanation: "Row 2: 1.05 + 1.20 = 2.25. Row 3: 0.5 + 0.75 + 1.00 = 2.25."
    },

    {
        id: 14,
        type: "bar-grid",
        title: "Complete the Decimal Bars",
        total: 5.0,
        row2: ["2.25", null],
        row3: ["1.5", "1.0", null],
        answers: [2.75, 2.50],
        hint: "Find the missing part in each row so that both totals equal 5.0.",
        explanation: "Row 2: 2.25 + 2.75 = 5.0. Row 3: 1.5 + 1.0 + 2.5 = 5.0."
    },

    {
        id: 15,
        type: "bar-grid",
        title: "Decimal Bar Challenge",
        total: 0.95,
        row2: ["0.45", null],
        row3: ["0.2", "0.3", null],
        answers: [0.50, 0.45],
        hint: "The total for each row is 0.95.",
        explanation: "Row 2: 0.45 + 0.50 = 0.95. Row 3: 0.2 + 0.3 + 0.45 = 0.95."
    },

    {
        id: 16,
        type: "bar-grid",
        title: "Balance the Decimal Bars",
        total: 3.75,
        row2: ["1.5", null],
        row3: ["0.75", "1.25", null],
        answers: [2.25, 1.75],
        hint: "Subtract the known values in each row from 3.75.",
        explanation: "Row 2: 1.5 + 2.25 = 3.75. Row 3: 0.75 + 1.25 + 1.75 = 3.75."
    },

    {
        id: 17,
        type: "bar-grid",
        title: "Decimal Parts Puzzle",
        total: 1.08,
        row2: ["0.48", null],
        row3: ["0.28", "0.3", null],
        answers: [0.60, 0.50],
        hint: "Make sure each row adds up to 1.08.",
        explanation: "Row 2: 0.48 + 0.60 = 1.08. Row 3: 0.28 + 0.3 + 0.50 = 1.08."
    },

    {
        id: 18,
        type: "bar-grid",
        title: "Large Decimal Bars",
        total: 6.5,
        row2: ["3.25", null],
        row3: ["1.5", "2.0", null],
        answers: [3.25, 3.00],
        hint: "Both rows must have a total of 6.5.",
        explanation: "Row 2: 3.25 + 3.25 = 6.5. Row 3: 1.5 + 2.0 + 3.0 = 6.5."
    },

    {
        id: 19,
        type: "bar-grid",
        title: "Find the Missing Decimal Parts",
        total: 2.65,
        row2: ["1.15", null],
        row3: ["0.65", "0.75", null],
        answers: [1.50, 1.25],
        hint: "Subtract the known parts from 2.65.",
        explanation: "Row 2: 1.15 + 1.50 = 2.65. Row 3: 0.65 + 0.75 + 1.25 = 2.65."
    },

    {
        id: 20,
        type: "bar-grid",
        title: "Final Decimal Bar Challenge",
        total: 7.2,
        row2: ["3.6", null],
        row3: ["1.8", "2.4", null],
        answers: [3.60, 3.00],
        hint: "Complete both rows so that each has a total of 7.2.",
        explanation: "Row 2: 3.6 + 3.6 = 7.2. Row 3: 1.8 + 2.4 + 3.0 = 7.2."
    }
];


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
    },
    {
        id: "decimal-challenges",
        title: "Decimal Challenges",
        description: "Solve missing decimal calculations, sequences and proportional bar grids.",
        puzzles: decimalPuzzles
    }
];

window.MATHMIUM_BALANCE_EQUALS = balancePuzzles;

window.MATHMIUM_DECIMAL_CHALLENGES = decimalPuzzles;


/* =========================================================
   10. OPTIONAL BALANCE QUESTION HELPERS
========================================================= */

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
   11. GAME INITIALISATION
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

    /* =====================================================
       CATEGORY COLOUR THEMES
    ===================================================== */

    const themes = {
        "number-towers": {
            main: "#159E94",
            dark: "#087D76",
            panel: "#F0FCFA",
            control: "#E5F7F4",
            question: "#DFFFF9",
            line: "#BDEAE3",
            hint: "#E0F8F4",
            shadow: "#159E9430",
            partTwo: "#D4F3EC",
            partThree: "#C4EAE2",
            page: "#F8FFFE"
        },

        "missing-number-operations": {
            main: "#3978D4",
            dark: "#245AA8",
            panel: "#F2F7FF",
            control: "#E9F1FF",
            question: "#DCEBFF",
            line: "#C5D9F8",
            hint: "#E8F1FF",
            shadow: "#3978D430",
            partTwo: "#D3E4FF",
            partThree: "#C6D9FA",
            page: "#FAFCFF"
        },

        "number-riddles": {
            main: "#C34868",
            dark: "#8A2947",
            panel: "#FFF5F7",
            control: "#FDEBF0",
            question: "#FFDDE5",
            line: "#F2C4D0",
            hint: "#FCEAF0",
            shadow: "#C3486830",
            partTwo: "#FAD5DF",
            partThree: "#F5C6D4",
            page: "#FFFAFB"
        },

        "balance-equals": {
            main: "#8064C9",
            dark: "#513A91",
            panel: "#F8F5FF",
            control: "#F0EAFF",
            question: "#EAE1FF",
            line: "#D8C9F6",
            hint: "#F0EAFF",
            shadow: "#8064C930",
            partTwo: "#E3D9FC",
            partThree: "#D8CCF5",
            page: "#FCFAFF"
        },

        "integer-puzzles": {
            main: "#E17B43",
            dark: "#A64B20",
            panel: "#FFF8F2",
            control: "#FFF0E4",
            question: "#FFE8D2",
            line: "#F4D1B7",
            hint: "#FFF0E4",
            shadow: "#E17B4330",
            partTwo: "#FCE0CA",
            partThree: "#F8D3B6",
            page: "#FFFCF9"
        },

        "decimal-challenges": {
            main: "#2495C5",
            dark: "#17658D",
            panel: "#F0FAFF",
            control: "#E2F5FC",
            question: "#D5F0FA",
            line: "#B8E0EF",
            hint: "#E4F6FC",
            shadow: "#2495C530",
            partTwo: "#D0ECF8",
            partThree: "#C0E3F1",
            page: "#F8FDFF"
        }
    };


    /* =====================================================
       CATEGORY SVG ICONS
    ===================================================== */

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
        </svg>`,

        `<svg viewBox="0 0 100 100" fill="none" aria-hidden="true">
            <rect x="13" y="13" width="74" height="74" rx="13" stroke="currentColor" stroke-width="6"/>
            <path d="M50 27 V73 M27 50 H73" stroke="currentColor" stroke-width="7" stroke-linecap="round"/>
            <circle cx="50" cy="50" r="5" fill="currentColor"/>
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
        const theme = themes[category.id] || themes["number-towers"];
        const root = document.querySelector("#activity-window");

        Object.entries({
            "--main": theme.main,
            "--dark": theme.dark,
            "--panel": theme.panel,
            "--control-bg": theme.control,
            "--question-bg": theme.question,
            "--line": theme.line,
            "--hint-bg": theme.hint,
            "--shadow": theme.shadow,
            "--part-two": theme.partTwo,
            "--part-three": theme.partThree,
            "--page-bg": theme.page
        }).forEach(([key, value]) => {
            root.style.setProperty(key, value);
        });
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

    function numberIsCorrect(value, answer) {
        if (String(value).trim() === "") return false;

        const number = Number(value);

        return Number.isFinite(number) &&
            Math.abs(number - Number(answer)) < 0.000001;
    }

    function isCorrect(value, puzzle) {
        return acceptedAnswers(puzzle).some(answer =>
            numberIsCorrect(value, answer)
        );
    }

    function isSideLayout() {
        return [
            "number-towers",
            "missing-number-operations",
            "balance-equals",
            "decimal-challenges"
        ].includes(category.id);
    }

    function scrollToActivity() {
        window.scrollTo({
            top: activity.getBoundingClientRect().top + window.scrollY - 15,
            behavior: "smooth"
        });
    }


    /* =====================================================
       CATEGORY LIBRARY
    ===================================================== */

    function displayCategories() {

        grid.innerHTML = "";

        if (empty) empty.classList.remove("show");

        window.MATHMIUM_PUZZLES.forEach((item, index) => {

            const theme = themes[item.id];

            const card = document.createElement("button");
            card.type = "button";
            card.className = "puzzle-card";

            card.style.setProperty("--main", theme.main);
            card.style.setProperty("--light", theme.question);
            card.style.setProperty("--dark", theme.dark);
            card.style.borderColor = theme.line;

            const icon = document.createElement("div");
            icon.className = "puzzle-icon";
            icon.style.color = theme.main;
            icon.innerHTML = icons[index];

            const name = document.createElement("div");
            name.className = "puzzle-name";
            name.textContent = item.title;
            name.style.color = theme.dark;

            const description = document.createElement("div");
            description.className = "puzzle-description";
            description.textContent = item.description;

            const meta = document.createElement("div");
            meta.className = "puzzle-meta";
            meta.textContent = item.puzzles.length + " CHALLENGES";
            meta.style.color = theme.main;

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

        activityTitle.textContent = item.title;

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
                    Each number is the sum of the two numbers directly below.
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
       DECIMAL CHALLENGE RENDERERS
    ===================================================== */

    function renderDecimalCalculation(puzzle) {

        const expression = escapeHTML(puzzle.expression)
            .replace(
                "___",
                `<input
                    id="decimal-answer-0"
                    class="decimal-blank"
                    type="number"
                    step="any"
                    inputmode="decimal"
                    placeholder="?"
                    aria-label="Enter the missing decimal"
                >`
            );

        return `
            <div class="question-panel">

                <h3>${escapeHTML(puzzle.title)}</h3>

                <p class="question-instruction">
                    ${escapeHTML(puzzle.question)}
                </p>

                <div class="decimal-equation">
                    ${expression}
                </div>

                <p class="question-instruction" style="text-align:center">
                    Enter the missing decimal number in the box.
                </p>

            </div>
        `;
    }


    function renderDecimalSequence(puzzle) {

        const sequenceHTML = puzzle.sequence.map((value, index) => {

            if (value === null) {
                return `
                    <input
                        id="decimal-answer-0"
                        class="decimal-blank"
                        type="number"
                        step="any"
                        inputmode="decimal"
                        placeholder="?"
                        aria-label="Missing sequence number"
                    >
                `;
            }

            return `
                <div class="sequence-number">
                    ${escapeHTML(value)}
                </div>
            `;

        }).join(`<span class="sequence-arrow">→</span>`);

        return `
            <div class="question-panel">

                <h3>${escapeHTML(puzzle.title)}</h3>

                <p class="question-instruction">
                    ${escapeHTML(puzzle.question)}
                </p>

                <div class="decimal-sequence">
                    ${sequenceHTML}
                </div>

                <p class="question-instruction" style="text-align:center">
                    Find the rule and enter the missing number.
                </p>

            </div>
        `;
    }


    function renderDecimalBarPart(value, inputIndex) {

        if (value === null) {
            return `
                <div class="decimal-part">
                    <input
                        id="decimal-answer-${inputIndex}"
                        type="number"
                        step="any"
                        inputmode="decimal"
                        placeholder="?"
                        aria-label="Missing decimal part ${inputIndex + 1}"
                    >
                </div>
            `;
        }

        return `
            <div class="decimal-part">
                ${escapeHTML(value)}
            </div>
        `;
    }


    function renderDecimalBarGrid(puzzle) {

        return `
            <div class="question-panel">

                <h3>${escapeHTML(puzzle.title)}</h3>

                <p class="question-instruction">
                    Each row must have the same total. Find the missing decimal values.
                </p>

                <div class="decimal-grid">

                    <p class="decimal-grid-title">
                        Total amount: ${escapeHTML(puzzle.total)}
                    </p>

                    <div class="decimal-bar-row">
                        <div class="decimal-row-label">Row 1</div>

                        <div class="decimal-bar">
                            <div class="decimal-part">
                                ${escapeHTML(puzzle.total)}
                            </div>
                        </div>
                    </div>

                    <div class="decimal-bar-row">
                        <div class="decimal-row-label">Row 2</div>

                        <div class="decimal-bar">
                            ${renderDecimalBarPart(puzzle.row2[0], 0)}
                            ${renderDecimalBarPart(puzzle.row2[1], 1)}
                        </div>
                    </div>

                    <div class="decimal-bar-row">
                        <div class="decimal-row-label">Row 3</div>

                        <div class="decimal-bar">
                            ${renderDecimalBarPart(puzzle.row3[0], 99)}
                            ${renderDecimalBarPart(puzzle.row3[1], 98)}
                            ${renderDecimalBarPart(puzzle.row3[2], 1)}
                        </div>
                    </div>

                    <p class="decimal-grid-note">
                        Row 1 shows the full amount. Rows 2 and 3 divide the same amount into smaller parts.
                        Complete both missing values.
                    </p>

                </div>

            </div>
        `;
    }


    function renderDecimal(puzzle) {

        if (puzzle.type === "calculation") {
            return renderDecimalCalculation(puzzle);
        }

        if (puzzle.type === "sequence") {
            return renderDecimalSequence(puzzle);
        }

        if (puzzle.type === "bar-grid") {
            return renderDecimalBarGrid(puzzle);
        }

        return "";
    }


    /* =====================================================
       QUESTION CONTENT
    ===================================================== */

    function renderQuestion(puzzle) {

        if (category.id === "number-towers") {
            return `
                <div class="question-panel">
                    ${renderTower(puzzle)}
                </div>
            `;
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

        if (category.id === "integer-puzzles") {
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

        if (category.id === "decimal-challenges") {
            return renderDecimal(puzzle);
        }

        return "";
    }


    /* =====================================================
       CONTROL PANEL - SIDE LAYOUT
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


    /* =====================================================
       CONTROL PANEL - INLINE LAYOUT
    ===================================================== */

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

        const mainContent = renderQuestion(puzzle);

        const controls = sideLayout
            ? renderSideControls()
            : renderInlineControls();

        const layoutClass = sideLayout
            ? "game-layout"
            : "game-layout inline-layout";

        content.innerHTML = `

            <div class="game-area">

                <div class="game-progress">
                    <span>Challenge ${currentIndex + 1} of ${total}</span>
                    <span>Score: ${score}</span>
                </div>

                <div class="progress-track">
                    <div class="progress-fill" style="width:${progress}%"></div>
                </div>

                <div class="question-number">
                    CHALLENGE ${String(currentIndex + 1).padStart(2,"0")}
                </div>

                ${levelHTML(puzzle)}

                <div class="${layoutClass}">

                    ${mainContent}

                    ${controls}

                </div>

            </div>
        `;


        /* CHECK */

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

        content.querySelectorAll("[id^='decimal-answer-']").forEach(decimalInput => {
            decimalInput.addEventListener("keydown", event => {
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

        let hintText = puzzle.hint || "";

        if (puzzle.type === "sequence" && puzzle.rule) {
            hintText += " Rule: " + puzzle.rule;
        }

        box.textContent = isVisible ? hintText : "";
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

                if (saved.values && saved.values[key] !== undefined) {
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

        } else if (category.id === "decimal-challenges") {

            const inputs = content.querySelectorAll("[id^='decimal-answer-']");

            inputs.forEach((input, index) => {

                if (saved.values && saved.values[index] !== undefined) {
                    input.value = saved.values[index];
                }

                if (saved.correct) {
                    input.classList.add("correct-cell");
                } else if (saved.attempted && input.value !== "") {
                    input.classList.add("wrong-cell");
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

        if (category.id === "decimal-challenges") {
            checkDecimal(puzzle);
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
       CHECK DECIMAL CHALLENGES
    ===================================================== */

    function checkDecimal(puzzle) {

        const inputs = Array.from(
            content.querySelectorAll("[id^='decimal-answer-']")
        );

        const values = inputs.map(input => input.value.trim());

        if (values.some(value => value === "")) {
            showFeedback("Please complete all the missing decimal values.", false);

            const firstEmpty = inputs.find(input => input.value.trim() === "");
            if (firstEmpty) firstEmpty.focus();

            return;
        }

        const correct = values.length === puzzle.answers.length &&
            values.every((value, index) =>
                numberIsCorrect(value, puzzle.answers[index])
            );

        answers[currentIndex] = {
            values,
            attempted: true,
            correct,
            explanation: puzzle.explanation || ""
        };

        inputs.forEach((input, index) => {

            const inputCorrect = numberIsCorrect(
                input.value,
                puzzle.answers[index]
            );

            input.classList.toggle("correct-cell", inputCorrect);
            input.classList.toggle("wrong-cell", !inputCorrect);
        });

        if (correct) {

            score++;

            showFeedback(
                "Excellent! " + puzzle.explanation,
                true
            );

        } else {

            showFeedback(
                "Not quite! Check your decimal calculations and try again.",
                false
            );
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
