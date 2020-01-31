const results = JSON.parse(localStorage.getItem('votes'));

const labels = [];
const data = [];
const labelColors = ['red', 'white', 'green', 'blue', 'orange', 'purple', 'pink', 'aquamarine', 'brown', 'black', 'lightblue', 'violet', 'grey', 'maroon',];

results.forEach(item => {
    data.push(item.votes);
    labels.push(item.id);
});


const ctx = document.getElementById('chart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: '# of Votes',
            data: data,
            backgroundColor: labelColors
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
// myChart.defaults.global.defaultFontSize = 20;
// myChart.defaults.global.defaultFontFamily = 'sans-serif';