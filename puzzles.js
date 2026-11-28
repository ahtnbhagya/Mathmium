
/* =========================================================
   MATHMIUM PUZZLE ZONE
   FINAL RESPONSIVE LAYOUT & QUESTION COLOUR SYSTEM

   FEATURES:
   1. 20 individual colours per section
   2. Every question gets its own colour
   3. Colour sequence restarts in every category
   4. Full-screen responsive working area
   5. Hidden topic title and Back to Puzzles button
   6. Previous / Check / Next / Hint always accessible
   7. Internal scrolling for long questions
   8. Responsive desktop, tablet and mobile layout
   9. Preserves existing puzzle engine and interactions
========================================================= */

(function () {
    "use strict";

    /* ==========================================
       1. QUESTION COLOUR PALETTE
    ========================================== */

    const questionColours = [
        {
            main:"#159E94",dark:"#087D76",panel:"#F0FCFA",
            control:"#E5F7F4",question:"#DFFFF9",line:"#BDEAE3",
            hint:"#E0F8F4",shadow:"#159E9430",
            partTwo:"#D4F3EC",partThree:"#C4EAE2",page:"#F8FFFE"
        },
        {
            main:"#3978D4",dark:"#245AA8",panel:"#F2F7FF",
            control:"#E9F1FF",question:"#DCEBFF",line:"#C5D9F8",
            hint:"#E8F1FF",shadow:"#3978D430",
            partTwo:"#D3E4FF",partThree:"#C6D9FA",page:"#FAFCFF"
        },
        {
            main:"#C34868",dark:"#8A2947",panel:"#FFF5F7",
            control:"#FDEBF0",question:"#FFDDE5",line:"#F2C4D0",
            hint:"#FCEAF0",shadow:"#C3486830",
            partTwo:"#FAD5DF",partThree:"#F5C6D4",page:"#FFFAFB"
        },
        {
            main:"#8064C9",dark:"#513A91",panel:"#F8F5FF",
            control:"#F0EAFF",question:"#EAE1FF",line:"#D8C9F6",
            hint:"#F0EAFF",shadow:"#8064C930",
            partTwo:"#E3D9FC",partThree:"#D8CCF5",page:"#FCFAFF"
        },
        {
            main:"#E17B43",dark:"#A64B20",panel:"#FFF8F2",
            control:"#FFF0E4",question:"#FFE8D2",line:"#F4D1B7",
            hint:"#FFF0E4",shadow:"#E17B4330",
            partTwo:"#FCE0CA",partThree:"#F8D3B6",page:"#FFFCF9"
        },
        {
            main:"#2495C5",dark:"#17658D",panel:"#F0FAFF",
            control:"#E2F5FC",question:"#D5F0FA",line:"#B8E0EF",
            hint:"#E4F6FC",shadow:"#2495C530",
            partTwo:"#D0ECF8",partThree:"#C0E3F1",page:"#F8FDFF"
        },
        {
            main:"#70A83B",dark:"#47751F",panel:"#F6FBEF",
            control:"#EAF5DA",question:"#E1F1C9",line:"#CDE3AD",
            hint:"#EDF7E0",shadow:"#70A83B30",
            partTwo:"#D8ECC0",partThree:"#CBE5AA",page:"#FBFFF6"
        },
        {
            main:"#D49A22",dark:"#956510",panel:"#FFFBED",
            control:"#FFF4D3",question:"#FFF0BC",line:"#F0DFA6",
            hint:"#FFF6DA",shadow:"#D49A2230",
            partTwo:"#FBE8B0",partThree:"#F6DF9D",page:"#FFFEF8"
        },
        {
            main:"#D65DAD",dark:"#96366F",panel:"#FFF5FC",
            control:"#FCE8F6",question:"#F9DDF0",line:"#EDC5E0",
            hint:"#FCEBF7",shadow:"#D65DAD30",
            partTwo:"#F5D4E9",partThree:"#EFC6E0",page:"#FFFAFE"
        },
        {
            main:"#5074C9",dark:"#304B91",panel:"#F3F6FF",
            control:"#E7EDFF",question:"#DFE7FF",line:"#C9D5F5",
            hint:"#EBF0FF",shadow:"#5074C930",
            partTwo:"#D7E1FC",partThree:"#CAD8F5",page:"#FAFBFF"
        },
        {
            main:"#E16A50",dark:"#A84330",panel:"#FFF6F2",
            control:"#FFEAE3",question:"#FFDED4",line:"#F3C8BB",
            hint:"#FFF0E9",shadow:"#E16A5030",
            partTwo:"#FAD8CB",partThree:"#F5CBBE",page:"#FFFBF9"
        },
        {
            main:"#20A7A0",dark:"#08736E",panel:"#EFFBFA",
            control:"#DDF5F2",question:"#CFF0EC",line:"#B5E4DE",
            hint:"#E1F7F4",shadow:"#20A7A030",
            partTwo:"#CDECE6",partThree:"#BFE5DF",page:"#F8FFFE"
        },
        {
            main:"#9670D0",dark:"#63449C",panel:"#F8F4FF",
            control:"#EEE5FF",question:"#E6DAFF",line:"#D6C5F2",
            hint:"#F1E9FF",shadow:"#9670D030",
            partTwo:"#E0D2F8",partThree:"#D5C5F0",page:"#FCFAFF"
        },
        {
            main:"#C18B38",dark:"#80591F",panel:"#FFFAF0",
            control:"#F8EED9",question:"#F5E5C3",line:"#EAD7B2",
            hint:"#FBF1DF",shadow:"#C18B3830",
            partTwo:"#F1E0BD",partThree:"#EBD6AD",page:"#FFFEFA"
        },
        {
            main:"#4197B5",dark:"#28667E",panel:"#F0F9FC",
            control:"#E1F2F8",question:"#D4EDF5",line:"#BBDDE9",
            hint:"#E6F5FA",shadow:"#4197B530",
            partTwo:"#CEE8F0",partThree:"#BFE0EB",page:"#FAFEFF"
        },
        {
            main:"#B65E85",dark:"#783653",panel:"#FFF5F9",
            control:"#F8E6EF",question:"#F4DCE8",line:"#E9C5D7",
            hint:"#FAECF3",shadow:"#B65E8530",
            partTwo:"#EFD4E2",partThree:"#E7C5D7",page:"#FFFAFC"
        },
        {
            main:"#83A83D",dark:"#526D21",panel:"#F8FBEF",
            control:"#EEF5DB",question:"#E6F0C9",line:"#D5E4B1",
            hint:"#F1F7E2",shadow:"#83A83D30",
            partTwo:"#DFECC4",partThree:"#D2E5B2",page:"#FCFFF7"
        },
        {
            main:"#E08A37",dark:"#98551C",panel:"#FFF8EF",
            control:"#FCEEDC",question:"#FBE4C9",line:"#F0D0AD",
            hint:"#FFF1E0",shadow:"#E08A3730",
            partTwo:"#F7DFC0",partThree:"#F2D2AA",page:"#FFFCF8"
        },
        {
            main:"#5B83CE",dark:"#35579B",panel:"#F3F7FF",
            control:"#E6EEFF",question:"#DCE8FC",line:"#C4D7F3",
            hint:"#ECF2FF",shadow:"#5B83CE30",
            partTwo:"#D5E3F8",partThree:"#C8D9F2",page:"#FBFCFF"
        },
        {
            main:"#C76B54",dark:"#8D4433",panel:"#FFF7F3",
            control:"#FBE9E2",question:"#F7DDD3",line:"#EEC8BA",
            hint:"#FCEFE9",shadow:"#C76B5430",
            partTwo:"#F3D7CA",partThree:"#EBC7B9",page:"#FFFBF9"
        }
    ];

    /* ==========================================
       2. INSTALL STYLES
    ========================================== */

    const STYLE_ID = "mathmium-final-screen-layout";

    const css = `

    * {
        box-sizing: border-box;
    }

    body.mathmium-game-open {
        overflow: hidden !important;
        overscroll-behavior: none !important;
    }

    /* FULL SCREEN ACTIVITY */

    #activity-window.active {
        position: fixed !important;
        inset: 0 !important;
        z-index: 99999 !important;

        width: 100% !important;
        max-width: none !important;

        height: 100vh !important;
        height: 100dvh !important;
        min-height: 0 !important;

        margin: 0 !important;
        padding: 0 !important;

        overflow: hidden !important;

        background: var(--page-bg, #F8FFFE) !important;
    }

    /* HIDE TOPIC AND BACK BUTTON */

    body.mathmium-game-open #activity-title,
    body.mathmium-game-open #back-button {
        display: none !important;
    }

    /* ACTIVITY CONTENT */

    #activity-window.active #activity-content {
        width: 100% !important;
        height: 100% !important;
        max-height: 100% !important;
        min-height: 0 !important;

        padding: 0 !important;
        overflow: hidden !important;

        display: flex !important;
        flex-direction: column !important;
    }

    /* MAIN GAME AREA */

    #activity-window.active .game-area {
        width: 100% !important;
        height: 100% !important;
        min-height: 0 !important;
        max-height: 100% !important;

        flex: 1 1 auto !important;

        display: flex !important;
        flex-direction: column !important;

        margin: 0 !important;
        padding: clamp(8px, 1.5vw, 18px) !important;

        border-radius: 0 !important;
        overflow: hidden !important;
    }

    /* PROGRESS AREA */

    #activity-window.active .game-progress,
    #activity-window.active .progress-track,
    #activity-window.active .question-number {
        flex-shrink: 0 !important;
    }

    #activity-window.active .game-progress {
        margin-bottom: 5px !important;
    }

    #activity-window.active .progress-track {
        margin-bottom: 5px !important;
    }

    #activity-window.active .question-number {
        margin: 4px 0 !important;
    }

    /* MAIN TWO-COLUMN LAYOUT */

    #activity-window.active .game-layout {
        display: grid !important;

        grid-template-columns:
            minmax(0, 1fr)
            minmax(215px, 270px) !important;

        flex: 1 1 0 !important;
        min-height: 0 !important;
        height: 0 !important;

        gap: 12px !important;
        margin-top: 7px !important;

        overflow: hidden !important;
        align-items: stretch !important;
    }

    /* QUESTION PANEL */

    #activity-window.active .question-panel {
        min-width: 0 !important;
        min-height: 0 !important;

        height: 100% !important;
        max-height: 100% !important;

        padding: clamp(10px, 1.6vw, 20px) !important;

        overflow-x: hidden !important;
        overflow-y: auto !important;

        overscroll-behavior: contain !important;
        scrollbar-width: thin !important;
    }

    /* CONTROL PANEL */

    #activity-window.active .control-panel {
        min-width: 0 !important;
        min-height: 0 !important;

        height: 100% !important;
        max-height: 100% !important;

        padding: 12px !important;

        display: flex !important;
        flex-direction: column !important;
        justify-content: flex-start !important;

        gap: 9px !important;

        overflow-x: hidden !important;
        overflow-y: auto !important;

        overscroll-behavior: contain !important;
    }

    /* KEEP CONTROLS VISIBLE */

    #activity-window.active .check-button,
    #activity-window.active .hint-button,
    #activity-window.active .side-navigation,
    #activity-window.active .feedback {
        flex-shrink: 0 !important;
    }

    #activity-window.active .check-button,
    #activity-window.active .hint-button {
        min-height: 42px !important;
    }

    #activity-window.active .side-navigation {
        display: flex !important;
        flex-wrap: wrap !important;
        gap: 7px !important;
    }

    #activity-window.active .side-navigation button {
        flex: 1 1 0 !important;
        min-width: 0 !important;
        min-height: 42px !important;
    }

    /* COLOUR SYSTEM */

    #activity-window.active .question-panel {
        background: var(--panel) !important;
        border-color: var(--line) !important;
    }

    #activity-window.active .control-panel {
        background: var(--control-bg) !important;
        border-color: var(--line) !important;
    }

    #activity-window.active .puzzle-question,
    #activity-window.active .decimal-equation,
    #activity-window.active .decimal-sequence,
    #activity-window.active .decimal-grid {
        background: var(--question-bg) !important;
        border-color: var(--line) !important;
    }

    #activity-window.active .check-button,
    #activity-window.active .inline-check {
        background: var(--main) !important;
        border-color: var(--main) !important;
    }

    #activity-window.active .hint-button {
        border-color: var(--main) !important;
        background: var(--hint-bg) !important;
    }

    #activity-window.active .tower-block {
        background: var(--main) !important;
    }

    #activity-window.active .tower-input,
    #activity-window.active .decimal-blank {
        background: var(--question-bg) !important;
        border-color: var(--main) !important;
    }

    #activity-window.active .tower-input:focus,
    #activity-window.active .decimal-blank:focus {
        outline-color: var(--main) !important;
    }

    #activity-window.active .balance-missing-input {
        border-color: var(--main) !important;
    }

    #activity-window.active .sequence-number {
        background: var(--question-bg) !important;
        border-color: var(--line) !important;
    }

    #activity-window.active .sequence-arrow {
        color: var(--main) !important;
    }

    #activity-window.active .decimal-part {
        border-color: var(--line) !important;
    }

    /* NUMBER TOWER */

    #activity-window.active .tower,
    #activity-window.active .tower-container {
        max-width: 100% !important;
    }

    #activity-window.active .tower {
        overflow-x: auto !important;
    }

    /* DECIMAL GRID */

    #activity-window.active .decimal-grid {
        max-width: 100% !important;
    }

    #activity-window.active .decimal-bar,
    #activity-window.active .decimal-part {
        min-width: 0 !important;
    }

    /* INLINE CONTROLS */

    #activity-window.active .game-layout.inline-layout {
        display: flex !important;
        flex-direction: column !important;

        flex: 1 1 0 !important;
        height: 0 !important;
        min-height: 0 !important;

        gap: 8px !important;
    }

    #activity-window.active .game-layout.inline-layout > .question-panel {
        flex: 1 1 0 !important;
        height: 0 !important;
        min-height: 0 !important;
    }

    #activity-window.active .inline-controls {
        flex: 0 0 auto !important;

        width: 100% !important;
        margin: 0 !important;

        display: grid !important;
        grid-template-columns:
            minmax(0, 1fr)
            minmax(0, 1.5fr)
            minmax(0, 1fr) !important;

        gap: 8px !important;
    }

    #activity-window.active .inline-controls button {
        min-height: 44px !important;
    }

    #activity-window.active .inline-hint-area {
        flex: 0 0 auto !important;
        margin: 0 !important;
    }

    /* COMPLETION SCREEN */

    #activity-window.active #activity-content:has(.completion-area) {
        overflow-y: auto !important;
    }

    #activity-window.active .completion-area {
        margin: auto !important;
        max-height: 100% !important;
        overflow-y: auto !important;
    }

    /* TABLET */

    @media (max-width: 760px) {

        #activity-window.active .game-layout:not(.inline-layout) {
            grid-template-columns:
                minmax(0, 1fr)
                minmax(190px, 215px) !important;
            gap: 8px !important;
        }

        #activity-window.active .control-panel {
            padding: 9px !important;
            gap: 7px !important;
        }
    }

    /* MOBILE */

    @media (max-width: 600px) {

        #activity-window.active .game-area {
            padding: 6px !important;
        }

        #activity-window.active .game-layout:not(.inline-layout) {
            display: flex !important;
            flex-direction: column !important;

            gap: 7px !important;
        }

        #activity-window.active .game-layout:not(.inline-layout)
        > .question-panel {
            flex: 1 1 0 !important;
            height: 0 !important;
            min-height: 0 !important;
        }

        #activity-window.active .control-panel {
            flex: 0 0 auto !important;

            width: 100% !important;
            height: auto !important;
            max-height: 38% !important;

            display: grid !important;

            grid-template-columns:
                minmax(0, 1fr)
                minmax(0, 1fr) !important;

            gap: 6px !important;
            padding: 7px !important;

            overflow-y: auto !important;
        }

        #activity-window.active .control-heading {
            display: none !important;
        }

        #activity-window.active .check-button {
            grid-column: 1 / -1 !important;
            min-height: 40px !important;
        }

        #activity-window.active .side-navigation {
            grid-column: 1 / -1 !important;
        }

        #activity-window.active .feedback,
        #activity-window.active .hint-box {
            grid-column: 1 / -1 !important;
        }

        #activity-window.active .hint-button {
            grid-column: 1 / -1 !important;
            min-height: 38px !important;
        }

        #activity-window.active .inline-controls {
            gap: 5px !important;
        }

        #activity-window.active .inline-controls button {
            min-height: 40px !important;
            font-size: 12px !important;
        }

        #activity-window.active .question-panel {
            padding: 10px !important;
        }

        #activity-window.active .puzzle-question {
            font-size: clamp(16px, 4vw, 20px) !important;
            padding: 12px !important;
        }

        #activity-window.active .answer-area {
            margin: 10px auto !important;
        }

        #activity-window.active .decimal-bar-row {
            grid-template-columns:
                55px minmax(0, 1fr) !important;
            gap: 5px !important;
        }
    }

    /* SMALL MOBILE */

    @media (max-width: 360px) {

        #activity-window.active .game-area {
            padding: 4px !important;
        }

        #activity-window.active .control-panel {
            padding: 5px !important;
            gap: 5px !important;
        }

        #activity-window.active .inline-controls {
            gap: 3px !important;
        }

        #activity-window.active .inline-controls button {
            font-size: 10px !important;
            padding: 6px 2px !important;
        }
    }

    /* SHORT SCREEN */

    @media (max-height: 550px) {

        #activity-window.active .game-area {
            padding: 5px !important;
        }

        #activity-window.active .game-progress {
            margin-bottom: 2px !important;
        }

        #activity-window.active .game-layout {
            margin-top: 3px !important;
        }

        #activity-window.active .control-panel {
            gap: 5px !important;
            padding: 7px !important;
        }

        #activity-window.active .check-button,
        #activity-window.active .hint-button,
        #activity-window.active .side-navigation button {
            min-height: 34px !important;
        }
    }

    `;

    function installStyles() {
        let existing = document.getElementById(STYLE_ID);

        if (!existing) {
            existing = document.createElement("style");
            existing.id = STYLE_ID;
            document.head.appendChild(existing);
        }

        existing.textContent = css;
    }

    /* ==========================================
       3. DETECT CURRENT QUESTION
    ========================================== */

    function getQuestionNumber(activity) {

        const progress = activity.querySelector(
            ".game-progress span:first-child"
        );

        if (!progress) return 1;

        const text = progress.textContent || "";

        const match = text.match(/Challenge\s+(\d+)/i);

        return match ? Math.max(1, Number(match[1])) : 1;
    }

    /* ==========================================
       4. DETECT CURRENT CATEGORY
    ========================================== */

    function getCategory(activity) {

        const progress = activity.querySelector(".game-progress");

        const question = activity.querySelector(".game-area");

        const title = activity.querySelector("#activity-title");

        const categoryText = [
            activity.dataset.category,
            activity.dataset.section,
            activity.dataset.topic,
            activity.dataset.currentCategory,
            progress ? progress.textContent : "",
            title ? title.textContent : "",
            question ? question.dataset.category : ""
        ].filter(Boolean).join(" ").toLowerCase();

        return categoryText.trim();
    }

    /* ==========================================
       5. APPLY INDIVIDUAL QUESTION COLOUR
    ========================================== */

    function applyQuestionColour() {

        const activity = document.getElementById("activity-window");

        if (!activity || !activity.classList.contains("active")) {
            return;
        }

        const questionNumber = getQuestionNumber(activity);

        /*
           Each section starts with colour 1.
           Questions 1-20 use 20 different colours.
           Questions 21-40 repeat the colour sequence.
        */

        const colourIndex = (questionNumber - 1) % questionColours.length;

        const colour = questionColours[colourIndex];

        activity.dataset.questionColour = String(colourIndex + 1);

        activity.dataset.currentQuestion = String(questionNumber);

        const variables = {
            "--main": colour.main,
            "--dark": colour.dark,
            "--panel": colour.panel,
            "--control-bg": colour.control,
            "--question-bg": colour.question,
            "--line": colour.line,
            "--hint-bg": colour.hint,
            "--shadow": colour.shadow,
            "--part-two": colour.partTwo,
            "--part-three": colour.partThree,
            "--page-bg": colour.page
        };

        Object.entries(variables).forEach(([property, value]) => {
            activity.style.setProperty(property, value);
        });

        /*
           Update the category-specific question colour
           whenever the question changes.
        */

        const gameArea = activity.querySelector(".game-area");

        if (gameArea) {
            gameArea.dataset.colourIndex = String(colourIndex);
        }
    }

    /* ==========================================
       6. DECIMAL INPUT ID CORRECTION
    ========================================== */

    function correctDecimalInputIds() {

        const activity = document.getElementById("activity-window");

        if (!activity || !activity.classList.contains("active")) {
            return;
        }

        const inputs = activity.querySelectorAll(
            '.decimal-grid input[id^="decimal-answer-"]'
        );

        inputs.forEach((input, index) => {

            input.id = "decimal-answer-" + index;

            input.setAttribute(
                "aria-label",
                "Missing decimal value " + (index + 1)
            );
        });
    }

    /* ==========================================
       7. UPDATE SCREEN LAYOUT
    ========================================== */

    function updateLayout() {

        const activity = document.getElementById("activity-window");

        if (!activity) return;

        const isActive = activity.classList.contains("active");

        document.body.classList.toggle(
            "mathmium-game-open",
            isActive
        );

        if (!isActive) {
            return;
        }

        applyQuestionColour();
        correctDecimalInputIds();
    }

    /* ==========================================
       8. OBSERVE QUESTION CHANGES
    ========================================== */

    function initialise() {

        installStyles();

        const activity = document.getElementById("activity-window");

        const content = document.getElementById("activity-content");

        if (!activity || !content) return;

        if (activity.dataset.mathmiumObserverReady === "true") {
            updateLayout();
            return;
        }

        activity.dataset.mathmiumObserverReady = "true";

        const observer = new MutationObserver(() => {

            updateLayout();

        });

        observer.observe(content, {
            childList: true,
            subtree: true,
            characterData: true,
            attributes: true,
            attributeFilter: ["class"]
        });

        observer.observe(activity, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ["class", "data-category", "data-section"]
        });

        updateLayout();

    }

    /* ==========================================
       9. INITIALISE
    ========================================== */

    if (document.readyState === "loading") {

        document.addEventListener(
            "DOMContentLoaded",
            initialise,
            { once: true }
        );

    } else {

        initialise();

    }

    /* ==========================================
       10. HANDLE SCREEN RESIZING
    ========================================== */

    window.addEventListener("resize", function () {

        updateLayout();

    }, { passive: true });

})();
