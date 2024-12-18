let preview = document.querySelector(".preview");
let ratSpans = document.querySelectorAll(".rating span");
let button = document.querySelector("button");
let thank = document.querySelector(".thank");
let showRating = document.querySelector(".show-rating span");

ratSpans.forEach((span) => {
  span.onclick = function () {
    // console.log(span.dataset.rating);
    span.classList.add("active");
    showRating.innerHTML = span.dataset.rating;
    
    button.onclick = function () {
      preview.style.display = "none";
      thank.style.display = "block";
    }
  }
})
