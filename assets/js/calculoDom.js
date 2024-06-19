const salarioDom = document.querySelector("#salario");
const diasTrabalhados = document.querySelector("#diasTrabalhados");
const mesesTrabalhados = document.querySelector("#mesesTrabalhados");
const fProporcionais = document.querySelector("#fProporcionais");

// Função para calcular o valor do salário
function calcularValorSalario(salario, dias) {
  return (salario / 31) * dias;
}

// Função para calcular o décimo terceiro
function calcularDecimoTerceiro(salario, meses) {
  return (salario / 12) * meses;
}

// Função para calcular as férias vencidas
function calcularFeriasVencidas(salario) {
  return salario / 3 + salario;
}

// Função para calcular as férias proporcionais
function calcularFeriasProporcionais(salario, quantidadeFeriasProporcionais) {
  return (salario / 12) * quantidadeFeriasProporcionais;
}

// Função principal para calcular a rescisão
function calcularRescisao() {
  const salario = parseFloat(salarioDom.value);
  const dias = parseFloat(diasTrabalhados.value);
  const meses = parseFloat(mesesTrabalhados.value);
  const quantidadeFeriasProporcionais = parseFloat(fProporcionais.value);

  if (!validarEntrada(salario) || !validarEntrada(dias) || !validarEntrada(meses) || !validarEntrada(quantidadeFeriasProporcionais)) {
    alert("Por favor, preencha todos os campos com valores válidos.");
    return;
  }

  const valorSalario = calcularValorSalario(salario, dias);
  const decimoTerceiro = calcularDecimoTerceiro(salario, meses);
  const feriasVencidas = calcularFeriasVencidas(salario);
  const feriasProporcionais = calcularFeriasProporcionais(
    salario,
    quantidadeFeriasProporcionais
  );
  const total =
    valorSalario + decimoTerceiro + feriasVencidas + feriasProporcionais;

  const resultado = {
    valorSalario: valorSalario.toFixed(2),
    decimoTerceiro: decimoTerceiro.toFixed(2),
    feriasVencidas: feriasVencidas.toFixed(2),
    feriasProporcionais: feriasProporcionais.toFixed(2),
    total: total.toFixed(2),
  };

  exibirValoresNoDOM(resultado);
}

//Função para exibir valores
function exibirValoresNoDOM(valores) {
  const exibirSalario = document.querySelector("#exibirSalario");
  exibirSalario.innerHTML = `Salário: ${valores.valorSalario}`;

  const exibirDecimo = document.querySelector("#exibirDecimo");
  exibirDecimo.innerHTML = `Décimo 13º: ${valores.decimoTerceiro}`;

  const exibirFeriasVenc = document.querySelector("#exibirFeriasVenc");
  exibirFeriasVenc.innerHTML = `Férias Vencidas ${valores.feriasVencidas}`;

  const exibirFeriasPropo = document.querySelector("#exibirFeriasPropo");
  exibirFeriasPropo.innerHTML = `Férias Proporcionais ${valores.feriasProporcionais}`;

  const total = document.querySelector("#total");
  total.innerHTML = `Rescisão: ${valores.total}`;
}

//Função para erros
function validarEntrada(valor) {
  return !isNaN(valor) && valor !== "";
}


const btn = document.querySelector("#btn").addEventListener("click", (e) => {
  e.preventDefault();
  calcularRescisao();
});
