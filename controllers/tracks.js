const { matchedData } = require('express-validator');
const {handleHttpError} = require('../utils/handleError')
const {tracksModel} = require('../models');

/** Obtener lista de la base de datos
* @param {*} req
* @param {*} res
*/
const getItems = async(req, res) =>{
    try {
        const data= await tracksModel.find({})
        res.send({data})
    } catch (e) {
        handleHttpError(res,'ERROR_GET_ITEMS')
    }


}

/**  Obtener un detalle de la base de datos
* @param {*} req
* @param {*} res
*/
const getItem = (req, res) =>{

}

/** insertar un registro en  la base de datos
* @param {*} req
* @param {*} res
*/
const createItem = async(req, res) =>{
    try {
        const body =matchedData(req)
 
        const data= await tracksModel.create(body)
        res.send({ data })

    } catch (e) {
        handleHttpError(res,'ERROR_CREATE_ITEMS')
    }



}

/**  Actualizar un registro de la base de datos
* @param {*} req
*@param {*} res
*/
const updateItem = (req, res) =>{

}

/**  eliminar un registro de la base de datos
* @param {*} req
* @param {*} res
*/
const deleteItem = (req, res) =>{

}


module.exports = { getItems, getItem, createItem, updateItem, deleteItem }