document.addEventListener('DOMContentLoaded', function() {
    var container = document.getElementById('qCont');
    function card(title, content) {
      var cardDiv = document.createElement('div');
      cardDiv.className = 'card';
      cardDiv.innerHTML = '<h3>' + title + '</h3><div class="out">' + content + '</div>';
      container.appendChild(cardDiv);
    }
    function logMessage(title, message) {
      console.log(title + ':', message);
    }
    // Q1
    var mob = { br: 'Samsung', mdl: 'Galaxy S23', pr: 999, bat: '4000mAh' };
    var q1 = 'Dot: ' + mob.br + ', ' + mob.mdl + '<br>Bracket: ' + mob['pr'] + ', ' + mob['bat'];
    card('Q1: Obj Create/Access', q1);
    logMessage('Q1: Obj Create/Access', q1);
  
    // Q2
    mob.clr = 'Black';
    mob.pr = 899;
    delete mob.bat;
    var q2 = JSON.stringify(mob, null, 2);
    card('Q2: Mod Obj', q2);
    logMessage('Q2: Mod Obj', mob);
  
    // Q3
    mob.dis = function(discount) {
      return this.pr * (1 - discount/100);
    };
    var q3 = '10%: $' + mob.dis(10).toFixed(2);
    card('Q3: Discount', q3);
    logMessage('Q3: Discount', q3);
  
    // Q4
    function prObj(o) {
      return 'Keys: ' + Object.keys(o) +
             '<br>Vals: ' + Object.values(o) +
             '<br>Entries: ' + JSON.stringify(Object.entries(o));
    }
    var q4 = prObj(mob);
    card('Q4: Obj Details', q4);
    logMessage('Q4: Obj Details', prObj(mob));
  
    // Q5
    var stu = { n: 'Alice', a: 21, addr: { c: 'Los Angeles', z: '90001' } };
    stu.addr.z = '90002';
    var q5 = 'City: ' + stu.addr.c + ', ZIP: ' + stu.addr.z;
    card('Q5: Nested Obj', q5);
    logMessage('Q5: Nested Obj', stu);
  
    // Q6
    var globalVar = 'Global';
    function testScope() {
      var localVar = 'Local';
      return 'In: ' + globalVar + ', ' + localVar;
    }
    var q6 = testScope() + '<br>Out: ' + globalVar;
    card('Q6: Scope', q6);
    logMessage('Q6: Scope', testScope() + ', Out: ' + globalVar);
  
    // Q7 
    function hoistEx() {
      var h;
      var before = h;
      h = 'declared';
      return 'Before: ' + before + ', After: ' + h;
    }
    var q7 = hoistEx();
    card('Q7: Hoist', q7);
    logMessage('Q7: Hoist', q7);
  
    // Q8
    function calc(a, b) {
      return a + ' + ' + b + ' = ' + (a + b) + '<br>' +
             a + ' - ' + b + ' = ' + (a - b) + '<br>' +
             a + ' * ' + b + ' = ' + (a * b) + '<br>' +
             a + ' / ' + b + ' = ' + (a / b).toFixed(2) + '<br>' +
             a + ' % ' + b + ' = ' + (a % b) + '<br>' +
             a + ' ** ' + b + ' = ' + (a ** b);
    }
    var q8 = calc(15, 4);
    card('Q8: Arith', q8);
    logMessage('Q8: Arith', calc(15, 4));
  
    // Q9
    var num = 10;
    var q9 = 'Pre-inc: ' + (++num) + '<br>' +
             'Post-inc: ' + (num++) + '<br>' +
             'Pre-dec: ' + (--num) + '<br>' +
             'Post-dec: ' + (num--);
    card('Q9: Inc/Dec', q9);
    logMessage('Q9: Inc/Dec', q9);
  
    // Q10
    var x = 5;
    x += 3;
    x -= 2;
    x *= 4;
    x /= 2;
    x %= 5;
    x **= 3;
    var q10 = 'Final x: ' + x;
    card('Q10: Compound', q10);
    logMessage('Q10: Compound', q10);
  
    // Q11
    var q11 = '"10"==10: ' + ("10" == 10) + '<br>' +
              '"10"===10: ' + ("10" === 10) + '<br>' +
              'null==undefined: ' + (null == undefined) + '<br>' +
              'null===undefined: ' + (null === undefined);
    card('Q11: Compare', q11);
    logMessage('Q11: Compare', q11);
  
    // Q12
    var boolA = true, boolB = false;
    var q12 = 'AND: ' + (boolA && boolB) + '<br>' +
              'OR: ' + (boolA || boolB) + '<br>' +
              'NOT: ' + (!boolA);
    card('Q12: Logic', q12);
    logMessage('Q12: Logic', q12);
  
    // Q13
    function isPositive(n) {
      return n > 0 ? 'Pos' : n < 0 ? 'Neg' : 'Zero';
    }
    var q13 = '5: ' + isPositive(5) + ', -3: ' + isPositive(-3) + ', 0: ' + isPositive(0);
    card('Q13: Ternary', q13);
    logMessage('Q13: Ternary', q13);
  
    // Q14
    function findMax(a, b, c) {
      return Math.max(a, b, c);
    }
    var q14 = 'Max of 5, 9, 2: ' + findMax(5, 9, 2);
    card('Q14: Max', q14);
    logMessage('Q14: Max', q14);
  
    // Q15
    function greet(name) {
      if (name === undefined) {
        name = 'Guest';
      }
      return 'Hi, ' + name + '!';
    }
    var q15 = greet() + ' / ' + greet('Alice');
    card('Q15: Greet', q15);
    logMessage('Q15: Greet', q15);
  
    // Q16
    var square = function(n) {
      return n * n;
    };
    var q16 = '5^2: ' + square(5);
    card('Q16: Square', q16);
    logMessage('Q16: Square', q16);
  
    // Q17
    function processData(data, callback) {
      return callback(data);
    }
    var q17 = processData('Test Data', function(d) {
      return 'Proc: ' + d.toUpperCase();
    });
    card('Q17: Callback', q17);
    logMessage('Q17: Callback', q17);
  
    // Q18
    function multiplyBy(factor) {
      return function(n) {
        return n * factor;
      };
    }
    var triple = multiplyBy(3);
    var q18 = '5 * 3: ' + triple(5);
    card('Q18: Multiply', q18);
    logMessage('Q18: Multiply', q18);
  
    // Q19
    function isLeapYear(year) {
      return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }
    var q19 = '2020: ' + isLeapYear(2020) + ', 1900: ' + isLeapYear(1900);
    card('Q19: Leap', q19);
    logMessage('Q19: Leap', q19);
  
    // Q21
    function convertTemp(value, unit) {
      if (unit === 'C') {
        return value + '°C = ' + (value * 9/5 + 32).toFixed(1) + '°F';
      } else {
        return value + '°F = ' + ((value - 32) * 5/9).toFixed(1) + '°C';
      }
    }
    var q21 = '25°C → F: ' + convertTemp(25, 'C') + '<br>' +
              '77°F → C: ' + convertTemp(77, 'F');
    card('Q21: Temp', q21);
    logMessage('Q21: Temp', q21);
  });
  