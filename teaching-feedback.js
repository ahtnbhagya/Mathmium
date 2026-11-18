
/* =========================================================
   MATHMIUM
   WORDS FROM PARENTS
   TEACHING FEEDBACK

   Add new parent feedback inside the parentReviews
   array below.

   Each review includes:
   - Parent / student grade
   - Feedback date
   - Original parent feedback

   The HTML automatically applies the profile icon,
   matching accent colours and premium card styling.
========================================================= */


const parentReviews = [

    /* =====================================================
       GRADE 1
    ===================================================== */

    {
        title: "Parent of a Grade 1 student",
        date: "August 2025",
        quote: "It was the first time we heard him being proud of anything to do with math, and honestly, it was very moving."
    },

    {
        title: "Parent of a Grade 1 student",
        date: "September 2025",
        quote: "He loved the class. I’ve never seen him so engaged."
    },

    {
        title: "Parent of a Grade 1 student",
        date: "October 2025",
        quote: "It is very encouraging to see him interacting and see those skills emerging."
    },

    {
        title: "Parent of a Grade 1 student",
        date: "October 2025",
        quote: "The systematic approach with showing ‘fingers’ is an excellent way to set him up for success and help him understand those concepts."
    },


    /* =====================================================
       GRADE 2
    ===================================================== */

    {
        title: "Parent of a Grade 2 student",
        date: "October 2025",
        quote: "It is so wonderful to see him move through the class at such a fast pace. I am so happy about that."
    },

    {
        title: "Parent of a Grade 2 student",
        date: "November 2025",
        quote: "Thank you very much for the way you always design the homework to support his journey of learning."
    },

    {
        title: "Parent of a Grade 2 student",
        date: "November 2025",
        quote: "In terms of the homework, what you are proposing is an excellent idea at this point."
    },

    {
        title: "Parent of a Grade 2 student",
        date: "November 2025",
        quote: "I really appreciate the way you design the homework to support his journey of learning."
    },

    {
        title: "Parent of a Grade 2 student",
        date: "December 2025",
        quote: "We are truly grateful for everything you are doing to support his learning."
    },

    {
        title: "Parent of a Grade 2 student",
        date: "May 2026",
        quote: "I really appreciate the thought and care you put into every step of the learning process."
    },


    /* =====================================================
       GRADE 7
    ===================================================== */

    {
        title: "Parent of a Grade 7 student",
        date: "September 2025",
        quote: "Thank you very much for the great study material. I am really impressed with how good your visuals are explaining the concepts."
    },


    /* =====================================================
       GRADE 4
    ===================================================== */

    {
        title: "Parent of a Grade 4 student",
        date: "November 2026",
        quote: "He really enjoyed the lesson with you! He said that he would like to work with you again since you made it fun."
    },

    {
        title: "Parent of a Grade 4 student",
        date: "November 2026",
        quote: "The slides on finding the 9’s is a very practical way to learn this times table."
    },


    /* =====================================================
       KINDERGARTEN
    ===================================================== */

    {
        title: "Parent of a Kindergarten student",
        date: "May 2025",
        quote: "Thank you so much for creating such fun and engaging classes for my daughter."
    },

    {
        title: "Parent of a Kindergarten student",
        date: "May 2025",
        quote: "She loves counting with the princesses. Thank you so much for the session."
    },

    {
        title: "Parent of a Kindergarten student",
        date: "August 2025",
        quote: "Many thanks for creating such engaging lessons with animations. My daughter really enjoys them."
    },

    {
        title: "Parent of a Kindergarten student",
        date: "December 2025",
        quote: "My kid loves finding the numbers with the princesses. Thank you for making Maths so enjoyable for her."
    }

];


/* =========================================================
   CREATE PARENT REVIEWS
========================================================= */

function createParentReviews() {

    const container =
        document.getElementById("reviewsContainer");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    parentReviews.forEach(function(review) {

        /* CREATE REVIEW CARD */

        const card =
            document.createElement("article");

        card.className = "review-card";


        /* REVIEWER TITLE */

        const title =
            document.createElement("div");

        title.className = "review-title";

        title.textContent =
            review.title;


        /* REVIEW DATE */

        const date =
            document.createElement("div");

        date.className = "review-date";

        date.textContent =
            review.date;


        /* PARENT FEEDBACK */

        const quote =
            document.createElement("p");

        quote.className = "review-quote";

        quote.textContent =
            review.quote;


        /* ADD ELEMENTS TO CARD */

        card.appendChild(title);

        card.appendChild(date);

        card.appendChild(quote);


        /* ADD CARD TO PAGE */

        container.appendChild(card);

    });

}


/* =========================================================
   START
========================================================= */

if (document.readyState === "loading") {

    document.addEventListener(
        "DOMContentLoaded",
        createParentReviews
    );

} else {

    createParentReviews();

}
