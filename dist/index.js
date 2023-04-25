"use stric"
const request = new XMLHttpRequest();
let ctrl_proccess = document.querySelector("#ctrl_proccess"), retornar;
let ctrlBoxSecondary = document.querySelector(".container__box-secundary")
let formGetTipi = document.querySelector("#gen_tipi")
let global_params, validate_potencia;
get_process()
ctrl_proccess.addEventListener("change", (ele) => {
    let elementoARellenar = "";
    request.open("GET", "data/process.json", true);
    request.onload = (e) => {
        retornar = JSON.parse(e.target.response);
        // console.log(retornar.procesos);
        retornar.procesos.forEach(u => {
            // console.log(u)
            if (u.code_name === ele.target.value) {

                u.listado.forEach(i => {
                    elementoARellenar += `
                    <div class="container__box-item">
                        <label for="${i.id}">
                            <input type="checkbox" name="${i.id}" id="${i.id}"> ${i.desc}
                        </label>
                    </div>
                    `
                })
                // console.log(elementoARellenar);
                ctrlBoxSecondary.innerHTML = elementoARellenar
                validate_potencia = document.querySelector("#potencia_olt")
                chng_icons = document.querySelector(".mdi_chng")
                validate_potencia.addEventListener("input", (i) => {
                    let nums = i.target.value.split("/");
                    nums.onu = parseFloat(nums[0])
                    nums.olt = parseFloat(nums[1])
                    if (nums.onu >= -25.5 && nums.olt >= -30.0) {
                        if (nums.onu > nums.olt) {
                            diff = nums.onu - nums.olt
                        } else if (nums.onu < nums.olt) {
                            diff = nums.olt - nums.onu
                        }
                        console.log(diff)
                        if (diff <= 5.5) {
                            // if (chng_icons.classList.contains("mdi-close-circle-outline")) {
                            chng_icons.classList.remove("mdi-close-circle-outline")
                            chng_icons.classList.add("mdi-checkbox-marked-circle-outline")
                            // }
                            console.log(" no requiere visita")
                        } else {
                            chng_icons.classList.add("mdi-close-circle-outline")
                            chng_icons.classList.remove("mdi-checkbox-marked-circle-outline")
                            console.log(" require visita ")
                        }
                    }
                    else {
                        chng_icons.classList.add("mdi-close-circle-outline")
                        chng_icons.classList.remove("mdi-checkbox-marked-circle-outline")
                        console.log(" require visita ")
                    }
                })
            }
        });
    }
    request.send()
    // console.log("change", ele.target.value)
})

console.log(formGetTipi.childNodes)
document.querySelector("button[type=menu]").addEventListener("click", () => {
    document.querySelectorAll("input[type=text],textarea").forEach(e => { console.log(e.value) })
    document.querySelectorAll("input[type=checkbox]").forEach(e => {
        if (e.checked == true) {
            console.log(e.parentNode.innerText.replace(/\[.+?]/g, ""))
        }
    })
})