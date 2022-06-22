// To pull calorie information on food
const url = 'https://api.calorieninjas.com/v1/nutrition?query=';
const formEl = document.getElementById('form');
const bodyEL = document.querySelector('body');
const calorieCounterEl = document.getElementById('calorieCounter');
let totalCalories = 0;

const foodTrackerEl = document.getElementById('foodtracker');

// For user info to calculate suggested calorie intake
const calorieCalculatorEl = document.getElementById('calculator');
const ageEl = document.getElementById('ageBar');
const weightEl = document.getElementById('weightBar');
const genderId = document.querySelectorAll('.genderId');
const dropDown = document.getElementById('dropdown');
const calcSuggestEl = document.getElementById('suggestion');

const calcSuggestText = 'Suggested daily calorie intake: ';
const totalCalorieCount = 'Total Calories ';

// console.log(dropDown.options[1]);
function getData(event) {
  event.preventDefault();
  const inputBarEl = document.getElementById('inputBar');
  const query = inputBarEl.value;
  // let h1El = document.createElement('h1');
  const foodItemEl = document.createElement('h1');

  fetch(`${url}${query}`, {
    method: 'GET',
    headers: {
      'X-Api-Key': API_KEY,
    },
  })
    .then((data) => data.json())
    .then((data) => {
      console.log(data.items[0].calories);
      // foodTrackerEl.appendChild(h1El);
      // h1El.classList.add('calorieOutput');
      // h1El.innerHTML = query;

      foodTrackerEl.appendChild(foodItemEl);
      console.log(data.items[0].name);
      foodItemEl.innerHTML = `${data.items[0].name} calories: ${data.items[0].calories}`;
      foodItemEl.classList.add('calorieOutput');
      totalCalories = Math.round(totalCalories + data.items[0].calories);

      calorieCounterEl.innerHTML = `${totalCalorieCount}${totalCalories}`;
    })
    .catch(() => console.log('error'));
}

function calculateCalories(event) {
  event.preventDefault();
  // console.log(calorieSuggestionEl);

  let genderValue;
  for (i = 0; i < genderId.length; i++) {
    if (genderId[i].checked) genderValue = genderId[i].value;
  }

  let dropDownValue = dropDown.options[dropDown.selectedIndex];
  // console.log(dropDownValue.value);

  if (
    genderValue === 'male' &&
    dropDownValue.value === 'Sedentary (little or no excercise)'
  ) {
    const calculatedCalories = Math.round(
      1.2 *
        (66.47 +
          13.75 * parseInt(weightEl.value) +
          5.003 * parseInt(height.value) -
          6.755 * parseInt(ageEl.value)),
    );
    calcSuggestEl.innerHTML = `${calcSuggestText}${calculatedCalories}`;
  } else if (
    genderValue === 'female' &&
    dropDownValue.value === 'Sedentary (little or no excercise)'
  ) {
    const calculatedCalories = Math.round(
      1.2 *
        (655.1 +
          9.563 * parseInt(weightEl.value) +
          1.85 * parseInt(height.value) -
          4.676 * parseInt(ageEl.value)),
    );
    calcSuggestEl.innerHTML = `${calcSuggestText}${calculatedCalories}`;
  } else if (
    genderValue === 'male' &&
    dropDownValue.value === 'Light Activity(excercise 1-3 days/week)'
  ) {
    const calculatedCalories = Math.round(
      1.375 *
        (66.47 +
          13.75 * parseInt(weightEl.value) +
          5.003 * parseInt(height.value) -
          6.755 * parseInt(ageEl.value)),
    );
    calcSuggestEl.innerHTML = `${calcSuggestText}${calculatedCalories}`;
  } else if (
    genderValue === 'female' &&
    dropDownValue.value === 'Light Activity(excercise 1-3 days/week)'
  ) {
    const calculatedCalories = Math.round(
      1.375 *
        (655.1 +
          9.563 * parseInt(weightEl.value) +
          1.85 * parseInt(height.value) -
          4.676 * parseInt(ageEl.value)),
    );
    calcSuggestEl.innerHTML = `${calcSuggestText}${calculatedCalories}`;
  } else if (
    genderValue === 'male' &&
    dropDownValue.value === 'Moderate Activity(excercise 3-5 days/week)'
  ) {
    const calculatedCalories = Math.round(
      1.55 *
        (66.47 +
          13.75 * parseInt(weightEl.value) +
          5.003 * parseInt(height.value) -
          6.755 * parseInt(ageEl.value)),
    );
    calcSuggestEl.innerHTML = `${calcSuggestText}${calculatedCalories}`;
  } else if (
    genderValue === 'female' &&
    dropDownValue.value === 'Moderate Activity(excercise 3-5 days/week)'
  ) {
    const calculatedCalories = Math.round(
      1.55 *
        (655.1 +
          9.563 * parseInt(weightEl.value) +
          1.85 * parseInt(height.value) -
          4.676 * parseInt(ageEl.value)),
    );
    calcSuggestEl.innerHTML = `${calcSuggestText}${calculatedCalories}`;
  } else if (
    genderValue === 'male' &&
    dropDownValue.value === 'Active(excercise 6-7days/week)'
  ) {
    const calculatedCalories = Math.round(
      1.9 *
        (66.47 +
          13.75 * parseInt(weightEl.value) +
          5.003 * parseInt(height.value) -
          6.755 * parseInt(ageEl.value)),
    );
    calcSuggestEl.innerHTML = `${calcSuggestText}${calculatedCalories}`;
  } else if (
    genderValue === 'female' &&
    dropDownValue.value === 'Active(excercise 6-7days/week)'
  ) {
    const calculatedCalories = Math.round(
      1.9 *
        (655.1 +
          9.563 * parseInt(weightEl.value) +
          1.85 * parseInt(height.value) -
          4.676 * parseInt(ageEl.value)),
    );
    calcSuggestEl.innerHTML = `${calcSuggestText}${calculatedCalories}`;
  } else if (
    genderValue === 'male' &&
    dropDownValue.value === 'Very Active(heavy excercise 6-7 days/week)'
  ) {
    const calculatedCalories = Math.round(
      1.725 *
        (66.47 +
          13.75 * parseInt(weightEl.value) +
          5.003 * parseInt(height.value) -
          6.755 * parseInt(ageEl.value)),
    );
    calcSuggestEl.innerHTML = `${calcSuggestText}${calculatedCalories}`;
  } else if (
    genderValue === 'female' &&
    dropDownValue.value === 'Very Active(heavy excercise 6-7 days/week)'
  ) {
    const calculatedCalories = Math.round(
      1.725 *
        (655.1 +
          9.563 * parseInt(weightEl.value) +
          1.85 * parseInt(height.value) -
          4.676 * parseInt(ageEl.value)),
    );
    calcSuggestEl.innerHTML = `${calcSuggestText}${calculatedCalories}`;
  }
}

form.addEventListener('submit', getData);
calorieCalculatorEl.addEventListener('submit', calculateCalories);
