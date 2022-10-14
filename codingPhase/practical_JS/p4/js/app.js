/****************
--- VARIABLES ---
*****************/

(labels = ["Principal & Interest", "Property Tax", "Home Insurance", "HOA"]),
  (backgroundColor = [
    "rgba(255, 99, 132, 1)",
    "rgba(54, 162, 235, 1)",
    "rgba(255, 206, 86, 1)",
    "rgba(75, 192, 192, 1)",
    "rgba(153, 102, 255, 1)",
    "rgba(255, 159, 64, 1)",
  ]),
  (borderColor = [
    "rgba(255, 99, 132, 1)",
    "rgba(54, 162, 235, 1)",
    "rgba(255, 206, 86, 1)",
    "rgba(75, 192, 192, 1)",
    "rgba(153, 102, 255, 1)",
    "rgba(255, 159, 64, 1)",
  ]);

//   declared state of form
let state = {
  price: document.querySelectorAll('[name="price"]')[0].value,
  loan_years: document.querySelectorAll('[name="loan_years"]')[0].value,
  down_payment: document.querySelectorAll('[name="down_payment"]')[0].value,
  interest_rate: document.querySelectorAll('[name="interest_rate"]')[0].value,
  property_tax: document.querySelectorAll('[name="property_tax"]')[0].value,
  home_insurance: document.querySelectorAll('[name="home_insurance"]')[0].value,
  hoa: document.querySelectorAll('[name="hoa"]')[0].value,
};

// declared variables
let totalLoan, totalMonths, monthlyInterest, monthlyPrincipalInterest, MonthlyPropertyTaxes, monthlyHomeInsurance, monthlyHOA, monthlyTotal;

/*******************
  --- FUNCTIONS ---
********************/

//   turns string into number
const getNumber = (str) => Number(str.replace(/[^0-9\.-]+/g, ""));

// initialize chart js instance
const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: labels,
    datasets: [
      {
        label: "# of Votes",
        data: [monthlyPrincipalInterest, MonthlyPropertyTaxes, monthlyHomeInsurance, monthlyHOA],
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        borderWidth: 1,
      },
    ],
  },
});
myChart.options.animation = false;

const updateInputState = (event) => {
  let name = event.target.name;
  let value = event.target.value;

  name == "price" && (value = getNumber(value));
  event.target.type == "range" && (total = document.getElementsByClassName(`total__${name}`)[0].innerHTML = `${value}`);

  state = { ...state, [name]: value };

  calculateData();
};

const calculateData = () => {
  totalLoan = state.price - state.price * (state.down_payment / 100);
  totalMonths = state.loan_years * 12;
  monthlyInterest = state.interest_rate / 100 / 12;
  monthlyPrincipalInterest = (
    totalLoan *
    ((monthlyInterest * (1 + monthlyInterest) ** totalMonths) / ((1 + monthlyInterest) ** totalMonths - 1))
  ).toFixed(2);
  MonthlyPropertyTaxes = ((state.price * (state.property_tax / 100)) / 12).toFixed(2);
  monthlyHomeInsurance = state.home_insurance / 12;
  monthlyHOA = state.hoa / 12;
  monthlyTotal =
    parseFloat(monthlyPrincipalInterest) + parseFloat(MonthlyPropertyTaxes) + parseFloat(monthlyHomeInsurance) + parseFloat(monthlyHOA);

  document.getElementsByClassName("info__numbers--principal")[0].innerHTML = parseFloat(monthlyPrincipalInterest).toFixed(2);
  document.getElementsByClassName("info__numbers--property_taxes")[0].innerHTML = parseFloat(MonthlyPropertyTaxes).toFixed(2);
  document.getElementsByClassName("info__numbers--home_insurance")[0].innerHTML = parseFloat(monthlyHomeInsurance).toFixed(2);
  document.getElementsByClassName("info__numbers--hoa")[0].innerHTML = parseFloat(monthlyHOA).toFixed(2);
  document.getElementsByClassName("info__numbers--total")[0].innerHTML = monthlyTotal.toFixed(2);

  updateChart(myChart, labels, backgroundColor);
};

const updateChart = (chart, label, color) => {
  chart.data.datasets.pop();
  chart.data.datasets.push({
    label: label,
    backgroundColor: color,
    data: [monthlyPrincipalInterest, MonthlyPropertyTaxes, monthlyHomeInsurance, monthlyHOA],
  });
  chart.options.transitions.active.animation.duration = 0;
  chart.update();
};

/***********************
--- EVENT LISTENERS ---
************************/

let inputText = document.getElementsByClassName("form-group__textInput");
for (let i = 0; i < inputText.length; i++) {
  inputText[i].addEventListener("input", updateInputState);
}
let inputSlides = document.getElementsByClassName("form-group__range-slide");
for (let i = 0; i < inputSlides.length; i++) {
  inputSlides[i].addEventListener("input", updateInputState);
}

document.getElementsByTagName("form")[0].addEventListener("submit", (event) => {
  document.getElementsByClassName("mg-page__right")[0].classList.add("mg-page__right--animate");

  event.preventDefault();
  calculateData();
});

calculateData();
