
const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { check, validationResult } = require('express-validator');
router.post("/creatuser", [
    // username must be an email
    check('email', 'Incorrect Email').isEmail(),
    // password must be at least 5 chars long
    check('name', "Incorrect Name").isLength({ min: 5 }),
    check('password', 'Incorrect Password').isLength({ min: 5 })]
    , async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {

            //   await User.create({
            //         name: "Manvi",
            //         password: "123456",
            //         email: "manvi@hotmail.com",
            //         location: 'QWerty edfef'
            //     })

            // console.log(req.body)

            await User.create({
                name: req.body.name,
                password: req.body.password,
                email: req.body.email,
                location: req.body.location
            })

            return res.json({ success: true });


        } catch (error) {
            console.log(error)
            console.log(error)
            res.json({ success: false });
        }


    })


router.post("/loginuser", [
    // username must be an email
    check('email', 'Incorrect Email').isEmail(),
    // password must be at least 5 chars long
    check('password', 'Incorrect Password').isLength({ min: 5 })],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        console.log(express.request.body)
        let email = req.body.email

        try {

            let userData = await User.findOne({email}); 
            if (!userData) {
                return res.status(400).json({ error: "Try Logging with corerct credentials" })
            }
            if (req.body.password !== userData.password) {
                return res.status(400).json({ error: "bamm ! Try Logging with corerct credentials" })
            }

            res.json({ success: true });


        } catch (error) {
            console.log("hell yeah")
            console.log(error.message)
            res.json({ success: false });
        }


    })

module.exports = router;