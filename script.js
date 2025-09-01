async function uploadImage() {
    const fileInput = document.getElementById('imageUpload');
    const file = fileInput.files[0];
    const resultDiv = document.getElementById('result');

    if (!file) {
        resultDiv.innerHTML = "<p style='color:red;'>Please select an image first!</p>";
        return;
    }

    const formData = new FormData();
    formData.append('file', file);

    resultDiv.innerHTML = "Analyzing... ⏳";

    try {
        const response = await fetch('https://your-backend-url.onrender.com/predict', {
            method: 'POST',
            body: formData
        });

        const data = await response.json();
        resultDiv.innerHTML = `<h3>Disease: ${data.disease}</h3>
                                <p>Solution: ${data.solution}</p>`;
    } catch (error) {
        resultDiv.innerHTML = "<p style='color:red;'>Error analyzing image. Try again!</p>";
    }
}
