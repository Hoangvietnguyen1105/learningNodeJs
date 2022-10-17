const express = require('express')
const router = express.Router()
const SanPham = require('../app/controllers/SanPhamController')

router.use('/',SanPham.SanPham1)
module.exports = router
