const express = require('express') ;    
const { ravi, createUser, getUser } = require('../controllers/operations') ;
const router = express.Router() ;


router.route('/user/ravi').get(ravi) ;
router.route('/user/create').post(createUser) ;
router.route('/user/get-all-data').get(getUser) ;

module.exports = router ;