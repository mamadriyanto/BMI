// script.js

document.getElementById("calculate").addEventListener("click", function () {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);

    if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
        document.getElementById("result").innerHTML = "Please enter valid weight and height.";
    } else {
        const bmi = weight / Math.pow(height / 100, 2);
        let category = "";

        if (bmi < 18.5) {
            category = "Underweight";
        } else if (bmi >= 18.5 && bmi < 25) {
            category = "Normal weight";
        } else if (bmi >= 25 && bmi < 30) {
            category = "Overweight";
        } else {
            category = "Obesity";
        }

        document.getElementById("result").innerHTML = `Your BMI is ${bmi.toFixed(2)}. You are ${category}.`;
    }
});
