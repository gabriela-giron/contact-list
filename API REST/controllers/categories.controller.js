const {Categories} = require('../db/db');

//obtener todos los autores

module.exports.getCategories = (request,response) => {
    response.status(200).json({
        data: Categories
    })
};

module.exports.getCategoryById = (request,response) => {
    const index = parseInt(request.params.categoryId);
    const category_exists = Categories.find(category => category.id === index);
    //console.log(request.params.authorId);
    const message_error = 'id ingresado ' + index;
    if(category_exists) {
        const message_result = 'la categoria que buscaste es: ' + category_exists.name;
        response.status(200).json({
            message: message_result,
            data: category_exists
        })
    }else {
        response.status(404).json({
            message: message_error,
            error: "la categoria no existe :ss"
        })
    }
}

module.exports.createCategory = (request, response) => {
    const new_category_name = request.params.new_category;
    console.log(new_category_name);
    const new_category = Categories.find( category => category.name == new_category_name);

    if(new_category) {
        response.status(409).json({
            status: 409,
            error: `La categoria ${new_category_name} ya existe`
        })
    } else {
        var category_names = {
            id: Categories.length + 1,
            name: new_category_name,
            active: 'true'
        };
        categories = [...Categories, category_names];
        Categories.push(category_names);
        response.status(201).json({
            status: 201,
            data: categories
        })
    }
}