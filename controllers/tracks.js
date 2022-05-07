const { matchedData, body } = require('express-validator');
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
const getItem = async (req, res) =>{
    try {
        req = matchedData(req)
        const {id} = req
        const data= await tracksModel.findById(id)
        res.send({data})
    } catch (error) {
        handleHttpError(res, 'ERROR_GET_ITEM')
    }



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
const updateItem = async (req, res) =>{
    try {
        const {id, ...body}= matchedData(req)
        const data= await tracksModel.findOneAndUpdate( id,body)
        res.send({ data })

    } catch (e) {
        handleHttpError(res,'ERROR_UPDATE_ITEMS')
    }
}

/**  eliminar un registro de la base de datos
* @param {*} req
* @param {*} res
*/
const deleteItem = async (req, res) =>{
    try {
        req = matchedData(req)
        const {id} = req
        const data= await tracksModel.delete({_id: id})
        res.send({data})
    } catch (error) {
        handleHttpError(res, 'ERROR_DELETE_ITEM')
    }
}


module.exports = { getItems, getItem, createItem, updateItem, deleteItem }