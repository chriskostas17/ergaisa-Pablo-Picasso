const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const filePath = path.join(__dirname, '../data/links.json');

router.get('/', (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Σφάλμα ανάγνωσης δεδομένων' });
  }
});
router.post('/', (req, res) => {
  const { title, description, link, category } = req.body;

  // Ελέγχει τα δεδομένα
  if (!title || !description || !link || !category) {
    return res.status(400).json({ message: 'Όλα τα πεδία είναι υποχρεωτικά.' });
  }

  const validCategories = ['Διαδικτυακοί Πόροι', 'Βιβλία'];
  if (!validCategories.includes(category)) {
    return res.status(400).json({ message: 'Η κατηγορία δεν είναι έγκυρη.' });
  }

  // Διαβάζει και ενημερώνει το JSON αρχείο
  const filePath = path.join(__dirname, '../data/links.json');
  const links = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  links.push({ title, description, link, category });

  fs.writeFileSync(filePath, JSON.stringify(links, null, 2));
  res.status(201).json({ message: 'Ο σύνδεσμος προστέθηκε επιτυχώς.' });
});


module.exports = router;
