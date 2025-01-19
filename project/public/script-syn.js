document.addEventListener('DOMContentLoaded', () => {
  // Κρύβει όλες τις υποκατηγορίες αρχικά
  document.querySelectorAll('.aside-section').forEach(section => {
    section.classList.add('hidden');
  });

document.querySelectorAll('a[data-subsection]').forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const subsection = event.target.getAttribute('data-subsection');

    if (subsection === 'Διαδικτυακοί Πόροι') {
      fetchLinksByCategory('Διαδικτυακοί Πόροι');
    } else if (subsection === 'Βιβλία') {
      fetchLinksByCategory('Βιβλία');
    }
    });
  });
});

function showAsideSection(id) {
  document.querySelectorAll('.aside-section').forEach(section => {
    section.classList.add('hidden');
  });
  document.getElementById(id).classList.remove('hidden');
}
function fetchLinksByCategory(category) {
  fetch('/api/links') // Σωστό endpoint για τους συνδέσμους
    .then(response => response.json())
    .then(data => {
      const filteredData = data.filter(link => link.category === category);
      displayLinks(filteredData, category);
    })
    .catch(error => console.error('Σφάλμα:', error));
}
function displayLinks(data, category) {
  const content = document.getElementById('content');
  content.innerHTML = `<h2>Σύνδεσμοι (${category})</h2>`;

  if (data.length === 0) {
    content.innerHTML += '<p>Δεν υπάρχουν διαθέσιμοι σύνδεσμοι.</p>';
    return;
  }

  let table = `
      <table class="table" border="1" style="width: 80%; border-collapse: collapse;">
      <thead>
        <tr>
          <th>Τίτλος</th>
          <th>Περιγραφή</th>
          <th>Σύνδεσμος</th>
        </tr>
      </thead>
      <tbody>
  `;

  data.forEach(link => {
    table += `
      <tr>
        <td>${link.title}</td>
        <td>${link.description}</td>
        <td><a href="${link.link}" target="_blank">Επίσκεψη</a></td>
      </tr>
    `;
  });

  table += '</tbody></table>';
  content.innerHTML += table;
}

document.addEventListener('DOMContentLoaded', () => {
  // Ενέργειες για "Διαχείριση Συνδέσμων"
  const manageLinks = document.querySelector('a[data-section="manage-links"]');
  manageLinks.addEventListener('click', (event) => {
    event.preventDefault();

    // Επιλέγει την ενότητα `#content`
    const content = document.getElementById('content');

    // Αντικαθιστά το περιεχόμενο με τη φόρμα
    content.innerHTML = `
      <h2>Διαχείριση Συνδέσμων</h2>
      <form id="add-link-form">
        <label for="link-title">Τίτλος:</label>
        <input type="text" id="link-title" name="link-title" placeholder="Τίτλος συνδέσμου" required><br>
        
        <label for="link-description">Περιγραφή:</label>
        <textarea id="link-description" name="link-description" placeholder="Περιγραφή συνδέσμου" required></textarea><br>
        
        <label for="link-url">Σύνδεσμος:</label>
        <input type="url" id="link-url" name="link-url" placeholder="URL συνδέσμου" required><br>
        
        <label for="link-category">Κατηγορία:</label>
        <select id="link-category" name="link-category" required>
          <option value="Διαδικτυακοί Πόροι">Διαδικτυακοί Πόροι</option>
          <option value="Βιβλία">Βιβλία</option>
        </select><br>
        
        <button type="submit">Προσθήκη</button>
        <p id="link-message" style="color: red; margin-top: 10px;"></p>
      </form>
    `;

    // Διαχείριση υποβολής φόρμας
    const form = document.getElementById('add-link-form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Λήψη τιμών από τη φόρμα
      const title = document.getElementById('link-title').value.trim();
      const description = document.getElementById('link-description').value.trim();
      const link = document.getElementById('link-url').value.trim();
      const category = document.getElementById('link-category').value;

      // Δημιουργία αντικειμένου συνδέσμου
      const newLink = { title, description, link, category };

      // Αποστολή στο backend
      fetch('/api/links', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newLink),
      })
        .then((response) => {
          if (response.ok) {
            alert('Ο σύνδεσμος προστέθηκε επιτυχώς!');
            form.reset(); // Καθαρισμός της φόρμας
          } else {
            alert('Σφάλμα κατά την προσθήκη του συνδέσμου.');
          }
        })
        .catch(() => alert('Σφάλμα κατά τη σύνδεση.'));
    });
  });
});
