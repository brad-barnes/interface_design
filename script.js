"use strict";

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

dropBtn.addEventListener("click", function (e) {
  e.preventDefault();

  dropContent.classList.toggle("hide");
});

dropContent.addEventListener("click", function (e) {
  if (e.target.tagName.toLowerCase() === "a") {
    dropContent.classList.toggle("hide");

    const mainID = e.target.toString();

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

nav.addEventListener("click", function (e) {
  if (e.target.tagName.toLowerCase() === "a") {
    // dropContent.classList.toggle("hide");

    const mainID = e.target.toString();

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

    const mainID = e.target.toString();

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

closeDrop.addEventListener("click", function (e) {
  e.preventDefault();
  dropContent.classList.toggle("hide");
});

subscribe.addEventListener("click", function (e) {
  e.preventDefault();

  // makes modal background to darken screen and modal window VISIBLE
  modal.style.display = "block";
  // Blurs regular content under modal window a bit for effect
  container.classList.add("is-blurred");
  dropContent.classList.remove("hide");
});

modalClose.addEventListener("click", function (e) {
  e.preventDefault();

  modal.style.display = "none";
  container.classList.remove("is-blurred");
});

window.addEventListener("click", function (e) {
  if (e.target == modal) {
    modal.style.display = "none";
    container.classList.remove("is-blurred");
  }
});

formBtn.addEventListener("click", function (e) {
  e.preventDefault();

  mainSuccess.textContent = "SUCCESSFUL SUBMISSION!";

  setTimeout(function () {
    fNameAside.value = "";
    lNameAside.value = "";
    emailAside.value = "";

    modal.style.display = "none";
    container.classList.remove("is-blurred");
    mainSuccess.textContent = "";
  }, 3000);
});

contactBtn.addEventListener("click", function (e) {
  e.preventDefault();

  contactSuccess.textContent = "SUCCESSFUL SUBMISSION!";

  setTimeout(function () {
    contactFName.value = "";
    contactLName.value = "";
    contactPhone.value = "";
    contactEmail.value = "";
    contactTextArea.value = "";

    modal.style.display = "none";
    container.classList.remove("is-blurred");
    contactSuccess.textContent = "";
  }, 3000);
});

modalBtn.addEventListener("click", function (e) {
  e.preventDefault();

  success.textContent = "SUCCESSFUL SUBMISSION!";

  setTimeout(function () {
    fName.value = "";
    lName.value = "";
    email.value = "";

    modal.style.display = "none";
    container.classList.remove("is-blurred");
    success.textContent = "";
  }, 3000);
});

window.addEventListener("load", function () {
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

contactBtn.addEventListener("click", function (e) {
  e.preventDefault();

  setTimeout(function () {
    contactFName.value = "";
    contactLName.value = "";
    contactPhone.value = "";
    contactEmail.value = "";
  }, 500);
});

lessonsRef.addEventListener("click", function (e) {
  home.classList.add("main-hide");
  lessons.classList.remove("main-hide");
  about.classList.add("main-hide");
  contact.classList.add("main-hide");
  map.classList.add("main-hide");
});

contactRef.addEventListener("click", function (e) {
  home.classList.add("main-hide");
  lessons.classList.add("main-hide");
  about.classList.add("main-hide");
  contact.classList.remove("main-hide");
  map.classList.add("main-hide");
});

contact2Ref.addEventListener("click", function (e) {
  home.classList.add("main-hide");
  lessons.classList.add("main-hide");
  about.classList.add("main-hide");
  contact.classList.remove("main-hide");
  map.classList.add("main-hide");
});
