"use strict";
"use stric";

var request = new XMLHttpRequest();
var ctrl_proccess = document.querySelector("#ctrl_proccess"),
    retornar;
var ctrlBoxSecondary = document.querySelector(".container__box-secundary");
var formGetTipi = document.querySelector("#gen_tipi");
var global_params, validate_potencia;
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
          elementoARellenar += "\n                    <div class=\"container__box-item\">\n                        <label for=\"".concat(i.id, "\">\n                            <input type=\"checkbox\" name=\"").concat(i.id, "\" id=\"").concat(i.id, "\"> ").concat(i.desc, "\n                        </label>\n                    </div>\n                    ");
        }); // console.log(elementoARellenar);

        ctrlBoxSecondary.innerHTML = elementoARellenar;
        validate_potencia = document.querySelector("#potencia_olt");
        chng_icons = document.querySelector(".mdi_chng");
        validate_potencia.addEventListener("input", function (i) {
          var nums = i.target.value.split("/");
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
      }
    });
  };

  request.send(); // console.log("change", ele.target.value)
});
console.log(formGetTipi.childNodes);
document.querySelector("button[type=menu]").addEventListener("click", function (e) {
  e.preventDefault();
  var tipi_generada = "";
  document.querySelectorAll("input[type=text],#obs_cl").forEach(function (e) {
    // console.log(e.parentNode)
    tipi_generada += "".concat(e.parentNode.innerText, ": ").concat(e.value, "/ ");
  });
  document.querySelectorAll("input[type=checkbox]").forEach(function (e) {
    if (e.checked == true) {
      tipi_generada += e.parentNode.innerText.replace(/\[.+?]/g, "") + " /";
    }
  });
  var content = document.getElementById('copy_gen');
  content.innerHTML = tipi_generada;
  content.style.display = "block";
  content.focus();
  content.select();
  document.execCommand('copy');
  content.style.display = "none"; // navigator.clipboard.writeText(tipi_generada);
});