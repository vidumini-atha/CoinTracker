new Chart(document.getElementById('pie-chart'), {
    type: 'doughnut',
    data: {
        labels: ["Income", "Expenses"],
        datasets: [{
            backgroundColor: ["#0CD872",  "#068244"
            ],
            data: [140000 , 80000]
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Pie Chart for admin panel'
        },
        responsive: true
    }
});





const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Income', 'Expense', 'Balance'],
        datasets: [{
            
            label: 'January',
            backgroundColor: "#7a942e", 
            data: [147000, 72000, 75000],
            borderWidth: 1
        },
            {
                label: 'February',
                backgroundColor: "#009b7d",
                data: [140000, 80000, 52000],
                borderWidth: 1
            }]
    },
    options: {
        interaction: {
            mode:'index'
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
