const { body } = require("express-validator")
const { major, user } = require('../models')
const auth_ctrl = require('../controllers/auth_ctrl')

module.exports = (app) => {
    const router = app.Router()

    router.post("/register",
        [
            body('username').notEmpty().isLength({ min: 4, max: 20 }).custom(async (value) => {
                let userData = await user.findOne({
                    where: {
                        username: value
                    }
                })

                if (userData) {
                    throw new Error('Username has been registered!');
                }
            }),
            body('email').notEmpty().isEmail().custom(async (value) => {
                let emailData = await user.findOne({
                    where: {
                        email: value
                    }
                })

                if (emailData) {
                    throw new Error('email has been registered!');
                }
            }),
            body('password').notEmpty().isLength({ min: 6, max: 20 }),
            body('firstName').notEmpty(),
            body('lastName').notEmpty(),
            body('classes').notEmpty().custom(async (values) => {
                const classList = ['X', 'XI', 'XII', 'XII']
                const isValid = classList.includes(values)
                if (!isValid) {
                    throw new Error('classes is not registered!');
                }
            }),
            body('major_id').notEmpty().custom(async (values) => {
                let majorData = await major.findByPk(values)
                if (!!majorData == false) {
                    throw new Error('major is not registered!');
                }
            }),
            body('gender').notEmpty().custom(async (values) => {
                const genderList = ['M', 'F']
                const isValid = genderList.includes(values)
                if (!isValid) {
                    throw new Error('gender is not registered!');
                }
            }),
        ], auth_ctrl.save)

    return router
}