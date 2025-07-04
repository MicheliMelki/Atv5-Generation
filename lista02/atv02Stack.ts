// iMPORTAÇÃO DO PACOTE
import ler = require("readline-sync");
import { Stack } from "../stack";
import { readFileSync } from "fs";

const fila = new Stack<string>();
let continua: string = "";


// ESTRUTURA DO MENU DE OPÇÕES
do{
    console.log("*************************************");
    console.log("........ Biblioteca Digital ........\n");
    console.log("1 - Adicionar Livro na Pilha");
    console.log("2 - Listar todos os Livros");
    console.log("3 - Retirar Livro da Pilha");
    console.log("0 - Sair");
    console.log("\n*************************************");

    let opcao = ler.questionInt(" Entre com a opcao desejada: ");

    // INICIO DO LOOP
    switch(opcao){
        case 1:
            fila.push(ler.question("Digite o nome: "));
            console.log("Livro Adicionado!");     
        break;
        
        case 2:
            fila.printStack();
        break;

        case 3:
            if (fila.isEmpty()) {
        console.log("A pilha está vazia. Nenhum livro para retirar.");
    } else {
        fila.pop();
        console.log("Um livro foi retirado da pilha!");
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

