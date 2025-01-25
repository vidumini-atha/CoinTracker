// Initialize total income and income data
let totalIncome = 0;
let currentMonth = "";
let incomeData = {};

// Function to add income
function addIncome() {
    const incomeTypeElement = document.getElementById('incomeType');
    const incomeType = incomeTypeElement.value;

    const incomeInput = document.getElementById('incomeInput');
    const amount = parseFloat(incomeInput.value);

    if (!isNaN(amount) && amount > 0) {
        if (!incomeData[currentMonth]) {
            incomeData[currentMonth] = {};
        }

        if (!incomeData[currentMonth][incomeType]) {
            incomeData[currentMonth][incomeType] = 0;
        }

        incomeData[currentMonth][incomeType] += amount;

        updateIncomeList(currentMonth);
        updateTotalIncome(currentMonth);

        incomeInput.value = '';
    } else {
        alert('Please enter a valid positive number for income.');
    }
}

// Function to switch to a new month
function switchMonth() {
    const monthPicker = document.getElementById('monthPicker');
    const selectedMonth = monthPicker.value;

    // Switch to the selected month
    currentMonth = selectedMonth;

    // Update the income list and total income display for the selected month
    updateIncomeList(currentMonth);
    updateTotalIncome(currentMonth);
}

// Function to update the income list display for a specific month
function updateIncomeList(month) {
    const incomeListElement = document.getElementById('incomeList');
    incomeListElement.innerHTML = '';

    if (incomeData[month]) {
        for (const [source, amount] of Object.entries(incomeData[month])) {
            const sourceItem = document.createElement('p');
            sourceItem.textContent = `${source}: Rs.${amount.toFixed(2)}`;
            incomeListElement.appendChild(sourceItem);
        }
    }
}

// Function to update the total income display for a specific month
function updateTotalIncome(month) {
    const totalIncomeElement = document.getElementById('totalIncome');
    totalIncome = 0;

    if (incomeData[month]) {
        for (const incomeType in incomeData[month]) {
            totalIncome += incomeData[month][incomeType];
        }
    }

    totalIncomeElement.textContent = totalIncome.toFixed(2);
}