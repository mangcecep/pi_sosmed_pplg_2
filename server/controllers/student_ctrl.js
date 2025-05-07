const { validationResult } = require("express-validator")
const { student } = require("../models")

let self = {}

self.index = async (_, res) => {
    const data = await student.findAll()

    res.status(200).json({
        message: "student has been founded!",
        data: data
    })
}

self.detail = async (req, res) => {

    const { id } = await req.params

    const data = await student.findByPk(id)

    res.status(200).json({
        message: "student has been founded!",
        data: data
    })
}

self.update = async (req, res) => {
    const error = validationResult(req)
    if (!error.isEmpty()) {
        return res.status(422).json(error)
    }

    try {
        const {
            firstName,
            lastName,
            classes,
            gender,
            major_id
        } = req.body

        const { id } = await req.params

        const data = await student.findByPk(id)

        data.update({
            firstName: firstName,
            lastName: lastName,
            classes: classes,
            gender: gender,
            major_id: major_id
        })

        res.status(201).json({
            message: "student has been updated!",
            data: data
        })
    } catch (error) {
        res.status(500).json(error)
    }
}

self.destroy = async (req, res) => {
    const { id } = await req.params

    const data = await student.findByPk(id)
    data.destroy()
    res.status(200).json({
        message: "student has been deleted!",
        data: data
    })
}

module.exports = self