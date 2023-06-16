const Resource = require("../models/Resource");

// Handle Errors
const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = { category: '', type: '', name: '', about: ''};

    if (err.message === 'Please enter a category') {
        errors.category = 'Please enter a category';
    }

    if (err.message === 'Please enter a type') {
        errors.type = 'Please enter a type';
    }

    if (err.message === 'Please enter a name') {
        errors.name = 'Please enter a name';
    }

    if (err.message === 'Please enter some information for the about section.') {
        errors.about === 'Please enter some information for the about section.';
    }
    
    // validation errors
    if (err.message.includes('resource validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            console.log(properties)
            errors[properties.path] = properties.message;
        });
    }

    return errors;
}

module.exports.search_post = (req, res) => {
    console.log('posting response');
}

module.exports.add_post = async (req, res) => {
    // Post data to database
    const { category, type, name, born, died, nationality, knownFor, notableWork, about, year, medium, dimensions, location, developer } = req.body
    
    try {
        const resource = Resource.create({
            category, type, name, born, died, nationality, knownFor, notableWork, about, year, medium, dimensions, location, developer
        });
        res.status(201).json({resource: (await resource)._id});
    } catch (err) {
        const errors = handleErrors(err)
        res.status(400).json({errors});
        
    }
}

module.exports.modify_post = async (req, res) => {
 console.log('test');
}

