const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const rootDir = require('./util/path');

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//pug autoregisters with express
app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  // res.sendFile(path.join(rootDir, 'views', '404'));
  res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

app.listen(3000);
