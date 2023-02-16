const express =require("express");
const router= express.Router();
const uploadMiddleware = require("../utils/handlStorage");
const {createItem} = require("../controllers/storage");

//TOD http:// localhost:3000/storage

router.post("/", uploadMiddleware.single ("myfile"), createItem);

module.exports=router;