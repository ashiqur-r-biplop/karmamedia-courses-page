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
  // Hide all video containers and stop any playing video
  const allVideos = document.querySelectorAll(".videos iframe");
  allVideos.forEach((iframe) => {
    const src = iframe.src;
    iframe.src = src; // This reloads the iframe and effectively stops the video

    // Hide the video container
    iframe.parentElement.style.display = "none";
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

  // Add the active class to the clicked element
  element.classList.add("active");

  // Play the corresponding video
  videoPlay(courseId);
}

function nextModule() {
  // Find the currently active course
  const currentActive = document.querySelector(".courses-list p.active");

  if (currentActive) {
    // Get the next sibling element
    const nextCourse = currentActive.nextElementSibling;

    if (nextCourse) {
      // Trigger the next course's video
      const courseId = nextCourse.getAttribute("onclick").split(", ")[1].replace(/'|\)/g, "");
      playVideo(nextCourse, courseId);
    } else {
      console.log("No more modules available.");
    }
  } else {
    console.log("No active module found.");
  }
}

// Initial video play (optional, but based on your previous setup)
videoPlay("coursesIntroduction");
