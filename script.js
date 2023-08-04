const form = document.querySelector("form");
const years = document.querySelector(".years span");
const months = document.querySelector(".months span");
const days = document.querySelector(".days span");
const date = new Date();
let currY = date.getFullYear();
let currM = date.getMonth() + 1;
let currD = date.getDate();
const yearMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// function getAge(yearValue, monthValue, dayValue) {
//   const birth = new Date(yearValue, monthValue + 1, dayValue);
//   const diff = new Date(date.valueOf() - birth.valueOf());
//   console.log(diff);
//   return Math.abs(diff.getFullYear() - 1970);
// }

form.addEventListener("submit", e => {
  e.preventDefault();

  if (form.day.value < 1 || form.day.value > 31 || !form.day.value) {
    form.day.style.borderColor = "red";
  } else {
    if (form.day.value > currD) {
      currD = currD + yearMonths[currM - 1];
      currM = currM - 1;
    }

    days.textContent = Math.abs(form.day.value - currD);
  }

  if (form.month.value < 1 || form.month.value > 12 || !form.month.value) {
    form.month.style.borderColor = "red";
  } else {
    if (form.month.value > currM) {
      currM = currM + 12;
      currY = currY - 1;
    }
    months.textContent = Math.abs(form.month.value - currM);
  }

  if (
    form.year.value < 0 ||
    form.year.value > date.getFullYear() ||
    !form.year.value
  ) {
    form.year.style.borderColor = "red";
  } else {
    years.textContent = Math.abs(form.year.value - currY);
  }
});
