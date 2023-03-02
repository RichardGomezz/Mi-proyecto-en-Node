const { matchedData } = require("express-validator");
const {storageModel, tracksModel} = require("../models");
const { handleHttpError } = require("../utils/handleError");

/**
 * obtenes lista de la base de datos 
 * @param {*} req 
 * @param {*} res 
 */

const getItems = async (req, res) => {

   try{
    const data = await tracksModel.find({});
     res.send({data})

   }catch(e){
    handleHttpError(res, 'ERROR_GET_ITEMS')
   }

     
    
    };

/**
 * obtener un detalle
 * @param {*} req 
 * @param {*} res 
 */

const getItem = async (req, res) => {
   

  };


/**
 * insertar un registro 
 * @param {*} req 
 * @param {*} res 
 */

const createItem = async (req, res) => {

    try{

       const body= matchedData(req)
       const data = await tracksModel.create(body)
       res.send({data});
       }catch(e){
        handleHttpError(res, 'ERROR_CREATE_ITEMS');
       }
};

/**
 * actualizar un registro 
 * @param {*} req 
 * @param {*} res 
 */

const updateItem = async (req, res) => {};

/**
 * eliminar un registro 
 * @param {*} req 
 * @param {*} res 
 */

const deleteItem = async (req, res) => {};

module.exports = {getItems, getItem, createItem, updateItem, deleteItem}