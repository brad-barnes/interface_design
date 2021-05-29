"use strict";

const privBtn = document.getElementById("privBtn");
const privBtnFooter = document.getElementById("privBtnFooter");

privBtn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("TEST TEST TEST");
  window.location.href = "index.html";
});

privBtnFooter.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "index.html";
});
