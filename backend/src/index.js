const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes');
const { setupWebSocket } = require('./websocket')

const app = express();
const server = http.Server(app);

setupWebSocket(server);

mongoose.connect('mongodb+srv://omniStack:omniStack@cluster0-fz79f.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);

/*Métodos http
get: Buscar uma informação, buscar.
post: salvar, criar uma informação
put: editar
delete: não preciso nem falar :D

Tipos de parametros:
Query Params: Quase somente no GET, são utilizados na URL. Acessiveis através de
    request.query (filtros, ordenação, paginação, ...);
Route Params: Quase somente no Put e Delete. Serve para referenciar um dado
    especifico. Acessivel através de request.param (indentificar um dado a ser alterado
        ou editado)
Body: Utilizado nos metodos post e put, server para passar uma quantidade maior
    de dados ao servidor. através de Json. Acessivel através de request.body
*/
