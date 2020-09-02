//Servidor
const express = require('express')
const server = express()
const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')

// importar e configurar nunjucks
const nunjucks = require('nunjucks')
const format = require('./utils/format')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})
server
    //receber os dados do req body
    .use(express.urlencoded)({
        extended: true
    })
    //Configurar arquivos estáticos
    .use(express.static("public"))
    //rotas da aplicação
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .post("/save-classes", saveClasses)
    .listen(5500)