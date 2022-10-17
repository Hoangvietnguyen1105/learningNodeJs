const newRouter = require('./new');
const siteRouter = require('./site');
const SanPhamRouter = require('./sanPham')
const UserRouter = require('./user')
function route(app) {
  app.use('/new', newRouter);
  app.use('/', siteRouter);
  app.use('/sanpham',SanPhamRouter);
  app.use('/user',UserRouter)
  // app.get('/main', (req, res) => {
  //     res.render('home')
  // })
  // app.get('/search',(req,res)=>{
  //     res.render('search')
  // })
  // app.post('/search',(req,res)=>{

  //   res.render('search')
  // })
  // app.get('/new', (req, res) => {
  //   res.render('new')
  // })
}
module.exports = route;
