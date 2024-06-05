//EXERCICIO 01
dobraValores = () => {
    const dobraValores = []; // Criando uma array
    dobraValores[0] = document.getElementById("array01").value; //pega o numero digitado na caixa 01.
    dobraValores[1] = document.getElementById("array02").value; //pega o numero digitado na caixa 02.
    dobraValores[2] = document.getElementById("array03").value; //pega o numero digitado na caixa 03.
    dobraValores[3] = document.getElementById("array04").value; //pega o numero digitado na caixa 04.
    const calcular = document.getElementById("calcular").innerText; // const para quando o botão de calcular ser acionado, chamar essa função.

    for(let i = 0; i < 4 ; i++){ //Um contador ate 4, para conseguir dobrar o valor de dentro de cada array
        dobraValores[i] = (dobraValores[i] * 2);
        console.log("dobraValores["+i+"]= "+ dobraValores[i]); // mostra no console os valores.
    };

        document.getElementById("arrayDobro").innerText = "O array com os números dobrados é: " + dobraValores;  //Envia para o campo no html para o usuario visualizar.
};

//EXERCICIO 02
ordenaPalavras = () => {
    const ordenaPalavras = []; //Criei a array
    ordenaPalavras[0] = document.getElementById("arrayOrdenaPalavras01").value; // Pega os valores digitados no campo 01
    ordenaPalavras[1] = document.getElementById("arrayOrdenaPalavras02").value; // Pega os valores digitados no campo 02
    ordenaPalavras[2] = document.getElementById("arrayOrdenaPalavras03").value; // Pega os valores digitados no campo 03
    ordenaPalavras[3] = document.getElementById("arrayOrdenaPalavras04").value; // Pega os valores digitados no campo 04

    ordenaPalavras.sort((a, b) => b.length - a.length); //Ordena as palavras de forma decrescente.
    //.length -> transforma em numeros, quantas letras. 

    console.log(ordenaPalavras); //-> mostra no console.

    document.getElementById("arrayOrdenaPalavras").innerText = "As palavras ordenadas em método crescente: "+ ordenaPalavras; //-> mostra no html os valores ja ordenados. 
}
//EXERCICIO 03
apenasPares = () =>{
    const apenasPares = []; //Array criado;
    apenasPares[0] = document.getElementById("valor01").value;//Recebo os valores dos campos no HTML
    apenasPares[1] = document.getElementById("valor02").value;
    apenasPares[2] = document.getElementById("valor03").value;
    apenasPares[3] = document.getElementById("valor04").value;
    const par = x => x % 2 === 0; //Função de detectar se o numero é par ou não.
    
    const pares = apenasPares.filter(par); // criei uma nova array, e igualei ela ao filtro par.


    console.log("Apenas Valores Pares: " + pares);
    document.getElementById("apenasPares") .innerText = "Apenas os números pares: "+ pares;
}