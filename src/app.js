/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  window.onload = function() {
    //write your code here
    let who = ["The dog", "My grandma", "His turtle", "My bird", "gitpod"];
    let action = ["ate", "peed", "crushed", "broke"];
    let what = ["my homework", "the keys", "the car"];
    let when = [
      "before the class",
      "right on time",
      "when I finished",
      "during my lunch",
      "while I was praying"
    ];
    let excuses = `${randomArrays(who)} ${randomArrays(action)} ${randomArrays(
      what
    )} ${randomArrays(when)}`;
    let element = document.getElementById("excuse");
    element.innerHTML = excuses;
  };
  function randomArrays(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
};
