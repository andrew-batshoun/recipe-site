document.addEventListener("DOMContentLoaded", function() {

    const recipeStars = document.querySelectorAll('.recipe-page .star');
    recipeStars.forEach(star => {
        star.addEventListener('click', () => {
            const value = star.getAttribute('data-value');

            recipeStars.forEach(star => {
                if (star.getAttribute('data-value') <= value) {
                    star.classList.add('filled');
                } else {
                    star.classList.remove('filled');
                }
            });
        });
    });



    const form = document.getElementById('suggestion-form');
    const submittedDataSection = document.getElementById('submitted-data');
    const dataContainer = document.getElementById('data');
    const errorMessage = document.getElementById('error-message');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const recipeName = document.getElementById('recipe-name').value;
            const ingredients = document.getElementById('ingredients').value;
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const agree = document.getElementById('agree').checked;

            if (!recipeName || !ingredients || !name || !email || !agree) {
                errorMessage.textContent = 'Please fill in all fields and agree to the terms and conditions.';
                return;
            }

            const submittedData = `
                <p><strong>Recipe Name:</strong> ${recipeName}</p>
                <p><strong>Ingredients:</strong> ${ingredients}</p>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
            `;

            dataContainer.innerHTML = submittedData;
            submittedDataSection.style.display = 'block';
            form.style.display = 'none';

            errorMessage.textContent = '';
        });

        // Enable submit button when checkbox is checked
        const agreeCheckbox = document.getElementById('agree');
        const submitBtn = document.getElementById('submit-btn');
        agreeCheckbox.addEventListener('change', function() {
            submitBtn.disabled = !this.checked;
        });
    }
});
