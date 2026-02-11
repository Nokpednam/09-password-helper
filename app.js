const express = require('express');
const app = express();
app.use(express.json());

app.get('/password/generate', (req, res) => {
    res.json({ password: Math.random().toString(36).slice(-8) });
});

app.post('/password/strength', (req, res) => {
    const len = req.body.password.length; res.json({ score: len > 8 ? 10 : 5 });
});

app.post('/password/hash', (req, res) => {
    res.json({ hash: Buffer.from(req.body.password).toString('base64') });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
