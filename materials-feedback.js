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
        quote:
            "Nipuni understood the requirement and has done exceptional work. Very honest and sincere."
    },

    {
        quote:
            "She is extremely reliable and always finishes work on time without any reminder. I am very happy with her."
    },

    {
        quote:
            "Responsive and creative. Will work with her again."
    },

    {
        quote:
            "Very original work!"
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

createClientReviews();