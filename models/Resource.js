const { Schema } = require("mongoose");

const resourceSchema = new mongoose.Schema({
    category: {
        type: String,
        required: [true, 'Please enter a category'],
    },
    type: {
        type: String, 
        required: [true, 'Please enter a type']
    },
    name: {
        type: String,
        required: [true, 'Please enter a name']
    },
    born: {
        type: Number
    },
    died: {
        type: Number
    },
    nationality: {
        type: String
    },
    knownFor: {
        type: String
    },
    notableWork: {
        type: String
    },
    about: {
        type: String,
        required: [true, 'Please enter some information for the about section.']
    },
    year: {
        type: Number
    },
    medium: {
        type: String
    },
    dimensions: {
        type: String
    },
    location: {
        type: String
    },
    developer: {
        type: String
    }
})

const Resource = mongoose.model('resource', resourceSchema);
module.exports = Resource;