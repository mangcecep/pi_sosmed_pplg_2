const { validationResult } = require("express-validator")
const {
    user,
    student,
    student_user,
    role,
    role_user
} = require("../models")
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')
let self = {}

self.login = async (req, res) => {
    const error = validationResult(req)
    if (!error.isEmpty()) {
        return res.status(422).json(error)
    }

    const options = {
        expiresIn: '24h'
    }

    const userData = await user.findOne({
        where: {
            username: req.body.username
        },
        include: [
            { model: role },
            { model: student },
        ]
    })

    const secret = "PI_JAYA_JAYA_JAYALAH"

    const token = jwt.sign({
        data: {
            id: userData?.id,
            username: userData?.username,
            email: userData?.email,
            roles: userData?.roles[0]?.role_name,
            student: userData?.roles[0]
        },
    }, secret, options)

    res.status(200).json({
        message: "login Success!",
        token: token
    })
}

self.save = async (req, res) => {

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

        const passwordHash = await bcrypt.hash(password, 10)

        const userData = await user.create({
            username: username,
            email: email,
            password: passwordHash,
        })

        const studentData = await student.create({
            firstName: firstName,
            lastName: lastName,
            classes: classes,
            gender: gender,
            major_id: major_id,
        })

        await student_user.create({
            user_id: userData.id,
            student_id: studentData.id
        })

        const roleUserRegister = await role.findOne({
            where: {
                role_name: "Student"
            },
            attributes: ["id"]
        })

        await role_user.create({
            user_id: userData.id,
            role_id: roleUserRegister.id
        })

        res.status(201).json({
            message: "Register Success!",
            data: userData
        })

    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = self