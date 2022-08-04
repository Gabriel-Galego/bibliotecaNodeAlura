import chalk from 'chalk';
import pegaArquivo from '../lib-markdown/index.js';
import validaUrls from './http-validacao.js';

const caminho = process.argv;

async function processaTexto(caminhoDeArquivo) {
  const resultado = await pegaArquivo(caminhoDeArquivo[2]);
  if (caminho[3] === 'validar') {
    console.log(chalk.yellow('links validos: '), await validaUrls(resultado));
  } else {
    console.log(chalk.yellow('lista de links'), resultado);
  }

}

processaTexto(caminho);