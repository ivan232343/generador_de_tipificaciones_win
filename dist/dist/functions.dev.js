"use strict";

// const request = new XMLHttpRequest();
function get_process() {
  request.open("GET", "data/process.json", true);

  request.onload = function (e) {
    retornar = JSON.parse(e.target.response);
    retornar.procesos.forEach(function (u) {
      option = document.createElement("option");
      option.value = u.code_name;
      option.text = u.nombre;
      ctrl_proccess.appendChild(option);
    });
  };

  request.send();
}