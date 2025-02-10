document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");
        const icon = item.querySelector(".icon");

        question.addEventListener("click", function () {
            const isOpen = answer.style.display === "block";

            // Close all answers first
            document.querySelectorAll(".faq-answer").forEach((ans) => ans.style.display = "none");
            document.querySelectorAll(".icon").forEach((ico) => ico.textContent = "+");

            // Open the clicked one if it was not open
            if (!isOpen) {
                answer.style.display = "block";
                icon.textContent = "−";
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const btn = document.querySelector(".btn");

    btn.addEventListener("click", function () {
        alert("Get Started button clicked!");
    });
});
