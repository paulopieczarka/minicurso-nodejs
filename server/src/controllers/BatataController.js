const app = require('express');
const { check, validationResult } = require('express-validator/check');
const Batata = require('../models/Batata');

const router = app.Router();

// batataValidator
const batataValidator = [
    check('name').isLength({ min: 1 }).withMessage('batata need a name'),
    check('email').isEmail().withMessage('must be an email')
];

// batataController
const controller = 
{
    list(req, res)
    {
        Batata.find()
            .then(batatas => {
                res.json(batatas);
            })
            .catch(err => {
                res.json(err);
            });
    },

    get(req, res){},

    post(req, res)
    {
        const errors = validationResult(req);
        
        if(!errors.isEmpty()) {
            res.status(422).json({
                errors: errors.mapped()
            });
            return;
        }

        const newBatata = new Batata(req.body);
        newBatata.save()
            .then(batata => res.json(batata))
            .catch(err => res.json(err));
    },

    put(req, res){},
    delete(req, res){},
};

// batataRouter
router
    .get('/', controller.list.bind(controller))
    .post('/', batataValidator, controller.post.bind(controller));

module.exports = {
    batataController: controller,
    batataRouter: router
};