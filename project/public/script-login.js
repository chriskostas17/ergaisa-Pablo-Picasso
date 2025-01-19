
// Λειτουργία Σύνδεσης (Login)
// Λειτουργία Σύνδεσης (Login)
function login(username, password) {
  fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  })
  .then(response => response.json())
  .then(data => {
    if (data.token) {
      // Αποθήκευση του token τοπικά
      localStorage.setItem('token', data.token);
      alert('Επιτυχής σύνδεση!');
      showAdminOptions(); // Εμφάνιση επιλογών διαχειριστή
    } else {
      alert('Λάθος στοιχεία σύνδεσης.');
    }
  })
  .catch(() => alert('Σφάλμα κατά τη σύνδεση.'));
}


// Λειτουργία Αποσύνδεσης (Logout)
function logout() {
  localStorage.removeItem('token');
  alert('Αποσυνδεθήκατε!');
  hideAdminOptions(); // Κρύβουμε τις επιλογές διαχείρισης
}

// Εμφάνιση επιλογών διαχείρισης μετά τη σύνδεση
function showAdminOptions() {
  document.getElementById('manage-exhibitions').style.display = 'block';
  document.getElementById('manage-links').style.display = 'block';
  document.getElementById('logout-btn').style.display = 'block';
  document.getElementById('login-btn').style.display = 'none';
}

// Απόκρυψη επιλογών διαχείρισης όταν γίνει αποσύνδεση
function hideAdminOptions() {
  document.getElementById('manage-exhibitions').style.display = 'none';
  document.getElementById('manage-links').style.display = 'none';
  document.getElementById('logout-btn').style.display = 'none';
  document.getElementById('login-btn').style.display = 'block';
}

// Έλεγχος αν ο χρήστης είναι ήδη συνδεδεμένος
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('token')) {
    showAdminOptions();
  } else {
    hideAdminOptions();
  }

  // Πατώντας το κουμπί Είσοδος Διαχειριστή
  document.getElementById('login-btn').addEventListener('click', () => {
    document.getElementById('login-form').style.display = 'block';
  });

  // Υποβολή της φόρμας σύνδεσης
  document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault(); // Αποτρέπει την ανανέωση της σελίδας
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    login(username, password); // Καλούμε τη συνάρτηση σύνδεσης
    document.getElementById('login-form').style.display = 'none'; // Κλείνουμε τη φόρμα μετά την υποβολή
  });

  // Πατώντας το κουμπί Αποσύνδεση
  document.getElementById('logout-btn').addEventListener('click', () => {
    logout();
  });
});

