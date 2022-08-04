import chalk from 'chalk';
import * as fs from 'fs';

function extraiLinks(texto) {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
  const arrayResultados = [];
  let temp;
  while ((temp = regex.exec(texto)) !== null) {
    arrayResultados.push({ [temp[1]]: temp[2] });
  }
  return arrayResultados.length === 0 ? 'Não há links no arquivo' : arrayResultados;
}

function trataErro(erro) {
  throw new Error(chalk.red(erro.code, 'não há arquivo no caminho'));
}

async function pegaArquivo(caminho) {
  const encoding = 'utf8';
  try {
    const texto = await fs.promises.readFile(caminho, encoding);
    return extraiLinks(texto);
  } catch (erro) {
    trataErro(erro);
  }
}

export default pegaArquivo;