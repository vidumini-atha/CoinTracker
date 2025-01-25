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
/*document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.container');
    const scrollAmount = 880; // Adjust this value based on your content width

    document.getElementById('scrollLeft').addEventListener('click', function () {
        container.style.transform = `translateX(${scrollAmount}px)`;
    });

    document.getElementById('scrollRight').addEventListener('click', function () {
        container.style.transform = `translateX(-${scrollAmount}px)`;
    });
});*/
document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.container');
    const scrollAmount = 700; // Adjust this value based on your content width

    document.getElementById('scrollLeft').addEventListener('click', function () {
        scroll(-scrollAmount);
    });

    document.getElementById('scrollRight').addEventListener('click', function () {
        scroll(scrollAmount);
    });

    function scroll(amount) {
        const currentTranslateX = getCurrentTranslateX(container);
        const newTranslateX = currentTranslateX + amount;

        // Check if scrolling goes beyond the left or right end
        if (newTranslateX > 0) {
            container.style.transition = 'transform 0.000001s ease-in-out';
            container.style.transform = `translateX(-${container.scrollWidth}px)`;
            setTimeout(() => {
                container.style.transition = 'none';
                container.style.transform = `translateX(-${scrollAmount}px)`;
            }, 500);
        } else if (newTranslateX < -container.scrollWidth + container.clientWidth) {
            container.style.transition = 'translateX(0)';
           container.style.transform = 'translateX(0)';
            setTimeout(() => {
                container.style.transition = 'none';
                container.style.transform = `translateX(-${container.scrollWidth + scrollAmount}px)`;
            }, 0);
        } else {
            container.style.transform = `translateX(${newTranslateX}px)`;
        }
    }

    // Helper function to get the current translateX value
    function getCurrentTranslateX(element) {
        const style = window.getComputedStyle(element);
        const matrix = new WebKitCSSMatrix(style.transform);
        return matrix.m41;
    }
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
    window.location.href = 'updatedGoals/index.html';
}

const container = document.querySelector('.container');



  
function addNewGoal() {
    // Get the input value
    var newGoalName = document.getElementById('inputNewGoal').value;

    // Validate if the input is not empty
    if (newGoalName.trim() === '') {
        alert('Please enter a valid goal name.');
        return;
    }

    // Create a new goal box
    var newGoalBox = document.createElement('div');
    newGoalBox.classList.add('new-goal-box');
    newGoalBox.textContent = newGoalName;

    // Display the new goal box
    var newGoalDisplay = document.getElementById('newGoalDisplay');
    newGoalDisplay.appendChild(newGoalBox);

    // Optionally, you can perform other actions here

    // Clear the input box
    document.getElementById('inputNewGoal').value = '';
}

