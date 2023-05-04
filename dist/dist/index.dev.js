"use strict";

var request = new XMLHttpRequest();
var ctrl_proccess = document.querySelector("#ctrl_proccess"),
    retornar;
var ctrlBoxSecondary = document.querySelector(".container__box-secundary");
var formGetTipi = document.querySelector("#gen_tipi");
var global_params;
var toLocalStorage = "";
get_process();
ctrl_proccess.addEventListener("change", function (ele) {
  var elementoARellenar = "";
  request.open("GET", "data/process.json", true);

  request.onload = function (e) {
    retornar = JSON.parse(e.target.response); // console.log(retornar.procesos);

    retornar.procesos.forEach(function (u) {
      // console.log(u)
      if (u.code_name === ele.target.value) {
        u.listado.forEach(function (i) {
          elementoARellenar += "\n                    <div class=\"container__box-item\">\n                        <label for=\"".concat(i.id, "\">\n                            <input type=\"checkbox\" name=\"").concat(i.id, "\" id=\"").concat(i.id, "\"> ").concat(i.desc, "\n                        </label>\n                    </div> \n                    ");
        }); // console.log(elementoARellenar);

        ctrlBoxSecondary.innerHTML = elementoARellenar;
      }
    });
  };

  request.send(); // console.log("change", ele.target.value)
});
console.log(formGetTipi.childNodes);
document.querySelector("a[type=menu]").addEventListener("click", function (e) {
  // e.preventDefault();
  var tipi_generada = "";
  document.querySelectorAll("input[type=text],#obs_cl").forEach(function (e) {
    // console.log(e.parentNode)
    tipi_generada += "".concat(e.parentNode.innerText, ": ").concat(e.value, "/ "); // console.log(e.name)

    toLocalStorage += "{\"".concat(e.name, "\":\"").concat(e.value, "\"}");
  });
  toLocalStorage = toLocalStorage.replaceAll("}{", ",");
  console.log(toLocalStorage);
  document.querySelectorAll("input[type=checkbox]").forEach(function (e) {
    if (e.checked == true) {
      tipi_generada += e.parentNode.innerText.replace(/\[.+?]/g, "") + " /";
    }
  }); // console.log(settingItem);

  var content = document.getElementById('copy_gen');
  content.innerHTML = tipi_generada;
  content.style.display = "block";
  content.focus();
  content.select();
  document.execCommand('copy');
  content.style.display = "none"; // navigator.clipboard.writeText(tipi_generada);
});
document.querySelector("button[type=reset]").addEventListener("click", function (e) {
  e.preventDefault();
  console.log(e);
});