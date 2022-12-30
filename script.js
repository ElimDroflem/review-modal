const ratingBtn = document.getElementsByTagName("btn");
const submit = document.getElementById("submit");
const page1 = document.getElementsByClassName("page-1");
const thankyouPage = document.getElementsByClassName("page-2-review");
const userRatingInput = document.getElementById("user-rating");

userRating = 0;

for (const btn of ratingBtn) {
  btn.addEventListener("click", () => {
    userRating = 0;
    userRating += +btn.textContent;
    console.log(userRating);
  });
}

const hideRatings = () => {
  for (const item of page1) {
    item.classList.add("hidden");
  }
  thankyouPage[0].classList.remove("hidden");
  userRatingInput.textContent = `You selected ${userRating} out of 5`;
};

submit.addEventListener("click", () => {
  userRating !== 0 ? hideRatings() : console.log("select a rating first");
});
