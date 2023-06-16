"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get_process = get_process;
exports.get_campos = get_campos;
exports.buildCards = void 0;

var _procesos = require("../dist/data/procesos.js");

var ctrl_proccess = document.querySelector("#ctrl_proccess");
var hora = new Date();
var ctrlBoxSecondary = document.querySelector(".container__box-secundary");

function get_process() {
  var rellenar = "";

  _procesos.procesos.forEach(function (e) {
    rellenar += "<option value=\"".concat(e.code_name, "\">").concat(e.nombre, "</option>");
  });

  ctrl_proccess.innerHTML += rellenar;
}

var validate_potencia = document.querySelector("#potencia_olt");
var chng_icons = document.querySelector(".mdi_chng");
validate_potencia.addEventListener("input", function (i) {
  var nums = i.target.value.split("/");
  var diff = 0;
  nums.onu = parseFloat(nums[0]);
  nums.olt = parseFloat(nums[1]);

  if (nums.onu >= -25.5 && nums.olt >= -30.0) {
    if (nums.onu > nums.olt) {
      diff = nums.onu - nums.olt;
    } else if (nums.onu < nums.olt) {
      diff = nums.olt - nums.onu;
    }

    console.log(diff);

    if (diff <= 5.5) {
      // if (chng_icons.classList.contains("mdi-close-circle-outline")) {
      chng_icons.classList.remove("mdi-close-circle-outline");
      chng_icons.classList.add("mdi-checkbox-marked-circle-outline"); // }

      console.log(" no requiere visita");
    } else {
      chng_icons.classList.add("mdi-close-circle-outline");
      chng_icons.classList.remove("mdi-checkbox-marked-circle-outline");
      console.log(" require visita ");
    }
  } else {
    chng_icons.classList.add("mdi-close-circle-outline");
    chng_icons.classList.remove("mdi-checkbox-marked-circle-outline");
    console.log(" require visita ");
  }
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

var buildCards = function buildCards(dni_cl, tkt_cl, nodo_serv, mac_serv, potencia_olt, pot_calc, obs_cl, nombre_cl) {
  var cardBox = document.querySelector(".card.box");
  var initCard = document.createElement("div");
  cardBox.appendChild(initCard);
  initCard.classList.add("card", "content");
  initCard.innerHTML += "\n    <div class=\"card tittle\">\n        <div class=\"name_cliente\">\n            <h4>".concat(nombre_cl, "</h4>\n        </div>\n        <div class=\"subname_cliente __flex\">\n            <div class=\"item\">").concat(dni_cl, "</div>\n            <div class=\"item\">").concat(tkt_cl, "</div>\n        </div>\n    </div>\n    <div class=\"card contenido __flex -column\">\n        <div class=\"item\">nodo: ").concat(nodo_serv, "</div>\n        <div class=\"item\">mac: ").concat(mac_serv, "</div>\n        <div class=\"item\">potencia: ").concat(potencia_olt, "</div>\n        <div class=\"item\">degradado: Si | No ").concat(pot_calc, "</div>\n        <div class=\"item\">Observaciones: ").concat(obs_cl, "</div>\n    </div>\n    <div class=\"card footer __flex\">\n        <div class=\"item\">boton 1</div>\n        <div class=\"item\">boton 2</div>\n        <div class=\"item\">boton 3</div>\n    </div>\n     ");
};

exports.buildCards = buildCards;