const dayCounterElement = document.querySelector(".day-counter");
const resetButton = document.querySelector(".reset-button");
const incButton = document.querySelector(".increment-button");
let dayCount = localStorage.getItem("days");

dayCount === null ? 0 : displayDays(dayCount);

resetButton.addEventListener("click", () => {
  localStorage.removeItem("days");
  dayCount = 0;
  console.log(dayCount);
  displayDays(dayCount);
});

incButton.addEventListener("click", changeDayCounter);

function displayDays(dayCount) {
  dayCounterElement.textContent = dayCount;
}

function changeDayCounter() {
  dayCount++;
  displayDays(dayCount);
  saveToLocalStorage(dayCount);
}

function saveToLocalStorage(days) {
  localStorage.setItem("days", days);
}

console.log(dayCount);
