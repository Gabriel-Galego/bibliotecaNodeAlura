import pegaArquivo from '../lib-markdown/index.js';

const caminho = process.argv;
console.log(caminho);

console.log(pegaArquivo(caminho[2]));