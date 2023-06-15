const Resource = require('../models/Resource');

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

const retrieveArt = async (req, res, next) => {
    var result = await Resource.find({ 'category': {
        $regex: '^' + "Art",
        $options: 'i'
    }}).exec();

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