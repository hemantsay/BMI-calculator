document.addEventListener('DOMContentLoaded', () => {

    const resultContainer = document.getElementById('result-section');




    const calculateButton = document.getElementById('calculate-button');

    calculateButton.addEventListener('click', (event) => {
        event.preventDefault();

        const height = document.getElementById('height').value;
        const weight = document.getElementById('weight').value;

        const BMI = ((weight)/(height*height)).toFixed(1);

        const result = document.createElement('div');

        // Clear previous results
        resultContainer.innerHTML = '';

        

       

        if (BMI < 18.5) {
            result.innerHTML = `Your BMI is ${BMI} and you are Underweight.`;
        } else if (BMI >= 18.5 && BMI < 24.9) {
            result.innerHTML = `Your BMI is ${BMI} and you have Normal weight.`;
        } else if (BMI >= 24.9 && BMI < 29.9) {
            result.innerHTML = `Your BMI is ${BMI} and you are Overweight.`;
        } else {
            result.innerHTML = `Your BMI is ${BMI} and you are Obese.`;
        }

        resultContainer.appendChild(result);
        




        





    })


})