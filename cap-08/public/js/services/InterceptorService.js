angular.module('contatooh').factory('meuInterceptor', function($log, $q, $location) {  
    $log.debug('$log is here to show you that this is a regular factory with injection');

    var meuInterceptor = {
    	responseError: function(resposta) {
    		if (resposta.status == 401) {
    		  $location.path('/auth');
    		}
            return $q.reject(resposta);
    	}
    }

    return meuInterceptor;
});