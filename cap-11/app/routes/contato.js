function verificaAutenticacao(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.status('401').json('Não autorizado');
  }
}

module.exports = function (app) {
	
  var controller = app.controllers.contato;

  app.route('/contatos')
  	.get(verificaAutenticacao, controller.listaContatos)
  	.post(verificaAutenticacao, controller.salvaContato)

  app.route('/contatos/:id')
	.get(verificaAutenticacao, controller.obtemContato)
	.delete(verificaAutenticacao, controller.removeContato);
};
