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
const videoPlay = (courseId) => {
  // Hide all video containers
  const allVideos = document.querySelectorAll(".videos");
  allVideos.forEach((video) => {
    video.style.display = "none";
  });

  // Show the selected video container
  const openVideoContainer = document.getElementById(courseId);
  if (openVideoContainer) {
    openVideoContainer.style.display = "block";
  } else {
    console.error(`Element with ID '${courseId}' not found.`);
  }
};

function playVideo(element, courseId) {
  // Remove the active class from all course elements
  const allCourses = document.querySelectorAll(".courses-list p");
  allCourses.forEach((course) => {
    course.classList.remove("active");
  });
  element.classList.add("active");
  videoPlay(courseId);
}

// open video script
const videoLink = {
  Course: {
    Introduction: {
      link: "https://youtu.be/rwhPoLseH1g?si=50_dmmgt8jSFSLoL",
    },
    HowToGetTheMostValue: "https://youtu.be/wyXa-ZIF1zA?si=ligfXL8n48yST-dL",
  },
};
videoPlay("coursesIntroduction");
