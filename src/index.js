const path = require('path');
const express = require('express');
const morgan = require('morgan');
const db = require('./config/db')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')
const {create} = require('express-handlebars')
db.connect()
const app = express();
const port = 3000;
app.use(methodOverride('_method'));
app.use(
    bodyParser.urlencoded({
        extended: true,
    }),
);
app.use(bodyParser.json());
const { engine } = require('express-handlebars');
const route = require('./routes');
app.use(express.static(path.join(__dirname, 'public')));
const hbs = create({
  // Specify helpers which are only registered on this instance.
  helpers: {
     sum:(a,b) => a+b
  }
});
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'res/views'));
console.log(__dirname);
app.use(morgan('combined'));
route(app);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
