"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkvalue = (value) => {
    if (isNaN(Number(value))) {
        return 0;
    }
    return value;
};
const checkWidthAndHeight = (req, res, next) => {
    const { width, height } = req.query;
    if (width === undefined && height === undefined) {
        next();
    }
    else if (checkvalue(width) && checkvalue(height)) {
        next();
    }
    else {
        res.status(400).send('Width and Height should be integers');
    }
};
exports.default = checkWidthAndHeight;
