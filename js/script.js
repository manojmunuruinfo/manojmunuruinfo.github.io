// Theme Toggle
document.getElementById('themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document.querySelector('.light-text').classList.toggle('hidden', isDark);
    document.querySelector('.dark-text').classList.toggle('hidden', !isDark);
});

// Load Theme
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    document.querySelector('.light-text').classList.add('hidden');
    document.querySelector('.dark-text').classList.remove('hidden');
}

// Typing Animation
document.addEventListener('DOMContentLoaded', () => {
    new Typed('#typed-quote', {
        strings: ["The pain you feel today will be the strength you feel tomorrow"],
        typeSpeed: 50,
        loop: false
    });

    // Skills Chart
    const ctx = document.getElementById('skillsChart')?.getContext('2d');
    if (ctx) {
        new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['SQL', 'Snowflake', 'Pentaho', 'Power BI', 'Hadoop', 'Leadership'],
                datasets: [{
                    label: 'Skills',
                    data: [90, 85, 80, 85, 75, 90],
                    backgroundColor: 'rgba(59, 130, 246, 0.2)',
                    borderColor: 'rgba(59, 130, 246, 1)',
                    borderWidth: 2
                }]
            },
            options: {
                scales: { r: { beginAtZero: true, max: 100 } }
            }
        });
    }
});

// Weather API
async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY'; // Replace with your API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.cod === 200) {
            document.getElementById('weatherOutput').innerHTML = `<p>${data.name}: ${data.main.temp}°C, ${data.weather[0].description}</p>`;
        } else {
            document.getElementById('weatherOutput').innerHTML = '<p>City not found!</p>';
        }
    } catch (error) {
        document.getElementById('weatherOutput').innerHTML = '<p>Error fetching weather!</p>';
    }
}

// Calculator
function calculate() {
    const expression = document.getElementById('calcInput').value;
    try {
        const result = eval(expression); // Use math.js for production
        document.getElementById('calcOutput').innerHTML = `<p>Result: ${result}</p>`;
    } catch (error) {
        document.getElementById('calcOutput').innerHTML = '<p>Invalid expression!</p>';
    }
}

// Quote Generator
async function getQuote() {
    try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        document.getElementById('quoteOutput').innerHTML = `<p>"${data.content}" — ${data.author}</p>`;
    } catch (error) {
        document.getElementById('quoteOutput').innerHTML = '<p>Error fetching quote!</p>';
    }
}

// To-Do List
function addTodo() {
    const task = document.getElementById('todoInput').value;
    if (task) {
        const li = document.createElement('li');
        li.textContent = task;
        document.getElementById('todoList').appendChild(li);
        document.getElementById('todoInput').value = '';
    }
}

// Data Query Simulator
function simulateQuery() {
    const query = document.getElementById('queryInput').value.toLowerCase();
    if (query.includes('select') && query.includes('from')) {
        document.getElementById('queryOutput').innerHTML = `<p>Query executed: Sample data retrieved (e.g., 100 rows from customers table).</p>`;
    } else {
        document.getElementById('queryOutput').innerHTML = `<p>Invalid SQL query! Use format like: SELECT * FROM table WHERE condition</p>`;
    }
}

// Blog Search
document.getElementById('blogSearch')?.addEventListener('input', (e) => {
    const search = e.target.value.toLowerCase();
    const posts = document.querySelectorAll('#blogPosts .card');
    posts.forEach(post => {
        const title = post.querySelector('h3').textContent.toLowerCase();
        const content = post.querySelector('p').textContent.toLowerCase();
        post.style.display = title.includes(search) || content.includes(search) ? 'block' : 'none';
    });
});

// Contact Form (Placeholder)
function sendMessage() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    if (name && email && message) {
        document.getElementById('contactOutput').innerHTML = `<p>Data packet sent! Thank you, ${name}.</p>`;
    } else {
        document.getElementById('contactOutput').innerHTML = `<p>Please fill all fields!</p>`;
    }
}