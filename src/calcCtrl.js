(function(){
  'use strict';

  angular.module('calcApp').controller('calcCtrl', CalcController);

  CalcController.$inject = [];

  function CalcController(){
    var vm = this;

    vm.result = '';
    vm.calculate = calculate;
    vm.oper = 'plus';

    function calculate(firstArg, secondArg, operator){
      var result;
      if(operator === 'plus'){
        result = firstArg + secondArg;
        vm.result = result;
      }
      else if (operator === 'minus'){
        result = firstArg - secondArg;
        vm.result = result;
      }
      else if (operator === 'divide'){
        if (secondArg !== 0){
          result = firstArg / secondArg;
          vm.result = result;
        }
        else {
          vm.result = 'Cannot divide by zero';
        }
      }
      else if (operator === 'multiply') {
        result = firstArg * secondArg;
        vm.result = result;
      }
      else {
        vm.result = 'Operator not implemented';
      }
    }
  }
}());
