const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));



const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);



// Route untuk halaman utama
app.get('/', (req, res) => {
    res.render('index');
});

// Route untuk halaman kuis
app.get('/quiz/:level', (req, res) => {
    res.render('quiz', { level: req.params.level });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Quiz App GIGACHAD running at http://localhost:${PORT}`);
});