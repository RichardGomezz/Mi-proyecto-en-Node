const express =require("express");
const router = express.Router();
const customHeader = require("../middleware/customHeader")
const {validatorCreateItem, validatorGetItem} = require("../validators/tracks")
const {getItems,getItem,createItem} = require ("../controllers/tracks");

/**
 * Lista los items 
 */
router.get("/",getItems);
/**
 * Obtener detalles de items 
 */

router.get("/:id",validatorGetItem, getItem);
/**
 * crear un registro 
 */

router.post("/", validatorCreateItem,  createItem);

module.exports=router