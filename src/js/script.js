// Botão de voltar ao topo
const topButton = document.createElement('button');
topButton.id = 'backToTop';
document.body.appendChild(topButton);

window.addEventListener('scroll', function() {
    if (window.scrollY > 200) {
        topButton.style.display = 'block';
    } else {
        topButton.style.display = 'none';
    }
});

topButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Função para FAQ interativa
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', function() {
        const answer = this.querySelector('.faq-answer');
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});

// Gráfico de Aplicações da IA
const ctx = document.getElementById('appChart').getContext('2d');
const appChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Saúde', 'Finanças', 'Transporte', 'Assistentes Virtuais'],
        datasets: [{
            label: 'Número de Aplicações',
            data: [12, 19, 8, 15],
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

