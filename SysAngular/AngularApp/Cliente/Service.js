clienteApp.service('clienteService', function ($http) {

    this.getToodosClientes = function () {
        return $http.get("Cliente/GetCliente");
    }

});
    
    