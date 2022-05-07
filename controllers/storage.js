const mongoose = require('mongoose')
const {matchedData} = require('express-validator');
const {storageModel} = require('../models');
const {handleHttpError} = require('../utils/handleError')
const fs = require ('fs')

const PUBLIC_URL= process.env.PUBLIC_URL
const MEDIA_PATH= `${__dirname}/../storage`


/** Obtener lista de la base de datos
* @param {*} req
* @param {*} res
*/
const getItems = async(req, res) =>{
    try {
        const data= await storageModel.find({})
        res.send({data})
    } catch (error) {
        handleHttpError(res, 'ERROR_LIST_ITEMS')
    }
}

/**  Obtener un detalle de la base de datos
* @param {*} req
* @param {*} res
*/
const getItem = async(req, res) =>{
    try {
        const {id} = matchedData(req)
        const data= await storageModel.findById(id)
        res.send({data})
    } catch (error) {
        handleHttpError(res, 'ERROR_DETAIL_ITEM')
    }
}

/** insertar un registro en  la base de datos
* @param {*} req
* @param {*} res
*/
const createItem = async(req, res) =>{
    try {
        const { body, file} = req
        console.log(file);
        const fileData = {
            filename: file.filename,
            url: `${PUBLIC_URL}/${file.filename}`
        }
        const data= await storageModel.create(fileData)
        res.send({data})
    } catch (error) {
        handleHttpError(res, 'ERROR_CREAR_ITEM')
    }
}

/**  Actualizar un registro de la base de datos
// * @param {*} req
// * @param {*} res
// */
// const updateItem = async (req, res) =>{

// }

/**  eliminar un registro de la base de datos
* @param {*} req
* @param {*} res
*/
const deleteItem = async (req, res) =>{
    try {
        const {id} = matchedData(req)
        const dataFile= await storageModel.findById(id)
        await storageModel.delete({_id: id}) //delete({_id: id}) para la eliminacion logica
        const {filename}= dataFile 
        const filePath = `${MEDIA_PATH}/${filename}`

        // fs.unlinkSync(filePath)  // comentar esa linea si queremos que el borrado sea logico

        const data = {
            filePath,
            deleted: 1
        }
        res.send({data})
    } catch (error) {
        handleHttpError(res, 'ERROR_DETAIL_ITEM')
    }
}


module.exports = { getItems, getItem, createItem, deleteItem }