/* =========================================================
   MATHMIUM
   WORDS FROM PARENTS
   TEACHING FEEDBACK

   Add new parent feedback inside the parentReviews
   array below.

   You only need to edit this file when adding
   new feedback.
========================================================= */


const parentReviews = [

    {
        quote:
            "It was the first time we heard him being proud of anything to do with math, and honestly, it was very moving."
    },

    {
        quote:
            "Thank you so much for creating such fun and engaging classes for my daughter."
    },

    {
        quote:
            "He loved the class. I’ve never seen him so engaged."
    },

    {
        quote:
            "Thank you very much for the great study material. I am really impressed with how good your visuals are explaining the concepts."
    },

    {
        quote:
            "Many thanks for creating such engaging lessons with animations. My daughter really enjoys them."
    },

    {
        quote:
            "It is very encouraging to see him interacting and see those skills emerging."
    },

    {
        quote:
            "The systematic approach with showing ‘fingers’ is an excellent way to set him up for success and help him understand those concepts."
    },

    {
        quote:
            "It is so wonderful to see him move through the class at such a fast pace. I am so happy about that."
    },

    {
        quote:
            "Thank you very much for the way you always design the homework to support his journey of learning."
    },

    {
        quote:
            "She loves counting with the princesses. Thank you so much for the session."
    },

    {
        quote:
            "In terms of the homework, what you are proposing is an excellent idea at this point."
    },

    {
        quote:
            "I really appreciate the way you design the homework to support his journey of learning."
    },

    {
        quote:
            "We are truly grateful for everything you are doing to support his learning."
    },

    {
        quote:
            "My kid loves finding the numbers with the princesses. Thank you for making Maths so enjoyable for her."
    },

    {
        quote:
            "I really appreciate the thought and care you put into every step of the learning process."
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

        const card =
            document.createElement("article");

        card.className = "review-card";


        const quote =
            document.createElement("p");

        quote.className = "review-quote";

        quote.textContent =
            review.quote;


        card.appendChild(quote);

        container.appendChild(card);

    });
}


/* =========================================================
   START
========================================================= */

createParentReviews();