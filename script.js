document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.querySelector(".courses-checkbox");
  const coursesList = document.querySelector(".courses-list");
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

function playVideo(element) {
  // Remove the active class from all course elements
  const allCourses = document.querySelectorAll(".courses-list p");
  allCourses.forEach((course) => {
    course.classList.remove("active");
  });

  // Add the active class to the clicked course element
  element.classList.add("active");

  // Additional code to play the video can go here
}
