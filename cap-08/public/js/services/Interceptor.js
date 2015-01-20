angular.module('contatooh').factory('meuInterceptor', 
    function($log, $q, $location) {  

    var interceptor = {
    	responseError: function(resposta) {
    		if (resposta.status == 401) {
    		  $location.path('/auth');
    		}
            return $q.reject(resposta);
    	}
    }

    return interceptor;
});