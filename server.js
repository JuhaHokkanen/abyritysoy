const express = require('express');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;


// Palvelin static-tiedostoille
app.use(express.static('public'));

// Endpoint JSON-tietojen hakemiseksi
app.get('/api/henkilokunta', (req, res) => {
    fs.readFile('./employees.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Tiedostoa ei löydy' });
            return;
        }
        res.json(JSON.parse(data));
    });
});

// Palvelin käynnissä
app.listen(PORT, () => {
    console.log(`Palvelin käynnissä portissa ${PORT}`);
});