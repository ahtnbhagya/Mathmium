
/* =========================================================
   MATHMIUM PUZZLE ZONE
   60 MATHEMATICS CHALLENGES

   20 Number Towers
   20 Missing Number Operations
   20 Number Riddles
========================================================= */

window.MATHMIUM_PUZZLES = [

/* =========================================================
   1. NUMBER TOWERS
========================================================= */

{
    id:"number-towers",
    title:"Number Towers",
    description:"Complete each tower by adding the two numbers directly below.",
    puzzles:[
        {id:1,base:[2,3,4],hint:"Add 2 + 3 and 3 + 4."},
        {id:2,base:[1,5,2],hint:"Start with the two numbers on the left."},
        {id:3,base:[4,2,6],hint:"Try adding 4 + 2 and 2 + 6."},
        {id:4,base:[3,3,5],hint:"Each upper number is made from two numbers below it."},
        {id:5,base:[7,1,4],hint:"Start by adding the left pair."},
        {id:6,base:[2,6,3],hint:"Add the bottom numbers in pairs."},
        {id:7,base:[5,4,2],hint:"What is 5 + 4?"},
        {id:8,base:[6,2,7],hint:"The top number is the sum of the middle numbers."},
        {id:9,base:[3,8,1],hint:"Add 3 + 8 and 8 + 1."},
        {id:10,base:[4,5,3],hint:"Remember that neighbouring pairs share a number."},
        {id:11,base:[1,2,3,4],hint:"Work from the bottom row upwards."},
        {id:12,base:[2,1,4,3],hint:"Add each pair of neighbouring numbers."},
        {id:13,base:[5,2,1,6],hint:"Complete one row before moving to the next."},
        {id:14,base:[3,4,2,5],hint:"Add the two numbers directly below each space."},
        {id:15,base:[6,1,3,2],hint:"Start with 6 + 1."},
        {id:16,base:[4,3,5,1],hint:"Every number is the sum of its two lower neighbours."},
        {id:17,base:[2,5,2,4],hint:"Add across the bottom row in pairs."},
        {id:18,base:[8,1,2,3],hint:"The top number is the sum of the two numbers beneath it."},
        {id:19,base:[3,6,1,2],hint:"Find each middle number by adding the pair below it."},
        {id:20,base:[5,2,4,1],hint:"Complete all the sums from bottom to top."}
    ]
},

/* =========================================================
   2. MISSING NUMBER OPERATIONS
========================================================= */

{
    id:"missing-number-operations",
    title:"Missing Number Operations",
    description:"Find the missing number that makes each equation true.",
    puzzles:[
        {id:1,question:"8 + ___ = 15",answer:"7",hint:"Subtract 8 from 15."},
        {id:2,question:"___ + 9 = 21",answer:"12",hint:"Subtract 9 from 21."},
        {id:3,question:"24 - ___ = 16",answer:"8",hint:"Find the difference between 24 and 16."},
        {id:4,question:"___ - 7 = 18",answer:"25",hint:"Add 7 to 18."},
        {id:5,question:"6 × ___ = 42",answer:"7",hint:"Divide 42 by 6."},
        {id:6,question:"___ × 8 = 56",answer:"7",hint:"Divide 56 by 8."},
        {id:7,question:"63 ÷ ___ = 9",answer:"7",hint:"Ask: 9 times what equals 63?"},
        {id:8,question:"___ ÷ 5 = 8",answer:"40",hint:"Multiply 8 by 5."},
        {id:9,question:"17 + ___ = 30",answer:"13",hint:"Subtract 17 from 30."},
        {id:10,question:"45 - ___ = 29",answer:"16",hint:"Subtract 29 from 45."},
        {id:11,question:"9 × ___ = 81",answer:"9",hint:"Think of the 9 times table."},
        {id:12,question:"72 ÷ ___ = 8",answer:"9",hint:"What number multiplied by 8 gives 72?"},
        {id:13,question:"___ + 26 = 50",answer:"24",hint:"Subtract 26 from 50."},
        {id:14,question:"100 - ___ = 64",answer:"36",hint:"Find the difference between 100 and 64."},
        {id:15,question:"12 × ___ = 96",answer:"8",hint:"Divide 96 by 12."},
        {id:16,question:"___ ÷ 6 = 11",answer:"66",hint:"Multiply 11 by 6."},
        {id:17,question:"7 × ___ = 84",answer:"12",hint:"Divide 84 by 7."},
        {id:18,question:"90 ÷ ___ = 10",answer:"9",hint:"What number multiplied by 10 gives 90?"},
        {id:19,question:"38 + ___ = 100",answer:"62",hint:"Subtract 38 from 100."},
        {id:20,question:"___ - 35 = 47",answer:"82",hint:"Add 35 to 47."}
    ]
},

/* =========================================================
   3. NUMBER RIDDLES
========================================================= */

{
    id:"number-riddles",
    title:"Number Riddles",
    description:"Read each clue and discover the mystery number.",
    puzzles:[
        {id:1,question:"I am an even number between 10 and 20. I am also a multiple of 3. What number am I?",answer:"12 or 18",hint:"List the even numbers between 10 and 20. Which are divisible by 3?"},
        {id:2,question:"I am greater than 30 and less than 40. My digits add up to 9. What number am I?",answer:"36",hint:"Try the numbers from 31 to 39."},
        {id:3,question:"Double me and you get 26. What number am I?",answer:"13",hint:"Divide 26 by 2."},
        {id:4,question:"I am a number. Add 15 to me and the answer is 40. What number am I?",answer:"25",hint:"Subtract 15 from 40."},
        {id:5,question:"I am a multiple of 5 between 40 and 50. My digits add up to 9. What number am I?",answer:"45",hint:"Check the multiples of 5 in that range."},
        {id:6,question:"I am an odd number. I am greater than 20 and less than 30. My digits add up to 7. What number am I?",answer:"25",hint:"Try the odd numbers from 21 to 29."},
        {id:7,question:"Multiply me by 4 to get 36. What number am I?",answer:"9",hint:"Divide 36 by 4."},
        {id:8,question:"I am 10 more than 37. What number am I?",answer:"47",hint:"Add 10 to 37."},
        {id:9,question:"I am a two-digit number. My tens digit is 4 and my ones digit is 2. What number am I?",answer:"42",hint:"Put the tens digit before the ones digit."},
        {id:10,question:"I am a number between 50 and 60. I am divisible by 7. What number am I?",answer:"56",hint:"Count by 7s."},
        {id:11,question:"I am half of 86. What number am I?",answer:"43",hint:"Divide 86 by 2."},
        {id:12,question:"I am 5 less than 100. What number am I?",answer:"95",hint:"Subtract 5 from 100."},
        {id:13,question:"I am a multiple of 8 between 30 and 40. What number am I?",answer:"32",hint:"Count by 8s."},
        {id:14,question:"My digits add up to 10. I am a two-digit number, and my tens digit is 6. What number am I?",answer:"64",hint:"Find the ones digit that makes the digit sum 10."},
        {id:15,question:"I am three times 14. What number am I?",answer:"42",hint:"Add 14 three times."},
        {id:16,question:"I am a number between 70 and 80. I am even and divisible by 6. What number am I?",answer:"72 or 78",hint:"Check the multiples of 6 in that range."},
        {id:17,question:"Take away 18 from me and you get 32. What number am I?",answer:"50",hint:"Add 18 to 32."},
        {id:18,question:"I am the smallest three-digit number. What number am I?",answer:"100",hint:"Think about the first number with three digits."},
        {id:19,question:"I am a two-digit number. My digits are the same, and their sum is 12. What number am I?",answer:"66",hint:"Each digit must be half of 12."},
        {id:20,question:"I am a number between 1 and 100. I am divisible by both 3 and 5, and I am greater than 40 but less than 50. What number am I?",answer:"45",hint:"Find a multiple of 15 between 40 and 50."}
    ]
}];


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
        ["#C34868","#FFD1DC","#8A2947"]
    ];

    const icons=[
        `<svg viewBox="0 0 100 100" fill="none">
            <path d="M50 10 L12 85 H88 Z" stroke="currentColor" stroke-width="6" stroke-linejoin="round"/>
            <path d="M31 61 H69 M40 45 H60" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>
        </svg>`,
        `<svg viewBox="0 0 100 100" fill="none">
            <rect x="12" y="15" width="76" height="70" rx="15" stroke="currentColor" stroke-width="6"/>
            <path d="M30 38 H70 M30 60 H70" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>
        </svg>`,
        `<svg viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="37" stroke="currentColor" stroke-width="6"/>
            <path d="M36 37 Q50 23 64 37 Q72 49 50 61 V67" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>
            <circle cx="50" cy="78" r="4" fill="currentColor"/>
        </svg>`
    ];

    /* CREATE CATEGORY CARDS */

    function displayCategories(){

        grid.innerHTML="";

        const categories=window.MATHMIUM_PUZZLES;

        if(!categories||categories.length===0){
            empty.classList.add("show");
            return;
        }

        empty.classList.remove("show");

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

    /* OPEN CATEGORY */

    function openCategory(item){

        category=item;
        currentIndex=0;
        score=0;
        answers={};

        library.style.display="none";
        activity.classList.add("active");

        activityTitle.textContent=item.title;

        showPuzzle();

        window.scrollTo({
            top:activity.getBoundingClientRect().top+window.scrollY-100,
            behavior:"smooth"
        });
    }

    /* CALCULATE TOWER */

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

    /* CREATE NUMBER TOWER */

    function createTower(puzzle){

        const rows=calculateTower(puzzle.base);

        let html=`
            <div class="tower-container">
                <h3>Complete the Number Tower</h3>
                <p>Each number is the sum of the two numbers directly below it.</p>
                <div class="tower">
        `;

        for(let r=rows.length-1;r>=0;r--){

            html+=`<div class="tower-row">`;

            rows[r].forEach((number,c)=>{

                if(r===0){

                    html+=`<div class="tower-block">${number}</div>`;

                }else{

                    html+=`
                        <input
                            class="tower-input"
                            type="number"
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

    /* DISPLAY QUESTION */

    function showPuzzle(){

        const puzzle=category.puzzles[currentIndex];
        const total=category.puzzles.length;
        const progress=((currentIndex+1)/total)*100;

        const isTower=category.id==="number-towers";

        let questionHTML=isTower
            ?createTower(puzzle)
            :`
                <div class="puzzle-question">${puzzle.question}</div>
                <div class="answer-area">
                    <label for="puzzle-answer">Enter your answer</label>
                    <input
                        class="answer-input"
                        id="puzzle-answer"
                        type="text"
                        autocomplete="off"
                        placeholder="Type your answer here"
                    >
                </div>
            `;

        content.innerHTML=`
            <div class="game-area">

                <div class="game-progress">
                    Challenge ${currentIndex+1} of ${total}
                    &nbsp; | &nbsp; Score: ${score}
                </div>

                <div class="progress-track">
                    <div class="progress-fill" style="width:${progress}%"></div>
                </div>

                <div class="question-number">
                    CHALLENGE ${String(currentIndex+1).padStart(2,"0")}
                </div>

                ${questionHTML}

                <button class="primary-button" id="check-answer">
                    ${isTower?"Check Tower":"Check Answer"}
                </button>

                <div class="feedback" id="feedback" aria-live="polite"></div>

                <button class="hint-button" id="hint-button">Show Hint</button>

                <div class="hint-box" id="hint-box"></div>

                <div class="game-navigation">
                    <button id="previous-puzzle" ${currentIndex===0?"disabled":""}>
                        Previous
                    </button>

                    <button id="next-puzzle">
                        ${currentIndex===total-1?"Finish":"Next Challenge"}
                    </button>
                </div>

            </div>
        `;

        document.getElementById("check-answer")
            .addEventListener("click",checkAnswer);

        const answerInput=document.getElementById("puzzle-answer");

        if(answerInput){
            answerInput.addEventListener("keydown",event=>{
                if(event.key==="Enter")checkAnswer();
            });
        }

        document.getElementById("hint-button")
            .addEventListener("click",()=>{

                const hint=document.getElementById("hint-box");
                hint.textContent=puzzle.hint;
                hint.classList.toggle("show");
            });

        document.getElementById("previous-puzzle")
            .addEventListener("click",()=>{

                if(currentIndex>0){
                    currentIndex--;
                    showPuzzle();
                }
            });

        document.getElementById("next-puzzle")
            .addEventListener("click",()=>{

                if(currentIndex<total-1){
                    currentIndex++;
                    showPuzzle();
                }else{
                    finishCategory();
                }
            });

        restoreAnswer();
    }

    /* RESTORE ANSWERS WHEN NAVIGATING */

    function restoreAnswer(){

        const saved=answers[currentIndex];

        if(!saved)return;

        if(category.id==="number-towers"){

            content.querySelectorAll(".tower-input").forEach(input=>{

                const key=input.dataset.row+"-"+input.dataset.col;

                if(saved.values[key]!==undefined){
                    input.value=saved.values[key];
                }

                if(saved.correct){
                    input.classList.add("correct-cell");
                }else if(input.value!==""){

                    const rows=calculateTower(category.puzzles[currentIndex].base);
                    const correct=Number(input.value)===rows[Number(input.dataset.row)][Number(input.dataset.col)];

                    input.classList.toggle("correct-cell",correct);
                    input.classList.toggle("wrong-cell",!correct);
                }
            });

        }else{

            const input=document.getElementById("puzzle-answer");
            input.value=saved.value;

            if(saved.correct){
                input.classList.add("correct-cell");
            }
        }

        if(saved.correct){

            const feedback=document.getElementById("feedback");
            feedback.textContent="Correct! Excellent work!";
            feedback.className="feedback correct";
        }
    }

    /* CHECK ANSWER */

    function checkAnswer(){

        const puzzle=category.puzzles[currentIndex];
        const feedback=document.getElementById("feedback");
        const isTower=category.id==="number-towers";

        if(answers[currentIndex]?.correct){
            return;
        }

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
                }else if(!Number.isFinite(Number(value))||
                         Number(value)!==rows[row][col]){
                    correct=false;
                }
            });

            if(!complete){
                feedback.textContent="Please fill in all the empty blocks.";
                feedback.className="feedback incorrect";
                return;
            }

            answers[currentIndex]={values,correct};

            if(correct){

                score++;

                feedback.textContent="Amazing! Your number tower is correct!";
                feedback.className="feedback correct";

                inputs.forEach(input=>{
                    input.classList.add("correct-cell");
                    input.classList.remove("wrong-cell");
                });

            }else{

                feedback.textContent="Not quite! Check the highlighted numbers and try again.";
                feedback.className="feedback incorrect";

                inputs.forEach(input=>{

                    const row=Number(input.dataset.row);
                    const col=Number(input.dataset.col);
                    const right=Number(input.value)===rows[row][col];

                    input.classList.toggle("correct-cell",right);
                    input.classList.toggle("wrong-cell",!right);
                });
            }

        }else{

            const input=document.getElementById("puzzle-answer");
            const value=input.value.trim();

            if(!value){
                feedback.textContent="Please enter your answer first.";
                feedback.className="feedback incorrect";
                return;
            }

            const correctAnswers=puzzle.answer
                .split(/\s+or\s+/i)
                .map(answer=>answer.trim());

            const numericValue=Number(value);

            const correct=Number.isFinite(numericValue)&&
                correctAnswers.some(answer=>
                    Number(answer)===numericValue
                );

            answers[currentIndex]={value,correct};

            if(correct){

                score++;

                feedback.textContent="Correct! Excellent work!";
                feedback.className="feedback correct";

                input.style.borderColor="#159E94";
                input.style.background="#D9FFF3";

            }else{

                feedback.textContent="Not quite! Try again. You can do it!";
                feedback.className="feedback incorrect";

                input.style.borderColor="#C34868";
            }
        }

        updateScore();
    }

    /* UPDATE SCORE */

    function updateScore(){

        const progress=content.querySelector(".game-progress");

        if(progress){
            progress.textContent=
                `Challenge ${currentIndex+1} of ${category.puzzles.length} | Score: ${score}`;
        }
    }

    /* COMPLETION SCREEN */

    function finishCategory(){

        const total=category.puzzles.length;
        const percentage=Math.round(score/total*100);

        content.innerHTML=`
            <div class="completion-area">

                <h2>Adventure Completed!</h2>

                <p>You have completed all ${total} challenges in ${category.title}.</p>

                <div class="score-display">
                    ${score} / ${total} Correct
                    <br>
                    <span style="font-size:16px">${percentage}% Score</span>
                </div>

                <p>
                    ${percentage===100
                        ?"Perfect score! Outstanding work!"
                        :percentage>=70
                            ?"Wonderful effort! Keep practising!"
                            :"Good effort! Every challenge helps you learn."}
                </p>

                <button class="primary-button" id="restart-button">
                    Play Again
                </button>

                <button class="primary-button" id="categories-button"
                    style="background:#3978D4">
                    Back to Puzzle Library
                </button>

            </div>
        `;

        document.getElementById("restart-button")
            .addEventListener("click",()=>{

                currentIndex=0;
                score=0;
                answers={};

                showPuzzle();
            });

        document.getElementById("categories-button")
            .addEventListener("click",goBack);
    }

    /* BACK TO PUZZLE LIBRARY */

    function goBack(){

        activity.classList.remove("active");
        library.style.display="block";

        window.scrollTo({
            top:library.getBoundingClientRect().top+window.scrollY-100,
            behavior:"smooth"
        });
    }

    backButton.addEventListener("click",goBack);

    /* INITIALISE */

    displayCategories();

});
