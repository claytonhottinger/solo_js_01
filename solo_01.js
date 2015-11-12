var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var Employee = function(array) {
  this.name = array[0];
  this.number = array[1];
  this.salary = array[2];
  this.rating = array[3];
  this.isLongTerm = function(){
    if (this.number.length == 4){
      return 5;
    } else{
      return 0;
    }
  }
  this.isIncomeGreater = function(){
    if (this.salary > 65000){
      return -1;
    }else{
      return 0;
    }
  }
};


atticus = new Employee(atticus);
jem = new Employee(jem);
boo = new Employee(boo);
scout = new Employee(scout);

var employees = [atticus, jem, boo, scout];

console.log(employees);

function evaluate(employee){
  var STI = {};
  switch (employee.rating){
    case 0:
      STI.percentbonus = 0;
      break;
    case 1:
      STI.percentbonus = 0;
      break;
    case 2:
      STI.percentbonus = 0;
      break;
    case 3:
      STI.percentbonus = (4 + employee.isLongTerm() + employee.isIncomeGreater());
      break;
    case 4:
      STI.percentbonus = (6 + employee.isLongTerm() + employee.isIncomeGreater());
      break;
    case 5:
      STI.percentbonus = (10 + employee.isLongTerm() + employee.isIncomeGreater());
      break;
  }
  if (STI.percentbonus > 13){
    STI.percentbonus = 13;
  }
  STI.name = employee.name;
  STI.adjustedSalary = Math.round(parseInt(employee.salary) + employee.salary * STI.percentbonus / 100);
  STI.totalBonus = Math.round(employee.salary * STI.percentbonus/100);

  return STI;
}

for (var i = 0; i < employees.length; i++){
  console.log(evaluate(employees[i]));
};
