const Resource = require('../models/Resource');
const retrieveArt = async (req, res, next) => {
    var result = await Resource.find({ 'category': {
        $regex: '^' + "Arts",
        $options: 'i'
    }}).exec();
    // clog used for debugging
    console.log(result);
    res.locals.art = result;
    next();
}

const retrieveMaths = async (req, res, next) => {
    var result = await Resource.find({ 'category': {
        $regex: '^' + "Maths",
        $options: 'i'
    }}).exec();

    res.locals.maths = result;
    next();
}

const retrieveTechnology = async (req, res, next) => {
    var result = await Resource.find({ 'category': {
        $regex: '^' + "Technology",
        $options: 'i'
    }}).exec();

    res.locals.technology = result;
    next();
}

module.exports = { retrieveArt, retrieveMaths, retrieveTechnology };