function recisao(salario, diasTrabalhados, mesesTrabalhados) {
  //CALCULO
  const valorSalario = (salario / 31) * diasTrabalhados;
  const decimoTerceiro = (salario / 12) * mesesTrabalhados;
  const feriasVencidas = salario / 3 + salario;
  const feriasProporcionais = (salario / 12) * 2;
  const total =
    valorSalario + decimoTerceiro + feriasVencidas + feriasProporcionais;

  //Retornando os valores para exibição
  return {
    Salario: valorSalario.toFixed(2),
    DecimoTerceiro: decimoTerceiro.toFixed(2),
    FeriasVencidas: feriasVencidas.toFixed(2),
    FeriasProporcionais: feriasProporcionais.toFixed(2),
    Recisao: total.toFixed(2),
  };
}
//Chamando a função e exibindo
const resultado = recisao(700, 8, 7);
console.log(resultado);
