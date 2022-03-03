const {check, validationResult} = require('express-validator');

exports.validateBooking = [
    check('customer_name')
        .trim()
        .escape()
        .not()
        .isEmpty()
        .withMessage('customer_name can not be empty!'),
    check('customer_email')
        .trim()
        .normalizeEmail()
        .not()
        .isEmpty()
        .withMessage('Invalid email address for customer_email!'),
    check('from_date')
        .trim()
        .not()
        .isEmpty()
        .withMessage('from_date can not be empty!')
        .bail()
        .isDate()
        .withMessage('from_date must be date'),
    check('to_date')
        .trim()
        .not()
        .isEmpty()
        .withMessage('to_date can not be empty!')
        .bail()
        .isDate()
        .withMessage('to_date must be date'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
        return res.status(422).json({errors: errors.array()});
          next();
  },
];
