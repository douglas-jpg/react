// TIPOS PRIMITIVOS:

// number: Representa valores numéricos, incluindo inteiros e decimais.
let numero: number = 123;
// numero = "texto" => O tipo 'string' não pode ser atribuído ao tipo 'number'.

// string: Representa valores de texto.
let texto: string = '1234';

// boolean: Representa valores verdadeiros ou falsos.
let booleano: boolean = true;

// null: Tipo que tem apenas o valor null.
let nulo: null;

// undefined: Tipo que tem apenas o valor undefined.
let indefinido: undefined;

// void: Representa a ausência de tipo. Normalmente usado como tipo de retorno de funções que não retornam nenhum valor.
let vazio: void;

// never: Representa o tipo de valores que nunca ocorrem, como uma função que lança uma exceção ou entra em um loop infinito.
let nunca: never;

// any: Representa qualquer tipo de valor, útil quando você não sabe ou não quer especificar um tipo.
let qualquer: any;

// unknown: Similar a any, mas mais seguro, pois é necessário fazer uma verificação de tipo antes de utilizá-lo.
let desonhecido: unknown;

// OUTROS TIPOS:
// object: Representa qualquer valor que não seja do tipo primitivo.
let objeto: object = { nome: 'dougls', idade: 20 };
let outroObjeto: { nome: string; idade: number } = {
    nome: 'douglas',
    idade: 20,
};

// array: Representa uma coleção de elementos do mesmo tipo. Pode ser definido de duas formas:
// type[] (por exemplo, number[] para um array de números)
let numeros: number[] = [1, 2, 3, 4, 5];
// Array<type> (por exemplo, Array<number> para um array de números)
let palavras: Array<number> = [1, 2, 3, 4, 5];

// tuple: Representa um array com um número fixo de elementos, onde os tipos dos elementos são conhecidos, mas não necessariamente do mesmo tipo.
let tupla: [string, number] = ['douglas', 20];

// enum: Representa um conjunto de constantes nomeadas.
enum Direcao {
    Cima,
    Baixo = 'BAIXO',
    Esquerda = 'ESQUERDA',
    Direita = 'DIREITA',
}

// Por padrão, o TypeScript atribui a esses membros valores numéricos começando de 0 e aumentando em 1 para cada membro subsequente.
let cima: Direcao = Direcao.Cima;
let baixo: string = Direcao.Baixo; // "BAIXO"

// literal types: Tipos que representam um único valor específico.
type cor = 'vermelho' | 'azul' | 'amarelo';
/* let verde: cor = 'verde' => O tipo '"verde"' não pode ser atribuído ao tipo 'cor' */
let vermelho: cor = 'vermelho';

// union types: Tipos que podem ter mais de um tipo possível.
let duplo: number | string = 10;
duplo = 'text';

// intersection types: Tipos que têm todos os membros de todos os tipos de interseção (por exemplo, type A = { a: number } & { b: string }).
type A = { a: number };
type B = { b: string };
type AB = A & B;

let objAB: AB = { a: 123, b: 'texto' };

// interface: Define uma estrutura de dados que descreve a forma de um objeto.
interface Pessoa {
    nome: string;
    idade: number;
}

let pessoa: Pessoa = { nome: 'Douglas', idade: 20 };

// type alias: Permite definir um novo tipo baseado em outros tipos existentes.
type Pontos = { x: number; y: number };

let pontos: Pontos = { x: 10, y: 20 };
type Vetor = Pontos & { z: number };

// assertion types: São utilizados para garantir ao compilador que um valor é de um tipo específico, mesmo que o compilador não possa inferi-lo.
let textoCompleto: unknown = 'texto';
let tamanhoTexto: number = (textoCompleto as string).length;

// recursive types: Tipos que podem se referir a si mesmos na sua própria definição.
interface arvoreNode {
    valor: number;
    esquerda?: arvoreNode;
    direita?: arvoreNode;
}

// PARA SABER O TIPO DA VARIVAEL USA typeof:

typeof numero; // number
typeof texto; // string
