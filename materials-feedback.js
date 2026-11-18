/* =========================================================
   MATHMIUM
   WORDS FROM CLIENTS
   MATERIALS FEEDBACK

   Add new client feedback inside the clientReviews
   array below.

   You only need to edit this file when adding
   new feedback.
========================================================= */


const clientReviews = [

    {
        title: "Client for Educational Design",
        date: "2025 May",
        quote: "Very original work!"
    },

    {
        title: "Client for Creative Design",
        date: "2025 July",
        quote: "Responsive and creative. Will work with her again."
    },

    {
        title: "Client for Exam Paper Creation",
        date: "2025 December",
        quote: "She is extremely reliable and always finishes work on time without any reminder. I am very happy with her."
    },

    {
        title: "Client for Research Paper Publication",
        date: "2026 March",
        quote: "Nipuni understood the requirement and has done exceptional work. Very honest and sincere."
    }

];


/* =========================================================
   CREATE CLIENT REVIEWS
========================================================= */

function createClientReviews() {

    const container =
        document.getElementById("clientReviewsContainer");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    clientReviews.forEach(function(review) {

        const card = document.createElement("article");
        card.className = "review-card";


        // Client Title
        const title = document.createElement("h3");
        title.className = "review-title";
        title.textContent = review.title;


        // Date
        const date = document.createElement("p");
        date.className = "review-date";
        date.textContent = review.date;


        // Feedback Quote
        const quote = document.createElement("p");
        quote.className = "review-quote";
        quote.textContent = review.quote;


        // Add elements to the card
        card.appendChild(title);
        card.appendChild(date);
        card.appendChild(quote);

        // Add card to the container
        container.appendChild(card);

    });
}


/* =========================================================
   START
========================================================= */

createClientReviews();
