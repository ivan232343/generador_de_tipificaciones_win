import { procesos } from '../dist/data/procesos.js';
let ctrl_proccess = document.querySelector("#ctrl_proccess");
let ctrlBoxSecondary = document.querySelector(".container__box-secundary");
console.log(procesos);
export function get_process() {
    let rellenar = "";
    procesos.forEach(e => {
        rellenar += `<option value="${e.code_name}">${e.nombre}</option>`;
    })
    ctrl_proccess.innerHTML += rellenar;
}

let validate_potencia = document.querySelector("#potencia_olt")
let chng_icons = document.querySelector(".mdi_chng")
validate_potencia.addEventListener("input", (i) => {
    let nums = i.target.value.split("/");
    let diff = 0;
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
export function get_campos(format = "json") {
    let toLocalStorage = "";
    document.querySelectorAll("input[type=text],#obs_cl").forEach(e => {
        if (format == "json") {
            toLocalStorage += `{"${e.name}":"${e.value}"}`
            toLocalStorage = toLocalStorage.replace("}{", ",")
        } else {
            toLocalStorage += `${e.parentNode.innerText}: ${e.value}/ `
        }
    })
    let hora = new Date();
    toLocalStorage += `{"createOn":"${hora.getDate()}/${hora.getMonth() + 1}/${hora.getFullYear()}T${hora.getHours()}:${hora.getMinutes()}"}`
    toLocalStorage = toLocalStorage.replaceAll("}{", ",")
    // toLocalStorage += `{"hora":"${hora.getDay()}-${hora.getMonth() + 1}-${hora.getFullYear()}"}`.replaceAll("}{", ",")
    return toLocalStorage;
}
ctrl_proccess.addEventListener("change", (ele) => {
    let elementoARellenar = "";

    procesos.forEach(u => {
        // console.log(u)
        if (u.code_name === ele.target.value) {
            u.listado.forEach(i => {
                // console.log();
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
        }
    })
})