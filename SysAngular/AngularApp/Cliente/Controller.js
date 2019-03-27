clienteApp.controlller('clienteCtrl', function ($scope, clienteService) {

    //carrega todos os dsados dos clientes quando a página for recarregada
    carregarcliente();

    function carregarcliente() {
        var listarClientes = clienteService.getTodosClientes();
        listarClientes.then(fuction(d) {
            //se der certo
            $scope.Clientes = d.data;

        },
            function () {
                alert("Ocorreu um erro ao tentar listar todos os clientes");
            });
    }

});