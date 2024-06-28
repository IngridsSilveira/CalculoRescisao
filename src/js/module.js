// Função para calcular o valor do salário
export function calcularValorSalario(salario, dias) {
  return (salario / 31) * dias;
}

// Função para calcular o décimo terceiro
export function calcularDecimoTerceiro(salario, meses) {
  return (salario / 12) * meses;
}

// Função para calcular as férias vencidas
export function calcularFeriasVencidas(salario, fVencidas) {
  if (fVencidas.checked) {
    return salario / 3 + salario;
  } else {
    return 0;
  }
}

// Função para calcular as férias proporcionais
export function calcularFeriasProporcionais(
  salario,
  quantidadeFeriasProporcionais
) {
  return (salario / 12) * quantidadeFeriasProporcionais;
}

//Função para calcular desconto INSS
export function descontoInss(salario) {
  let desconto;
  if (salario <= 1412.0) {
    desconto = salario * 0.075;
  } else if (salario <= 2666.68) {
    desconto = 1412.0 * 0.075 + (salario - 1412.0) * 0.09;
    desconto = desconto - 21.18;
  } else if (salario <= 4000.03) {
    desconto =
      1412.0 * 0.075 + (2666.68 - 1412.0) * 0.09 + (salario - 2666.68) * 0.12;
    desconto = desconto - 101.18;
  } else if (salario <= 7786.02) {
    desconto =
      1412.0 * 0.075 +
      (2666.68 - 1412.0) * 0.09 +
      (4000.03 - 2666.68) * 0.12 +
      (salario - 4000.03) * 0.14;
    desconto = desconto - 181.18;
  } else {
    desconto = 908.85; // Teto do INSS
  }
  return desconto;
}

// Função principal para calcular a rescisão
export function calcularRescisao(
  salarioDom,
  diasTrabalhados,
  mesesTrabalhados,
  fProporcionais,
  fVencidas,
  exibirSalario,
  exibirDecimo,
  exibirFeriasVenc,
  exibirFeriasPropo,
  total,
  exibirINSS,
  exibirDecimoInss,
  salLiquido
) {
  const salario = parseFloat(salarioDom.value);
  const dias = parseFloat(diasTrabalhados.value);
  const meses = parseFloat(mesesTrabalhados.value);
  const quantidadeFeriasProporcionais = parseFloat(fProporcionais.value);

  if (
    !validarEntrada(salario) ||
    !validarEntrada(dias) ||
    !validarEntrada(meses) ||
    !validarEntrada(quantidadeFeriasProporcionais)
  ) {
    salarioDom.focus();
    alert("Por favor, preencha todos os campos com valores válidos.");
    return;
  }

  const valorSalario = calcularValorSalario(salario, dias);
  const decimoTerceiro = calcularDecimoTerceiro(salario, meses);
  const feriasVencidas = calcularFeriasVencidas(salario, fVencidas);
  const feriasProporcionais = calcularFeriasProporcionais(
    salario,
    quantidadeFeriasProporcionais
  );
  const totalValor =
    valorSalario + decimoTerceiro + feriasVencidas + feriasProporcionais;

  const inssSalario = descontoInss(valorSalario);
  console.log(decimoTerceiro);
  const decimoInss = descontoInss(decimoTerceiro);
  const salLiquidoT = totalValor - (inssSalario + decimoInss);

  const resultado = {
    valorSalario: valorSalario.toFixed(2),
    decimoTerceiro: decimoTerceiro.toFixed(2),
    feriasVencidas: feriasVencidas.toFixed(2),
    feriasProporcionais: feriasProporcionais.toFixed(2),
    total: totalValor.toFixed(2),
    inssSalario: inssSalario.toFixed(2),
    decimoInss: decimoInss.toFixed(2),
    salLiquido: salLiquidoT.toFixed(2),
  };

  exibirValoresNoDOM(
    resultado,
    exibirSalario,
    exibirDecimo,
    exibirFeriasVenc,
    exibirFeriasPropo,
    total,
    exibirINSS,
    exibirDecimoInss,
    salLiquido
  );
}

// Função para validar erros na entrada
export function validarEntrada(valor) {
  return !isNaN(valor) && valor > 0;
}

// Função para exibir valores
export function exibirValoresNoDOM(
  valores,
  exibirSalario,
  exibirDecimo,
  exibirFeriasVenc,
  exibirFeriasPropo,
  total,
  exibirINSS,
  exibirDecimoInss,
  salLiquido
) {
  exibirSalario.innerHTML = `Saldo do Salário: R$${valores.valorSalario}`;
  exibirDecimo.innerHTML = `Décimo 13º: R$${valores.decimoTerceiro}`;
  exibirFeriasVenc.innerHTML = `Férias Vencidas: R$${valores.feriasVencidas}`;
  exibirFeriasPropo.innerHTML = `Férias Proporcionais: R$${valores.feriasProporcionais}`;
  total.innerHTML = `Total Bruto: R$${valores.total}`;

  exibirINSS.innerHTML = `INSS: R$${valores.inssSalario}`;
  exibirDecimoInss.innerHTML = `INSS do décimo: R$${valores.decimoInss}`;
  salLiquido.innerHTML = `Total Líquido: R$${valores.salLiquido}`;
}

// Função para limpar valores
export function limparValores(
  salarioDom,
  diasTrabalhados,
  mesesTrabalhados,
  fProporcionais,
  exibirSalario,
  exibirDecimo,
  exibirFeriasVenc,
  exibirFeriasPropo,
  total,
  exibirINSS,
  exibirDecimoInss,
  salLiquido
) {
  salarioDom.value = 0;
  diasTrabalhados.value = 0;
  mesesTrabalhados.value = 0;
  fProporcionais.value = 0;

  exibirSalario.innerHTML = "";
  exibirDecimo.innerHTML = "";
  exibirFeriasVenc.innerHTML = "";
  exibirFeriasPropo.innerHTML = "";
  total.innerHTML = "";
  exibirINSS.innerHTML = "";
  exibirDecimoInss.innerHTML = "";
  salLiquido.innerHTML = "";
}
