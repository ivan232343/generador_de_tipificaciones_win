"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get_status = get_status;
exports.get_campos = get_campos;
exports.buildCards = void 0;

var _procesos = require("../dist/data/procesos.js");

var _base = require("./data/base.js");

var ctrl_proccess = document.querySelector("#ctrl_proccess");
var hora = new Date();
var ctrlBoxSecondary = document.querySelector(".container__box-secundary");
var PotenciaBox = document.querySelector(".-potencias");

function get_status() {
  var rellenar = "";

  _base.status_tickets.forEach(function (e) {
    rellenar += "<option value=\"".concat(e.name.replace(" ", "_"), "\">").concat(e.name, "</option>");
  });

  ctrl_proccess.innerHTML += rellenar;
} // export function get_process() {
//     let rellenar = "";
//     procesos.forEach(e => {
//         rellenar += `<option value="${e.code_name}">${e.nombre}</option>`;
//     })
//     ctrl_proccess.innerHTML += rellenar;
// }


var validate_potencia = document.querySelector("#potencia_olt");
var chng_icons = document.querySelector(".mdi_chng");

function calc_potencia(onu, olt) {
  var diff, vt;
  console.log(onu, olt);

  if (onu >= -25.5 && olt >= -30.0) {
    diff = onu < olt ? onu - olt : olt - onu;
    vt = diff <= 5.5 ? false : true;
  } else {
    diff = -30.0;
    vt = true;
  }

  return {
    "diferencia": diff,
    "require": vt
  };
}

PotenciaBox.querySelector("#potencia_olt").addEventListener("input", function (lis) {
  var onu = parseFloat(PotenciaBox.querySelector("#potencia_onu").value);
  var olt = parseFloat(lis.target.value);
  var val = calc_potencia(onu, olt);
  PotenciaBox.querySelector("#potencia_status").value = val.diferencia.toFixed(2);

  if (val.require) {
    chng_icons.classList.add("mdi-close-circle-outline");
    chng_icons.classList.remove("mdi-checkbox-marked-circle-outline");
  } else {
    chng_icons.classList.remove("mdi-close-circle-outline");
    chng_icons.classList.add("mdi-checkbox-marked-circle-outline");
  }

  console.log(val);
});

function get_campos() {
  var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "json";
  var toLocalStorage = "";
  document.querySelectorAll("input[type=text],#obs_cl").forEach(function (e) {
    if (format == "json") {
      toLocalStorage += "{\"".concat(e.name, "\":\"").concat(e.value, "\"}");
      toLocalStorage = toLocalStorage.replace("}{", ",");
    } else {
      toLocalStorage += "".concat(e.parentNode.innerText, ": ").concat(e.value, "/ ");
    }
  });
  toLocalStorage += "{\"createOn\":\"".concat(hora.getDate(), "/").concat(hora.getMonth() + 1, "/").concat(hora.getFullYear(), "T").concat(hora.getHours(), ":").concat(hora.getMinutes(), "\"}");
  toLocalStorage = toLocalStorage.replaceAll("}{", ",");
  return toLocalStorage;
}

ctrl_proccess.addEventListener("change", function (ele) {
  var elementoARellenar = "";

  _procesos.procesos.forEach(function (u) {
    // console.log(u)
    if (u.code_name === ele.target.value) {
      u.listado.forEach(function (i) {
        // console.log();
        elementoARellenar += "\n                    <div class=\"container__box-item\">\n                        <label for=\"".concat(i.id, "\">\n                            <input type=\"checkbox\" name=\"").concat(i.id, "\" id=\"").concat(i.id, "\"> ").concat(i.desc, "\n                        </label>\n                    </div>\n                    ");
      }); // console.log(elementoARellenar);

      ctrlBoxSecondary.innerHTML = elementoARellenar;
    }
  });
});

var buildCards = function buildCards(dni_cl, tkt_cl, nodo_serv, mac_serv, potencia_olt, potencia_onu, potencia_status, obs_cl, nombre_cl) {
  var cardBox = document.querySelector(".card.box");
  var initCard = document.createElement("div");
  var get_potencia = potencia_olt != "" || potencia_onu != "" ? "".concat(potencia_olt, "dBm / ").concat(potencia_onu, "dBm") : "Sin datos";
  var isDegradado = potencia_onu >= -25.5 && potencia_olt >= -30.0 ? potencia_onu - potencia_olt >= -5.5 ? 'no' : 'si ' : 'si';
  cardBox.appendChild(initCard);
  initCard.classList.add("card", "content");
  initCard.innerHTML += "\n    <div class=\"card tittle\">\n        <div class=\"name_cliente\">\n            <h4>".concat(nombre_cl, "</h4>\n        </div>\n        <div class=\"subname_cliente __flex\">\n            <div class=\"item\">").concat(dni_cl, "</div>\n            <div class=\"item\">").concat(tkt_cl, "</div>\n        </div>\n    </div>\n    <div class=\"card contenido __flex -column\">\n        <div class=\"item\">nodo: ").concat(nodo_serv, "</div>\n        <div class=\"item\">mac: ").concat(mac_serv, "</div>\n    <div class=\"item\">potencia:").concat(get_potencia, "</div>\n        <div class=\"item\">degradado: ").concat(isDegradado, " /  -").concat(potencia_status, "dBm</div>\n        <div class=\"item\">Observaciones: ").concat(obs_cl, "</div>\n    </div>\n    <div class=\"card footer __flex\">\n        <div class=\"item\">editar</div>\n    </div>\n     ");
};

exports.buildCards = buildCards;