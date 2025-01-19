const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const filePath = path.join(__dirname, '../data/exhibitions.json');

router.get('/', (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Σφάλμα ανάγνωσης δεδομένων' });
  }
});
router.post('/', (req, res) => {
  const { title, location, date, link, category } = req.body;

  // Ελέγξτε αν όλα τα πεδία είναι παρόντα
  if (!title || !location || !date || !link || !category) {
    return res.status(400).json({ message: 'Όλα τα πεδία είναι υποχρεωτικά.' });
  }

  // Έγκυρες κατηγορίες
  const validCategories = ['New York', 'Paris', 'London'];

  if (!validCategories.includes(category)) {
    return res.status(400).json({ message: 'Η κατηγορία δεν είναι έγκυρη.' });
  }

  // Προσθήκη της νέας έκθεσης
  const newExhibition = { title, location, date, link, category };

  const filePath = path.join(__dirname, '../data/exhibitions.json');
  const exhibitions = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  exhibitions.push(newExhibition);

  fs.writeFileSync(filePath, JSON.stringify(exhibitions, null, 2));

  res.status(201).json({ message: 'Η έκθεση προστέθηκε επιτυχώς.' });
});
router.delete('/:title', (req, res) => {
  const { title } = req.params;

  const filePath = path.join(__dirname, '../data/exhibitions.json');
  let exhibitions = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  // Φιλτράρει τις εκθέσεις και αφαιρεί αυτή με το συγκεκριμένο title
  const updatedExhibitions = exhibitions.filter(exhibition => exhibition.title !== title);

  // Αν δεν βρέθηκε η έκθεση
  if (updatedExhibitions.length === exhibitions.length) {
    return res.status(404).json({ message: 'Η έκθεση δεν βρέθηκε.' });
  }

  // Ενημέρωση του αρχείου
  fs.writeFileSync(filePath, JSON.stringify(updatedExhibitions, null, 2));
  res.status(200).json({ message: 'Η έκθεση αφαιρέθηκε επιτυχώς.' });
});


module.exports = router;
