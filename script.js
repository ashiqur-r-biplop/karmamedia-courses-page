document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.getElementById("courses-checkbox");
  const coursesList = document.getElementById("courses-list");
  const upIcon = document.querySelector(".fa-caret-up");
  const downIcon = document.querySelector(".fa-caret-down");

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      console.log(checkbox.checked);
      upIcon.style.display = "none";
      downIcon.style.display = "block";
      coursesList.style.display = "none";
    } else {
      upIcon.style.display = "block";
      downIcon.style.display = "none";
      coursesList.style.display = "block";
    }
  });

  if (checkbox.checked) {
    coursesList.style.display = "block";
    upIcon.style.display = "none";
    downIcon.style.display = "block";
  } else {
    upIcon.style.display = "block";
    downIcon.style.display = "none";
    coursesList.style.display = "block";
  }
});
const videoLink = {
  course: {
    introduction:
      "https://www.youtube.com/embed/usTDm-ZYOBo?si=4ZrCkjCJTumZ92_z",
    howToGetTheMostValue:
      "https://www.youtube.com/watch?v=usTDm-ZYOBo&list=RDRqwsdR1XSiU&index=3",
  },
  Module1: {
    introduction:
      "https://www.youtube.com/embed/usTDm-ZYOBo?si=4ZrCkjCJTumZ92_z",
    lesson1:
      "https://www.youtube.com/watch?v=usTDm-ZYOBo&list=RDRqwsdR1XSiU&index=3",
    lesson2:
      "https://www.youtube.com/watch?v=usTDm-ZYOBo&list=RDRqwsdR1XSiU&index=3",
    lesson3:
      "https://www.youtube.com/watch?v=usTDm-ZYOBo&list=RDRqwsdR1XSiU&index=3",
    lesson4:
      "https://www.youtube.com/watch?v=usTDm-ZYOBo&list=RDRqwsdR1XSiU&index=3",
    lesson5:
      "https://www.youtube.com/watch?v=usTDm-ZYOBo&list=RDRqwsdR1XSiU&index=3",
    lesson6:
      "https://www.youtube.com/watch?v=usTDm-ZYOBo&list=RDRqwsdR1XSiU&index=3",
  },
  Module2: {
    introduction:
      "https://www.youtube.com/embed/usTDm-ZYOBo?si=4ZrCkjCJTumZ92_z",
    lesson1:
      "https://www.youtube.com/watch?v=usTDm-ZYOBo&list=RDRqwsdR1XSiU&index=3",
    lesson2:
      "https://www.youtube.com/watch?v=usTDm-ZYOBo&list=RDRqwsdR1XSiU&index=3",
  },
};
function playVideo(element) {
  // Remove the active class from all course elements
  const allCourses = document.querySelectorAll(".courses-list p");
  allCourses.forEach((course) => {
    course.classList.remove("active");
  });
  element.classList.add("active");
}
