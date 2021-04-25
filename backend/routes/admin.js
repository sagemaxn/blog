const router = require('express').Router();
const { model } = require('mongoose');
let Admin = require('../models/Admin');

router.route('/').get(async (req, res) => {
    Admin.find()
        try {
            admins => res.json(admins)
        }
        catch {
            err => res.status(400).json('Error: ' + err)
        }
});

module.exports = router;