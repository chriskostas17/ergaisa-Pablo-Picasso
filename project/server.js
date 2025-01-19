const express = require('express');
const path = require('path');
const exhibitionsRoutes = require('./routes/exhibitions');
const linksRoutes = require('./routes/links');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const app = express();
const PORT = 3000;

// Εξυπηρέτηση στατικών αρχείων από τον φάκελο "public"
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
// Διαχείριση διαδρομών
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'project2.html'));
});
app.use('/api/auth', authRoutes);
app.use('/api/exhibitions', exhibitionsRoutes);
app.use('/api/links', linksRoutes);
// Ξεκίνα τον server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
