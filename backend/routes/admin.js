const router = require('express').Router();
const { model } = require('mongoose');
let Admin = require('../models/admin.model');

router.route('/').get((req, res) => {
    Admin.find()
        .then(admins => res.json(admins))
        .catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router;