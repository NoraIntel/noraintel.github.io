const accordion = document.querySelector(".accordion");

accordion.addEventListener("click", (event) => {
  const target = event.target;

  if (target.tagName === "SUMMARY") {
    // Close all other open summaries
    accordion.querySelectorAll(".summary.active").forEach((summary) => {
      summary.classList.remove("active");
    });

    // Open the clicked summary
    target.classList.add("active");
  }
});
