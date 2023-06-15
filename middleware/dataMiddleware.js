const Resource = require('../models/Resource');

const retrieveArt = async (req, res, next) => {
    var result = await Resource.find({ 'category': {
        $regex: '^' + "Art",
        $options: 'i'
    }}).exec();

    console.log(result);
    next();
}

const retrieveMaths = async (req, res, next) => {
    var result = await Resource.find({ 'category': {
        $regex: '^' + "Maths",
        $options: 'i'
    }}).exec();

    console.log(result)
    next();
}

const retrieveTechnology = async (req, res, next) => {
    var result = await Resource.find({ 'category': {
        $regex: '^' + "Technology",
        $options: 'i'
    }}).exec();

    console.log(result);
    next();
}

module.exports = { retrieveArt, retrieveMaths, retrieveTechnology };