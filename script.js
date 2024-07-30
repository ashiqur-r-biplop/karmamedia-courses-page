// focus input
const checkbox = document.getElementById("courses-checkbox");
const coursesList = document.getElementById("courses-list");
const upIcon = document.querySelector(".fa-caret-up");
const downIcon = document.querySelector(".fa-caret-down");

checkbox.addEventListener("change", function () {
  if (checkbox.checked) {
    console.log(checkbox.checked);
    upIcon.style.display = "block";
    downIcon.style.display = "none";
    coursesList.style.display = "none";
  } else {
    upIcon.style.display = "none";
    downIcon.style.display = "block";
    coursesList.style.display = "block";
  }
});

if (checkbox.checked) {
  coursesList.style.display = "block";

  upIcon.style.display = "block";
  downIcon.style.display = "none";
} else {
  upIcon.style.display = "none";
  downIcon.style.display = "block";
  downIcon.style.display = "block";
}
