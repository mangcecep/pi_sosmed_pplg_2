const { validationResult } = require("express-validator")
const {
    user,
    student,
    student_user,
    role,
    role_user
} = require("../models")
const bcrypt = require("bcryptjs")
const { where } = require("sequelize")

let self = {}

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