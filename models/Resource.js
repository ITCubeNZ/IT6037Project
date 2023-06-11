const { Schema } = require('mongoose');

const resourceSchema = new Schema({
    category: String,
    type: String,
    name: String,
    born: Number,
    died: Number,
    nationality: String, 
    knownFor: String,
    notableWork: String,
    about: String,
    year: Number,
    medium: String,
    dimensions: String, 
    location:  String,
    developer: String
})

const Resource = model('Resource', resourceSchema);
export default Resource;