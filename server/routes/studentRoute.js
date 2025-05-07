const { body } = require("express-validator")
const student_ctrl = require("../controllers/student_ctrl")
const { major } = require("../models")

module.exports = (app) => {
    const router = app.Router()

    router.get('', student_ctrl.index)
    router.get('/:id', student_ctrl.detail)
    router.put('/:id',
        [
            body('firstName').notEmpty(),
            body('lastName').notEmpty(),
            body('classes').notEmpty().custom((values) => {
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
        ],
        student_ctrl.update)
    router.delete('/:id', student_ctrl.destroy)

    return router
}