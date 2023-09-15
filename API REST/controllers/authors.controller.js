const {Authors} = require('../db/db');

//obtener todos los autores

module.exports.getAuthors = (request,response) => {
    response.status(200).json({
        data: Authors
    })
};

//obtener autores por medio de su id (id y slug no es lo mismo, slug es una etiqueta aparte)

module.exports.getAuthorsById = (request,response) => {
    //const idx = Authors.findIndex(author => author.id == request.params.authorId);
/* findIndex se utiliza para buscan una serie de objetos con una condicion especial, 
como un slug, para buscar objetos por id es mejor usar find pues no es una condicion 
que se repita en varios objetos */
//request.params.authorSlug se usa para obtener el id ingresado desde la url (request)
    const index = parseInt(request.params.authorId);
    //console.log(index);
    const author_index = Authors.find(author => author.id === index);
    //console.log(request.params.authorId);
    const message_error = 'index ingresado ' + index;
    if(author_index) {
        const message_result = 'el autor que buscaste es: ' + author_index.name;
        response.status(200).json({
            message: message_result,
            data: author_index
        })
    }else {
        response.status(404).json({
            message: message_error,
            error: "el autor no existe :s"
        })
    }
}

// Agregar un nuevo autor -> endpoint
module.exports.createAuthor = (request, response) => {
    //const authorPost = request.body; //todo lo que va a tomar del request 
    //console.log(authorPost);
    author_name = request.params.authors_name;
    author_last = request.params.authors_last;
    const new_author_names = Authors.find( author => author.name == author_name && author.lastName == author_last);

    if(new_author_names) {
        var author_names = author_name + ' ' + author_last
        response.status(409).json({
            status: 409,
            error: `El autor ${author_names} ya existe`
        })
    } else {
        //let author_names = author_name + author_last;
        //console.log(Authors.length); // .length para saber el numero de elementos en el array definido
        var author_names = {
            id: Authors.length + 1,
            name: author_name,
            lastName: author_last
        };
        authors = [...Authors, author_names];
        Authors.push(author_names);
        response.status(201).json({
            status: 201,
            data: authors
        })
    }
}