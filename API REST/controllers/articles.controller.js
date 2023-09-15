const {Articles} = require('../db/db');

//obtener todos los articles

module.exports.getArticles = (req,res) => {
    res.status(200).json({ //para ir a traer el resultado y mostrarlo en json
        data: Articles
    })
}

//obtener por slug -> tipo etiqueta sirve para crear prettyurls

module.exports.getArticlesBySlug = (req,res) => {
    const idx = Articles.findIndex(article => article.slug == req.params.articleSlug);

    if(idx !== -1) {
        res.status(200).json({
            data: Articles[idx]
        })
    }else {
        res.status(404).json({
            error: "articulo no encontrado"
        })
    }
}

module.exports.getArticlesById = (request,response) => {
    const index = parseInt(request.params.articleId);
    const article_exists = Articles.find(article => article.id === index);
    const message_error = 'id ingresado ' + index;
    if(article_exists) {
        const message_result = 'el articulo que buscaste es: ' + article_exists.title;
        response.status(200).json({
            message: message_result,
            data: article_exists
        })
    }else {
        response.status(404).json({
            message: message_error,
            error: "el articulo no existe :sss"
        })
    }
}

// Agregar un nuevo Articulo -> endpoint
module.exports.createArticle = (req, res) => {
    const articlePost = req.body;
    const idx = Articles.findIndex( article => article.slug == articlePost.slug);

    if(idx === -1) {
        articles = [...Articles, articlePost]; //...articles agrega hasta el final del array el nuevo dato
        res.status(201).json({
            status: 201,
            data: articles
        })
    } else {
        res.status(409).json({
            status: 409,
            error: `El Articulo ${articlePost.title} ya Existe`,
        })
    }
}
