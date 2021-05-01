"use strict";

// set constants for javascript element interactivity
const dropBtn = document.getElementById("dropbtn");
const dropContent = document.getElementById("dropdown");
const nav = document.querySelector("nav");
const footer = document.querySelector("footer");
const subscribe = document.getElementById("subscribe");
const modalClose = document.querySelector(".close");
const formBtn = document.querySelector(".mainSubmit");
const modalBtn = document.querySelector(".modalSubmit");
const fName = document.getElementById("fName");
const lName = document.getElementById("lName");
const fNameAside = document.getElementById("fNameAside");
const lNameAside = document.getElementById("lNameAside");
const emailAside = document.getElementById("emailAside");
const home = document.getElementById("home");
const lessons = document.getElementById("lessons");
const about = document.getElementById("about");
const contact = document.getElementById("contact");
const map = document.getElementById("map");
const closeDrop = document.querySelector(".close-drop");
const contactBtn = document.getElementById("contact-button");
const contactFName = document.getElementById("contact-fName");
const contactLName = document.getElementById("contact-lName");
const contactPhone = document.getElementById("contact-phone");
const contactEmail = document.getElementById("contact-email");
const contactTextArea = document.getElementById("contact-textarea");

const success = document.querySelector(".success");
const mainSuccess = document.querySelector(".mainSuccess");
const contactSuccess = document.querySelector(".contact-success");

const lessonsRef = document.querySelector(".lessons-ref");
const contactRef = document.querySelector(".contact-ref");
const contact2Ref = document.querySelector(".contact-ref2");

// initialize variables to how long Brad has been playing, teaching
const homeAges = document.querySelector(".home-ages");
const aboutAge = document.querySelector(".about-age");
const aboutAge2 = document.querySelector(".about-age2");

// set constants and variables related to finding how many years
// Brad has been playing and teaching compared to whatever
// today's date is
const startPlay = new Date("1989/1/15");
const startTeach = new Date("1997/4/25");
let cur = new Date();
let diffPlay = cur - startPlay; // This is the difference in milli
let diffTeach = cur - startTeach;
let yearsPlaying = Math.floor(diffPlay / 31557600000);
let yearsTeaching = Math.floor(diffTeach / 31557600000);

// event listener for mobile dropdown button
dropBtn.addEventListener("click", function (e) {
  e.preventDefault();
  // toggles "hide" class for dropdown menu to display or hide it
  dropContent.classList.toggle("hide");
});

// event listenter for dropdown menu to navigate to the appropriate
// page while hiding whatever page it's currently on.
dropContent.addEventListener("click", function (e) {
  if (e.target.tagName.toLowerCase() === "a") {
    dropContent.classList.toggle("hide");

    // const for html for actual thing clicked on within dropdown menu
    const mainID = e.target.toString();

    // if target html as string contains a page ID
    // remove "main-hide" to reveal the page
    // and add "main-hide" to all other page IDs in the main section
    if (mainID.includes("#home")) {
      home.classList.remove("main-hide");
      lessons.classList.add("main-hide");
      about.classList.add("main-hide");
      contact.classList.add("main-hide");
      map.classList.add("main-hide");
    } else if (mainID.includes("#lessons")) {
      home.classList.add("main-hide");
      lessons.classList.remove("main-hide");
      about.classList.add("main-hide");
      contact.classList.add("main-hide");
      map.classList.add("main-hide");
    } else if (mainID.includes("#about")) {
      home.classList.add("main-hide");
      lessons.classList.add("main-hide");
      about.classList.remove("main-hide");
      contact.classList.add("main-hide");
      map.classList.add("main-hide");
    } else if (mainID.includes("#contact")) {
      home.classList.add("main-hide");
      lessons.classList.add("main-hide");
      about.classList.add("main-hide");
      contact.classList.remove("main-hide");
      map.classList.add("main-hide");
    } else if (mainID.includes("#map")) {
      home.classList.add("main-hide");
      lessons.classList.add("main-hide");
      about.classList.add("main-hide");
      contact.classList.add("main-hide");
      map.classList.remove("main-hide");
    }
  }
});

// event listener for nav in full screen page view
nav.addEventListener("click", function (e) {
  if (e.target.tagName.toLowerCase() === "a") {
    // dropContent.classList.toggle("hide");

    //const of target html to string so it can be
    // searched for page IDs
    const mainID = e.target.toString();

    // if target html as string contains a page ID
    // remove "main-hide" to reveal the page
    // and add "main-hide" to all other page IDs in the main section
    if (mainID.includes("#home")) {
      home.classList.remove("main-hide");
      lessons.classList.add("main-hide");
      about.classList.add("main-hide");
      contact.classList.add("main-hide");
      map.classList.add("main-hide");
    } else if (mainID.includes("#lessons")) {
      home.classList.add("main-hide");
      lessons.classList.remove("main-hide");
      about.classList.add("main-hide");
      contact.classList.add("main-hide");
      map.classList.add("main-hide");
    } else if (mainID.includes("#about")) {
      home.classList.add("main-hide");
      lessons.classList.add("main-hide");
      about.classList.remove("main-hide");
      contact.classList.add("main-hide");
      map.classList.add("main-hide");
    } else if (mainID.includes("#contact")) {
      home.classList.add("main-hide");
      lessons.classList.add("main-hide");
      about.classList.add("main-hide");
      contact.classList.remove("main-hide");
      map.classList.add("main-hide");
    } else if (mainID.includes("#map")) {
      home.classList.add("main-hide");
      lessons.classList.add("main-hide");
      about.classList.add("main-hide");
      contact.classList.add("main-hide");
      map.classList.remove("main-hide");
    }
  }
});

footer.addEventListener("click", function (e) {
  if (e.target.tagName.toLowerCase() === "a") {
    // dropContent.classList.toggle("hide");

    //const of target html to string so it can be
    // searched for page IDs
    const mainID = e.target.toString();

    // if target html as string contains a page ID
    // remove "main-hide" to reveal the page
    // and add "main-hide" to all other page IDs in the main section
    if (mainID.includes("#home")) {
      home.classList.remove("main-hide");
      lessons.classList.add("main-hide");
      about.classList.add("main-hide");
      contact.classList.add("main-hide");
      map.classList.add("main-hide");
    } else if (mainID.includes("#lessons")) {
      home.classList.add("main-hide");
      lessons.classList.remove("main-hide");
      about.classList.add("main-hide");
      contact.classList.add("main-hide");
      map.classList.add("main-hide");
    } else if (mainID.includes("#about")) {
      home.classList.add("main-hide");
      lessons.classList.add("main-hide");
      about.classList.remove("main-hide");
      contact.classList.add("main-hide");
      map.classList.add("main-hide");
    } else if (mainID.includes("#contact")) {
      home.classList.add("main-hide");
      lessons.classList.add("main-hide");
      about.classList.add("main-hide");
      contact.classList.remove("main-hide");
      map.classList.add("main-hide");
    } else if (mainID.includes("#map")) {
      home.classList.add("main-hide");
      lessons.classList.add("main-hide");
      about.classList.add("main-hide");
      contact.classList.add("main-hide");
      map.classList.remove("main-hide");
    }
  }
});

// event listener to close the dropdown menu
closeDrop.addEventListener("click", function (e) {
  e.preventDefault();

  // toggles "hide" class back to "hide"
  dropContent.classList.toggle("hide");
});

// event listener for SUBSCRIBE! in dropdown menu
subscribe.addEventListener("click", function (e) {
  e.preventDefault();

  // makes modal background to darken screen and modal window VISIBLE
  modal.style.display = "block";
  // Blurs regular content under modal window a bit for effect
  container.classList.add("is-blurred");
  dropContent.classList.remove("hide");
});

// event listener for close button in SUBSCRIBE modal
modalClose.addEventListener("click", function (e) {
  e.preventDefault();

  // closes modal window and unblurs everything else
  modal.style.display = "none";
  container.classList.remove("is-blurred");
});

// event listener for window so user can click outside of the window
// and close SUBSCRIBE!
window.addEventListener("click", function (e) {
  if (e.target == modal) {
    modal.style.display = "none";
    container.classList.remove("is-blurred");
  }
});

// event listener for full site form button
formBtn.addEventListener("click", function (e) {
  e.preventDefault();

  // adds SUCCESS text under form button when button is pressed
  mainSuccess.textContent = "SUCCESSFUL SUBMISSION!";

  // a TIMER to wait 3 seconds then empties inputs
  // etc to SIMULATE FORM SUBMISSION
  setTimeout(function () {
    fNameAside.value = "";
    lNameAside.value = "";
    emailAside.value = "";

    // and removes the modal if it happens to be open
    modal.style.display = "none";
    container.classList.remove("is-blurred");
    // and removes the SUCCESS text
    mainSuccess.textContent = "";
  }, 3000);
});

// add event listener for CONTACT BUTTON on CONTACT PAGE
contactBtn.addEventListener("click", function (e) {
  e.preventDefault();

  // adds SUCCESS text under form button when button is pressed
  contactSuccess.textContent = "SUCCESSFUL SUBMISSION!";

  // a TIMER to wait 3 seconds then empties inputs
  // etc to SIMULATE FORM SUBMISSION
  setTimeout(function () {
    contactFName.value = "";
    contactLName.value = "";
    contactPhone.value = "";
    contactEmail.value = "";
    contactTextArea.value = "";

    // and removes the modal if it happens to be open
    modal.style.display = "none";
    container.classList.remove("is-blurred");
    // and removes the SUCCESS text
    contactSuccess.textContent = "";
  }, 3000);
});

// add event listener for Subscribe MODAL
modalBtn.addEventListener("click", function (e) {
  e.preventDefault();

  // adds SUCCESS text under form button when button is pressed
  success.textContent = "SUCCESSFUL SUBMISSION!";

  // a TIMER to wait 3 seconds then empties inputs
  // etc to SIMULATE FORM SUBMISSION
  setTimeout(function () {
    fName.value = "";
    lName.value = "";
    email.value = "";

    // and removes the modal if it happens to be open
    modal.style.display = "none";
    container.classList.remove("is-blurred");
    // and removes the SUCCESS text
    success.textContent = "";
  }, 3000);
});

// add event listener for PAGE LOADS
window.addEventListener("load", function () {
  // ALL 3 OF THESE TEXT CONTENTS # OF YEARS
  //TO INSERT CORRECT AGES FOR BRAD
  // AS A TEACHER AND AS A GUITARIST
  homeAges.textContent = `Hi! My name is Brad Barnes. I've been a guitar player for ${yearsPlaying} years and a guitar teacher for ${yearsTeaching} years.`;

  aboutAge.textContent = `From his earliest days as a beginning guitarist ${yearsPlaying} years ago, Brad
  knew he wanted to be a teacher. There is just nothing like listening
  to someone's guitar dreams and helping them get there step by step.
  Some people get all excited about the idea of playing guitar but get
  sidelined by the sometimes confusing and overwhelming process of how
  to actually develop the skill that they are so excited about.`;

  aboutAge2.textContent = `Brad is one of those rare people that LOVES breaking down the
  process to bite-sized pieces and walking students through each step
  until can truly perform each new skill. He can't make you practice,
  but if you're like so many students of his over the last ${yearsTeaching} years,
  you'll WANT TO PRACTICE!`;

  //   console.log(document.querySelector("html").clientWidth < 600);
  if (document.querySelector("html").clientWidth < 650) {
    setTimeout(function () {
      // makes modal background to darken screen and modal window VISIBLE
      modal.style.display = "block";
      // Blurs regular content under modal window a bit for effect
      container.classList.add("is-blurred");
      //   dropContent.classList.toggle("hide");
    }, 3000);
  }
});

// contactBtn.addEventListener("click", function (e) {
//   e.preventDefault();

//   setTimeout(function () {
//     contactFName.value = "";
//     contactLName.value = "";
//     contactPhone.value = "";
//     contactEmail.value = "";
//   }, 500);
// });

// event listener for LESSONS clickable at the end of HOME page
lessonsRef.addEventListener("click", function (e) {
  // takes USER to LESONS PAGE and hides all others
  home.classList.add("main-hide");
  lessons.classList.remove("main-hide");
  about.classList.add("main-hide");
  contact.classList.add("main-hide");
  map.classList.add("main-hide");
});

// event listener for CONTACT clickable text at the end of
// LESSONS page
contactRef.addEventListener("click", function (e) {
  // takes user to CONTACT page and hides all others
  home.classList.add("main-hide");
  lessons.classList.add("main-hide");
  about.classList.add("main-hide");
  contact.classList.remove("main-hide");
  map.classList.add("main-hide");
});

// event listener for CONTACT clickable text at end of ABOUT ME
contact2Ref.addEventListener("click", function (e) {
  // Takes user to CONTACT page and hides all others
  home.classList.add("main-hide");
  lessons.classList.add("main-hide");
  about.classList.add("main-hide");
  contact.classList.remove("main-hide");
  map.classList.add("main-hide");
});
