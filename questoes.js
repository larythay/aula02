//Exercicio 01

function numeroNegativoOuPositivo(numero) {
  if (numero >= 1) {
    console.log('Esse número é positivo.');
  }
  else if(numero < 0){
    console.log('Esse número é negativo.');
  }
  else{
    console.log('Esse número é neutro.');
  }
}

numeroNegativoOuPositivo(28);

//Exercicio 02

function numeroParOuImpar(numero){
    if (numero %2 == 0){
      console.log('O número é par');
    }
    else{
      console.log('Número ímpar');
    }
  }

let variavel = 70;
numeroParOuImpar(variavel);

//Exercicio 3

function idadeDosOtos (idade){
  if (idade <= 12){
    console.log('é um pirraia');
  }
  else if(idade <= 18){
    console.log('é um amostradinho');
  }
  else if(idade <= 59){
    console.log('é um chatinho');
  }
  else{
    console.log('já é veio');
  }
}

idadeDosOtos(18);

//Exercicio 04

function nota (nota){
  if (nota == 10){
    console.log('Parabens: nota A!')
  }
  else if (nota >= 8){
    console.log('Parabens: nota B!')
  }
  else if (nota >= 6){
    console.log('Vamos melhorar: nota C!')
  }
  else if (nota >= 4){
    console.log('É, precisa aprender: nota D!')
  }
  else{
    console.log('Porra menó, nota F!')
  }
}

nota(6);

//Exercicio 05

let dia = 2;

switch (dia){
  case 1: console.log('Segunda');
  break;
  case 2: console.log('Terça');
  break;
  case 3: console.log('Quarta');
  break;
  case 4: console.log('Quinta');
  break;
  case 5: console.log('Sexta');
  break;
  case 6: console.log('Sábado');
  break;
  case 7: console.log('Domingo');
  break;
}

//Exercicio 06

function bonus(faturamento){
  if(faturamento < 1000){
    return 0;
  }
  else if (faturamento  <= 5000){
    return faturamento * 0.05;
  }
  else{
    return faturamento * 0.1;
  }
}

console.log(bonus(900));
