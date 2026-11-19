
const parentReviews = [
    
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
    
{
    title: "Parent of a Grade 8 student",
    date: "September 2026",
    quote: "Thank you so much for the sessions, as always. He is lucky to have you as his maths tutor."
},
    
{
    title: "Parent of a Grade 2 student",
    date: "May 2026",
    quote: "I really appreciate the thought and care you put into every step of the learning process."
},

{
    title: "Parent of a Grade 2 student",
    date: "December 2025",
    quote: "We are truly grateful for everything you are doing to support his learning."
},

{
    title: "Parent of a Kindergarten student",
    date: "December 2025",
    quote: "My kid loves finding the numbers with the princesses. Thank you for making Maths so enjoyable for her."
},

{
    title: "Parent of a Kindergarten student",
    date: "December 2025",
    quote: "Thank you so much for creating such fun & engaging classes for my daughter."
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
    date: "October 2025",
    quote: "It is so wonderful to see him move through the class at such a fast pace. I am so happy about that."
},

{
    title: "Parent of a Grade 1 student",
    date: "October 2025",
    quote: "The systematic approach with showing ‘fingers’ is an excellent way to set him up for success and help him understand those concepts."
},

{
    title: "Parent of a Grade 1 student",
    date: "October 2025",
    quote: "It is very encouraging to see him interacting and see those skills emerging."
},

{
    title: "Parent of a Grade 7 student",
    date: "September 2025",
    quote: "Thank you very much for the great study material. I am really impressed with how good your visuals are explaining the concepts."
},

{
    title: "Parent of a Grade 1 student",
    date: "September 2025",
    quote: "He loved the class. I’ve never seen him so engaged."
},

{
    title: "Parent of a Grade 1 student",
    date: "August 2025",
    quote: "It was the first time we heard him being proud of anything to do with math, and honestly, it was very moving."
},

{
    title: "Parent of a Kindergarten student",
    date: "August 2025",
    quote: "Many thanks for creating such engaging lessons with animations. My daughter really enjoys them."
},

{
    title: "Parent of a Kindergarten student",
    date: "May 2025",
    quote: "She loves counting with the princesses. Thank you so much for the session."
}
    
];


// =====================================================
// DISPLAY PARENT REVIEWS
// =====================================================

document.addEventListener("DOMContentLoaded", function () {

    const container = document.getElementById("reviewsContainer");

    if (!container) {
        console.error("Mathmium: Reviews container not found.");
        return;
    }

    // Clear existing cards to prevent duplicates.
    container.innerHTML = "";

    // Profile icon SVG.
    const profileSVG = `
        <svg viewBox="0 0 24 24"
             fill="none"
             stroke="currentColor"
             stroke-width="1.8"
             stroke-linecap="round"
             stroke-linejoin="round"
             aria-hidden="true">

            <circle cx="12" cy="8" r="3.5"></circle>

            <path d="M5 21c0-4 3-6.5 7-6.5s7 2.5 7 6.5"></path>

        </svg>
    `;

    // Create each review card.
    parentReviews.forEach(function (review) {

        const card = document.createElement("div");
        card.className = "review-card";

        // Parent information.
        const meta = document.createElement("div");
        meta.className = "review-meta";

        // Profile icon.
        const profile = document.createElement("div");
        profile.className = "profile-icon";
        profile.setAttribute("aria-label", "Parent profile");
        profile.innerHTML = profileSVG;

        // Reviewer details.
        const details = document.createElement("div");
        details.className = "reviewer-details";

        const title = document.createElement("div");
        title.className = "review-title";
        title.textContent = review.title;

        const date = document.createElement("div");
        date.className = "review-date";
        date.textContent = review.date;

        details.appendChild(title);
        details.appendChild(date);

        meta.appendChild(profile);
        meta.appendChild(details);

        // Review quotation.
        const quote = document.createElement("div");
        quote.className = "review-quote";
        quote.textContent = review.quote;

        // Assemble the card.
        card.appendChild(meta);
        card.appendChild(quote);

        container.appendChild(card);

    });

    console.log("Mathmium: " + parentReviews.length + " parent reviews loaded successfully.");

});
