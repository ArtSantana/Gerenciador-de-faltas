const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
  response.send('Página de autenticação')
})

router.post('/', (request, response) => {
  response.send('Página de criação de usuário')
})

router.delete('/', (request, response) => {
  response.send('Delete usuário')
})

module.exports = router;