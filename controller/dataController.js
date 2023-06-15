const Resource = require("../models/Resource");

module.exports.search_post = (req, res) => {
    console.log('posting response');
}

module.exports.add_post = async (req, res) => {
    // Post data to database
    const { category, type, name, born, died, nationality, knownFor, notableWork, about, year, medium, dimensions, location, developer } = req.body

    const resource = Resource.create({
        category, type, name, born, died, nationality, knownFor, notableWork, about, year, medium, dimensions, location, developer
    });
    res.status(201).json({resource: (await resource)._id});
}

module.exports.modify_post = (req, res) => {
    console.log('posting response from the modify page');
}