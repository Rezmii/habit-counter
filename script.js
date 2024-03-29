const dayCounterElement = document.querySelector(".day-counter");
const resetButton = document.querySelector(".reset-button");
const incButton = document.querySelector(".increment-button");
const progressElement = document.querySelector(".progress");
const progressStatsElement = document.querySelector(".progress-stats");
let dayCount = localStorage.getItem("days");
let restOfTheDays = 100;

const data = {
  labels: ["Ukończone", "Nieukończone"],
  datasets: [
    {
      label: "My First Dataset",
      data: [dayCount, restOfTheDays],
      backgroundColor: ["lightgreen", "lightblue"],
      hoverOffset: 4,
      borderColor: "black",
    },
  ],
};

let myChart = new Chart("myChart", {
  type: "pie",
  data: data,
});

if (dayCount !== null) {
  displayStats();
} else dayCount = 0;

resetButton.addEventListener("click", () => {
  localStorage.removeItem("days");
  dayCount = 0;
  displayStats();
});

incButton.addEventListener("click", () => {
  changeDayCounter();
});

function displayDays(dayCount) {
  dayCounterElement.textContent = dayCount;
}

function changeDayCounter() {
  dayCount++;
  displayStats();
  saveToLocalStorage(dayCount);
}

function saveToLocalStorage(days) {
  localStorage.setItem("days", days);
}

function displayProgress(progressCount) {
  let percentProgres;
  if (progressCount <= 100) {
    percentProgres = progressCount + "%";

    progressElement.style.width = percentProgres;
    progressStatsElement.textContent = `${progressCount}/100`;
  }
}

function displayStats() {
  displayDays(dayCount);
  displayProgress(dayCount);
  updateGraph();
}

function updateGraph() {
  restOfTheDays = 100 - dayCount;
  myChart.data.datasets[0].data[0] = dayCount;
  myChart.data.datasets[0].data[1] = restOfTheDays;
  myChart.update();
}
