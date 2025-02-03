const express = require('express');
const app = express();
const port = 3000;

// נתיב ראשי
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// נתיב להחזרת רשימת משתמשים
app.get('/users', (req, res) => {
  const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' }
  ];
  res.json(users);
});

// נתיב להחזרת פרטי משתמש ספציפי
app.get('/user/:id', (req, res) => {
  const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' }
  ];

  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('User not found');
  res.json(user);
});

// הפעלת השרת
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
