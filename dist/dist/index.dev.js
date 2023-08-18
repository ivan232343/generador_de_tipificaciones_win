"use strict";

var _functions = require("./functions.js");

var request = new XMLHttpRequest();
var ctrlBoxSecondary = document.querySelector(".container__box-secundary");
var formGetTipi = document.querySelector("#gen_tipi");
var hora = new Date();

window.onload = function () {
  (0, _functions.get_status)();
  getToday();
};

formGetTipi.addEventListener("submit", function (e) {
  e.preventDefault();
  var toLocal = JSON.parse("".concat((0, _functions.get_campos)()));
  localStorage.setItem(toLocal.dni_cl, (0, _functions.get_campos)());
  (0, _functions.buildCards)(toLocal.dni_cl, toLocal.tkt_cl, toLocal.nodo_serv, toLocal.mac_serv, toLocal.potencia_olt, toLocal.potencia_onu, toLocal.potencia_status, toLocal.obs_cl, toLocal.nombre_cl, toLocal.ctrl_proccess); // ctrlBoxSecondary.innerHTML = "";

  formGetTipi.reset();
  document.querySelector('.bxfsh').classList.add('_hidden');
});

var getToday = function getToday() {
  var today_regex = "".concat(hora.getDate(), "/").concat(hora.getMonth() + 1, "/").concat(hora.getFullYear(), "T[0-9]+:[0-9]+");

  for (var i = 0; i < localStorage.length; i++) {
    var prueba = JSON.parse(localStorage.getItem(localStorage.key(i)));

    if (prueba.createOn.search(today_regex) === 0) {
      (0, _functions.buildCards)(prueba.dni_cl, prueba.tkt_cl, prueba.nodo_serv, prueba.mac_serv, prueba.potencia_olt, prueba.potencia_onu, prueba.potencia_status, prueba.obs_cl, prueba.nombre_cl, prueba.ctrl_proccess);
    }
  }
};

document.querySelectorAll(".cabecera .item").forEach(function (e) {
  e.addEventListener("click", function (l) {
    document.querySelectorAll("main div.container").forEach(function (e) {
      return e.classList.add("_hidden");
    });
    document.querySelector("#".concat(l.target.dataset.topen)).classList.remove("_hidden");
    console.log(l.target.dataset.topen);
  });
});
document.getElementById("mac_serv").addEventListener("input", function (e) {
  var valueMac = e.target.value;
  e.target.value = valueMac.replace("48575443", "HWTC");
});
document.getElementById("tkt_cl").addEventListener("input", function (e) {
  var valueTkt = e.target.value.replace("AT-", "");
  e.target.value = 'AT-' + valueTkt;
});

function LimitChar() {
  document.querySelectorAll(".card.contenido").forEach(function (e) {
    e.textContent = e.textContent.substring(0, 300);
  });
} // const reload = () => document.getElementById("hist_today").innerHTML = "" && getToday()