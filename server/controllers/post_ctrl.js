const { post } = require('../models')
const { validationResult } = require("express-validator")
let self = {}

self.save = async (req, res) => {
    const error = validationResult(req)
    if (!error.isEmpty()) {
        return res.status(422).json(error)
    }

    await post.create({
        content_text: req.body.content_text,
        user_id: req.user?.data?.id,
    })

    return res.status(201).json({
        message: 'Post found successfully',
    })
}

self.index = async (_, res) => {
    const error = validationResult(_)
    if (!error.isEmpty()) {
        return res.status(422).json(error)
    }

    let data = await post.findAll()
    // await post.create({
    //     content_text: req.body.content_text,
    //     content_text: req.body.content_image,
    //     user_id: req.user,
    // })

    return res.status(201).json({
        data: data,
        message: 'Post found successfully',
    })
}


module.exports = self