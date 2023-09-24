const express = require('express');
const { readFile } = require('fs');
const { join } = require('path');
const Fuse = require('fuse.js');

const app = express();
const PORT = 3001;

app.get('/api/data', (req, res) => {
    readFile(join(__dirname, 'data.json'), 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading data');
        }

        const products = JSON.parse(data);
        let results = products;

        if (req.query.search) {
            const options = {
                keys: ['title', 'description'],
                threshold: 0.4  // Adjust threshold for more or less strict matching
            };
            const fuse = new Fuse(products, options);
            results = fuse.search(req.query.search).map(({ item }) => item);
        }

        setTimeout(() => res.json(results), 2000); // simulate latency
    });
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});