document.addEventListener('DOMContentLoaded', () => {
  // Όταν πατάς "Διαχείριση Εκθέσεων"
  document.getElementById('manage-exhibitions').addEventListener('click', () => {
    manageExhibitions();
  });

  // Όταν πατάς "Διαχείριση Συνδέσμων"
  document.getElementById('manage-links').addEventListener('click', () => {
    manageLinks();
  });
});


document.addEventListener('DOMContentLoaded', () => {
  // Κρύβει όλες τις υποκατηγορίες αρχικά
  document.querySelectorAll('.aside-section').forEach(section => {
    section.classList.add('hidden');
  });

  // Όταν ο χρήστης πατήσει "Εκθέσεις", εμφανίζει τις υποκατηγορίες
  document.querySelectorAll('a[data-section]').forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const section = event.target.getAttribute('data-section');

      // Αν είναι Εκθέσεις, εμφανίζει το μενού με τις υποκατηγορίες
      if (section === 'exhibitions') {
        showAsideSection('aside-exhibitions');
        clearContent(); // Καθαρίζει το περιεχόμενο
      }
    });
  });
  
  // Όταν ο χρήστης επιλέξει New York, Paris, London, φορτώνει τα δεδομένα
  document.querySelectorAll('a[data-subsection]').forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const subsection = event.target.getAttribute('data-subsection');
      if (subsection === 'Exhibitions-New-York') {
        fetchExhibitionsByCategory('New York');
      } else if (subsection === 'Exhibitions-Paris') {
        fetchExhibitionsByCategory('Paris');
      } else if (subsection === 'Exhibitions-London') {
        fetchExhibitionsByCategory('London');
      }

    });
  });
});

// Εμφανίζει την υποκατηγορία
function showAsideSection(id) {
  document.querySelectorAll('.aside-section').forEach(section => {
    section.classList.add('hidden');
  });
  document.getElementById(id).classList.remove('hidden');
}



// Φορτώνει εκθέσεις ανά κατηγορία
function fetchExhibitionsByCategory(category) {
  fetch('/api/exhibitions')
    .then(response => response.json())
    .then(data => {
      const filteredData = data.filter(exhibition => exhibition.category === category);
      displayExhibitions(filteredData);
    })
    .catch(error => console.error('Σφάλμα:', error));
}

// Εμφανίζει τις εκθέσεις σε πίνακα
function displayExhibitions(data) {
  const content = document.getElementById('content');
  content.innerHTML = `<h2>Εκθέσεις (${data[0]?.category || ''})</h2>`;

  if (data.length === 0) {
    content.innerHTML += '<p>Δεν υπάρχουν διαθέσιμες εκθέσεις.</p>';
    return;
  }

  let table = `
    <table class="table" border="1" style="width: 80%; border-collapse: collapse;">
      <tr>
        <th>Τίτλος</th>
        <th>Τοποθεσία</th>
        <th>Ημερομηνία</th>
        <th>Περισσότερα</th>
        <th>Ενέργειες</th>
      </tr>
  `;

  data.forEach(exhibition => {
    table += `
      <tr>
        <td>${exhibition.title}</td>
        <td>${exhibition.location}</td>
        <td>${exhibition.date}</td>
        <td><a href="${exhibition.link}" target="_blank">Δείτε περισσότερα</a></td>
        <td ><button class="del-but" onclick="deleteExhibition('${exhibition.title}')">Διαγραφή</button></td>
      </tr>
    `;
  });

  table += '</table>';
  content.innerHTML += table;
}


function manageExhibitions() {
  const content = document.getElementById('content');
  content.innerHTML = `
    <h2>Διαχείριση Εκθέσεων</h2>
    <p>Προσθέστε μια νέα έκθεση με τα παρακάτω στοιχεία:</p>
    <form id="add-exhibition-form">
      <label for="title">Τίτλος:</label>
      <input type="text" id="title" name="title" placeholder="Τίτλος έκθεσης" required><br>
      
      <label for="location">Τοποθεσία:</label>
      <input type="text" id="location" name="location" placeholder="Τοποθεσία (New York, Paris, London)" required><br>
      
      <label for="date">Ημερομηνία:</label>
      <input type="date" id="date" name="date" required><br>
      
      <label for="link">Σύνδεσμος:</label>
      <input type="url" id="link" name="link" placeholder="URL σύνδεσμου" required><br>
      
      <button type="submit">Προσθήκη</button>
    </form>
    <p id="message" style="color: red; margin-top: 10px;"></p>
  `;

 // Διαχείριση υποβολής φόρμας
document.getElementById('add-exhibition-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.getElementById('title').value.trim();
  const location = document.getElementById('location').value.trim();
  const date = document.getElementById('date').value;
  const link = document.getElementById('link').value.trim();

  // Έγκυρες κατηγορίες
  const validCategories = ['New York', 'Paris', 'London'];

  // Αναγνώριση κατηγορίας μέσα στη συμβολοσειρά τοποθεσίας
  const category = validCategories.find(cat => location.toLowerCase().includes(cat.toLowerCase()));

  if (!category) {
    document.getElementById('message').textContent = 
      'Η τοποθεσία πρέπει να περιλαμβάνει μία από τις υποστηριζόμενες πόλεις: New York, Paris, London.';
    return;
  }

  // Δημιουργία νέας έκθεσης
  const newExhibition = { title, location, date, link, category };

  // Αποστολή στο backend
  fetch('/api/exhibitions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newExhibition)
  })
  .then(response => {
    if (response.ok) {
      alert('Η έκθεση προστέθηκε επιτυχώς!');
      fetchExhibitionsByCategory(category); // Εμφάνιση εκθέσεων της κατηγορίας
    } else {
      alert('Σφάλμα κατά την προσθήκη της έκθεσης.');
    }
  })
  .catch(() => alert('Σφάλμα κατά τη σύνδεση.'));
});
}
function deleteExhibition(title) {
  if (!confirm(`Είστε σίγουροι ότι θέλετε να αφαιρέσετε την έκθεση "${title}" ;`)) return;

  fetch(`/api/exhibitions/${encodeURIComponent(title)}`, {
    method: 'DELETE',
  })
    .then(response => {
      if (response.ok) {
        alert('Η έκθεση αφαιρέθηκε επιτυχώς!');
        location.reload(); // Επαναφόρτωση για ενημέρωση της λίστας
      } else {
        alert('Σφάλμα κατά την αφαίρεση της έκθεσης.');
      }
    })
    .catch(() => alert('Σφάλμα κατά τη σύνδεση.'));
}
