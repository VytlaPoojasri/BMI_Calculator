document.getElementById('calculate').addEventListener('click', function() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters

    if (isNaN(weight) || isNaN(height) || height <= 0) {
        document.getElementById('result').innerText = 'Please enter valid weight and height.';
    } else {
        const bmi = weight / (height * height);
        const roundedBMI = bmi.toFixed(2);

        let category = '';
        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi < 24.9) {
            category = 'Normal weight';
        } else if (bmi < 29.9) {
            category = 'Overweight';
        } else {
            category = 'Obese';
        }

        const categoryImage = document.createElement('img');
        categoryImage.className = 'category-image';
        categoryImage.src = `${category.toLowerCase()}.png`;
        categoryImage.alt = category;

        const resultElement = document.getElementById('result');
        resultElement.innerHTML = `<p>Your BMI: <span class="${category.toLowerCase()}">${roundedBMI}</span></p>`;
        resultElement.appendChild(categoryImage);
        resultElement.appendChild(document.createElement('br')); // Add a line break
        resultElement.appendChild(document.createTextNode(category));
    }
});

