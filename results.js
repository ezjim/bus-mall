const results = JSON.parse(localStorage.getItem('votes'));

const data = [];
const labelColors = ['red', 'white', 'green'];

results.forEach(item => {
    data.push(item.votes);
    labels.push(item.id);
});

chart.defaults.global.defaultFontSize = 20;
chart.defaults.global.defaultFontFamily = 'sans-serif'

const ctx = document.getElementById('chart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labelColors,
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