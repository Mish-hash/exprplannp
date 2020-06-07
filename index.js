const express = require('express');
const app = express();
const router = require('./routes/index');
const PORT = 3000;

app.use(router);


app.listen(PORT, function () {
  console.log('Example app listening on port ' + PORT + '!');
});