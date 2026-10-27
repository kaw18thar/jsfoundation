//Example-1
document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    let para = document.getElementById("myParagraph");
    para.textContent = "Changed by JavaScript!";
  });
//Example-2
document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    let unli = document.getElementById("citiesList");
    unli.firstElementChild.classList.add("highlight");
  });
document.getElementById("removeDot").addEventListener("click", function () {
  let uli = document.getElementById("citiesList");
  uli.style.listStyle = "none";
});
// Example-3
document.getElementById("changeOrder").addEventListener("click", function () {
  let coffeeType = document.getElementById("coffeeType");
  coffeeType.textContent = "Espresso";
  coffeeType.style.backgroundColor = "#3e5e3f";
});
// Example-4
document.getElementById("addNewItem").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "Eggs";
  document.getElementById("shoppingList").appendChild(newItem);
});
//Example-5
document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    let taskList = document.getElementById("taskList");
    taskList.lastElementChild.remove();
  });
//Example 6
document.getElementById("clickMeButton").addEventListener("click", function () {
  document.getElementById("headerH").style.backgroundColor = "#3e3e3e";
  let arr = document.getElementsByTagName("ul");
  for (u of arr) {
    u.style.listStyle = "none";
  }
});
//Example 7
document.getElementById("teaList").addEventListener("click", function (event) {
  if (event.target && event.target.matches(".teaItem")) {
    // alert("You selected " + event.target.textContent);
  }
});
//Example 8
document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    console.log(feedback);
    document.getElementById("feedbackDisplay").textContent =
      `Feedback is: ${feedback}`;
    document.getElementById("feedbackDisplay").style.backgroundColor = "#fff";
    document.getElementById("feedbackDisplay").style.color = "#3e3ce3";
  });
//Example 9
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent = "DOM fully loaded";
});
//Example 10
document
  .getElementById("toggleHighlight")
  .addEventListener("click", function () {
    let descriptionText = document.getElementById("descriptionText");
    descriptionText.classList.toggle("highlight");
  });
