
/* =========================================================
   MATHMIUM
   TEACHING FEEDBACK

   To add a new review, enter:
   1. Title
   2. Submission date (Month Year)
   3. Original parent feedback

   Only edit this file when adding new feedback.
========================================================= */

const parentReviews = [

    {
        title: "Parent of an Elementary Student",
        date: "August 2025",
        feedback: "Thank you so much for creating such fun and engaging classes for my daughter."
    },

    {
        title: "Parent of an Elementary Student",
        date: "September 2025",
        feedback: "it was the first time we heard him being proud of anything to do with math, and honestly, it was very moving."
    },

    {
        title: "Parent of an Elementary Student",
        date: "September 2025",
        feedback: "He loved the class. I’ve never seen him so engaged."
    },

    {
        title: "Parent of a Secondary Student",
        date: "September 2025",
        feedback: "Thank you very much for the great study material. I am really impressed with how good your visuals are explaining the concepts."
    },

    {
        title: "Parent of an Elementary Student",
        date: "October 2025",
        feedback: "Many thanks for creating such engaging lessons with animations. My daughter really enjoys them."
    },

    {
        title: "Parent of an Elementary Student",
        date: "October 2025",
        feedback: "It is very encouraging to see him interacting and see those skills emerging."
    },

    {
        title: "Parent of an Elementary Student",
        date: "October 2025",
        feedback: "The systematic approach with showing ‘fingers’ is an excellent way to set him up for success and help him understand those concepts."
    },

    {
        title: "Parent of an Elementary Student",
        date: "October 2025",
        feedback: "It is so wonderful to see him move through the class at such a fast pace. I am so happy about that."
    },

    {
        title: "Parent of an Elementary Student",
        date: "November 2025",
        feedback: "Thank you very much for the way you always design the homework to support his journey of learning."
    },

    {
        title: "Parent of an Elementary Student",
        date: "November 2025",
        feedback: "She loves counting with the princesses. Thank you so much for the session."
    },

    {
        title: "Parent of an Elementary Student",
        date: "November 2025",
        feedback: "In terms of the homework, what you are proposing is an excellent idea at this point."
    },

    {
        title: "Parent of an Elementary Student",
        date: "November 2025",
        feedback: "I really appreciate the way you design the homework to support his journey of learning."
    },

    {
        title: "Parent of an Elementary Student",
        date: "December 2025",
        feedback: "We are truly grateful for everything you are doing to support his learning."
    },

    {
        title: "Parent of an Elementary Student",
        date: "February 2026",
        feedback: "My kid loves finding the numbers with the princesses. Thank you for making Maths so enjoyable for her."
    },

    {
        title: "Parent of an Elementary Student",
        date: "May 2026",
        feedback: "I really appreciate the thought and care you put into every step of the learning process."
    },

    {
        title: "Parent of an Elementary Student",
        date: "November 2026",
        feedback: "He really enjoyed the lesson with you! He said that he would like to work with you again since you made it fun."
    },

    {
        title: "Parent of an Elementary Student",
        date: "November 2026",
        feedback: "The slides on finding the 9’s is a very practical way to learn this times table."
    }

];


/* =========================================================
   CREATE PARENT REVIEWS
========================================================= */

function createParentReviews() {

    const container = document.getElementById("reviewsContainer");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    parentReviews.forEach(function(review) {

        const card = document.createElement("article");
        card.className = "review-card";

        const title = document.createElement("h2");
        title.className = "review-title";
        title.textContent = review.title;

        const date = document.createElement("p");
        date.className = "review-date";
        date.textContent = review.date;

        const feedback = document.createElement("p");
        feedback.className = "review-feedback";
        feedback.textContent = review.feedback;

        card.appendChild(title);
        card.appendChild(date);
        card.appendChild(feedback);

        container.appendChild(card);

    });
}


/* =========================================================
   START
========================================================= */

createParentReviews();
