const menu = require('../model/menu')

class SanPham{

    SanPham1(req,res,next){
        menu.find({}) 
            .then(menu => {
                res.render('sanpham',{menu})
            } )
            
          .catch(next )
        //.res.render('sanpham')
    }
}
module.exports = new SanPham()