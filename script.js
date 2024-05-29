const stars = document.querySelectorAll(".star");
const messageDiv = document.querySelector(".message");
const messages = {
  5: "Excellent! We're thrilled to hear you had such a positive experience. Thank you for choosing our platform.",
  4: "Thank you for your feedback! We're glad to know that you had a great experience and we appreciate your support.",
  3: "Thank you for your feedback. We're sorry to hear that your experience wasn't perfect. We would love to hear more about your concerns to see how we can improve.",
  2: "We apologize for the inconvenience you experienced. We appreciate your feedback and would like to work with you to address any issues.",
  1: "We're sorry to hear that you had a bad experience. We would like to learn more about what happened and how we can make things right.",
};

stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    const value = star.getAttribute("data-value");
    const message = messages[value];

    if (message) {
      messageDiv.textContent = message;
    }

    stars.forEach((s) => s.classList.remove("selected"));

    for (let i = index; i < stars.length; i++) {
      stars[i].classList.add("selected");
    }
  });
});
