exports.get404 = (req, res, next) => {
  // res.sendFile(path.join(rootDir, 'views', '404'));
  res.status(404).render('404', { pageTitle: 'Page Not Found', path: '' });
};