const { validationResult } = require("express-validator")

let self = {}

self.save = (req, res) => {

    const error = validationResult(req)
    if (!error.isEmpty()) {
        return res.status(422).json(error)
    }

    try {
        const {
            username,
            email,
            password,
            firstName,
            lastName,
            classes,
            gender,
            major_id
        } = req.body

        res.status(201).json({
            message: "Register Success!",
        })
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = self