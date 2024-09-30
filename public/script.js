function loadPage(page) {
    let content;
    if (page === 'paysivu') {
        content = "<h2>Tervetuloa Ab Yritys Oyn sivuille!</h2><p>Täällä on yrityksen tietoa.</p>";
    } else if (page === 'yritysesittely') {
        content = "<h2>Yritysesittely</h2><p>Meidän yritys on erikoistunut tarjoamaan parasta mahdollista palvelua.</p>";
    } else if (page === 'yhteystiedot') {
        content = "<h2>Yhteystiedot</h2><p>Ota yhteyttä info@yritys.fi</p>";
    }
    document.getElementById('main_alue').innerHTML = content;
}

function loadHenkilokunta() {
    fetch('/api/henkilokunta')
        .then(response => response.json())
        .then(data => {
            let table = "<h2>Henkilökunnan tiedot</h2><table><tr><th>Nimi</th><th>Tehtävä</th></tr>";
            data.forEach(member => {
                table += `<tr><td>${member.nimi}</td><td>${member.tehtava}</td></tr>`;
            });
            table += "</table>";
            document.getElementById('main_alue').innerHTML = table;
        })
        .catch(error => {
            document.getElementById('main_alue').innerHTML = "Virhe henkilökunnan tietojen lataamisessa.";
        });
}

const themeToggle = document.getElementById('themeToggle');
const body = document.body;
let isDarkMode = false;

themeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    body.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});

// Luetaan tallennettu teema
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    isDarkMode = true;
}