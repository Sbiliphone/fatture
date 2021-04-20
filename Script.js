var app = angular.module('app', []);
var Aziende = new Array();
var totale = 0;
document.getElementById("totale").innerText = totale;

app.controller('ctrl1', function ($scope){

    $.get(
        './DatabaseConnection.php',
        function( data ) {
            Aziende = JSON.parse(data);
            console.log(Aziende);
            $scope.$apply(function() {
                $scope.aziende = Aziende;
                $scope.filterCondition={
                    nome: 'Name'
                }
            });

            compilaAzienda1 = function(item){
                //console.log("ciao");

                for(i=0; i < Aziende.length; i++){
                    if(item == Aziende[i].Name){
                        $scope.$apply(function() {
                            $scope.societaUno = $scope.aziende[i].Name;
                            $scope.viaUno = $scope.aziende[i].Address;
                            $scope.CAPUno = parseInt($scope.aziende[i].CAP);
                            $scope.telefonoUno = parseInt($scope.aziende[i].TelephoneNumber);
                            $scope.cittaUno = $scope.aziende[i].City;
                            $scope.provinciaUno = $scope.aziende[i].State;
                            //$scope.emailUno = $scope.aziende[i].Email;
                        });
                    }
                }

            }

            compilaAzienda2 = function(item){
                //console.log("ciao");

                for(i=0; i < Aziende.length; i++){
                    if(item == Aziende[i].Name){
                        $scope.$apply(function() {
                            $scope.societaDue = $scope.aziende[i].Name;
                            $scope.viaDue = $scope.aziende[i].Address;
                            $scope.CAPDue = parseInt($scope.aziende[i].CAP);
                            $scope.telefonoDue = parseInt($scope.aziende[i].TelephoneNumber);
                            $scope.cittaDue = $scope.aziende[i].City;
                            $scope.provinciaDue = $scope.aziende[i].State;
                            $scope.emailDue = $scope.aziende[i].Email;
                        });
                        $scope.$apply(function() {});
                    }
                }

            }

        });



    AggiungiProdotto = function (){
        nuovoProdotto = document.createElement("tr");
        nomeProdotto = document.createElement("td");
        nomeProdotto.innerText = $scope.nomeProdotto;
        prezzo = document.createElement("td");
        prezzo.innerText = $scope.costoProdotto + " €";
        quantita = document.createElement("td");
        quantita.innerText = $scope.quantita;
        tabella = document.getElementById("tabellaProdotti");
        nuovoProdotto.appendChild(nomeProdotto);
        nuovoProdotto.appendChild(prezzo);
        nuovoProdotto.appendChild(quantita);
        tabella.appendChild(nuovoProdotto);
        totale += $scope.costoProdotto * $scope.quantita;
        document.getElementById("totale").innerText = totale;
        $scope.$apply(function() {
            $scope.nomeProdotto = null;
            $scope.costoProdotto = null;
            $scope.quantita = null;
        });

    }






    $scope.formatDate = function(){
        var dateOut =  Date.now();
        return dateOut;
    };


});


