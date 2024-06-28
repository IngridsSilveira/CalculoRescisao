//IMPORT
import { calcularRescisao, limparValores } from "./module.js";

//INPUT'S
const salarioDom = document.querySelector("#salario");
const diasTrabalhados = document.querySelector("#diasTrabalhados");
const mesesTrabalhados = document.querySelector("#mesesTrabalhados");
const fProporcionais = document.querySelector("#fProporcionais");
const fVencidas = document.querySelector("#fVencidas");

//PARAGRÁFOS
let exibirSalario = document.querySelector("#exibirSalario");
let exibirDecimo = document.querySelector("#exibirDecimo");
let exibirFeriasVenc = document.querySelector("#exibirFeriasVenc");
let exibirFeriasPropo = document.querySelector("#exibirFeriasPropo");
let total = document.querySelector("#total");
let exibirINSS = document.querySelector("#exibirINSS");
let exibirDecimoInss = document.querySelector("#exibirDecimoInss");
let liquido = document.querySelector("#liquido");

const mostrar = document.querySelector(".mostrar");

//BOTÕES
document.querySelector("#btnCalcular").addEventListener("click", (e) => {
  e.preventDefault();
  calcularRescisao(
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
    liquido
  );
  mostrar.classList.remove("d-none");
  mostrar.classList.add("d-flex");
});

document.querySelector("#btnLimpar").addEventListener("click", (e) => {
  e.preventDefault();
  limparValores(
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
    liquido
  );
    mostrar.classList.add("d-none");
    mostrar.classList.remove("d-flex");
});

document.querySelector("#mostrarInfo").addEventListener("click", (e) => {
  e.preventDefault();
  const divInfo = document.querySelector("#invisible");
  divInfo.classList.toggle("d-none");
});
