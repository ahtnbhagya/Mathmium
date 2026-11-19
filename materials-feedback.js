
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
        title: "Client of Worksheet Creation",
        date: "2025 April",
        quote: "Great and well-structured work! Very happy with the results."
    },

    {
        title: "Client of Educational Creative Design",
        date: "2025 May",
        quote: "Very original work!"
    },

    {
        title: "Client of Creative Design",
        date: "2025 July",
        quote: "Responsive and creative. Will work with her again."
    },

    {
        title: "Client of Test Paper Creation",
        date: "2025 December",
        quote: "She is extremely reliable and always finishes work on time without any reminder. I am very happy with her."
    },

    {
        title: "Client of Academic Writing",
        date: "2026 March",
        quote: "Nipuni understood the requirement and has done exceptional work. Very honest and sincere."
    }
      
   {
        title: "Client of Activity Sheet Creation",
        date: "2026 October",
        quote: "Delivered the PDF exactly as requested."
    },

];


/* =========================================================
   PROFILE ICON
========================================================= */

const clientProfileSVG = `
    <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
    >
        <circle
            cx="12"
            cy="8"
            r="3.5"
            stroke="currentColor"
            stroke-width="1.8"
        />

        <path
            d="M5 20C5 16.5 8.1 13.8 12 13.8C15.9 13.8 19 16.5 19 20"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
        />
    </svg>
`;


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

        // Main review card
        const card = document.createElement("article");
        card.className = "review-card";


        // Profile and reviewer information
        const meta = document.createElement("div");
        meta.className = "review-meta";


        // Profile icon
        const profile = document.createElement("div");
        profile.className = "profile-icon";

        profile.setAttribute(
            "aria-label",
            "Client profile"
        );

        profile.innerHTML = clientProfileSVG;


        // Reviewer details wrapper
        const details = document.createElement("div");
        details.className = "reviewer-details";


        // Client category
        const title = document.createElement("h3");
        title.className = "review-title";
        title.textContent = review.title;


        // Review date
        const date = document.createElement("p");
        date.className = "review-date";
        date.textContent = review.date;


        // Feedback quote
        const quote = document.createElement("p");
        quote.className = "review-quote";
        quote.textContent = review.quote;


        // Assemble reviewer details
        details.appendChild(title);
        details.appendChild(date);


        // Assemble profile section
        meta.appendChild(profile);
        meta.appendChild(details);


        // Assemble complete review card
        card.appendChild(meta);
        card.appendChild(quote);


        // Add card to the page
        container.appendChild(card);

    });

}


/* =========================================================
   START
========================================================= */

if (document.readyState === "loading") {

    document.addEventListener(
        "DOMContentLoaded",
        createClientReviews
    );

} else {

    createClientReviews();

}
