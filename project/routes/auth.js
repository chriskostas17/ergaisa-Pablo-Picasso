const express = require('express');
const router = express.Router();

//χρήστης για σύνδεση
const USERS = [
  { username: 'admin', password: '1234', token: 'abc123' }
];

// Endpoint για σύνδεση
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Έλεγχος στοιχείων
  const user = USERS.find(u => u.username === username && u.password === password);

  if (user) {
    res.json({ token: user.token });
  } else {
    res.status(401).json({ message: 'Λάθος στοιχεία σύνδεσης.' });
  }
});

module.exports = router;
