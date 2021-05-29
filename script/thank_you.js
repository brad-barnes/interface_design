"use strict";

const privBtnFooter = document.getElementById("privBtnFooter");

privBtnFooter.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "index.html";
});
