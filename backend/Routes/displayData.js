const express = require('express')
const router = require('./CreatUser')
// const router = express.Router()

router.get('/foodData', async (req, res) => {
    try {

        res.send(data)
    } catch (error) {
        console.error(error.message);
        res.send("Server Error")
    }
})
module.exports = router;
