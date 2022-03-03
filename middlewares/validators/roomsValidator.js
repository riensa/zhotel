const {check, validationResult} = require('express-validator');

exports.validateRoom = [
    check('type')
        .trim()
        .escape()
        .not()
        .isEmpty()
        .withMessage('type can not be empty!'),
    check('description')
        .trim()
        .escape(),
    check('quantity')
        .trim()
        .not()
        .isEmpty()
        .withMessage('quantity can not be empty!')
        .bail()
        .isInt()
        .withMessage('quantity must be numbers'),
    check('price')
        .trim()
        .not()
        .isEmpty()
        .withMessage('price can not be empty!')
        .bail()
        .isInt()
        .withMessage('price must be numbers'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
        return res.status(422).json({errors: errors.array()});
          next();
  },
];
