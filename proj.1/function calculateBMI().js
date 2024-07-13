function calculateBMI() {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  // BMI = (weight) / (height * height)
  // let BMI = (weight / ((height / 100) * (height / 100))).toFixed(2);
  let BMI = weight / ((height / 100) * (height / 100));
  var result = "";

  if (BMI < 18.5) {
    result += "Underweight :- ";
  } else if (BMI >= 18.5 && BMI < 25) {
    result += "Normal weight :- ";
  } else if (BMI >= 25 && BMI < 30) {
    result += "Overweight :- ";
  } else {
    result += "Obese :- ";
  }

  document.getElementById("result").innerText = result + BMI;
}