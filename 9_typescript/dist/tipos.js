"use strict";
// TIPOS PRIMITIVOS:
// number: Representa valores numéricos, incluindo inteiros e decimais.
let numero = 123;
// numero = "texto" => O tipo 'string' não pode ser atribuído ao tipo 'number'.
// string: Representa valores de texto.
let texto = '1234';
// boolean: Representa valores verdadeiros ou falsos.
let booleano = true;
// null: Tipo que tem apenas o valor null.
let nulo;
// undefined: Tipo que tem apenas o valor undefined.
let indefinido;
// void: Representa a ausência de tipo. Normalmente usado como tipo de retorno de funções que não retornam nenhum valor.
let vazio;
// never: Representa o tipo de valores que nunca ocorrem, como uma função que lança uma exceção ou entra em um loop infinito.
let nunca;
// any: Representa qualquer tipo de valor, útil quando você não sabe ou não quer especificar um tipo.
let qualquer;
// unknown: Similar a any, mas mais seguro, pois é necessário fazer uma verificação de tipo antes de utilizá-lo.
let desonhecido;
// OUTROS TIPOS:
// object: Representa qualquer valor que não seja do tipo primitivo.
let objeto = { nome: 'dougls', idade: 20 };
let outroObjeto = {
    nome: 'douglas',
    idade: 20,
};
// array: Representa uma coleção de elementos do mesmo tipo. Pode ser definido de duas formas:
// type[] (por exemplo, number[] para um array de números)
let numeros = [1, 2, 3, 4, 5];
// Array<type> (por exemplo, Array<number> para um array de números)
let palavras = [1, 2, 3, 4, 5];
// tuple: Representa um array com um número fixo de elementos, onde os tipos dos elementos são conhecidos, mas não necessariamente do mesmo tipo.
let tupla = ['douglas', 20];
// enum: Representa um conjunto de constantes nomeadas.
var Direcao;
(function (Direcao) {
    Direcao[Direcao["Cima"] = 0] = "Cima";
    Direcao["Baixo"] = "BAIXO";
    Direcao["Esquerda"] = "ESQUERDA";
    Direcao["Direita"] = "DIREITA";
})(Direcao || (Direcao = {}));
// Por padrão, o TypeScript atribui a esses membros valores numéricos começando de 0 e aumentando em 1 para cada membro subsequente.
let cima = Direcao.Cima;
let baixo = Direcao.Baixo; // "BAIXO"
/* let verde: cor = 'verde' => O tipo '"verde"' não pode ser atribuído ao tipo 'cor' */
let vermelho = 'vermelho';
// union types: Tipos que podem ter mais de um tipo possível.
let duplo = 10;
duplo = 'text';
let objAB = { a: 123, b: 'texto' };
let pessoa = { nome: 'Douglas', idade: 20 };
let pontos = { x: 10, y: 20 };
// assertion types: São utilizados para garantir ao compilador que um valor é de um tipo específico, mesmo que o compilador não possa inferi-lo.
let textoCompleto = 'texto';
let tamanhoTexto = textoCompleto.length;
// PARA SABER O TIPO DA VARIVAEL USA typeof:
typeof numero; // number
typeof texto; // string
