const express = require('express');

// express app
const app = express();

// listen for requests
app.listen(3000);

app.get('/', (req, res) => {

  // kada se stavi 'send' onda on automatski sredi header za responde.
    // set header content type
    // res.setHeader('Content-Type', 'text/html');
  // res.send('<p>home page</p>');

  // Ovaj drugi parametar je da se da odakle se gleda, gde pocinje root-a
  // __dirname - znaci da se gleda od onog foldera u kojem se nalazi app.js
  res.sendFile('./views/index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
  // res.send('<p>about page</p>');
  res.sendFile('./views/about.html', { root: __dirname });
});

// redirects
app.get('/about-us', (req, res) => {
  res.redirect('/about');
});

// 404 page 
// use() je kao neki posrednik midleware...
// Kaze ides redom pa kada dodjes do ove funkcije opali je. Ako se desi da ima onda se ostatak code-a ne cita.
// Mora da bude na dnu ili ce se opaliti pre neko druge i sve ce se preskociti.
app.use((req, res) => {
  res.status(404).sendFile('./views/404.html', { root: __dirname });
});
