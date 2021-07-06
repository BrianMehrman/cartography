const express = require('express');

const app = express();

const PORT = 4000;

app.use(express.static(__dirname + '/dist'));
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(PORT, '0.0.0.0', function() {
  console.log('A simple app serving simple things.\n');
});
