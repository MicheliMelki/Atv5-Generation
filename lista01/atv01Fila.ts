// iMPORTAÇÃO DO PACOTE
import ler = require("readline-sync");
import { Queue } from "../queue";
import { readFileSync } from "fs";

const fila = new Queue<string>();
let continua: string = "";


// ESTRUTURA DO MENU DE OPÇÕES
do{
    console.log("*************************************");
    console.log("........ Fila de atendimento ........\n");
    console.log("1 - Adicionar Cliente na Fila");
    console.log("2 - Lista todos os Cliente");
    console.log("3 - Retirar Cliente da Fila");
    console.log("0 - Sair");
    console.log("\n*************************************");

    let opcao = ler.questionInt(" Entre com a opcao desejada: ");

    // INICIO DO LOOP
    switch(opcao){
        case 1:
            fila.enqueue(ler.question("Nome: "));
            console.log("Cliente Adicionado!");     
        break;
        
        case 2:
            fila.printQueue();
        break;

        case 3:
            if (fila.isEmpty()) {
        console.log("A fila está vazia. Nenhum cliente para chamar.");
    } else {
        fila.dequeue();
        console.log("Cliente foi chamado!");
    }    
        break;

        case 0:   
            continua = "n"; // Encerra o programa 
        break;

        default:
            console.log("Opção invalida!")
    } 

    if (continua !=="n"){
        continua = ler.question("Deseja continuar? (s/n): ").toLowerCase();
    }

}while(continua === "s");

console.log("Programa Finalizado!");

