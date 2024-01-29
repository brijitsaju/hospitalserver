//setup a path to resolve request

// inport express module
const express =require('express')

//import controller
const useController=require('../controllers/useController')
//import doc controller
const docController=require('../controllers/docController')
// import blood controller
const bloodDonars=require('../controllers/bloodDonars')

//import patient controller
const patientAppoint=require('../controllers/patientAppoint')

//import jwt middleware
const jwtMiddleware =require('../Middleware.js/jwtMiddleware')

//import multer
const multerConfig=require('../Middleware.js/multerMiddleware')

// 2)create an object for router class inside expres module
const router= new express.Router()

//3)setup path to resolve request
// a)register
router.post('/user/register',useController.register)
//b)login
router.post('/user/login',useController.login)
//c)add doctor
router.post('/admin/adddoc',jwtMiddleware,multerConfig.single('docImage'),docController.adddoc)
//d)add blooddonars
router.post('/user/blood/register',bloodDonars.blood)
// e)seeblooddonars
router.get('/blood/seedonars',jwtMiddleware,bloodDonars.getalldonars)
// e)see doc list
router.get('/doc/addlist',jwtMiddleware,docController.seedoclist)
//f) edit doc
router.put('/doc/edit/:id',jwtMiddleware,multerConfig.single('docImage'),docController.editDoc)
// g)deltee doc
router.delete('/doc/remove/:id',jwtMiddleware,docController.deleteDoc)
//d)add partient appointment
router.post('/patient/appointment/register',patientAppoint.patientRegister)
// g)delete patient
router.delete('/patient/remove/:id',jwtMiddleware,bloodDonars.deleteDonar)
// h)seeblooddonars
router.get('/patient/appointment',jwtMiddleware,patientAppoint.getallpatients)

// i)seeblooddonars
router.get('/doctor/display',jwtMiddleware,docController.displayDoc)
// 4)export router
module.exports=router