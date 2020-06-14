const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();

//Public static files
app.use('/public', express.static('public'));

app.use(expressLayouts);
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));

app.use('/', require('./routes/index'));

const port = process.env.PORT || 8000;

app.listen(port, console.log(`Server started on port ${port}`));
