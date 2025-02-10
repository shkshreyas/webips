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
  
  // Q1: Create a Number List (for loop)
  let t="";
  let n1 = prompt("Enter Number n (Number List): ");
  for(let i=1;i<=n1;i++){
    t+=i+" ";
  }
  card('Q1: Create a Number List (for loop)', t);
  logMessage('Q1: Create a Number List (for loop)', t);

  // Q2: Display Multiplication Table (while loop)
  let n2 = prompt("Enter Number n (for multiplication): ");
  let ta="";
  let m=1;
  while(m<=10){
    ta += `${n2} × ${m} = ${n2 * m} <br>`;
    m++;
  }
  card('Q2: Display Multiplication Table (while loop)', ta);
  logMessage('Q2: Display Multiplication Table (while loop)', ta);
  
  // Q3: Guess the Number Game (do-while loop)
  let rn=Math.floor(Math.random() * 10) + 1;
  let n3;
  do {
    n3 = prompt("Enter Number for guessing (1-10): ");
  } while(rn != n3);
  card('Q3: Win', 'You guessed the right number!');
  logMessage('Q3: Win', 'You guessed the right number!');
  
  // Q4: Generate Even and Odd Numbers (for loop)
  let n4 = prompt("Enter Number n for Even and Odd list: ");
  let even="", odd="";
  for(let i=1;i<=n4;i++){
    if(i%2==0) even += i+" ";
    else odd += i+" ";
  }
  card('Q4: Even Numbers', even);
  card('Q4: Odd Numbers', odd);
  logMessage('Q4: Even Numbers', even);
  logMessage('Q4: Odd Numbers', odd);
  
  // Q5: Print Fibonacci Series (for loop)
  let n5 = prompt("Enter Number n for Fibonacci Series: ");
  let fib=[0,1];
  for(let i=2;i<n5;i++){
    fib[i] = fib[i-1] + fib[i-2];
  }
  card('Q5: Fibonacci Series', fib.join(" "));
  logMessage('Q5: Fibonacci Series', fib.join(" "));
  
  // Q6: Find Prime Numbers (for loop)
  let n6 = prompt("Enter Number n for Prime Numbers: ");
  let primes="";
  for(let i=2;i<=n6;i++){
    let isPrime=true;
    for(let j=2;j*j<=i;j++){
      if(i%j==0){ isPrime=false; break; }
    }
    if(isPrime) primes+=i+" ";
  }
  card('Q6: Prime Numbers', primes);
  logMessage('Q6: Prime Numbers', primes);
  
  // Q7: Reverse a Number (do-while loop)
  let n7 = prompt("Enter Number to Reverse: ");
  let rev=0;
  do {
    rev = rev * 10 + (n7 % 10);
    n7 = Math.floor(n7 / 10);
  } while(n7 > 0);
  card('Q7: Reversed Number', rev);
  logMessage('Q7: Reversed Number', rev);
  
  // Q8: Calculate Factorial (for loop)
  let n8 = prompt("Enter Number to find Factorial: ");
  let fact = 1;
  for(let i=1; i<=n8; i++){
    fact *= i;
  }
  card('Q8: Factorial Calculation', fact);
  logMessage('Q8: Factorial Calculation', fact);
});