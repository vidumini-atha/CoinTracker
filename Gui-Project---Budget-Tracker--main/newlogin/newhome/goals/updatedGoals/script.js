document.addEventListener('DOMContentLoaded', function () {
    const spans = document.querySelectorAll('.progress-bar span');

    spans.forEach((span) => {
        // Remove inline width style
        span.style.width = '';

        // Add the class to trigger the animation
        span.classList.add('animate-width');

        // Set the width and innerHTML using data attributes
        span.style.width = span.dataset.width;
        span.innerHTML = span.dataset.width;
    });
});



function updateTotalAmount() {
    const totalAmountInput = document.getElementById('inputTotalAmount');
    const totalAmountSpan = document.getElementById('totalAmount');
    const newTotalAmount = parseFloat(totalAmountInput.value);

    if (!isNaN(newTotalAmount)) {
        totalAmountSpan.textContent = newTotalAmount;
    } else {
        alert('Please enter a valid total amount.');
    }
}
function redirectToUpdatedGoal() {
    // Assuming you want to redirect to "updatedGoal/index.html"
    window.location.href = 'updatedGoal/index.html';
}

function scrollSection(direction) {
    const container = document.querySelector('.container');
    const scrollAmount = 400; // Adjust this value as needed

    container.scrollLeft += scrollAmount * direction;
}
