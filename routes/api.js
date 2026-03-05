const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');


router.get('/', (req, res) => {
    res.json({api:"ok"});
});


router.get('/questions/:level', (req, res) => {
    const level = req.params.level.toLowerCase();
    const filePath = path.join(__dirname, `../database/${level}/ini.json`);

    // Cek apakah file data ada
    if (fs.existsSync(filePath)) {
        const rawData = fs.readFileSync(filePath);
        const questions = JSON.parse(rawData);
        res.json(questions);
    } else {
        res.status(404).json({ error: "Jenjang tidak ditemukan" });
    }
});

module.exports = router;