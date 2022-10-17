class SiteController {
  main(req, res) {
    res.render('home');
  }
  search(req, res) {
    res.render('search');
  }
  search1(req, res) {
    res.send('test');
  }
}
module.exports = new SiteController();
