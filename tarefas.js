const prompt = require('prompt-sync')();

//Exercício 1:

function verificaParOuImpar(){
    let numero = Number(prompt('Escolha um número: '))
    if(numero % 2 === 0){
        return `O número ${numero} é par.`;
    }else{
        return `O número ${numero} é ímpar.`;
    }
}
console.log(verificaParOuImpar());

// Exercício 2:

function classificaFaixaEtaria(){
    let idade = Number(prompt('Digite a sua idade: '))
        if(idade < 0){
            return `Por favor, digite um número maior que "0".`
        }
        if(idade >= 0 && idade < 12){
            return 'Criança.';
        }else if(idade >= 12 && idade < 19){
            return 'Adolescente.';
        }else if(idade >= 19 && idade < 60){
            return 'Adulto.';
        }else if(idade >= 60){
            return 'Idoso.';
        }
}
console.log(classificaFaixaEtaria());

// Exercício 3:

function classificaNotas(){
    let nota = Number(prompt('Digite a nota: '))
    if(nota >= 7 && nota <= 10){
        return 'Aprovado.';
    }else if(nota == 5 || nota == 6){
        return 'Recuperação.';
    }else if(nota >= 0 && nota <= 4){
        return 'Reprovado.';
    }
    else{
        return 'Nota inválida. Digite uma nota no intervalo de 0 a 10.';
    }
}
console.log(classificaNotas());


// Exercício 4:

function menuInterativo(){
    console.log('\n****** MENU ******\n');
    console.log('\nDigite 1 para opção 1, 2 para opção 2 ou 3 para opção 3.\n');
    const opcao = Number(prompt('Digite a opção desejada: '))
    switch(opcao) {
        case 1:
            console.log('Você escolheu a opção 1.');
            break;
        case 2:
            console.log('Você escolheu a opção 2.');
            break;
        case 3:
            console.log('Você escolheu a opção 3.');
            break;
        default:
            console.log('Por favor, digite uma das 3 opções disponíveis.')
    }
}
menuInterativo();

// Exercício 5:

function calculoImc(){
    let peso = Number(prompt('Digite seu peso: '))
    let altura = Number(prompt('Digite sua altura: '))
    if(peso <= 0 || altura <= 0){
        return `Dados incorretos. Digite corretamente o peso e altura.`
    }
    let imcInicial = peso / (altura * altura);
    let imc = imcInicial.toFixed(2);
    if(imc < 18.5){
        return `Seu IMC é de ${imc}. Você está abaixo do peso ideal.`;
    }else if(imc >= 18.5 && imc <25){
        return `Seu IMC é de ${imc}. Você está na faixa do peso ideal.`;
    }else if(imc >= 25 && imc <30 ){
        return `Seu IMC é de ${imc}. Você está na faixa do sobrepeso.`;
    }else if(imc >= 30 && imc <35){
        return `Seu IMC é de ${imc}. Você está na faixa da obesidade grau I.`;
    }else if(imc >= 35 && imc <40){
        return `Seu IMC é de ${imc}. Você está na faixa da obesidade grau II.`;
    }else if(imc >= 40){
        return `Seu IMC é de ${imc}. Você está na faixa da obesidade grau III.`;
    }        
}
console.log(calculoImc());

// Exercício 6:

function classificaTriangulo(){
    let ladoA = Number(prompt('Digite a medida do lado A: '))
    let ladoB = Number(prompt('Digite a medida do lado B: '))
    let ladoC = Number(prompt('Digite a medida do lado C: '))
    if(ladoA <= 0 || ladoB <= 0 || ladoC <= 0){
        return `Todos os valores devem ser positivos e maiores que "0".`
    }

    if ( ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {
        if (ladoA === ladoB && ladoB === ladoC) {
            return 'Triângulo equilátero.';
        } else if(ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC) {
            return 'Triângulo escaleno.';
        } else{
            return 'Triângulo isósceles.';
        }

    }else{
        return 'As medidas informadas não formam um triângulo.';
    }
}
console.log(classificaTriangulo());

// Exercício 7:

function calcularFrutas(){
    let qtd = Number(prompt('Digite o número de maçãs que você deseja comprar: '))
    let preco;
    if(qtd < 12){
        preco = 0.30;
    }else{
        preco = 0.25;
    }
    let total = qtd * preco;
    let informacao = (qtd > 1 ? `Você comprou ${qtd} maçãs. Valor total a pagar R$ ${total}.` : `Você comprou ${qtd} maçã. Valor total a pagar R$ ${total}.`);
    return informacao;
}
console.log(calcularFrutas());


// Exercício 8:

function ordenarValores(){
    let numero1 = Number(prompt('Digite o primeiro número: '))
    let numero2 = Number(prompt('Digite outro número: '))
    if(numero1 === numero2){
        return `Os números não podem ser iguais. Tente novamente!`
    }
    let numeros = [numero1, numero2];
    numeros.sort((a, b) => a - b);
    numero1 = numeros[0];
    numero2 =  numeros[1];
    return `Valores em ordem crescente: ${numero1}, ${numero2}`;
}
console.log(ordenarValores());

// Exercício 9:

function contagemRegressiva(){
    for(let i = 10; i >= 1; i--){
        console.log(i);
    }
}
contagemRegressiva();

// Exercício 10:

function repetirNumNaTela(){
    let numero = Number(prompt('Digite um número inteiro: '))
    for(let i = 0; i < 10; i++){
        console.log(numero);
    }
}
repetirNumNaTela();

// Exercício 11:

function somaDosCincoNumeros(){
    let numeros = [];
    let soma = 0;
    numeros.push(Number(prompt('Digite o primeiro número: ')));
    numeros.push(Number(prompt('Digite o segundo número: ')));
    numeros.push(Number(prompt('Digite o terceiro número: ')));
    numeros.push(Number(prompt('Digite o quarto número: ')));
    numeros.push(Number(prompt('Digite o quinto número: ')));
    console.log(numeros);
    for(let i = 0; i<numeros.length; i++){
        soma += numeros[i];

    }
    console.log('A soma dos número é', soma);
}
somaDosCincoNumeros();

// Exercício 12:

function tabuada(){
    let numero = Number(prompt('Digite um número de 1 a 10 para saber a tabuada: '))
        if(numero >= 1 && numero <= 10){
            for(let i = 1; i <= 10; i++){
            console.log(`${numero} x ${i} = ${numero * i}`);
        }
  
        }else{
            console.log('Por favor, digite um número de 1 a 10.');
        }
}

tabuada();

// Exercício 13:

function mediaNumerosDecimais(){
let contador = 0;
let soma = 0;
    while(true){
    let numeroInicial = prompt('Digite um número decimal (com casas após a vírgula) ou digite "0" para interromper o cálculo: ')
    let numero = parseFloat(numeroInicial); 
    if(numero === 0){
        break;
    }
    if(Number.isInteger(numero)){
        console.log('Atenção, digitar apenas números decimais!!')
        continue;
    }
    soma += numero;
    contador++;
}
    if(contador === 0){
        return 'Encerrando programa.';
    }
    let media = soma / contador;
    return `A média dos números é: ${media}`;
}
console.log(mediaNumerosDecimais());

// Exercício 14:

function fatorial(){
    let numero = Number(prompt('Digite um número inteiro: '))
    let contador = 1;
    for(let i = numero; i > 1; i--){
        contador *= i;
    }
    return `Fatorial de ${numero} é: ${contador}`;
}
console.log(fatorial());

// // Exercício 15:

function fibonacci(){
    let fibonacci = [0, 1];
        for(let i = 2; i <10; i++){
        fibonacci[i] = fibonacci [i - 1] + fibonacci [i - 2];
    }
    console.log(fibonacci)
}
fibonacci();