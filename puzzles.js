/* =========================================================
   MATHMIUM PUZZLE ZONE
   100 MATHEMATICS CHALLENGES

   1. Number Towers                 - 20
   2. Missing Number Operations     - 20
   3. Number Riddles                - 20
   4. Balance Equals                - 20
   5. Integer Puzzles               - 20

   Responsive-friendly game functionality
========================================================= */


/* =========================================================
   1. NUMBER TOWERS
========================================================= */

const numberTowers = [
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

const towerPuzzles = numberTowers.map((base,index)=>({
    id:index+1,
    base,
    hint:towerHints[index]
}));


/* =========================================================
   2. MISSING NUMBER OPERATIONS
========================================================= */

const missingNumberPuzzles = [
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
].map((p,index)=>({
    id:index+1,
    question:p[0],
    answer:p[1],
    hint:p[2]
}));


/* =========================================================
   3. NUMBER RIDDLES
========================================================= */

const originalNumberRiddles = [
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
].map((p,index)=>({
    id:index+1,
    question:p[0],
    answer:p[1],
    hint:p[2]
}));


/* =========================================================
   4. BALANCE EQUALS
========================================================= */

const balancePuzzles = [
    ["8 + 4","5 + ?",7,"Find the total on the left side.","8 + 4 = 12, so 5 + 7 = 12."],
    ["15 + 5","12 + ?",8,"Both sides must equal 20.","15 + 5 = 20 and 12 + 8 = 20."],
    ["9 × 3","18 + ?",9,"Calculate 9 × 3 first.","27 = 18 + 9."],
    ["36 ÷ 4","6 + ?",3,"36 divided by 4 is 9.","9 = 6 + 3."],
    ["7 × 6","30 + ?",12,"Find 7 × 6.","42 = 30 + 12."],
    ["25 - 9","10 + ?",6,"Calculate the left side.","16 = 10 + 6."],
    ["5 × 8","4 × ?",10,"Both sides must equal 40.","40 = 4 × 10."],
    ["64 ÷ 8","12 - ?",4,"The left side equals 8.","8 = 12 - 4."],
    ["6 × 7 + 2","30 + ?",14,"Follow the order of operations.","42 + 2 = 44, so 30 + 14 = 44."],
    ["100 - 35","5 × ?",13,"Calculate 100 - 35.","65 = 5 × 13."],
    ["12 × 4","60 - ?",12,"Both sides must equal 48.","48 = 60 - 12."],
    ["81 ÷ 9 + 7","4 × ?",4,"Calculate division before addition.","9 + 7 = 16, and 4 × 4 = 16."],
    ["3 × 8 + 4","2 × ?",14,"Find the left-side total.","24 + 4 = 28, and 2 × 14 = 28."],
    ["90 ÷ 3","45 - ?",15,"The left side equals 30.","30 = 45 - 15."],
    ["2 × (9 + 6)","5 × ?",6,"Calculate inside the brackets first.","2 × 15 = 30, and 5 × 6 = 30."],
    ["(-5) + 12","15 - ?",8,"Calculate the left side using integers.","7 = 15 - 8."],
    ["(-4) × 6","(-8) × ?",3,"Remember the rules for multiplying integers.","-24 = -8 × 3."],
    ["3.5 + 2.5","10 - ?",4,"Both sides must equal 6.","6 = 10 - 4."],
    ["3/4 + 1/4","2 × ?",0.5,"Add the fractions first.","1 = 2 × 0.5."],
    ["25% of 80","5 × ?",4,"Find one-quarter of 80.","25% of 80 = 20, and 5 × 4 = 20."]
].map((p,index)=>({
    id:index+1,
    left:p[0],
    right:p[1],
    question:p[0]+" = "+p[1],
    answer:p[2],
    hint:p[3],
    explanation:p[4]
}));


/* =========================================================
   5. INTEGER PUZZLES
========================================================= */

const integerPuzzles = [
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
].map((p,index)=>({
    id:index+1,
    level:index<8?"Easy":index<15?"Medium":"Hard",
    question:p[0],
    answer:p[1],
    hint:p[2],
    explanation:p[3]
}));


/* =========================================================
   COMBINE ALL PUZZLE CATEGORIES
   TOTAL: 100 CHALLENGES
========================================================= */

window.MATHMIUM_PUZZLES = [

    {
        id:"number-towers",
        title:"Number Towers",
        description:"Complete each tower by adding the two numbers directly below.",
        puzzles:towerPuzzles
    },

    {
        id:"missing-number-operations",
        title:"Missing Number Operations",
        description:"Find the missing number that makes each equation true.",
        puzzles:missingNumberPuzzles
    },

    {
        id:"number-riddles",
        title:"Number Riddles",
        description:"Read each clue and discover the mystery number.",
        puzzles:originalNumberRiddles
    },

    {
        id:"balance-equals",
        title:"Balance Equals",
        description:"Balance both sides of each equation by finding the missing number.",
        puzzles:balancePuzzles
    },

    {
        id:"integer-puzzles",
        title:"Integer Puzzles",
        description:"Challenge yourself with positive and negative numbers.",
        puzzles:integerPuzzles
    }

];


/* =========================================================
   GAME FUNCTIONALITY
========================================================= */

document.addEventListener("DOMContentLoaded",function(){

    const grid=document.getElementById("puzzle-grid");
    const library=document.getElementById("puzzle-library");
    const empty=document.getElementById("empty-state");
    const activity=document.getElementById("activity-window");
    const activityTitle=document.getElementById("activity-title");
    const content=document.getElementById("activity-content");
    const backButton=document.getElementById("back-button");

    if(!grid||!library||!activity||!content){
        console.error("Mathmium puzzle HTML elements are missing.");
        return;
    }

    let category=null;
    let currentIndex=0;
    let score=0;
    let answers={};

    const colors=[
        ["#159E94","#CFFFF7","#087D76"],
        ["#3978D4","#DCEBFF","#245AA8"],
        ["#C34868","#FFD1DC","#8A2947"],
        ["#E17B43","#FFE8D2","#A64B20"],
        ["#8064C9","#EAE1FF","#513A91"],
        ["#4C9A65","#DDF5E3","#27633B"]
    ];

    const icons=[

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
            <path d="M50 10 V90 M10 50 H90" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>
            <circle cx="50" cy="50" r="37" stroke="currentColor" stroke-width="5"/>
        </svg>`

    ];


    /* =====================================================
       HELPER FUNCTIONS
    ===================================================== */

    function escapeHTML(value){

        return String(value).replace(/[&<>"']/g,char=>({
            "&":"&amp;",
            "<":"&lt;",
            ">":"&gt;",
            '"':"&quot;",
            "'":"&#39;"
        })[char]);

    }


    function getAcceptedAnswers(puzzle){

        const values=Array.isArray(puzzle.answer)
            ?puzzle.answer.slice()
            :[puzzle.answer];

        if(puzzle.acceptedAnswers){
            values.push(...puzzle.acceptedAnswers);
        }

        return values.map(Number);

    }


    function isCorrectAnswer(value,puzzle){

        if(value.trim()==="")return false;

        const number=Number(value);

        return Number.isFinite(number)&&
            getAcceptedAnswers(puzzle).some(answer=>
                Math.abs(number-answer)<0.0000001
            );

    }


    function calculateTower(base){

        const rows=[base.slice()];

        while(rows[rows.length-1].length>1){

            const previous=rows[rows.length-1];
            const next=[];

            for(let i=0;i<previous.length-1;i++){
                next.push(previous[i]+previous[i+1]);
            }

            rows.push(next);

        }

        return rows;

    }


    function scrollToActivity(){

        activity.scrollTop=0;

        window.scrollTo({
            top:activity.getBoundingClientRect().top+window.scrollY-80,
            behavior:"smooth"
        });

    }


    /* =====================================================
       CREATE CATEGORY CARDS
    ===================================================== */

    function displayCategories(){

        grid.innerHTML="";

        const categories=window.MATHMIUM_PUZZLES;

        if(!categories||categories.length===0){

            if(empty)empty.classList.add("show");

            return;

        }

        if(empty)empty.classList.remove("show");

        categories.forEach((item,index)=>{

            const color=colors[index%colors.length];

            const card=document.createElement("button");

            card.type="button";
            card.className="puzzle-card";

            card.style.setProperty("--main",color[0]);
            card.style.setProperty("--light",color[1]);
            card.style.setProperty("--dark",color[2]);

            const icon=document.createElement("div");

            icon.className="puzzle-icon";
            icon.innerHTML=icons[index%icons.length];

            const name=document.createElement("div");

            name.className="puzzle-name";
            name.textContent=item.title;

            const description=document.createElement("div");

            description.className="puzzle-description";
            description.textContent=item.description;

            const meta=document.createElement("div");

            meta.className="puzzle-meta";
            meta.textContent=item.puzzles.length+" CHALLENGES";

            card.append(icon,name,description,meta);

            card.addEventListener("click",()=>openCategory(item));

            grid.appendChild(card);

        });

    }


    /* =====================================================
       OPEN CATEGORY
    ===================================================== */

    function openCategory(item){

        category=item;
        currentIndex=0;
        score=0;
        answers={};

        library.style.display="none";

        activity.classList.add("active");

        activityTitle.textContent=item.title;

        showPuzzle();

        scrollToActivity();

    }


    /* =====================================================
       CREATE NUMBER TOWER
    ===================================================== */

    function createTower(puzzle){

        const rows=calculateTower(puzzle.base);

        let html=`
            <div class="tower-container">

                <h3>Complete the Number Tower</h3>

                <p>
                    Each number is the sum of the two numbers directly below it.
                </p>

                <div class="tower">
        `;

        for(let r=rows.length-1;r>=0;r--){

            html+=`<div class="tower-row">`;

            rows[r].forEach((number,c)=>{

                if(r===0){

                    html+=`
                        <div class="tower-block">${number}</div>
                    `;

                }else{

                    html+=`
                        <input
                            class="tower-input"
                            type="number"
                            step="1"
                            inputmode="numeric"
                            data-row="${r}"
                            data-col="${c}"
                            aria-label="Missing tower number"
                        >
                    `;

                }

            });

            html+=`</div>`;

        }

        html+=`
                </div>

                <p>Fill in all the empty blocks, starting from the bottom row.</p>

            </div>
        `;

        return html;

    }


    /* =====================================================
       DISPLAY DIFFICULTY LEVEL
    ===================================================== */

    function getLevelHTML(puzzle){

        if(!puzzle.level)return "";

        const levelColors={
            Easy:"#159E94",
            Medium:"#D17A27",
            Hard:"#C34868"
        };

        const color=levelColors[puzzle.level]||"#3978D4";

        return `
            <div style="
                display:inline-block;
                padding:6px 18px;
                margin:5px auto 10px;
                border-radius:20px;
                background:${color}18;
                color:${color};
                font-size:13px;
                font-weight:700;
            ">
                ${escapeHTML(puzzle.level)} Level
            </div>
        `;

    }


    /* =====================================================
       DISPLAY QUESTION
    ===================================================== */

    function showPuzzle(){

        const puzzle=category.puzzles[currentIndex];

        const total=category.puzzles.length;

        const progress=((currentIndex+1)/total)*100;

        const isTower=category.id==="number-towers";

        const isBalance=category.id==="balance-equals";

        let questionHTML;


        /* NUMBER TOWER */

        if(isTower){

            questionHTML=createTower(puzzle);

        }


        /* BALANCE EQUALS */

        else if(isBalance){

            questionHTML=`

                <div class="tower-container">

                    <h3>Balance Both Sides!</h3>

                    <p>
                        Find the missing number to make both sides equal.
                    </p>

                    <div class="puzzle-question">

                        ${escapeHTML(puzzle.left)}

                        <br>

                        =

                        <br>

                        ${escapeHTML(puzzle.right)}

                    </div>

                    <div class="answer-area">

                        <label for="puzzle-answer">
                            What is the missing number?
                        </label>

                        <input
                            class="answer-input"
                            id="puzzle-answer"
                            type="number"
                            step="any"
                            inputmode="decimal"
                            autocomplete="off"
                            placeholder="Enter the missing number"
                        >

                    </div>

                </div>

            `;

        }


        /* OTHER PUZZLE CATEGORIES */

        else{

            questionHTML=`

                <div class="puzzle-question">

                    ${escapeHTML(puzzle.question)}

                </div>

                <div class="answer-area">

                    <label for="puzzle-answer">
                        Enter your answer
                    </label>

                    <input
                        class="answer-input"
                        id="puzzle-answer"
                        type="number"
                        step="any"
                        inputmode="decimal"
                        autocomplete="off"
                        placeholder="Type your answer here"
                    >

                </div>

            `;

        }


        /* COMPLETE GAME INTERFACE */

        content.innerHTML=`

            <div class="game-area">

                <div class="game-progress">

                    Challenge ${currentIndex+1} of ${total}

                    &nbsp; | &nbsp;

                    Score: ${score}

                </div>


                <div class="progress-track">

                    <div
                        class="progress-fill"
                        style="width:${progress}%"
                    ></div>

                </div>


                <div class="question-number">

                    CHALLENGE ${String(currentIndex+1).padStart(2,"0")}

                </div>


                ${getLevelHTML(puzzle)}


                ${questionHTML}


                <button class="primary-button" id="check-answer">

                    ${isTower?"Check Tower":"Check Answer"}

                </button>


                <div
                    class="feedback"
                    id="feedback"
                    aria-live="polite"
                ></div>


                <button class="hint-button" id="hint-button">

                    Show Hint

                </button>


                <div class="hint-box" id="hint-box"></div>


                <div class="game-navigation">

                    <button
                        id="previous-puzzle"
                        ${currentIndex===0?"disabled":""}
                    >
                        Previous
                    </button>


                    <button id="next-puzzle">

                        ${currentIndex===total-1?"Finish":"Next Challenge"}

                    </button>

                </div>

            </div>

        `;


        /* CHECK ANSWER BUTTON */

        document.getElementById("check-answer")
            .addEventListener("click",checkAnswer);


        /* ENTER KEY */

        const answerInput=document.getElementById("puzzle-answer");

        if(answerInput){

            answerInput.addEventListener("keydown",event=>{

                if(event.key==="Enter"){
                    checkAnswer();
                }

            });

        }


        /* HINT BUTTON */

        document.getElementById("hint-button")
            .addEventListener("click",()=>{

                const hint=document.getElementById("hint-box");

                const button=document.getElementById("hint-button");

                const isVisible=hint.classList.toggle("show");

                hint.textContent=isVisible
                    ?puzzle.hint
                    :"";

                button.textContent=isVisible
                    ?"Hide Hint"
                    :"Show Hint";

            });


        /* PREVIOUS BUTTON */

        document.getElementById("previous-puzzle")
            .addEventListener("click",()=>{

                if(currentIndex>0){

                    currentIndex--;

                    showPuzzle();

                    scrollToActivity();

                }

            });


        /* NEXT BUTTON */

        document.getElementById("next-puzzle")
            .addEventListener("click",()=>{

                if(currentIndex<total-1){

                    currentIndex++;

                    showPuzzle();

                    scrollToActivity();

                }else{

                    finishCategory();

                    scrollToActivity();

                }

            });


        restoreAnswer();

    }


    /* =====================================================
       RESTORE PREVIOUS ANSWERS
    ===================================================== */

    function restoreAnswer(){

        const saved=answers[currentIndex];

        if(!saved)return;


        /* RESTORE NUMBER TOWER */

        if(category.id==="number-towers"){

            const rows=calculateTower(
                category.puzzles[currentIndex].base
            );

            content.querySelectorAll(".tower-input").forEach(input=>{

                const key=input.dataset.row+"-"+input.dataset.col;

                if(saved.values[key]!==undefined){

                    input.value=saved.values[key];

                }

                if(input.value!==""){

                    const correct=
                        Number(input.value)===
                        rows[Number(input.dataset.row)][Number(input.dataset.col)];

                    input.classList.toggle("correct-cell",correct);

                    input.classList.toggle("wrong-cell",!correct);

                }

            });

        }


        /* RESTORE OTHER ANSWERS */

        else{

            const input=document.getElementById("puzzle-answer");

            if(input){

                input.value=saved.value??"";

                if(saved.correct){

                    input.style.borderColor="#159E94";

                    input.style.background="#D9FFF3";

                }

            }

        }


        /* RESTORE FEEDBACK */

        if(saved.correct){

            const feedback=document.getElementById("feedback");

            feedback.textContent=saved.explanation
                ?"Correct! "+saved.explanation
                :"Correct! Excellent work!";

            feedback.className="feedback correct";

        }else if(saved.attempted){

            const feedback=document.getElementById("feedback");

            feedback.textContent="Not quite! Try again. You can do it!";

            feedback.className="feedback incorrect";

        }

    }


    /* =====================================================
       CHECK ANSWER
    ===================================================== */

    function checkAnswer(){

        const puzzle=category.puzzles[currentIndex];

        const feedback=document.getElementById("feedback");

        const isTower=category.id==="number-towers";


        /* PREVENT DUPLICATE SCORE */

        if(answers[currentIndex]?.correct)return;


        /* NUMBER TOWER CHECKING */

        if(isTower){

            const rows=calculateTower(puzzle.base);

            const inputs=content.querySelectorAll(".tower-input");

            const values={};

            let complete=true;

            let correct=true;


            inputs.forEach(input=>{

                const row=Number(input.dataset.row);

                const col=Number(input.dataset.col);

                const key=row+"-"+col;

                const value=input.value.trim();

                values[key]=value;


                if(value===""){

                    complete=false;

                }else if(
                    !Number.isFinite(Number(value))||
                    Number(value)!==rows[row][col]
                ){

                    correct=false;

                }

            });


            answers[currentIndex]={

                values,

                attempted:true,

                correct

            };


            if(!complete){

                feedback.textContent="Please fill in all the empty blocks.";

                feedback.className="feedback incorrect";

                return;

            }


            if(correct){

                score++;


                answers[currentIndex].explanation=
                    "Every number is the sum of the two numbers directly below it.";


                feedback.textContent=
                    "Amazing! Your number tower is correct!";

                feedback.className="feedback correct";


                inputs.forEach(input=>{

                    input.classList.add("correct-cell");

                    input.classList.remove("wrong-cell");

                });

            }else{

                feedback.textContent=
                    "Not quite! Check the highlighted numbers and try again.";

                feedback.className="feedback incorrect";


                inputs.forEach(input=>{

                    const row=Number(input.dataset.row);

                    const col=Number(input.dataset.col);

                    const right=
                        Number(input.value)===rows[row][col];

                    input.classList.toggle("correct-cell",right);

                    input.classList.toggle("wrong-cell",!right);

                });

            }

        }


        /* OTHER PUZZLE CHECKING */

        else{

            const input=document.getElementById("puzzle-answer");

            const value=input.value.trim();


            if(!value){

                feedback.textContent="Please enter your answer first.";

                feedback.className="feedback incorrect";

                input.focus();

                return;

            }


            const correct=isCorrectAnswer(value,puzzle);


            answers[currentIndex]={

                value,

                attempted:true,

                correct,

                explanation:puzzle.explanation||""

            };


            if(correct){

                score++;


                feedback.textContent=puzzle.explanation
                    ?"Correct! "+puzzle.explanation
                    :"Correct! Excellent work!";

                feedback.className="feedback correct";


                input.style.borderColor="#159E94";

                input.style.background="#D9FFF3";

            }else{

                feedback.textContent=
                    "Not quite! Try again. You can do it!";

                feedback.className="feedback incorrect";


                input.style.borderColor="#C34868";

                input.style.background="#FFF0F2";

            }

        }


        updateScore();

    }


    /* =====================================================
       UPDATE SCORE
    ===================================================== */

    function updateScore(){

        const progress=content.querySelector(".game-progress");

        if(progress){

            progress.textContent=
                `Challenge ${currentIndex+1} of ${category.puzzles.length} | Score: ${score}`;

        }

    }


    /* =====================================================
       COMPLETION SCREEN
    ===================================================== */

    function finishCategory(){

        const total=category.puzzles.length;

        const percentage=Math.round(score/total*100);

        let message;


        if(percentage===100){

            message="Perfect score! Outstanding work!";

        }else if(percentage>=70){

            message="Wonderful effort! Keep practising!";

        }else if(percentage>=40){

            message="Good effort! You are making progress!";

        }else{

            message="Every challenge helps you learn. Keep trying!";

        }


        content.innerHTML=`

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


                <button class="primary-button" id="restart-button">

                    Play Again

                </button>


                <button
                    class="primary-button"
                    id="categories-button"
                    style="background:#3978D4"
                >

                    Back to Puzzle Library

                </button>


            </div>

        `;


        /* RESTART */

        document.getElementById("restart-button")
            .addEventListener("click",()=>{

                currentIndex=0;

                score=0;

                answers={};

                showPuzzle();

                scrollToActivity();

            });


        /* BACK TO LIBRARY */

        document.getElementById("categories-button")
            .addEventListener("click",goBack);

    }


    /* =====================================================
       BACK TO PUZZLE LIBRARY
    ===================================================== */

    function goBack(){

        activity.classList.remove("active");

        library.style.display="block";

        category=null;

        window.scrollTo({

            top:library.getBoundingClientRect().top+window.scrollY-80,

            behavior:"smooth"

        });

    }


    /* =====================================================
       INITIALISE
    ===================================================== */

    if(backButton){

        backButton.addEventListener("click",goBack);

    }


    displayCategories();


    console.log(

        "Mathmium Puzzle Zone loaded:",

        window.MATHMIUM_PUZZLES.length,

        "categories and",

        window.MATHMIUM_PUZZLES.reduce(

            (total,item)=>total+item.puzzles.length,

            0

        ),

        "challenges."

    );

});
